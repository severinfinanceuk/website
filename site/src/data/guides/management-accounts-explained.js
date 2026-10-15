// Guide: /resources/management-accounts-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, Companies House guidance and legislation.gov.uk on 13 October 2026 (sources below).
// Re-check the Companies House accounts filing changes (due from 1 April 2028) before that date.
export default {
  url: '/resources/management-accounts-explained/',
  section: 'accounting',
  title: 'Management Accounts Explained | Severin Finance',
  description: 'What management accounts include, how often to prepare them, the KPIs to track and how they differ from accounts filed within 9 months. Free consultation.',
  h1: 'Management accounts explained',
  summary: 'What goes in a monthly management accounts pack, which KPIs matter and how it differs from annual accounts.',
  topic: 'Management accounts for small and medium-sized businesses',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/virtual-finance-director/', label: 'Our virtual finance director service',
    boxTitle: 'Want a monthly pack?', text: 'We prepare your management accounts each month and meet you to explain the numbers and agree what to do next.',
  },

  hero: {
    answer: 'Management accounts are internal reports, usually monthly, showing your profit and loss, balance sheet, cash position and key numbers against budget. No law sets their format and they are not filed anywhere. Statutory accounts look back over the year and, for a private company, are due at Companies House 9 months after the year end.',
  },

  tldr: [
    'A typical pack: <strong>profit and loss, balance sheet, cash flow, KPIs and commentary</strong>.',
    'Most businesses produce them <strong>monthly</strong>; quarterly can work for small, stable businesses.',
    'They are for you, your board, lenders and investors. They are <strong>not filed</strong> at Companies House.',
    'Statutory accounts for a private company are due <strong>9 months</strong> after the year end.',
    'Every company must keep records that show its financial position <strong>at any time</strong>.',
  ],

  sections: [
    {
      id: 'whats-included', h2: 'What do management accounts include?', toc: 'What is in the pack',
      body: [
        '<p>A management accounts pack usually contains a profit and loss account compared with budget, a balance sheet, a cash flow summary or forecast, a page of key performance indicators (KPIs), and a short commentary on what changed and why. Our <a href="/uk/accounting/virtual-finance-director/">virtual finance director</a> service prepares this pack each month and talks you through it.</p>',
        { caption: 'A typical monthly management accounts pack', head: ['Report', 'What it tells you'], rows: [
          ['Profit and loss (month and year to date)', 'Sales, costs and profit, against budget and the same period last year'],
          ['Balance sheet', 'What the business owns and owes: cash, debtors, stock, creditors, loans, tax owed'],
          ['Cash flow', 'Where cash came from and went, and what the next weeks or months look like'],
          ['KPIs', 'A handful of numbers that show how the business is really performing'],
          ['Commentary', 'The main variances explained in plain words, with agreed actions'],
        ], after: 'There is no required format. The pack should answer the questions you and your board actually ask.' },
        '<p>Some businesses add an aged debtors and creditors report, a sales breakdown by product or customer, or a payroll summary. Keep it short: a pack nobody reads does not help anyone decide anything.</p>',
      ],
    },
    {
      id: 'vs-statutory', h2: 'How are management accounts different from statutory accounts?', toc: 'Versus statutory accounts',
      body: [
        '<p>Management accounts are optional, private and forward-looking. Statutory accounts are required by law, follow set formats and accounting standards, and are filed with Companies House and sent to HMRC with the Company Tax Return.</p>',
        { caption: 'Management accounts compared with statutory accounts', head: ['Feature', 'Management accounts', 'Statutory (annual) accounts'], rows: [
          ['Required by law?', 'No', 'Yes, for every company'],
          ['Format', 'Whatever suits the business', 'Set by the Companies Act and accounting standards'],
          ['How often', 'Usually monthly or quarterly', 'Once a year'],
          ['Who sees them', 'Owners, board, lenders, investors', 'Members, Companies House (public record) and HMRC'],
          ['Deadline', 'None, but useful only if timely', 'Private company: 9 months after the accounting reference date'],
          ['Includes budget and KPIs', 'Usually', 'No'],
        ], after: 'Source: Companies House, Life of a company: accounts. Checked 13 October 2026.' },
        '<p>A private company\'s first accounts, if they cover more than 12 months, are due 21 months after incorporation or 3 months after the accounting reference date, whichever is later. The Company Tax Return is due 12 months after the end of the accounting period, and corporation tax is usually payable 9 months and 1 day after it.</p>',
        '<h3>What is changing at Companies House?</h3>',
        '<p>Today, small and micro companies need not file their profit and loss account at Companies House. From 1 April 2028, Companies House says small and micro companies will have to deliver a profit and loss account (with an option not to publish it), abridged accounts will end, and accounts will have to be filed through commercial software. Some details are still to be confirmed.</p>',
      ],
    },
    {
      id: 'how-often', h2: 'How often should you produce management accounts?', toc: 'How often',
      body: [
        '<p>Monthly suits most growing businesses, because problems show up while there is still time to act. Quarterly can be enough for a small business with steady sales and few staff. Weekly sales and cash figures can sit alongside either.</p>',
        '<p>Speed matters more than polish. A pack that arrives two months after the month end is history, not information. To produce one quickly, the books must be up to date: bank reconciled, sales and bills entered, payroll posted. Our <a href="/resources/monthly-bookkeeping-checklist/">monthly bookkeeping checklist</a> sets out what needs doing first.</p>',
        '<p>Monthly accounts also need a few adjustments that a basic bookkeeping file leaves out, so that each month shows a fair profit:</p>',
        '<ul><li><strong>accruals</strong> for costs you have incurred but not yet been billed for</li><li><strong>prepayments</strong>, spreading annual bills such as insurance across the months they cover</li><li><strong>depreciation</strong> on equipment and vehicles</li><li><strong>stock</strong> movements, if you hold stock</li><li>an estimate of <strong>corporation tax</strong> on the profit to date</li></ul>',
      ],
    },
    {
      id: 'kpis', h2: 'Which KPIs should management accounts track?', toc: 'KPIs',
      body: [
        '<p>Track the five to ten numbers that drive your profit and cash, not every number you can calculate. These are common starting points for small and medium-sized businesses.</p>',
        { caption: 'Common KPIs in management accounts', head: ['KPI', 'How it is worked out', 'What it shows'], rows: [
          ['Gross margin', 'Gross profit ÷ sales × 100', 'Whether pricing covers direct costs'],
          ['Net margin', 'Net profit ÷ sales × 100', 'How much of each pound of sales you keep'],
          ['Overheads as % of sales', 'Overheads ÷ sales × 100', 'Whether fixed costs are growing faster than sales'],
          ['Debtor days', 'Trade debtors ÷ sales × days in period', 'How long customers take to pay'],
          ['Creditor days', 'Trade creditors ÷ purchases × days in period', 'How long you take to pay suppliers'],
          ['Cash runway', 'Cash ÷ average monthly net cash outflow', 'How many months you could last if nothing changed'],
        ], after: 'Add sector measures where they matter, for example utilisation for a consultancy or food cost percentage for a restaurant.' },
        '<h3>Worked example (illustrative)</h3>',
        '<p>A business has sales of £100,000 in a quarter of 90 days, gross profit of £40,000 and trade debtors of £50,000 at the quarter end. Gross margin is £40,000 ÷ £100,000 = 40%. Debtor days are £50,000 ÷ £100,000 × 90 = 45 days. If the agreed terms are 30 days, customers are paying about two weeks late on average, and chasing them is a cash priority.</p>',
      ],
    },
    {
      id: 'reading-the-pack', h2: 'How do you read a management accounts pack?', toc: 'Reading the pack',
      body: [
        '<p>Start with the commentary and the variances against budget, then check cash. The questions to ask each month are simple:</p>',
        '<ol><li>Are sales and margin where we planned? If not, is it price, volume or cost?</li><li>Which overheads moved, and is the change one-off or permanent?</li><li>Is cash in line with profit? If profit is up but cash is down, look at debtors, stock and tax owed.</li><li>What does the forecast say about the next three months?</li><li>What will we do differently as a result?</li></ol>',
        '<p>The last question is the point of the exercise. If a pack never leads to a decision, change what is in it. Linking the monthly figures to a rolling forecast is the natural next step: see our guide to <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a>.</p>',
      ],
    },
    {
      id: 'who-uses-them', h2: 'Who asks to see management accounts?', toc: 'Who asks for them',
      body: [
        '<p>Your board and shareholders are the main users, but lenders and investors often ask for recent management accounts as well as the last filed accounts, because filed accounts can be well over a year out of date. A lender will usually want to see current trading, debts and cash before agreeing a loan or overdraft. We do not arrange or introduce finance, but our <a href="/uk/accounting/virtual-finance-director/">virtual finance director</a> service prepares the management accounts and <a href="/resources/cash-flow-forecasting/">cash flow forecast</a> a lender or investor asks for.</p>',
        '<p>If you ask HMRC for time to pay a tax bill, it will ask about your income, regular spending and savings. Up to date management accounts and a forecast make that conversation much easier.</p>',
      ],
    },
    {
      id: 'do-you-need-them', h2: 'Does a small business legally need management accounts?', toc: 'Are they required?',
      body: [
        '<p>No law requires management accounts. The Companies Act 2006 does require every company to keep adequate accounting records, meaning records that show and explain its transactions and disclose with reasonable accuracy, at any time, its financial position. Monthly management accounts are the practical way to show you can do that.</p>',
        '<p>They become worth the effort once decisions depend on timely numbers: you are hiring, raising money, managing tight cash, or reporting to investors or a board. Larger companies may also need an audit: a company is generally exempt as a small company if it meets at least 2 of these for financial years starting on or after 6 April 2025: turnover of £15 million or less, a balance sheet of £7.5 million or less, and 50 or fewer employees on average. If you are weighing up who should produce your pack, read <a href="/resources/when-to-hire-a-finance-director/">when to hire a finance director</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do management accounts have to be filed at Companies House?', a: 'No. Management accounts are internal reports for owners, the board, lenders and investors. Only the annual statutory accounts are filed at Companies House, within 9 months of the accounting reference date for a private company.' },
    { q: 'What is the difference between management accounts and a cash flow forecast?', a: 'Management accounts report what has happened: profit, the balance sheet and KPIs for the period just ended. A cash flow forecast looks ahead, showing cash expected in and out over the coming weeks or months. Most monthly packs include both.' },
    { q: 'Can management accounts be used to pay dividends?', a: 'A company can only pay dividends out of distributable profits. Directors often use up to date management accounts, including an estimate of corporation tax, to check there are enough profits before declaring an interim dividend. Keep the figures with the dividend paperwork.' },
    { q: 'Can my bookkeeper prepare management accounts?', a: 'Often, yes, for a basic profit and loss and balance sheet. Adding budgets, forecasts, adjustments such as accruals and depreciation, and commentary that explains the numbers usually needs an accountant or finance director.' },
    { q: 'Are management accounts audited?', a: 'No. Audits apply to statutory accounts, and many small companies are exempt from those too. Management accounts are not checked by anyone outside the business, so their value depends on how accurate and timely your bookkeeping is.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/life-of-a-company-annual-requirements/life-of-a-company-part-1-accounts', 'Companies House: Life of a company, accounts'],
    ['https://www.legislation.gov.uk/ukpga/2006/46/section/386', 'legislation.gov.uk: Companies Act 2006, section 386'],
    ['https://www.gov.uk/company-tax-returns', 'GOV.UK: Company Tax Returns'],
    ['https://www.gov.uk/pay-corporation-tax', 'GOV.UK: Pay your Corporation Tax bill'],
    ['https://www.gov.uk/audit-exemptions-for-private-limited-companies', 'GOV.UK: Audit exemptions for private limited companies'],
    ['https://www.gov.uk/difficulties-paying-hmrc/pay-in-instalments', 'GOV.UK: Pay HMRC in instalments'],
  ],

  related: [
    '/resources/cash-flow-forecasting/',
    '/resources/when-to-hire-a-finance-director/',
    '/resources/monthly-bookkeeping-checklist/',
    '/resources/limited-company-deadlines/',
  ],
};
