// Guide: /resources/section-24-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and legislation.gov.uk on 13 October 2026 (sources below). Also checked:
// Finance Act 2026 (2026 c. 11, 18 March 2026) s7: property rates 22%, 42%, 47% for 2027-28;
// gov.uk/child-benefit-tax-charge (£60,000 to £80,000); furnished holiday lettings abolition (finance costs restricted from 6 April 2025).
// Scope: individual landlords. Company ownership is in buy-to-let-limited-company.js. Re-check each April and after each Budget.
export default {
  url: '/resources/section-24-explained/',
  section: 'accounting',
  title: 'Section 24 Explained for Landlords | Severin Finance',
  description: 'Why landlords get a 20% tax credit on mortgage interest instead of a deduction, a worked example and the 22% credit from April 2027. Free consultation.',
  h1: 'Section 24 explained: mortgage interest tax relief for landlords',
  crumb: 'Section 24 explained',
  summary: 'How the 20% mortgage interest credit works, who it hits hardest and what changes in April 2027.',
  topic: 'Section 24 restriction of finance cost relief for residential landlords',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/landlord-accountant/', label: 'Our landlord accountant service',
    boxTitle: 'Paying more tax on rent?', text: 'We work out your finance cost credit, check any amounts carried forward and model whether a different ownership structure would cost you less.',
  },

  hero: {
    answer: 'Section 24 stops individual landlords deducting mortgage interest from residential rent. Instead you get a tax credit of 20% of your finance costs for 2026-27, capped by your property profits and income. Higher rate taxpayers lose relief at 40% or 45%. From 6 April 2027 the credit rises to 22%, with property income taxed at 22%, 42% and 47%.',
  },

  tldr: [
    'Mortgage interest is <strong>not deducted</strong> from rental profit. You get a <strong>20% tax credit</strong> instead (2026-27).',
    'The credit is 20% of the <strong>lowest</strong> of your finance costs, property profits and income above the personal allowance. Any excess is carried forward.',
    'It applies to individuals, partners, trustees and former holiday lets. <strong>Companies</strong> and commercial lettings are not affected.',
    'Rent counted before interest can push you into the higher rate band, or past <strong>£60,000</strong> for the child benefit charge.',
    'From <strong>6 April 2027</strong>, property income rates become 22%, 42% and 47% and the credit becomes 22%.',
  ],

  sections: [
    {
      id: 'what-is-section-24', h2: 'What is Section 24 for landlords?', toc: 'What it is',
      body: [
        '<p>Section 24 is the rule that stopped individual landlords deducting mortgage interest from their residential rental income. It is named after the section of the Finance (No. 2) Act 2015 that introduced it. You now pay tax on your rental profit before interest, then take off a tax credit worth 20% of your finance costs. Our <a href="/uk/accounting/landlord-accountant/">landlord accountants</a> work out the credit on your return and check whether any unused amounts are being carried forward correctly.</p>',
        '<p>The change was phased in over four years and has applied in full since 6 April 2020. For a basic rate taxpayer the credit gives roughly the same relief as the old deduction. For higher and additional rate taxpayers it means relief at 20% instead of 40% or 45%, so they pay more tax on the same rent.</p>',
        '<p>Making Tax Digital does not change any of this: it changes how you report, not how rent is taxed. Our guide to <a href="/resources/making-tax-digital-for-landlords/">Making Tax Digital for landlords</a> covers the reporting side.</p>',
      ],
    },
    {
      id: 'how-the-credit-works', h2: 'How is the 20% tax credit worked out?', toc: 'The 20% credit',
      body: [
        '<p>HMRC gives you 20% of the lowest of three figures. The credit cannot create a refund, so it only reduces tax you would otherwise pay.</p>',
        { caption: 'The three figures in the finance cost credit (2026-27)', head: ['Figure', 'What it includes'], rows: [
          ['Finance costs', 'Mortgage interest and other finance costs for the year, plus any unrelieved finance costs brought forward'],
          ['Property profits', 'Your residential property profit for the year, after any losses brought forward'],
          ['Adjusted total income', 'Your income after losses and reliefs, excluding savings and dividend income, above your personal allowance'],
        ], after: 'Source: GOV.UK, Changes to tax relief for residential landlords: how it\'s worked out. Checked 13 October 2026.' },
        '<p>If your profits or adjusted total income is the lowest figure, the finance costs you could not use are carried forward to the next year. In HMRC\'s own example, a landlord with £15,000 of interest and only £13,000 of property profit got a credit of £2,600 (20% of £13,000) and carried £2,000 forward. The next year, the £2,000 was added to that year\'s interest.</p>',
        '<h3>Which costs count as finance costs?</h3>',
        '<p>The restriction covers interest on loans for your residential letting business, payments that work like interest, and the incidental costs of getting the loan, such as arrangement fees and broker commission. Other expenses, such as repairs, agent fees, insurance and service charges, are still deducted from rent in the usual way.</p>',
      ],
    },
    {
      id: 'worked-example', h2: 'How much extra tax does Section 24 cost?', toc: 'Worked example',
      body: [
        '<p>It depends on your tax band. The example below shows two landlords with the same property: one already a higher rate taxpayer, one who is a basic rate taxpayer before the rent is added.</p>',
        { caption: 'Illustrative example, 2026-27: rent £20,000, other costs £2,000, mortgage interest £10,000', head: ['Step', 'Salary £60,000', 'Salary £40,000'], rows: [
          ['Taxable property profit (interest not deducted)', '£18,000', '£18,000'],
          ['Income tax on that profit', '£7,200 (all at 40%)', '£5,146 (£10,270 at 20%, £7,730 at 40%)'],
          ['Less 20% credit on £10,000 of interest', '£2,000', '£2,000'],
          ['Tax payable on the rent', '£5,200', '£3,146'],
          ['Tax if interest were still deductible', '£3,200', '£1,600'],
          ['Extra tax caused by Section 24', '£2,000', '£1,546'],
        ], after: 'Illustrative round numbers for a landlord taxed at the rates for England, Wales and Northern Ireland, with the full £12,570 personal allowance and a £50,270 higher rate threshold.' },
        '<p>The first landlord keeps £8,000 of real profit but pays £5,200 of tax on it, an effective rate of 65%. The second landlord was a basic rate taxpayer, but adding £18,000 of rent before interest pushed part of it into the 40% band. This is the group most often surprised by Section 24.</p>',
      ],
    },
    {
      id: 'who-is-affected', h2: 'Who is affected by Section 24?', toc: 'Who it applies to',
      body: [
        '<p>Anyone paying income tax on residential rent with a loan against it. HMRC\'s Property Income Manual lists:</p>',
        '<ul><li>individual landlords, alone or jointly owning property</li><li>partners in a partnership that lets residential property, and individuals who borrow to invest in one</li><li>trustees and personal representatives, and beneficiaries taxed on estate income from property</li><li>owners of former furnished holiday lets, from 6 April 2025, when the special regime ended</li></ul>',
        '<p>Companies are not affected: a property company deducts interest as a cost before corporation tax. Loans used wholly for commercial property are not restricted either.</p>',
        '<h3>Knock-on effects of a higher income figure</h3>',
        '<p>Because rent is counted before interest, your total income looks higher than your real profit. That can cost you in other ways:</p>',
        '<ul><li>the High Income Child Benefit Charge starts at £60,000 of adjusted net income and takes back all of the benefit at £80,000</li><li>your personal allowance is reduced by £1 for every £2 of income above £100,000</li><li>more of a later capital gain may fall in the 24% band, because less of your basic rate band is left</li></ul>',
      ],
    },
    {
      id: 'april-2027', h2: 'What changes for landlords in April 2027?', toc: 'April 2027 changes',
      body: [
        '<p>From 6 April 2027, property income gets its own income tax rates, 2 percentage points higher than the main rates, and the finance cost credit rises to match the new basic rate. The rates for 2027-28 are set by section 7 of the Finance Act 2026.</p>',
        { caption: 'Income tax on rental profits: 2026-27 and 2027-28', head: ['Band', '2026-27', '2027-28'], rows: [
          ['Basic rate', '20%', '22%'],
          ['Higher rate', '40%', '42%'],
          ['Additional rate', '45%', '47%'],
          ['Finance cost credit', '20%', '22%'],
        ], after: 'Rates for England, Wales and Northern Ireland. The Finance Act 2026 lets the Scottish Parliament and the Senedd set their own property rates. Source: HMRC technical note and Finance Act 2026, checked 13 October 2026.' },
        '<p>For the higher rate landlord in our example, tax on the same rent would be £7,560 (42% of £18,000) less a credit of £2,200 (22% of £10,000), so £5,360 in 2027-28, up from £5,200. The rise in the credit softens the change for landlords with large loans but does not remove it.</p>',
      ],
    },
    {
      id: 'options', h2: 'What can landlords do about Section 24?', toc: 'Your options',
      body: [
        '<p>There is no way to switch Section 24 off for property you own personally, but these are the options landlords usually look at. Each has costs, so run the numbers before acting.</p>',
        '<ul><li><strong>Check the credit is right:</strong> unused finance costs carried forward are easy to lose when you change software or accountant. They stay available while you have the same property business.</li><li><strong>Review ownership with a spouse or civil partner:</strong> moving a share of a property to a partner who pays tax at a lower rate can reduce the overall bill. Transfers between spouses are usually free of capital gains tax, but a share of the mortgage moving across can bring Stamp Duty Land Tax.</li><li><strong>Pay down borrowing:</strong> using spare cash to reduce the mortgage cuts interest that only gets 20% relief.</li><li><strong>Buy future property through a company:</strong> companies deduct interest in full. See our guide to <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a>, including the cost of moving existing property in.</li><li><strong>Sell or restructure:</strong> if the numbers no longer work, our guide to <a href="/resources/capital-gains-tax-on-property/">capital gains tax on property</a> shows what a sale would cost.</li></ul>',
        '<p>Moving properties you already own into a company is a sale at market value for capital gains tax and Stamp Duty Land Tax, so it rarely pays for a small portfolio. We model the figures for you before you decide, and file the return that reflects the result by the <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can I still claim mortgage interest on a buy-to-let?', a: 'Not as an expense if you own the property personally. You get a tax credit of 20% of the interest for 2026-27, rising to 22% from 6 April 2027. A limited company can still deduct the interest in full from its rental profit.' },
    { q: 'Does Section 24 apply to basic rate taxpayers?', a: 'Yes, but for most it makes little difference, because the 20% credit matches the 20% tax rate. The problem comes when rent counted before interest pushes your income above £50,270, so part of it is taxed at 40%.' },
    { q: 'Does Section 24 apply to commercial property?', a: 'No. Loans used wholly for commercial property, such as shops or offices, are not restricted, and the interest is deducted as a normal expense. Companies are not restricted on any type of property.' },
    { q: 'What happens to finance costs I cannot use?', a: 'If your property profits or adjusted total income are lower than your finance costs, the unused amount is carried forward and added to next year\'s finance costs. It can only be used against the same property business, so keep a record of the figure each year.' },
    { q: 'Does Section 24 apply to a limited company?', a: 'No. A company that lets residential property deducts mortgage interest as a cost before corporation tax at 19% to 25%. You then pay dividend tax when you take profits out, so compare both routes before buying.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/changes-to-tax-relief-for-residential-landlords-how-its-worked-out-including-case-studies', 'GOV.UK: Tax relief for residential landlords, how it is worked out'],
    ['https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim2054', 'HMRC Property Income Manual: who and what the restriction covers'],
    ['https://www.gov.uk/government/publications/changes-to-tax-rates-for-property-savings-and-dividend-income/change-to-tax-rates-for-property-savings-and-dividend-income-technical-note', 'HMRC: Property, savings and dividend income rates technical note'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/section/7', 'Finance Act 2026, section 7: property rates for 2027-28'],
    ['https://www.gov.uk/government/publications/furnished-holiday-lettings-tax-regime-abolition/abolition-of-the-furnished-holiday-lettings-tax-regime', 'GOV.UK: Abolition of the furnished holiday lettings regime'],
    ['https://www.gov.uk/child-benefit-tax-charge', 'GOV.UK: High Income Child Benefit Charge'],
  ],

  related: [
    '/resources/buy-to-let-limited-company/',
    '/resources/making-tax-digital-for-landlords/',
    '/resources/capital-gains-tax-on-property/',
    '/resources/self-assessment-deadlines/',
  ],
};
