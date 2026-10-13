// Guide: /resources/invoice-finance-vs-overdraft/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, legislation.gov.uk and the Bank of England on 13 October 2026 (sources below).
// Bank Rate 3.75% (held 17 September 2026; next decision 5 November 2026). Re-check after each MPC decision.
// British Business Bank pages returned 403 on 13 October 2026, so no advance-rate percentages or fee ranges are given:
// the guide explains what drives them instead. Assignment of receivables: SI 2018/1254 (contracts from 31 December 2018).
export default {
  url: '/resources/invoice-finance-vs-overdraft/',
  section: 'business-finance',
  title: 'Invoice Finance vs Overdraft: Which Fits? | Severin Finance',
  description: 'Invoice finance vs a business overdraft: how each works, what drives the cost, security, flexibility and which suits your business. Free consultation.',
  h1: 'Invoice finance vs overdraft: which is better for your business?',
  crumb: 'Invoice finance vs overdraft',
  summary: 'An overdraft is a fixed limit; invoice finance grows with your sales ledger. How to choose.',
  topic: 'Invoice finance compared with a business overdraft',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/invoice-finance/', label: 'Our invoice finance service',
    boxTitle: 'Overdraft not keeping up?', text: 'We review your sales ledger and arrange invoice finance with lenders, comparing it with what your bank offers.',
  },

  hero: {
    answer: 'An overdraft is a fixed borrowing limit on your bank account, with interest charged only on what you use, and the bank can usually review or withdraw it. Invoice finance advances most of the value of unpaid business invoices, so the funding grows as you invoice more. It usually suits businesses waiting 30 to 90 days for customers to pay.',
  },

  tldr: [
    'An <strong>overdraft</strong> is a set limit agreed with your bank, usually reviewed every year and often repayable on demand.',
    '<strong>Invoice finance</strong> is linked to your unpaid invoices, so the amount available rises and falls with your sales.',
    'Overdraft interest usually tracks <strong>Bank Rate</strong>, which is <strong>3.75%</strong> (next decision 5 November 2026), plus a margin and fees.',
    'Invoice finance charges a <strong>service fee</strong> plus a <strong>discount charge</strong> on the money drawn, and contracts often have minimum terms.',
    'Both may need security: a <strong>personal guarantee</strong>, a charge over company assets, or both.',
  ],

  sections: [
    {
      id: 'difference', h2: 'What is the difference between invoice finance and an overdraft?', toc: 'The difference',
      body: [
        '<p>An overdraft lets you go below zero on your business current account up to an agreed limit. Invoice finance lends against the money your business customers owe you, and the limit moves with your sales ledger. If you are deciding between the two, our <a href="/uk/business-finance/invoice-finance/">invoice finance</a> team compares a facility with what your bank offers before you commit.</p>',
        { caption: 'Invoice finance and an overdraft compared', head: ['Feature', 'Business overdraft', 'Invoice finance'], rows: [
          ['What it lends against', 'Your business as a whole, often with a personal guarantee', 'Your unpaid invoices to business customers'],
          ['How much', 'A fixed limit set by the bank', 'A share of approved invoices, so it changes as you invoice'],
          ['Cost', 'Interest on the amount overdrawn, plus arrangement and renewal fees', 'A service fee plus a discount charge on funds drawn, plus any extras in the contract'],
          ['Term', 'Usually reviewed each year; often repayable on demand', 'Often a minimum term with a notice period to leave'],
          ['Who chases customers', 'You', 'You (invoice discounting) or the provider (factoring)'],
          ['Suits', 'Short, irregular dips in cash', 'Steady business-to-business sales on credit terms'],
        ], after: 'General features only. Every facility is subject to the lender\'s approval and its own terms.' },
        '<p>The key question is what is causing the cash gap. If it is the wait for customers to pay, invoice finance tackles the cause directly. If it is a short dip, such as a quarterly VAT bill or a quiet month, an overdraft is usually simpler.</p>',
      ],
    },
    {
      id: 'cost', h2: 'Which costs more, invoice finance or an overdraft?', toc: 'Costs',
      body: [
        '<p>It depends on how much you use each one. An overdraft is often cheaper for small, short dips, because you pay interest only on the days you are overdrawn. Invoice finance usually has a fixed service fee, so it costs more if you barely draw on it and can work out better value if you use it heavily.</p>',
        '<h3>What an overdraft costs</h3>',
        '<ul><li><strong>Interest</strong> on the overdrawn balance, usually set as a margin above the Bank of England base rate. Bank Rate is 3.75%, and the next decision is on 5 November 2026.</li><li><strong>Arrangement and renewal fees</strong> when the limit is set up and reviewed.</li><li><strong>Higher charges</strong> if you go over the agreed limit.</li></ul>',
        '<h3>What invoice finance costs</h3>',
        '<ul><li><strong>A service fee</strong>, usually a percentage of your turnover or a fixed monthly amount. It is higher for factoring, because the provider runs your credit control.</li><li><strong>A discount charge</strong>, which works like interest on the money you have drawn.</li><li><strong>Extras</strong> such as set-up fees, credit protection on non-recourse facilities, minimum monthly fees and charges for leaving early.</li></ul>',
        '<p>For invoice finance, the advance rate and fees depend on how creditworthy your customers are, how many there are, how much of your ledger sits with one customer, how quickly they pay, how often invoices are disputed, and your sector. Construction and staged-payment work is usually harder to fund. Ask any provider for the total cost in a typical month, not just the headline rates.</p>',
      ],
    },
    {
      id: 'flexibility', h2: 'Which is more flexible as your sales change?', toc: 'Flexibility',
      body: [
        '<p>Invoice finance is more flexible when you are growing, because each new invoice adds to the funding available. An overdraft stays at the same limit until the bank agrees to change it, which can mean asking for more just when your accounts look stretched.</p>',
        '<p>The same link works the other way. If sales fall, invoice finance shrinks with them, and so does the cash you can draw. Providers also leave some invoices out of the funding, such as debts that are well overdue, disputed, owed by connected companies, or owed by a customer that also sells to you. They may cap how much they will fund against any one customer.</p>',
        '<p>An overdraft gives you cash you can use for anything, whenever you need it, up to the limit. Its weakness is certainty: many business overdrafts are repayable on demand, and the bank reviews the limit each year. A business that relies on an overdraft every month, rather than for occasional dips, may be using the wrong tool.</p>',
      ],
    },
    {
      id: 'security', h2: 'What security does each one need?', toc: 'Security',
      body: [
        '<p>Both are often secured. For an overdraft, banks commonly ask a director of a limited company for a personal guarantee, and may take a charge over the company\'s assets. For invoice finance, the provider takes the invoices themselves as security and usually also takes a charge over the company, plus a guarantee or indemnity from the directors.</p>',
        '<ul><li><strong>Registering the charge:</strong> a charge given by a limited company must be registered at Companies House within 21 days, starting the day after it is created. It then appears on the company\'s public record.</li><li><strong>Existing lenders:</strong> if your bank already has a charge over the company, the invoice finance provider will usually need the bank to agree which lender has first claim on the invoices.</li><li><strong>Guarantees:</strong> read what you are signing and take independent legal advice. Our guide to <a href="/resources/personal-guarantees-explained/">personal guarantees</a> explains limited and unlimited guarantees.</li></ul>',
        '<p>With most invoice finance, called recourse finance, you still carry the risk of a customer not paying: you repay the advance on that invoice. Non-recourse facilities cover approved customers up to set limits, for a higher fee.</p>',
      ],
    },
    {
      id: 'customers', h2: 'Will your customers know, and who chases them?', toc: 'Your customers',
      body: [
        '<p>With an overdraft, nothing changes for your customers. With invoice finance, it depends on the type. Under invoice discounting you keep collecting payments yourself and it is often confidential. Under factoring the provider runs your sales ledger and chases payment, so customers usually know. Our guide to <a href="/resources/factoring-vs-invoice-discounting/">factoring vs invoice discounting</a> compares the two in detail.</p>',
        '<p>Some customer contracts say you cannot assign the debts to anyone else. For contracts made on or after 31 December 2018, that kind of term generally has no effect when a small or medium-sized supplier assigns its invoices, under the Business Contract Terms (Assignment of Receivables) Regulations 2018. Larger suppliers and some types of contract are excluded, so we check your customer terms first.</p>',
      ],
    },
    {
      id: 'which-fits', h2: 'Which one suits your business?', toc: 'Which fits',
      body: [
        '<p>Invoice finance suits businesses that sell to other businesses on credit and are held back by the wait for payment. An overdraft suits businesses that are paid quickly, or that sell mainly to consumers, and need a buffer for occasional dips.</p>',
        { caption: 'Which option tends to fit (general guide)', head: ['Your situation', 'Usually fits better', 'Why'], rows: [
          ['Recruitment agency paying contractors weekly, invoicing monthly', 'Invoice finance', 'Funding grows with each placement invoiced'],
          ['Wholesaler with steady trade customers on 60-day terms', 'Invoice finance', 'Cash is released when the invoice is raised, not when it is paid'],
          ['Shop, café or online seller paid at the time of sale', 'Overdraft', 'There are no business invoices to fund'],
          ['Firm with a VAT bill or a quiet month every so often', 'Overdraft', 'Short dips cost less on daily interest'],
          ['Contractor with stage payments and retentions', 'Either, with care', 'Applications for payment are harder to fund; a specialist provider may be needed'],
          ['One large customer on long terms', 'Single invoice finance', 'Funds that invoice only, without signing up the whole ledger'],
        ], after: 'A general guide, not a recommendation for your business. Finance is subject to status and lender approval.' },
        '<p>Before choosing, build a forecast of when cash comes in and goes out. Our guide to <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a> shows how, and it is the first thing a lender will want to see.</p>',
      ],
    },
    {
      id: 'both', h2: 'Can you have invoice finance and an overdraft at the same time?', toc: 'Using both',
      body: [
        '<p>Yes, many businesses do, but the lenders need to agree how their security fits together. A common pattern is invoice finance for working capital, with a smaller overdraft for day-to-day timing, and a <a href="/uk/business-finance/business-loans/">business loan</a> for one-off investment.</p>',
        '<p>If you move from an overdraft to invoice finance, the first advance is often used to clear the overdraft. Check the notice period and any minimum term in the invoice finance contract before you sign, because leaving early can carry a fee. Keep your sales ledger up to date, too: providers rely on it, and our <a href="/uk/accounting/bookkeeping-services/">bookkeeping team</a> can keep it in the shape they expect.</p>',
        '<p>Whatever you use, charge customers who pay late. Under the 1998 late payment law you can claim statutory interest at 8% plus Bank Rate, which is 11.75% a year for debts that became late in 2026. See our guide to <a href="/resources/late-payment-interest/">late payment interest</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is invoice finance cheaper than an overdraft?', a: 'Not always. An overdraft is often cheaper for small, short dips because you pay interest only while overdrawn. Invoice finance has a service fee as well as a discount charge, so it can work out better value when you draw on it heavily and your sales are growing.' },
    { q: 'Can my bank take away my overdraft?', a: 'Often, yes. Many business overdrafts are repayable on demand, and banks review the limit regularly, usually each year. Check your facility letter for the exact terms. Invoice finance usually runs for a minimum term, with a notice period for either side to end it.' },
    { q: 'Does invoice finance need a personal guarantee?', a: 'Often. Providers usually take the invoices and a charge over the company as security, and many also ask directors for a guarantee or an indemnity covering losses from problems such as disputed or invalid invoices. Take independent legal advice before signing.' },
    { q: 'Can I use invoice finance if I sell to consumers?', a: 'Usually not. Invoice finance funds invoices owed by other businesses or public bodies on credit terms. If your customers pay at the time of sale, an overdraft, a business loan or another product is more likely to fit.' },
    { q: 'Will invoice finance replace my overdraft?', a: 'It can. Many businesses use the first advance to clear an overdraft and then fund working capital from their invoices. Others keep a small overdraft alongside it. Both lenders must agree how their security ranks before the facility starts.' },
  ],

  sources: [
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
    ['https://www.gov.uk/late-commercial-payments-interest-debt-recovery', 'GOV.UK: Late commercial payments'],
    ['https://www.gov.uk/guidance/register-a-charge-mortgage-for-a-limited-company', 'GOV.UK: Register a charge for a limited company'],
    ['https://www.legislation.gov.uk/uksi/2018/1254/made', 'legislation.gov.uk: Business Contract Terms (Assignment of Receivables) Regulations 2018'],
    ['https://www.legislation.gov.uk/uksi/2002/1675/article/4', 'legislation.gov.uk: Late payment reference rate'],
  ],

  related: [
    '/resources/factoring-vs-invoice-discounting/',
    '/resources/late-payment-interest/',
    '/resources/cash-flow-forecasting/',
    '/resources/personal-guarantees-explained/',
  ],
};
