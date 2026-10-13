// Guide: /resources/how-to-pay-yourself-from-a-limited-company/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and legislation.gov.uk on 13 October 2026 (sources below).
// Scope: every route for taking money out. The 2026-27 salary and dividend numbers live in salary-vs-dividends.js.
// Note: GOV.UK "Director's loans" still shows 33.75%; HMRC manual CTM61505 gives 35.75% for loans from 6 April 2026.
export default {
  url: '/resources/how-to-pay-yourself-from-a-limited-company/',
  section: 'accounting',
  title: 'How to Pay Yourself From a Limited Company | Severin Finance',
  description: 'Salary, dividends, pension, expenses and director\'s loans: every way to take money from your company in 2026-27, and the legal limits. Free consultation.',
  h1: 'How to pay yourself from a limited company',
  crumb: 'Paying yourself',
  summary: 'Salary, dividends, pension, expenses and loans: how each works, what it costs and the rules.',
  topic: 'Taking money out of a limited company',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/limited-company-accountant/', label: 'Our limited company service',
    boxTitle: 'Want a plan for the year?', text: 'We set your salary, dividends and pension each year, run the paperwork and keep your loan account in order.',
  },

  hero: {
    answer: 'Most directors pay themselves a salary of around £12,570 through payroll, then take dividends from profit left after Corporation Tax. Employer pension contributions and expenses are efficient too. Dividends can only come from available profits, and a director\'s loan not repaid within 9 months of the year end triggers a temporary 35.75% company tax charge from April 2026.',
  },

  tldr: [
    'There are six routes: <strong>salary, dividends, pension contributions, expenses, benefits and director\'s loans</strong>.',
    'Salary and employer pension contributions reduce Corporation Tax. Dividends do not.',
    'A company can only pay dividends out of its <strong>accumulated realised profits</strong>, with board minutes and a voucher each time.',
    'An overdrawn director\'s loan not cleared within <strong>9 months</strong> of the year end triggers a temporary tax charge of <strong>35.75%</strong> for loans made from 6 April 2026.',
    'Money you lent the company comes back to you tax-free.',
  ],

  sections: [
    {
      id: 'routes', h2: 'What are the ways to take money out of a limited company?', toc: 'The six routes',
      body: [
        '<p>You can take money out as salary, dividends, employer pension contributions, expense repayments, benefits or a director\'s loan. Each is taxed differently, and the company must record every payment. Our <a href="/uk/accounting/limited-company-accountant/">limited company accountants</a> plan the mix with you each year, so you are not working it out payment by payment.</p>',
        { caption: 'How each route is taxed (2026-27)', head: ['Route', 'For the company', 'For you'], rows: [
          ['Salary', 'Deductible. Employer National Insurance of 15% above £5,000 a year', 'Income Tax and employee National Insurance through PAYE'],
          ['Dividends', 'Not deductible: paid from profit after Corporation Tax', '£500 tax-free, then 10.75%, 35.75% or 39.35%'],
          ['Employer pension contribution', 'Usually deductible, no National Insurance', 'No tax now, within your annual allowance'],
          ['Expense repayments', 'Deductible if a genuine business cost', 'Tax-free if the cost was for the business'],
          ['Benefits in kind', 'Deductible, with Class 1A National Insurance on most', 'Income Tax on the taxable value'],
          ['Director\'s loan', 'Temporary tax charge if not repaid in time', 'Benefit in kind if over £10,000 and interest-free'],
        ], after: 'Sources: GOV.UK, Taking money out of a limited company; Rates and thresholds for employers 2026 to 2027; Tax on dividends.' },
        '<p>If you have put your own money into the company, you can also take it back at any time as a repayment of your loan to the company, with no tax to pay.</p>',
      ],
    },
    {
      id: 'order', h2: 'In what order should you take money out?', toc: 'Order of extraction',
      body: [
        '<p>A sensible order for most owner-directors is cheapest first:</p>',
        '<ol><li><strong>Repay what the company owes you:</strong> expenses you paid personally and any money you lent it.</li><li><strong>Salary up to the personal allowance</strong> (£12,570 for 2026-27), which is free of Income Tax and employee National Insurance and saves Corporation Tax.</li><li><strong>Employer pension contributions,</strong> if you can lock money away until retirement.</li><li><strong>Dividends up to the basic rate band,</strong> so your total income stays at or below £50,270.</li><li><strong>Further dividends, or leave the profit in the company</strong> for a lower-income year.</li></ol>',
        '<p>A director\'s loan is not a substitute for any of these, because it has to be repaid or taxed. For the 2026-27 numbers behind steps 2 and 4, read our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a>.</p>',
      ],
    },
    {
      id: 'salary', h2: 'How does a director\'s salary work?', toc: 'Salary',
      body: [
        '<p>A director\'s salary is paid through the company\'s payroll like any employee\'s. The company must register as an employer, deduct Income Tax and National Insurance under PAYE, report each payment to HMRC on or before payday, and pay employer National Insurance.</p>',
        '<p>For 2026-27, employer National Insurance is 15% on pay above £5,000 a year, and employees pay 8% above £12,570. A salary of at least £6,708 (the lower earnings limit) counts towards your State Pension. If you are the only employee paid above £5,000 and the company\'s sole director, the company cannot claim the Employment Allowance. Our <a href="/uk/accounting/payroll-services/">payroll services</a> run director-only payrolls, and our guide to <a href="/resources/employer-payroll-deadlines/">employer payroll deadlines</a> lists the filing dates.</p>',
      ],
    },
    {
      id: 'dividends', h2: 'What are the rules for paying dividends?', toc: 'Dividends',
      body: [
        '<p>A company can only pay dividends out of profits available for distribution: its accumulated, realised profits less its accumulated, realised losses (Companies Act 2006, section 830). This year\'s profit can be wiped out by losses from earlier years.</p>',
        '<p>For every dividend:</p>',
        '<ul><li>check there are enough distributable profits, using up-to-date management accounts</li><li>hold a directors\' meeting to declare it and keep minutes, even if you are the only director</li><li>pay it to all shareholders entitled to it, usually every holder of that class of share in proportion to their shares</li><li>give each shareholder a voucher showing the date, the company name, their name and the amount</li></ul>',
        '<p>A dividend paid without enough profits is unlawful. A shareholder who knew, or had reasonable grounds to believe, it was unlawful must repay it to the company (section 847).</p>',
        '<p>For 2026-27 the first £500 of dividends is tax-free. Above that you pay 10.75% in the basic rate band, 35.75% in the higher rate band and 39.35% in the additional rate band. Our guide to <a href="/resources/dividend-tax-rates/">dividend tax rates</a> shows how dividends stack on your other income and how to pay the tax.</p>',
      ],
    },
    {
      id: 'pension', h2: 'Should your company pay into your pension?', toc: 'Pension contributions',
      body: [
        '<p>Often, yes, if you can leave the money until retirement. An employer contribution is normally an allowable business cost, so it saves Corporation Tax, and there is no Income Tax or National Insurance on it when it goes in.</p>',
        { caption: 'Illustrative: £10,000 of company profit at the 19% small profits rate, basic rate taxpayer, 2026-27', head: ['Route', 'Tax', 'Amount for you'], rows: [
          ['Employer pension contribution', '£0 now', '£10,000 in your pension'],
          ['Dividend', '£1,900 Corporation Tax, then £871 dividend tax', '£7,229 in your bank account'],
        ], after: 'Illustrative only. Assumes your dividend allowance is already used. Pension withdrawals are taxed later, under the pension rules.' },
        '<p>All contributions, from you and the company, count towards your annual allowance of £60,000. You may be able to carry forward unused allowance from the previous 3 tax years. The allowance tapers down if your threshold income is over £200,000 and your adjusted income is over £260,000. HMRC accepts the contribution as a business cost as long as your overall pay package is not excessive for the work you do.</p>',
      ],
    },
    {
      id: 'expenses', h2: 'Which expenses and benefits can the company pay?', toc: 'Expenses and benefits',
      body: [
        '<p>The company can repay you tax-free for costs you pay purely for the company\'s business, such as business travel, professional subscriptions and equipment you use for the business. Keep the receipts.</p>',
        '<ul><li><strong>Mileage:</strong> if you use your own car for business, the company can pay you 55p a mile for the first 10,000 business miles and 25p after that, tax-free. The 55p rate applies from 6 April 2026 (it was 45p before).</li><li><strong>Trivial benefits:</strong> gifts costing £50 or less that are not cash, not a reward for work and not in your contract are tax-free. Directors of close companies are capped at £300 a tax year.</li><li><strong>Other benefits</strong>, such as a company car or private medical cover, are taxable. They are reported to HMRC and the company usually pays Class 1A National Insurance.</li></ul>',
        '<p>If you use something that belongs to the company for personal purposes, it must be reported as a benefit and taxed.</p>',
      ],
    },
    {
      id: 'directors-loan', h2: 'Can you borrow money from your own company?', toc: 'Director\'s loans',
      body: [
        '<p>Yes, but it is a loan, not pay. Any money you take that is not salary, dividends or an expense repayment goes on your director\'s loan account, which must appear on the company\'s balance sheet.</p>',
        { caption: 'Director\'s loan rules', head: ['Situation', 'What happens'], rows: [
          ['Repaid within 9 months of the year end', 'No Corporation Tax charge. Report the loan on form CT600A'],
          ['Still owed after 9 months', 'The company pays tax on the balance: 35.75% for loans made from 6 April 2026, 33.75% for loans made from 6 April 2022 to 5 April 2026'],
          ['Loan later repaid', 'The company can reclaim that tax (but not interest), 9 months and 1 day after the end of the period it was repaid in'],
          ['Over £10,000 at any time in the year', 'A benefit in kind if interest-free or below the official rate; you may owe Income Tax'],
          ['Written off', 'Taxed as your income, with National Insurance through payroll'],
        ], after: 'Sources: GOV.UK, Director\'s loans; HMRC Company Taxation Manual CTM61505. Checked 13 October 2026.' },
        '<p>Repaying a loan of more than £5,000 and then borrowing £5,000 or more again within 30 days does not avoid the charge. If you are weighing up whether a company is right for you in the first place, see our guide to <a href="/resources/sole-trader-vs-limited-company/">sole trader vs limited company</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the most tax-efficient way to pay myself as a director?', a: 'For most owner-directors in 2026-27, a salary of £12,570 through payroll plus dividends from profits after Corporation Tax. Employer pension contributions are even more efficient if you can wait until retirement, because they save Corporation Tax and carry no Income Tax or National Insurance when paid in.' },
    { q: 'Can I take money out of my limited company whenever I want?', a: 'Not freely. The money belongs to the company. You can take a salary through payroll, declare dividends if there are enough profits, or repay yourself expenses and money you lent it. Anything else is a director\'s loan that must be recorded and repaid.' },
    { q: 'Can I pay dividends if my company made a loss this year?', a: 'Only if it still has enough accumulated realised profits from earlier years after deducting this year\'s loss. If it does not, the dividend is unlawful and you may have to repay it to the company.' },
    { q: 'Do I need a payslip as a director?', a: 'Yes, if you take a salary. Director salaries are paid through PAYE, so the company runs payroll, reports to HMRC on or before each payday and gives you a payslip and a P60 at the end of the tax year.' },
    { q: 'What is an overdrawn director\'s loan account?', a: 'It means you owe the company money, because you took out more than your salary, dividends and expense repayments. If it is not repaid within 9 months of the year end, the company pays a temporary tax charge of 35.75% on loans made from 6 April 2026.' },
  ],

  sources: [
    ['https://www.gov.uk/running-a-limited-company/taking-money-out-of-a-limited-company', 'GOV.UK: Taking money out of a limited company'],
    ['https://www.gov.uk/directors-loans/you-owe-your-company-money', 'GOV.UK: Director\'s loans if you owe your company money'],
    ['https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm61505', 'HMRC Company Taxation Manual: Loans to participators (CTM61505)'],
    ['https://www.legislation.gov.uk/ukpga/2006/46/section/830', 'legislation.gov.uk: Companies Act 2006, section 830'],
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/tax-on-your-private-pension/annual-allowance', 'GOV.UK: Pension annual allowance'],
    ['https://www.gov.uk/expenses-and-benefits-business-travel-mileage/rules-for-tax', 'GOV.UK: Business travel and mileage rates'],
    ['https://www.gov.uk/expenses-and-benefits-trivial-benefits', 'GOV.UK: Trivial benefits'],
  ],

  related: [
    '/resources/salary-vs-dividends/',
    '/resources/dividend-tax-rates/',
    '/resources/sole-trader-vs-limited-company/',
    '/resources/limited-company-deadlines/',
  ],
};
