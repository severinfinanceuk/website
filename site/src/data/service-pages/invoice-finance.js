// Invoice finance: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Business finance page: we do not yet know whether Severin lends directly or arranges finance
// through providers (credit broker), or its FCA status. Copy says "we arrange"; fees, provider
// panel and turnaround are placeholders. No approval guarantees.
// Facts checked against the British Business Bank, GOV.UK, legislation.gov.uk, the House of Lords
// Library and the Bank of England on 13 October 2026 (sources at the bottom).
// Statutory interest = 8% + Bank Rate on 30 June (for debts late from 1 July to 31 December):
// 8% + 3.75% = 11.75%. Recheck after the 31 December 2026 reference date.
// Commercial Payments Bill [HL] is still in Parliament (not law): mentioned as a proposal only.

import { rating } from '../reviews.js';
import hero from '../../assets/services/invoice-finance/invoice-finance-wholesale-boxes.jpg';
import recruitment from '../../assets/services/invoice-finance/invoice-finance-recruitment-interview.jpg';
import wholesale from '../../assets/services/invoice-finance/invoice-finance-warehouse-forklift.jpg';
import haulage from '../../assets/services/invoice-finance/invoice-finance-haulage-truck.jpg';
import agency from '../../assets/services/invoice-finance/invoice-finance-creative-agency.jpg';
import construction from '../../assets/services/invoice-finance/invoice-finance-construction-site.jpg';
import exporter from '../../assets/services/invoice-finance/invoice-finance-shipping-containers-port.jpg';
import meeting from '../../assets/services/invoice-finance/invoice-finance-writing-invoice.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/business-finance/invoice-finance/',
  primaryKeyword: 'invoice finance',
  secondaryKeywords: [
    'invoice factoring', 'invoice discounting', 'single invoice finance', 'selective invoice finance',
    'recourse factoring', 'non-recourse factoring', 'invoice finance vs overdraft', 'late payment interest',
  ],
  title: 'Invoice Finance in London | Severin Finance',
  description: 'Invoice finance in London: factoring, invoice discounting and single invoice finance. We compare providers and run the application. Free finance review.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Business finance', '/uk/business-finance/'],
    ['Invoice finance', '/uk/business-finance/invoice-finance/'],
  ],
  service: {
    name: 'Invoice finance arrangement',
    serviceType: 'Invoice factoring and invoice discounting sourcing',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Business finance',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Business finance · Cash flow',
    h1: 'Invoice finance in London',
    answer: 'Invoice finance releases cash tied up in unpaid invoices. A provider usually advances up to 80 or 90% of an invoice’s value, often within 24 hours, and pays you the rest, less fees, when your customer pays. Our team compares factoring, invoice discounting and single invoice finance, then manages the application.',
    image: hero,
    imageAlt: 'Staff working among stacked cardboard boxes on a busy warehouse floor',
    price: { prefix: 'Fees from', from: 'X.X%', note: 'of invoice value, example', tbc: true },
    deadline: { label: 'Statutory late payment interest', date: '11.75% a year', note: 'Bank Rate 3.75% plus 8%, until 31 December 2026' },
    cta: 'Get a free finance review',
    trust: [
      { text: 'Accountants who keep your sales ledger in order' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'FCA firm reference number: to confirm', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Fees'],
    ['deadlines', 'Late payment & key facts'],
    ['how', 'How it works'],
    ['compare', 'Us vs your bank'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who uses invoice finance?',
    intro: 'Businesses that invoice other businesses and wait 30, 60 or 90 days to be paid. Not sure it fits? We check for free.',
    cards: [
      { title: 'Recruitment agencies', img: recruitment, alt: 'Two women talking across a table by a window during a job interview', tag: 'Weekly pay, monthly invoices', text: 'You pay contractors every week while clients take a month or more to pay. Invoice finance funds the gap.', link: ['/uk/accounting/payroll-services/', 'Payroll services'] },
      { title: 'Wholesalers & distributors', img: wholesale, alt: 'Forklift between tall shelves of stock in a warehouse aisle', tag: 'Stock and trade credit', text: 'Pay suppliers for stock while your customers take weeks to pay. The funding usually grows as your sales grow.', link: ['/uk/business-finance/asset-finance/', 'Asset finance'] },
      { title: 'Haulage & logistics', img: haulage, alt: 'Lorry driver in an orange top leaning out of his cab', tag: 'Fuel and drivers up front', text: 'Fuel, drivers and maintenance are paid now; customers pay later. Release cash from the invoices you have already raised.', link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'] },
      { title: 'Agencies & consultancies', img: agency, alt: 'Three women working on laptops around a table in a bright studio', tag: 'Large project invoices', text: 'Single invoice finance lets you fund one large client invoice without signing up your whole sales ledger.', link: ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'] },
      { title: 'Construction subcontractors', img: construction, alt: 'Construction workers in orange hi-vis laying steel on a building site', tag: 'Applications for payment', text: 'Construction invoices can be harder to fund because of applications, retentions and set-off. Some providers specialise in them.', link: ['/uk/business-finance/business-loans/', 'Business loans'] },
      { title: 'Exporters', img: exporter, alt: 'Aerial view of colourful shipping containers stacked at a port', tag: 'Overseas customers', text: 'Some providers fund invoices to overseas customers, and some can also cover the risk of a customer not paying.' },
    ],
  },

  // ---------- 3. Fees (3 product types) ----------
  pricing: {
    eyebrow: 'Invoice finance fees',
    h2: 'Typical invoice finance fees',
    intro: 'You usually pay a service fee plus a discount charge, which works like interest. These are examples only: you see the real offer before you commit.',
    plans: [
      { name: 'Invoice factoring', for: 'The provider collects for you', prefix: 'fees from', price: 'X.X%', tbc: true, items: ['Provider runs your sales ledger and collections', 'Your customers usually know', 'Often for businesses with sales up to about £2 million', 'Service fee plus a discount charge'] },
      { name: 'Invoice discounting', for: 'You collect from customers', prefix: 'fees from', price: 'X.X%', tbc: true, featured: true, badge: 'Most asked about', items: ['You keep control of collections', 'Often confidential: customers need not know', 'Usually a lower service fee than factoring', 'Needs good credit control'] },
      { name: 'Single invoice finance', for: 'Fund chosen invoices only', prefix: 'fees from', price: 'X.X%', tbc: true, items: ['Pick the invoices you want to fund', 'Also called selective invoice finance or spot factoring', 'Useful for one large or slow payer', 'Fee charged per invoice funded'] },
    ],
    included: ['Free first consultation', 'Factoring, discounting and single invoice compared', 'Sales ledger reviewed by our accountants', 'Search and comparison of suitable providers', 'Contract terms explained before you sign'],
    note: { text: 'Example fees, our arrangement fee, the number of providers we work with and whether Severin acts as lender or credit broker: to confirm.', tbc: true },
  },

  // ---------- 4. Late payment law and key facts (tables) ----------
  deadlines: {
    eyebrow: 'Late payment & key facts',
    h2: 'Invoice finance and late payment: key facts',
    intro: 'Late payment law and how invoice finance works. Checked on GOV.UK, legislation.gov.uk and the British Business Bank on 13 October 2026.',
    tables: [
      {
        caption: 'Late payment law: what you can claim',
        head: ['Rule', 'What it means'],
        rows: [
          ['Statutory interest', '8% plus Bank of England base rate: 11.75% a year on debts that become late from 1 July to 31 December 2026'],
          ['When an invoice is late', 'After the agreed date. If none was agreed, 30 days after the invoice or delivery, whichever is later'],
          ['Usual payment terms', 'Up to 60 days between businesses and 30 days for public authorities, unless longer terms are fair'],
          ['Fixed sum: debt under £1,000', '£40'],
          ['Fixed sum: £1,000 to £9,999.99', '£70'],
          ['Fixed sum: £10,000 or more', '£100'],
        ],
        after: 'You cannot claim statutory interest if your contract sets a different rate. The Commercial Payments Bill, now in Parliament, would set a 60-day maximum payment period. It is not law yet.',
      },
      {
        caption: 'Invoice finance at a glance',
        head: ['Feature', 'Typical position'],
        rows: [
          ['Advance', 'Up to 80 or 90% of the invoice value'],
          ['Speed', 'Funds usually available within 24 hours of invoicing'],
          ['Balance', 'Paid to you, less fees, when your customer pays'],
          ['Costs', 'A service fee plus a discount charge, which works like interest'],
          ['Recourse', 'You repay the advance if your customer does not pay'],
          ['Non-recourse', 'The provider usually takes the bad debt risk on approved customers, for a higher fee'],
        ],
        after: 'Finance is subject to status and provider approval. With recourse finance you must repay advances on invoices your customers do not pay. Directors may be asked for personal guarantees or indemnities.',
      },
    ],
    urgent: {
      title: 'Customers paying late right now?',
      text: 'You can claim statutory interest and a fixed sum on late business invoices. We check what you are owed and whether invoice finance would stop slow payers holding up your cash flow.',
      cta: 'Talk to our finance team',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we arrange your invoice finance',
    image: meeting,
    imageAlt: 'Business owner writing on an invoice at a dark wooden table',
    steps: [
      { title: 'Free finance review', text: 'Tell us about your customers and payment terms. We check whether factoring, discounting or single invoice finance fits.' },
      { title: 'Ledger and providers', text: 'We tidy your sales ledger, approach suitable providers and explain each offer, including notice periods and minimum fees.' },
      { title: 'Set-up to first advance', text: 'You choose the offer. The provider checks your customers and you can start drawing funds against new invoices.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Aged debtors and creditors lists', 'Latest accounts and tax returns', 'Management accounts for this year',
      'Sample invoices and customer contracts', 'Your standard payment terms', 'Last 6 months of business bank statements',
      'Existing finance and any security given', 'ID and address for each director',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs your bank',
    h2: 'Severin, your bank or an online platform?',
    cols: ['Severin Finance', 'Your bank directly', 'Online lender or marketplace'],
    rows: [
      ['Providers compared', 'A range of providers', 'One', 'Those on the platform'],
      ['Factoring, discounting and single invoice compared', true, 'Depends on the bank', 'Often single invoice only'],
      ['Sales ledger and credit control tidied first', true, false, false],
      ['Notice periods and minimum fees explained', true, false, false],
      ['Late payment interest claims', true, false, false],
      ['Bookkeeping kept in line with the facility', true, false, false],
      ['Cost to you', 'To confirm', 'Bank fees', 'Platform and provider fees'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against British Business Bank guidance, GOV.UK and legislation.gov.uk. Rates and rules change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Invoice finance questions',
  faqs: [
    { q: 'What is invoice finance?', a: 'Invoice finance is a way to borrow against the money your business customers owe you. A provider advances most of an invoice’s value straight away and pays the rest, less fees, when your customer pays. The two main types are factoring and invoice discounting.' },
    { q: 'What is the difference between factoring and invoice discounting?', a: 'Who collects the money. With factoring, the provider runs your sales ledger and chases payment, so customers usually know. With invoice discounting, you collect as normal and it is often confidential. Discounting usually has a lower fee but suits businesses with good credit control.' },
    { q: 'How much can I get from invoice finance?', a: 'Typically up to 80 or 90% of the value of approved invoices. You get the rest, less fees, when your customer pays. The amount available rises and falls with your sales ledger.' },
    { q: 'What is the difference between recourse and non-recourse?', a: 'Who carries the bad debt. With recourse finance, you repay the advance if your customer does not pay. With non-recourse finance, the provider usually takes that risk on approved customers, for a higher fee. Read the limits and exclusions carefully.' },
    { q: 'What is single invoice finance?', a: 'Single invoice finance funds one invoice, or a few you choose, instead of your whole sales ledger. It is also called selective invoice finance or spot factoring. It suits businesses with one large or slow-paying customer.' },
    { q: 'How much does invoice finance cost?', a: 'Typically a service fee from X.X% of the invoice value plus a discount charge from X.X% a year on the money advanced. Single invoice finance is usually priced per invoice. We show you the total cost in writing before you sign.', tbc: true },
    { q: 'Will my customers know I use invoice finance?', a: 'Not always. With factoring, the provider collects payment, so customers usually know. Invoice discounting is often confidential: you collect as normal and your customers need not know.' },
    { q: 'Can I charge interest on late invoices?', a: 'Yes. Under the Late Payment of Commercial Debts (Interest) Act 1998, you can claim 8% plus the Bank of England base rate on late business invoices, unless your contract sets a different rate. For debts that become late from 1 July to 31 December 2026, that is 11.75% a year, plus a fixed sum of £40 to £100.' },
    { q: 'Is invoice finance better than an overdraft?', a: 'It depends on your business. Invoice finance is linked to your sales, so it can grow as you invoice more. An overdraft is a fixed limit that the bank can usually review or withdraw. If customers pay slowly and sales are growing, invoice finance often fits better. We compare both.' },
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange invoice finance with providers. Whether Severin also lends directly, acts as a credit broker, and its FCA firm reference number are to be confirmed. We tell you in writing how we are paid before you apply.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/business-finance/asset-finance/', 'Asset finance'],
      ['/uk/business-finance/tax-bill-funding/', 'Tax bill funding'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/bristol/', 'Bristol'],
    ] },
    { title: 'Guides', links: [
      ['/resources/invoice-finance-vs-overdraft/', 'Invoice finance vs overdraft'],
      ['/resources/factoring-vs-invoice-discounting/', 'Factoring vs invoice discounting'],
      ['/resources/late-payment-interest/', 'Claiming late payment interest'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a free review of your', em: 'invoice finance options',
    pills: ['Free first consultation', 'Providers compared for you', 'No obligation'],
    formTitle: 'Get your free finance review', button: 'Get my free review',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.british-business-bank.co.uk/business-guidance/guidance-articles/finance/invoice-finance', 'British Business Bank: Invoice finance'],
    ['https://www.gov.uk/late-commercial-payments-interest-debt-recovery', 'GOV.UK: Late commercial payments'],
    ['https://www.legislation.gov.uk/uksi/2002/1675/article/4', 'legislation.gov.uk: Late payment reference rate'],
    ['https://lordslibrary.parliament.uk/research-briefings/lln-2026-0049/', 'House of Lords Library: Commercial Payments Bill'],
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
  ],
};
