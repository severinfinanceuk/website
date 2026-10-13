// Guide: /resources/inheritance-tax-7-year-rule/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC Inheritance Tax Manual (IHTM14231, IHTM14341) and legislation.gov.uk
// (Finance Act 2026 s72, extending the freeze in FA 2021 s86 to 2030-31) on 13 October 2026.
// Re-check each April and after each Budget.
export default {
  url: '/resources/inheritance-tax-7-year-rule/',
  section: 'tax',
  title: 'Inheritance Tax 7-Year Rule Explained | Severin Finance',
  description: 'How the 7-year rule works for gifts: taper relief from 32% to 8%, the £3,000 annual exemption, gifts from income and reservation. Free consultation.',
  h1: 'The inheritance tax 7-year rule on gifts',
  crumb: 'The 7-year rule',
  summary: 'Gifts are free of inheritance tax after 7 years. What happens sooner, and which gifts are exempt at once.',
  topic: 'The inheritance tax 7-year rule for lifetime gifts',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/inheritance-tax-planning/', label: 'Our inheritance tax service',
    boxTitle: 'Planning to give money away?', text: 'We plan your gifts around the exemptions and the 7-year rule, and set up the records your executors will need.',
  },

  hero: {
    answer: 'A gift to another person is free of inheritance tax if you live for 7 years after making it. If you die sooner, the gift uses up your £325,000 nil rate band first. Tax on any part above that band falls from 40% to between 32% and 8% if you die 3 to 7 years after the gift.',
  },

  tldr: [
    'Gifts to people are <strong>potentially exempt</strong>: tax-free if you survive <strong>7 years</strong>.',
    'Gifts within 7 years of death use up the <strong>£325,000</strong> nil rate band before the rest of your estate.',
    'Taper relief cuts the tax on gifts made <strong>3 to 7 years</strong> before death: 32%, 24%, 16%, then 8%.',
    'Exempt at once: <strong>£3,000</strong> a year, £250 small gifts, wedding gifts and regular gifts from surplus income.',
    'If you keep using what you gave away, it stays in your estate (a <strong>gift with reservation</strong>).',
  ],

  sections: [
    {
      id: 'how-it-works', h2: 'How does the 7-year rule work?', toc: 'How it works',
      body: [
        '<p>Most gifts you make to another person are "potentially exempt transfers". There is no tax when you make them, and if you live for 7 more years they fall out of your estate completely. Our <a href="/uk/tax/inheritance-tax-planning/">inheritance tax planning</a> team plans gifts around this rule, so the timing and the exemptions work in your family\'s favour.</p>',
        '<p>If you die within 7 years, the gift is counted again. It is set against your £325,000 nil rate band before anything else, starting with the oldest gift, and only what is left of the band is available for your estate. A gift counts at its value when you made it, not its value when you die.</p>',
        '<h3>Gifts into a trust are different</h3>',
        '<p>Most gifts into a trust are chargeable straight away. If they take your total chargeable gifts over the 7 years to more than £325,000, the excess pays 20% when it goes in (more if you pay the tax rather than the trustees). If you die within 7 years, tax is worked out again at 40%, with credit for what was paid.</p>',
      ],
    },
    {
      id: 'taper-relief', h2: 'How much tax is due if you die within 7 years?', toc: 'Taper relief',
      body: [
        '<p>Gifts within 3 years of death are taxed at the full 40% on any amount above the nil rate band. For gifts made 3 to 7 years before death, taper relief reduces the rate.</p>',
        { caption: 'Inheritance tax on a gift above the nil rate band', head: ['Years between gift and death', 'Rate of tax on the gift'], rows: [
          ['Less than 3', '40%'],
          ['3 to 4', '32%'],
          ['4 to 5', '24%'],
          ['5 to 6', '16%'],
          ['6 to 7', '8%'],
          ['7 or more', '0%'],
        ], after: 'Source: GOV.UK, Inheritance Tax: rules on giving gifts. Checked 13 October 2026.' },
        '<p>Taper relief only matters when gifts in the 7 years before death add up to more than £325,000. It lowers the tax on the gift itself, not its value, so a gift inside the nil rate band gets no benefit from it: it still uses up the band, and your estate pays 40% on more.</p>',
        { caption: 'Illustrative example: a £400,000 gift to a son in 2026-27, with death 4 and a half years later', head: ['Step', 'Amount'], rows: [
          ['Gift', '£400,000'],
          ['Less annual exemptions for 2026-27 and 2025-26 (unused)', '£6,000'],
          ['Value of the gift', '£394,000'],
          ['Less nil rate band', '£325,000'],
          ['Taxable part of the gift', '£69,000'],
          ['Tax at 40% (if death within 3 years)', '£27,600'],
          ['Tax at 24% (death 4 to 5 years later)', '£16,560'],
        ], after: 'Illustrative figures. The son pays the £16,560, and the estate has no nil rate band left, so it pays 40% on everything above any residence nil rate band and exemptions.' },
        '<p>Who pays? The estate usually pays any tax on gifts. When gifts in the 7 years before death total more than £325,000, the people who received them may have to pay the tax on their gift.</p>',
      ],
    },
    {
      id: 'exempt-gifts', h2: 'Which gifts are free of inheritance tax straight away?', toc: 'Exempt gifts',
      body: [
        '<p>Some gifts are exempt the day you make them, so the 7-year clock does not apply. Using these every year is the simplest way to pass on money.</p>',
        { caption: 'Gifts that are exempt at once', head: ['Gift', 'Limit'], rows: [
          ['To your spouse or civil partner', 'No limit, if they live in the UK permanently'],
          ['To charities and political parties', 'No limit'],
          ['Annual exemption', '£3,000 each tax year, plus last year\'s if unused (one year back only)'],
          ['Small gifts', '£250 per person per tax year, to anyone who has not had another exemption from you'],
          ['Wedding or civil partnership gifts', '£5,000 to a child, £2,500 to a grandchild or great-grandchild, £1,000 to anyone else'],
          ['Regular gifts from surplus income', 'No set limit (see below)'],
        ], after: 'Source: GOV.UK, Inheritance Tax: rules on giving gifts. Tax years run from 6 April to 5 April.' },
        '<p>A couple can each use their own £3,000, so £6,000 between them, or £12,000 in a year when both carry forward last year\'s unused amount. You cannot combine the small gifts exemption with another exemption for the same person.</p>',
      ],
    },
    {
      id: 'gifts-from-income', h2: 'How do gifts out of income work?', toc: 'Gifts from income',
      body: [
        '<p>Regular gifts from your income are exempt at once, with no cap, if they meet three conditions in HMRC\'s manual. Each gift must:</p>',
        '<ol><li>form part of your normal pattern of spending, for example a monthly payment or a yearly premium</li><li>be made out of income, not capital such as savings or sale proceeds</li><li>leave you with enough income to keep up your normal standard of living</li></ol>',
        '<p>Examples include paying a grandchild\'s school fees each term, covering an adult child\'s rent every month, or paying the premiums on a life policy written in trust. This is often the most valuable exemption for people with good pension or investment income, but it is also the one HMRC checks most closely after death. Your executors have to show it with figures, so keep a simple yearly record of your income, your spending and each gift.</p>',
      ],
    },
    {
      id: 'gifts-with-reservation', h2: 'What if you keep using something you gave away?', toc: 'Gifts with reservation',
      body: [
        '<p>Then the 7-year clock never really starts. If you give something away but still benefit from it, it is a "gift with reservation of benefit" and stays in your estate when you die. GOV.UK gives the examples of giving your home to a relative and continuing to live in it, and giving away a painting that still hangs on your wall.</p>',
        '<p>HMRC\'s manual accepts that continued use is not a reservation if you pay full consideration for it, such as a market rent agreed on normal commercial terms and reviewed over time. Other arrangements, like sharing a home with the person you gave a share to, can also work but depend on the facts, so take advice before you sign anything.</p>',
      ],
    },
    {
      id: 'thresholds', h2: 'How do the nil rate bands fit with the 7-year rule?', toc: 'Nil rate bands',
      body: [
        '<p>Lifetime gifts use the main nil rate band only. The residence nil rate band is for a home left on death to children or grandchildren, so it cannot cover gifts made in your lifetime.</p>',
        { caption: 'Inheritance tax thresholds for 2026-27', head: ['Allowance', 'Amount'], rows: [
          ['Nil rate band', '£325,000 per person'],
          ['Residence nil rate band', 'Up to £175,000 per person'],
          ['Residence nil rate band taper', '£1 lost for every £2 the estate is over £2 million'],
          ['Rate above the thresholds', '40% (36% if 10% or more of the net estate goes to charity)'],
        ], after: 'Both bands and the £2 million taper threshold are fixed until 5 April 2031 (Finance Act 2026, section 72). Unused bands can pass to a surviving spouse or civil partner.' },
        '<p>Gifts of business assets can also qualify for business property relief, which changed on 6 April 2026: see our guide to <a href="/resources/business-property-relief-2026/">business property relief from 2026</a>. From 6 April 2027, most unused pension funds will also count towards the estate, which changes the case for spending other savings or giving them away first. Our guide to <a href="/resources/pensions-inheritance-tax-2027/">pensions and inheritance tax from 2027</a> explains how.</p>',
      ],
    },
    {
      id: 'records', h2: 'What records should you keep of your gifts?', toc: 'Keeping records',
      body: [
        '<p>Keep a note of what you gave, who to, what it was worth and the date. When you die, your executors report gifts made in the 7 years before death on form IHT403, which goes with the main inheritance tax account (IHT400). They cannot claim an exemption they cannot prove.</p>',
        '<ul><li>a gift log with the date, the recipient, the amount or value and the exemption you are relying on</li><li>bank statements showing the payments</li><li>valuations for any property, shares or valuables you give away</li><li>for gifts from income, a yearly summary of income and spending</li><li>any lease or rent records if you still use something you gave</li></ul>',
        '<p>Giving away property or shares can also trigger capital gains tax for you, even though no money changes hands, because the gift counts as a disposal at market value. Our guide to <a href="/resources/capital-gains-tax-on-property/">capital gains tax on property</a> explains how that is worked out.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I have to tell HMRC when I give money away?', a: 'No. There is nothing to report when you make a gift to a person. Your executors report gifts from the 7 years before death on form IHT403, so keep a record of each gift, its value, the date and any exemption you used.' },
    { q: 'Can I give my house to my children to avoid inheritance tax?', a: 'Only if you move out or pay them a full market rent. If you keep living there rent-free, it is a gift with reservation and the house stays in your estate. The gift can also create capital gains tax if it is not your main home.' },
    { q: 'What happens if I die 5 years after a gift?', a: 'The gift counts against your £325,000 nil rate band. If gifts in the 7 years before death were over £325,000, tax on the excess is charged at 16% instead of 40%, because 5 to 6 years have passed. Gifts inside the band pay no tax themselves.' },
    { q: 'Can parents combine their annual exemptions?', a: 'Yes. Each parent has their own £3,000 annual exemption, so together they can give £6,000 a year. If neither used last year\'s exemption, they can carry it forward one year, giving up to £12,000 between them.' },
    { q: 'Is there a limit on gifts from surplus income?', a: 'There is no set limit. The gifts must be regular, come from income rather than capital, and leave you enough to maintain your normal standard of living. Keep yearly records of income and spending so your executors can prove it.' },
  ],

  sources: [
    ['https://www.gov.uk/inheritance-tax/gifts', 'GOV.UK: Inheritance Tax, rules on giving gifts'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-inheritance-tax-thresholds-and-interest-rates/inheritance-tax-thresholds-and-interest-rates', 'GOV.UK: Inheritance Tax thresholds'],
    ['https://www.gov.uk/guidance/inheritance-tax-residence-nil-rate-band', 'GOV.UK: Residence nil rate band'],
    ['https://www.gov.uk/hmrc-internal-manuals/inheritance-tax-manual/ihtm14231', 'HMRC manual: normal expenditure out of income'],
    ['https://www.gov.uk/hmrc-internal-manuals/inheritance-tax-manual/ihtm14341', 'HMRC manual: gifts with reservation, full consideration'],
    ['https://www.gov.uk/guidance/trusts-and-inheritance-tax', 'GOV.UK: Trusts and Inheritance Tax'],
    ['https://www.gov.uk/government/publications/inheritance-tax-gifts-and-other-transfers-of-value-iht403', 'GOV.UK: Form IHT403, gifts and other transfers of value'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/section/72', 'legislation.gov.uk: Finance Act 2026, section 72'],
  ],

  related: [
    '/resources/business-property-relief-2026/',
    '/resources/pensions-inheritance-tax-2027/',
    '/resources/capital-gains-tax-on-property/',
  ],
};
