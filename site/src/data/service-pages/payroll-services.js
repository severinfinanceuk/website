// Payroll services: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Rates are for the 2026/27 tax year: update every April.
// Facts checked against GOV.UK (HMRC employer guidance) and The Pensions Regulator figures published on GOV.UK
// on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/payroll/payroll-services-manager-colourful-office.jpg';
import firstEmployee from '../../assets/services/payroll/first-employee-payroll-setup-handshake.jpg';
import director from '../../assets/services/payroll/director-salary-payroll-company-director.jpg';
import kitchen from '../../assets/services/payroll/restaurant-payroll-kitchen-staff.jpg';
import salon from '../../assets/services/payroll/salon-payroll-barber-staff.jpg';
import team from '../../assets/services/payroll/auto-enrolment-pension-office-team.jpg';
import benefits from '../../assets/services/payroll/p11d-benefits-company-car-keys.jpg';
import meeting from '../../assets/services/payroll/payroll-specialist-employer-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/accounting/payroll-services/',
  primaryKeyword: 'payroll services',
  secondaryKeywords: [
    'payroll services London', 'payroll services for small business', 'outsourced payroll services',
    'payroll bureau', 'PAYE payroll services', 'auto enrolment pension', 'payroll setup services',
    'payroll services pricing',
  ],
  title: 'Payroll Services London & UK-wide | Severin Finance',
  description: 'UK payroll services in London and across the UK: RTI, payslips, auto-enrolment pensions, P60s and P11Ds handled for a fixed fee per employee. Free quote.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Accounting', '/uk/accounting/'],
    ['Payroll services', '/uk/accounting/payroll-services/'],
  ],
  service: {
    name: 'Payroll service',
    serviceType: 'Outsourced payroll, RTI and auto-enrolment',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Payroll',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK accounting · Payroll',
    h1: 'Payroll services in London and across the UK',
    answer: 'Our payroll services run your UK payroll every week or month for a fixed fee per employee, for employers in London and across the UK, and for overseas companies with UK staff. We calculate pay, tax, National Insurance and pension, send Real Time Information to HMRC on time, and handle payslips, P60s and P11Ds.',
    image: hero,
    imageAlt: 'Payroll manager in a pink top smiling at her desk in a colourful office',
    price: { from: '£XXX', note: 'per employee a month', tbc: true },
    deadline: { label: 'Next PAYE payment', date: '22 October 2026', note: 'Paid electronically, for the month to 5 October' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'RTI sent on or before payday' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Auto-enrolment pensions handled' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Rates & deadlines'],
    ['how', 'How it works'],
    ['compare', 'Outsourced vs in-house'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Payroll for every size of team',
    intro: 'If you pay anyone, including yourself as a director, you need to run payroll. We run it for you.',
    cards: [
      { title: 'Your first employee', img: firstEmployee, alt: 'Employer shaking hands with a new employee across a desk', tag: 'Setting up PAYE', text: 'We register you as an employer, set up payroll and check minimum wage and pension duties from day one.' },
      { title: 'Company directors', img: director, alt: 'Grey-haired company director on the phone at his laptop', tag: 'Director-only payroll', text: 'A director’s salary still runs through payroll. We set it alongside your dividends so the two work together.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Restaurants & hospitality', img: kitchen, alt: 'Chefs preparing dishes together in a busy restaurant kitchen', tag: 'Shift and hourly staff', text: 'Changing hours, holiday pay and minimum wage checks in every pay period, weekly or monthly.' },
      { title: 'Salons & shops', img: salon, alt: 'Barber blow-drying a customer’s hair in a salon', tag: 'Small and part-time teams', text: 'Payslips sent to your staff, pension deductions made and your PAYE bill sent to you each month.' },
      { title: 'Growing teams', img: team, alt: 'Four colleagues working at computers in a sunlit office', tag: 'Auto-enrolment pensions', text: 'We assess every worker, enrol those who qualify and work out the contributions for your pension provider.' },
      { title: 'Benefits & company cars', img: benefits, alt: 'Car key being handed from one person to another', tag: 'P11D and payrolled benefits', text: 'Company cars and health cover reported on P11Ds by 6 July, or payrolled ahead of the April 2027 change.' },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Fixed fees',
    h2: 'Payroll services pricing',
    intro: 'A fixed fee per employee, agreed before we start. Weekly, fortnightly or monthly pay runs.',
    plans: [
      { name: 'Director only', for: 'Company directors with no other staff', price: '£XXX a month', tbc: true, items: ['Director’s salary reported to HMRC through RTI', 'Payslips and year-end P60', 'Salary set alongside your dividends'] },
      { name: 'Small team', for: 'Small businesses with a few employees', price: '£XXX per employee', tbc: true, featured: true, badge: 'Most chosen', items: ['Weekly, fortnightly or monthly payroll', 'RTI sent to HMRC on or before payday', 'Auto-enrolment assessments and pension figures', 'Starters, leavers, sick pay and parental pay', 'Your PAYE bill each month'] },
      { name: 'Growing team', for: 'Larger teams, benefits and several pay groups', price: '£XXX per employee', tbc: true, items: ['Everything in Small team', 'P11Ds and Class 1A National Insurance', 'Payrolling of benefits in kind', 'Payroll reports for your accounts'] },
    ],
    included: ['PAYE scheme set-up or transfer', 'Payslips sent to employees', 'Employment Allowance claimed if eligible', 'Year-end P60s', 'HMRC payroll letters answered'],
    note: { text: 'Prices include or exclude VAT: to confirm. Pension provider set-up included or extra: to confirm.', tbc: true },
  },

  // ---------- 4. Rates, deadlines and penalties (tables) ----------
  deadlines: {
    eyebrow: 'Rates & deadlines',
    h2: 'Payroll rates, deadlines and penalties',
    intro: 'Figures for the 2026/27 tax year (6 April 2026 to 5 April 2027). Checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'Employer rates and thresholds for 2026/27',
        head: ['Rate or threshold', '2026/27'],
        rows: [
          ['Employer National Insurance', '15% above the secondary threshold'],
          ['Secondary threshold', '£96 a week, £417 a month, £5,000 a year'],
          ['Employment Allowance', 'Up to £10,500 off employer National Insurance'],
          ['National Living Wage (21 and over)', '£12.71 an hour from 1 April 2026'],
          ['National Minimum Wage, 18 to 20', '£10.85 an hour'],
          ['Under 18 and apprentices', '£8 an hour'],
          ['Auto-enrolment earnings trigger', '£10,000 a year'],
          ['Minimum pension contributions', '8% of qualifying earnings, at least 3% from the employer'],
        ],
        after: 'Qualifying earnings for auto-enrolment are earnings between £6,240 and £50,270 a year.',
      },
      {
        caption: 'Payroll deadlines and penalties',
        head: ['What', 'Deadline or penalty'],
        rows: [
          ['Full Payment Submission (FPS) to HMRC', 'On or before each payday'],
          ['Pay PAYE and National Insurance', '22nd of the next tax month (19th by post)'],
          ['P60s to employees', '31 May'],
          ['P11Ds, P11D(b) and employees’ copies', '6 July'],
          ['Pay Class 1A National Insurance', '22 July (19 July by cheque)'],
          ['Late FPS, 1 to 9 employees', '£100 a month'],
          ['Late FPS, 10 to 49 employees', '£200 a month'],
          ['Late FPS, 50 to 249 employees', '£300 a month'],
          ['Late FPS, 250 or more employees', '£400 a month'],
        ],
        after: 'HMRC does not usually charge for the first late FPS in a tax year, or for one that is no more than 3 days late. A late P11D(b) costs £100 a month for every 50 employees.',
      },
    ],
    urgent: {
      title: 'Payroll behind or an HMRC penalty?',
      text: 'Send late submissions as soon as you can: penalties are charged every month. We bring your RTI up to date, correct past submissions and help you appeal when you had a reasonable excuse.',
      cta: 'Get payroll help now',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our payroll services work',
    image: meeting,
    imageAlt: 'Payroll specialist going through paperwork with an employer who is signing a form',
    steps: [
      { title: 'Free consultation', text: 'Tell us how many people you pay and how often. We confirm a fixed fee in writing.' },
      { title: 'Set-up or switch', text: 'We set up your PAYE scheme, staff records and pension link, or move you from your current provider.' },
      { title: 'You approve, we submit', text: 'Each pay period you approve the figures. We send RTI to HMRC and payslips to your staff.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'PAYE and Accounts Office references', 'Employee names, addresses and NI numbers', 'Starter checklists or P45s',
      'Pay rates, hours and salaries', 'Employee bank details', 'Pension scheme details',
      'Benefits and expenses you provide', 'Payroll records for this tax year',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Outsourced vs in-house',
    h2: 'Outsourced, software or in-house?',
    cols: ['Severin Finance', 'Payroll software yourself', 'In-house payroll'],
    rows: [
      ['Who runs payroll', 'Our payroll team', 'You', 'An employee'],
      ['RTI sent on or before payday', true, 'If you remember', true],
      ['Auto-enrolment assessed', true, 'Partly', true],
      ['Checked by accountants', true, false, 'Sometimes'],
      ['P11Ds and benefits handled', true, false, 'Sometimes'],
      ['Cover for holidays and sickness', true, false, false],
      ['Price', 'Fee per employee', 'Subscription plus your time', 'Salary plus employer costs'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC employer guidance and the 2026/27 rates. Payroll rates change every April: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Payroll questions',
  faqs: [
    { q: 'How much do payroll services cost?', a: 'Our fixed fees start at £XXX per employee a month. Director-only payroll has its own lower fee, and P11Ds or payrolled benefits cost extra. You get the exact fee in writing after a free consultation.', tbc: true },
    { q: 'What is the employer National Insurance rate for 2026/27?', a: '15% on earnings above the secondary threshold of £5,000 a year (£96 a week or £417 a month). Most small employers can claim the Employment Allowance, which takes up to £10,500 a year off the bill.' },
    { q: 'What is the National Minimum Wage from April 2026?', a: '£12.71 an hour for workers aged 21 and over, called the National Living Wage. The rate is £10.85 for 18 to 20 year olds and £8 for under-18s and apprentices. These rates apply from 1 April 2026.' },
    { q: 'Can a director-only company claim the Employment Allowance?', a: 'Not if the director is the only employee paid above the £5,000 secondary threshold. A company with two or more directors on the payroll above that threshold, or a director plus another employee, can usually claim.' },
    { q: 'When must I report payroll to HMRC?', a: 'On or before each payday. You send a Full Payment Submission (FPS) every time you pay employees, then pay HMRC what you owe by the 22nd of the next tax month, or the 19th if you pay by post.' },
    { q: 'What is the penalty for a late FPS?', a: '£100 to £400 a month, depending on how many employees you have. HMRC does not usually charge for the first late FPS in a tax year, or one that is no more than 3 days late. Penalties apply to each PAYE scheme.' },
    { q: 'Do I have to enrol staff into a workplace pension?', a: 'Yes, for workers aged 22 to State Pension age who earn at least £10,000 a year and usually work in the UK. The minimum total contribution is 8% of qualifying earnings, and you as the employer must pay at least 3%.' },
    { q: 'When are P60s and P11Ds due?', a: 'P60s must reach employees by 31 May. P11Ds, the P11D(b) and employees’ copies are due by 6 July, and Class 1A National Insurance on benefits must be paid by 22 July (19 July by cheque).' },
    { q: 'Is payrolling benefits becoming mandatory?', a: 'Yes, from 6 April 2027 for company cars, vans, car and van fuel, and medical benefits. Most other benefits follow from April 2028. You will report them through payroll instead of on P11Ds, and we can set this up for you.' },
    { q: 'Can you run payroll for just one employee?', a: 'Yes. We run payroll for director-only companies and employers with one or two staff, as well as larger teams.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Payroll in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/london/stratford/', 'Stratford'],
      ['/uk/birmingham/', 'Birmingham'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/employer-payroll-deadlines/', 'Employer payroll deadlines'],
      ['/resources/hiring-your-first-employee/', 'Hiring your first employee'],
      ['/resources/auto-enrolment-for-employers/', 'Auto-enrolment for employers'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'payroll',
    pills: ['Free first consultation', 'Fixed fee per employee', 'You approve every pay run'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/national-minimum-wage-rates', 'GOV.UK: National Minimum Wage and National Living Wage rates'],
    ['https://www.gov.uk/running-payroll/reporting-to-hmrc', 'GOV.UK: Reporting payroll to HMRC'],
    ['https://www.gov.uk/guidance/what-happens-if-you-dont-report-payroll-information-on-time', 'HMRC: Late payroll reporting penalties'],
    ['https://www.gov.uk/employer-reporting-expenses-benefits/deadlines', 'GOV.UK: Expenses and benefits deadlines'],
    ['https://www.gov.uk/government/publications/review-of-the-automatic-enrolment-earnings-trigger-and-qualifying-earnings-band-for-202627/review-of-the-automatic-enrolment-earnings-trigger-and-qualifying-earnings-band-for-202627', 'DWP: Auto-enrolment thresholds 2026/27'],
  ],
};
