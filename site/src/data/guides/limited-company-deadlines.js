// Guide: /resources/limited-company-deadlines/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, Companies House guidance and the Bank of England on 13 October 2026 (sources below).
// Re-check each April and after each Budget.
export default {
  url: '/resources/limited-company-deadlines/',
  section: 'accounting',
  title: 'Limited Company Deadlines and Penalties | Severin Finance',
  description: 'Every limited company deadline: accounts at 9 months, corporation tax at 9 months and 1 day, CT600 at 12 months, plus the penalties. Free consultation.',
  h1: 'Limited company deadlines and penalties',
  crumb: 'Limited company deadlines',
  summary: 'Accounts at 9 months, tax paid at 9 months and 1 day, CT600 at 12 months, and the penalties.',
  topic: 'Limited company filing and payment deadlines',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/limited-company-accountant/', label: 'Our limited company service',
    boxTitle: 'Want the dates handled?', text: 'We prepare and file your accounts, Company Tax Return and confirmation statement before each deadline.',
  },

  hero: {
    answer: 'A limited company files its annual accounts at Companies House 9 months after its year end, pays corporation tax 9 months and 1 day after the end of its accounting period, and files its tax return within 12 months. A first set of accounts is due 21 months after the company was registered. A confirmation statement is due yearly.',
  },

  tldr: [
    'Annual accounts: <strong>9 months</strong> after the year end. First accounts: <strong>21 months</strong> after registration.',
    'Corporation tax: pay <strong>9 months and 1 day</strong> after the period ends.',
    'Company Tax Return (CT600): <strong>12 months</strong> after the period ends.',
    'Confirmation statement: at least every 12 months, within <strong>14 days</strong> of the review period ending.',
    'Late accounts cost <strong>£150 to £1,500</strong>. A late CT600 costs <strong>£200</strong> from day one.',
  ],

  sections: [
    {
      id: 'deadlines', h2: 'What are the deadlines for a limited company?', toc: 'The key dates',
      body: [
        '<p>Every limited company has the same set of yearly deadlines, counted from its own year end: accounts at 9 months, corporation tax at 9 months and 1 day, and the tax return at 12 months. Our <a href="/uk/accounting/limited-company-accountant/">limited company accountants</a> prepare and file all of them, and tell you the tax to pay well before it is due.</p>',
        { caption: 'Yearly deadlines for an established company', head: ['What', 'Who to', 'Deadline', 'Year end 31 March 2026'], rows: [
          ['Annual accounts', 'Companies House', '9 months after the year end', '31 December 2026'],
          ['Corporation tax payment', 'HMRC', '9 months and 1 day after the period ends', '1 January 2027'],
          ['Company Tax Return (CT600)', 'HMRC', '12 months after the period ends', '31 March 2027'],
          ['Confirmation statement', 'Companies House', 'Within 14 days of the end of each 12-month review period', 'Depends on your review period'],
        ], after: 'Source: GOV.UK, Accounts and tax returns for private limited companies. Checked 13 October 2026. Companies with taxable profits over £1.5 million pay corporation tax in quarterly instalments instead.' },
        '<p>Notice that the tax is due before the return. Most companies file the accounts and CT600 together, at least a few weeks before the payment date, so the directors know the bill in time.</p>',
        '<p>Companies that employ staff or are registered for VAT have monthly or quarterly deadlines on top of these. They are covered further down.</p>',
      ],
    },
    {
      id: 'first-year', h2: 'When are a new company\'s first accounts due?', toc: 'The first year',
      body: [
        '<p>A new company\'s first accounts are due at Companies House 21 months after the date it was registered. They start on the day the company was incorporated and end on the accounting reference date that Companies House sets, which is the last day of the month in which the company was registered, one year on.</p>',
        '<p>Corporation tax works differently, because an accounting period for tax cannot be longer than 12 months. If the first accounts cover more than a year, the company files two tax returns, each with its own payment date.</p>',
        { caption: 'GOV.UK example: company set up on 11 May 2024, first accounts to 31 May 2025', head: ['Tax accounting period', 'Corporation tax due'], rows: [
          ['11 May 2024 to 10 May 2025', '11 February 2026'],
          ['11 May 2025 to 31 May 2025', '1 March 2026'],
        ], after: 'Source: GOV.UK, Your limited company\'s first accounts and Company Tax Return.' },
        '<p>Two more early deadlines:</p>',
        '<ul><li><strong>Register for corporation tax</strong> within 3 months of starting to do business, if this did not happen when the company was formed. Buying, selling, advertising, renting a property and employing someone all count.</li><li><strong>Verify your identity.</strong> Directors must verify their identity with Companies House before the company can file its confirmation statement. Our guide to <a href="/resources/companies-house-identity-verification/">Companies House identity verification</a> explains how.</li></ul>',
      ],
    },
    {
      id: 'late-accounts', h2: 'What is the penalty for filing company accounts late?', toc: 'Late accounts',
      body: [
        '<p>Companies House charges an automatic penalty of £150 to £1,500 for a private company, depending on how late the accounts arrive. The penalty doubles if the accounts are late two years in a row.</p>',
        { caption: 'Companies House late filing penalties (private companies)', head: ['How late', 'Penalty'], rows: [
          ['Up to 1 month', '£150'],
          ['1 to 3 months', '£375'],
          ['3 to 6 months', '£750'],
          ['More than 6 months', '£1,500'],
        ], after: 'Source: GOV.UK, Penalties for late filing. Public companies pay higher amounts.' },
        '<p>You can appeal only if something outside your control stopped you filing, and you must prove it. Companies House says appeals are unlikely to succeed because these are the first accounts, the company is dormant, you cannot pay, another director was responsible or your accountant let you down.</p>',
        '<p>If you know before the deadline that an unplanned event, such as a fire destroying your records, will stop you filing, you can apply for an extension. You must apply before the deadline passes. Leaving accounts unfiled for long enough can also lead to the company being struck off the register.</p>',
      ],
    },
    {
      id: 'late-tax', h2: 'What happens if the CT600 or the tax is late?', toc: 'Late tax return',
      body: [
        '<p>HMRC charges £200 the day after the CT600 deadline and another £200 at 3 months, even if there is no tax to pay. These amounts apply to returns due on or after 1 April 2026; before that they were £100.</p>',
        { caption: 'Company Tax Return late filing penalties (returns due on or after 1 April 2026)', head: ['How late', 'Penalty'], rows: [
          ['1 day', '£200'],
          ['3 months', 'Another £200'],
          ['6 months', 'HMRC estimates the tax and charges 10% of the unpaid tax'],
          ['12 months', 'Another 10% of the unpaid tax'],
        ], after: 'If the return is late 3 times in a row, each £200 becomes £1,000. Source: GOV.UK, Company Tax Returns: penalties for late filing.' },
        '<p>When a return is more than 6 months late, HMRC issues a tax determination: its own estimate of the tax. You cannot appeal against it. You have to file the real return and pay, and HMRC then recalculates.</p>',
        '<p>Late payment of corporation tax is charged interest, not a fixed penalty, at the Bank of England base rate plus 4 percentage points. That is 7.75% a year from 9 January 2026. Our guide to <a href="/resources/corporation-tax-rates/">corporation tax rates</a> explains how the bill is worked out and when large companies pay.</p>',
      ],
    },
    {
      id: 'confirmation-statement', h2: 'When is the confirmation statement due?', toc: 'Confirmation statement',
      body: [
        '<p>You must file a confirmation statement at least once every 12 months, within 14 days of the end of your review period. The first review period ends 12 months after incorporation; later ones end 12 months after the date on your last statement.</p>',
        '<p>The fee is £50 online or £110 on paper, paid once for each 12-month period. You must file even if nothing has changed. The statement confirms the company\'s details are correct, gives a registered email address and states that the company\'s intended future activities are lawful. Companies House will not accept it until every director has verified their identity and given their personal code.</p>',
        '<p>Not filing is an offence, which can mean a fine of up to £5,000 and the company being struck off. Read our <a href="/resources/confirmation-statement-guide/">confirmation statement guide</a> for what to check before you file.</p>',
      ],
    },
    {
      id: 'payroll-vat', h2: 'What are the payroll and VAT deadlines?', toc: 'Payroll and VAT',
      body: [
        '<p>If the company runs a payroll, it reports to HMRC on or before every payday and pays PAYE by the 22nd of the next tax month. VAT returns and payments are due one calendar month and 7 days after each VAT period ends.</p>',
        { caption: 'Payroll and VAT deadlines', head: ['What', 'Deadline'], rows: [
          ['Full Payment Submission (FPS)', 'On or before each payday'],
          ['Employer Payment Summary (EPS), if needed', '19th of the next tax month'],
          ['Pay PAYE and National Insurance', '22nd of the next tax month (19th if paying by post)'],
          ['P60 to employees', '31 May'],
          ['P11D and P11D(b) for expenses and benefits', '6 July'],
          ['VAT return and payment', '1 calendar month and 7 days after the VAT period ends'],
        ], after: 'Source: GOV.UK, Running payroll, Payroll annual reporting and Sending a VAT Return.' },
        '<h3>Payroll penalties</h3>',
        '<p>A late FPS costs £100 a month for 1 to 9 employees, rising to £400 for 250 or more. HMRC does not charge for the first late report in a tax year, or where every payment was reported within 3 days of payday. Our <a href="/resources/employer-payroll-deadlines/">employer payroll deadlines</a> guide has the full list.</p>',
        '<h3>VAT penalties</h3>',
        '<p>Late VAT returns earn penalty points. At 4 points for quarterly returns (2 for annual, 5 for monthly) you pay £200, and another £200 for each later late return. Late VAT payments cost 3% of what is unpaid at day 15, another 3% of what is unpaid at day 30, then 10% a year from day 31. See our guide to <a href="/resources/vat-penalties/">VAT penalties</a>.</p>',
      ],
    },
    {
      id: 'staying-on-track', h2: 'How do you avoid missing a deadline?', toc: 'Staying on track',
      body: [
        '<p>Work back from the year end and set the dates in your diary as soon as each year closes. These habits keep most companies out of trouble:</p>',
        '<ul><li><strong>Keep the books up to date monthly</strong>, so the year-end accounts take weeks, not months.</li><li><strong>File accounts and the CT600 together</strong>, well before the 9-month payment date, so the tax bill is known in advance.</li><li><strong>Set money aside</strong> for corporation tax and VAT as you go.</li><li><strong>Keep your registered email address working</strong>, because Companies House uses it for reminders.</li><li><strong>Ask for help early.</strong> If you cannot pay, talk to HMRC before the deadline. Our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a> explains how a payment plan works.</li></ul>',
        '<p>For a full year of dates in one place, use our <a href="/resources/uk-tax-calendar-2026-27/">UK tax calendar for 2026-27</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How long do I have to file company accounts?', a: '9 months from your financial year end for every set after the first. First accounts are due 21 months after the company was registered with Companies House. For a 31 March 2026 year end, accounts are due by 31 December 2026.' },
    { q: 'Is corporation tax due before the tax return?', a: 'Yes. Most companies pay corporation tax 9 months and 1 day after the accounting period ends, but the CT600 is not due until 12 months after. Filing early tells you the bill before you have to pay it.' },
    { q: 'Do dormant companies have deadlines?', a: 'Yes. A dormant company still files annual accounts and a confirmation statement with Companies House every year, with the same deadlines and penalties. If HMRC has sent a notice to file a Company Tax Return, that must be filed too.' },
    { q: 'Can I get an extension for my company accounts?', a: 'Only for an event outside your control, such as a fire destroying your records, and only if you apply before the deadline. You may not qualify if you have already extended or shortened your accounting period.' },
    { q: 'What if I miss the CT600 deadline but owe no tax?', a: 'You still pay the flat penalty: £200 one day late and another £200 at 3 months, for returns due on or after 1 April 2026. Penalties based on unpaid tax will be nil if there is no tax due.' },
  ],

  sources: [
    ['https://www.gov.uk/prepare-file-annual-accounts-for-limited-company', 'GOV.UK: Accounts and tax returns for private limited companies'],
    ['https://www.gov.uk/first-company-accounts-and-return', 'GOV.UK: First accounts and Company Tax Return'],
    ['https://www.gov.uk/annual-accounts/penalties-for-late-filing', 'GOV.UK: Late filing penalties for company accounts'],
    ['https://www.gov.uk/company-tax-returns/penalties-for-late-filing', 'GOV.UK: Company Tax Return penalties'],
    ['https://www.gov.uk/guidance/confirmation-statement-guidance', 'Companies House: Confirmation statement guidance'],
    ['https://www.gov.uk/guidance/what-happens-if-you-dont-report-payroll-information-on-time', 'GOV.UK: Late payroll reporting penalties'],
    ['https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late', 'GOV.UK: VAT late payment penalties'],
    ['https://www.gov.uk/guidance/corporation-tax-trading-and-non-trading', 'GOV.UK: Corporation Tax, trading and non-trading'],
  ],

  related: [
    '/resources/corporation-tax-rates/',
    '/resources/confirmation-statement-guide/',
    '/resources/employer-payroll-deadlines/',
    '/resources/vat-penalties/',
  ],
};
