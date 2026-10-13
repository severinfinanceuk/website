// Guide: /resources/pensions-inheritance-tax-2027/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and legislation.gov.uk on 13 October 2026 (sources below). Also checked:
// Finance Act 2026 (c. 11) ss66 to 71 (s71: deaths on or after 6 April 2027; s68: withholding notice 50% for
// up to 15 months, payment notice minimum £1,000, scheme pays within 35 days; s70: income tax relief for IHT paid).
// HMRC technical note (first published 11 May 2026, updated 29 May 2026) for exclusions, timescales and
// what is still to come (regulations, notice templates, guidance, tools).
// Re-check before 6 April 2027 and after each Budget.
export default {
  url: '/resources/pensions-inheritance-tax-2027/',
  section: 'tax',
  title: 'Pensions and Inheritance Tax from 2027 | Severin Finance',
  description: 'From 6 April 2027 most unused pensions count in your estate for inheritance tax. What is included, what is exempt and who pays. Free consultation.',
  h1: 'Pensions and inheritance tax from April 2027',
  crumb: 'Pensions and inheritance tax',
  summary: 'Unused pension funds join the estate for deaths from 6 April 2027. What is in, what is out, who pays.',
  topic: 'Inheritance tax on unused pension funds and death benefits from 6 April 2027',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/inheritance-tax-planning/', label: 'Our inheritance tax service',
    boxTitle: 'Is your pension in scope?', text: 'We add your pensions to your estate figures, work out the tax from April 2027 and plan gifts and nominations with you.',
  },

  hero: {
    answer: 'For deaths on or after 6 April 2027, most unused pension funds and pension death benefits count as part of your estate for inheritance tax, taxed at 40% above your nil-rate bands. Pensions left to a spouse, civil partner or charity stay exempt, and death in service benefits are excluded. Your personal representatives report and pay the tax.',
  },

  tldr: [
    'Applies to deaths on or after <strong>6 April 2027</strong>. Deaths before then follow the old rules, even if benefits are paid later.',
    'Unused defined contribution pots, drawdown funds and most lump sum death benefits are added to the estate.',
    'Out of scope: <strong>death in service</strong> benefits, <strong>dependants\' scheme pensions</strong> and joint life annuities. Pensions left to a <strong>spouse, civil partner or charity</strong> are exempt.',
    '<strong>Personal representatives</strong> report and pay. They can ask the scheme to hold back up to <strong>50%</strong> of benefits for up to <strong>15 months</strong>, or to pay HMRC directly.',
    'If you die at <strong>75 or over</strong>, beneficiaries still pay income tax when they draw the pension, but not on the part that paid inheritance tax.',
  ],

  sections: [
    {
      id: 'what-changes', h2: 'Will my pension be subject to inheritance tax from 2027?', toc: 'What changes',
      body: [
        '<p>Probably, if there is money left in it when you die and it does not go to your spouse or civil partner. For deaths on or after 6 April 2027, Finance Act 2026 brings most unused pension funds and death benefits into the value of your estate, alongside your home, savings and investments. Our <a href="/uk/tax/inheritance-tax-planning/">inheritance tax planning</a> team adds your pensions to your estate figures so you can see the tax before it arises.</p>',
        '<p>Until now, most pension pots passed outside the estate because the scheme had discretion over who received them. From 6 April 2027 that discretion no longer keeps the money out. The tax rate does not change: 40% on the estate above the £325,000 nil-rate band and, where a home goes to children or grandchildren, the residence nil-rate band of up to £175,000. Both bands are fixed until 5 April 2031.</p>',
        { caption: 'Illustrative example: single person, estate of £400,000 plus an unused pension of £300,000', head: ['Item', 'Death before 6 April 2027', 'Death on or after 6 April 2027'], rows: [
          ['Estate (savings and investments)', '£400,000', '£400,000'],
          ['Unused pension', 'Outside the estate', '£300,000'],
          ['Less nil-rate band', '£325,000', '£325,000'],
          ['Taxable value', '£75,000', '£375,000'],
          ['Inheritance tax at 40%', '£30,000', '£150,000'],
        ], after: 'Illustrative figures only. Assumes no home left to descendants, no lifetime gifts and no spouse or civil partner.' },
      ],
    },
    {
      id: 'in-scope', h2: 'Which pension benefits are included and which are not?', toc: 'In and out of scope',
      body: [
        '<p>The rule catches money that could be paid out because you died. HMRC\'s technical note calls this "notional pension property".</p>',
        { caption: 'Pension benefits and inheritance tax for deaths from 6 April 2027', head: ['Benefit', 'In the estate?'], rows: [
          ['Unused defined contribution pot, including drawdown funds', 'Yes'],
          ['Lump sum death benefits from a defined benefit scheme', 'Yes'],
          ['Guaranteed payments left on an annuity or pension that started less than 10 years before death', 'Yes'],
          ['Death in service benefit from your current job', 'No: excluded'],
          ['Dependants\' scheme pension (for example a widow\'s or widower\'s pension)', 'No: excluded'],
          ['Joint life or dependant\'s annuity bought with your own annuity', 'No: excluded'],
          ['Benefits paid to your spouse, civil partner or a charity', 'Counted, but exempt from the tax'],
        ], after: 'Source: GOV.UK policy paper and HMRC technical note on inheritance tax on pensions. Refunds or benefits from a previous job\'s scheme are not death in service benefits.' },
        '<p>Charity lump sums stay free of tax and count towards the 10% test for the reduced 36% rate.</p>',
      ],
    },
    {
      id: 'who-pays', h2: 'Who pays inheritance tax on a pension?', toc: 'Who reports and pays',
      body: [
        '<p>Your personal representatives (executors, or administrators if there is no will) report the pension with the rest of the estate and pay the tax. The government first proposed that pension schemes would pay, but changed this in July 2025. Once a benefit has been paid out, the beneficiary who received it is also liable for the tax on it.</p>',
        '<p>The tax is due by the end of the sixth month after death, with interest after that. To help, Finance Act 2026 gives personal representatives two tools:</p>',
        { caption: 'Tools for paying inheritance tax on pensions', head: ['Tool', 'What it does'], rows: [
          ['Withholding notice', 'Stops the scheme paying out more than 50% of a beneficiary\'s benefits, for up to 15 months after the end of the month of death. Only for cases where tax may be due, not as a routine step'],
          ['Payment notice (Pensions Direct Payment Scheme)', 'Requires the scheme to pay tax of at least £1,000 straight to HMRC, within 35 days. Personal representatives or beneficiaries can give one'],
          ['Information from schemes', 'Schemes must give a value within 28 days of a request, or an estimate if they cannot'],
        ], after: 'Source: Finance Act 2026, section 68, and HMRC technical note on inheritance tax on pensions. Checked 13 October 2026.' },
        '<p>Personal representatives who made every effort to find the pensions are not liable for one discovered after HMRC has cleared the estate. The beneficiary is then liable instead.</p>',
      ],
    },
    {
      id: 'income-tax', h2: 'Will beneficiaries pay income tax as well?', toc: 'Income tax as well',
      body: [
        '<p>Only if you die at 75 or over, or a lump sum is paid outside the time limits. That is the same as now. The new law stops the same money being taxed twice.</p>',
        '<ul><li><strong>Death before 75:</strong> lump sums are usually free of income tax up to the lump sum and death benefit allowance, as long as they are paid within 2 years of the scheme learning of the death. Dependants\' drawdown and survivors\' annuities are usually tax-free.</li><li><strong>Death at 75 or over:</strong> all death benefits are taxed as the beneficiary\'s income when drawn.</li><li><strong>No double tax on the same pound:</strong> where inheritance tax has been paid on a pension, the beneficiary gets an income tax deduction for it, so the part used to pay inheritance tax is not taxed again as income.</li></ul>',
        '<p>For a large pension inherited from someone over 75, inheritance tax and then income tax at higher rates can still take a large share. That is why the order in which you spend your savings may change.</p>',
      ],
    },
    {
      id: 'tbc', h2: 'What is still to be confirmed?', toc: 'Still to come',
      body: [
        '<p>The main rules are law: Finance Act 2026 sets them out, and they apply to deaths on or after 6 April 2027. HMRC says it will still publish:</p>',
        '<ul><li>regulations on information sharing between schemes, personal representatives and HMRC</li><li>official templates for withholding and payment notices</li><li>detailed guidance on the income tax deduction for beneficiaries and on the lump sum allowance calculations</li><li>updated HMRC manuals and online tools, expected by April 2027</li></ul>',
        '<p>We check these as they appear and update this guide. The principle, that unused pensions count in the estate, will not change before April 2027 unless Parliament passes new law.</p>',
      ],
    },
    {
      id: 'planning', h2: 'What can you do before April 2027?', toc: 'Planning now',
      body: [
        '<p>Start by adding your pension values to your estate. Many people with estates under the thresholds today will be over them once pensions count. Then look at:</p>',
        '<ul><li><strong>Nominations:</strong> keep your expression of wish forms up to date. Benefits paid to a spouse or civil partner remain exempt.</li><li><strong>Spending order:</strong> drawing on the pension during retirement and leaving other assets may now suit some families better.</li><li><strong>Gifts:</strong> regular gifts out of surplus income are exempt straight away, and other gifts drop out after 7 years. Our guide to the <a href="/resources/inheritance-tax-7-year-rule/">inheritance tax 7-year rule</a> explains both.</li><li><strong>Business owners:</strong> company pension contributions are often part of <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how you pay yourself</a>. Review that mix, and the separate cap on <a href="/resources/business-property-relief-2026/">business property relief from 2026</a>.</li><li><strong>Life cover:</strong> ask your financial adviser whether a policy written in trust could fund the tax for your family.</li></ul>',
        '<p>We do not give regulated pension or investment advice. We work out the tax and work alongside your financial adviser and solicitor.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'When do pensions become subject to inheritance tax?', a: 'For deaths on or after 6 April 2027. If someone dies before that date, the old rules apply even if the scheme pays the benefits after 6 April 2027, so most unused pensions stay outside the estate.' },
    { q: 'Is a pension left to my wife or husband taxed?', a: 'No. Pension benefits paid to a spouse or civil partner are covered by the spouse exemption, so there is no inheritance tax on them. Tax may arise later, when the survivor dies with unused funds.' },
    { q: 'Is death in service subject to inheritance tax from 2027?', a: 'No. Death in service benefits paid by a registered pension scheme because of the job you held when you died are excluded, whether or not the scheme has discretion over who receives them.' },
    { q: 'Does the pension provider pay the inheritance tax?', a: 'Not automatically. Your personal representatives are responsible. They, or a beneficiary, can give the scheme a payment notice so it pays tax of £1,000 or more directly to HMRC within 35 days.' },
    { q: 'Will my children pay income tax and inheritance tax on my pension?', a: 'Possibly both, if you die at 75 or over. Inheritance tax is paid first. They then pay income tax when they draw the rest, but get a deduction for the inheritance tax, so the same money is not taxed twice.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/inheritance-tax-unused-pension-funds-and-death-benefits/inheritance-tax-unused-pension-funds-and-death-benefits', 'GOV.UK: Inheritance tax on unused pension funds and death benefits'],
    ['https://www.gov.uk/government/publications/inheritance-tax-on-pensions-technical-note/technical-note-inheritance-tax-on-pensions', 'HMRC: Technical note on inheritance tax on pensions'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/section/68', 'legislation.gov.uk: Finance Act 2026, section 68'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/section/71', 'legislation.gov.uk: Finance Act 2026, section 71'],
    ['https://www.gov.uk/inheritance-tax', 'GOV.UK: Inheritance Tax'],
    ['https://www.gov.uk/paying-inheritance-tax', 'GOV.UK: Paying Inheritance Tax'],
  ],

  related: [
    '/resources/inheritance-tax-7-year-rule/',
    '/resources/business-property-relief-2026/',
    '/resources/how-to-pay-yourself-from-a-limited-company/',
  ],
};
