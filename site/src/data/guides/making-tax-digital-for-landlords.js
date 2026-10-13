// Guide: /resources/making-tax-digital-for-landlords/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). The general MTD rules (deadlines table,
// exemptions, opting out) are in making-tax-digital-for-income-tax.js; this guide covers the landlord angle.
export default {
  url: '/resources/making-tax-digital-for-landlords/',
  section: 'tax',
  title: 'Making Tax Digital for Landlords | Severin Finance',
  description: 'MTD for landlords: gross rent over £50,000 now and £30,000 from April 2027, joint property, records and landlords living abroad. Free consultation.',
  h1: 'Making Tax Digital for landlords',
  crumb: 'MTD for landlords',
  summary: 'How rent counts towards the MTD threshold, jointly owned property, records and landlords living abroad.',
  topic: 'Making Tax Digital for Income Tax for landlords',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/making-tax-digital-accountant/', label: 'Our Making Tax Digital service',
    boxTitle: 'Letting property?', text: 'We check whether your rent brings you into MTD, set up your software and send each quarterly update for you.',
  },

  hero: {
    answer: 'Yes, landlords must use Making Tax Digital for Income Tax if their gross rent, plus any self-employed turnover, is over £50,000 from 6 April 2026, over £30,000 from 6 April 2027 and over £20,000 from 6 April 2028. It is income before expenses that counts, and for jointly owned property you count only your share.',
  },

  tldr: [
    'The threshold uses <strong>gross rent</strong> before mortgage interest, agent fees or repairs, not profit.',
    'Rent is added to any self-employed turnover. Salary, dividends and pensions are ignored.',
    'Joint owners count <strong>only their share</strong>: £50,000 of rent split equally is £25,000 each.',
    'All your UK properties are <strong>one property business</strong> and need one quarterly update.',
    'Landlords filing the SA109 residence pages are exempt until <strong>April 2027</strong> at the earliest.',
  ],

  sections: [
    {
      id: 'do-landlords-need-mtd', h2: 'Do landlords have to use Making Tax Digital?', toc: 'Do you need it?',
      body: [
        '<p>Yes, if you let property as an individual, are registered for Self Assessment and your qualifying income is over the threshold. Many landlords join from April 2027, when the threshold falls to £30,000. Our <a href="/uk/tax/making-tax-digital-accountant/">Making Tax Digital accountants</a> work out whether your rent brings you in, and when, and set up the software for you. Our <a href="/uk/accounting/landlord-accountant/">landlord accountants</a> handle the rest of your property tax.</p>',
        { caption: 'When landlords must start using Making Tax Digital', head: ['Gross rent plus self-employed turnover', 'Tax year HMRC checks', 'Must use MTD from'], rows: [
          ['Over £50,000', '2024-25', '6 April 2026'],
          ['Over £30,000', '2025-26', '6 April 2027'],
          ['Over £20,000', '2026-27', '6 April 2028'],
          ['£20,000 or less', 'Any', 'Not required'],
        ], after: 'Source: GOV.UK, Find out if and when you need to use Making Tax Digital for Income Tax. Checked 13 October 2026.' },
        '<p>This guide covers the points that are different for landlords. For the general rules, including exemptions, the year-end tax return and opting out, see our guide to <a href="/resources/making-tax-digital-for-income-tax/">Making Tax Digital for Income Tax</a>.</p>',
      ],
    },
    {
      id: 'rent-and-threshold', h2: 'How does rent count towards the threshold?', toc: 'Counting your rent',
      body: [
        '<p>HMRC counts your rent before any expenses, so a landlord with a large mortgage can be in Making Tax Digital even with little or no profit. Mortgage interest, letting agent fees, repairs and insurance do not reduce the figure. If you are UK resident, rent from property abroad counts too.</p>',
        '<p>Your rent is added to any self-employed turnover. Employment income, dividends from your own company and pensions are left out.</p>',
        { caption: 'Illustrative examples using 2025-26 income', head: ['Landlord', 'Qualifying income', 'Result'], rows: [
          ['Rent of £36,000, no other business', '£36,000', 'MTD from 6 April 2027'],
          ['Rent of £25,000 plus £27,000 self-employed turnover', '£52,000', 'Over £30,000, so MTD from 6 April 2027 (from April 2026 if 2024-25 was also over £50,000)'],
          ['Salary of £80,000 plus rent of £18,000', '£18,000', 'Exempt while it stays at £20,000 or less'],
          ['Rent of £40,000 shared equally with a spouse', '£20,000 each', 'Exempt while it stays at £20,000 or less'],
        ], after: 'Illustrative round numbers. HMRC uses the figures on your filed Self Assessment return.' },
        '<p>If you sell a property but still have another property or a trade, the rent from the sold property still counts for that year. If all your property and self-employment income stopped before 6 April 2026, you do not need to use MTD.</p>',
      ],
    },
    {
      id: 'joint-property', h2: 'How does Making Tax Digital work for jointly owned property?', toc: 'Joint property',
      body: [
        '<p>Each owner counts only their own share of the rent, and each owner keeps their own records and sends their own updates. If you own a property with a sibling that earns £50,000 a year in equal shares, and you have no other business income, your qualifying income is £25,000.</p>',
        '<p>Spouses and civil partners who live together are normally taxed on an equal split of income from jointly owned property. If you own the property in unequal shares, you can ask HMRC to tax you on your actual shares with form 17, with evidence such as a declaration of trust. That share then flows into your MTD figures.</p>',
        '<p>HMRC has made joint lettings simpler:</p>',
        '<ul><li>you record only your share of the income and expenses</li><li>you can keep less detail, such as one total per category for each quarter</li><li>you can leave joint expenses out of quarterly updates, but you must add them and resend your fourth update before your tax return</li><li>you do not need to link your records to the other owner\'s</li></ul>',
      ],
    },
    {
      id: 'records-per-property', h2: 'Do you need separate records for each property?', toc: 'Records per property',
      body: [
        '<p>Not for UK property. HMRC treats all your UK lettings as one UK property business, so your software combines them into one quarterly update. Overseas property is different: you keep a separate set of records for each property abroad, and the software adds them up into one update for your overseas property business.</p>',
        { caption: 'How landlords report under Making Tax Digital', head: ['Income source', 'Records', 'Quarterly updates'], rows: [
          ['UK property (any number of properties)', 'One set, covering all UK lets', 'One for the UK property business'],
          ['Overseas property (if UK resident)', 'One set for each property', 'One for the overseas property business'],
          ['Self-employment', 'One set for each trade', 'One for each trade'],
        ], after: 'Source: GOV.UK, Use Making Tax Digital for Income Tax: create digital records. Each record needs the amount, the date and a Self Assessment category.' },
        '<p>Many landlords still tag income and costs to each property in their software. HMRC does not require it for UK lets, but it shows which properties make money and makes a later sale easier to work out.</p>',
        '<p>If a letting agent collects your rent, your records must still show the gross rent and each cost the agent deducts, not just the net amount paid to you. Ask your agent for statements that give the full figures each month. Rent-a-Room income also needs digital records.</p>',
      ],
    },
    {
      id: 'quarterly-updates', h2: 'When do landlords send quarterly updates?', toc: 'Quarterly updates',
      body: [
        '<p>Landlords use the same deadlines as everyone else: 7 August, 7 November, 7 February and 7 May. A landlord who also has a trade sends two updates each quarter, one per business, but HMRC gives only one penalty point per missed deadline. For 2026-27, late quarterly updates do not get penalty points.</p>',
        '<p>The deadline table, the year-end tax return and the penalty rules are in our <a href="/resources/making-tax-digital-for-income-tax/">guide to Making Tax Digital for Income Tax</a>. For choosing a product, including bridging software for spreadsheets, see our guide to <a href="/resources/mtd-software/">MTD software</a>.</p>',
        '<p>Making Tax Digital changes how you report, not how rent is taxed. Mortgage interest is still restricted to a 20% tax credit for individual landlords, which you deal with at the year end. Our guide to <a href="/resources/section-24-explained/">Section 24</a> explains how it works.</p>',
      ],
    },
    {
      id: 'landlords-abroad', h2: 'Does Making Tax Digital apply to landlords living abroad?', toc: 'Landlords abroad',
      body: [
        '<p>Not yet for most. If your 2024-25 return included the SA109 residence pages, you are automatically exempt until April 2027 at the earliest. If you expect to file the SA109 for 2025-26 or 2026-27, you can apply for the same exemption. If your qualifying income for 2025-26 is over £30,000, you will need MTD from 2027-28.</p>',
        '<p>When the rules do apply, a landlord who is not UK resident counts only UK property income and self-employment income declared on the UK return. Rent from property in the country where you live is left out.</p>',
        '<p>Making Tax Digital is separate from the Non-Resident Landlord Scheme, which decides whether your agent or tenant deducts tax from your rent. Our guide to the <a href="/resources/non-resident-landlord-scheme/">Non-Resident Landlord Scheme</a> and our <a href="/cross-border/non-resident-uk-tax/">non-resident UK tax</a> service cover both.</p>',
      ],
    },
    {
      id: 'outside-mtd', h2: 'Which landlords are outside Making Tax Digital for Income Tax?', toc: 'Who is outside it',
      body: [
        '<p>Property held through a limited company is outside it, because the company pays corporation tax, not income tax. Our guide to <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a> covers that route. Also outside, for now:</p>',
        '<ul><li>property let through a partnership (partners are not in MTD yet)</li><li>trustees filing the SA900 trust return, and personal representatives of someone who has died</li><li>landlords with qualifying income of £20,000 or less</li><li>landlords HMRC accepts as digitally excluded</li></ul>',
        '<p>Being outside MTD does not remove the need to file a Self Assessment return and pay tax on your rent.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is the MTD threshold for landlords based on rent or profit?', a: 'Rent. HMRC uses your gross property income before expenses such as mortgage interest, agent fees and repairs, added to any self-employed turnover. A landlord with £35,000 of rent and £20,000 of costs is over the £30,000 threshold.' },
    { q: 'I own a rental property with my partner. Do we both need MTD?', a: 'Each of you is tested separately on your own share of the rent, plus any other property or self-employed income. If you split £50,000 of rent equally and have no other such income, you each have £25,000, which is over £20,000 from April 2028.' },
    { q: 'Do I need to send a quarterly update for each rental property?', a: 'No. All your UK lettings form one UK property business, so you send one update each quarter. If you are UK resident and also let property abroad, you send one more update for your overseas property business.' },
    { q: 'Does Making Tax Digital apply to furnished holiday lets?', a: 'Holiday lets count as property income like any other letting, so the gross rent goes towards your qualifying income. The special furnished holiday lettings tax rules ended on 6 April 2025, and these lets are now part of your UK or overseas property business.' },
    { q: 'My letting agent handles everything. Do I still need software?', a: 'Yes, if you are in MTD. You or your agent can keep the digital records, and an accountant can send the updates for you, but the records must be in compatible software and show gross rent and each cost.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: When you need to use MTD for Income Tax'],
    ['https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax', 'GOV.UK: Work out your qualifying income'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records', 'GOV.UK: Create digital records'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates', 'GOV.UK: Send quarterly updates'],
    ['https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax', 'GOV.UK: MTD exemptions'],
    ['https://www.gov.uk/government/publications/income-tax-declaration-of-beneficial-interests-in-joint-property-and-income-17', 'GOV.UK: Form 17, joint property income'],
    ['https://www.gov.uk/government/publications/furnished-holiday-lettings-tax-regime-abolition/abolition-of-the-furnished-holiday-lettings-tax-regime', 'GOV.UK: Abolition of the furnished holiday lettings regime'],
  ],

  related: [
    '/resources/making-tax-digital-for-income-tax/',
    '/resources/mtd-software/',
    '/resources/section-24-explained/',
    '/resources/non-resident-landlord-scheme/',
  ],
};
