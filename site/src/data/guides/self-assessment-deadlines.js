// Guide: /resources/self-assessment-deadlines/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April and after each Budget.
export default {
  url: '/resources/self-assessment-deadlines/',
  section: 'tax',
  title: 'Self Assessment Deadlines and Penalties | Severin Finance',
  description: 'Every Self Assessment deadline for the 2025-26 return: 5 October, 31 October, 30 December, 31 January and 31 July, plus the penalties. Free consultation.',
  h1: 'Self Assessment deadlines and penalties',
  crumb: 'Self Assessment deadlines',
  summary: 'Register by 5 October, file online by 31 January, pay by 31 January and 31 July.',
  topic: 'Self Assessment tax return deadlines',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/self-assessment-accountant/', label: 'Our self assessment service',
    boxTitle: 'Want us to file it?', text: 'We prepare and file your return well before 31 January, and tell you what to pay and when.',
  },

  hero: {
    answer: 'For the 2025-26 tax year, register for Self Assessment by 5 October 2026, file a paper return by 31 October 2026 or an online return by 31 January 2027, and pay what you owe by 31 January 2027. A second payment on account is due by 31 July 2027. Missing the filing deadline costs £100 straight away.',
  },

  tldr: [
    '<strong>5 October 2026:</strong> tell HMRC you need to file, if you are new to Self Assessment.',
    '<strong>31 October 2026:</strong> paper returns. <strong>31 January 2027:</strong> online returns and payment.',
    '<strong>30 December 2026:</strong> file online by then to pay a bill under £3,000 through your tax code.',
    '<strong>31 July 2027:</strong> second payment on account towards 2026-27.',
    'A late return costs £100, then up to £900 more in daily penalties after 3 months.',
  ],

  sections: [
    {
      id: 'key-dates', h2: 'What are the Self Assessment deadlines?', toc: 'The key dates',
      body: [
        '<p>The tax year runs from 6 April to 5 April. Your return for the 2025-26 tax year (6 April 2025 to 5 April 2026) can be sent from 6 April 2026, and the deadlines below all relate to that return. If you would rather not track them yourself, our <a href="/uk/tax/self-assessment-accountant/">self assessment accountants</a> prepare and file the return for you and tell you exactly what to pay.</p>',
        { caption: 'Self Assessment deadlines for the 2025-26 tax year', head: ['Deadline', 'What is due'], rows: [
          ['5 October 2026', 'Register for Self Assessment if you have not sent a return before'],
          ['31 October 2026', 'Paper tax return (11:59pm)'],
          ['30 December 2026', 'Online return, if you want a bill under £3,000 collected through your tax code'],
          ['31 January 2027', 'Online tax return, balancing payment for 2025-26 and first payment on account for 2026-27'],
          ['31 July 2027', 'Second payment on account for 2026-27'],
        ], after: 'Source: GOV.UK, Self Assessment tax returns: deadlines. Checked 13 October 2026.' },
        '<p>Each deadline is 11:59pm on the day. If HMRC writes to you after 31 October asking for a return, your deadline is 3 months from the date of that letter or email instead.</p>',
      ],
    },
    {
      id: 'registering', h2: 'When do you need to register?', toc: 'Registering',
      body: [
        '<p>You must tell HMRC by 5 October if you need to send a return for the tax year that ended the previous April. For 2025-26 that is 5 October 2026. Common reasons to register for the first time are:</p>',
        '<ul><li>starting to work for yourself, with more than £1,000 of trading income in the year</li><li>receiving rent from a UK property</li><li>untaxed income such as tips, commission or foreign income</li><li>selling shares, a second home or other assets at a gain above the annual exempt amount</li><li>becoming a partner in a business partnership</li></ul>',
        '<p>Registration gives you a Unique Taxpayer Reference (UTR), which can take a couple of weeks to arrive by post, so do not leave it until the end of September. If you register late and do not pay the full bill by 31 January, HMRC can charge a "failure to notify" penalty based on the tax that was unpaid.</p>',
        '<p>Not sure whether you are self-employed or should be trading as a company? Our guide to <a href="/resources/sole-trader-vs-limited-company/">sole trader vs limited company</a> sets out the differences.</p>',
      ],
    },
    {
      id: 'filing', h2: 'Paper or online: which deadline applies?', toc: 'Paper or online',
      body: [
        '<p>Paper returns must reach HMRC by 31 October. Online returns have three months longer, until 31 January. Almost everyone files online, through their HMRC online account or through accounting software, and a paper return now only makes sense in a few situations, such as some trustees and non-resident companies.</p>',
        '<p>Filing early does not mean paying early. If you send your 2025-26 return in May 2026, the tax is still not due until 31 January 2027. Filing early simply tells you how much to set aside, and if you are owed a refund, gets it to you sooner.</p>',
        '<h3>The 30 December option</h3>',
        '<p>If you are employed or receive a pension through PAYE and owe less than £3,000, HMRC can collect the tax through your tax code over the next tax year instead of you paying in one go. To use this, your online return must be filed by 30 December 2026 (or your paper return by 31 October 2026). You cannot pay part of the bill to bring it under £3,000.</p>',
      ],
    },
    {
      id: 'payments', h2: 'When do you pay, and what are payments on account?', toc: 'Payments on account',
      body: [
        '<p>Tax for the year is due by 31 January after the tax year ends. If your bill is £1,000 or more, HMRC usually also asks for advance payments towards next year, called payments on account. Each one is half of last year\'s bill.</p>',
        { caption: 'How payments on account work (example: a 2025-26 bill of £6,000)', head: ['Date', 'Payment'], rows: [
          ['31 January 2027', '£6,000 balancing payment for 2025-26 (less any payments on account already made) plus £3,000 first payment on account for 2026-27'],
          ['31 July 2027', '£3,000 second payment on account for 2026-27'],
          ['31 January 2028', 'Balancing payment for 2026-27 (the real bill minus the £6,000 already paid) plus the first payment on account for 2027-28'],
        ], after: 'Illustrative figures. The first year you owe tax is the most expensive, because the bill and the first advance payment fall on the same day.' },
        '<p>You do not make payments on account if last year\'s bill was under £1,000, or if more than 80% of your tax was already collected at source, for example through PAYE.</p>',
        '<p>If you expect your income to fall, you can ask HMRC to reduce your payments on account online or on form SA303. Be careful: if you reduce them too far, HMRC charges interest on the shortfall. If you cannot pay at all, read our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a> before the deadline passes.</p>',
      ],
    },
    {
      id: 'penalties', h2: 'What happens if you miss a deadline?', toc: 'Penalties and interest',
      body: [
        '<p>Filing late and paying late are penalised separately, so a return that is both late and unpaid collects both sets of penalties.</p>',
        { caption: 'Late filing penalties (current rules)', head: ['How late', 'Penalty'], rows: [
          ['1 day', '£100, even if there is no tax to pay or you pay on time'],
          ['3 months', '£10 a day for up to 90 days (a maximum of £900)'],
          ['6 months', '5% of the tax due or £300, whichever is more'],
          ['12 months', 'A further 5% of the tax due or £300, whichever is more'],
        ], after: 'Source: GOV.UK, Self Assessment tax returns: penalties.' },
        { caption: 'Late payment penalties (current rules)', head: ['How late', 'Penalty'], rows: [
          ['30 days', '5% of the tax unpaid at that date'],
          ['6 months', 'A further 5% of the tax still unpaid'],
          ['12 months', 'A further 5% of the tax still unpaid'],
        ], after: 'Interest is also charged from the day after the deadline, at the Bank of England base rate plus 4 percentage points. That was 7.75% a year from 9 January 2026.' },
        '<p>Penalties must be paid within 30 days of the notice. You can appeal if you had a reasonable excuse, such as a serious illness or a bereavement close to the deadline, but not because you found the return difficult or forgot. Our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a> explains how appeals work.</p>',
      ],
    },
    {
      id: 'mtd', h2: 'How is Making Tax Digital changing the dates?', toc: 'Making Tax Digital',
      body: [
        '<p>From 6 April 2026, sole traders and landlords with qualifying income over £50,000 must use Making Tax Digital for Income Tax. They keep digital records and send quarterly updates through compatible software, as well as a tax return by 31 January.</p>',
        { caption: 'Quarterly update deadlines for 2026-27 (Making Tax Digital)', head: ['Quarter (standard periods)', 'Update due by'], rows: [
          ['6 April to 5 July 2026', '7 August 2026'],
          ['6 April to 5 October 2026', '7 November 2026'],
          ['6 April 2026 to 5 January 2027', '7 February 2027'],
          ['6 April 2026 to 5 April 2027', '7 May 2027'],
        ], after: 'HMRC will not give penalty points for late quarterly updates in 2026-27. Points still apply to late tax returns.' },
        '<p>People in Making Tax Digital move to a new points-based system for late submissions and a different set of late payment penalties. The threshold falls to £30,000 from April 2027 and £20,000 from April 2028. Read our guides to <a href="/resources/making-tax-digital-for-income-tax/">Making Tax Digital for Income Tax</a> and <a href="/resources/making-tax-digital-for-landlords/">Making Tax Digital for landlords</a>.</p>',
      ],
    },
    {
      id: 'mistakes', h2: 'What if you made a mistake on your return?', toc: 'Correcting a return',
      body: [
        '<p>You can amend your return online up to 12 months after the 31 January filing deadline. For the 2025-26 return, that means by 31 January 2028. If the change means you owe more tax, interest runs from the original payment date, so it pays to correct errors quickly.</p>',
        '<p>After that window closes, you can still claim back tax you overpaid by writing to HMRC, generally within 4 years of the end of the tax year. If HMRC opens a check into your return, see our guide to <a href="/resources/hmrc-compliance-check-letter/">HMRC compliance check letters</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the Self Assessment deadline for 2025-26?', a: 'File your online return and pay what you owe by 11:59pm on 31 January 2027. Paper returns had to reach HMRC by 31 October 2026.' },
    { q: 'Do I get a penalty if I file late but owe no tax?', a: 'Yes. The £100 late filing penalty applies even when there is no tax to pay. Penalties linked to the tax due will be nil, but the daily penalties after 3 months still apply.' },
    { q: 'Can I pay my tax bill in instalments?', a: 'Often, yes. If you owe £30,000 or less and your returns are up to date, you may be able to set up a payment plan online. Interest is charged on the balance.' },
    { q: 'Why is my January bill so high?', a: 'In your first year with a bill of £1,000 or more, you pay the full year\'s tax plus a first payment on account towards next year, both by 31 January.' },
    { q: 'Is 31 January a working day deadline?', a: 'No. The deadline is 11:59pm on 31 January whichever day of the week it falls on, so allow time for bank transfers to reach HMRC.' },
  ],

  sources: [
    ['https://www.gov.uk/self-assessment-tax-returns/deadlines', 'GOV.UK: Self Assessment deadlines'],
    ['https://www.gov.uk/self-assessment-tax-returns/penalties', 'GOV.UK: Self Assessment penalties'],
    ['https://www.gov.uk/understand-self-assessment-bill/payments-on-account', 'GOV.UK: Payments on account'],
    ['https://www.gov.uk/pay-self-assessment-tax-bill/through-your-tax-code', 'GOV.UK: Pay through your tax code'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates', 'GOV.UK: Making Tax Digital quarterly updates'],
  ],

  related: [
    '/resources/pay-hmrc-in-instalments/',
    '/resources/making-tax-digital-for-income-tax/',
    '/resources/hmrc-penalties-explained/',
    '/resources/sole-trader-vs-limited-company/',
  ],
};
