// Guide: /resources/factoring-vs-invoice-discounting/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK (VAT Notices 701/49, 700/18 and 731) and legislation.gov.uk on 13 October 2026 (sources below).
// British Business Bank pages returned 403 on 13 October 2026, so no advance-rate percentages, fee ranges or turnover
// thresholds are given: the guide explains what drives them instead.
// VAT: discount charge exempt, service/admin and credit protection charges standard-rated (Notice 701/49 s5.5).
// No VAT bad debt relief while a debt is absolutely assigned (Notice 700/18 s3.12). SI 2018/1254: contracts from 31 December 2018.
export default {
  url: '/resources/factoring-vs-invoice-discounting/',
  section: 'business-finance',
  title: 'Factoring vs Invoice Discounting | Severin Finance',
  description: 'Factoring vs invoice discounting: who collects, confidentiality, recourse vs non-recourse, spot factoring, VAT on fees and eligibility. Free consultation.',
  h1: 'Factoring vs invoice discounting: what is the difference?',
  crumb: 'Factoring vs invoice discounting',
  summary: 'Factoring hands over credit control; invoice discounting keeps it with you, often confidentially.',
  topic: 'Invoice factoring compared with invoice discounting',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/invoice-finance/', label: 'Our invoice finance service',
    boxTitle: 'Factoring or discounting?', text: 'We review your sales ledger and credit control, then arrange the right type of invoice finance with lenders.',
  },

  hero: {
    answer: 'The difference is who collects the money. With factoring, the provider runs your sales ledger and chases your customers, so they usually know. With invoice discounting, you keep collecting as normal and it is often confidential. Discounting usually costs less but needs strong credit control. Either can be recourse, where you carry bad debts, or non-recourse.',
  },

  tldr: [
    '<strong>Factoring:</strong> the provider collects from your customers and runs your sales ledger.',
    '<strong>Invoice discounting:</strong> you collect, the provider funds you, and customers often need not know.',
    '<strong>Recourse</strong> means you repay the advance if a customer does not pay; <strong>non-recourse</strong> moves that risk to the provider for approved customers, for a higher fee.',
    '<strong>Selective or spot factoring</strong> funds one invoice, or a few you choose, instead of the whole ledger.',
    'For VAT, the discount charge is <strong>exempt</strong> but service and credit protection fees are <strong>standard-rated</strong>.',
  ],

  sections: [
    {
      id: 'difference', h2: 'How do factoring and invoice discounting differ?', toc: 'The difference',
      body: [
        '<p>Both release cash from unpaid invoices to business customers. The main difference is collections: a factor takes over your credit control, while an invoice discounter leaves it with you. Our <a href="/uk/business-finance/invoice-finance/">invoice finance</a> team looks at how you run your sales ledger today and which of the two fits.</p>',
        { caption: 'Factoring and invoice discounting compared', head: ['Feature', 'Factoring', 'Invoice discounting'], rows: [
          ['Who chases customers', 'The provider', 'You'],
          ['Do customers know', 'Usually yes: invoices tell them to pay the provider', 'Often not (confidential), though some facilities are disclosed'],
          ['Sales ledger', 'Run by the provider', 'Run by you, with regular reports to the provider'],
          ['Service fee', 'Higher, because it includes credit control', 'Usually lower'],
          ['Credit control needed', 'Less: the provider does it', 'Strong, with clear processes and up-to-date records'],
          ['Usually suits', 'Smaller or newer businesses without a credit controller', 'Established businesses with good systems'],
        ], after: 'General features only. Facilities vary by provider and are subject to approval.' },
        '<p>Both are a form of borrowing, and both usually need security, so the choice is mainly about control, cost and how your customers see you. If you are still deciding whether invoice finance beats your bank facility, read <a href="/resources/invoice-finance-vs-overdraft/">invoice finance vs overdraft</a> first.</p>',
      ],
    },
    {
      id: 'factoring', h2: 'How does invoice factoring work?', toc: 'Factoring',
      body: [
        '<p>You assign your invoices to the factor, it pays you most of their value straight away, and it collects payment from your customers. When a customer pays, the factor sends you the balance, less its fees.</p>',
        '<ol><li><strong>You invoice your customer</strong> as normal, with a notice telling them to pay the factor.</li><li><strong>You send the invoice to the factor</strong>, usually through its online system.</li><li><strong>The factor advances an agreed share</strong>, often within a day or so of the invoice being accepted.</li><li><strong>The factor chases the customer</strong> under its credit control process.</li><li><strong>The customer pays the factor</strong>, and you receive the rest, less the service fee and discount charge.</li></ol>',
        '<p>The service can save you employing a credit controller. The trade-off is that someone else speaks to your customers about money, so ask how the provider handles calls, reminders and disputes before you sign.</p>',
      ],
    },
    {
      id: 'discounting', h2: 'How does invoice discounting work?', toc: 'Invoice discounting',
      body: [
        '<p>You keep running your sales ledger and chasing customers yourself, and the provider lends against your outstanding invoices. Customers usually pay into a bank account that is in your name but controlled by the provider, so the arrangement can stay confidential.</p>',
        '<p>Because the provider relies on your systems, it will want regular ledger reports and will check your records from time to time, sometimes by visiting. It will look closely at how quickly customers pay, how often invoices are disputed, and whether credit notes are raised promptly. If standards slip, a provider can move a confidential facility to a disclosed one, or reduce what it lends. A clean month-end routine, like the one in our <a href="/resources/monthly-bookkeeping-checklist/">monthly bookkeeping checklist</a>, makes this much easier.</p>',
      ],
    },
    {
      id: 'recourse', h2: 'What is the difference between recourse and non-recourse?', toc: 'Recourse',
      body: [
        '<p>It is about who carries the loss if a customer does not pay. With recourse finance, which is the most common, you repay the advance on any invoice that stays unpaid after a set period. With non-recourse finance, the provider takes the risk of an approved customer becoming unable to pay, for a higher fee.</p>',
        '<ul><li><strong>Credit limits:</strong> non-recourse cover normally applies only up to a limit the provider sets for each customer.</li><li><strong>Disputes are not covered:</strong> if a customer refuses to pay because of a complaint about your work, you usually still carry the loss.</li><li><strong>Exclusions:</strong> read what counts as a covered event, and how long you must wait for a claim.</li></ul>',
        '<p>Factoring and invoice discounting can each be recourse or non-recourse. If bad debts are a real risk in your sector, compare non-recourse finance with recourse finance plus separate credit insurance.</p>',
      ],
    },
    {
      id: 'spot-factoring', h2: 'What is selective or spot factoring?', toc: 'Spot factoring',
      body: [
        '<p>Selective factoring, also called spot factoring or single invoice finance, funds one invoice or a few you choose, instead of your whole sales ledger. It suits a business with one large or slow-paying customer, or one that only needs funding at certain times of year.</p>',
        '<p>You usually pay a fee for each invoice funded, with no long minimum term. That flexibility can make it dearer per invoice than a whole-ledger facility, so compare the cost over a year if you expect to use it often. Many providers only accept invoices to larger, creditworthy customers.</p>',
      ],
    },
    {
      id: 'eligibility', h2: 'Who can get factoring or invoice discounting?', toc: 'Eligibility',
      body: [
        '<p>Most providers want a business that invoices other businesses or public bodies on credit terms, for goods delivered or work completed. They look at your customers as much as at you.</p>',
        { caption: 'What providers usually look at', head: ['Area', 'What helps'], rows: [
          ['Customers', 'Creditworthy businesses or public bodies, with no single customer making up too much of the ledger'],
          ['Invoices', 'For finished work or delivered goods, not stage payments, retentions or work billed in advance'],
          ['Payment record', 'Customers who pay within your terms, with few disputes or credit notes'],
          ['Your records', 'An up-to-date sales ledger, aged debtors list and recent accounts'],
          ['Credit control', 'Essential for invoice discounting; less so for factoring'],
          ['Existing lenders', 'Agreement from any lender that already has a charge over the company'],
        ], after: 'The advance rate and fees reflect these factors, so two businesses of the same size can get very different offers.' },
        '<p>Some customer contracts ban you from assigning debts. For contracts made on or after 31 December 2018, that kind of term generally has no effect where a small or medium-sized supplier assigns its invoices, under the Business Contract Terms (Assignment of Receivables) Regulations 2018. There are exceptions, so we check your contracts first.</p>',
      ],
    },
    {
      id: 'costs-vat', h2: 'What does it cost, and how is VAT charged on the fees?', toc: 'Costs and VAT',
      body: [
        '<p>You usually pay a service fee and a discount charge. The service fee covers running the facility, and for factoring, your credit control. The discount charge works like interest on the money drawn. Watch for minimum fees, set-up fees, notice periods and charges for ending the contract early.</p>',
        { caption: 'VAT on invoice finance charges', head: ['Charge', 'VAT treatment'], rows: [
          ['Discount or interest charge', 'Exempt (a supply of credit)'],
          ['Service, administration or credit management fee', 'Standard-rated'],
          ['Credit protection on non-recourse facilities', 'Standard-rated'],
          ['Assigning your invoices to the provider', 'Not a supply, so no VAT'],
        ], after: 'Source: HMRC VAT Notice 701/49, section 5. Checked 13 October 2026.' },
        '<p>Two more VAT points. If you use the cash accounting scheme, you account for VAT when the factor collects from your customer, on the full amount collected, not the smaller advance paid to you. And you cannot claim VAT bad debt relief on a debt while it remains assigned to a factor; relief may be possible once it is reassigned back to you. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> can check your returns.</p>',
        '<p>Charging statutory interest on late payers can offset part of the cost; see our guide to <a href="/resources/late-payment-interest/">late payment interest</a>. Finance is subject to the provider\'s approval.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is invoice discounting cheaper than factoring?', a: 'Usually, yes. Invoice discounting has a lower service fee because you do your own credit control. The discount charge on the money drawn works in a similar way for both. Compare the total cost, including minimum fees and any credit protection.' },
    { q: 'Will my customers know I use invoice discounting?', a: 'Often not. Confidential invoice discounting lets you collect as normal, with customers paying into an account in your name that the provider controls. Some facilities are disclosed, and a provider can move to disclosed if it has concerns about your records.' },
    { q: 'What happens if a customer does not pay under factoring?', a: 'On a recourse facility, which is the most common, you repay the advance on that invoice after a set period. On a non-recourse facility, the provider bears the loss if an approved customer cannot pay, within its credit limit, but usually not if the customer is disputing the work.' },
    { q: 'Do I pay VAT on factoring fees?', a: 'On some of them. The discount charge is exempt because it is a supply of credit. Service, administration and credit management fees, and charges for non-recourse credit protection, are standard-rated, according to HMRC VAT Notice 701/49.' },
    { q: 'Can a new business use factoring?', a: 'Sometimes. Because providers lend against your customers\' invoices, a short trading history matters less than for a loan. Factoring is often easier than invoice discounting for a new business, because the provider runs the credit control. Approval is never guaranteed.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/vat-notice-70149-finance/vat-notice-70149-finance', 'GOV.UK: VAT Notice 701/49 Finance'],
    ['https://www.gov.uk/guidance/relief-from-vat-on-bad-debts-notice-70018', 'GOV.UK: VAT Notice 700/18 Relief from VAT on bad debts'],
    ['https://www.gov.uk/guidance/vat-cash-accounting-scheme-notice-731', 'GOV.UK: VAT Notice 731 Cash accounting scheme'],
    ['https://www.legislation.gov.uk/uksi/2018/1254/made', 'legislation.gov.uk: Business Contract Terms (Assignment of Receivables) Regulations 2018'],
    ['https://www.gov.uk/late-commercial-payments-interest-debt-recovery', 'GOV.UK: Late commercial payments'],
  ],

  related: [
    '/resources/invoice-finance-vs-overdraft/',
    '/resources/late-payment-interest/',
    '/resources/monthly-bookkeeping-checklist/',
    '/resources/cash-flow-forecasting/',
  ],
};
