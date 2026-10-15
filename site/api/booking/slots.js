// GET /api/booking/slots?calendarId=...&tz=Europe/London&days=30
// Free times for one calendar from today, as { calendarId, days: [{ date, slots: [iso, ...] }] }.
// Without calendarId it uses the group's first (default) calendar, so the page can ask for
// calendars and free times at the same time.
import { ghl, groupCalendars, validTz, guard, send } from '../_ghl.js';

export default async function handler(req, res) {
  if (!guard(res)) return;
  const { tz = '', days = '30' } = req.query;
  try {
    const calendars = await groupCalendars();
    const calendarId = req.query.calendarId || calendars[0]?.id;
    if (!calendars.some((c) => c.id === calendarId)) return send(res, 400, { error: 'Unknown calendar.' });
    const span = Math.min(Math.max(parseInt(days, 10) || 30, 1), 30);   // GHL allows 31 days per call
    const start = Date.now();
    const q = new URLSearchParams({
      startDate: String(start), endDate: String(start + span * 86_400_000), timezone: validTz(tz),
    });
    const data = await ghl(`/calendars/${encodeURIComponent(calendarId)}/free-slots?${q}`);
    const out = Object.entries(data)
      .filter(([date, v]) => /^\d{4}-\d{2}-\d{2}$/.test(date) && v?.slots?.length)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, v]) => ({ date, slots: v.slots }));
    send(res, 200, { calendarId, days: out });
  } catch (e) {
    console.error(e);
    send(res, 502, { error: 'Could not load free times.' });
  }
}
