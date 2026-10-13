// Guide: /resources/stamp-duty-commercial-property/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the HMRC SDLT Manual (SDLTM03800), Revenue Scotland and the Welsh Government
// on 13 October 2026. Re-check each April and after each Budget (UK, Scottish and Welsh).
export default {
  url: '/resources/stamp-duty-commercial-property/',
  section: 'business-finance',
  title: 'Stamp Duty on Commercial Property 2026-27 | Severin Finance',
  description: 'Commercial and mixed-use SDLT: 0% to £150,000, 2% to £250,000, 5% above. Leases, mixed use, the 14-day return, Scotland and Wales. Free consultation.',
  h1: 'Stamp duty on commercial property',
  summary: 'Non-residential and mixed-use SDLT bands, tax on leases, and the 14-day return.',
  topic: 'Stamp Duty Land Tax on non-residential and mixed-use property',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/commercial-mortgages/', label: 'Our commercial mortgage service',
    boxTitle: 'Buying commercial property?', text: 'We arrange commercial mortgages with lenders and build the stamp duty and other purchase costs into your funding plan from the start.',
  },

  hero: {
    answer: 'In England and Northern Ireland, commercial and mixed-use property pays Stamp Duty Land Tax at 0% on the first £150,000, 2% on the next £100,000 and 5% above £250,000. A £275,000 freehold shop costs £3,250. On a new lease, rent with a net present value over £150,000 also pays 1%.',
  },

  tldr: [
    'Freehold or lease premium: <strong>0%</strong> to £150,000, <strong>2%</strong> to £250,000, <strong>5%</strong> above.',
    'New lease rent: <strong>1%</strong> on net present value from £150,001 to £5 million, <strong>2%</strong> above.',
    'Mixed-use property, such as a shop with a flat above, pays the <strong>non-residential</strong> rates.',
    'The return and payment are due <strong>within 14 days</strong> of completion.',
    'Scotland uses LBTT and Wales uses LTT, with different bands.',
  ],

  sections: [
    {
      id: 'rates', h2: 'How much stamp duty do you pay on commercial property?', toc: 'The rates',
      body: [
        '<p>You pay Stamp Duty Land Tax (SDLT) in slices: each rate applies only to the part of the price inside its band. The same bands apply to freehold purchases, transfers of existing leases and the premium on a new lease. If you are funding the purchase, our <a href="/uk/business-finance/commercial-mortgages/">commercial mortgage</a> team builds the tax into your budget, because lenders usually expect it to come from your own funds.</p>',
        { caption: 'SDLT on non-residential and mixed-use property (England and Northern Ireland)', head: ['Part of the price or premium', 'SDLT rate'], rows: [
          ['Up to £150,000', '0%'],
          ['£150,001 to £250,000', '2%'],
          ['Above £250,000', '5%'],
        ], after: 'Source: GOV.UK, Stamp Duty Land Tax: non-residential and mixed rates. Checked 13 October 2026.' },
        { caption: 'Illustrative SDLT on non-residential freeholds', head: ['Price', 'SDLT', 'How it is made up'], rows: [
          ['£150,000', '£0', 'All in the 0% band'],
          ['£275,000', '£3,250', '£2,000 at 2% plus £1,250 at 5%'],
          ['£600,000', '£19,500', '£2,000 at 2% plus £17,500 at 5%'],
          ['£1,500,000', '£64,500', '£2,000 at 2% plus £62,500 at 5%'],
        ], after: 'Illustrative figures, before any VAT on the price.' },
        '<p>These rates have not changed since the slice system for non-residential property began in March 2016. The residential surcharges, such as the 5% for additional homes and the 2% for buyers who are not UK resident, apply to residential property only, so they do not apply to commercial or mixed-use purchases.</p>',
      ],
    },
    {
      id: 'mixed-use', h2: 'Does mixed-use property pay the commercial rates?', toc: 'Mixed use',
      body: [
        '<p>Yes. If one purchase includes both residential and non-residential parts, the whole price is taxed at the non-residential rates. GOV.UK gives the example of a flat connected to a shop, a doctor\'s surgery or an office.</p>',
        '<p>Non-residential property includes:</p>',
        '<ul><li>shops, offices, warehouses, pubs and other commercial buildings</li><li>agricultural land that is part of a working farm, and forests</li><li>land that is not part of the garden or grounds of a home</li><li>property that is not suitable to live in and cannot be made suitable</li><li>6 or more homes bought in a single transaction</li></ul>',
        { caption: 'Illustrative comparison: a £600,000 purchase', head: ['Type of purchase', 'SDLT'], rows: [
          ['Shop with a flat above (mixed use)', '£19,500'],
          ['A house, as your only home', '£20,000'],
          ['A house, when you already own a home (5% surcharge)', '£50,000'],
        ], after: 'Illustrative figures at the rates in force on 13 October 2026, in England or Northern Ireland, ignoring first-time buyer relief.' },
        '<h3>When a home with land is not mixed use</h3>',
        '<p>Claims that a house is mixed use because of the land around it are where most disputes arise. Land that is enjoyed with the house as its garden or grounds is residential, whatever its size. HMRC looks at how the land has been used and will be used, its layout, how close it is to the house, how big it is and any legal restrictions. Tribunals have rejected many claims based on a field, a footpath or occasional business use, so take advice before you file on that basis.</p>',
      ],
    },
    {
      id: 'leases', h2: 'How is stamp duty worked out on a commercial lease?', toc: 'Leases',
      body: [
        '<p>On a new lease you can pay SDLT on two things, worked out separately and added together: the premium (any lump sum you pay for the lease), at the rates above, and the rent, based on its net present value (NPV).</p>',
        { caption: 'SDLT on the rent under a new non-residential lease', head: ['Net present value of the rent', 'SDLT rate'], rows: [
          ['£0 to £150,000', '0%'],
          ['£150,001 to £5,000,000', '1%'],
          ['Above £5,000,000', '2%'],
        ], after: 'Source: GOV.UK, Stamp Duty Land Tax: non-residential and mixed rates.' },
        '<p>The NPV adds up the rent over the whole term, discounted at 3.5% a year. For years after the fifth, HMRC uses the highest rent payable in any 12 months of the first five years. HMRC\'s <a href="https://www.tax.service.gov.uk/calculate-stamp-duty-land-tax/">SDLT calculator</a> works it out for leases.</p>',
        { caption: 'Illustrative example: a 10-year office lease, no premium', head: ['Step', 'Amount'], rows: [
          ['Rent', '£40,000 a year, no VAT'],
          ['NPV of 10 years\' rent at 3.5%', 'About £332,660'],
          ['Less the 0% band', '£150,000'],
          ['SDLT at 1% on the rest', 'About £1,826'],
        ], after: 'Illustrative figures. Use HMRC\'s calculator for the exact amount.' },
        '<ul><li>If the landlord has opted to tax before the lease starts, the VAT on the rent counts towards the NPV.</li><li>If you take over (are assigned) an existing lease, you only pay SDLT on the price you pay for it, not on the rent.</li><li>If the rent is variable or not yet known, you estimate it, then look again when it is known or after the fifth year. If more tax is due, you tell HMRC within 30 days.</li></ul>',
      ],
    },
    {
      id: 'return-and-deadline', h2: 'When do you file the SDLT return and pay?', toc: 'The 14-day deadline',
      body: [
        '<p>You must send the SDLT return and pay the tax within 14 days of completion. Your solicitor or conveyancer usually files it and pays on your behalf, often on the day of completion, and adds the tax to their bill.</p>',
        '<p>You still need to send a return for most purchases under £150,000, even when no tax is due. For new leases, GOV.UK says no return is needed only if:</p>',
        '<ul><li>the lease is for 7 years or more, the premium is under £40,000 and the annual rent is under £1,000, or</li><li>the lease is for less than 7 years and no SDLT is due on the premium or the rent</li></ul>',
        '<p>HMRC charges penalties and interest if the return or payment is late, so make sure the money is ready at completion. Buying several properties from the same seller can make the purchases "linked", which means they are taxed together.</p>',
      ],
    },
    {
      id: 'vat', h2: 'Is stamp duty charged on the VAT?', toc: 'VAT on the price',
      body: [
        '<p>Yes, if VAT is charged on the price. HMRC\'s SDLT Manual says chargeable consideration includes VAT payable on the purchase, even when you can reclaim that VAT as input tax. Commercial property often carries VAT because the seller has opted to tax it.</p>',
        { caption: 'Illustrative example: a £500,000 office where the seller has opted to tax', head: ['Price used for SDLT', 'SDLT'], rows: [
          ['£500,000 (no VAT)', '£14,500'],
          ['£600,000 (£500,000 plus 20% VAT)', '£19,500'],
        ], after: 'Illustrative figures. Source: HMRC SDLT Manual SDLTM03800.' },
        '<p>If the sale qualifies as a transfer of a going concern, for example a let building sold with its tenant in place and the right VAT conditions met, no VAT is charged and SDLT is worked out on the VAT-free price. Getting this right before exchange can save both the VAT cash flow and the extra stamp duty. Our guide to <a href="/resources/vat-on-property-development/">VAT on property development</a> explains the option to tax.</p>',
      ],
    },
    {
      id: 'scotland-and-wales', h2: 'What do you pay in Scotland and Wales?', toc: 'Scotland and Wales',
      body: [
        '<p>SDLT only applies in England and Northern Ireland. Scotland has Land and Buildings Transaction Tax (LBTT), run by Revenue Scotland, and Wales has Land Transaction Tax (LTT), run by the Welsh Revenue Authority. Each has its own bands, lease rules and returns.</p>',
        { caption: 'Non-residential rates on a purchase price, by part of the UK', head: ['Tax and area', 'Bands', 'Tax on £600,000'], rows: [
          ['SDLT: England and Northern Ireland', '0% to £150,000, 2% to £250,000, 5% above', '£19,500'],
          ['LBTT: Scotland', '0% to £150,000, 1% to £250,000, 5% above', '£18,500'],
          ['LTT: Wales', '0% to £225,000, 1% to £250,000, 5% to £1 million, 6% above', '£17,750'],
        ], after: 'Sources: GOV.UK; Revenue Scotland (rates from 25 January 2019); Welsh Government (rates from 22 December 2020). Checked 13 October 2026. Illustrative totals.' },
        '<p>Lease rent is also taxed differently. In Wales, for example, the 0% band on the NPV of rent goes up to £225,000 and the 2% rate starts above £2 million.</p>',
      ],
    },
    {
      id: 'buying-through-a-company', h2: 'Does buying through a company change the stamp duty?', toc: 'Buying via a company',
      body: [
        '<p>Not for commercial property. A company pays the same non-residential rates as an individual, so the choice of buyer usually turns on income tax, corporation tax and how you will take money out. Our guide to <a href="/resources/buying-property-limited-company/">buying property through a limited company</a> compares the options, and our guide to <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a> covers homes, where different SDLT rules apply.</p>',
        '<p>Stamp duty is a cost on top of your deposit, and lenders usually expect you to pay it from your own money. Our guide to <a href="/resources/commercial-mortgage-deposit/">commercial mortgage deposits</a> explains how much cash to plan for. Stamp duty is not tax-deductible as a running cost: it is added to the cost of the property, which reduces the taxable gain when you sell.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the stamp duty on a £500,000 commercial property?', a: '£14,500 in England or Northern Ireland: nothing on the first £150,000, £2,000 on the next £100,000 at 2% and £12,500 on the last £250,000 at 5%. If VAT is charged on the price, SDLT is worked out on the VAT-inclusive figure.' },
    { q: 'Do I pay the 5% surcharge on a shop with a flat above?', a: 'No. A purchase with both residential and non-residential parts is mixed use and pays the non-residential rates on the whole price. The surcharges for additional homes and for buyers who are not UK resident apply to residential property only.' },
    { q: 'Do I pay stamp duty when I rent a commercial unit?', a: 'Only if the net present value of the rent over the lease term is more than £150,000, or you pay a premium over £150,000. Many short, low-rent leases pay nothing, although you may still need to send a return.' },
    { q: 'Who pays the stamp duty, the buyer or the seller?', a: 'The buyer, or the tenant on a new lease. Your solicitor or conveyancer usually files the return and pays the tax for you within 14 days of completion, then adds it to their bill.' },
    { q: 'Can I reclaim stamp duty on commercial property?', a: 'Generally no. SDLT is not refunded when you sell, and it is not a running cost for income or corporation tax. It is added to the cost of the property, which reduces the gain when you eventually sell.' },
  ],

  sources: [
    ['https://www.gov.uk/stamp-duty-land-tax/nonresidential-and-mixed-rates', 'GOV.UK: SDLT on non-residential and mixed-use land'],
    ['https://www.gov.uk/stamp-duty-land-tax', 'GOV.UK: Stamp Duty Land Tax (14-day deadline)'],
    ['https://www.gov.uk/stamp-duty-land-tax-leasehold-purchases', 'GOV.UK: SDLT on leasehold sales and transfers'],
    ['https://www.gov.uk/stamp-duty-land-tax/residential-property-rates', 'GOV.UK: SDLT residential rates'],
    ['https://www.gov.uk/hmrc-internal-manuals/stamp-duty-land-tax-manual/sdltm03800', 'HMRC SDLT Manual: interaction with VAT'],
    ['https://revenue.scot/taxes/land-buildings-transaction-tax/non-residential-property', 'Revenue Scotland: LBTT on non-residential property'],
    ['https://www.gov.wales/land-transaction-tax-rates-and-bands', 'Welsh Government: Land Transaction Tax rates and bands'],
  ],

  related: [
    '/resources/buying-property-limited-company/',
    '/resources/commercial-mortgage-deposit/',
    '/resources/vat-on-property-development/',
    '/resources/capital-allowances-explained/',
  ],
};
