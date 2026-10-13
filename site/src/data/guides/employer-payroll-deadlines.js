// Guide: /resources/employer-payroll-deadlines/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Payrolling benefits: draft legislation published
// July 2026, secondary legislation due at Budget 2026. Re-check each April and once the regulations are made.
export default {
  url: '/resources/employer-payroll-deadlines/',
  section: 'accounting',
  title: 'Employer Payroll Deadlines 2026-27 | Severin Finance',
  description: 'Payroll deadlines for employers: FPS on or before payday, PAYE by the 22nd, P60 by 31 May, P11D by 6 July, Class 1A by 22 July. Free consultation.',
  h1: 'Employer payroll deadlines for 2026-27',
  crumb: 'Employer payroll deadlines',
  summary: 'FPS on payday, EPS by the 19th, PAYE by the 22nd, then P60s, P11Ds and Class 1A at year end.',
  topic: 'PAYE payroll reporting and payment deadlines for employers',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/payroll-services/', label: 'Our payroll service',
    boxTitle: 'Want payroll off your desk?', text: 'We run your payroll, send every RTI report on time and tell you what to pay HMRC each month.',
  },

  hero: {
    answer: 'Employers send a Full Payment Submission on or before every payday and pay PAYE by the 22nd of the next tax month, or the 19th by cheque. An Employer Payment Summary, if you need one, is due by the 19th. For 2026-27, P60s are due by 31 May 2027, P11Ds by 6 July and Class 1A by 22 July.',
  },

  tldr: [
    '<strong>Every payday:</strong> send a Full Payment Submission (FPS), on or before the day you pay staff.',
    '<strong>19th of the next tax month:</strong> Employer Payment Summary (EPS), if you need one, and cheque payments.',
    '<strong>22nd of the next tax month:</strong> pay PAYE and National Insurance electronically.',
    'For 2026-27: P60s by <strong>31 May 2027</strong>, P11D and P11D(b) by <strong>6 July 2027</strong>, Class 1A by <strong>22 July 2027</strong>.',
    'From <strong>April 2027</strong>, company cars, vans, fuel and medical benefits must be reported through payroll.',
  ],

  sections: [
    {
      id: 'monthly-cycle', h2: 'What are the payroll deadlines for employers?', toc: 'The monthly cycle',
      body: [
        '<p>Payroll runs on tax months, which start on the 6th of each month. You report pay to HMRC on or before each payday, send any Employer Payment Summary by the 19th of the next tax month, and pay HMRC by the 22nd. Our <a href="/uk/accounting/payroll-services/">payroll services</a> team runs this cycle for you and tells you the exact amount to pay each month.</p>',
        { caption: 'The monthly payroll cycle', head: ['Date', 'What happens'], rows: [
          ['Each payday', 'Send a Full Payment Submission (FPS) for everyone you pay'],
          ['6th', 'A new tax month starts (for example, 6 October to 5 November)'],
          ['10th', 'What you owe for the previous tax month shows in your HMRC online account'],
          ['19th', 'Send an Employer Payment Summary (EPS), if needed. Cheques must reach HMRC by this date'],
          ['22nd', 'Electronic payment of PAYE, National Insurance and student loan deductions must reach HMRC'],
        ], after: 'Source: GOV.UK, Running payroll: reporting to HMRC, and Pay employers\' PAYE. Checked 13 October 2026.' },
        '<p>For example, wages paid in the tax month 6 September to 5 October 2026 must be paid over to HMRC by Thursday 22 October 2026. If you also run a limited company, our guide to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> covers the accounts, corporation tax and VAT dates that sit alongside payroll.</p>',
      ],
    },
    {
      id: 'fps', h2: 'When must you send a Full Payment Submission?', toc: 'Full Payment Submission',
      body: [
        '<p>On or before each payday, every time you pay employees, even if you pay HMRC quarterly. The FPS lists everyone you paid, what they earned and what you deducted, including staff paid less than £96 a week.</p>',
        '<ul><li>Use your regular payday as the payment date, even if a bank holiday means you pay early or late.</li><li>You can send it a few days early, but if anything then changes, such as a tax code or a leaving date, you must send a corrected FPS.</li><li>Fix mistakes in your next regular FPS or an extra one, as soon as you can.</li></ul>',
        { caption: 'Penalties for a late FPS (per month, per PAYE scheme)', head: ['Number of employees', 'Monthly penalty'], rows: [
          ['1 to 9', '£100'],
          ['10 to 49', '£200'],
          ['50 to 249', '£300'],
          ['250 or more', '£400'],
        ], after: 'Source: GOV.UK, What happens if you do not report payroll information on time. HMRC sends penalty notices quarterly.' },
        '<p>There is no penalty for the first late report in a tax year (except for annual schemes), for an FPS that is late but covers payments made within 3 days of payday, or for a new employer whose first FPS goes in within 30 days of first paying someone. HMRC may still contact employers who regularly use the 3-day leeway. Taking on staff for the first time? Read our guide to <a href="/resources/hiring-your-first-employee/">hiring your first employee</a>.</p>',
      ],
    },
    {
      id: 'eps-and-payment', h2: 'When is an EPS due and when do you pay HMRC?', toc: 'EPS and paying PAYE',
      body: [
        '<p>An EPS is due by the 19th of the next tax month, and payment by the 22nd (or the 19th if you post a cheque). You only send an EPS when you need to tell HMRC something the FPS does not show, for example:</p>',
        '<ul><li>reclaiming statutory pay, such as Statutory Maternity or Paternity Pay</li><li>claiming the Employment Allowance for the tax year</li><li>reporting the Apprenticeship Levy, if your pay bill is over £3 million</li><li>reporting CIS deductions suffered by a limited company</li><li>telling HMRC you paid no employees in a tax month, so it does not expect a payment</li></ul>',
        '<p>If you usually pay HMRC less than £1,500 a month, you may be able to pay quarterly instead. Contact HMRC\'s payment helpline to arrange it. You still send an FPS every payday.</p>',
        { caption: 'Quarterly PAYE payment dates for 2026-27', head: ['Quarter', 'Pay by (electronic)'], rows: [
          ['6 April to 5 July 2026', '22 July 2026'],
          ['6 July to 5 October 2026', '22 October 2026'],
          ['6 October 2026 to 5 January 2027', '22 January 2027'],
          ['6 January to 5 April 2027', '22 April 2027'],
        ], after: 'Cheques must reach HMRC by the 19th instead. Source: GOV.UK, Pay employers\' PAYE.' },
        '<h3>Paying late</h3>',
        '<p>HMRC ignores the first late payment in a tax year. After that, each late month costs 1% of the amount paid late for 1 to 3 defaults, 2% for 4 to 6, 3% for 7 to 9 and 4% for 10 or more. Anything still unpaid after 6 months gets a further 5%, and another 5% after 12 months. Interest also runs daily at 7.75% a year (from 9 January 2026). If cash is short, read how to <a href="/resources/pay-hmrc-in-instalments/">pay HMRC in instalments</a> before the 22nd passes.</p>',
      ],
    },
    {
      id: 'year-end', h2: 'What are the end-of-year payroll deadlines?', toc: 'Year end',
      body: [
        '<p>Your last FPS of the 2026-27 tax year goes in on or before the final payday before 5 April 2027, marked as the final submission for the year. Then come P60s by 31 May and the expenses and benefits returns by 6 July.</p>',
        { caption: 'Year-end deadlines for the 2026-27 tax year', head: ['What', 'Deadline'], rows: [
          ['Final FPS, marked as final for the year', 'On or before your last payday of the tax year'],
          ['Update employee records and payroll software', 'From 6 April 2027'],
          ['Give P60s to employees', '31 May 2027'],
          ['P11D for each employee with benefits, P11D(b) and employees\' copies', '6 July 2027'],
          ['Pay Class 1A National Insurance on benefits', '22 July 2027 (19 July 2027 by cheque)'],
          ['Pay tax and Class 1B under a PAYE Settlement Agreement', '22 October 2027 (19 October by cheque)'],
        ], after: 'Source: GOV.UK, Payroll: annual reporting, and Expenses and benefits: deadlines. Checked 13 October 2026.' },
        '<p>If you forgot to mark your last FPS as final, or paid nobody in the last pay period, send an EPS instead. A P60 goes to every employee on your payroll on 5 April.</p>',
        '<p>A late P11D(b) costs £100 for every 50 employees, for each month or part month it is late. Class 1A paid late attracts 5% of the unpaid amount after 30 days, another 5% after 6 months and another 5% after 12 months, plus interest. Every date for the year is also in our <a href="/resources/uk-tax-calendar-2026-27/">UK tax calendar for 2026-27</a>.</p>',
      ],
    },
    {
      id: 'payrolling-benefits', h2: 'What changes for payrolling benefits from April 2027?', toc: 'Benefits from 2027',
      body: [
        '<p>From April 2027, most employers must report company cars, car fuel, vans, van fuel and employer-provided medical benefits through payroll, and work out the tax and Class 1A National Insurance in real time. You will no longer be able to report these benefits on a P11D after the end of the tax year.</p>',
        { caption: 'Mandatory payrolling of benefits in kind: the timetable', head: ['From', 'Benefits that must go through payroll'], rows: [
          ['April 2027', 'Company cars, car fuel, vans, van fuel and medical benefits'],
          ['April 2028', 'Most other benefits in kind'],
          ['Date to be confirmed', 'Employer-provided loans and accommodation (these stay on year-end reporting for now)'],
        ], after: 'Source: GOV.UK, Changes to reporting of benefits in kind from April 2027 (updated 23 July 2026).' },
        '<p>This is not yet fully in law. HMRC published draft legislation in July 2026, with the remaining regulations due at Budget 2026, and plans a one-year easement so that penalties are not charged for non-deliberate inaccuracies while employers adjust. Benefits you provide in 2026-27 are still reported on P11Ds by 6 July 2027, unless you already payroll them.</p>',
        '<p>Start now: list every car, van and health policy you provide, check your payroll can handle benefits, and tell affected staff that their tax will change each payday rather than through their tax code.</p>',
      ],
    },
    {
      id: 'staying-on-track', h2: 'How do you avoid missing a payroll deadline?', toc: 'Staying on track',
      body: [
        '<p>Build the dates into your pay run so nothing depends on memory. These habits keep most employers clear of penalties:</p>',
        '<ul><li><strong>Send the FPS as part of every pay run</strong>, not afterwards.</li><li><strong>Pay by Direct Debit, or send a bank transfer a few working days early</strong>, so the money reaches HMRC by the 22nd.</li><li><strong>Diarise the EPS</strong> in any month you reclaim statutory pay or pay nobody.</li><li><strong>Keep benefit records up to date</strong> all year, ready for P11Ds or payrolling.</li><li><strong>Check pension duties alongside payroll.</strong> Our guide to <a href="/resources/auto-enrolment-for-employers/">auto-enrolment for employers</a> covers your workplace pension deadlines.</li></ul>',
        '<p>If a penalty notice arrives and you had a good reason for the delay, you usually have 30 days to appeal. Our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a> explains what counts as a reasonable excuse.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What date do I pay PAYE to HMRC?', a: 'By the 22nd of the next tax month if you pay electronically, or the 19th if you pay by cheque through the post. For pay in the tax month ending 5 October 2026, that means 22 October 2026.' },
    { q: 'Do I need to send an EPS if I did not pay anyone?', a: 'Yes. If you paid no employees in a tax month, send an Employer Payment Summary by the 19th of the following tax month. If you send neither an FPS nor an EPS, HMRC may send you a filing notice.' },
    { q: 'Can a small employer pay PAYE quarterly?', a: 'Possibly. If you usually pay HMRC less than £1,500 a month, contact HMRC\'s payment helpline to ask. Quarterly payments are due by the 22nd after each quarter ends, but you still report on or before every payday.' },
    { q: 'When do employees need their P60?', a: 'By 31 May after the tax year ends. For 2026-27, give a P60 to every employee on your payroll on 5 April 2027 by 31 May 2027. It can be on paper or electronic.' },
    { q: 'What is the penalty for a late P11D(b)?', a: '£100 for every 50 employees, for each month or part month the return is late. Class 1A National Insurance paid after 22 July also attracts late payment penalties and interest.' },
    { q: 'Is a P11D still needed after April 2027?', a: 'For 2026-27 benefits, yes, by 6 July 2027. From April 2027, company cars, vans, fuel and medical benefits go through payroll instead. Most other benefits follow from April 2028, while loans and accommodation stay on year-end reporting for now.' },
  ],

  sources: [
    ['https://www.gov.uk/running-payroll/reporting-to-hmrc', 'GOV.UK: Running payroll, reporting to HMRC'],
    ['https://www.gov.uk/pay-paye-tax', 'GOV.UK: Pay employers\' PAYE'],
    ['https://www.gov.uk/payroll-annual-reporting', 'GOV.UK: Payroll annual reporting'],
    ['https://www.gov.uk/employer-reporting-expenses-benefits/deadlines', 'GOV.UK: Expenses and benefits deadlines'],
    ['https://www.gov.uk/guidance/what-happens-if-you-dont-report-payroll-information-on-time', 'GOV.UK: Late payroll reporting penalties'],
    ['https://www.gov.uk/guidance/what-happens-if-you-dont-pay-paye-and-national-insurance-on-time', 'GOV.UK: Late PAYE payment penalties'],
    ['https://www.gov.uk/government/publications/changes-to-reporting-of-benefits-in-kind-from-april-2027', 'GOV.UK: Reporting benefits in kind from April 2027'],
    ['https://www.gov.uk/guidance/what-payroll-information-to-report-to-hmrc', 'GOV.UK: What payroll information to report'],
  ],

  related: [
    '/resources/hiring-your-first-employee/',
    '/resources/auto-enrolment-for-employers/',
    '/resources/limited-company-deadlines/',
    '/resources/pay-hmrc-in-instalments/',
  ],
};
