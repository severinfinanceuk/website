// Guide: /resources/monthly-bookkeeping-checklist/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April and after each Budget.
export default {
  url: '/resources/monthly-bookkeeping-checklist/',
  section: 'accounting',
  title: 'Monthly Bookkeeping Checklist UK | Severin Finance',
  description: 'A month-end bookkeeping checklist for UK businesses, plus how long to keep records: 6 years for companies and VAT, 3 years for payroll. Free consultation.',
  h1: 'Monthly bookkeeping checklist for UK small businesses',
  crumb: 'Monthly bookkeeping checklist',
  summary: 'The month-end tasks that keep your books right, and how long HMRC says to keep your records.',
  topic: 'Month-end bookkeeping and business record keeping',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/bookkeeping-services/', label: 'Our bookkeeping service',
    boxTitle: 'Rather not do it yourself?', text: 'We keep your books up to date in Xero or QuickBooks every week or month, and keep you ready for VAT and year end.',
  },

  hero: {
    answer: 'Each month, reconcile every bank and card account, record all sales and bills, chase unpaid invoices, file receipts, and run payroll and VAT on time. Then check the profit and loss and balance sheet. Keep records for 6 years if you are a company, and for 5 years after the 31 January deadline if you are a sole trader.',
  },

  tldr: [
    'Reconcile <strong>every</strong> bank, card and payment account to the statement each month.',
    'Payroll: send the FPS <strong>on or before payday</strong> and pay PAYE by the <strong>22nd</strong> (19th by post).',
    'VAT returns and payments are due <strong>1 calendar month and 7 days</strong> after the period ends.',
    'Companies keep records for <strong>6 years</strong> from the end of the last financial year they relate to.',
    'Sole traders keep records for at least <strong>5 years after the 31 January</strong> filing deadline.',
  ],

  sections: [
    {
      id: 'checklist', h2: 'What should you do in your books every month?', toc: 'The checklist',
      body: [
        '<p>Every month, bring your bank, sales and costs up to date, check what customers owe you and what you owe, deal with payroll and VAT, and then read the reports. The list below takes most small businesses a few hours if nothing has been left to pile up. If you would rather hand it over, our <a href="/uk/accounting/bookkeeping-services/">bookkeeping services</a> do this for you each week or month.</p>',
        { caption: 'Month-end bookkeeping checklist', head: ['Task', 'What it involves'], rows: [
          ['1. Reconcile bank accounts', 'Match every transaction in your software to the bank statement, and check the closing balances agree'],
          ['2. Reconcile cards and payment apps', 'Credit cards, card terminals, PayPal, Stripe and marketplace payouts, including fees and refunds'],
          ['3. Record all sales', 'Every invoice raised and every cash or card sale, with VAT shown separately if you are registered'],
          ['4. Record all bills and receipts', 'Supplier bills, expenses and receipts, attached to the transaction in your software'],
          ['5. Review aged debtors', 'Chase overdue customer invoices and note any you may not collect'],
          ['6. Review aged creditors', 'Check supplier balances against their statements and plan payments'],
          ['7. Payroll', 'Run payroll, send the FPS and EPS, post the wages journal, pay HMRC and your pension scheme'],
          ['8. VAT', 'Check the VAT codes on the month\'s transactions; file and pay if a return is due'],
          ['9. Loans and the director\'s loan account', 'Record loan repayments and interest, and any money taken out or paid in by directors'],
          ['10. Review the reports', 'Read the profit and loss and balance sheet, and compare with last month and your budget'],
        ], after: 'A general checklist. Your business may need extra steps, for example stock counts or project costing.' },
        '<p>Do the tasks in this order. Reconciling the bank first shows you what is missing, and the reports at the end are only reliable once everything above them is done.</p>',
      ],
    },
    {
      id: 'reconciliation', h2: 'How do you reconcile your bank accounts?', toc: 'Bank reconciliation',
      body: [
        '<p>You reconcile a bank account by matching each line on the statement to a transaction in your books, then checking that the closing balance in your software equals the balance on the statement for the same date. If the two balances differ, something has been missed, duplicated or entered on the wrong date.</p>',
        '<p>Bank feeds in cloud software bring the transactions in for you, but they do not make the books right on their own. You still need to say what each payment was for, split payments that cover more than one thing, and match receipts to the customer invoices they settle.</p>',
        '<h3>Common causes of a difference</h3>',
        '<ul><li>a payment entered twice: once from the bank feed and once by hand</li><li>a transfer between your own accounts recorded as income or as a cost</li><li>a card payout recorded net of fees, so sales and fees are both understated</li><li>a bank feed that stopped syncing for a few days</li></ul>',
        '<p>Do not leave unexplained items in a suspense account for months. Clear them each month while you still remember what they were.</p>',
      ],
    },
    {
      id: 'sales-and-costs', h2: 'How do you keep on top of invoices, bills and receipts?', toc: 'Invoices and receipts',
      body: [
        '<p>Record every sale and every cost in the month it happens, and keep the document behind it. HMRC expects you to be able to show what money came in and went out, what you owe and what you are owed, and the receipts, invoices and bank statements that support your accounts.</p>',
        '<p>For sales, check that each invoice has been raised and sent, and that paid invoices are marked as paid. Then run an aged debtors report and chase anything overdue. If you have not agreed payment terms with a business customer, the law treats a payment as late 30 days after the later of the invoice or delivery, and you can claim statutory interest at 8% plus the Bank of England base rate. Our guide to <a href="/resources/late-payment-interest/">claiming late payment interest</a> explains how.</p>',
        '<p>For costs, snap or forward receipts as you go and attach them in your software. Check supplier statements against your aged creditors report. A missing bill means your profit looks higher than it is, and you miss VAT you could reclaim.</p>',
      ],
    },
    {
      id: 'tax-tasks', h2: 'Which payroll and VAT deadlines fall in the month?', toc: 'Payroll and VAT dates',
      body: [
        '<p>Payroll runs on a monthly rhythm, and VAT usually on a quarterly one. These are the dates to build into your month-end routine.</p>',
        { caption: 'Regular payroll, VAT and Making Tax Digital deadlines', head: ['Task', 'Deadline'], rows: [
          ['Full Payment Submission (FPS)', 'On or before each payday'],
          ['Employer Payment Summary (EPS)', 'By the 19th of the tax month, if you need to send one'],
          ['Pay PAYE and National Insurance', 'By the 22nd of the next tax month (19th if paying by post). Quarterly by the 22nd after the quarter if HMRC agrees, usually for bills under £1,500 a month'],
          ['VAT return and payment', '1 calendar month and 7 days after the end of the VAT period'],
          ['VAT by Direct Debit', 'Collected 3 working days after the deadline. Set it up at least 3 working days before you file'],
          ['Making Tax Digital for Income Tax updates (2026-27)', '7 August, 7 November, 7 February and 7 May'],
        ], after: 'Source: GOV.UK pages on paying PAYE, reporting to HMRC, VAT returns and Making Tax Digital. Checked 13 October 2026.' },
        '<p>Tax months run from the 6th of one month to the 5th of the next, so the PAYE for the month to 5 November is due by 22 November. For the full list, including P60s and P11Ds, see our guide to <a href="/resources/employer-payroll-deadlines/">employer payroll deadlines</a>.</p>',
      ],
    },
    {
      id: 'record-keeping', h2: 'How long do you need to keep business records?', toc: 'How long to keep records',
      body: [
        '<p>A limited company must keep its records for 6 years from the end of the last company financial year they relate to. A sole trader must keep them for at least 5 years after the 31 January filing deadline for the tax year. VAT and payroll records have their own rules.</p>',
        { caption: 'How long to keep records (current rules)', head: ['Records', 'How long'], rows: [
          ['Limited company records', '6 years from the end of the last company financial year they relate to'],
          ['Sole trader records', 'At least 5 years after the 31 January deadline for that tax year'],
          ['VAT records', 'At least 6 years (10 years if you use the One Stop Shop scheme)'],
          ['Payroll records', '3 years from the end of the tax year they relate to'],
        ], after: 'Source: GOV.UK record-keeping guidance for companies, the self-employed, VAT and PAYE. Checked 13 October 2026.' },
        '<p>Keep company records for longer if a transaction covers more than one accounting period, if you bought an asset expected to last more than 6 years, if the Company Tax Return was filed late, or if HMRC has opened a compliance check. As an illustration, a sole trader\'s records for the 2025-26 tax year, with a return due by 31 January 2027, must be kept until at least 31 January 2032.</p>',
        '<p>The penalties are real. HMRC can fine a company £3,000 for not keeping accounting records, and a director can be disqualified. For payroll, HMRC can estimate what you owe and charge a penalty of up to £3,000.</p>',
      ],
    },
    {
      id: 'digital-records', h2: 'Can you still keep your books on a spreadsheet?', toc: 'Digital records',
      body: [
        '<p>Only in a limited way. All VAT-registered businesses must use Making Tax Digital for VAT, which means keeping digital records and filing returns through compatible software. A spreadsheet can be part of that, but data must pass between programs by digital links. HMRC says copying and pasting does not count.</p>',
        '<p>Sole traders and landlords now face the same change for Income Tax. Those with qualifying income over £50,000 in 2024-25 had to start on 6 April 2026. The threshold is £30,000 (based on 2025-26 income) from 6 April 2027, and £20,000 (based on 2026-27 income) from 6 April 2028. Our guide to <a href="/resources/making-tax-digital-for-income-tax/">Making Tax Digital for Income Tax</a> covers who must join.</p>',
        '<p>Even where the rules do not require software, cloud bookkeeping with bank feeds makes the monthly checklist much quicker, and keeps receipts in one place for as long as you need them.</p>',
      ],
    },
    {
      id: 'quarter-and-year-end', h2: 'What extra checks belong at quarter end and year end?', toc: 'Quarter and year end',
      body: [
        '<p>At quarter end, add a VAT check and a short review of the quarter. At year end, add the checks your accountant needs to prepare the annual accounts and tax return.</p>',
        '<ul><li><strong>Quarter end:</strong> review the VAT return before filing, check unusual VAT codes, and compare the quarter with your budget.</li><li><strong>Year end:</strong> count stock, update the fixed asset register, list accruals and prepayments, agree loan balances to lender statements, and agree the director\'s loan account.</li><li><strong>Both:</strong> clear the suspense account and any old unreconciled items.</li></ul>',
        '<p>A company\'s accounts are due at Companies House 9 months after its year end, and the Company Tax Return 12 months after. Clean monthly books make both quicker. If you want the monthly numbers turned into a report you can manage the business from, read our guide to <a href="/resources/management-accounts-explained/">management accounts</a>. Unsure who should do which part? See <a href="/resources/accountant-vs-bookkeeper/">accountant vs bookkeeper</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How often should a small business do its bookkeeping?', a: 'At least once a month, so you can reconcile the bank against a full statement and read accurate reports. Businesses with many transactions or tight cash often do it weekly. Leaving it until the VAT return or year end makes errors harder to find.' },
    { q: 'How long do I need to keep receipts for HMRC?', a: 'A limited company keeps them for 6 years from the end of the financial year they relate to. A sole trader keeps them for at least 5 years after the 31 January deadline for that tax year. VAT records are kept for at least 6 years.' },
    { q: 'Do I need bookkeeping software if I am VAT registered?', a: 'Yes. All VAT-registered businesses must use Making Tax Digital for VAT, which means keeping digital records and filing returns through compatible software. Data moving between programs must use digital links, and HMRC does not treat copying and pasting as a digital link.' },
    { q: 'What is month-end close in bookkeeping?', a: 'It is the routine of finishing the month\'s records: reconciling every account, recording all sales, bills and payroll, posting adjustments, and then reviewing the profit and loss and balance sheet so the figures can be relied on.' },
    { q: 'What happens if my bank reconciliation does not balance?', a: 'Something is missing, duplicated or dated wrongly. Compare the statement line by line with your software for the period, starting from the last date the balances agreed. Transfers between your own accounts and card payouts recorded net of fees are common causes.' },
  ],

  sources: [
    ['https://www.gov.uk/running-a-limited-company/company-and-accounting-records', 'GOV.UK: Company and accounting records'],
    ['https://www.gov.uk/self-employed-records/how-long-to-keep-your-records', 'GOV.UK: How long sole traders keep records'],
    ['https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records', 'GOV.UK: Keeping VAT records'],
    ['https://www.gov.uk/paye-for-employers/keeping-records', 'GOV.UK: PAYE records for employers'],
    ['https://www.gov.uk/running-payroll/reporting-to-hmrc', 'GOV.UK: Reporting payroll to HMRC'],
    ['https://www.gov.uk/pay-paye-tax', 'GOV.UK: Pay employers\' PAYE'],
    ['https://www.gov.uk/submit-vat-return', 'GOV.UK: Submit your VAT return'],
    ['https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat', 'HMRC: VAT Notice 700/22'],
  ],

  related: [
    '/resources/accountant-vs-bookkeeper/',
    '/resources/management-accounts-explained/',
    '/resources/employer-payroll-deadlines/',
    '/resources/making-tax-digital-for-income-tax/',
  ],
};
