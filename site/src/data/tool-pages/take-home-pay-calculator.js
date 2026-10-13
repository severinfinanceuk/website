// Take-home pay calculator 2026-27: /resources/take-home-pay-calculator/. Page: src/pages/resources/take-home-pay-calculator.astro.
// Rates checked on GOV.UK on 13 October 2026 (Rates and thresholds for employers 2026 to 2027;
// Income Tax rates and allowances). Change RATES in the page file and the tables here each April.
export default {
  url: '/resources/take-home-pay-calculator/',
  title: 'Take-Home Pay Calculator 2026-27 (UK) | Severin Finance',
  description: 'Work out your 2026-27 take-home pay after income tax, National Insurance, pension and student loan, for the UK and Scotland. Free consultation.',
  eyebrow: 'Calculator',
  h1: 'Take-home pay calculator 2026-27',
  crumb: 'Take-home pay calculator',
  summary: 'Salary after income tax, National Insurance, pension and student loan for 2026-27.',
  app: true,
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  hero: {
    answer: 'Enter your yearly salary to see your 2026-27 take-home pay after income tax, employee National Insurance, pension contributions and student loan repayments. On a £35,000 salary in England with no pension or student loan, you take home about £28,720 a year, or £2,393 a month. Scottish rates are included.',
  },
  service: {
    href: '/uk/accounting/payroll-services/', label: 'Our payroll service',
    boxTitle: 'Running payroll?', text: 'We run payroll for employers of every size, with payslips, RTI filings and pensions handled for you.',
  },
  sections: [
    {
      id: 'how', h2: 'How is take-home pay worked out?',
      body: [
        '<p>The calculator takes your salary for the year and deducts four things, using the 2026-27 rates that apply from 6 April 2026 to 5 April 2027:</p>',
        '<ul><li><strong>Pension:</strong> salary sacrifice comes off before tax and National Insurance; a net pay arrangement comes off before tax only.</li><li><strong>Income tax:</strong> on pay above your personal allowance of £12,570, which falls by £1 for every £2 of income over £100,000.</li><li><strong>National Insurance:</strong> employee Class 1 at 8% on earnings between £12,570 and £50,270, and 2% above.</li><li><strong>Student loan:</strong> 9% of pay above your plan\'s threshold, plus 6% above £21,000 for a postgraduate loan.</li></ul>',
        '<p>It assumes the standard 1257L tax code, category A National Insurance and pay spread evenly across the year. Bonuses, benefits in kind, other income and a different tax code all change the result. Self-employed? Use our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a>; company directors should read <a href="/resources/salary-vs-dividends/">salary vs dividends</a>.</p>',
      ],
    },
    {
      id: 'rates', h2: 'What are the 2026-27 income tax rates?',
      body: [
        { caption: 'Income tax 2026-27: England, Wales and Northern Ireland', head: ['Band (taxable income)', 'Rate'], rows: [
          ['Personal allowance: first £12,570 of income', '0%'],
          ['Basic rate: up to £37,700', '20%'],
          ['Higher rate: £37,701 to £125,140', '40%'],
          ['Additional rate: over £125,140', '45%'],
        ], after: 'Source: GOV.UK, Income Tax rates and allowances. Bands apply to income after the personal allowance.' },
        { caption: 'Income tax 2026-27: Scotland', head: ['Band (taxable income)', 'Rate'], rows: [
          ['Starter rate: up to £3,967', '19%'],
          ['Basic rate: £3,968 to £16,956', '20%'],
          ['Intermediate rate: £16,957 to £31,092', '21%'],
          ['Higher rate: £31,093 to £62,430', '42%'],
          ['Advanced rate: £62,431 to £125,140', '45%'],
          ['Top rate: over £125,140', '48%'],
        ], after: 'Scottish rates apply to pay for people who live in Scotland. National Insurance and student loan rules are the same across the UK.' },
      ],
    },
    {
      id: 'ni', h2: 'What are the 2026-27 National Insurance and student loan thresholds?',
      body: [
        { caption: 'Employee deductions 2026-27', head: ['Deduction', 'Yearly threshold', 'Rate'], rows: [
          ['National Insurance (category A)', '£12,570 to £50,270', '8%, then 2% above £50,270'],
          ['Student loan Plan 1', '£26,900', '9%'],
          ['Student loan Plan 2', '£29,385', '9%'],
          ['Student loan Plan 4 (Scotland)', '£33,795', '9%'],
          ['Student loan Plan 5', '£25,000', '9%'],
          ['Postgraduate loan', '£21,000', '6%'],
        ], after: 'Source: GOV.UK, Rates and thresholds for employers 2026 to 2027.' },
        '<p>Employers also pay National Insurance at 15% on pay above £5,000 a year, which does not come out of your salary. Many employers can reduce their bill with the £10,500 Employment Allowance. See our guide to <a href="/resources/hiring-your-first-employee/">hiring your first employee</a>.</p>',
      ],
    },
  ],
  faqs: [
    { q: 'How much is £30,000 after tax in 2026-27?', a: 'In England, Wales or Northern Ireland, with no pension or student loan, about £25,120 a year: £3,486 income tax and £1,394 National Insurance come off. In Scotland it is about £25,155, because the starter rate makes Scottish tax slightly lower at this salary.' },
    { q: 'What is the personal allowance for 2026-27?', a: '£12,570, the same as the year before. It is reduced by £1 for every £2 of adjusted net income over £100,000, so it is lost completely at £125,140.' },
    { q: 'Does a pension contribution reduce my tax?', a: 'Yes. Salary sacrifice reduces both income tax and National Insurance. A net pay arrangement reduces income tax. With relief at source, your provider claims basic rate tax relief and higher rate payers claim the rest through Self Assessment.' },
    { q: 'Why is my payslip different from the calculator?', a: 'Your tax code may not be 1257L, you may have benefits in kind, bonuses or overtime, or your employer may pay weekly. An emergency tax code is a common cause of overpaying in a new job.' },
  ],
  sources: [
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past', 'GOV.UK: Income Tax rates and allowances'],
    ['https://www.gov.uk/income-tax-rates/income-over-100000', 'GOV.UK: Income over £100,000'],
  ],
};
