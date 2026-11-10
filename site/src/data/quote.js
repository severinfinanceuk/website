// Instant quote ("Get an instant quote" pop-up on every page, and /instant-quote/): every price and rule.
// Used in three places: the form's options (QuoteForm.astro), the estimate shown in the browser, and
// /api/quote, which works the estimate out again for the note on the GoHighLevel contact.
//
// Monthly fees in pounds, before VAT. Two kinds of figure:
//   PUBLISHED  matches the comparator's public "from" prices (Severin asked for the same amounts).
//   ASSUMED    the comparator works these out on its server and does not publish them, so they are our
//              best guess. CONFIRM WITH SEVERIN before launch.

export const BUSINESS = [
  { id: 'SOLE_TRADER', label: 'Sole trader', base: 24.5 },                                       // PUBLISHED
  { id: 'LIMITED_COMPANY', label: 'Limited company', base: 39.5, people: 'director' },           // PUBLISHED
  { id: 'PARTNERSHIP', label: 'Partnership', base: 24.5, people: 'partner' },                    // PUBLISHED
  { id: 'LLP', label: 'LLP', base: 39.5, people: 'member' },                                     // PUBLISHED
];

// Turnover bands: £0 to £20,000, £20,001 to £90,000, £90,001 to £200,000, then £100,000 steps to £2m, then £2m+.
// uplift: added to the business type's base fee. ASSUMED: +£10 for band 1, +£25 for band 2, then +£15 a band.
const gbp = (n) => `£${n.toLocaleString('en-GB')}`;
const edges = [[0, 20000], [20001, 90000], [90001, 200000]];
for (let i = 2; i < 20; i++) edges.push([i * 100000 + 1, (i + 1) * 100000]);
export const BANDS = [
  ...edges.map(([lo, hi], i) => ({ label: `${gbp(lo)} to ${gbp(hi)}`, uplift: i < 2 ? i * 10 : 25 + (i - 2) * 15 })),
  { label: '£2,000,000+', tailored: true },   // no price: we prepare a tailored quote
];

export const PRICES = {
  selfAssessmentFirstTwo: 10,   // PUBLISHED: £10 a month covers the first 2 directors (or LLP members)
  selfAssessmentEach: 10,       // PUBLISHED: each further director, and each partner in a partnership
  mtd: 35,                      // PUBLISHED: MTD Income Tax quarterly updates (sole traders)
  vat: 35,                      // PUBLISHED as "from £35". ASSUMED flat for every turnover band
  payroll: 24,                  // PUBLISHED: first 4 payslips a month
  payrollIncluded: 4,
  payrollExtra: 3,              // ASSUMED: each payslip a month after the first 4
  pension: 30,                  // PUBLISHED: first 2 employees
  pensionIncluded: 2,
  pensionExtra: 6,              // PUBLISHED: each further employee
  bookkeeping: 20,              // PUBLISHED: up to 40 transactions a month
  bookkeepingBlock: 40,
  bookkeepingExtra: 10,         // ASSUMED: each further 40 transactions a month
  dormant: 10,                  // PUBLISHED: dormant company (replaces the accounts package)
  notTrading: 20,               // ASSUMED: company with no income, only bank charges or accountancy fees
  formation: 0,                 // PUBLISHED: company formation free (Companies House fee is extra)
};

// New client discount shown in the breakdown (site copy: "10% off their first year"). 0 turns it off.
export const DISCOUNT = { rate: 0.1, label: 'New client discount (10%, first year)' };

// "Those transactions seem high" check, by turnover band (bands 6 and up never ask).
export const TX_WARN = [200, 400, 500, 600, 700, 800];

export const PAYROLL_LTD = [['NO', 'No'], ['DIRECTORS', 'Directors only'], ['EMPLOYEES', 'Employees only'], ['BOTH', 'Directors and employees']];
export const FREQ = [['WEEKLY', 'Weekly'], ['FORTNIGHTLY', 'Fortnightly'], ['MONTHLY', 'Monthly']];
const RUNS = { WEEKLY: 52 / 12, FORTNIGHTLY: 26 / 12, MONTHLY: 1 };   // pay runs a month

export const money = (n) => `£${n.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const int = (v, max) => Math.min(max, Math.max(0, Math.floor(Number(v)) || 0));

// a: answers from the form (see collect() in QuoteForm.astro). Returns the lines of the breakdown and the total.
export function estimate(a) {
  const type = BUSINESS.find((b) => b.id === a.type);
  if (!type) return null;
  const company = type.id === 'LIMITED_COMPANY' || type.id === 'LLP';
  const dormant = company && !!a.dormant;
  const notTrading = company && !dormant && !!a.notTrading;
  const band = BANDS[a.band];
  const lines = [];
  const add = (label, amount, detail = '') => lines.push({ label, detail, amount });

  if (dormant) add('Dormant company', PRICES.dormant);
  else if (notTrading) add('Non-trading company', PRICES.notTrading);
  else {
    if (!band) return null;
    if (band.tailored) return { tailored: true, lines: [], subtotal: 0, discount: 0, total: 0 };
    add('Accounts package', type.base + band.uplift, `${band.label} turnover`);

    const sa = int(a.selfAssessments, 10);
    if (type.people && sa > 0) {
      const fee = type.id === 'PARTNERSHIP'
        ? sa * PRICES.selfAssessmentEach
        : PRICES.selfAssessmentFirstTwo + Math.max(0, sa - 2) * PRICES.selfAssessmentEach;
      add(`${type.people[0].toUpperCase()}${type.people.slice(1)} self assessment`, fee, `x ${sa}`);
    }
    if (type.id === 'SOLE_TRADER' && a.band > 0 && a.mtd) add('MTD quarterly updates', PRICES.mtd);
    if (a.vat) add('VAT returns', PRICES.vat);

    let slips = 0, employees = 0;
    if (type.id === 'LIMITED_COMPANY') {
      if (a.payroll === 'DIRECTORS' || a.payroll === 'BOTH') slips += int(a.directors, 50);
      if (a.payroll === 'EMPLOYEES' || a.payroll === 'BOTH') {
        employees = int(a.employees, 500);
        slips += Math.ceil(employees * (RUNS[a.payFreq] || 1));
      }
    } else if (RUNS[a.payroll]) {
      employees = int(a.employees, 500);
      slips = Math.ceil(employees * RUNS[a.payroll]);
    }
    if (slips > 0) add('Payroll', PRICES.payroll + Math.max(0, slips - PRICES.payrollIncluded) * PRICES.payrollExtra, `${slips} payslips a month`);
    const enrolled = Math.min(int(a.enrolled, 500), employees);
    if (a.pension && enrolled > 0) add('Pension scheme', PRICES.pension + Math.max(0, enrolled - PRICES.pensionIncluded) * PRICES.pensionExtra, `${enrolled} employees`);

    const tx = int(a.transactions, 500);
    if (a.bookkeeping && tx > 0) add('Bookkeeping', PRICES.bookkeeping + (Math.ceil(tx / PRICES.bookkeepingBlock) - 1) * PRICES.bookkeepingExtra, `${tx} transactions a month`);
  }
  if (type.id === 'LIMITED_COMPANY' && a.formation && !dormant && !notTrading) add('Company formation', PRICES.formation, 'Companies House fee extra');

  const subtotal = lines.reduce((s, l) => s + l.amount, 0);
  const discount = Math.round(subtotal * DISCOUNT.rate * 100) / 100;
  return { tailored: false, lines, subtotal, discount, total: subtotal - discount };
}
