// GET /api/booking/calendars: the calendars in the booking group (id, name, description).
import { groupCalendars, send } from '../_ghl.js';

export default async function handler(req, res) {
  try {
    send(res, 200, { calendars: await groupCalendars() });
  } catch (e) {
    console.error(e);
    send(res, 502, { error: 'Could not load the calendar.' });
  }
}
