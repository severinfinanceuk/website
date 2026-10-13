// Corporation tax marginal relief calculator: /resources/marginal-relief-calculator/.
// Page: src/pages/resources/marginal-relief-calculator.astro. Maths: src/lib/uk-tax.js (corporationTax).
// Checked on GOV.UK on 13 October 2026 (Corporation Tax rates and allowances; Marginal Relief guidance).
export default {
  url: '/resources/marginal-relief-calculator/',
  title: 'Corporation Tax Marginal Relief Calculator | Severin Finance',
  description: 'Work out corporation tax and Marginal Relief for profits between £50,000 and £250,000, with associated companies and short periods. Free consultation.',
  eyebrow: 'Calculator',
  h1: 'Corporation tax marginal relief calculator',
  crumb: 'Marginal relief calculator',
  summary: 'Corporation tax for profits between £50,000 and £250,000, with associated companies and short periods.',
  app: true,
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  hero: {
    answer: 'Companies with profits between £50,000 and £250,000 pay the 25% main rate, reduced by Marginal Relief. Enter your taxable profits, any exempt distributions, your number of associated companies and the length of your accounting period. On £100,000 of profit for a full year, corporation tax is £22,750, an effective rate of 22.75%.',
  },
  service: {
    href: '/uk/tax/corporation-tax-accountant/', label: 'Our corporation tax service',
    boxTitle: 'Want it filed for you?', text: 'We prepare your company tax return (CT600) and computations, and check every relief, from Marginal Relief to capital allowances.',
  },
  sections: [
    {
      id: 'how', h2: 'How does Marginal Relief work?',
      body: [
        '<p>Corporation tax has two rates. Profits of £50,000 or less pay the small profits rate of 19%. Profits of £250,000 or more pay the main rate of 25%. In between, the company works out tax at 25% and then deducts Marginal Relief, so the effective rate rises gradually from 19% to 25%.</p>',
        '<p>The formula HMRC uses is:</p>',
        '<blockquote><p>Marginal Relief = 3/200 × (upper limit − augmented profits) × (taxable profits ÷ augmented profits)</p></blockquote>',
        '<p><strong>Augmented profits</strong> are your taxable total profits plus exempt distributions (mainly dividends) received from companies that are not in the same group. For most small companies, augmented profits and taxable profits are the same.</p>',
        '<p>Between £50,000 and £250,000, each extra £1 of profit is taxed at an effective 26.5%, which matters when you plan <a href="/resources/salary-vs-dividends/">salary vs dividends</a> or the timing of pension contributions. See our guide to <a href="/resources/corporation-tax-rates/">corporation tax rates</a> for the full picture.</p>',
      ],
    },
    {
      id: 'limits', h2: 'How do associated companies and short periods change the limits?',
      body: [
        '<p>The £50,000 and £250,000 limits are shared. Divide them by the number of associated companies plus one. A company with one associated company has limits of £25,000 and £125,000. Companies are associated if one controls the other, or both are under the control of the same person or group of persons. Dormant companies, and in most cases passive holding companies, are not counted.</p>',
        '<p>For an accounting period shorter than 12 months, the limits are reduced in proportion. A 6-month period (182 or 183 days) has roughly half the limits. Enter the number of days in the period and the calculator does the rest.</p>',
        { caption: 'Corporation tax limits 2026-27', head: ['Associated companies', 'Lower limit', 'Upper limit'], rows: [
          ['None', '£50,000', '£250,000'],
          ['1', '£25,000', '£125,000'],
          ['2', '£16,667', '£83,333'],
          ['3', '£12,500', '£62,500'],
        ], after: 'For a 12-month accounting period. Source: GOV.UK, Marginal Relief for Corporation Tax.' },
      ],
    },
    {
      id: 'examples', h2: 'What does a company pay at different profit levels?',
      body: [
        { caption: 'Corporation tax for a 12-month period, no associated companies', head: ['Taxable profits', 'Corporation tax', 'Effective rate'], rows: [
          ['£50,000', '£9,500', '19%'],
          ['£75,000', '£16,125', '21.5%'],
          ['£100,000', '£22,750', '22.75%'],
          ['£150,000', '£36,000', '24%'],
          ['£250,000', '£62,500', '25%'],
        ], after: 'Assumes no exempt distributions.' },
        '<p>Marginal Relief is not available to close investment holding companies or to companies that are not resident in the UK, which pay 25% on all profits. Ring-fenced oil and gas profits have their own rates. If your company is in one of these groups, or you are unsure who counts as associated, speak to us before you file.</p>',
      ],
    },
  ],
  faqs: [
    { q: 'Do I need to claim Marginal Relief?', a: 'You claim it on the company tax return (CT600). Commercial software and HMRC\'s online service work it out once you enter your profits and the number of associated companies, so the key is giving the right figures.' },
    { q: 'What is the marginal rate of corporation tax?', a: 'Between £50,000 and £250,000 of profit, each extra pound is taxed at an effective 26.5%. That is why bringing forward allowable spending or pension contributions can save more in this band than elsewhere.' },
    { q: 'Are dividends I receive part of augmented profits?', a: 'Exempt dividends from companies outside your group count towards augmented profits. They are not taxed themselves, but they can push you up the band and cut your Marginal Relief. Dividends from a 51% group company are left out.' },
    { q: 'What if my accounting period is longer than 12 months?', a: 'A company tax return cannot cover more than 12 months. A longer period of accounts is split into two accounting periods: the first 12 months and the rest. Each one has its own limits and return.' },
  ],
  sources: [
    ['https://www.gov.uk/guidance/corporation-tax-marginal-relief', 'GOV.UK: Marginal Relief for Corporation Tax'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-corporation-tax/rates-and-allowances-corporation-tax', 'GOV.UK: Rates and allowances: Corporation Tax'],
    ['https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm03900', 'HMRC Company Taxation Manual: small profits rate and Marginal Relief'],
  ],
};
