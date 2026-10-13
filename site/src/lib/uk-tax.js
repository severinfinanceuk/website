// UK tax maths for the calculators on /resources/*-calculator/. Plain functions, no DOM, so the
// figures in the page copy can be checked with node. 2026-27 rates, checked on GOV.UK on
// 13 October 2026. Update RATES (and the rate tables in src/data/tool-pages/*.js) each April.
export const RATES = {
  year: '2026-27',
  pa: 12570, taperFrom: 100000,
  ruk: [[37700, 0.20], [125140, 0.40], [Infinity, 0.45]],                 // England, Wales, NI: taxable income
  sco: [[3967, 0.19], [16956, 0.20], [31092, 0.21], [62430, 0.42], [125140, 0.45], [Infinity, 0.48]],
  ni: { pt: 12570, uel: 50270, main: 0.08, upper: 0.02 },
  sl: { plan1: 26900, plan2: 29385, plan4: 33795, plan5: 25000, rate: 0.09, pg: 21000, pgRate: 0.06 },
  div: { allowance: 500, basic: 0.1075, higher: 0.3575, additional: 0.3935 },
  ct: { lower: 50000, upper: 250000, small: 0.19, main: 0.25, fraction: 3 / 200 },
};

// Personal allowance after the £1 for £2 taper over £100,000
export const allowance = (income) => Math.max(0, RATES.pa - Math.max(0, Math.floor((income - RATES.taperFrom) / 2)));

// Tax on taxable income (after the allowance) through a band table; returns total and per-band slices
export function bandTax(taxable, bands) {
  let prev = 0, total = 0;
  const parts = [];
  for (const [top, rate] of bands) {
    const slice = Math.max(0, Math.min(taxable, top) - prev);
    if (slice > 0) { parts.push({ rate, slice, tax: slice * rate }); total += slice * rate; }
    prev = top;
    if (taxable <= top) break;
  }
  return { total, parts };
}

export function employeeNI(pay) {
  const { pt, uel, main, upper } = RATES.ni;
  return Math.max(0, Math.min(pay, uel) - pt) * main + Math.max(0, pay - uel) * upper;
}

// Take-home pay for a year. pension: 'none' | 'sacrifice' (before tax and NI) | 'netpay' (before tax only)
export function takeHome({ salary, region = 'ruk', pension = 'none', pensionPct = 0, plan = 'none', pg = false }) {
  const pensionAmt = pension === 'none' ? 0 : salary * pensionPct / 100;
  const niPay = pension === 'sacrifice' ? salary - pensionAmt : salary;
  const taxPay = salary - pensionAmt;
  const pa = allowance(taxPay);
  const tax = bandTax(Math.max(0, taxPay - pa), region === 'sco' ? RATES.sco : RATES.ruk).total;
  const ni = employeeNI(niPay);
  // Student loans are worked out on earnings for NI purposes (after salary sacrifice)
  const slThreshold = RATES.sl[plan];
  const sl = slThreshold ? Math.floor(Math.max(0, niPay - slThreshold) * RATES.sl.rate) : 0;
  const pgl = pg ? Math.floor(Math.max(0, niPay - RATES.sl.pg) * RATES.sl.pgRate) : 0;
  const net = salary - pensionAmt - tax - ni - sl - pgl;
  return { salary, pension: pensionAmt, allowance: pa, tax, ni, sl, pgl, net };
}

// Dividend tax on top of other income (salary, pension, rental profit). England, Wales and NI bands
// apply to dividends wherever you live in the UK. Ignores savings income.
export function dividendTax({ other = 0, dividends = 0 }) {
  const { allowance: da, basic, higher, additional } = RATES.div;
  const pa = allowance(other + dividends);
  const otherTaxable = Math.max(0, other - pa);
  const paLeft = Math.max(0, pa - other);
  const divTaxable = Math.max(0, dividends - paLeft);
  // The £500 allowance still uses up band space, so it is taxed at 0% in the band it falls in
  const b1 = RATES.ruk[0][0], b2 = RATES.ruk[1][0];
  let start = otherTaxable, tax = 0, allowLeft = da;
  const parts = [];
  for (const [top, rate] of [[b1, basic], [b2, higher], [Infinity, additional]]) {
    const end = Math.min(otherTaxable + divTaxable, top);
    let slice = Math.max(0, end - start);
    if (slice > 0) {
      const free = Math.min(slice, allowLeft);
      allowLeft -= free;
      const taxed = slice - free;
      parts.push({ rate, slice: taxed, free, tax: taxed * rate });
      tax += taxed * rate;
    }
    start = Math.max(start, end);
  }
  return { pa, paUsedByDividends: Math.min(paLeft, dividends), tax, parts, net: dividends - tax };
}

// Corporation tax with marginal relief. profits = taxable total profits; exempt = exempt
// distributions from companies outside the group; associates = number of associated companies;
// days = length of the accounting period (365 for a full year).
export function corporationTax({ profits = 0, exempt = 0, associates = 0, days = 365 }) {
  const { lower: L, upper: U, small, main, fraction } = RATES.ct;
  const share = (days / 365) / (associates + 1);
  const lower = L * share, upper = U * share;
  const augmented = profits + exempt;
  let tax, relief = 0, band;
  if (augmented <= lower) { tax = profits * small; band = 'small'; }
  else if (augmented >= upper) { tax = profits * main; band = 'main'; }
  else {
    relief = fraction * (upper - augmented) * (augmented ? profits / augmented : 0);
    tax = profits * main - relief; band = 'marginal';
  }
  return { lower, upper, augmented, tax, relief, band, effective: profits ? tax / profits : 0 };
}

// VAT: add to or take out of an amount at a rate in per cent
export const vatAdd = (net, rate) => ({ net, vat: net * rate / 100, gross: net * (1 + rate / 100) });
export const vatRemove = (gross, rate) => ({ gross, net: gross / (1 + rate / 100), vat: gross - gross / (1 + rate / 100) });

// Flat Rate Scheme: limited cost business test. goods = VAT-inclusive spend on relevant goods.
export function limitedCost({ turnoverGross, goods, months = 12 }) {
  const minGoods = Math.max(turnoverGross * 0.02, 1000 * months / 12);
  return { limited: goods < minGoods, minGoods };
}

export const gbp = (n, dp = 0) => '£' + (Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp });
