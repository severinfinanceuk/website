// Guide: /resources/60-day-property-return/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and legislation.gov.uk (FA 2009 Sch 55 item 2A, Sch 56 item 3B)
// on 13 October 2026. Re-check each April and after each Budget.
export default {
  url: '/resources/60-day-property-return/',
  section: 'cross-border',
  title: '60-Day Property Return for Non-Residents | Severin Finance',
  description: 'Selling UK property from abroad? Report it to HMRC within 60 days of completion, even with no tax due. Rebasing, rates and penalties. Free consultation.',
  h1: 'Selling UK property from abroad: the 60-day return',
  crumb: '60-day property return',
  summary: 'Non-residents must report every UK property sale within 60 days of completion, even with no tax.',
  topic: 'Capital Gains Tax returns for non-residents selling UK property',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/cross-border/non-resident-uk-tax/', label: 'Our non-resident tax service',
    boxTitle: 'Selling a UK property?', text: 'We work out your gain using the best method, file the 60-day return and carry the sale through to your annual UK tax return.',
  },

  hero: {
    answer: 'If you live abroad and sell or give away UK property or land, you must report it to HMRC within 60 days of completion, even if there is no tax to pay or you made a loss. Any tax is due by the same date. For 2026-27, gains are taxed at 18% or 24% after the £3,000 annual exempt amount.',
  },

  tldr: [
    'Non-residents report <strong>every</strong> disposal of UK land or property: homes, buy-to-lets, commercial property and land.',
    'The deadline is <strong>60 days after completion</strong>, for completions on or after 27 October 2021. Tax is due by the same date.',
    'You must report even with <strong>no tax to pay</strong>, a loss, or a claim to private residence relief.',
    'Gains are usually measured from <strong>5 April 2015</strong> (residential) or <strong>5 April 2019</strong> (non-residential) values.',
    'A late return costs <strong>£100</strong> straight away, with more penalties at 6 and 12 months.',
  ],

  sections: [
    {
      id: 'who-must-report', h2: 'Who has to file a 60-day property return?', toc: 'Who must report',
      body: [
        '<p>Anyone who is not UK resident and disposes of UK land or property must file one, whatever the property is and whatever the result. Our <a href="/cross-border/non-resident-uk-tax/">non-resident tax accountants</a> file these returns for people living abroad and check which calculation gives the lowest gain. A disposal includes a sale, a gift and some transfers between family members.</p>',
        { caption: 'What non-residents must report', head: ['Type of disposal', 'Report within 60 days?'], rows: [
          ['UK home or buy-to-let (residential)', 'Yes'],
          ['Shop, office, warehouse or land (non-residential)', 'Yes'],
          ['Mixed-use property, such as a flat above a shop', 'Yes'],
          ['Shares in a company that gets at least 75% of its value from UK land, where you hold at least 25% (an indirect disposal)', 'Yes'],
          ['Disposal by a non-resident company', 'No: it pays Corporation Tax instead'],
        ], after: 'Source: GOV.UK, Tell HMRC about Capital Gains Tax on UK property or land if you\'re not a UK resident (updated 13 January 2026). Checked 13 October 2026.' },
        '<p>If you own the property jointly, each owner reports separately and gives details of their own share of the gain or loss. Not sure whether you count as non-resident in the year of sale? Our guide to the <a href="/resources/statutory-residence-test/">Statutory Residence Test</a> explains how it is decided.</p>',
      ],
    },
    {
      id: 'deadline', h2: 'When is the 60-day deadline?', toc: 'The deadline',
      body: [
        '<p>The 60 days start from the day after completion, when the property legally changes hands. Both the return and any tax must reach HMRC by then. Completions between 6 April 2020 and 26 October 2021 had a 30-day limit, and HMRC no longer accepts online reports of disposals made on or before 5 April 2020.</p>',
        '<p>The tax year of the gain follows a different rule. For an ordinary sale, the date of disposal is the date you exchange contracts, not completion. So a sale that exchanges on 20 March 2027 and completes on 20 April 2027 falls in 2026-27, but the 60 days still run from 20 April 2027.</p>',
        { caption: 'Illustrative deadlines', head: ['Completion date', 'Report and pay by'], rows: [
          ['1 November 2026', '31 December 2026'],
          ['15 January 2027', '16 March 2027'],
          ['20 April 2027', '19 June 2027'],
        ], after: 'Count 60 calendar days from the day after completion.' },
      ],
    },
    {
      id: 'no-tax-due', h2: 'Do you still report if there is no tax to pay?', toc: 'No tax to pay',
      body: [
        '<p>Yes. GOV.UK says non-residents must report by the deadline even if there is no tax to pay, they made a loss, or they are already registered for Self Assessment. This is the biggest difference from the rules for UK residents, who only need to report within 60 days when they have tax to pay on UK residential property. Our guide to <a href="/resources/capital-gains-tax-on-property/">capital gains tax on property</a> covers the rules for UK residents.</p>',
        '<p>Common reasons a non-resident return shows no tax are private residence relief on a former main home, a gain below the £3,000 annual exempt amount, or a gain that disappears once the property is valued at 2015 or 2019 prices. All of these still need a return.</p>',
      ],
    },
    {
      id: 'working-out-the-gain', h2: 'How is the gain worked out for non-residents?', toc: 'Working out the gain',
      body: [
        '<p>Non-residents have been taxed on UK residential property since April 2015 and on other UK property and land since April 2019, so the default is to tax only the growth in value since then. This is called rebasing. You can choose another method if it gives a better result.</p>',
        { caption: 'Calculation methods for non-residents', head: ['Property', 'Rebase to value at', 'Other options'], rows: [
          ['Residential, owned before 6 April 2015', '5 April 2015', 'Time apportionment, or the gain over the whole period of ownership'],
          ['Non-residential or indirect disposal, owned before 6 April 2019', '5 April 2019 (the default)', 'The gain over the whole period of ownership'],
          ['Mixed use', '5 April 2015 for the residential part, 5 April 2019 for the rest', 'As above for each part'],
        ], after: 'Source: GOV.UK, Capital Gains Tax for non-residents: calculating taxable gain or loss (updated 6 April 2026).' },
        '<p>The whole-period method usually only helps if it produces a loss. You need a market value at the rebasing date, so ask a valuer for a retrospective valuation rather than guessing. You can deduct buying and selling costs, such as legal and estate agent fees, and the cost of improvements (not repairs).</p>',
        '<p>If the property was once your main home, private residence relief can cover part of the gain, and the final 9 months of ownership always qualify. For any tax year when you were non-resident, though, the home only counts if you or your spouse or civil partner spent at least 90 nights there in that year.</p>',
      ],
    },
    {
      id: 'tax-rates', h2: 'How much tax do non-residents pay?', toc: 'Rates and example',
      body: [
        '<p>For 2026-27, individuals pay Capital Gains Tax at 18% on gains that fall within their unused basic rate band and 24% on the rest, after the £3,000 annual exempt amount. Residential and non-residential property are taxed at the same rates. Trustees and personal representatives pay 24%.</p>',
        { caption: 'Illustrative example: a flat sold in 2026-27 by someone with no other UK income', head: ['Step', 'Amount'], rows: [
          ['Sale price', '£400,000'],
          ['Less value at 5 April 2015', '£300,000'],
          ['Less buying, selling and improvement costs', '£10,000'],
          ['Gain', '£90,000'],
          ['Less annual exempt amount', '£3,000'],
          ['Taxable gain', '£87,000'],
          ['£37,700 at 18%', '£6,786'],
          ['£49,300 at 24%', '£11,832'],
          ['Tax due within 60 days', '£18,618'],
        ], after: 'Illustrative figures only. Any UK income uses up the basic rate band first, and a tax treaty (double taxation agreement) can affect how the gain is taxed in the country where you live.' },
      ],
    },
    {
      id: 'how-to-report', h2: 'How do you file the return and pay?', toc: 'Filing and paying',
      body: [
        '<p>You report through HMRC\'s online <a href="https://www.gov.uk/report-and-pay-your-capital-gains-tax/if-you-sold-a-property-in-the-uk-on-or-after-6-april-2020">Capital Gains Tax on UK property account</a>. You can create sign-in details the first time you use it, an authorised agent can file for you, or you can fill in the form online, print it and post it.</p>',
        '<ul><li>the property address and postcode, and the property type</li><li>the dates you bought it, exchanged contracts and completed</li><li>the purchase price (or value at the rebasing date) and the sale price</li><li>your costs and any reliefs you are claiming</li></ul>',
        '<p>After you report, HMRC gives you a 14-character payment reference starting with X. Use it to pay before the deadline. If you file a Self Assessment return, you must also include the sale in the capital gains section for that tax year (unless it was your main home and private residence relief covers it). You enter the tax already charged on your property returns, so it is credited against your bill. Our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> has the dates.</p>',
      ],
    },
    {
      id: 'penalties', h2: 'What happens if you miss the 60-day deadline?', toc: 'Penalties',
      body: [
        '<p>A late return costs £100 straight away, even when no tax is due, and the penalties increase the longer it stays outstanding. They apply to each late return.</p>',
        { caption: 'Late filing penalties for the property return', head: ['How late', 'Penalty'], rows: [
          ['1 day', '£100'],
          ['3 months', 'HMRC can charge £10 a day for up to 90 days (a maximum of £900)'],
          ['6 months', '5% of the tax due or £300, whichever is more'],
          ['12 months', 'A further 5% of the tax due or £300, whichever is more (higher if information was withheld deliberately)'],
        ], after: 'Source: Finance Act 2009, Schedule 55 (item 2A covers this return) and HMRC factsheet CC/FS18a. Checked 13 October 2026.' },
        '<p>Interest runs on tax paid late, at 7.75% a year from 9 January 2026 (Bank of England base rate plus 4 percentage points). Late payment penalties come later: they apply if tax is still unpaid 30 days after 31 January following the end of the tax year. You can appeal if you had a reasonable excuse, and our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a> explains how.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I have to report a UK property sale if I made a loss?', a: 'Yes. Non-residents must report every disposal of UK property or land within 60 days of completion, including losses. Reporting the loss also records it, so you can set it against other UK property gains in the same year or carry it forward.' },
    { q: 'Does the 60-day rule apply to commercial property and land?', a: 'Yes, for non-residents. Shops, offices, land and mixed-use property must all be reported within 60 days of completion. Non-residential property is usually rebased to its value on 5 April 2019, so only growth since then is taxed.' },
    { q: 'I sold my former home in the UK. Do I need to report it?', a: 'Yes. Even if private residence relief covers the whole gain, a non-resident must still file the return within 60 days of completion. Years when you were non-resident only qualify if you or your spouse spent at least 90 nights in the home.' },
    { q: 'Can an accountant file the 60-day return for me?', a: 'Yes. An authorised agent can file through HMRC\'s Capital Gains Tax on UK property service on your behalf. You still pay the tax using the payment reference HMRC gives you, which starts with X.' },
    { q: 'Can I change a 60-day return after I have sent it?', a: 'Usually, yes. In your Capital Gains Tax on UK property account you can view and change returns you sent yourself. You cannot change one for 2023-24 or earlier, or after sending your Self Assessment return for that year. Agents use a printed form.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/capital-gains-tax-for-non-residents-uk-residential-property', 'GOV.UK: Capital Gains Tax on UK property if you are not UK resident'],
    ['https://www.gov.uk/guidance/capital-gains-tax-for-non-residents-calculating-taxable-gain-or-loss', 'GOV.UK: Non-residents, calculating your gain or loss'],
    ['https://www.gov.uk/report-and-pay-your-capital-gains-tax/if-you-sold-a-property-in-the-uk-on-or-after-6-april-2020', 'GOV.UK: Report and pay Capital Gains Tax on UK property'],
    ['https://www.gov.uk/capital-gains-tax/rates', 'GOV.UK: Capital Gains Tax rates'],
    ['https://www.gov.uk/government/publications/private-residence-relief-hs283-self-assessment-helpsheet/hs283-private-residence-relief-2025', 'GOV.UK: Private Residence Relief (HS283)'],
    ['https://www.legislation.gov.uk/ukpga/2009/10/schedule/55/paragraph/1', 'legislation.gov.uk: Finance Act 2009, Schedule 55'],
    ['https://www.gov.uk/government/publications/compliance-checks-penalties-if-you-dont-file-income-tax-capital-gains-tax-and-annual-tax-on-enveloped-dwellings-returns-on-time-ccfs18a/compliance-checks-penalties-if-you-do-not-file-income-tax-capital-gains-tax-and-annual-tax-on-enveloped-dwellings-returns-on-time-ccfs18a', 'GOV.UK: Penalties for late returns (CC/FS18a)'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates'],
  ],

  related: [
    '/resources/capital-gains-tax-on-property/',
    '/resources/statutory-residence-test/',
    '/resources/non-resident-landlord-scheme/',
    '/resources/hmrc-penalties-explained/',
  ],
};
