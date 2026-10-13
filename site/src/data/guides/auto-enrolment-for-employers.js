// Guide: /resources/auto-enrolment-for-employers/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026 on GOV.UK (employer pension guidance, DWP 2026-27 threshold review) and
// legislation.gov.uk (Pensions Act 2008 ss1 and 4; SI 2010/5 regs 3, 4, 12 and 13). The Pensions Regulator site
// refused automated requests (HTTP 403), so its pages were not used. Re-check thresholds each December/April.
// Illustrative example: £30,000 salary, qualifying earnings basis, 2026-27.
export default {
  url: '/resources/auto-enrolment-for-employers/',
  section: 'accounting',
  title: 'Auto-Enrolment for Employers 2026-27 | Severin Finance',
  description: 'Auto-enrolment for employers in 2026-27: the £10,000 trigger, 8% minimum contributions, the 5-month declaration deadline and penalties. Free consultation.',
  h1: 'Auto-enrolment for employers: duties, thresholds and contributions',
  crumb: 'Auto-enrolment for employers',
  summary: 'Who to enrol, the 2026-27 thresholds, minimum contributions, the declaration and re-enrolment.',
  topic: 'Workplace pension automatic enrolment duties for UK employers',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/payroll-services/', label: 'Our payroll service',
    boxTitle: 'Want pensions run with payroll?', text: 'We assess your staff every pay run, work out pension contributions and keep the records you need for your declaration.',
  },

  hero: {
    answer: 'From the day your first employee starts, you must put workers aged 22 to State Pension age who earn at least £10,000 a year into a workplace pension. For 2026-27, minimum contributions are 8% of earnings between £6,240 and £50,270, with at least 3% from you. Declare compliance to The Pensions Regulator within 5 months.',
  },

  tldr: [
    'Your duties start on the day your <strong>first employee</strong> starts work.',
    'Thresholds for 2026-27 are unchanged: <strong>£10,000</strong> earnings trigger, qualifying earnings from <strong>£6,240</strong> to <strong>£50,270</strong>.',
    'Minimum contributions: <strong>8%</strong> in total, at least <strong>3%</strong> from the employer.',
    'Declare compliance within <strong>5 months</strong> of your duties start date, then re-enrol and re-declare every <strong>3 years</strong>.',
    'The Pensions Regulator can issue a <strong>£400</strong> fixed penalty, then daily penalties of £50 to £10,000.',
  ],

  sections: [
    {
      id: 'duties', h2: 'What are an employer\'s auto-enrolment duties?', toc: 'Your duties',
      body: [
        '<p>Every employer with at least one worker has duties, starting on the day the first worker begins (your duties start date). You must assess your staff, enrol those who qualify, pay contributions, tell staff what you have done and declare it to The Pensions Regulator. Our <a href="/uk/accounting/payroll-services/">payroll services</a> do the assessment and contribution figures with every pay run.</p>',
        '<ol><li>Choose a pension scheme that qualifies for automatic enrolment, or check that your existing one does.</li><li>Assess each worker\'s age and earnings every time you pay them.</li><li>Enrol eligible workers and write to them, within 6 weeks for staff who become eligible later.</li><li>Pay contributions by the 22nd of the next month (the 19th by cheque), and by the date agreed with your provider.</li><li>Complete your declaration of compliance within 5 months of your duties start date.</li><li>Keep records, deal with opt-outs and requests to join, and re-enrol every 3 years.</li></ol>',
        '<p>If this is your first hire, start with our guide to <a href="/resources/hiring-your-first-employee/">hiring your first employee</a>, which covers the other steps.</p>',
      ],
    },
    {
      id: 'who', h2: 'Who must you enrol, and who can ask to join?', toc: 'Who to enrol',
      body: [
        '<p>You must automatically enrol workers aged 22 to State Pension age who earn at least £10,000 a year and usually work in the UK. Other workers aged 16 to 74 can choose to join, and whether you must contribute depends on what they earn.</p>',
        { caption: 'Worker categories for auto-enrolment, 2026-27', head: ['Worker', 'What you must do', 'Employer contribution'], rows: [
          ['Aged 22 to State Pension age, earning £10,000 or more', 'Enrol automatically', 'Yes, at least 3%'],
          ['Aged 16 to 74, earning more than £6,240 but not eligible above', 'Enrol if they ask to opt in', 'Yes, at least 3%'],
          ['Aged 16 to 74, earning £6,240 or less', 'Let them join a pension if they ask', 'Not required'],
        ], after: 'Source: GOV.UK, Workplace pensions for employers, and Pensions Act 2008 section 1. Earnings are tested in each pay period: £6,240 a year is £520 a month or £120 a week.' },
        '<p>You must enrol anyone who asks to join within 1 month of their request, and you cannot refuse. Staff who move into the eligible group through a birthday or a pay rise must be enrolled and written to within 6 weeks of the day they meet the criteria.</p>',
      ],
    },
    {
      id: 'thresholds', h2: 'What are the auto-enrolment thresholds for 2026-27?', toc: '2026-27 thresholds',
      body: [
        '<p>The thresholds for 2026-27 are the same as for 2025-26. The government kept them frozen for stability while the Pensions Commission, launched on 21 July 2025, reviews pension adequacy, including automatic enrolment.</p>',
        { caption: 'Automatic enrolment thresholds, 2026-27', head: ['Threshold', 'Yearly figure', 'What it does'], rows: [
          ['Earnings trigger', '£10,000', 'Earn this or more (and meet the age test) and you must be enrolled'],
          ['Lower level of qualifying earnings', '£6,240', 'Contributions are worked out on pay above this'],
          ['Upper level of qualifying earnings', '£50,270', 'Pay above this is ignored for minimum contributions'],
        ], after: 'Source: DWP, Review of the automatic enrolment earnings trigger and qualifying earnings band for 2026-27, published 18 December 2025.' },
        '<p>Do not confuse the £6,240 pension figure with the National Insurance lower earnings limit, which is £6,708 for 2026-27. They are separate thresholds.</p>',
      ],
    },
    {
      id: 'contributions', h2: 'How much must employers contribute?', toc: 'Contributions',
      body: [
        '<p>At least 3% of the worker\'s qualifying earnings, as part of an 8% minimum in total. The worker pays the other 5%, which includes tax relief. You can pay more than 3%, and the worker can then pay less, as long as the total reaches 8%.</p>',
        { caption: 'Illustrative: minimum contributions on a £30,000 salary, 2026-27', head: ['Contribution', 'Rate', 'Year', 'Month'], rows: [
          ['Qualifying earnings (£30,000 less £6,240)', 'n/a', '£23,760', '£1,980'],
          ['Employer', '3%', '£712.80', '£59.40'],
          ['Employee, including tax relief', '5%', '£1,188.00', '£99.00'],
          ['Total', '8%', '£1,900.80', '£158.40'],
        ], after: 'Illustrative only, on the qualifying earnings basis. Some schemes work out contributions on all pay or basic pay instead, under their own rules.' },
        '<p>Employer pension contributions are an allowable business cost. A salary sacrifice arrangement can save both of you National Insurance, but it changes the employee\'s contract and must not take their pay below the minimum wage. For owner-directors, our guide to <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how to pay yourself from a limited company</a> explains pension contributions as a way to take money out. The <a href="/resources/take-home-pay-calculator/">take-home pay calculator</a> shows the effect on an employee\'s pay.</p>',
      ],
    },
    {
      id: 'postpone-opt-out', h2: 'Can you postpone enrolment, and what if staff opt out?', toc: 'Postponing and opting out',
      body: [
        '<p>You can postpone enrolment for up to 3 months, for example to cover a probation period, but you must write to the worker to tell them, and they can still ask to join during that time.</p>',
        '<p>Once enrolled, a worker can opt out within 1 month of joining (the opt-out window). You must then refund their contributions within 1 month. If they leave the scheme after the window, their contributions stay in their pension until they retire. Staff can leave whenever they want, and you must stop deductions within a month of their request.</p>',
        '<p>You must not encourage or force anyone to opt out, or offer them anything to leave. Choosing staff based on whether they will join a pension is also against the rules.</p>',
      ],
    },
    {
      id: 'declaration', h2: 'When is the declaration of compliance due?', toc: 'Declaration and re-enrolment',
      body: [
        '<p>Within 5 months, beginning with your duties start date. You complete it online with The Pensions Regulator, giving details of your PAYE reference, your pension scheme and how many staff you enrolled. You must do it even if nobody needed enrolling.</p>',
        '<h3>Re-enrolment every 3 years</h3>',
        '<p>Your re-enrolment date is 3 years after your duties start date, and every 3 years after that. On it, you re-enrol eligible staff who left the scheme more than 12 months earlier, or who are paying less than the minimum, and write to them within 6 weeks. You then complete a re-declaration of compliance within 5 months of the re-enrolment anniversary, again even if nobody was re-enrolled.</p>',
        '<h3>Records to keep</h3>',
        '<ul><li>Names and addresses of the staff you enrolled, and when contributions were paid</li><li>Every request to join the scheme</li><li>Your pension scheme reference or registry number</li><li>Opt-out notices, kept for 4 years. Most other records must be kept for 6 years.</li></ul>',
      ],
    },
    {
      id: 'penalties', h2: 'What are the penalties for not complying?', toc: 'Penalties',
      body: [
        '<p>The Pensions Regulator usually issues a compliance notice first. If you still do not comply, it can issue a fixed penalty of £400, followed by an escalating penalty charged for each day the breach continues.</p>',
        { caption: 'Escalating penalty daily rates', head: ['Number of staff', 'Daily rate'], rows: [
          ['1 to 4', '£50'],
          ['5 to 49', '£500'],
          ['50 to 249', '£2,500'],
          ['250 to 499', '£5,000'],
          ['500 or more', '£10,000'],
        ], after: 'Source: The Employers\' Duties (Registration and Compliance) Regulations 2010, regulations 12 and 13.' },
        '<p>You can also be fined for paying contributions late or paying less than the minimum, and you will have to make up the missed contributions. The simplest protection is to run pensions as part of payroll and file the declaration on time. Our guide to <a href="/resources/employer-payroll-deadlines/">employer payroll deadlines</a> shows how pension payments fit with your PAYE dates.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the auto-enrolment threshold for 2026-27?', a: 'The earnings trigger is £10,000 a year, unchanged from 2025-26. Workers aged 22 to State Pension age who earn at least that much must be enrolled. Contributions are based on earnings between £6,240 and £50,270.' },
    { q: 'Do I have to auto-enrol part-time staff?', a: 'Yes, if they are aged 22 to State Pension age and earn at least £10,000 a year, tested each pay period. Part-time staff earning less can still opt in, and you must contribute if they earn more than £6,240 a year.' },
    { q: 'How long do I have to complete the declaration of compliance?', a: 'Five months, starting on your duties start date, which is the day your first employee began work. You must declare even if no one needed enrolling, and re-declare after each re-enrolment every 3 years.' },
    { q: 'Can I pay my employee\'s pension contributions for them?', a: 'Yes. You can pay more than the 3% minimum, and the employee can then pay less, as long as the total is at least 8% of qualifying earnings. Extra employer contributions are usually an allowable business cost.' },
    { q: 'What happens if an employee opts out of the pension?', a: 'If they opt out within 1 month of joining, refund their contributions within 1 month. You must re-enrol them at your next re-enrolment date if they are still eligible, unless they left the scheme in the 12 months before it.' },
  ],

  sources: [
    ['https://www.gov.uk/workplace-pensions-employers', 'GOV.UK: Workplace pensions for employers'],
    ['https://www.gov.uk/workplace-pensions-employers/manage-your-ongoing-responsibilities', 'GOV.UK: Ongoing pension responsibilities for employers'],
    ['https://www.gov.uk/workplace-pensions/what-you-your-employer-and-the-government-pay', 'GOV.UK: Workplace pension contributions'],
    ['https://www.gov.uk/government/publications/review-of-the-automatic-enrolment-earnings-trigger-and-qualifying-earnings-band-for-202627/review-of-the-automatic-enrolment-earnings-trigger-and-qualifying-earnings-band-for-202627', 'DWP: Auto-enrolment thresholds for 2026-27'],
    ['https://www.legislation.gov.uk/ukpga/2008/30/section/4', 'legislation.gov.uk: Pensions Act 2008, postponement'],
    ['https://www.legislation.gov.uk/uksi/2010/5/regulation/3', 'legislation.gov.uk: Declaration (registration) deadline'],
    ['https://www.legislation.gov.uk/uksi/2010/5/regulation/13', 'legislation.gov.uk: Escalating penalty rates'],
  ],

  related: [
    '/resources/hiring-your-first-employee/',
    '/resources/employer-payroll-deadlines/',
    '/resources/how-to-pay-yourself-from-a-limited-company/',
  ],
};
