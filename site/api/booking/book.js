// POST /api/booking/book: creates (or updates) the contact in GHL, then books the appointment.
// Body: { calendarId, slot, tz, firstName, lastName, email, phone, message, source, website }
// "website" is a honeypot: people never see it, so a value means a bot.
import { ghl, config, groupCalendars, validTz, guard, send } from '../_ghl.js';

const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only.' });
  if (!guard(res)) return;
  const b = typeof req.body === 'object' && req.body ? req.body : {};
  if (b.website) return send(res, 200, { ok: true });

  const firstName = clean(b.firstName, 60);
  const lastName = clean(b.lastName, 60);
  const email = clean(b.email, 120).toLowerCase();
  const phone = clean(b.phone, 30);
  const message = String(b.message ?? '').trim().slice(0, 2000);
  const slot = clean(b.slot, 40);
  const tz = validTz(clean(b.tz, 60));
  const source = clean(b.source, 200);

  if (!firstName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return send(res, 400, { error: 'Please give your name and a valid email address.' });
  if (Number.isNaN(Date.parse(slot)) || Date.parse(slot) < Date.now()) return send(res, 400, { error: 'Please pick a time again.' });

  try {
    const calendar = (await groupCalendars()).find((c) => c.id === b.calendarId);
    if (!calendar) return send(res, 400, { error: 'Unknown calendar.' });
    const { locationId } = config();

    const { contact } = await ghl('/contacts/upsert', {
      method: 'POST', version: '2021-07-28',
      body: {
        locationId, firstName, lastName, email, ...(phone && { phone }), timezone: tz,
        source: 'Website booking', tags: ['website booking'],
      },
    });

    // GHL checks the slot is still free (the default), so a double booking fails here.
    const appt = await ghl('/calendars/events/appointments', {
      method: 'POST',
      body: {
        calendarId: calendar.id, locationId, contactId: contact.id, startTime: slot,
        title: `Free consultation: ${firstName} ${lastName}`.trim(),
        appointmentStatus: 'confirmed', toNotify: true,
      },
    });

    if (message || source) {
      await ghl(`/contacts/${contact.id}/notes`, {
        method: 'POST', version: '2021-07-28',
        body: { body: [`Booked online: ${calendar.name}, ${slot} (${tz})`, source && `Page: ${source}`, message && `Message: ${message}`].filter(Boolean).join('\n') },
      }).catch((e) => console.error('note failed', e));
    }

    send(res, 200, { ok: true, id: appt.id ?? appt.appointment?.id ?? null, startTime: slot });
  } catch (e) {
    console.error(e);
    const taken = e.status === 400 || e.status === 409 || e.status === 422;
    send(res, taken ? 409 : 502, {
      error: taken ? 'We could not book that time. It may have just been taken: please pick another.' : 'Booking failed. Please call or email us.',
    });
  }
}
