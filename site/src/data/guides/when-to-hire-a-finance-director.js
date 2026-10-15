// Guide: /resources/when-to-hire-a-finance-director/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and legislation.gov.uk on 13 October 2026 (sources below). Re-check each April:
// employer NIC rate and secondary threshold, auto-enrolment qualifying earnings band, audit exemption thresholds.
// No prices or salary figures: there is no official source, so cost is explained by what drives it.
export default {
  url: '/resources/when-to-hire-a-finance-director/',
  section: 'accounting',
  title: 'When to Hire a Finance Director | Severin Finance',
  description: 'The signs you need a finance director, what they do, and part-time, full-time and virtual FDs compared, with what drives the cost. Free consultation.',
  h1: 'When to hire a finance director',
  summary: 'The signs you need senior finance help, what an FD does, and part-time vs full-time vs virtual.',
  topic: 'Hiring a finance director for a small or medium-sized business',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/virtual-finance-director/', label: 'Our virtual finance director service',
    boxTitle: 'Need an FD, not a full-time hire?', text: 'We act as your part-time finance director: monthly numbers, forecasts, board and lender reporting, and advice on the big decisions.',
  },

  hero: {
    answer: 'Hire a finance director when big decisions are being made without reliable, timely numbers: raising a loan or investment, growing fast, running short of cash despite making a profit, or planning a sale. Most small and medium-sized businesses start with a part-time or virtual finance director and move to a full-time hire only when the work fills the week.',
  },

  tldr: [
    'The trigger is <strong>decisions</strong>, not turnover: funding, growth, cash pressure, investors or a sale.',
    'A bookkeeper records, an accountant reports the past, a <strong>finance director</strong> plans the future.',
    'Most businesses start <strong>part-time or virtual</strong>, often a few days a month.',
    'A full-time employee costs salary plus <strong>15%</strong> employer National Insurance above £5,000 (2026-27) and at least <strong>3%</strong> pension.',
    'Directors stay <strong>legally responsible</strong> for the company\'s records and accounts, whoever does the work.',
  ],

  sections: [
    {
      id: 'when', h2: 'When does a business need a finance director?', toc: 'When you need one',
      body: [
        '<p>When the decisions in front of you are bigger than the numbers you have. There is no turnover figure that triggers it: a £2 million business raising investment may need one more than a stable £10 million business. Our <a href="/uk/accounting/virtual-finance-director/">virtual finance director</a> service gives you that senior input part time, without a full-time salary.</p>',
        '<p>A useful test: could you tell your bank, today, what profit you made last month, how much cash you will have in 13 weeks, and which products or customers make you money? If the honest answer is "not without a few days\' work", you are making decisions on instinct. That is fine for a small business, and expensive for a growing one.</p>',
      ],
    },
    {
      id: 'signs', h2: 'What are the signs you need a finance director?', toc: 'The signs',
      body: [
        '<p>The common signs are cash surprises, a funding round or loan, rapid growth, and outside people (investors, lenders, a board) asking for numbers you cannot produce quickly.</p>',
        { caption: 'Signs you need a finance director, and what they do about it', head: ['Sign', 'What a finance director does'], rows: [
          ['Profitable on paper but often short of cash', 'Builds a rolling cash forecast and finds where cash is tied up: debtors, stock, payment terms'],
          ['Raising a loan or investment', 'Prepares the financial model, forecasts and pack lenders and investors expect, and joins the meetings'],
          ['Growing fast or hiring heavily', 'Tests whether growth is funded, sets budgets and tracks margins by product or customer'],
          ['Management accounts arrive late or not at all', 'Sets a month-end timetable and a short monthly pack with KPIs'],
          ['Investors or a board want regular reporting', 'Writes board papers and explains variances against budget'],
          ['Several companies or a new group structure', 'Runs group reporting, intercompany balances and consolidations'],
          ['Planning a sale, buy-out or succession', 'Gets the numbers ready for due diligence and a valuation'],
          ['You, the owner, spend evenings on finance', 'Takes the finance function off your desk so you run the business'],
        ], after: 'A general guide. Most businesses that need an FD tick two or three of these at once.' },
        '<p>Size matters too. A private company is usually exempt from audit if it meets at least 2 of 3 conditions: turnover of £15 million or less, assets of £7.5 million or less, and 50 or fewer employees on average (for financial years starting on or after 6 April 2025). A business heading past those limits needs audit-ready books, which is classic finance director work.</p>',
      ],
    },
    {
      id: 'what-they-do', h2: 'What does a finance director actually do?', toc: 'What they do',
      body: [
        '<p>A finance director runs the finance function and helps the owners decide what to do next. They do not usually keep the books themselves; they make sure the books are right, on time and used.</p>',
        { caption: 'Bookkeeper, accountant, financial controller and finance director', head: ['Role', 'Main focus', 'Typical work'], rows: [
          ['Bookkeeper', 'Recording', 'Sales and purchase invoices, bank reconciliations, VAT records, payroll inputs'],
          ['Accountant', 'Reporting the past and tax', 'Year-end accounts, corporation tax and Self Assessment returns'],
          ['Financial controller', 'Control and accuracy', 'Month-end close, management accounts, systems, credit control'],
          ['Finance director', 'Planning and decisions', 'Budgets, forecasts, funding, pricing, board reporting, strategy'],
        ], after: 'Titles overlap in small businesses. "CFO" is often used for the same role, especially by investors.' },
        '<p>In a small business one person often covers more than one row. Our guide to <a href="/resources/accountant-vs-bookkeeper/">accountant vs bookkeeper</a> explains the first two roles, and a finance director builds on them: they need reliable <a href="/uk/accounting/bookkeeping-services/">bookkeeping</a> underneath before they can add much on top.</p>',
      ],
    },
    {
      id: 'options', h2: 'Part-time, full-time or virtual: which do you need?', toc: 'Part-time or full-time',
      body: [
        '<p>Part-time or virtual suits most businesses until the finance work genuinely fills a working week. A full-time finance director makes sense when there is a finance team to lead, daily decisions that need them, or investors who expect one in the building.</p>',
        { caption: 'Finance director options compared', head: ['Feature', 'Part-time or virtual FD', 'Full-time FD (employed)'], rows: [
          ['Time', 'A few days a month, flexed around funding rounds or the year end', 'Every working day'],
          ['How you engage them', 'Monthly service agreement, often with a firm', 'Employment contract and notice period'],
          ['Employer costs', 'None: you pay a fee', 'Salary, employer National Insurance, pension, benefits'],
          ['Recruitment', 'Quick to start and to change', 'Search, interviews and possibly a recruiter\'s fee'],
          ['Breadth of experience', 'Often sees many businesses and lenders', 'Deep knowledge of your business'],
          ['Best for', 'Growing SMEs, start-ups, owner-managed companies', 'Larger businesses with a finance team to manage'],
        ], after: 'A general comparison. "Virtual" usually means part-time and largely remote, working from your accounting software and meeting by video or in person.' },
        '<p>Many businesses use a part-time finance director to get ready for a full-time one: building the systems, the budget and the reporting, then helping to recruit and hand over.</p>',
      ],
    },
    {
      id: 'cost', h2: 'What drives the cost of a finance director?', toc: 'What drives cost',
      body: [
        '<p>For a part-time finance director, cost is driven by time and complexity. For a full-time hire, it is the whole cost of employment, not just the salary.</p>',
        '<h3>Part-time or virtual</h3>',
        '<ul><li>how many days or meetings each month</li><li>the number of companies, currencies and bank accounts</li><li>whether bookkeeping and management accounts are included or done by your team</li><li>one-off projects such as a funding round, a lender\'s pack or a sale</li><li>the state of the books when they start</li></ul>',
        '<h3>Full-time employee</h3>',
        { caption: 'Employer costs on top of salary (2026-27)', head: ['Cost', 'Rule'], rows: [
          ['Employer Class 1 National Insurance', '15% on earnings above £5,000 a year (the secondary threshold)'],
          ['Workplace pension (auto-enrolment)', 'At least 3% employer contribution on qualifying earnings of £6,240 to £50,270'],
          ['Employment Allowance', 'Up to £10,500 off the employer NIC bill, if the business qualifies'],
          ['Other costs', 'Recruitment, bonus, benefits, equipment, and any share options'],
        ], after: 'Sources: GOV.UK, Rates and thresholds for employers 2026 to 2027; GOV.UK, Workplace pensions. Checked 13 October 2026.' },
        '<p>If you engage an interim finance director through their own limited company, check whether the off-payroll working rules apply. If your business is medium or large, you decide their employment status. Our <a href="/resources/ir35-explained/">IR35 guide</a> explains how.</p>',
      ],
    },
    {
      id: 'board', h2: 'Does a finance director need to be on the board?', toc: 'On the board or not',
      body: [
        '<p>No. "Finance director" is a job title. Someone becomes a legal director of the company only if they are appointed to the board and the appointment is filed at Companies House. Since 18 November 2025, a new director must also verify their identity with Companies House as part of that appointment.</p>',
        '<p>Either way, the existing directors stay legally responsible. GOV.UK is clear that you can hire people to manage the company\'s accounts day to day, but you remain responsible for its records, accounts and performance. The Companies Act 2006 requires every company to keep records that show its financial position with reasonable accuracy at any time. A good finance director makes that true; they do not take the duty away from you.</p>',
        '<p>A part-time finance director usually works as an adviser to the board rather than a member of it. Appointing them as a director gives them a vote and the full legal duties of a director, which is a bigger step for both sides.</p>',
      ],
    },
    {
      id: 'first-months', h2: 'What should a new finance director do first?', toc: 'The first 90 days',
      body: [
        '<p>Get the numbers right, then make them useful. In the first three months, a finance director typically:</p>',
        '<ol><li>reviews the books, bank reconciliations, VAT and payroll, and fixes errors</li><li>sets a month-end timetable so reports arrive within days, not weeks</li><li>agrees a short monthly pack and a handful of KPIs with you</li><li>builds a 13-week cash forecast and a 12-month budget</li><li>lists the decisions ahead (funding, hiring, pricing, a sale) and what each needs from finance</li></ol>',
        '<p>Our guides to <a href="/resources/management-accounts-explained/">management accounts</a> and <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a> cover those two reports in detail. If funding is the trigger, we can prepare the forecasts and financial model a lender or investor will ask to see. We do not arrange or introduce the finance itself.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'At what turnover should I hire a finance director?', a: 'There is no set turnover. The need depends on the decisions you face: raising finance, fast growth, cash pressure, investors or a sale. A part-time finance director often makes sense long before a full-time one is affordable or needed.' },
    { q: 'What is a fractional finance director?', a: 'A finance director who works for several businesses, each for a fixed share of their time, such as two days a month. Fractional, part-time and virtual are used for much the same arrangement. You get senior experience without a full-time salary and employer costs.' },
    { q: 'Is a finance director the same as a CFO?', a: 'Broadly, yes. Finance director is the traditional UK title; chief financial officer (CFO) is common in larger groups and businesses backed by investors. In a small or medium-sized business both titles describe the person who leads finance and advises the owners.' },
    { q: 'Can my accountant act as my finance director?', a: 'Sometimes. An accountant who only prepares year-end accounts and tax returns is looking back. A finance director looks forward, with budgets, forecasts and funding. Some firms offer both, so the year-end accounts and the monthly numbers come from the same records.' },
    { q: 'How many days a month does a part-time finance director work?', a: 'It varies with the business. A small, stable business may need a monthly review meeting and reporting. A business raising investment or going through rapid growth may need several days a month for a period. The scope should be agreed in writing before work starts.' },
  ],

  sources: [
    ['https://www.gov.uk/running-a-limited-company', 'GOV.UK: Running a limited company'],
    ['https://www.legislation.gov.uk/ukpga/2006/46/section/386', 'legislation.gov.uk: Companies Act 2006, section 386'],
    ['https://www.gov.uk/audit-exemptions-for-private-limited-companies', 'GOV.UK: Audit exemptions for private limited companies'],
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/workplace-pensions/what-you-your-employer-and-the-government-pay', 'GOV.UK: Workplace pension contributions'],
    ['https://www.gov.uk/guidance/verifying-your-identity-for-companies-house', 'GOV.UK: Verifying your identity for Companies House'],
  ],

  related: [
    '/resources/management-accounts-explained/',
    '/resources/cash-flow-forecasting/',
    '/resources/accountant-vs-bookkeeper/',
    '/resources/ir35-explained/',
  ],
};
