// Guide: /resources/late-payment-interest/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, legislation.gov.uk and the Bank of England on 13 October 2026 (sources below).
// Statutory interest = 8% + Bank Rate in force on 30 June or 31 December before the debt became late (SI 2002/1675 art 4).
// Bank Rate 3.75% since 18 December 2025, so 11.75% for debts late from 1 January to 31 December 2026.
// Re-check after the 31 December 2026 reference date (Bank Rate decisions 5 November and December 2026)
// and the Commercial Payments Bill (introduced May 2026, not yet law).
export default {
  url: '/resources/late-payment-interest/',
  section: 'business-finance',
  title: 'Late Payment Interest on Invoices | Severin Finance',
  description: 'Claim 11.75% statutory interest (8% plus 3.75% Bank Rate) and £40 to £100 compensation when a business customer pays late. Free consultation.',
  h1: 'How to claim late payment interest on unpaid invoices',
  crumb: 'Late payment interest',
  summary: 'Charge 8% plus Bank Rate (11.75% in 2026) and a £40 to £100 fixed sum on late business invoices.',
  topic: 'Statutory interest on late commercial payments',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/invoice-finance/', label: 'Our invoice finance service',
    boxTitle: 'Slow payers hurting cash?', text: 'We check what late payers owe you and arrange invoice finance with lenders, so you are not waiting on customers to pay wages and suppliers.',
  },

  hero: {
    answer: 'If another business pays you late, you can claim statutory interest at 8% plus the Bank of England base rate. For debts that became late in 2026, that is 11.75% a year. You can also add a fixed sum of £40, £70 or £100 per invoice, depending on its size, plus reasonable recovery costs.',
  },

  tldr: [
    'Statutory interest is <strong>8% plus Bank Rate</strong>: <strong>11.75%</strong> a year for debts that became late between 1 January and 31 December 2026.',
    'The base rate used is the one in force on <strong>30 June</strong> or <strong>31 December</strong>, and it stays fixed for that debt.',
    'Fixed compensation per invoice: <strong>£40</strong> (under £1,000), <strong>£70</strong> (£1,000 to £9,999.99), <strong>£100</strong> (£10,000 or more).',
    'With no agreed date, an invoice is late <strong>30 days</strong> after the customer gets it or you deliver, whichever is later.',
    'It applies only between businesses (and public bodies), and not if your contract sets a substantial remedy of its own.',
  ],

  sections: [
    {
      id: 'can-you-charge', h2: 'Can you charge interest on a late invoice?', toc: 'Can you charge it',
      body: [
        '<p>Yes. The Late Payment of Commercial Debts (Interest) Act 1998 gives every business supplier a right to interest and compensation when a business or public sector customer pays late, even if your terms say nothing about it. Interest helps, but it does not put cash in the bank today; that is where our <a href="/uk/business-finance/invoice-finance/">invoice finance</a> service comes in, and we cover it below.</p>',
        '<p>The Act applies when both you and your customer are acting in the course of a business, including professions, government departments and local or public authorities. It does not apply to sales to consumers, to employment contracts, or to consumer credit agreements and mortgages. This guide is about customers who owe you money. If HMRC is charging you interest, see our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a>.</p>',
      ],
    },
    {
      id: 'when-late', h2: 'When does an invoice count as late?', toc: 'When it is late',
      body: [
        '<p>An invoice is late the day after the agreed payment date. If you never agreed a date, it is late 30 days after the customer receives the invoice or you deliver the goods or service, whichever is later.</p>',
        { caption: 'When statutory interest starts', head: ['Situation', 'Payment is late after'], rows: [
          ['You agreed a payment date', 'That date'],
          ['No payment date agreed', '30 days from receipt of the invoice or delivery, whichever is later'],
          ['Customer is a public authority', 'Usually 30 days, even if a longer date was agreed'],
          ['Customer is another business', 'Usually up to 60 days; longer terms only if they are not grossly unfair to you'],
          ['Goods or work must be accepted or checked first', 'The check is treated as ending within 30 days, unless a longer period is agreed and is not grossly unfair'],
        ], after: 'Source: GOV.UK, Late commercial payments, and section 4 of the 1998 Act. Checked 13 October 2026.' },
        '<p>Put your payment terms in writing, on the quote or contract and on every invoice. A clear due date makes the claim simple.</p>',
      ],
    },
    {
      id: 'rate', h2: 'What rate of statutory interest can you claim?', toc: 'The interest rate',
      body: [
        '<p>The rate is 8% a year above the Bank of England base rate (Bank Rate). The base rate used is not today\'s rate: it is the rate in force on 30 June or 31 December immediately before the debt became late, and that rate then applies for as long as the debt is outstanding.</p>',
        { caption: 'Statutory late payment interest rates', head: ['Debt became late between', 'Reference date', 'Bank Rate then', 'Statutory interest'], rows: [
          ['1 January and 30 June 2026', '31 December 2025', '3.75%', '11.75% a year'],
          ['1 July and 31 December 2026', '30 June 2026', '3.75%', '11.75% a year'],
          ['1 January and 30 June 2027', '31 December 2026', 'Not yet known', '8% plus Bank Rate on 31 December 2026'],
        ], after: 'Sources: The Late Payment of Commercial Debts (Rate of Interest) (No. 3) Order 2002, article 4; Bank of England, Bank Rate (3.75% since 18 December 2025). The next Bank Rate decision is on 5 November 2026.' },
        '<p>Statutory interest is simple interest, not compound. You cannot claim it if your contract sets its own interest rate or other remedy for late payment that counts as "substantial". A contract term that removes the right to interest without a substantial remedy in its place is void. With public authorities, you cannot agree a lower rate.</p>',
      ],
    },
    {
      id: 'worked-example', h2: 'How do you work out late payment interest?', toc: 'Working it out',
      body: [
        '<p>Multiply the unpaid amount by the rate to get a year\'s interest, divide by 365 for a daily figure, then multiply by the number of days late.</p>',
        { caption: 'Worked example: a £10,000 invoice paid 60 days late in 2026 (illustrative)', head: ['Step', 'Calculation', 'Amount'], rows: [
          ['Interest for a year', '£10,000 × 11.75%', '£1,175.00'],
          ['Daily interest', '£1,175 ÷ 365', '£3.22'],
          ['Interest for 60 days', '£1,175 × 60 ÷ 365', '£193.15'],
          ['Fixed compensation', 'Debt of £10,000 or more', '£100.00'],
          ['Total you can claim on top of the invoice', '', '£293.15'],
        ], after: 'Illustrative figures. Interest keeps running daily until the customer pays. The Small Business Commissioner\'s website has a free late payment interest calculator.' },
        '<p>On a £1,000 invoice paid 30 days late, interest is about £9.66 and the fixed sum is £70. On small invoices, the fixed sum is often worth more than the interest.</p>',
      ],
    },
    {
      id: 'compensation', h2: 'What fixed compensation can you add?', toc: 'Fixed compensation',
      body: [
        '<p>Once interest starts to run, you can add a fixed sum to each late invoice. The amount is set by section 5A of the Act and depends on the size of the debt.</p>',
        { caption: 'Fixed sums for late payment', head: ['Amount of the debt', 'Fixed sum'], rows: [
          ['Up to £999.99', '£40'],
          ['£1,000 to £9,999.99', '£70'],
          ['£10,000 or more', '£100'],
        ], after: 'Source: GOV.UK, Claim debt recovery costs; section 5A of the 1998 Act. You can charge the fixed sum once for each payment.' },
        '<p>If your reasonable costs of recovering the debt, such as a collection agency\'s fee, are more than the fixed sum, you can claim the difference too. Keep a record of what you spend.</p>',
      ],
    },
    {
      id: 'how-to-claim', h2: 'How do you claim late payment interest?', toc: 'How to claim',
      body: [
        '<p>Write to the customer and ask for it. There is no form and nothing to register; GOV.UK suggests sending a new invoice if you add interest to the amount owed.</p>',
        '<ol><li><strong>Check your terms.</strong> Confirm the due date and that your contract does not set its own interest rate or remedy.</li><li><strong>Send a reminder</strong> when the invoice falls due, stating that statutory interest and compensation will apply.</li><li><strong>Send a new invoice or statement</strong> showing the original amount, the interest to date, the daily rate and the fixed sum.</li><li><strong>Send a final letter</strong> giving a deadline, and say you will start a court claim if it is not paid.</li><li><strong>Try mediation or the Small Business Commissioner</strong> if the customer is a larger business and the dispute is stuck.</li><li><strong>Make a court claim for money</strong> if needed. In England and Wales you can apply to the county court online or by post. Scotland and Northern Ireland have their own processes.</li></ol>',
        '<p>Many businesses waive the interest for a good customer who pays as soon as reminded, and keep it in reserve for persistent late payers. That is your choice: the right stays in place either way until the debt is settled.</p>',
      ],
    },
    {
      id: 'invoice-finance', h2: 'When does invoice finance help with late payers?', toc: 'Invoice finance',
      body: [
        '<p>Invoice finance helps when the problem is waiting for cash, not getting paid at all. A provider advances most of an invoice\'s value soon after you raise it and pays you the rest, less fees, when your customer pays. Interest compensates you after the event; invoice finance keeps wages, suppliers and HMRC paid while you wait.</p>',
        '<ul><li><strong>Factoring:</strong> the provider also runs your credit control and chases customers.</li><li><strong>Invoice discounting:</strong> you keep chasing customers yourself, usually without them knowing.</li><li><strong>Recourse:</strong> you repay the advance if a customer does not pay, so it does not remove bad debt risk unless you pay for non-recourse cover.</li></ul>',
        '<p>Our guide to <a href="/resources/factoring-vs-invoice-discounting/">factoring vs invoice discounting</a> compares the two, and our <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a> guide shows how to spot the gap early. Finance is subject to the lender\'s approval.</p>',
      ],
    },
    {
      id: 'law-changes', h2: 'Is late payment law changing?', toc: 'Changes coming',
      body: [
        '<p>Possibly. The Commercial Payments Bill, introduced to Parliament in May 2026, would cap most payment terms between businesses at 60 days and make late payment interest at 8% above base rate mandatory, so contracts could no longer replace it. It would also give the Small Business Commissioner new powers to investigate poor payers and settle disputes.</p>',
        '<p>It is not law yet. The government says there will be a lead-in time and a transition period before the measures start, and they will not apply to past contracts. Until then, the 1998 Act rules in this guide apply.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the statutory late payment interest rate in 2026?', a: '11.75% a year: 8% plus the Bank of England base rate of 3.75%. That applies to business debts that became late at any time between 1 January and 31 December 2026, because Bank Rate was 3.75% on both 31 December 2025 and 30 June 2026.' },
    { q: 'Can I charge late payment interest to a sole trader?', a: 'Yes, if the sole trader bought from you for their business. The Act covers contracts where both sides act in the course of a business, whatever their legal form. It does not cover sales to individuals buying as consumers.' },
    { q: 'Do I need late payment terms in my contract to claim interest?', a: 'No. The right to statutory interest and compensation is implied into business contracts by the 1998 Act. You only lose it if the contract sets its own substantial remedy for late payment, such as a fair contractual interest rate.' },
    { q: 'Can I claim £40 compensation on every late invoice?', a: 'Yes. The fixed sum applies to each late payment: £40 for a debt under £1,000, £70 from £1,000 to £9,999.99, and £100 for £10,000 or more. You can charge it once for each payment, not once a month.' },
    { q: 'Does the interest rate change if Bank Rate falls?', a: 'Not for an existing debt. The rate is fixed using Bank Rate on the 30 June or 31 December before the debt became late, and it stays at that level until the debt is paid. A change only affects debts that become late in a later half-year.' },
  ],

  sources: [
    ['https://www.gov.uk/late-commercial-payments-interest-debt-recovery', 'GOV.UK: Late commercial payments'],
    ['https://www.gov.uk/late-commercial-payments-interest-debt-recovery/claim-debt-recovery-costs', 'GOV.UK: Claim debt recovery costs'],
    ['https://www.legislation.gov.uk/ukpga/1998/20/contents', 'legislation.gov.uk: Late Payment of Commercial Debts (Interest) Act 1998'],
    ['https://www.legislation.gov.uk/uksi/2002/1675/article/4', 'legislation.gov.uk: Late payment reference rate'],
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
    ['https://www.gov.uk/government/publications/commercial-payments-bill-factsheets/commercial-payments-bill-overview', 'GOV.UK: Commercial Payments Bill overview'],
    ['https://www.smallbusinesscommissioner.gov.uk/', 'Small Business Commissioner'],
    ['https://www.gov.uk/make-court-claim-for-money', 'GOV.UK: Make a court claim for money'],
  ],

  related: [
    '/resources/factoring-vs-invoice-discounting/',
    '/resources/invoice-finance-vs-overdraft/',
    '/resources/cash-flow-forecasting/',
  ],
};
