// POST /api/quote/: saves an instant-quote visitor as a GoHighLevel contact (tag "website quote"),
// with every answer and the estimate in a note. The browser shows the estimate without waiting for this.
// The estimate is worked out again here from the answers (same rules as the form), so the note is right
// even if the page was tampered with. "website" is a honeypot: a value means a bot.
import { ghl, config, guard, send } from './_ghl.js';
import { BUSINESS, BANDS, DISCOUNT, estimate, money } from '../src/data/quote.js';

const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
const yes = (v) => v === true || v === 'true';
const num = (v) => Math.max(0, Math.floor(Number(v)) || 0);

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'POST only.' });
  if (!guard(res)) return;
  const b = typeof req.body === 'object' && req.body ? req.body : {};
  if (b.website) return send(res, 200, { ok: true });

  const name = clean(b.name, 120);
  const email = clean(b.email, 120).toLowerCase();
  const phone = clean(b.phone, 30);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return send(res, 400, { error: 'Please give your name and a valid email address.' });
  const [firstName, ...rest] = name.split(/\s+/);

  const a = {
    type: clean(b.type, 20), selfAssessments: num(b.selfAssessments),
    dormant: yes(b.dormant), notTrading: yes(b.notTrading), formation: yes(b.formation),
    band: Number.isInteger(b.band) ? b.band : -1,
    mtd: yes(b.mtd), vat: yes(b.vat), payroll: clean(b.payroll, 20), payFreq: clean(b.payFreq, 20),
    directors: num(b.directors), employees: num(b.employees), pension: yes(b.pension), enrolled: num(b.enrolled),
    bookkeeping: yes(b.bookkeeping), transactions: num(b.transactions),
  };
  const est = estimate(a);
  const type = BUSINESS.find((t) => t.id === a.type);
  if (!est || !type) return send(res, 400, { error: 'Please complete the form.' });

  const yn = (v) => (v ? 'Yes' : 'No');
  const answers = [
    `Business type: ${type.label}`,
    type.people && `${type.people[0].toUpperCase()}${type.people.slice(1)}s needing self assessment: ${a.selfAssessments}`,
    a.dormant && 'Company will be dormant',
    a.notTrading && 'Company will not be trading',
    a.formation && 'Wants us to form the company',
    BANDS[a.band] && `Turnover: ${BANDS[a.band].label}`,
    type.id === 'SOLE_TRADER' && `MTD quarterly updates: ${yn(a.mtd)}`,
    `VAT returns: ${yn(a.vat)}`,
    `Payroll: ${a.payroll || 'NO'}${a.payFreq && a.payFreq !== a.payroll ? `, paid ${a.payFreq}` : ''}`,
    a.directors && `Directors on payroll: ${a.directors}`,
    a.employees && `Employees: ${a.employees}`,
    a.employees && `Pension scheme: ${yn(a.pension)}${a.pension ? `, ${a.enrolled} enrolled` : ''}`,
    `Bookkeeping: ${yn(a.bookkeeping)}${a.bookkeeping ? `, ${a.transactions} transactions a month` : ''}`,
  ].filter(Boolean);
  const quote = est.tailored
    ? ['Estimate: turnover over £2m, tailored quote needed']
    : [
      `Estimate: ${money(est.total)} a month (${money(est.total * 12)} a year), plus VAT`,
      ...est.lines.map((l) => `  ${l.label}${l.detail ? ` (${l.detail})` : ''}: ${l.amount ? money(l.amount) : 'Free'}`),
      est.discount && `  ${DISCOUNT.label}: -${money(est.discount)}`,
    ].filter(Boolean);

  try {
    const { locationId } = config();
    const { contact } = await ghl('/contacts/upsert', {
      method: 'POST', version: '2021-07-28',
      body: {
        locationId, firstName, lastName: rest.join(' '), email, ...(phone && { phone }),
        source: 'Website instant quote', tags: ['website quote'],
      },
    });
    await ghl(`/contacts/${contact.id}/notes`, {
      method: 'POST', version: '2021-07-28',
      body: { body: ['Instant quote from the website', ...answers, '', ...quote, '', `Page: ${clean(b.source, 200) || '/'}`].join('\n') },
    }).catch((e) => console.error('note failed', e));
    send(res, 200, { ok: true });
  } catch (e) {
    console.error(e);
    send(res, 502, { error: 'Could not save the quote.' });
  }
}
