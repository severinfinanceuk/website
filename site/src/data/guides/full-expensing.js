// Guide: /resources/full-expensing/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the HMRC Capital Allowances Manual (CA23174AB to CA23174AE, CA23195A/B) and legislation.gov.uk on 13 October 2026.
// Full expensing and the 50% FYA: companies, expenditure from 1 April 2023, no end date. 40% FYA from 1 January 2026 (Finance Act 2026 s29).
// Main rate WDA 14% from 1 April 2026 (CT). Re-check each April and after each Budget.
export default {
  url: '/resources/full-expensing/',
  section: 'tax',
  title: 'Full Expensing for Companies | Severin Finance',
  description: 'Full expensing: 100% relief for companies on new plant and machinery, no cap. What qualifies, leasing, disposals and the £1m AIA. Free consultation.',
  h1: 'Full expensing for companies',
  crumb: 'Full expensing',
  summary: '100% relief on new main rate equipment for companies, 50% on special rate, with no cap.',
  topic: 'Full expensing and the 50% first-year allowance for companies',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/corporation-tax-accountant/', label: 'Our corporation tax service',
    boxTitle: 'Buying new equipment?', text: 'We check which allowance you can claim before you buy, then make the claim on your company tax return.',
  },

  hero: {
    answer: 'Full expensing lets a company deduct 100% of the cost of new and unused main rate plant and machinery from its profits in the year it buys it, with no upper limit. Special rate assets get a 50% first-year allowance instead. Both cover spending from 1 April 2023, have no end date, and exclude cars, second-hand items and leasing.',
  },

  tldr: [
    '<strong>100%</strong> first-year relief on new main rate plant and machinery, with <strong>no cap</strong>.',
    '<strong>50%</strong> first-year allowance on new special rate assets, such as electrics and heating.',
    '<strong>Companies only</strong>, on spending from <strong>1 April 2023</strong>. There is no end date.',
    'Not for cars, second-hand assets or assets you lease out. A new <strong>40%</strong> allowance from 1 January 2026 covers some leasing.',
    'Sell a fully expensed asset and the <strong>whole sale price</strong> is taxed as a balancing charge.',
  ],

  sections: [
    {
      id: 'what-it-is', h2: 'What is full expensing?', toc: 'What it is',
      body: [
        '<p>Full expensing is a 100% first-year capital allowance for companies buying new plant and machinery. A company that spends £200,000 on a qualifying machine deducts the full £200,000 from its taxable profits for that year, instead of spreading the relief over many years. Our <a href="/uk/tax/corporation-tax-accountant/">corporation tax accountants</a> confirm which allowance applies before you buy, and make the claim on your return.</p>',
        '<p>It sits alongside a 50% first-year allowance for new special rate assets. The rest of a special rate cost goes into the special rate pool and gets 6% a year from the next period. Both reliefs began on 1 April 2023 and were made permanent at the Autumn Statement 2023, so there is no closing date.</p>',
        '<p>This guide covers full expensing in detail. For the full set of allowances, including pools, cars and buildings, see <a href="/resources/capital-allowances-explained/">capital allowances explained</a>.</p>',
      ],
    },
    {
      id: 'qualifies', h2: 'What qualifies for full expensing?', toc: 'What qualifies',
      body: [
        '<p>The spending qualifies if the company is within the charge to corporation tax, the cost is incurred on or after 1 April 2023, and the plant or machinery is new and unused. It must also not fall within one of the general exclusions, the main ones being cars and assets bought for leasing.</p>',
        { caption: 'Examples of what gets which relief', head: ['Asset', 'Relief', 'Notes'], rows: [
          ['Machinery, tools, computers, office furniture', 'Full expensing, 100%', 'Must be new and unused'],
          ['Vans, lorries, tractors, forklifts', 'Full expensing, 100%', 'Vans and lorries are not cars'],
          ['Electrical and lighting systems, heating, air conditioning, lifts', '50% first-year allowance', 'Integral features, special rate'],
          ['Solar panels, thermal insulation, long-life assets', '50% first-year allowance', 'Special rate'],
          ['Cars', 'None of these', 'New zero-emission cars get a separate 100% allowance'],
          ['Second-hand equipment', 'None of these', 'Use the Annual Investment Allowance'],
        ], after: 'Source: GOV.UK, Full expensing and 50% first-year allowance, and HMRC Capital Allowances Manual CA23174AB. Checked 13 October 2026.' },
        '<p>New parts added to an existing asset can qualify, but only the cost of the new parts. Limited use for testing, delivery or demonstration does not stop an item counting as unused. Assets bought on hire purchase can qualify once you start using them, though the interest is a finance cost, not part of the claim.</p>',
      ],
    },
    {
      id: 'who', h2: 'Who cannot claim full expensing?', toc: 'Who is excluded',
      body: [
        '<p>Sole traders, partnerships and limited liability partnerships cannot claim it: full expensing and the 50% allowance are for companies only. Unincorporated businesses use the £1 million Annual Investment Allowance, and since 1 January 2026 they can also claim the 40% first-year allowance on new main rate assets above that.</p>',
        '<p>A company that buys plant or machinery to lease out cannot claim full expensing either, except on background plant, such as heating or lifts in a building it lets. For that kind of spending, the 40% first-year allowance is the relief to look at. It covers new main rate assets leased to a lessee who uses them in a UK taxable business or is UK resident.</p>',
        '<p>If you are the business using leased equipment, you do not own it, so there are no capital allowances on an ordinary lease. The rentals are a business expense instead. Our guide to <a href="/resources/hire-purchase-vs-leasing/">hire purchase vs leasing</a> compares the tax treatment of each type of agreement.</p>',
      ],
    },
    {
      id: 'vs-aia', h2: 'Is full expensing better than the Annual Investment Allowance?', toc: 'Compared with AIA',
      body: [
        '<p>For most small companies the AIA is at least as good, because it gives 100% on second-hand and special rate assets too, and disposals are gentler. Full expensing matters once you spend more than £1 million in a year, or when the AIA is shared across a group.</p>',
        { caption: 'Full expensing, the AIA and the 40% allowance compared', head: ['Feature', 'Full expensing', 'Annual Investment Allowance', '40% first-year allowance'], rows: [
          ['Who can claim', 'Companies', 'All businesses', 'Companies and unincorporated businesses'],
          ['Relief in year one', '100% (50% on special rate)', '100%', '40%, then 14% a year on the rest'],
          ['Annual limit', 'None', '£1 million', 'None'],
          ['Second-hand assets', 'No', 'Yes', 'No'],
          ['Assets for leasing', 'No (except background plant)', 'No', 'Yes, if leased into UK taxable use'],
          ['On disposal', 'Immediate balancing charge', 'Proceeds reduce the pool', 'Proceeds reduce the pool'],
        ], after: 'Source: GOV.UK capital allowances guidance and HMRC Capital Allowances Manual. Cars are excluded from all three.' },
        '<p>In practice, many companies claim the AIA first on special rate and second-hand items, where full expensing gives less or nothing, and use full expensing on new main rate equipment. You can claim less than the full amount if a smaller claim suits the company better, for example where profits are already low. The unclaimed cost goes into the pool.</p>',
      ],
    },
    {
      id: 'example', h2: 'How much tax does full expensing save?', toc: 'Worked example',
      body: [
        '<p>Full expensing saves the corporation tax on the cost in the year you buy, which is 25% for a company paying the main rate. Over the life of the asset the total relief is about the same as writing down allowances; the gain is that it comes years earlier.</p>',
        { caption: 'Illustrative example: a company with £500,000 of profits buys a £200,000 new machine in the year to 31 March 2027', head: ['', 'Full expensing', 'Main pool only (14%)'], rows: [
          ['Profits before allowances', '£500,000', '£500,000'],
          ['Allowance in year one', '£200,000', '£28,000'],
          ['Taxable profits', '£300,000', '£472,000'],
          ['Corporation tax at 25%', '£75,000', '£118,000'],
          ['Cost still to relieve', '£0', '£172,000'],
        ], after: 'Illustrative figures, no associated companies. In this case the AIA would give the same result as full expensing.' },
        '<p>Companies with profits between £50,000 and £250,000 save 26.5% on each pound inside the Marginal Relief band, and 19% below it. Our guide to <a href="/resources/corporation-tax-rates/">corporation tax rates</a> explains the bands, and you can test a purchase in the <a href="/resources/marginal-relief-calculator/">Marginal Relief calculator</a>. A large claim can also turn a profit into a trading loss, which can then be used in other periods.</p>',
      ],
    },
    {
      id: 'disposals', h2: 'What happens when you sell a fully expensed asset?', toc: 'Disposals',
      body: [
        '<p>When you sell, scrap or otherwise dispose of an asset you fully expensed, the whole disposal value is added to taxable profits straight away as a balancing charge. It does not go into the pool, so it cannot be cushioned by other pool balances the way an AIA disposal can.</p>',
        '<ul><li><strong>Full claim:</strong> you claimed full expensing on the whole cost, so the balancing charge is the whole disposal value.</li><li><strong>Part claim:</strong> you claimed on part of the cost, so the charge is that proportion of the disposal value, and the rest is deducted from the main pool.</li><li><strong>50% allowance:</strong> where the 50% allowance covered the whole cost, the charge is half the disposal value, and the other half comes off the special rate pool.</li></ul>',
        '<p>Illustrative example: the £200,000 machine above is sold after three years for £60,000. The company adds £60,000 to that year\'s profits, which costs £15,000 at 25%. Plan for this in your <a href="/resources/cash-flow-forecasting/">cash flow forecast</a> if you replace equipment often.</p>',
      ],
    },
    {
      id: 'claiming', h2: 'How do you claim full expensing?', toc: 'Making the claim',
      body: [
        '<p>You claim on the company tax return (CT600) for the accounting period in which the cost is incurred. That is usually the date the contract becomes unconditional, or the date payment is due if that is more than 4 months later. Keep invoices showing the asset is new, and a fixed asset register so disposals are caught later.</p>',
        '<p>The CT600 has no separate boxes yet for the 40% allowance: HMRC says to use the existing first-year allowance boxes until it adds new ones in April 2027. Anti-avoidance rules deny all of these allowances where a purchase is part of arrangements mainly aimed at getting them. We make the claim as part of your company tax return, and keep the asset register up to date for later disposals.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can a sole trader claim full expensing?', a: 'No. Full expensing and the 50% allowance are for companies only. Sole traders and partnerships can claim the £1 million Annual Investment Allowance, and the 40% first-year allowance on new main rate equipment bought from 1 January 2026, unless they use the cash basis.' },
    { q: 'Does full expensing apply to vans?', a: 'Yes. A van is not a car for capital allowances, so a new and unused van bought by a company qualifies for 100% full expensing. A second-hand van does not, but it can usually get the Annual Investment Allowance instead.' },
    { q: 'Is full expensing ending in 2026?', a: 'No. It was first due to end on 31 March 2026, but the government made it permanent at the Autumn Statement 2023. Full expensing and the 50% special rate allowance continue to apply to qualifying spending by companies with no end date.' },
    { q: 'Can I claim full expensing on equipment I lease?', a: 'If you lease it in, no: you do not own it, so you deduct the rentals instead. If you buy equipment to lease out, full expensing is not available, but the 40% first-year allowance may be for spending from 1 January 2026.' },
    { q: 'Should I claim full expensing or the AIA?', a: 'For spending under £1 million a year they give the same 100% relief on new main rate assets. The AIA also covers second-hand and special rate items at 100% and avoids an immediate balancing charge on sale, so many companies use it first.' },
  ],

  sources: [
    ['https://www.gov.uk/capital-allowances/full-expensing', 'GOV.UK: Full expensing and 50% first-year allowance'],
    ['https://www.gov.uk/guidance/disposing-an-asset-if-you-claimed-full-expensing-or-50-first-year-allowance', 'GOV.UK: Disposing of an asset after full expensing'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23174ab', 'HMRC manual CA23174AB: Full expensing qualifying expenditure'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23174ac', 'HMRC manual CA23174AC: General exclusions'],
    ['https://www.gov.uk/capital-allowances/40-first-year-allowance', 'GOV.UK: 40% first-year allowance'],
    ['https://www.gov.uk/capital-allowances/annual-investment-allowance', 'GOV.UK: Annual Investment Allowance'],
    ['https://www.gov.uk/government/publications/capital-allowances-permanent-full-expensing/capital-allowances-permanent-full-expensing-for-companies-investing-in-plant-and-machinery', 'GOV.UK: Permanent full expensing'],
    ['https://www.gov.uk/guidance/changes-and-issues-affecting-the-corporation-tax-online-service', 'GOV.UK: Corporation Tax online service changes'],
  ],

  related: [
    '/resources/capital-allowances-explained/',
    '/resources/hire-purchase-vs-leasing/',
    '/resources/corporation-tax-rates/',
    '/resources/cash-flow-forecasting/',
  ],
};
