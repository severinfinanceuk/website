// Guide: /resources/non-resident-landlord-scheme/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK (NRL guidance notes updated 18 March 2026, NRL1 page), HMRC Property Income
// Manual (PIM4810, PIM4860) and legislation.gov.uk (Finance Act 2026 ss6 to 8) on 13 October 2026.
// The 22% NRL deduction rate from 2027-28 is announced (policy paper 27 November 2025) but needs
// secondary legislation: re-check before April 2027.
export default {
  url: '/resources/non-resident-landlord-scheme/',
  section: 'cross-border',
  title: 'Non-Resident Landlord Scheme Explained | Severin Finance',
  description: 'Letting UK property from abroad? Your agent or tenant deducts 20% from the rent unless HMRC approves NRL1. Returns, deadlines and forms. Free consultation.',
  h1: 'The Non-Resident Landlord Scheme explained',
  crumb: 'Non-Resident Landlord Scheme',
  summary: 'How UK rent is taxed when you live abroad, and how to get it paid gross with form NRL1.',
  topic: 'The Non-Resident Landlord Scheme for UK rental income',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/cross-border/non-resident-uk-tax/', label: 'Our non-resident tax service',
    boxTitle: 'Letting UK property from abroad?', text: 'We apply for your rent to be paid gross, prepare your rental accounts and file your UK tax return each year.',
  },

  hero: {
    answer: 'If you live outside the UK for 6 months or more a year, your letting agent, or a tenant paying over £100 a week, deducts basic rate tax (20% for 2026-27) from your rent after expenses. Apply on form NRL1 to be paid in full instead. Either way, you still file a UK tax return.',
  },

  tldr: [
    'The scheme applies if your <strong>usual place of abode</strong> is outside the UK, normally an absence of <strong>6 months or more</strong>.',
    'Agents deduct tax on <strong>any</strong> rent. Tenants with no agent deduct if rent is over <strong>£100 a week</strong>.',
    'Tax is <strong>20%</strong> of rent less allowable expenses for 2026-27, paid to HMRC every quarter.',
    'Apply on <strong>NRL1</strong> (individuals), NRL2 (companies) or NRL3 (trustees) to receive rent gross.',
    'You still declare the rent on a UK tax return, due <strong>31 January</strong> online.',
  ],

  sections: [
    {
      id: 'who-it-applies-to', h2: 'Who counts as a non-resident landlord?', toc: 'Who it applies to',
      body: [
        '<p>You are a non-resident landlord if you receive rent from UK property and your usual place of abode is outside the UK. HMRC normally treats an absence of 6 months or more as meaning your usual home is abroad. Our <a href="/cross-border/non-resident-uk-tax/">non-resident tax accountants</a> deal with the scheme for landlords living outside the UK, from the first application to the annual return.</p>',
        '<p>This is not the same test as tax residence. GOV.UK says you can be a non-resident landlord even if you are UK resident for tax, for example in a year when you leave part way through. Our guide to the <a href="/resources/statutory-residence-test/">Statutory Residence Test</a> explains how residence itself is decided.</p>',
        '<ul><li>Individuals, companies and trustees can all be non-resident landlords.</li><li>In a partnership, each partner is treated as a separate landlord.</li><li>A company based outside the UK pays corporation tax on UK rental profits (since 6 April 2020), but the scheme still applies to its rent.</li></ul>',
      ],
    },
    {
      id: 'who-deducts-tax', h2: 'Who takes the tax off your rent, and how much?', toc: 'Who deducts tax',
      body: [
        '<p>Your letting agent deducts it, or your tenant if there is no agent. They work out the tax each quarter on the rent, less allowable expenses they paid, at the basic rate of income tax: 20% for 2026-27.</p>',
        { caption: 'Who operates the scheme', head: ['Situation', 'Who deducts tax'], rows: [
          ['A letting agent collects the rent', 'The agent, whatever the amount of rent'],
          ['A friend or relative manages the property and handles the rent', 'They count as a letting agent'],
          ['No agent, and the tenant pays over £100 a week on average', 'The tenant'],
          ['No agent, and the tenant pays £100 a week or less', 'No one, unless HMRC tells the tenant to'],
        ], after: 'Source: GOV.UK, Non-resident Landlords Scheme guidance notes (updated 18 March 2026). Checked 13 October 2026.' },
        '<p>Allowable expenses are costs paid wholly and exclusively for the letting, such as agent\'s fees, repairs and insurance. Capital costs, like an extension, do not count, and an agent cannot deduct a cost just because you say it is allowable.</p>',
        { caption: 'Illustrative example: one quarter\'s rent through an agent', head: ['Step', 'Amount'], rows: [
          ['Rent collected in the quarter', '£1,500'],
          ['Less repairs paid by the agent', '£200'],
          ['Net rent', '£1,300'],
          ['Tax deducted at 20% and paid to HMRC', '£260'],
          ['Rent paid on to you', '£1,040'],
        ], after: 'Based on the example in GOV.UK guidance. Illustrative figures: the agent\'s own fee would also be deducted as an expense.' },
      ],
    },
    {
      id: 'receive-rent-gross', h2: 'How do you get your rent paid without tax taken off?', toc: 'Applying with NRL1',
      body: [
        '<p>You apply to HMRC for approval to receive the rent gross. Once approved, HMRC tells your agent or tenant to stop deducting tax, and you pay any tax yourself through your annual return instead.</p>',
        { caption: 'Which form to use', head: ['Landlord', 'Form'], rows: [
          ['Individual', 'NRL1 (online, or printed and posted)'],
          ['Company', 'NRL2'],
          ['Trustees', 'NRL3'],
        ], after: 'If you want a tax agent to act for you, send the printed form with form 64-8 rather than using the online service.' },
        '<p>HMRC normally approves an application if any one of these applies: your UK tax affairs are up to date, you have never had UK tax obligations, or you do not expect to owe UK income tax for the year you apply. It can refuse if it is not satisfied you will meet your UK tax obligations, and you can appeal in writing within 90 days.</p>',
        '<ul><li>You can apply before the letting starts, or up to 3 months before you leave the UK.</li><li>Approval usually takes effect from the first day of the quarter in which HMRC received the application.</li><li>Approval is not an exemption. The rent is still taxable, and HMRC can withdraw approval if you do not keep up with your UK tax obligations.</li></ul>',
      ],
    },
    {
      id: 'agent-and-tenant-duties', h2: 'What do letting agents and tenants have to send HMRC?', toc: 'Agent and tenant returns',
      body: [
        '<p>Agents and tenants who operate the scheme pay the tax quarterly, file an annual return and give you a certificate of the tax deducted. Agents register with HMRC on form NRL4. Tenants must register too.</p>',
        { caption: 'Non-Resident Landlord Scheme deadlines (scheme year 1 April to 31 March)', head: ['What', 'Deadline'], rows: [
          ['Quarterly return and payment (NRLQ)', 'Within 30 days of 30 June, 30 September, 31 December and 31 March'],
          ['Annual information return (NRLY) to HMRC', '5 July'],
          ['Certificate of tax deducted (NRL6) to each landlord', '5 July'],
          ['Records of rent, expenses and residence correspondence', 'Kept for at least 4 years (HMRC asks for 6 where possible)'],
        ], after: 'No quarterly return is needed for a quarter with no tax to pay, unless HMRC sends a notice. Agents file the annual return even if all their landlords are paid gross.' },
        '<p>HMRC can charge interest on tax paid late, up to £3,000 for an incorrect quarterly or annual return, and up to £300 for failing to provide information it asks for, plus up to £60 a day while the failure continues. If you collect the rent yourself from a tenant paying over £100 a week, make sure they know about these duties.</p>',
      ],
    },
    {
      id: 'uk-tax-return', h2: 'Do you still need to file a UK tax return?', toc: 'Your UK tax return',
      body: [
        '<p>Yes, unless HMRC tells you otherwise. You declare your UK rental profit on a Self Assessment return, and any tax your agent or tenant deducted (shown on your NRL6) is credited against the bill. Our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> has the dates: 31 October for paper returns and 31 January for online returns.</p>',
        '<p>GOV.UK says you cannot use HMRC\'s own online return if you live abroad, so you file on paper, through commercial software or through an agent. On the return you also claim:</p>',
        '<ul><li>the personal allowance, if you qualify: British citizens can usually claim it, and others may under a tax treaty (double taxation agreement)</li><li>the 20% tax credit for mortgage interest, which is not deducted as an expense (our guide to <a href="/resources/section-24-explained/">Section 24</a> explains the restriction)</li><li>any losses carried forward from earlier years</li></ul>',
        '<p>Tax deducted under the scheme is a payment on account, not the final bill. If it is more than you owe, HMRC refunds the difference after you file.</p>',
      ],
    },
    {
      id: 'gross-or-deducted', h2: 'Is it better to receive your rent gross?', toc: 'Gross or deducted?',
      body: [
        '<p>Usually, yes, if you can keep your returns and payments up to date. Receiving rent gross improves your cash flow, and you pay the tax by 31 January after the tax year ends, with payments on account if your bill is £1,000 or more.</p>',
        { caption: 'Illustrative example: £12,000 a year of rent, £2,000 of agent-paid expenses, no other UK income, personal allowance available', head: ['Step', 'Tax deducted by agent', 'Rent paid gross'], rows: [
          ['Tax taken from rent during the year', '£2,000', '£0'],
          ['Tax due on the return', '£0 (profit within the personal allowance)', '£0'],
          ['Outcome', '£2,000 refunded after you file', 'No tax, no refund to wait for'],
        ], after: 'Illustrative figures for 2026-27, ignoring mortgage interest. Personal allowance £12,570.' },
        '<p>Deduction can still suit landlords who prefer not to set aside money for the January bill. Either way, you are responsible for the final figure on your return.</p>',
      ],
    },
    {
      id: 'changes-from-2027', h2: 'What changes for non-resident landlords from April 2027?', toc: 'Changes from 2027',
      body: [
        '<p>Property income gets its own income tax rates from 2027-28: 22% basic, 42% higher and 47% additional, under the Finance Act 2026. The government has said it will change the scheme\'s deduction rate to match the 22% property basic rate, through secondary legislation that had not been made when we checked. Scotland and Wales can set their own property rates.</p>',
        '<p>Landlords who file the residence pages (SA109) with their return are exempt from Making Tax Digital for Income Tax until at least April 2027: see our guide to <a href="/resources/making-tax-digital-for-landlords/">Making Tax Digital for landlords</a>. If you plan to sell, you must report the sale within 60 days of completion even with no tax to pay, as our guide to the <a href="/resources/60-day-property-return/">60-day property return</a> explains.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is the Non-Resident Landlord Scheme a separate tax?', a: 'No. It is a way of collecting income tax (or corporation tax for companies) on UK rent paid to landlords who live abroad. The tax deducted is credited against your bill when you file your UK tax return.' },
    { q: 'How long does NRL1 approval take?', a: 'GOV.UK does not give a set time. HMRC approves after an initial check and may ask for more information. Approval usually takes effect from the first day of the quarter in which HMRC received the application, so apply as early as you can.' },
    { q: 'Does the scheme apply if I only rent to one tenant directly?', a: 'Only if the tenant pays more than £100 a week on average, or HMRC tells them to operate it. If a letting agent or a friend handles the rent for you, they must operate the scheme whatever the rent.' },
    { q: 'Does the scheme apply if I am still UK resident for tax?', a: 'It can. The scheme looks at your usual place of abode, not your tax residence. HMRC normally treats an absence of 6 months or more as a usual home outside the UK, so it can apply in the year you leave even if you are UK resident for that year.' },
    { q: 'Can I get back tax my agent deducted?', a: 'Yes, if it is more than your final bill. File your UK tax return with your NRL6 certificate, claim any personal allowance you are entitled to, and HMRC refunds the overpayment after processing the return.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/paying-tax-on-rent-to-landlords-abroad', 'GOV.UK: Paying tax on rent to landlords abroad'],
    ['https://www.gov.uk/government/publications/non-resident-landord-guidance-notes-for-letting-agents-and-tenants-non-resident-landlords-scheme-guidance-notes/what-the-non-resident-landlords-scheme-is', 'GOV.UK: Non-resident Landlords Scheme guidance notes'],
    ['https://www.gov.uk/government/publications/non-resident-landlord-application-to-have-uk-rental-income-without-deduction-of-uk-tax-individuals-nrl1', 'GOV.UK: Apply to receive rent gross (NRL1)'],
    ['https://www.gov.uk/tax-uk-income-live-abroad/rent', 'GOV.UK: Tax on UK rental income if you live abroad'],
    ['https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim4860', 'HMRC Property Income Manual: approval to receive rent gross'],
    ['https://www.gov.uk/government/publications/non-resident-landord-guidance-notes-for-letting-agents-and-tenants-non-resident-landlords-scheme-guidance-notes/record-keeping-for-the-non-resident-landlords-scheme', 'GOV.UK: NRL record keeping and penalties'],
    ['https://www.gov.uk/government/publications/income-tax-changes-to-tax-rates-for-property-savings-and-dividend-income/income-tax-changes-to-tax-rates-for-property-savings-and-dividend-income', 'GOV.UK: Changes to tax rates for property income'],
  ],

  related: [
    '/resources/statutory-residence-test/',
    '/resources/60-day-property-return/',
    '/resources/making-tax-digital-for-landlords/',
    '/resources/section-24-explained/',
  ],
};
