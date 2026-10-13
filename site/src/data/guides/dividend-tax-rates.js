// Guide: /resources/dividend-tax-rates/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April and after each Budget.
export default {
  url: '/resources/dividend-tax-rates/',
  section: 'tax',
  title: 'Dividend Tax Rates 2026-27 | Severin Finance',
  description: 'Dividend tax rates for 2026-27: a £500 allowance, then 10.75%, 35.75% or 39.35%. How dividends stack on salary and how to pay. Free consultation.',
  h1: 'Dividend tax rates and allowance for 2026-27',
  crumb: 'Dividend tax rates',
  summary: 'A £500 allowance, then 10.75%, 35.75% or 39.35% on dividends in 2026-27.',
  topic: 'UK dividend tax rates and the dividend allowance',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/limited-company-accountant/', label: 'Our limited company service',
    boxTitle: 'Taking dividends this year?', text: 'We plan your salary and dividends each year, prepare the paperwork and work out the personal tax you will owe.',
  },

  hero: {
    answer: 'For the 2026-27 tax year, the first £500 of dividends is tax-free. Dividends above that are taxed at 10.75% in the basic rate band, 35.75% in the higher rate band and 39.35% in the additional rate band. The basic and higher rates each rose by 2 percentage points on 6 April 2026.',
  },

  tldr: [
    '<strong>£500</strong> dividend allowance in 2026-27, the same as in 2025-26.',
    'Rates for 2026-27: <strong>10.75%</strong> basic, <strong>35.75%</strong> higher, <strong>39.35%</strong> additional.',
    'In 2025-26 the rates were 8.75%, 33.75% and 39.35%.',
    'Dividends sit on top of your other income, so salary decides which band they fall in.',
    'Over £10,000 of dividends means a Self Assessment return, with tax due by <strong>31 January</strong>.',
  ],

  sections: [
    {
      id: 'rates', h2: 'What are the dividend tax rates for 2026-27?', toc: 'The rates',
      body: [
        '<p>For 2026-27 (6 April 2026 to 5 April 2027) you pay 10.75%, 35.75% or 39.35% on dividends above the £500 allowance, depending on your income tax band. If you run your own company, our <a href="/uk/accounting/limited-company-accountant/">limited company accountants</a> plan your salary and dividends together, so you know the personal tax before you take the money out.</p>',
        { caption: 'Dividend tax rates and allowance', head: ['Band', '2025-26', '2026-27'], rows: [
          ['Dividend allowance', '£500', '£500'],
          ['Basic rate', '8.75%', '10.75%'],
          ['Higher rate', '33.75%', '35.75%'],
          ['Additional rate', '39.35%', '39.35%'],
        ], after: 'Source: GOV.UK, Income Tax rates and allowances for current and past years. Checked 13 October 2026.' },
        '<p>The new basic and higher rates took effect from 6 April 2026. The additional rate did not change. Dividends paid on or before 5 April 2026 are taxed at the 2025-26 rates on the return you file by 31 January 2027.</p>',
        '<p>The same rates apply across the whole UK. Scottish income tax rates cover wages, profits and pensions, but taxpayers in Scotland pay the UK rates on dividends and savings interest.</p>',
      ],
    },
    {
      id: 'bands', h2: 'Which band do your dividends fall in?', toc: 'How bands work',
      body: [
        '<p>Your dividends are treated as the top slice of your income, so your other income fills the bands first and the dividends sit on top. HMRC adds up your salary, pension, rent and other income, takes off your Personal Allowance, and then places the dividends in whatever band is left.</p>',
        { caption: 'Income tax bands for 2026-27 (England, Wales and Northern Ireland)', head: ['Band', 'Taxable income'], rows: [
          ['Personal Allowance', 'First £12,570 of income'],
          ['Basic rate band', 'Up to £37,700 above the Personal Allowance'],
          ['Higher rate band', '£37,701 to £125,140 of taxable income'],
          ['Additional rate band', 'Over £125,140 of taxable income'],
        ], after: 'The Personal Allowance falls by £1 for every £2 of income over £100,000. Taxpayers in Scotland use these UK bands for dividends.' },
        '<p>Two points catch people out:</p>',
        '<ul><li><strong>The £500 still uses up your band.</strong> The allowance is a 0% rate, not a deduction. Dividends covered by it still count towards your basic or higher rate band, which can push later dividends into a higher band.</li><li><strong>Unused Personal Allowance covers dividends too.</strong> If your salary is below £12,570, the rest of your Personal Allowance can be set against dividends before the £500 allowance applies.</li></ul>',
        '<p>Dividends from shares held in an ISA are not taxed and do not count towards any of this.</p>',
      ],
    },
    {
      id: 'example', h2: 'How much tax will you pay on your dividends?', toc: 'Worked example',
      body: [
        '<p>A director taking a salary of £12,570 and £50,000 of dividends in 2026-27 pays about £8,396 in dividend tax. The salary uses the whole Personal Allowance, so every pound of dividend is taxable income.</p>',
        { caption: 'Illustrative example: £12,570 salary and £50,000 of dividends in 2026-27', head: ['Slice of dividends', 'Rate', 'Tax'], rows: [
          ['First £500 (dividend allowance)', '0%', '£0'],
          ['Next £37,200 (rest of the basic rate band)', '10.75%', '£3,999.00'],
          ['Remaining £12,300 (higher rate band)', '35.75%', '£4,397.25'],
          ['Total on £50,000', '', '£8,396.25'],
        ], after: 'Illustrative figures for a taxpayer with no other income, no pension contributions and no Gift Aid. The same mix cost £7,406.25 in 2025-26, so the rate rise adds £990.' },
        '<p>The company has already paid corporation tax on the profit before it pays the dividend. Our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a> shows how the two taxes combine, and our <a href="/resources/dividend-tax-calculator/">dividend tax calculator</a> lets you try your own figures.</p>',
      ],
    },
    {
      id: 'paying', h2: 'How do you pay tax on dividends?', toc: 'Paying the tax',
      body: [
        '<p>Dividend tax is not taken at source, so you report the dividends to HMRC and pay the tax yourself. How you do it depends on the amount.</p>',
        { caption: 'Reporting dividend income', head: ['Dividends in the tax year', 'What to do'], rows: [
          ['Within your allowances', 'Nothing to report'],
          ['Up to £10,000', 'Ask HMRC to change your tax code, contact the helpline, or include them on your return if you already file one'],
          ['Over £10,000', 'File a Self Assessment return. If you are new to it, register by 5 October after the tax year ends'],
        ], after: 'Source: GOV.UK, Tax on dividends: how to report tax on dividends. Checked 13 October 2026.' },
        '<p>Through Self Assessment, tax on dividends received in 2026-27 is due by 31 January 2028. If your total bill is £1,000 or more and less than 80% of your tax was collected at source, HMRC will also ask for payments on account towards the next year. Our <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> guide sets out every date.</p>',
        '<p>Many directors set money aside each time they take a dividend, so the January bill is not a shock. A simple rule is to keep back the rate for your band on each payment.</p>',
      ],
    },
    {
      id: 'paperwork', h2: 'What paperwork does a company need to pay a dividend?', toc: 'Paperwork',
      body: [
        '<p>To pay a dividend, the directors hold a meeting to declare it, keep minutes of that meeting (even if there is only one director) and write a dividend voucher for each payment.</p>',
        '<ul><li><strong>Board minutes</strong> record the decision, the amount per share and the payment date.</li><li><strong>A dividend voucher</strong> shows the date, the company name, the shareholder paid and the amount. Each shareholder gets a copy and the company keeps one.</li><li><strong>Management accounts or a profit check</strong> show there are enough profits to cover it.</li></ul>',
        '<p>A company cannot pay more in dividends than its available profits from the current and previous financial years. A dividend paid without enough profit is unlawful, and a shareholder who knew or should have known may have to repay it. Dividends must also usually go to all shareholders of the same class in proportion to their shares.</p>',
        '<p>Dividends are not a business cost, so they do not reduce the company\'s corporation tax. Our guide on <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how to pay yourself from a limited company</a> covers salary, pension contributions and director\'s loans as well.</p>',
      ],
    },
    {
      id: 'reduce', h2: 'Can you reduce the tax on your dividends?', toc: 'Reducing the tax',
      body: [
        '<p>Yes, within the rules, mostly by timing and by using allowances you already have. There is no special relief for dividends, but these steps change how much falls in each band:</p>',
        '<ul><li><strong>Timing across tax years.</strong> Spreading dividends over two tax years can keep more of them in the basic rate band each year.</li><li><strong>Pension contributions.</strong> Personal contributions extend your basic rate band, and contributions paid by the company are a business cost that never becomes a dividend at all.</li><li><strong>Shareholders who pay less tax.</strong> If a spouse or partner owns shares in their own right and has unused bands, their dividends may be taxed at a lower rate. The shares must be a genuine gift, with full rights.</li><li><strong>ISAs.</strong> Dividends from investments held in an ISA are tax-free.</li><li><strong>The £100,000 taper.</strong> Between £100,000 and £125,140 of income you lose the Personal Allowance, so dividends in that range cost more than the headline rate.</li></ul>',
        '<p>Each of these depends on your full position, including other income and any child benefit. We check the numbers before you declare a dividend, not after.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How much tax do I pay on dividends in 2026-27?', a: 'After the £500 dividend allowance, you pay 10.75% on dividends in the basic rate band, 35.75% in the higher rate band and 39.35% in the additional rate band. Any unused Personal Allowance covers dividends first.' },
    { q: 'Has dividend tax gone up in April 2026?', a: 'Yes. From 6 April 2026 the basic rate rose from 8.75% to 10.75% and the higher rate from 33.75% to 35.75%. The additional rate stayed at 39.35% and the £500 allowance did not change.' },
    { q: 'Do I need to file a tax return for dividends?', a: 'Only if your dividends are over £10,000, or you already file one. Below £10,000 you can ask HMRC to collect the tax through your tax code instead. Dividends within your allowances do not need reporting.' },
    { q: 'Is the £500 dividend allowance per person or per company?', a: 'Per person, each tax year. It covers your total dividends from all companies, including listed shares outside an ISA, not £500 from each company you own shares in.' },
    { q: 'Do I pay National Insurance on dividends?', a: 'No. Dividends are not earnings for National Insurance, which is one reason many directors take a small salary and the rest as dividends. Income tax at the dividend rates still applies.' },
  ],

  sources: [
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
    ['https://www.gov.uk/tax-on-dividends/how-to-report-tax-on-dividends', 'GOV.UK: How to report tax on dividends'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past', 'GOV.UK: Income Tax rates and allowances, current and past'],
    ['https://www.gov.uk/government/publications/dividend-allowance-factsheet/dividend-allowance-factsheet', 'GOV.UK: Dividend Allowance factsheet'],
    ['https://www.gov.uk/running-a-limited-company/taking-money-out-of-a-limited-company', 'GOV.UK: Taking money out of a limited company'],
    ['https://www.gov.uk/scottish-income-tax', 'GOV.UK: Scottish Income Tax'],
  ],

  related: [
    '/resources/salary-vs-dividends/',
    '/resources/how-to-pay-yourself-from-a-limited-company/',
    '/resources/corporation-tax-rates/',
    '/resources/self-assessment-deadlines/',
  ],
};
