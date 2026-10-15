// Guide: /resources/corporation-tax-rates/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and the HMRC Company Taxation Manual on 13 October 2026 (sources below).
// Re-check each April and after each Budget.
export default {
  url: '/resources/corporation-tax-rates/',
  section: 'tax',
  title: 'Corporation Tax Rates 2026-27 | Severin Finance',
  description: 'Corporation tax rates from 1 April 2026: 19% up to £50,000, 25% over £250,000, Marginal Relief in between, plus payment dates. Free consultation.',
  h1: 'Corporation tax rates for 2026-27',
  crumb: 'Corporation tax rates',
  summary: '19% on profits up to £50,000, 25% over £250,000, with Marginal Relief in between.',
  topic: 'UK corporation tax rates and Marginal Relief',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/corporation-tax-accountant/', label: 'Our corporation tax service',
    boxTitle: 'Want the bill worked out?', text: 'We prepare your CT600, claim the reliefs that apply and tell you what to pay and by when.',
  },

  hero: {
    answer: 'For the financial year starting 1 April 2026, companies pay 19% corporation tax on profits of £50,000 or less and 25% on profits over £250,000. Between the two, the 25% rate is reduced by Marginal Relief, so the bill rises gradually. The limits are shared between associated companies and cut for short accounting periods.',
  },

  tldr: [
    '<strong>19%</strong> small profits rate on profits up to <strong>£50,000</strong>.',
    '<strong>25%</strong> main rate on profits over <strong>£250,000</strong>.',
    'Profits in between pay 25% less Marginal Relief, an effective <strong>26.5%</strong> on each extra pound in the band.',
    'Pay <strong>9 months and 1 day</strong> after the period ends. File the CT600 within <strong>12 months</strong>.',
    'The rates have been the same since 1 April 2023.',
  ],

  sections: [
    {
      id: 'rates', h2: 'What are the corporation tax rates for 2026-27?', toc: 'The rates',
      body: [
        '<p>From 1 April 2026 the small profits rate is 19% and the main rate is 25%, with Marginal Relief for profits between £50,000 and £250,000. These are the same rates that have applied since 1 April 2023. If you would like the figures worked out for your company, our <a href="/uk/tax/corporation-tax-accountant/">corporation tax accountants</a> prepare the return and show you the bill before anything is filed.</p>',
        { caption: 'Corporation tax rates by financial year', head: ['Financial year', 'Profits up to £50,000', 'Profits £50,000 to £250,000', 'Profits over £250,000'], rows: [
          ['2026 (from 1 April 2026)', '19%', '25% less Marginal Relief', '25%'],
          ['2025 (from 1 April 2025)', '19%', '25% less Marginal Relief', '25%'],
          ['2024 (from 1 April 2024)', '19%', '25% less Marginal Relief', '25%'],
          ['2023 (from 1 April 2023)', '19%', '25% less Marginal Relief', '25%'],
        ], after: 'Source: GOV.UK, Rates and allowances: Corporation Tax. Checked 13 October 2026. Ring fence profits from oil extraction have different rates.' },
        '<p>Corporation tax uses financial years that run from 1 April to 31 March, not the personal tax year. You pay the rates in force during your own accounting period, whatever date your year ends.</p>',
      ],
    },
    {
      id: 'marginal-relief', h2: 'How does Marginal Relief work?', toc: 'Marginal Relief',
      body: [
        '<p>Marginal Relief reduces the 25% charge for companies with profits between £50,000 and £250,000, so the tax rises smoothly instead of jumping from 19% to 25%. HMRC\'s formula is:</p>',
        '<blockquote><p>Marginal Relief = 3/200 x (£250,000 minus augmented profits) x (taxable profits divided by augmented profits)</p></blockquote>',
        '<p>Augmented profits are your taxable profits plus certain dividends received from companies outside your group. For most small companies the two figures are the same, so the last part of the formula is 1.</p>',
        { caption: 'Illustrative corporation tax bills for a 12-month period, no associated companies', head: ['Taxable profits', 'Tax at 25%', 'Marginal Relief', 'Tax to pay', 'Average rate'], rows: [
          ['£50,000', 'n/a', 'n/a', '£9,500', '19%'],
          ['£100,000', '£25,000', '£2,250', '£22,750', '22.75%'],
          ['£150,000', '£37,500', '£1,500', '£36,000', '24%'],
          ['£250,000', '£62,500', '£0', '£62,500', '25%'],
        ], after: 'Illustrative figures, assuming taxable profits equal augmented profits.' },
        '<p>Notice the jump from £50,000 to £100,000: the extra £50,000 of profit costs £13,250 in tax, which is 26.5%. That marginal rate applies to every pound inside the band, and it is why timing pension contributions or equipment purchases can matter. Try your own figures in our <a href="/resources/marginal-relief-calculator/">Marginal Relief calculator</a>, or HMRC\'s own <a href="https://www.tax.service.gov.uk/marginal-relief-calculator">Marginal Relief calculator</a>.</p>',
        '<p>Close investment holding companies cannot claim Marginal Relief, and neither can companies that are not UK resident.</p>',
      ],
    },
    {
      id: 'associated', h2: 'How do associated companies change the limits?', toc: 'Associated companies',
      body: [
        '<p>The £50,000 and £250,000 limits are divided by the number of associated companies plus one. A company is associated with another if one controls the other, or both are controlled by the same person or group of people.</p>',
        { caption: 'Limits with associated companies (12-month period)', head: ['Associated companies', 'Lower limit', 'Upper limit'], rows: [
          ['None', '£50,000', '£250,000'],
          ['1', '£25,000', '£125,000'],
          ['2', '£16,667', '£83,333'],
          ['3', '£12,500', '£62,500'],
        ], after: 'Source: GOV.UK, Marginal Relief for Corporation Tax, and HMRC Company Taxation Manual CTM03940.' },
        '<p>A company counts if it was associated at any point in the accounting period, wherever it is tax resident. A company that carried on no trade or business at all in the period is ignored. Control is tested broadly, using the close company rules, and in some cases rights held by relatives or business partners are counted too. A family or a group of investors with several companies should check the position each year.</p>',
      ],
    },
    {
      id: 'short-periods', h2: 'What if your accounting period is shorter than 12 months?', toc: 'Short periods',
      body: [
        '<p>The limits are reduced in proportion to the length of the period. For a 6-month accounting period, the lower and upper limits are roughly halved, to about £25,000 and £125,000.</p>',
        '<p>Short periods are common in a company\'s first year. An accounting period for corporation tax cannot be longer than 12 months, so if your first accounts cover more than a year, HMRC needs two returns: one for the first 12 months and one for the short period left over. Each has its own limits, its own bill and its own payment date.</p>',
        '<p>If an accounting period spans 31 March, HMRC splits the profit by days between the two financial years. With the same rates in force since 2023 this has made no difference recently, but it will if the rates change.</p>',
      ],
    },
    {
      id: 'paying', h2: 'When do you pay corporation tax?', toc: 'Payment dates',
      body: [
        '<p>Most companies pay 9 months and 1 day after the end of the accounting period. For a year ending 31 March 2026, that is 1 January 2027. You pay before you file, because the CT600 return is not due until 12 months after the period ends.</p>',
        { caption: 'When corporation tax is due', head: ['Taxable profits', 'When to pay'], rows: [
          ['Up to £1.5 million', '9 months and 1 day after the accounting period ends'],
          ['£1.5 million to £20 million (large companies)', '4 quarterly instalments, the first 6 months and 13 days after the period starts'],
          ['Over £20 million (very large companies)', 'Instalments under separate, earlier rules'],
        ], after: 'The £1.5 million and £20 million thresholds are also divided by associated companies plus one. A large company need not pay by instalments if its tax for the period is under £10,000, or in its first large year if profits are no more than £10 million.' },
        '<p>Interest runs on late payments at the Bank of England base rate plus 4 percentage points: 7.75% a year from 9 January 2026. HMRC pays a lower rate of interest if you pay early. You need your 17-character payment reference, and you cannot pay by post.</p>',
        '<p>If you cannot pay in full, contact HMRC before the deadline about a Time to Pay arrangement. Our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a> explains what HMRC asks for.</p>',
      ],
    },
    {
      id: 'filing', h2: 'When is the company tax return due?', toc: 'Filing and penalties',
      body: [
        '<p>The CT600 is due 12 months after the end of the accounting period, and you must file it online even if the company made a loss or owes nothing. Late filing penalties rose for returns due on or after 1 April 2026.</p>',
        { caption: 'Late filing penalties for the Company Tax Return (returns due on or after 1 April 2026)', head: ['How late', 'Penalty'], rows: [
          ['1 day', '£200'],
          ['3 months', 'Another £200'],
          ['6 months', 'HMRC estimates the tax and charges 10% of the unpaid tax'],
          ['12 months', 'Another 10% of the unpaid tax'],
        ], after: 'If the return is late 3 times in a row, each £200 becomes £1,000. Returns due before 1 April 2026 had £100 penalties. Source: GOV.UK.' },
        '<p>The accounts go to Companies House 9 months after the year end, which is a separate deadline with its own penalties. Our guide to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> lists every date in one place.</p>',
      ],
    },
    {
      id: 'reducing', h2: 'What reduces a company\'s corporation tax bill?', toc: 'Reducing the bill',
      body: [
        '<p>Corporation tax is charged on taxable profits, so anything that legitimately reduces them reduces the bill. The main levers are:</p>',
        '<ul><li><strong>Capital allowances.</strong> The Annual Investment Allowance covers up to £1 million of qualifying plant and machinery each year, and full expensing gives 100% relief on new main rate equipment with no limit. See our guides to <a href="/resources/capital-allowances-explained/">capital allowances</a> and <a href="/resources/full-expensing/">full expensing</a>.</li><li><strong>Directors\' salary and employer pension contributions.</strong> Both are business costs. Dividends are not.</li><li><strong>Losses.</strong> A trading loss can reduce profits of the same period, an earlier period or later periods.</li><li><strong>R&D tax relief</strong> for qualifying research and development projects.</li></ul>',
        '<p>Inside the Marginal Relief band each £1,000 of extra cost saves £265, against £190 below £50,000. For the director\'s side, read our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the corporation tax rate in 2026?', a: 'For the financial year starting 1 April 2026, it is 19% on profits up to £50,000 and 25% on profits over £250,000. Companies in between pay 25% reduced by Marginal Relief, so their bill falls between 19% and 25% of profits.' },
    { q: 'Is corporation tax 19% or 25%?', a: 'Both, depending on profits. Small companies with profits of £50,000 or less pay 19%. Companies with profits over £250,000 pay 25%. The limits fall if you have associated companies or a period shorter than 12 months.' },
    { q: 'What is the effective marginal rate of corporation tax?', a: 'For profits between £50,000 and £250,000 it is 26.5%. Each extra pound in that band costs 26.5p in tax, because Marginal Relief is withdrawn as profits rise towards the £250,000 upper limit.' },
    { q: 'Do I have to pay corporation tax if my company made a loss?', a: 'No tax is due on a loss, but you must still file the CT600 by the deadline. Filing records the loss, so it can be set against profits in other periods.' },
    { q: 'Do dormant associated companies count?', a: 'No. An associated company that carried on no trade or business at any time in the accounting period is ignored when dividing the limits. A company that is active for part of the period does count.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/rates-and-allowances-corporation-tax/rates-and-allowances-corporation-tax', 'GOV.UK: Rates and allowances, Corporation Tax'],
    ['https://www.gov.uk/guidance/corporation-tax-marginal-relief', 'GOV.UK: Marginal Relief for Corporation Tax'],
    ['https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm03925', 'HMRC manual CTM03925: Marginal Relief formula'],
    ['https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm03940', 'HMRC manual CTM03940: Associated companies'],
    ['https://www.gov.uk/pay-corporation-tax', 'GOV.UK: Pay your Corporation Tax bill'],
    ['https://www.gov.uk/guidance/corporation-tax-paying-in-instalments', 'GOV.UK: Paying Corporation Tax in instalments'],
    ['https://www.gov.uk/company-tax-returns/penalties-for-late-filing', 'GOV.UK: Company Tax Return penalties'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates'],
  ],

  related: [
    '/resources/limited-company-deadlines/',
    '/resources/salary-vs-dividends/',
    '/resources/capital-allowances-explained/',
    '/resources/dividend-tax-rates/',
  ],
};
