// Guide: /resources/capital-allowances-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the HMRC Capital Allowances Manual and legislation.gov.uk on 13 October 2026 (sources below).
// Main rate WDA fell from 18% to 14% (1 April 2026 CT, 6 April 2026 IT); 40% FYA from 1 January 2026 (Finance Act 2026, s29, new CAA 2001 s45U).
// Re-check each April and after each Budget, and the zero-emission car FYA end date (31 March 2027 CT, 5 April 2027 IT).
export default {
  url: '/resources/capital-allowances-explained/',
  section: 'tax',
  title: 'Capital Allowances Explained (2026-27) | Severin Finance',
  description: 'Capital allowances for 2026-27: the £1m AIA, 14% and 6% writing down allowances, the new 40% first-year allowance, cars and the 3% SBA. Free consultation.',
  h1: 'Capital allowances explained',
  crumb: 'Capital allowances',
  summary: 'The £1m AIA, 14% and 6% pools, the 40% first-year allowance, cars and the 3% buildings allowance.',
  topic: 'UK capital allowances on plant, machinery and buildings',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/corporation-tax-accountant/', label: 'Our corporation tax service',
    boxTitle: 'Buying equipment this year?', text: 'We work out which allowance gives you the most relief and claim it on your company tax return.',
  },

  hero: {
    answer: 'Capital allowances let a business deduct the cost of equipment from its taxable profits. Most businesses can claim 100% on up to £1 million a year through the Annual Investment Allowance. Anything above that gets a first-year allowance or writing down allowances: 14% a year for the main pool from April 2026, and 6% for the special rate pool.',
  },

  tldr: [
    '<strong>Annual Investment Allowance:</strong> 100% relief on up to <strong>£1 million</strong> of plant and machinery a year.',
    '<strong>Writing down allowances:</strong> main pool <strong>14%</strong> (18% before April 2026), special rate pool <strong>6%</strong>.',
    '<strong>40% first-year allowance:</strong> new main rate assets bought from <strong>1 January 2026</strong>, for companies and unincorporated businesses.',
    '<strong>Full expensing</strong> gives companies 100% on new main rate assets, with no limit.',
    'Cars never get the AIA. New zero-emission cars get <strong>100%</strong> until 31 March 2027 for companies.',
    'Buildings get the <strong>3%</strong> structures and buildings allowance, spread over 33 and a third years.',
  ],

  sections: [
    {
      id: 'what-they-are', h2: 'What are capital allowances?', toc: 'The basics',
      body: [
        '<p>Capital allowances are the tax deduction for things a business buys to keep and use, such as machinery, computers, vans and fittings. The cost does not go straight through the profit and loss account for tax; depreciation is added back, and allowances are claimed instead. Our <a href="/uk/tax/corporation-tax-accountant/">corporation tax accountants</a> work out the allowances for each purchase and claim them on your company tax return.</p>',
        '<p>Most claims fall under plant and machinery. That covers equipment, tools, furniture, computers, vans and lorries, business cars and some fixtures in buildings, such as heating, lighting and fitted kitchens. You cannot claim on land, on the building itself, on items you lease (unless you buy them on hire purchase or under a long funding lease) or on business entertaining items.</p>',
        '<p>Sole traders and partnerships using the cash basis are different. They deduct most equipment as an ordinary expense and can only claim capital allowances on business cars.</p>',
      ],
    },
    {
      id: 'allowances', h2: 'Which capital allowances can you claim in 2026-27?', toc: 'The allowances',
      body: [
        '<p>Six allowances cover almost every purchase of plant, machinery or buildings. You choose the one that gives the most relief, and you can split a large purchase between two of them.</p>',
        { caption: 'Capital allowances for the 2026 financial year and the 2026-27 tax year', head: ['Allowance', 'Rate', 'Who can claim', 'What it covers'], rows: [
          ['Annual Investment Allowance (AIA)', '100%, up to £1 million a year', 'All businesses', 'Most plant and machinery, new or second-hand, but not cars'],
          ['Full expensing', '100%, no limit', 'Companies only', 'New and unused main rate plant and machinery, not cars'],
          ['50% special rate first-year allowance', '50% in year one', 'Companies only', 'New and unused special rate assets, such as integral features'],
          ['40% first-year allowance', '40% in year one', 'Companies and unincorporated businesses', 'New and unused main rate assets bought from 1 January 2026, including some assets for leasing, not cars'],
          ['Writing down allowances', '14% main pool, 6% special rate pool', 'All businesses', 'Anything not covered above, and the balance left after a first-year allowance'],
          ['Structures and buildings allowance (SBA)', '3% a year', 'All businesses', 'Construction or renovation of non-residential buildings'],
        ], after: 'Source: GOV.UK, Budget 2025 Annex A: rates and allowances, and GOV.UK capital allowances guidance. Checked 13 October 2026.' },
        '<p>For a company, the usual order is the AIA first (it covers second-hand and special rate items at 100%), then full expensing on new main rate items above the limit. We explain that choice in our <a href="/resources/full-expensing/">full expensing</a> guide.</p>',
      ],
    },
    {
      id: 'aia', h2: 'How does the Annual Investment Allowance work?', toc: 'Annual Investment Allowance',
      body: [
        '<p>The AIA lets you deduct the full cost of qualifying plant and machinery from profits in the period you buy it, up to £1 million a year. It is the simplest allowance and the one most small businesses use for almost everything they buy.</p>',
        '<ul><li><strong>Timing:</strong> the purchase date is when you sign the contract, or the date payment is due if that is more than 4 months later. On hire purchase you can claim once you start using the item, on the payments due under the contract but not the interest.</li><li><strong>Short periods:</strong> the £1 million is reduced in proportion. A 9-month period gets £750,000.</li><li><strong>Groups:</strong> companies controlled by the same person share one AIA and choose how to split it.</li><li><strong>Exclusions:</strong> cars, gifts, items you owned before bringing them into the business, and the final period before the business closes.</li></ul>',
        '<p>Sole traders and partners using an asset partly for private purposes reduce the claim by the private share. Mixed partnerships, where a member is a company, cannot claim the AIA at all.</p>',
      ],
    },
    {
      id: 'pools', h2: 'How do writing down allowances and pools work?', toc: 'Pools and rates',
      body: [
        '<p>Any cost not relieved by the AIA or a first-year allowance goes into a pool, and you claim a percentage of the pool balance each year. The main pool rate fell from 18% to 14% on 1 April 2026 for companies and 6 April 2026 for income tax. The special rate pool stays at 6%.</p>',
        { caption: 'Which pool an asset goes in', head: ['Pool', 'Rate from April 2026', 'Typical assets'], rows: [
          ['Main pool', '14%', 'Machinery, tools, computers, vans, furniture, cars of 50g/km or less'],
          ['Special rate pool', '6%', 'Integral features (electrics, lighting, heating, lifts), thermal insulation, solar panels, long-life assets, cars over 50g/km'],
          ['Single asset pool', '14% or 6%', 'A car or other asset with private use by a sole trader or partner, and short life assets you elect to keep separate'],
        ], after: 'Source: GOV.UK, Work out capital allowances: rates and pools. Checked 13 October 2026.' },
        '<p>The allowance is worked on a reducing balance, so the pool never quite reaches zero. If the balance of the main or special rate pool is £1,000 or less, you can claim the whole of it instead (the small pools allowance).</p>',
        '<h3>Illustrative example</h3>',
        '<p>A company has £100,000 in its main pool at the start of a 12-month period beginning 1 April 2026. It claims 14%, a £14,000 deduction, and carries £86,000 forward. Next year it claims 14% of £86,000, which is £12,040. Under the old 18% rate the first claim would have been £18,000.</p>',
        '<p>If your accounting period straddles the change, you use a hybrid rate. For a company year ending 31 December 2026, 90 days fall at 18% and 275 days at 14%, giving a rate of about 15%.</p>',
      ],
    },
    {
      id: 'first-year', h2: 'What is the new 40% first-year allowance?', toc: '40% first-year allowance',
      body: [
        '<p>The 40% first-year allowance gives an immediate 40% deduction on new and unused main rate plant and machinery where the cost is incurred on or after 1 January 2026. The other 60% goes into the main pool and gets 14% a year from the next period. It is law, in Finance Act 2026, and has no end date.</p>',
        '<p>It is aimed at two groups that cannot use full expensing:</p>',
        '<ul><li><strong>Unincorporated businesses</strong>, such as sole traders and partnerships, spending more than the £1 million AIA in a year.</li><li><strong>Businesses that buy assets to lease out</strong>, as long as the lessee uses the asset in a UK taxable business or is UK resident. Leasing to a non-UK resident for income outside UK tax is excluded.</li></ul>',
        '<p>Second-hand assets, special rate assets and cars do not qualify. A company buying new main rate equipment would normally claim the AIA or full expensing at 100% instead, so for most companies the 40% allowance matters mainly for leased-out assets.</p>',
      ],
    },
    {
      id: 'cars', h2: 'How are cars treated?', toc: 'Cars',
      body: [
        '<p>Cars cannot get the AIA, full expensing or the 40% allowance. Their treatment depends on CO2 emissions: a new zero-emission car gets 100% in the first year, a car of 50g/km or less goes in the main pool at 14%, and anything above 50g/km goes in the special rate pool at 6%.</p>',
        { caption: 'Capital allowances on cars bought from April 2021', head: ['Car', 'Allowance'], rows: [
          ['New and unused, zero emissions or electric', '100% first-year allowance'],
          ['Second-hand electric, or 50g/km or less', 'Main pool, 14%'],
          ['Over 50g/km', 'Special rate pool, 6%'],
        ], after: 'The 100% first-year allowance for zero-emission cars and electric vehicle chargepoints runs to 31 March 2027 for corporation tax and 5 April 2027 for income tax. Source: GOV.UK, Business cars.' },
        '<p>Vans, lorries and motorcycles are not cars for these rules, so a van can get the AIA or full expensing. A car with an employee\'s private use still gets full allowances in a company, but the employee pays benefit in kind tax. Sole traders with private use claim only the business share.</p>',
      ],
    },
    {
      id: 'buildings', h2: 'Can you claim capital allowances on a building?', toc: 'Buildings',
      body: [
        '<p>Not on the building itself under plant and machinery, but you can claim the structures and buildings allowance: 3% a year of the construction or renovation cost of a non-residential building, for 33 and a third years. All the construction contracts must have been signed on or after 29 October 2018.</p>',
        '<p>Land, planning permission, financing costs and homes are excluded. You need a written allowance statement before you claim, and a buyer needs a copy from the seller to carry on claiming. When you sell, the SBA you claimed is added to your sale proceeds for capital gains, so it is a timing benefit rather than a permanent saving.</p>',
        '<p>The fixtures inside a building, such as heating, electrics and lifts, are plant and machinery and can often be worth far more. If you are buying premises, agree the fixtures value with the seller before completion. Our guide to <a href="/resources/buying-property-limited-company/">buying property through a limited company</a> covers this.</p>',
      ],
    },
    {
      id: 'claiming', h2: 'How do you claim, and what happens when you sell?', toc: 'Claiming and selling',
      body: [
        '<p>Companies claim on the company tax return (CT600) and sole traders and partners on their Self Assessment return. You do not have to claim the full amount in a year: a smaller claim leaves more in the pool for later years, which can help if profits are low.</p>',
        '<p>When you sell or scrap an asset, you deduct the sale price (capped at what you paid) from the pool. If that takes the pool below zero you have a balancing charge, which is added to taxable profits. When a business stops, any balance left gives a balancing allowance. Full expensing has its own, faster balancing charge rules.</p>',
        '<p>Each pound of allowances saves 19% to 26.5% in a company, depending on where its profits sit, so timing a purchase before the year end can matter. See our guide to <a href="/resources/corporation-tax-rates/">corporation tax rates</a>, or try your figures in the <a href="/resources/marginal-relief-calculator/">Marginal Relief calculator</a>. If you are choosing how to fund equipment, read <a href="/resources/hire-purchase-vs-leasing/">hire purchase vs leasing</a>, because a lease usually gives no allowances at all.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the writing down allowance rate for 2026-27?', a: 'The main pool rate is 14% a year, down from 18%, from 1 April 2026 for companies and 6 April 2026 for sole traders and partnerships. The special rate pool stays at 6%. Periods that span the change use a hybrid rate.' },
    { q: 'Can a sole trader claim the 40% first-year allowance?', a: 'Yes, if they are not using the cash basis. It applies to new and unused main rate plant and machinery bought from 1 January 2026, but not cars. Most sole traders will use the £1 million Annual Investment Allowance first, which gives 100%.' },
    { q: 'Can I claim capital allowances on a second-hand van?', a: 'Yes. The Annual Investment Allowance covers second-hand plant and machinery, including vans, so you can usually deduct the full cost in the year you buy it. Full expensing and the 40% first-year allowance only cover new and unused assets.' },
    { q: 'Do I get capital allowances on a car I buy through my company?', a: 'Yes, but not 100% unless it is a new zero-emission car. Other cars go in the main pool at 14% if they emit 50g/km or less, or the special rate pool at 6% if they emit more.' },
    { q: 'Is depreciation the same as capital allowances?', a: 'No. Depreciation is an accounting charge and is added back when the tax is worked out. Capital allowances are the tax deduction that replaces it, at rates set by law rather than your accounting policy.' },
  ],

  sources: [
    ['https://www.gov.uk/capital-allowances/annual-investment-allowance', 'GOV.UK: Annual Investment Allowance'],
    ['https://www.gov.uk/work-out-capital-allowances/rates-and-pools', 'GOV.UK: Capital allowances rates and pools'],
    ['https://www.gov.uk/capital-allowances/40-first-year-allowance', 'GOV.UK: 40% first-year allowance'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23195b', 'HMRC manual CA23195B: 40% first-year allowance and leasing'],
    ['https://www.gov.uk/capital-allowances/business-cars', 'GOV.UK: Capital allowances on business cars'],
    ['https://www.gov.uk/guidance/claiming-capital-allowances-for-structures-and-buildings', 'GOV.UK: Structures and buildings allowance'],
    ['https://www.gov.uk/government/publications/first-year-allowances-for-zero-emission-cars-and-electric-vehicle-chargepoints/capital-allowances-extension-of-first-year-allowances-for-zero-emission-cars-and-chargepoints', 'GOV.UK: Zero-emission car and chargepoint allowances extended'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/section/29', 'legislation.gov.uk: Finance Act 2026, section 29'],
  ],

  related: [
    '/resources/full-expensing/',
    '/resources/corporation-tax-rates/',
    '/resources/hire-purchase-vs-leasing/',
    '/resources/buying-property-limited-company/',
  ],
};
