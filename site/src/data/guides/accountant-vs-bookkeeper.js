// Guide: /resources/accountant-vs-bookkeeper/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). No prices: cost drivers only.
// Tax adviser registration with HMRC started 18 May 2026 (guidance updated 3 September 2026). Re-check each April.
export default {
  url: '/resources/accountant-vs-bookkeeper/',
  section: 'accounting',
  title: 'Accountant vs Bookkeeper: The Difference | Severin Finance',
  description: 'Accountant vs bookkeeper: who does what, the qualifications and HMRC registration to check, what drives the cost and when you need each. Free consultation.',
  h1: 'Accountant vs bookkeeper: which do you need?',
  crumb: 'Accountant vs bookkeeper',
  summary: 'What a bookkeeper and an accountant each do, what to check before hiring and when you need both.',
  topic: 'The difference between an accountant and a bookkeeper',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/bookkeeping-services/', label: 'Our bookkeeping service',
    boxTitle: 'Want both under one roof?', text: 'We keep your books up to date every week or month and our accountants use them for your accounts and tax returns.',
  },

  hero: {
    answer: 'A bookkeeper records your day-to-day transactions and keeps your bank reconciled. An accountant uses those records to prepare annual accounts and tax returns, and advises you on tax. Most small businesses need both: bookkeeping weekly or monthly, an accountant at year end. A limited company must file accounts within 9 months of its year end.',
  },

  tldr: [
    '<strong>Bookkeeper:</strong> records sales, costs and payments, reconciles the bank, prepares VAT figures.',
    '<strong>Accountant:</strong> prepares annual accounts and tax returns, plans tax and gives advice.',
    'Both must be supervised for <strong>anti-money laundering</strong>, by a professional body or by HMRC.',
    'Since <strong>18 May 2026</strong>, anyone paid to deal with HMRC for clients must register with HMRC as a tax adviser.',
    'Cost depends on how many transactions you have, how tidy your records are and how complex your tax is.',
  ],

  sections: [
    {
      id: 'difference', h2: 'What is the difference between an accountant and a bookkeeper?', toc: 'The difference',
      body: [
        '<p>A bookkeeper keeps your financial records accurate through the year. An accountant turns those records into accounts and tax returns, and tells you what they mean. The roles overlap, and many firms offer both. Our <a href="/uk/accounting/bookkeeping-services/">bookkeeping services</a> keep your books up to date, and our accountants then use the same records for your year end.</p>',
        { caption: 'Who usually does what', head: ['Task', 'Bookkeeper', 'Accountant'], rows: [
          ['Recording sales, bills and expenses', 'Yes', 'Sometimes'],
          ['Bank reconciliation', 'Yes', 'Checks it'],
          ['Chasing unpaid invoices and tracking bills', 'Often', 'Rarely'],
          ['VAT return figures', 'Often prepares them', 'Reviews and files them'],
          ['Payroll', 'Sometimes', 'Sometimes'],
          ['Annual accounts and Company Tax Return', 'No', 'Yes'],
          ['Self Assessment tax return', 'Rarely', 'Yes'],
          ['Tax planning and business advice', 'No', 'Yes'],
        ], after: 'A general guide. What each person offers depends on their training and the services they agree with you.' },
      ],
    },
    {
      id: 'bookkeeper', h2: 'What does a bookkeeper do?', toc: 'What bookkeepers do',
      body: [
        '<p>A bookkeeper records every transaction in your accounting software and makes sure it matches your bank, usually each week or month.</p>',
        '<ul><li>enters sales invoices, supplier bills and receipts</li><li>reconciles bank, card and payment provider accounts</li><li>tracks who owes you money and who you owe</li><li>codes costs to the right categories, so your profit is right</li><li>prepares figures for VAT returns, and for Making Tax Digital updates where they apply</li><li>runs payroll, if you agree it</li></ul>',
        '<p>Good bookkeeping makes everything else cheaper and quicker. Our <a href="/resources/monthly-bookkeeping-checklist/">monthly bookkeeping checklist</a> shows what a typical month-end involves.</p>',
      ],
    },
    {
      id: 'accountant', h2: 'What does an accountant do?', toc: 'What accountants do',
      body: [
        '<p>An accountant prepares your year-end accounts and tax returns, deals with HMRC and Companies House for you, and advises on tax and the business.</p>',
        { caption: 'Year-end work an accountant usually handles', head: ['Task', 'Deadline'], rows: [
          ['Limited company annual accounts to Companies House', '9 months after the end of the financial year'],
          ['Corporation tax payment', '9 months and 1 day after the end of the accounting period'],
          ['Company Tax Return (CT600) to HMRC', '12 months after the end of the accounting period'],
          ['Self Assessment return for 2025-26', 'Online by 31 January 2027'],
        ], after: 'Source: GOV.UK, Prepare and file annual accounts; Self Assessment deadlines. Checked 13 October 2026.' },
        '<p>Beyond compliance, an accountant can plan how you pay yourself, when to register for VAT and how to structure the business. A statutory audit is a separate, more detailed check of the accounts, and most small companies are exempt from it. For financial years from 6 April 2025, a company can usually skip an audit if it meets 2 of: turnover up to £15 million, assets up to £7.5 million, 50 or fewer employees.</p>',
      ],
    },
    {
      id: 'qualifications', h2: 'What qualifications should an accountant or bookkeeper have?', toc: 'What to check',
      body: [
        '<p>Look for membership of a professional body, supervision for anti-money laundering, and registration with HMRC if they will deal with HMRC for you.</p>',
        '<ul><li><strong>Professional body:</strong> accountants are often members of bodies such as ICAEW, ACCA, CIMA or ICAS. Bookkeepers often belong to the Institute of Certified Bookkeepers (ICB) or the Institute of Accountants and Bookkeepers (IAB). Membership means exams, ongoing training and a code of conduct.</li><li><strong>Anti-money laundering supervision:</strong> anyone offering accountancy, tax or professional bookkeeping services must be supervised, either by their professional body or by HMRC.</li><li><strong>HMRC tax adviser registration:</strong> since 18 May 2026, a business paid to deal with HMRC about someone else\'s tax must register as a tax adviser. Ask whether they have.</li></ul>',
        '<p>Also ask who will do the work, which software they use and how they keep your data secure.</p>',
      ],
    },
    {
      id: 'cost', h2: 'How much does an accountant or bookkeeper cost?', toc: 'What drives cost',
      body: [
        '<p>There is no standard fee. The price depends on how much work your records need and how complex your tax is.</p>',
        '<ul><li><strong>Volume:</strong> the number of transactions, bank accounts and payment providers.</li><li><strong>State of the books:</strong> catch-up or clean-up work costs more than keeping tidy records current.</li><li><strong>Frequency:</strong> weekly bookkeeping costs more than monthly.</li><li><strong>Business type:</strong> a limited company needs more filings than a sole trader; VAT, payroll and stock add work.</li><li><strong>Advice:</strong> tax planning, forecasts and meetings are extra to compliance.</li></ul>',
        '<p>A fixed monthly fee agreed upfront makes the cost predictable. You can see how we price on our <a href="/uk/pricing/">pricing page</a>.</p>',
      ],
    },
    {
      id: 'which-you-need', h2: 'When do you need a bookkeeper, an accountant or both?', toc: 'Which you need',
      body: [
        '<p>Most limited companies and VAT-registered businesses need both. Very small sole traders may manage with an accountant once a year.</p>',
        { caption: 'Who usually needs what', head: ['Your business', 'Bookkeeper', 'Accountant'], rows: [
          ['Sole trader with a few transactions a month', 'Optional, if you keep records yourself', 'For the Self Assessment return'],
          ['Sole trader or landlord with qualifying income over £50,000', 'Helpful: digital records and quarterly updates under Making Tax Digital since 6 April 2026', 'For the final declaration and advice'],
          ['VAT-registered business', 'Helpful: digital records and VAT returns through compatible software', 'To review VAT and file returns'],
          ['Limited company', 'Yes, weekly or monthly', 'Yes, for accounts, CT600 and directors\' tax'],
          ['Growing company needing monthly figures', 'Yes', 'Yes, plus management accounts or a finance director'],
        ], after: 'Making Tax Digital for Income Tax thresholds fall to £30,000 from 6 April 2027 and £20,000 from 6 April 2028 (GOV.UK).' },
        '<p>Read our guides to <a href="/resources/making-tax-digital-for-income-tax/">Making Tax Digital for Income Tax</a> and <a href="/resources/management-accounts-explained/">management accounts</a> if those apply to you.</p>',
      ],
    },
    {
      id: 'records', h2: 'What records must you keep, whoever does the work?', toc: 'Record keeping',
      body: [
        '<p>You stay legally responsible for your records and returns, even if someone else keeps them.</p>',
        '<ul><li><strong>Limited companies:</strong> keep records for 6 years from the end of the last financial year they relate to. HMRC can fine a company £3,000, or a director can be disqualified, for not keeping accounting records.</li><li><strong>Sole traders:</strong> keep records for at least 5 years after the 31 January deadline for the return they relate to.</li></ul>',
        '<p>Make sure you can always get into your own software and bank feeds, so you keep your records if you change provider.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can a bookkeeper do my tax return?', a: 'Some can, if they have the training and are registered with HMRC to deal with your tax. Many bookkeepers focus on day-to-day records and leave annual accounts and tax returns to an accountant. Ask what they are qualified and insured to do.' },
    { q: 'Do I need an accountant for a limited company?', a: 'It is not a legal requirement, but most directors use one. A company must file annual accounts with Companies House and a Company Tax Return with HMRC every year, and getting them wrong leads to penalties.' },
    { q: 'Is a bookkeeper cheaper than an accountant?', a: 'Usually per hour, because bookkeeping is routine work. Using a bookkeeper for day-to-day records often lowers your accountant\'s year-end fee too, as clean records take less time to turn into accounts and returns.' },
    { q: 'Does my bookkeeper need to register with HMRC?', a: 'If they are paid to deal with HMRC about your tax, for example filing VAT returns, they must register as a tax adviser, which began on 18 May 2026. They also need anti-money laundering supervision by HMRC or a professional body.' },
    { q: 'Can I do my own bookkeeping?', a: 'Yes. Many small businesses do, using accounting software with bank feeds. If you are VAT-registered or in Making Tax Digital for Income Tax, your records must be digital and your returns or updates sent through compatible software.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/check-if-and-when-you-need-to-register-as-a-tax-adviser-with-hmrc', 'GOV.UK: Register as a tax adviser with HMRC'],
    ['https://www.gov.uk/guidance/money-laundering-regulations-accountancy-service-provider-registration', 'GOV.UK: Money laundering supervision for accountancy service providers'],
    ['https://www.gov.uk/prepare-file-annual-accounts-for-limited-company', 'GOV.UK: Prepare and file annual accounts'],
    ['https://www.gov.uk/audit-exemptions-for-private-limited-companies', 'GOV.UK: Audit exemptions for private limited companies'],
    ['https://www.gov.uk/running-a-limited-company/company-and-accounting-records', 'GOV.UK: Company and accounting records'],
    ['https://www.gov.uk/self-employed-records/how-long-to-keep-your-records', 'GOV.UK: How long sole traders keep records'],
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: When you need Making Tax Digital for Income Tax'],
  ],

  related: [
    '/resources/monthly-bookkeeping-checklist/',
    '/resources/management-accounts-explained/',
    '/resources/when-to-hire-a-finance-director/',
    '/resources/limited-company-deadlines/',
  ],
};
