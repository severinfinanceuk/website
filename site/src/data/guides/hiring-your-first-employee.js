// Guide: /resources/hiring-your-first-employee/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Scope: the steps and costs of a first hire.
// Pension detail lives in auto-enrolment-for-employers.js, payroll dates in employer-payroll-deadlines.js.
// Illustrative cost: £25,000 salary, 2026-27, category A National Insurance. Re-check each April.
export default {
  url: '/resources/hiring-your-first-employee/',
  section: 'accounting',
  title: 'Hiring Your First Employee UK | Severin Finance',
  description: 'Hiring your first employee in 2026-27: right to work checks, HMRC registration, the £12.71 minimum wage, contracts, pensions, insurance. Free consultation.',
  h1: 'Hiring your first employee: a step-by-step guide',
  crumb: 'Hiring your first employee',
  summary: 'Right to work, PAYE registration, the 2026-27 minimum wage, contracts, pensions and insurance.',
  topic: 'Employing staff for the first time in the UK',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/payroll-services/', label: 'Our payroll service',
    boxTitle: 'Taking on your first hire?', text: 'We register you as an employer, set up payroll and the workplace pension, and run every pay run so HMRC hears on time.',
  },

  hero: {
    answer: 'Before your first employee starts, check their right to work in the UK, register as an employer with HMRC, and get Employers\' Liability insurance of at least £5 million. Pay at least the minimum wage, which is £12.71 an hour from age 21 from April 2026, give a written statement on day one and set up a workplace pension.',
  },

  tldr: [
    'Check the right to work <strong>before</strong> the job starts. Fines go up to <strong>£60,000</strong> per illegal worker.',
    'Register as an employer before your first payday, but no more than <strong>2 months</strong> before it.',
    'Minimum wage from 1 April 2026: <strong>£12.71</strong> (21 and over), <strong>£10.85</strong> (18 to 20), <strong>£8</strong> (under 18 and apprentices).',
    'Employer National Insurance is <strong>15%</strong> above <strong>£5,000</strong> a year. Most small employers can claim the <strong>£10,500</strong> Employment Allowance.',
    'Give a written statement of terms on <strong>day one</strong>. Your pension duties also start then.',
  ],

  sections: [
    {
      id: 'steps', h2: 'What do you need to do to hire your first employee?', toc: 'The steps',
      body: [
        '<p>There are seven things to sort out, and most of them must be done before the person starts or before you first pay them. Our <a href="/uk/accounting/payroll-services/">payroll services</a> handle the HMRC and pension steps for you, so you can focus on finding the right person.</p>',
        { caption: 'Hiring your first employee: what to do and when', head: ['Step', 'When'], rows: [
          ['1. Check they are an employee, not a contractor', 'Before you offer the job'],
          ['2. Check their right to work in the UK', 'Before they start'],
          ['3. Get Employers\' Liability insurance', 'From the day they start'],
          ['4. Give a written statement of employment terms', 'On their first day'],
          ['5. Register as an employer with HMRC', 'Before the first payday, no more than 2 months before'],
          ['6. Run payroll and report to HMRC', 'On or before every payday'],
          ['7. Assess them for a workplace pension', 'From their first day (your duties start date)'],
        ], after: 'Source: GOV.UK, Employing staff for the first time. Checked 13 October 2026.' },
        '<p>Step 1 matters more than it looks. If you hire someone through their own company, their status is decided under the off-payroll rules instead: see our guide to <a href="/resources/ir35-explained/">IR35</a>.</p>',
      ],
    },
    {
      id: 'right-to-work', h2: 'How do you check an employee\'s right to work?', toc: 'Right to work',
      body: [
        '<p>You must check every new employee before they start, whatever their nationality, using one of three methods:</p>',
        '<ul><li><strong>Online share code:</strong> the applicant gives you a code and you check it on GOV.UK. British citizens cannot get one.</li><li><strong>Original documents:</strong> such as a British passport, checked with the person present.</li><li><strong>An identity service provider:</strong> a provider that uses identity document validation technology (IDVT) to check documents digitally.</li></ul>',
        '<p>Keep a copy that cannot be altered, record the date of the check, and keep it for the whole employment and 2 years after it ends. A correct check gives you a defence if the person later turns out not to have the right to work. Without one, the civil penalty is up to £60,000 per illegal worker. Knowingly employing someone who has no right to work is a crime, with up to 5 years in prison and an unlimited fine.</p>',
      ],
    },
    {
      id: 'register', h2: 'How do you register as an employer with HMRC?', toc: 'Register with HMRC',
      body: [
        '<p>Register online on GOV.UK before your first payday. You cannot register more than 2 months before you start paying people, and your employer PAYE reference arrives by post, so leave a few weeks. A limited company must register even if the only person paid is its director.</p>',
        '<p>Once registered, you run payroll each time you pay staff: work out Income Tax, National Insurance and any student loan deductions, send a Full Payment Submission (FPS) to HMRC on or before payday, and pay HMRC by the 22nd of the next tax month (the 19th by post). Ask your new employee for their P45 or a starter checklist so you can give them the right tax code. Our guide to <a href="/resources/employer-payroll-deadlines/">employer payroll deadlines</a> lists every date, and the <a href="/resources/take-home-pay-calculator/">take-home pay calculator</a> shows what the employee will receive.</p>',
      ],
    },
    {
      id: 'minimum-wage', h2: 'What is the minimum wage from April 2026?', toc: 'Minimum wage',
      body: [
        '<p>From 1 April 2026, workers aged 21 and over must be paid at least £12.71 an hour, the National Living Wage.</p>',
        { caption: 'National Minimum Wage and National Living Wage hourly rates', head: ['Age or status', 'April 2025 to March 2026', 'From 1 April 2026'], rows: [
          ['21 and over (National Living Wage)', '£12.21', '£12.71'],
          ['18 to 20', '£10.00', '£10.85'],
          ['Under 18', '£7.55', '£8.00'],
          ['Apprentice', '£7.55', '£8.00'],
        ], after: 'Source: GOV.UK, National Minimum Wage and National Living Wage rates. The apprentice rate applies to apprentices under 19, or 19 and over in the first year of their apprenticeship. After that they get the rate for their age.' },
        '<p>The rates change every April, and the test is the average pay for the hours worked in each pay period. Unpaid extra hours and some deductions from pay can take a worker below the minimum, even on a salary that looks high enough, so check the hourly rate whenever hours or pay change.</p>',
      ],
    },
    {
      id: 'cost', h2: 'How much does an employee really cost?', toc: 'The real cost',
      body: [
        '<p>On top of their salary, you pay employer National Insurance of 15% on pay above £5,000 a year and at least 3% pension contributions on qualifying earnings. You also need insurance, and possibly software or a payroll provider.</p>',
        { caption: 'Illustrative: cost of a £25,000 employee in 2026-27', head: ['Cost', 'No Employment Allowance', 'With Employment Allowance'], rows: [
          ['Salary', '£25,000', '£25,000'],
          ['Employer National Insurance (15% of £20,000)', '£3,000', '£0'],
          ['Minimum employer pension (3% of £18,760)', '£563', '£563'],
          ['Total yearly cost', '£28,563', '£25,563'],
        ], after: 'Illustrative only. Category A National Insurance, pension on qualifying earnings between £6,240 and £50,270, rounded to the nearest pound. Excludes insurance and other costs.' },
        '<p>The Employment Allowance takes up to £10,500 off your employer National Insurance bill in 2026-27. A company whose only paid employee is a sole director cannot claim it, so your first hire can make you eligible for the first time. You claim it through your payroll software. Our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a> explains how that changes the best salary for directors.</p>',
      ],
    },
    {
      id: 'contract', h2: 'What must you put in writing for a new employee?', toc: 'Contract and rights',
      body: [
        '<p>You must give a written statement of the main terms on or before the first day. It includes their pay and how often it is paid, hours and days of work, holiday, place of work, start date, job title, how long the job will last, any probation period, benefits and required training, plus sick pay, other paid leave and notice periods. Pension arrangements and disciplinary and grievance procedures can follow within 2 months.</p>',
        { caption: 'Statutory minimums to plan for, 2026-27', head: ['Right', 'Minimum'], rows: [
          ['Paid holiday', '5.6 weeks a year (28 days for a 5-day week), and you may include bank holidays'],
          ['Statutory Sick Pay', '£123.25 a week or 80% of average weekly earnings if lower, for up to 28 weeks'],
          ['Statutory Maternity Pay', '90% of average weekly earnings for 6 weeks, then £194.32 or 90% if lower'],
          ['Statutory Paternity Pay', '£194.32 a week or 90% of average weekly earnings if lower'],
        ], after: 'Source: GOV.UK, Rates and thresholds for employers 2026 to 2027, and Holiday entitlement. Statutory Sick Pay cannot be recovered from HMRC.' },
      ],
    },
    {
      id: 'pension-insurance', h2: 'Do you need a workplace pension and insurance?', toc: 'Pension and insurance',
      body: [
        '<p>Yes to both, in most cases. Your pension duties start on the day your first employee starts. Anyone aged 22 to State Pension age who earns at least £10,000 a year and usually works in the UK must be put into a qualifying scheme, and you must then declare to The Pensions Regulator that you have done so. Our guide to <a href="/resources/auto-enrolment-for-employers/">auto-enrolment for employers</a> covers the steps and contributions.</p>',
        '<p>Employers\' Liability insurance must cover you for at least £5 million, from an authorised insurer, from the first day someone works for you. You can be fined £2,500 for every day you are not properly insured, and £1,000 if you do not display the certificate where employees can see it. You do not need it if your only employees are close family members, such as your spouse, civil partner, parent or child.</p>',
        '<p>Also check your health and safety, fire safety and data protection duties before anyone starts, and make reasonable adjustments for a disabled employee where needed.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How long does it take to register as an employer?', a: 'The online registration is quick, but your employer PAYE reference is sent by post, so allow a few weeks. You must register before your first payday and cannot register more than 2 months before you start paying anyone.' },
    { q: 'Do I need a contract for a part-time employee?', a: 'Yes. Part-time employees and workers are entitled to a written statement of their main terms on their first day, the same as full-time staff. Their holiday is worked out pro rata, at 5.6 times their usual working week.' },
    { q: 'Can I pay a new employee less than minimum wage during training?', a: 'No, unless they are on a genuine apprenticeship. Apprentices under 19, or in the first year of their apprenticeship, can be paid £8 an hour from April 2026. Other trainees must get the rate for their age.' },
    { q: 'Do I need Employers\' Liability insurance for one employee?', a: 'Usually, yes. Most employers need at least £5 million of cover from the first employee. The main exception is a business whose only employees are close family members, such as a spouse, parent or child.' },
    { q: 'Can my company claim the Employment Allowance once I hire someone?', a: 'Usually, yes. The bar on claiming only applies when a sole director is the only employee paid above the £5,000 secondary threshold. Once another employee is paid above it, most companies can claim up to £10,500 for 2026-27.' },
  ],

  sources: [
    ['https://www.gov.uk/employing-staff', 'GOV.UK: Employing staff for the first time'],
    ['https://www.gov.uk/check-job-applicant-right-to-work', 'GOV.UK: Check a job applicant\'s right to work'],
    ['https://www.gov.uk/penalties-for-employing-illegal-workers', 'GOV.UK: Penalties for employing illegal workers'],
    ['https://www.gov.uk/register-employer', 'GOV.UK: Register as an employer'],
    ['https://www.gov.uk/national-minimum-wage-rates', 'GOV.UK: National Minimum Wage and National Living Wage rates'],
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/employment-contracts-and-conditions/written-statement-of-employment-particulars', 'GOV.UK: Written statement of employment particulars'],
    ['https://www.gov.uk/employers-liability-insurance', 'GOV.UK: Employers\' Liability insurance'],
  ],

  related: [
    '/resources/auto-enrolment-for-employers/',
    '/resources/employer-payroll-deadlines/',
    '/resources/salary-vs-dividends/',
    '/resources/ir35-explained/',
  ],
};
