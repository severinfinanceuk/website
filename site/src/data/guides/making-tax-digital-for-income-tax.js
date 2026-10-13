// Guide: /resources/making-tax-digital-for-income-tax/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). MTD rules are still being phased in: re-check each April.
// Landlord-specific points (joint property, property businesses, non-residents) live in making-tax-digital-for-landlords.js.
export default {
  url: '/resources/making-tax-digital-for-income-tax/',
  section: 'tax',
  title: 'Making Tax Digital for Income Tax Guide | Severin Finance',
  description: 'Making Tax Digital for Income Tax: who must join (£50,000 now, £30,000 in 2027, £20,000 in 2028), quarterly updates and penalties. Free consultation.',
  h1: 'Making Tax Digital for Income Tax explained',
  crumb: 'MTD for Income Tax',
  summary: 'Who must join and when, what you send each quarter, exemptions and the new penalty points.',
  topic: 'Making Tax Digital for Income Tax',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/making-tax-digital-accountant/', label: 'Our Making Tax Digital service',
    boxTitle: 'Need MTD set up?', text: 'We check if and when you must join, set up compatible software and send your quarterly updates and tax return.',
  },

  hero: {
    answer: 'Making Tax Digital for Income Tax applies to sole traders and landlords whose qualifying income, meaning self-employment and property income before expenses, is over £50,000 from 6 April 2026, over £30,000 from 6 April 2027 and over £20,000 from 6 April 2028. You keep digital records, send quarterly updates and file your tax return through compatible software.',
  },

  tldr: [
    '<strong>Over £50,000</strong> in 2024-25: you must use MTD from <strong>6 April 2026</strong>.',
    '<strong>Over £30,000</strong> in 2025-26: from <strong>6 April 2027</strong>. <strong>Over £20,000</strong> in 2026-27: from <strong>6 April 2028</strong>.',
    'Quarterly updates are due by <strong>7 August, 7 November, 7 February and 7 May</strong>.',
    'No penalty points for late quarterly updates in <strong>2026-27</strong>. Late tax returns still get points.',
    'Payment dates do not change: tax is still due by 31 January and 31 July.',
  ],

  sections: [
    {
      id: 'who-must-join', h2: 'Who has to use Making Tax Digital for Income Tax, and when?', toc: 'Who and when',
      body: [
        '<p>You must use it if you are a sole trader or landlord registered for Self Assessment and your qualifying income is over the threshold for the year HMRC checks. HMRC looks at the return you filed two tax years before you start. Our <a href="/uk/tax/making-tax-digital-accountant/">Making Tax Digital accountants</a> can confirm your start date and set everything up before your first quarter.</p>',
        { caption: 'When you must start using Making Tax Digital for Income Tax', head: ['Qualifying income', 'Year HMRC checks', 'Must use MTD from'], rows: [
          ['Over £50,000', '2024-25', '6 April 2026'],
          ['Over £30,000', '2025-26', '6 April 2027'],
          ['Over £20,000', '2026-27', '6 April 2028'],
          ['£20,000 or less', 'Any', 'Not required (automatic exemption)'],
        ], after: 'Source: GOV.UK, Find out if and when you need to use Making Tax Digital for Income Tax. Checked 13 October 2026.' },
        '<p>HMRC writes to people above the threshold, but you are responsible for checking even if no letter arrives. If your 2024-25 income was over £50,000 and you have not signed up, you can still sign up now. To sign up you must be registered for Self Assessment and have filed a return in the last two years. You still file a normal Self Assessment return for the year before you join.</p>',
        '<p>Partnerships are not in Making Tax Digital for Income Tax yet. HMRC says it will publish a timeline later.</p>',
      ],
    },
    {
      id: 'qualifying-income', h2: 'What counts as qualifying income?', toc: 'Qualifying income',
      body: [
        '<p>Qualifying income is your total self-employment and property income before expenses, which is your turnover and gross rent, not your profit. Income from all your businesses and properties is added together.</p>',
        { caption: 'What is in and out of qualifying income', head: ['Income', 'Counts?'], rows: [
          ['Self-employed turnover (one or more trades)', 'Yes'],
          ['Rent from UK property, and overseas property if you are UK resident', 'Yes'],
          ['Your share of jointly owned property income', 'Yes'],
          ['Employment (PAYE) income', 'No'],
          ['Dividends, including from your own company', 'No'],
          ['State Pension and private pensions', 'No'],
          ['Your share of partnership profits as a partner', 'No'],
        ], after: 'Source: GOV.UK, Work out your qualifying income for Making Tax Digital for Income Tax (updated 11 September 2026).' },
        '<p>Illustrative example: Priya earns a salary of £60,000, has self-employed turnover of £22,000 and receives £12,000 of rent. Her salary is ignored, so her qualifying income is £34,000. If those were her 2025-26 figures, she would need MTD from 6 April 2027. If you started trading part way through the year, HMRC scales your trading income up to a full year.</p>',
      ],
    },
    {
      id: 'quarterly-updates', h2: 'What do you send to HMRC each quarter?', toc: 'Quarterly updates',
      body: [
        '<p>Every quarter your software sends HMRC a summary of your income and expenses, totalled by category for each business. It is not a tax return, and HMRC does not see your receipts or invoices. Each update is cumulative, running from 6 April to the end of the quarter, so you fix earlier mistakes in your records rather than resending old updates.</p>',
        { caption: 'Quarterly update deadlines for 2026-27', head: ['Standard period', 'Update due by'], rows: [
          ['6 April to 5 July 2026', '7 August 2026'],
          ['6 April to 5 October 2026', '7 November 2026'],
          ['6 April 2026 to 5 January 2027', '7 February 2027'],
          ['6 April 2026 to 5 April 2027', '7 May 2027'],
        ], after: 'You can choose calendar quarters (ending 30 June, 30 September, 31 December and 31 March) instead. The deadlines stay the same.' },
        '<ul><li>You send a separate update for each self-employment and each property business.</li><li>You must send an update even if nothing happened in the quarter.</li><li>You can send it from the end of the period, or up to 10 days before if you expect no more transactions.</li></ul>',
        '<p>Landlords have extra rules for jointly owned and overseas property. See our guide to <a href="/resources/making-tax-digital-for-landlords/">Making Tax Digital for landlords</a>.</p>',
      ],
    },
    {
      id: 'tax-return', h2: 'Do you still file a tax return under Making Tax Digital?', toc: 'Year-end tax return',
      body: [
        '<p>Yes. After the tax year ends, you file your tax return through your software by 31 January. For 2026-27, the first MTD year for most people, that is 31 January 2028. HMRC used to call this the final declaration.</p>',
        '<p>Before you submit, you make any year-end accounting and tax adjustments, then add income that is not in your quarterly updates. HMRC adds some items for you, such as PAYE pay, pensions and student loan details, which you must check. You add others yourself, including savings interest, dividends and partnership profits.</p>',
        '<p>Making Tax Digital does not change how or when you pay. The balancing payment and first payment on account are still due by 31 January and the second payment on account by 31 July. Our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> sets out those dates.</p>',
      ],
    },
    {
      id: 'records-and-software', h2: 'What records and software do you need?', toc: 'Records and software',
      body: [
        '<p>You need software that HMRC lists as compatible with Making Tax Digital for Income Tax, and digital records of every business and property income and expense. Each record shows the amount, the date and a category matching the Self Assessment categories.</p>',
        '<ul><li>Keep the digital records for at least 5 years after the 31 January deadline for that tax year, along with bank statements and invoices.</li><li>You can keep records in a spreadsheet and use bridging software to send them, as long as the products are digitally linked. Copying figures by hand or cutting and pasting is not allowed.</li><li>HMRC\'s software finder lists recognised products, including free ones for simple affairs. HMRC does not recommend any product.</li></ul>',
        '<p>Our guide to <a href="/resources/mtd-software/">MTD software</a> explains what to look for.</p>',
      ],
    },
    {
      id: 'exemptions', h2: 'Who is exempt from Making Tax Digital for Income Tax?', toc: 'Exemptions',
      body: [
        '<p>Some people are exempt automatically and some must apply. Exempt people still file a Self Assessment return.</p>',
        { caption: 'Main exemptions (checked 13 October 2026)', head: ['Who', 'Type of exemption'], rows: [
          ['Qualifying income of £20,000 or less', 'Automatic, permanent'],
          ['No National Insurance number before the tax year starts', 'Automatic, permanent'],
          ['Trustees, personal representatives and non-resident companies', 'Automatic, permanent'],
          ['Claiming qualifying care relief (foster and kinship carers) or averaging relief, or filing the SA107 or SA109 residence pages', 'Until April 2027 at the earliest'],
          ['Ministers of religion, Lloyd\'s members, Married Couple\'s Allowance or Blind Person\'s Allowance', 'Beyond April 2027, timeline to be announced'],
          ['Digitally excluded (age, health, disability, location or religious beliefs)', 'Must apply to HMRC'],
        ], after: 'Source: GOV.UK, Find out if you can get an exemption from Making Tax Digital for Income Tax (updated 28 May 2026).' },
        '<p>HMRC does not accept unfamiliarity with software, the cost, or having always filed on paper as the only reason for a digital exclusion.</p>',
      ],
    },
    {
      id: 'penalties', h2: 'What are the penalties under Making Tax Digital?', toc: 'Penalties',
      body: [
        '<p>Late submissions earn penalty points, and at 4 points you pay a £200 penalty, plus £200 for each later miss. You get one point per missed deadline, even if you run several businesses. For 2026-27, HMRC is not giving points for late quarterly updates, but you must send them before your tax return, and a late tax return still earns a point.</p>',
        '<p>Points below the threshold expire after 24 months. Once you reach 4, you clear them by meeting every deadline for 12 months and sending anything outstanding from the last 24 months.</p>',
        { caption: 'Late payment penalties for people in Making Tax Digital', head: ['Tax paid', '2026-27', '2027-28'], rows: [
          ['Up to 15 days late', 'No penalty', 'No penalty'],
          ['16 to 30 days late', '3% of tax owed on day 15', '4% of tax owed on day 15'],
          ['31 days or more late', '3% on day 15 plus 3% on day 30, then 10% a year', '4% on day 15 plus 4% on day 30, then 10% a year'],
        ], after: 'In your first year under these rules, no penalty applies until day 31. Penalties do not apply to payments on account. Late payment interest is charged on top, at 7.75% a year since 9 January 2026.' },
        '<p>If you cannot pay, contact HMRC early: penalties are paused from the date you contact HMRC if you agree a payment plan and keep to it. See our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a>.</p>',
      ],
    },
    {
      id: 'opting-out', h2: 'Can you stop using Making Tax Digital if your income falls?', toc: 'Opting out',
      body: [
        '<p>Yes, but only after your qualifying income stays below the threshold for three tax years in a row, or if you amend last year\'s return and that takes you below it. HMRC uses your fourth quarterly update for the third year to check, and the opt-out option then appears in your online account. You must still file a Self Assessment return for that year.</p>',
        '<p>Illustrative example: you joined in April 2026. If your qualifying income is £20,000 or less in 2026-27, 2027-28 and the fourth update for 2028-29 (sent by 7 May 2029), you will not need MTD for 2029-30.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'When does Making Tax Digital start for sole traders?', a: 'It started on 6 April 2026 for sole traders and landlords with qualifying income over £50,000 in 2024-25. It extends to those over £30,000 from 6 April 2027 and over £20,000 from 6 April 2028, based on the return two years earlier.' },
    { q: 'Is the £50,000 threshold based on profit or turnover?', a: 'Turnover. Qualifying income is your self-employment and property income before expenses, so a sole trader with £55,000 of sales and £20,000 of costs is over the threshold even though profit is £35,000.' },
    { q: 'Do I need Making Tax Digital if I am employed and have a side business?', a: 'Only if your self-employment and property income, before expenses, is over the threshold. Your salary does not count. Someone earning £70,000 from a job with £15,000 of side business turnover is under £20,000, so is exempt.' },
    { q: 'Can I use a spreadsheet for Making Tax Digital?', a: 'Yes, if you link it digitally to bridging software that sends the updates to HMRC. You cannot retype or cut and paste figures between products. The spreadsheet must still hold a record of each income and expense with its date and category.' },
    { q: 'Does Making Tax Digital apply to limited companies?', a: 'Not Making Tax Digital for Income Tax, which covers individuals with self-employment or property income. Limited companies pay corporation tax instead. A VAT-registered company already files VAT returns through Making Tax Digital software.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: When you need to use MTD for Income Tax'],
    ['https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax', 'GOV.UK: Work out your qualifying income'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates', 'GOV.UK: Send quarterly updates'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/submit-your-tax-return', 'GOV.UK: Submit your tax return through MTD'],
    ['https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax', 'GOV.UK: MTD exemptions'],
    ['https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax', 'GOV.UK: Penalties for MTD for Income Tax'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/if-your-circumstances-change', 'GOV.UK: Opting out of MTD for Income Tax'],
    ['https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-income-tax', 'GOV.UK: Find compatible software'],
  ],

  related: [
    '/resources/making-tax-digital-for-landlords/',
    '/resources/mtd-software/',
    '/resources/self-assessment-deadlines/',
    '/resources/pay-hmrc-in-instalments/',
  ],
};
