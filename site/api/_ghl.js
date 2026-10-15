// Shared GoHighLevel (LeadConnector) client for the booking functions in /api.
// Runs on Vercel only: the Private Integration Token never reaches the browser.
// Files starting with _ are not deployed as functions.
//
// Environment variables (Vercel > Project > Settings > Environment Variables):
//   GHL_TOKEN        Private Integration Token (pit-...). Scopes: calendars.readonly,
//                    calendars/events.write, contacts.write
//   GHL_LOCATION_ID  sub-account (location) ID
//   GHL_GROUP_ID     calendar group whose calendars are offered on /contact/

const API = 'https://services.leadconnectorhq.com';

export const config = () => ({
  token: process.env.GHL_TOKEN,
  locationId: process.env.GHL_LOCATION_ID,
  groupId: process.env.GHL_GROUP_ID,
});

export async function ghl(path, { method = 'GET', body, version = '2021-04-15' } = {}) {
  const res = await fetch(API + path, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.GHL_TOKEN}`,
      Version: version,
      Accept: 'application/json',
      ...(body && { 'Content-Type': 'application/json' }),
    },
    body: body && JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(`GHL ${method} ${path.split('?')[0]} ${res.status}: ${JSON.stringify(data).slice(0, 300)}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

// Active calendars in the configured group, cached for 5 minutes per warm instance.
let cache = { at: 0, list: null };
export async function groupCalendars() {
  if (cache.list && Date.now() - cache.at < 300_000) return cache.list;
  const { locationId, groupId } = config();
  const q = new URLSearchParams({ locationId, ...(groupId && { groupId }) });
  const { calendars = [] } = await ghl(`/calendars/?${q}`);
  const list = calendars
    .filter((c) => c.isActive !== false && (!groupId || c.groupId === groupId))
    .map((c) => ({ id: c.id, name: c.name, description: c.description || '' }));
  cache = { at: Date.now(), list };
  return list;
}

export const validTz = (tz) => {
  try { Intl.DateTimeFormat('en-GB', { timeZone: tz }); return tz; } catch { return 'Europe/London'; }
};

export function send(res, status, data) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(data);
}

export function guard(res) {
  const { token, locationId } = config();
  if (token && locationId) return true;
  send(res, 503, { error: 'Online booking is not set up yet.' });
  return false;
}
