// Guide: /resources/cash-flow-forecasting/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and the Bank of England on 13 October 2026 (sources below). Re-check each April and after each Budget.
export default {
  url: '/resources/cash-flow-forecasting/',
  section: 'accounting',
  title: 'Cash Flow Forecasting for Small Businesses | Severin Finance',
  description: 'Build a 13-week and 12-month cash flow forecast, add HMRC dates (PAYE by the 22nd, VAT, corporation tax) and close any gap. Free consultation.',
  h1: 'Cash flow forecasting for small businesses',
  crumb: 'Cash flow forecasting',
  summary: 'Build a 13-week and a 12-month forecast, put in every tax date, and act early on any gap.',
  topic: 'Cash flow forecasting for small businesses',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/virtual-finance-director/', label: 'Our virtual finance director service',
    boxTitle: 'Want us to build it?', text: 'We build your 13-week and 12-month forecasts, update them every month and help you plan what to do about any shortfall.',
  },

  hero: {
    answer: 'A cash flow forecast lists the cash you expect in and out, week by week or month by month, so you can see a shortfall before it happens. Use a 13-week forecast to manage the next quarter and a 12-month forecast to plan. Include every tax payment: PAYE by the 22nd, VAT, corporation tax and Self Assessment.',
  },

  tldr: [
    'A <strong>13-week</strong> weekly forecast shows short-term pinch points; a <strong>12-month</strong> monthly one shows the year.',
    'Forecast <strong>cash</strong>, not profit: when customers actually pay and when bills actually leave the bank.',
    'Put in PAYE (<strong>22nd</strong> of each month), VAT (<strong>1 month and 7 days</strong> after each period) and corporation tax (<strong>9 months and 1 day</strong> after the year end).',
    'Update the 13-week forecast <strong>weekly</strong> and compare forecast with actual.',
    'If you see a gap, act early: chase debtors, move payments, talk to HMRC before the deadline, or speak to your bank early.',
  ],

  sections: [
    {
      id: 'which-forecast', h2: 'Which cash flow forecast do you need: 13-week or 12-month?', toc: '13-week or 12-month',
      body: [
        '<p>Most businesses need both. A 13-week forecast, built week by week, tells you whether you can pay wages, suppliers and HMRC over the next quarter. A 12-month forecast, built month by month, shows whether the year\'s plan works and when you might need finance. Our <a href="/uk/accounting/virtual-finance-director/">virtual finance director</a> service builds and updates both for you.</p>',
        { caption: '13-week and 12-month forecasts compared', head: ['Feature', '13-week forecast', '12-month forecast'], rows: [
          ['Period', 'Weekly columns for one quarter', 'Monthly columns for a year'],
          ['Built from', 'Actual invoices, bills, payroll and known payments', 'Budget, sales plan and cost assumptions'],
          ['Main use', 'Day-to-day cash control and spotting a shortfall early', 'Planning hiring, investment, borrowing and tax'],
          ['Updated', 'Every week, rolling forward one week', 'Every month, alongside management accounts'],
          ['Who usually asks for it', 'You, your bank, HMRC if you need time to pay', 'Your board, lenders and investors'],
        ], after: 'A general comparison. A business with very tight cash may also keep a daily view for a few weeks.' },
      ],
    },
    {
      id: 'how-to-build', h2: 'How do you build a cash flow forecast?', toc: 'How to build one',
      body: [
        '<p>Start with today\'s bank balance, add the cash you expect to receive in each period, take off the cash you expect to pay, and carry the closing balance forward as the next opening balance.</p>',
        '<ol><li><strong>Opening cash:</strong> the real balance in all business bank accounts today.</li><li><strong>Receipts:</strong> customer payments, based on when they actually pay, not the invoice date. Use your debtor days to judge this.</li><li><strong>Payments:</strong> wages, PAYE, pensions, rent, suppliers, loan repayments, subscriptions and annual bills such as insurance.</li><li><strong>Tax:</strong> VAT, corporation tax and any Self Assessment you pay from the business. See the table in the next section.</li><li><strong>Closing cash:</strong> opening cash plus receipts minus payments. This becomes next period\'s opening cash.</li><li><strong>Check it:</strong> compare each period with what actually happened, and correct the assumptions.</li></ol>',
        '<p>Use amounts including VAT, because that is what moves through the bank, and show the VAT payment to HMRC as a separate line.</p>',
        { caption: 'Worked example: a three-month forecast (illustrative)', head: ['Line', 'October', 'November', 'December'], rows: [
          ['Opening cash', '£10,000', '£11,000', '(£2,000)'],
          ['Receipts from customers', '£30,000', '£25,000', '£35,000'],
          ['Wages and PAYE', '(£15,000)', '(£15,000)', '(£15,000)'],
          ['Suppliers and overheads', '(£12,000)', '(£12,000)', '(£12,000)'],
          ['VAT for the quarter to 30 September', '£0', '(£9,000)', '£0'],
          ['Loan repayment', '(£2,000)', '(£2,000)', '(£2,000)'],
          ['Closing cash', '£11,000', '(£2,000)', '£4,000'],
        ], after: 'Illustrative figures. Brackets show payments out and an overdrawn balance.' },
        '<p>The business is profitable over the quarter, but slower receipts and the VAT bill together leave it £2,000 short in November. Seeing that in October gives time to chase customers or agree an overdraft, rather than missing the VAT deadline.</p>',
      ],
    },
    {
      id: 'tax-dates', h2: 'Which tax dates should a cash flow forecast include?', toc: 'Tax dates to include',
      body: [
        '<p>Include every regular HMRC payment, on the date the money leaves your account. Tax bills are large, predictable and easy to forget, which makes them the most common cause of a cash squeeze.</p>',
        { caption: 'HMRC payment dates to put in your forecast', head: ['Tax', 'When it is due'], rows: [
          ['PAYE and National Insurance (monthly)', 'By the 22nd of the next tax month (19th if paying by post)'],
          ['PAYE (quarterly, if HMRC agrees)', 'By the 22nd after each quarter, for example 22 July for the quarter to 5 July'],
          ['VAT', '1 calendar month and 7 days after the end of each VAT period. Direct Debits are collected 3 working days later'],
          ['Corporation tax (profits up to £1.5 million)', '9 months and 1 day after the end of the accounting period'],
          ['Corporation tax (profits over £1.5 million)', '4 instalments. For a year starting 1 January: 14 July, 14 October, 14 January and 14 April'],
          ['Self Assessment (directors and owners)', '31 January 2027 for the 2025-26 balance and first payment on account for 2026-27; 31 July 2027 for the second'],
        ], after: 'Source: GOV.UK pages on paying PAYE, VAT, Corporation Tax and Self Assessment. Checked 13 October 2026.' },
        '<p>For example, a company with a year end of 31 March 2026 must pay its corporation tax for that year by 1 January 2027, while its Company Tax Return is not due until 31 March 2027. Put an estimate of the next bill into the 12-month forecast as soon as the management accounts show a profit.</p>',
      ],
    },
    {
      id: 'assumptions', h2: 'What makes a cash flow forecast reliable?', toc: 'Reliable assumptions',
      body: [
        '<p>A forecast is reliable when its assumptions come from your real trading history, not from hope. The most common mistakes are assuming customers pay on time, forgetting annual or quarterly bills, and treating profit as if it were cash.</p>',
        '<ul><li><strong>Receipts:</strong> base timing on how each main customer actually pays. If your debtor days are 45, do not forecast 30.</li><li><strong>Seasonality:</strong> use last year\'s monthly pattern for sales and costs.</li><li><strong>Irregular bills:</strong> insurance, software renewals, the accountant, equipment and stock purchases.</li><li><strong>Owners:</strong> salaries, dividends and drawings, and any personal tax you plan to pay from the business.</li><li><strong>Finance:</strong> loan and lease repayments, and when an overdraft facility is due for renewal.</li></ul>',
        '<p>Your monthly management accounts are the best source for these figures, so the two should be prepared together. Our guide to <a href="/resources/management-accounts-explained/">management accounts</a> explains what that monthly pack contains.</p>',
      ],
    },
    {
      id: 'updating', h2: 'How often should you update a cash flow forecast?', toc: 'Updating it',
      body: [
        '<p>Update the 13-week forecast every week and the 12-month forecast every month. Each week, replace the week just gone with actual figures, add a new week at the end, and look at where the forecast was wrong.</p>',
        '<p>The comparison matters more than the forecast itself. If receipts are always lower than forecast, your assumptions on customer payment are too optimistic, and every future week will look better than it really is. Fix the assumption, not just the number.</p>',
        '<p>Build in some headroom too. Decide on the lowest cash balance you are comfortable with, for example one month\'s wages, and treat any week that drops below it as a warning, not just weeks where the balance goes negative.</p>',
      ],
    },
    {
      id: 'closing-a-gap', h2: 'What can you do if the forecast shows a cash gap?', toc: 'Closing a gap',
      body: [
        '<p>Act as soon as the gap appears. The further ahead you see it, the more options you have.</p>',
        '<h3>Bring cash in sooner</h3>',
        '<ul><li>Chase overdue invoices, and invoice promptly when work is done.</li><li>Ask for deposits or stage payments on larger jobs.</li><li>Charge statutory interest on late business payments: 8% plus the Bank of England base rate, which is 3.75% today. See our guide to <a href="/resources/late-payment-interest/">claiming late payment interest</a>.</li><li>Sell slow-moving stock.</li></ul>',
        '<h3>Move payments later</h3>',
        '<ul><li>Agree longer terms with key suppliers before the bill is due, not after.</li><li>Delay spending that can wait, such as non-urgent equipment.</li><li>If you cannot pay HMRC in full, contact it before the deadline. You may be able to agree a payment plan. HMRC will ask about your income, spending and savings, and expects a company to reduce the debt as far as it can first. Read our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a>.</li></ul>',
        '<h3>Borrowing to cover a gap</h3>',
        '<p>An overdraft or a short-term loan can cover a timing gap, but each has a cost, and a lender will want to see your forecast and recent <a href="/resources/management-accounts-explained/">management accounts</a>. We do not arrange or introduce finance, but we can prepare the forecast and accounts a lender asks for, so you can approach your bank with clear numbers.</p>',
        '<p>Paying HMRC late costs money: interest on late tax is charged at the base rate plus 4 percentage points, which was 7.75% a year from 9 January 2026, and penalties can apply on top.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the difference between a cash flow forecast and a budget?', a: 'A budget shows planned income, costs and profit for the year. A cash flow forecast shows when money actually arrives and leaves the bank, including VAT, tax, loan repayments and capital spending that a profit budget may not show in the same month.' },
    { q: 'Can I make a cash flow forecast in a spreadsheet?', a: 'Yes. A spreadsheet works well for many small businesses, with one column per week or month and a row for each type of receipt and payment. Forecasting tools that connect to your accounting software can save time once the business grows.' },
    { q: 'Why is my business profitable but short of cash?', a: 'Profit is counted when you invoice; cash arrives when customers pay. Slow-paying customers, stock, loan repayments, VAT and corporation tax all take cash without reducing profit in the same month, so a profitable business can still run short.' },
    { q: 'Do banks ask for a cash flow forecast?', a: 'Usually, yes. Lenders typically ask for a cash flow forecast alongside recent management accounts and filed accounts, to check the business can afford the repayments. A forecast built on realistic assumptions makes an application more credible, but approval is never guaranteed.' },
    { q: 'How far ahead should a small business forecast cash?', a: 'At least 13 weeks in detail, and 12 months in outline. Look further ahead if you are planning a large purchase, a loan or a sale of the business, and make sure the forecast covers your next corporation tax and Self Assessment payments.' },
  ],

  sources: [
    ['https://www.gov.uk/pay-paye-tax', 'GOV.UK: Pay employers\' PAYE'],
    ['https://www.gov.uk/submit-vat-return', 'GOV.UK: Submit your VAT return'],
    ['https://www.gov.uk/pay-vat/direct-debit', 'GOV.UK: Pay VAT by Direct Debit'],
    ['https://www.gov.uk/pay-corporation-tax', 'GOV.UK: Pay your Corporation Tax bill'],
    ['https://www.gov.uk/guidance/corporation-tax-paying-in-instalments', 'GOV.UK: Corporation Tax instalments'],
    ['https://www.gov.uk/understand-self-assessment-bill/payments-on-account', 'GOV.UK: Payments on account'],
    ['https://www.gov.uk/difficulties-paying-hmrc/pay-in-instalments', 'GOV.UK: Pay HMRC in instalments'],
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
  ],

  related: [
    '/resources/management-accounts-explained/',
    '/resources/pay-hmrc-in-instalments/',
    '/resources/when-to-hire-a-finance-director/',
    '/resources/late-payment-interest/',
  ],
};
