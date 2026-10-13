// Guide: /resources/capital-gains-tax-on-property/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and the HMRC Capital Gains Manual on 13 October 2026 (sources below). Also checked:
// gov.uk/tax-sell-home/absence-from-home (final 9 months, absence periods), gov.uk/tax-sell-home/nominating-a-home (2 years),
// gov.uk/tax-sell-property (what you pay it on), HMRC manual CG15250 (SDLT and fees allowable),
// gov.uk HMRC interest rates (7.75% from 9 January 2026).
// Scope: UK residents. Non-residents are covered by /resources/60-day-property-return/.
// Re-check each April and after each Budget.
export default {
  url: '/resources/capital-gains-tax-on-property/',
  section: 'tax',
  title: 'Capital Gains Tax on Property 2026-27 | Severin Finance',
  description: 'Selling a second home or buy-to-let? 2026-27 CGT rates (18% and 24%), the £3,000 allowance, the 60-day return, reliefs and costs. Free consultation.',
  h1: 'Capital gains tax on property: selling a second home or buy-to-let',
  crumb: 'CGT on property',
  summary: 'CGT rates, the 60-day return, private residence relief and the costs you can deduct.',
  topic: 'Capital Gains Tax on UK residential property',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/capital-gains-tax-accountant/', label: 'Our capital gains tax service',
    boxTitle: 'Selling a property?', text: 'We work out the gain from your completion statements, check every relief and file the 60-day return for you.',
  },

  hero: {
    answer: 'UK residents who sell a second home or buy-to-let pay Capital Gains Tax on the gain above the £3,000 allowance for 2026-27, at 18% within the basic rate band and 24% above it. If there is tax to pay, you must report it and pay within 60 days of completion. Your main home is usually exempt.',
  },

  tldr: [
    'CGT applies to buy-to-lets, second homes, inherited property and land, not usually your <strong>main home</strong>.',
    '2026-27 rates: <strong>18%</strong> within the basic rate band, <strong>24%</strong> above it, after a <strong>£3,000</strong> allowance.',
    'Report and pay within <strong>60 days of completion</strong> if there is tax to pay on UK residential property.',
    'Deduct buying and selling costs, Stamp Duty Land Tax and improvements, but not repairs or decorating.',
    'Letting Relief now only applies if you <strong>lived with your tenants</strong>, capped at <strong>£40,000</strong>.',
  ],

  sections: [
    {
      id: 'who-pays', h2: 'When do you pay capital gains tax on property?', toc: 'Who pays',
      body: [
        '<p>You pay Capital Gains Tax when you sell or give away a property that is not your main home and it has gone up in value. That includes buy-to-let flats, holiday homes, inherited houses, land and business premises. Our <a href="/uk/tax/capital-gains-tax-accountant/">capital gains tax accountants</a> work out the gain, check every relief and file the 60-day return for you.</p>',
        '<p>This guide is for people who are UK resident when they sell. If you live abroad, different rules apply: see our guide to the <a href="/resources/60-day-property-return/">60-day property return for non-residents</a>.</p>',
        '<p>You usually pay nothing on a gift to your spouse, civil partner or a charity. If you own a property jointly, each owner reports and pays tax on their own share of the gain, and each has their own allowance.</p>',
      ],
    },
    {
      id: 'rates', h2: 'What are the capital gains tax rates on property for 2026-27?', toc: 'Rates and allowance',
      body: [
        '<p>Gains on residential property are taxed at 18% or 24%, the same rates as other assets. The rate depends on how much of your basic rate band your income has already used.</p>',
        { caption: 'Capital Gains Tax rates and allowance for individuals', head: ['Item', '2025-26', '2026-27'], rows: [
          ['Annual tax-free allowance', '£3,000', '£3,000'],
          ['Gains within your unused basic rate band', '18%', '18%'],
          ['Gains above the basic rate band', '24%', '24%'],
          ['Trustees and personal representatives', '24%', '24%'],
          ['Basic rate band used for the test', '£37,700', '£37,700'],
        ], after: 'Source: GOV.UK, Capital Gains Tax rates and allowances. Checked 13 October 2026. The allowance is £1,500 for most trusts.' },
        '<p>Your taxable gain is added on top of your taxable income. The part that fits into what is left of the £37,700 basic rate band is taxed at 18%, and the rest at 24%. A higher or additional rate taxpayer pays 24% on the whole taxable gain.</p>',
      ],
    },
    {
      id: 'costs', h2: 'What costs can you deduct from the gain?', toc: 'Deductible costs',
      body: [
        '<p>You can deduct the costs of buying, selling and improving the property. HMRC allows:</p>',
        '<ul><li>the purchase price (or market value, if you were given the property)</li><li>Stamp Duty Land Tax paid when you bought</li><li>solicitors\' and estate agents\' fees on the purchase and the sale</li><li>valuation costs needed for the tax calculation, and advertising to find a buyer</li><li>improvement works that added to the property, such as an extension or a loft conversion</li></ul>',
        '<p>You cannot deduct normal maintenance such as decorating and repairs, or any cost you have already claimed against your rental income. Keep invoices for improvements: HMRC can ask for them years later. If you inherited the property, your cost is normally the value used for Inheritance Tax on the date of death.</p>',
        { caption: 'Illustrative example: buy-to-let sold in June 2026', head: ['Item', 'Amount'], rows: [
          ['Sale price', '£400,000'],
          ['Less estate agent and legal fees on the sale', '£6,000'],
          ['Less purchase price', '£250,000'],
          ['Less Stamp Duty Land Tax and legal fees on the purchase', '£6,000'],
          ['Less extension built while letting', '£30,000'],
          ['Gain', '£108,000'],
          ['Less annual allowance', '£3,000'],
          ['Taxable gain', '£105,000'],
          ['Tax: £7,700 at 18% plus £97,300 at 24% (seller with £30,000 taxable income)', '£24,738'],
        ], after: 'Illustrative figures only. The seller has £7,700 of basic rate band left (£37,700 minus £30,000). The tax is due within 60 days of completion.' },
      ],
    },
    {
      id: 'sixty-days', h2: 'How does the 60-day capital gains tax return work?', toc: 'The 60-day return',
      body: [
        '<p>If you are UK resident and sell UK residential property with tax to pay, you must report the gain and pay the tax within 60 days of completion. You use a Capital Gains Tax on UK property account on GOV.UK, which is separate from Self Assessment.</p>',
        { caption: 'What UK residents must do after selling UK property', head: ['Situation', 'What to do'], rows: [
          ['Residential property, tax to pay', 'Report and pay within 60 days of completion'],
          ['Total gains under the £3,000 allowance', 'No online report needed'],
          ['Your main home, fully covered by Private Residence Relief', 'No tax to pay, so no 60-day report'],
          ['Already registered for Self Assessment', 'Also include the sale on your tax return for that year (for a 2026-27 sale, due by 31 January 2028)'],
          ['Commercial property or land', 'Report on your Self Assessment return, or the real time CGT service if you are not in Self Assessment'],
        ], after: 'Source: GOV.UK, Report and pay your Capital Gains Tax on UK property. Checked 13 October 2026.' },
        '<p>The 60 days start on the completion date, not exchange of contracts, so ask your solicitor for the completion statement straight away. Late reports and late payments can bring a penalty, and HMRC charges interest on late tax (7.75% a year from 9 January 2026). If you are new to Self Assessment, our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> sets out the dates.</p>',
      ],
    },
    {
      id: 'main-home', h2: 'Do you pay capital gains tax when you sell your home?', toc: 'Your main home',
      body: [
        '<p>Usually not. Private Residence Relief makes the gain tax-free if the property was your only or main home for the whole time you owned it, and:</p>',
        '<ul><li>you have not let part of it out (a lodger does not count)</li><li>you have not used part of it only for business</li><li>the grounds, including all buildings, are less than 5,000 square metres</li><li>you did not buy it just to make a gain</li></ul>',
        '<h3>Time away and second homes</h3>',
        '<p>If the property was your main home at some point, the last 9 months of ownership always qualify. Some absences also count as living there, as long as you lived in the home before and after: periods adding up to 3 years for any reason, up to 4 years if you had to live elsewhere in the UK for work, and any period working outside the UK.</p>',
        '<p>If you have two homes, you can nominate which is your main home by writing to HMRC within 2 years of each change in the homes you have. Married couples and civil partners can only have one main home between them at any time.</p>',
      ],
    },
    {
      id: 'letting-relief', h2: 'Can you still claim Letting Relief?', toc: 'Letting Relief',
      body: [
        '<p>Only if you lived in the home at the same time as your tenants. If you moved out and let the whole property, Letting Relief does not apply, although Private Residence Relief still covers the years you lived there and the final 9 months.</p>',
        '<p>Where it does apply, Letting Relief is the lowest of:</p>',
        '<ul><li>the Private Residence Relief you get</li><li>£40,000</li><li>the gain made on the part you let out</li></ul>',
        '<p>It does not cover any part of the gain made while the home was empty.</p>',
      ],
    },
    {
      id: 'reduce', h2: 'How can you reduce capital gains tax on a property sale?', toc: 'Reducing the bill',
      body: [
        '<p>The main legal ways are to use every allowance, deduct every allowable cost and plan the timing and ownership before you sell.</p>',
        '<ul><li><strong>Spouse or civil partner:</strong> transfers between you are usually tax-free, so a property held jointly can use two allowances and two basic rate bands.</li><li><strong>Losses:</strong> a loss on another asset, reported to HMRC, can be set against the gain. You can claim a loss up to 4 years after the end of the tax year you made it.</li><li><strong>Timing:</strong> for CGT, the sale happens when you exchange unconditional contracts, not at completion. Exchanging after 5 April moves the gain into the next tax year, with a new allowance and, if your income will be lower, more of the 18% band. The 60-day clock still runs from completion.</li><li><strong>Records:</strong> missing improvement invoices are the most common reason a gain is higher than it should be.</li></ul>',
        '<p>Thinking of moving rental properties into a company instead? That transfer is itself a sale for CGT and may also bring Stamp Duty Land Tax. Our guides to <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a> and <a href="/resources/section-24-explained/">Section 24</a> explain the trade-offs, and our <a href="/uk/accounting/landlord-accountant/">landlord accountants</a> can model the numbers.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How much capital gains tax will I pay on a buy-to-let?', a: 'Work out the gain (sale price minus purchase price, buying and selling costs and improvements), take off the £3,000 allowance, then apply 18% to the part within your unused basic rate band and 24% to the rest. Report and pay within 60 days of completion.' },
    { q: 'Do I need to file a 60-day return if there is no tax to pay?', a: 'Not if you are UK resident. The 60-day report is needed when there is tax to pay on UK residential property. If your gains are within the £3,000 allowance or covered by relief, no online report is needed. Non-residents must report every sale.' },
    { q: 'Is stamp duty deductible for capital gains tax?', a: 'Yes. Stamp Duty Land Tax paid when you bought the property is an allowable cost, along with solicitors\' and estate agents\' fees on the purchase and sale. Normal repairs and decorating are not deductible.' },
    { q: 'Do I pay capital gains tax on an inherited house?', a: 'Only on any rise in value after the date of death. Your cost is usually the value used for Inheritance Tax. If you sell for more than that, CGT may be due on the gain above your allowance, within 60 days of completion.' },
    { q: 'Can I avoid capital gains tax by moving into my rental property?', a: 'Moving in can earn Private Residence Relief for the time it is genuinely your main home, plus the final 9 months. The years it was let remain taxable. HMRC looks closely at short stays, so take advice before you rely on it.' },
  ],

  sources: [
    ['https://www.gov.uk/capital-gains-tax/rates', 'GOV.UK: Capital Gains Tax rates'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-capital-gains-tax/capital-gains-tax-rates-and-annual-tax-free-allowances', 'GOV.UK: CGT rates and allowances by tax year'],
    ['https://www.gov.uk/report-and-pay-your-capital-gains-tax/if-you-sold-a-property-in-the-uk-on-or-after-6-april-2020', 'GOV.UK: Report and pay CGT on UK property'],
    ['https://www.gov.uk/tax-sell-property/work-out-your-gain', 'GOV.UK: Tax when you sell property: work out your gain'],
    ['https://www.gov.uk/tax-sell-home', 'GOV.UK: Tax when you sell your home'],
    ['https://www.gov.uk/tax-sell-home/let-out-part-of-home', 'GOV.UK: Letting Relief'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg15250', 'HMRC Capital Gains Manual: incidental costs'],
    ['https://www.gov.uk/capital-gains-tax/losses', 'GOV.UK: Capital Gains Tax losses'],
  ],

  related: [
    '/resources/60-day-property-return/',
    '/resources/buy-to-let-limited-company/',
    '/resources/section-24-explained/',
    '/resources/crypto-tax-uk/',
  ],
};
