// UK tax calendar 2026-27: /resources/uk-tax-calendar-2026-27/. Page: src/pages/resources/uk-tax-calendar-2026-27.astro.
// Every fixed date in the 2026-27 tax year (6 April 2026 to 5 April 2027), checked on GOV.UK on 13 October 2026.
// Dates that depend on a company's year end or VAT stagger are in the "rolling" section, not the month tables.
const T = (caption, rows) => ({ caption, head: ['Date', 'Deadline', 'Who it affects'], rows });

export default {
  url: '/resources/uk-tax-calendar-2026-27/',
  title: 'UK Tax Calendar 2026-27: Every Deadline | Severin Finance',
  description: 'Every UK tax deadline for 2026-27, month by month: Self Assessment, Making Tax Digital, PAYE, P11D, VAT and corporation tax. Free consultation.',
  eyebrow: 'Tax calendar',
  h1: 'UK tax calendar 2026-27',
  crumb: 'Tax calendar 2026-27',
  summary: 'Every fixed UK tax deadline from April 2026 to April 2027, month by month, with sources.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  toolLabel: 'Key dates at a glance',
  hero: {
    answer: 'The 2026-27 tax year runs from 6 April 2026 to 5 April 2027. The biggest dates are 31 January 2027 for 2025-26 Self Assessment returns and payment, the 7th of August, November, February and May for Making Tax Digital updates, and the 22nd of each month for PAYE. Every deadline is below, month by month.',
  },
  glance: [
    ['2026-10-31', '31 October 2026', 'Paper Self Assessment returns for 2025-26'],
    ['2026-11-07', '7 November 2026', 'Second Making Tax Digital quarterly update'],
    ['2026-12-30', '30 December 2026', 'File online to have tax under £3,000 collected through your tax code'],
    ['2027-01-31', '31 January 2027', 'Online Self Assessment returns and payment for 2025-26'],
  ],
  service: {
    href: '/uk/tax/self-assessment-accountant/', label: 'Our Self Assessment service',
    boxTitle: 'Never miss a deadline', text: 'We track every date for you, send reminders and file your returns well before the deadline.',
  },
  sections: [
    {
      id: 'april-june-2026', h2: 'What is due from April to June 2026?',
      body: [
        T('April to June 2026', [
          ['6 April 2026', 'Tax year 2026-27 starts. Making Tax Digital for Income Tax starts for sole traders and landlords with qualifying income over £50,000 in 2024-25', 'Everyone; sole traders and landlords'],
          ['19 April 2026', 'Final Employer Payment Summary (EPS) for 2025-26, and postal PAYE payments for month 12', 'Employers'],
          ['22 April 2026', 'Electronic PAYE and National Insurance payment for the month to 5 April 2026', 'Employers'],
          ['31 May 2026', 'Give a P60 for 2025-26 to every employee on your payroll at 5 April 2026', 'Employers'],
          ['22 June 2026', 'PAYE payment for the month to 5 June', 'Employers'],
        ]),
      ],
    },
    {
      id: 'july-september-2026', h2: 'What is due from July to September 2026?',
      body: [
        T('July to September 2026', [
          ['5 July 2026', 'Agree a PAYE Settlement Agreement for 2025-26 with HMRC', 'Employers'],
          ['6 July 2026', 'File P11D and P11D(b) forms for 2025-26 benefits in kind, and give employees their P11D details', 'Employers'],
          ['22 July 2026', 'Pay Class 1A National Insurance on 2025-26 benefits (19 July by post). Quarterly PAYE payment for small employers', 'Employers'],
          ['31 July 2026', 'Second payment on account for 2025-26', 'Self Assessment taxpayers'],
          ['7 August 2026', 'First Making Tax Digital quarterly update (6 April to 5 July)', 'Sole traders and landlords in MTD'],
          ['22 August 2026', 'PAYE payment for the month to 5 August', 'Employers'],
          ['22 September 2026', 'PAYE payment for the month to 5 September', 'Employers'],
        ]),
        '<p>PAYE payments are due by the 22nd of each month if you pay electronically, or the 19th by post. If the 22nd falls on a weekend or bank holiday, the money must reach HMRC by the last working day before it. Small employers who pay less than £1,500 a month can ask to pay quarterly, on 22 July, 22 October, 22 January and 22 April. Our <a href="/uk/accounting/payroll-services/">payroll service</a> handles every one of these dates.</p>',
      ],
    },
    {
      id: 'october-december-2026', h2: 'What is due from October to December 2026?',
      body: [
        T('October to December 2026', [
          ['5 October 2026', 'Register for Self Assessment if you need to file a 2025-26 return for the first time', 'New sole traders, landlords, others'],
          ['22 October 2026', 'Pay PAYE Settlement Agreement tax and National Insurance for 2025-26 (19 October by post). Quarterly PAYE payment', 'Employers'],
          ['31 October 2026', 'Paper Self Assessment returns for 2025-26', 'Self Assessment taxpayers'],
          ['7 November 2026', 'Second Making Tax Digital quarterly update (6 July to 5 October)', 'Sole traders and landlords in MTD'],
          ['22 November 2026', 'PAYE payment for the month to 5 November', 'Employers'],
          ['30 December 2026', 'File your 2025-26 return online to have tax under £3,000 collected through your 2027-28 tax code', 'Employees and pensioners in Self Assessment'],
        ]),
      ],
    },
    {
      id: 'january-april-2027', h2: 'What is due from January to April 2027?',
      body: [
        T('January to April 2027', [
          ['31 January 2027', 'Online Self Assessment returns for 2025-26. Pay the 2025-26 balance and the first payment on account for 2026-27', 'Self Assessment taxpayers'],
          ['1 February 2027', '£100 late filing penalty if the 2025-26 return is not in, even if no tax is owed', 'Self Assessment taxpayers'],
          ['7 February 2027', 'Third Making Tax Digital quarterly update (6 October to 5 January)', 'Sole traders and landlords in MTD'],
          ['Early March 2027', '5% late payment penalty on 2025-26 tax still unpaid 30 days after 31 January', 'Self Assessment taxpayers'],
          ['5 April 2027', 'Tax year 2026-27 ends. Last day to use 2026-27 ISA and pension allowances and to make gifts within the inheritance tax annual exemption', 'Everyone'],
          ['6 April 2027', 'Making Tax Digital for Income Tax extends to qualifying income over £30,000 in 2025-26. Payrolling of company cars, car fuel, vans, van fuel and medical benefits becomes mandatory', 'Sole traders, landlords, employers'],
        ]),
        '<p>The fourth quarterly update for 2026-27 is due on 7 May 2027, and the final declaration by 31 January 2028. Read our guides to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines and penalties</a> and <a href="/resources/making-tax-digital-for-income-tax/">Making Tax Digital for Income Tax</a>.</p>',
      ],
    },
    {
      id: 'rolling', h2: 'Which deadlines depend on your own dates?',
      body: [
        '<p>Company and VAT deadlines run from your accounting period or VAT quarter, so they differ from business to business. These are the rules, with the dates for a company whose year ended on 31 March 2026:</p>',
        { caption: 'Rolling deadlines', head: ['Deadline', 'Rule', 'Year end 31 March 2026'], rows: [
          ['Corporation tax payment', '9 months and 1 day after the end of the accounting period', '1 January 2027'],
          ['Company tax return (CT600)', '12 months after the end of the accounting period', '31 March 2027'],
          ['Accounts to Companies House', '9 months after the year end (private companies, not the first accounts)', '31 December 2026'],
          ['Confirmation statement', 'Within 14 days after the review date, at least once a year', 'Your review date + 14 days'],
          ['VAT return and payment', '1 month and 7 days after the end of the VAT period', 'Quarter to 30 September: 7 November 2026'],
          ['Capital gains on UK homes', 'Report and pay within 60 days of completion', 'Each sale'],
        ], after: 'Large companies pay corporation tax in quarterly instalments instead. Sources: GOV.UK, Corporation Tax; Companies House; VAT returns.' },
        '<p>See our guides to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> and the <a href="/resources/60-day-property-return/">60-day property return</a>, or let our <a href="/uk/tax/corporation-tax-accountant/">corporation tax team</a> track them for you.</p>',
      ],
    },
  ],
  faqs: [
    { q: 'When is the Self Assessment deadline for 2025-26?', a: '31 January 2027 for online returns and for paying the tax you owe. Paper returns were due by 31 October 2026. If you need to register for the first time, the deadline was 5 October 2026.' },
    { q: 'When do Making Tax Digital quarterly updates have to be sent?', a: 'By 7 August, 7 November, 7 February and 7 May for the standard quarters. In 2026-27 HMRC will not give penalty points for late quarterly updates, but you still need to send them.' },
    { q: 'When does the 2026-27 tax year end?', a: 'On 5 April 2027. The 2026-27 Self Assessment return is then due by 31 January 2028.' },
    { q: 'What happens if a deadline falls on a weekend?', a: 'Self Assessment deadlines stay the same, and online filing works at weekends. For PAYE, electronic payments must reach HMRC by the last working day before the 22nd if it falls on a weekend or bank holiday.' },
  ],
  sources: [
    ['https://www.gov.uk/self-assessment-tax-returns/deadlines', 'GOV.UK: Self Assessment deadlines'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates', 'GOV.UK: Making Tax Digital quarterly updates'],
    ['https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax', 'GOV.UK: Making Tax Digital eligibility'],
    ['https://www.gov.uk/pay-paye-tax', 'GOV.UK: Pay employers\' PAYE'],
    ['https://www.gov.uk/employer-reporting-expenses-benefits', 'GOV.UK: Expenses and benefits for employers'],
    ['https://www.gov.uk/government/publications/changes-to-reporting-of-benefits-in-kind-from-april-2027', 'GOV.UK: Changes to reporting of benefits in kind from April 2027'],
    ['https://www.gov.uk/corporation-tax', 'GOV.UK: Corporation Tax'],
  ],
};
