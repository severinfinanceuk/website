// Dividend tax calculator 2026-27: /resources/dividend-tax-calculator/.
// Page: src/pages/resources/dividend-tax-calculator.astro. Maths: src/lib/uk-tax.js (dividendTax).
// Checked on GOV.UK on 13 October 2026 (Tax on dividends; Income Tax rates and allowances).
export default {
  url: '/resources/dividend-tax-calculator/',
  title: 'Dividend Tax Calculator 2026-27 | Severin Finance',
  description: 'Work out 2026-27 dividend tax on top of your salary: the £500 allowance and the 10.75%, 35.75% and 39.35% rates. Free consultation.',
  eyebrow: 'Calculator',
  h1: 'Dividend tax calculator 2026-27',
  crumb: 'Dividend tax calculator',
  summary: 'Dividend tax on top of a salary or other income, with the 2026-27 rates and the £500 allowance.',
  app: true,
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  hero: {
    answer: 'Enter your salary or other income and the dividends you take to see your 2026-27 dividend tax. The first £500 of dividends is tax-free, then rates are 10.75%, 35.75% and 39.35%. A director with a £12,570 salary and £50,000 of dividends pays about £8,396 in dividend tax.',
  },
  service: {
    href: '/uk/accounting/limited-company-accountant/', label: 'Our limited company accounting',
    boxTitle: 'Paying yourself from a company?', text: 'We plan the salary, dividend and pension mix each year, run the payroll and file your company and personal returns.',
  },
  sections: [
    {
      id: 'how', h2: 'How is dividend tax worked out?',
      body: [
        '<p>Dividends are taxed after your other income. Your salary, pension and rental profit use up your personal allowance and tax bands first; dividends sit on top. The calculator then applies the 2026-27 rules:</p>',
        '<ul><li>Any personal allowance your other income has not used covers dividends first, tax-free.</li><li>The next £500 of dividends is covered by the dividend allowance. It is taxed at 0% but still uses up space in your tax band.</li><li>The rest is taxed at 10.75% in the basic rate band, 35.75% in the higher rate band and 39.35% above £125,140.</li><li>The personal allowance falls by £1 for every £2 of total income over £100,000, dividends included.</li></ul>',
        '<p>Dividend tax is the same across the UK. Scottish income tax rates apply only to your salary and other non-savings income, which this calculator does not tax. For the bigger question of how to split your pay, read <a href="/resources/salary-vs-dividends/">salary vs dividends</a> and <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how to pay yourself from a limited company</a>.</p>',
      ],
    },
    {
      id: 'rates', h2: 'What are the dividend tax rates for 2026-27?',
      body: [
        { caption: 'Dividend tax 2026-27', head: ['Band', 'Dividend tax rate'], rows: [
          ['Dividend allowance: first £500', '0%'],
          ['Basic rate band', '10.75%'],
          ['Higher rate band', '35.75%'],
          ['Additional rate band (over £125,140)', '39.35%'],
        ], after: 'The basic and higher rates rose by 2 percentage points from 6 April 2026. Source: GOV.UK, Tax on dividends.' },
        '<p>You report dividends over £500 on a Self Assessment return, or, if they are under £10,000, you can ask HMRC to collect the tax through your tax code. Tax is due by 31 January after the end of the tax year. See our guide to <a href="/resources/dividend-tax-rates/">dividend tax rates</a> for worked examples.</p>',
      ],
    },
    {
      id: 'company', h2: 'What about the company side?',
      body: [
        '<p>Dividends are paid out of profits that have already had corporation tax taken off, at 19% to 25%. A company can only pay a dividend if it has enough retained profits, and it should have board minutes and a dividend voucher for each one. Salary, by contrast, is a business expense that reduces corporation tax but costs employee and employer National Insurance.</p>',
        '<p>Use our <a href="/resources/marginal-relief-calculator/">marginal relief calculator</a> for the company tax figure and the <a href="/resources/take-home-pay-calculator/">take-home pay calculator</a> for the salary side.</p>',
      ],
    },
  ],
  faqs: [
    { q: 'How much dividend can I take tax-free in 2026-27?', a: 'With no other income, up to £13,070: the £12,570 personal allowance plus the £500 dividend allowance. If your salary already uses the personal allowance, only the £500 allowance is tax-free.' },
    { q: 'Do I pay National Insurance on dividends?', a: 'No. Dividends do not attract employee or employer National Insurance, which is one reason many directors take a small salary and the rest as dividends.' },
    { q: 'Do Scottish taxpayers pay different dividend tax?', a: 'No. Dividend tax rates and bands are the same across the UK. Scottish rates apply to your salary and other non-savings income only.' },
    { q: 'When is dividend tax paid?', a: 'Through Self Assessment, by 31 January after the end of the tax year. For dividends taken in 2026-27, that is 31 January 2028, and payments on account may also apply.' },
  ],
  sources: [
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past', 'GOV.UK: Income Tax rates and allowances'],
    ['https://www.gov.uk/income-tax-rates/income-over-100000', 'GOV.UK: Income over £100,000'],
  ],
};
