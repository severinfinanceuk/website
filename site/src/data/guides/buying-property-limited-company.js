// Guide: /resources/buying-property-limited-company/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and legislation.gov.uk on 13 October 2026 (sources below). Also checked:
// gov.uk/stamp-duty-land-tax (14 days, LBTT and LTT); CTA 2010 s18A and s18N (close investment-holding companies, letting to
// connected persons, group exceptions); HMRC CA26850 (s198 election, 2 years); SDLT manual SDLTM23010 (group relief, 3-year withdrawal);
// gov.uk/capital-allowances/annual-investment-allowance (£1m). Lender terms are not given: they vary and are not officially published.
// Scope: business premises and commercial investment. Residential buy-to-let is in buy-to-let-limited-company.js.
export default {
  url: '/resources/buying-property-limited-company/',
  section: 'accounting',
  title: 'Buying Property Through a Limited Company | Severin Finance',
  description: 'Buying premises or commercial property through a company: SDLT at 0%, 2% and 5%, capital allowances on fixtures and holding companies. Free consultation.',
  h1: 'Buying commercial property through a limited company',
  crumb: 'Buying property via a company',
  summary: 'Owner-occupied or investment, funding the company, stamp duty, capital allowances and which company should own it.',
  topic: 'Buying business premises and commercial property through a limited company',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/limited-company-accountant/', label: 'Our limited company accountants',
    boxTitle: 'Buying your premises?', text: 'We advise which company should own the property, check the tax before you exchange, and keep the company\'s books and returns.',
  },

  hero: {
    answer: 'Yes, a limited company can buy its own premises or let commercial property. In England and Northern Ireland it pays Stamp Duty Land Tax at 0% up to £150,000, 2% to £250,000 and 5% above, with no surcharge. The company deducts mortgage interest, can claim capital allowances on fixtures and pays corporation tax at 19% to 25%.',
  },

  tldr: [
    'Owner-occupied means your business trades from the property. Investment means you let it to business tenants.',
    'Non-residential SDLT: <strong>0%</strong> to £150,000, <strong>2%</strong> to £250,000, <strong>5%</strong> above. A £275,000 freehold costs £3,250.',
    'There is <strong>no 5% surcharge</strong> on commercial property bought by a company, unlike homes.',
    'The building itself gets no deduction, but fixtures such as heating, lighting and lifts can qualify for capital allowances, including the <strong>£1 million AIA</strong>.',
    'Many owners hold the property in a <strong>separate company</strong> from the trading business, ideally under a holding company.',
  ],

  sections: [
    {
      id: 'can-a-company-buy', h2: 'Can a limited company buy commercial property?', toc: 'Can a company buy?',
      body: [
        '<p>Yes. A trading company can buy the shop, office, surgery or unit it works from, and a company can also buy commercial property to let to other businesses. Our <a href="/uk/accounting/limited-company-accountant/">limited company accountants</a> advise which company should own the property before you exchange contracts, and check the stamp duty, VAT and capital allowances.</p>',
        { caption: 'Owner-occupied and investment purchases compared', head: ['Point', 'Owner-occupied', 'Investment'], rows: [
          ['Who uses the property', 'Your own business', 'Business tenants paying rent'],
          ['Tax on income', 'No rent coming in; the company saves the rent it would pay a landlord', 'Corporation tax on the rent, less interest, running costs and allowances'],
          ['Main benefit', 'No rent to a landlord, control of your premises', 'Rental income and capital growth'],
          ['Main risk', 'Business and property tied together', 'Empty periods between tenants'],
        ], after: 'General points only.' },
        '<p>Buying a home or flats to let is different: stamp duty surcharges and other rules apply. See our guide to <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a>.</p>',
      ],
    },
    {
      id: 'funding-the-company', h2: 'How can you put money into the company to buy the property?', toc: 'Funding the company',
      body: [
        '<p>The tax effect depends on where the money comes from. Most purchases use a mix of the company\'s own cash, money you put in, and sometimes bank borrowing.</p>',
        { caption: 'Ways to fund a company property purchase: the tax points', head: ['Source', 'How it works', 'Tax points'], rows: [
          ['Retained profits', 'The company uses cash it has built up', 'Already taxed at 19% to 25%; no further tax to spend it on property'],
          ['Director\'s loan to the company', 'You lend money; it shows as a credit on your director\'s loan account', 'The company can repay it with no tax. Any interest is deductible for the company and taxable on you'],
          ['New shares', 'You invest in return for shares', 'No tax on the way in, but harder to take back out than a loan'],
          ['Bank borrowing', 'A loan secured on the property', 'Interest is deductible for the company; capital repayments are not'],
        ], after: 'General tax points only. The right mix depends on your cash, your plans and the company\'s profits.' },
        '<p>Many owners lend money to the company rather than buying more shares, because a loan can be repaid later without tax. If the company pays you interest on that loan, it usually deducts 20% income tax first and reports it to HMRC on form CT61 each quarter. You then declare the interest on your tax return.</p>',
        '<p>Budget for stamp duty, valuation, legal fees and any VAT on top of the price. These costs are added to the cost of the property for capital gains, not deducted from profits each year. If a bank is involved, it will usually ask for recent filed accounts and current management accounts, which we can prepare for you.</p>',
      ],
    },
    {
      id: 'stamp-duty', h2: 'How much stamp duty does a company pay on commercial property?', toc: 'Stamp duty',
      body: [
        '<p>A company buying commercial or mixed-use property pays the non-residential rates of Stamp Duty Land Tax, the same as an individual would. There is no company surcharge on non-residential property. You file the return and pay within 14 days of completion.</p>',
        { caption: 'SDLT on non-residential and mixed-use property (England and Northern Ireland)', head: ['Part of the price or premium', 'Rate'], rows: [
          ['Up to £150,000', '0%'],
          ['£150,001 to £250,000', '2%'],
          ['Above £250,000', '5%'],
          ['Example: £275,000 freehold shop', '£3,250'],
          ['Example: £500,000 freehold office', '£14,500'],
        ], after: 'Source: GOV.UK, Stamp Duty Land Tax: non-residential and mixed land and property rates. Checked 13 October 2026. On a new lease, rent with a net present value over £150,000 is taxed at 1%, and 2% above £5 million.' },
        '<p>Scotland uses Land and Buildings Transaction Tax and Wales uses Land Transaction Tax, with their own bands. If the seller has opted to tax the building, VAT at 20% is added to the price, and SDLT is worked out on the price including VAT. A VAT-registered business can usually recover that VAT, but the cash is needed at completion. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> check this before you exchange. Our guide to <a href="/resources/stamp-duty-commercial-property/">stamp duty on commercial property</a> covers leases and mixed-use buildings.</p>',
      ],
    },
    {
      id: 'tax-relief', h2: 'What tax relief does a company get on the property?', toc: 'Tax relief',
      body: [
        '<p>The company deducts mortgage interest, repairs, insurance and other running costs from its profits before corporation tax at 19% to 25% for 2026-27. The purchase price of the building and land gets no deduction, but parts of it can qualify for allowances.</p>',
        { caption: 'Allowances on a commercial property purchase (2026-27)', head: ['Part of the price', 'Allowance'], rows: [
          ['Land', 'None'],
          ['Building structure, if built under contracts from 29 October 2018', 'Structures and buildings allowance: 3% a year, with the allowance statement from a previous owner'],
          ['Integral features: heating, lighting, electrics, water systems, lifts, air-conditioning', 'Annual Investment Allowance (up to £1 million a year) or the 6% special rate pool'],
          ['Other fixtures, such as kitchens or sanitaryware', 'Annual Investment Allowance or the 14% main pool'],
        ], after: 'Source: GOV.UK, capital allowances rates and pools, and structures and buildings allowance guidance. Checked 13 October 2026.' },
        '<h3>Agree the fixtures value before completion</h3>',
        '<p>When you buy a used building, you can only claim on its fixtures if the seller pooled them and you both fix their value, usually by a joint section 198 election made within 2 years of the purchase. Miss this and the allowances can be lost for good, so raise it in the pre-contract enquiries. Our guide to <a href="/resources/capital-allowances-explained/">capital allowances</a> covers the pools, and our <a href="/uk/tax/corporation-tax-accountant/">corporation tax accountants</a> make the claim.</p>',
      ],
    },
    {
      id: 'which-company', h2: 'Should the trading company or a separate company own the property?', toc: 'Which company owns it',
      body: [
        '<p>Often a separate company, so the property is not exposed to the risks of the trade. There are four common set-ups:</p>',
        { caption: 'Who owns the premises: common structures', head: ['Structure', 'How it works', 'Points to watch'], rows: [
          ['Trading company owns it', 'Simplest: one company, one set of accounts', 'Creditors of the trade can reach the property; it is sold with the shares if you sell the business'],
          ['You own it personally', 'You let it to your company', 'Rent is taxed on you as income; Business Asset Disposal Relief on the premises is restricted if you charge rent'],
          ['Holding company with two subsidiaries', 'A holding company owns the trading company and a property company, which lets to the trading company', 'Group reliefs available; a large property can affect trading status for Business Asset Disposal Relief on a later sale'],
          ['Sister companies, no holding company', 'You own both companies directly', 'The property company can pay 25% on all its profit (see below)'],
        ], after: 'Simplified. The right answer depends on your plans to sell, borrow or pass the business on.' },
        '<p>The sister company point matters. A property company that lets to a company connected with it is not letting commercially for corporation tax, so it can be a close investment-holding company and lose the 19% rate. Where the property company and the tenant sit under the same holding company, letting to a group trading company is a permitted purpose and the normal rates apply. Associated companies also share the £50,000 and £250,000 limits.</p>',
        '<p>Within a group, a property can usually be moved between companies without SDLT under group relief, but the relief is withdrawn if the buyer leaves the group within 3 years. Gains on assets moved inside a group are usually deferred until the asset leaves it.</p>',
      ],
    },
    {
      id: 'steps', h2: 'What are the steps to buy premises through your company?', toc: 'The steps',
      body: [
        '<ol><li>Decide which company will own the property, and form it first if it is new. The lender and solicitor need the buyer\'s name.</li><li>Plan how the company will pay: its own cash, a director\'s loan, new shares or borrowing, and the tax effect of each.</li><li>Make an offer, then instruct a solicitor and raise VAT, fixtures and lease questions in pre-contract enquiries.</li><li>If the company is borrowing, the lender values the property and reviews the company\'s accounts, so keep the books up to date.</li><li>Exchange and complete. File the SDLT return and pay within 14 days.</li><li>Record the fixtures value and claim capital allowances in the company tax return.</li></ol>',
        '<p>After completion, record the property in the company\'s fixed asset register at cost, including stamp duty and legal fees. If a property company lets to your trading company, put a written lease in place at a market rent, so both sets of accounts and tax returns reflect it properly.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is there a stamp duty surcharge when a company buys commercial property?', a: 'No. The 5% higher rates and the 17% company rate apply only to residential property. A company buying a shop, office or warehouse in England or Northern Ireland pays the non-residential rates: 0%, 2% and 5%.' },
    { q: 'Should I buy my business premises personally or through my company?', a: 'It depends on your plans. Company ownership means the purchase is funded from profits taxed at 19% to 25%. Personal ownership means you pay income tax on rent from your company, and it affects Business Asset Disposal Relief when you sell. We compare both on your figures.' },
    { q: 'Can I claim capital allowances when my company buys a building?', a: 'Not on the land or the cost of the building itself, but you can on fixtures such as heating, lighting and electrics. For a used building, agree the fixtures value with the seller, usually by a section 198 election within 2 years.' },
    { q: 'Can I lend my company the money to buy the property?', a: 'Yes. Many owners lend money to the company rather than buying more shares. The loan shows on your director\'s loan account and the company can repay it later with no tax. If it pays you interest, that is deductible for the company and taxable on you.' },
    { q: 'Can my property company let to my trading company?', a: 'Yes, but the structure matters. If the two companies are sisters owned directly by you, the property company can be taxed at 25% on all its profit. Under a holding company, letting to a group trading company normally keeps the 19% small profits rate available.' },
  ],

  sources: [
    ['https://www.gov.uk/stamp-duty-land-tax/nonresidential-and-mixed-rates', 'GOV.UK: SDLT on non-residential and mixed-use property'],
    ['https://www.gov.uk/stamp-duty-land-tax', 'GOV.UK: Stamp Duty Land Tax (14-day deadline)'],
    ['https://www.gov.uk/work-out-capital-allowances/rates-and-pools', 'GOV.UK: Capital allowances rates and pools'],
    ['https://www.gov.uk/guidance/claiming-capital-allowances-for-structures-and-buildings', 'GOV.UK: Structures and buildings allowance'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca26470', 'HMRC Capital Allowances Manual: fixtures pooling and fixed value requirements'],
    ['https://www.legislation.gov.uk/ukpga/2010/4/section/18N', 'Corporation Tax Act 2010, s18N: close investment-holding companies'],
    ['https://www.gov.uk/hmrc-internal-manuals/stamp-duty-land-tax-manual/sdltm23010', 'HMRC SDLT Manual: group relief withdrawal'],
  ],

  related: [
    '/resources/buy-to-let-limited-company/',
    '/resources/business-asset-disposal-relief/',
    '/resources/stamp-duty-commercial-property/',
    '/resources/capital-allowances-explained/',
  ],
};
