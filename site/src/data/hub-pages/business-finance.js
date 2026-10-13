// Business finance hub (pillar page): /uk/business-finance/. Layout: src/layouts/HubPage.astro.
// Not yet known: whether Severin lends directly or arranges finance (credit broker), and its FCA
// status. Copy says "we arrange"; the FCA line stays tbc until Severin confirms it.
// Fact tables are reused from the service pages, so each figure is checked in one place.
import loans from '../service-pages/business-loans.js';
import taxBill from '../service-pages/tax-bill-funding.js';
import invoice from '../service-pages/invoice-finance.js';
import mortgages from '../service-pages/commercial-mortgages.js';

export default {
  url: '/uk/business-finance/',
  section: 'business-finance',
  title: 'Business Finance Arranged by Accountants | Severin Finance',
  description: 'Business loans, tax bill funding, asset and invoice finance, commercial mortgages, bridging and development finance, arranged UK-wide. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [['Home', '/'], ['United Kingdom', '/uk/'], ['Business finance', '/uk/business-finance/']],

  hero: {
    eyebrow: 'UK business finance',
    h1: 'Business finance, arranged by your accountants',
    answer: 'We arrange business finance for UK companies, sole traders and property investors: business loans, tax bill funding, asset and invoice finance, commercial mortgages, bridging loans and development finance. Because we prepare the accounts and forecasts lenders ask for, applications are better prepared. Finance is subject to status and lender approval.',
  },

  services: {
    eyebrow: 'Finance we arrange',
    h2: 'Funding for every stage of a business',
    intro: 'We compare suitable lenders, prepare the numbers and manage the application from start to finish.',
    items: [
      { href: '/uk/business-finance/business-loans/', text: 'Secured, unsecured and government-backed loans for growth, stock, hiring or buying a business.' },
      { href: '/uk/business-finance/tax-bill-funding/', text: 'Spread a corporation tax, VAT or self assessment bill, or agree a Time to Pay plan with HMRC.' },
      { href: '/uk/business-finance/asset-finance/', text: 'Hire purchase and leasing for vans, machinery and equipment, with the tax and VAT explained.' },
      { href: '/uk/business-finance/invoice-finance/', text: 'Cash from unpaid invoices through factoring or invoice discounting, often within 24 hours.' },
      { href: '/uk/business-finance/commercial-mortgages/', text: 'Mortgages to buy your own premises or let commercial and semi-commercial property.' },
      { href: '/uk/business-finance/bridging-loans/', text: 'Short-term loans secured on property for auctions, broken chains and refurbishments.' },
      { href: '/uk/business-finance/development-finance/', text: 'Staged funding for ground-up builds and conversions, with build costs and VAT checked first.' },
    ],
  },

  facts: {
    eyebrow: 'Key facts',
    h2: 'Government schemes, HMRC costs and lender terms',
    intro: 'Current terms from the British Business Bank, GOV.UK and the law on late payment. Checked on 13 October 2026.',
    tables: [loans.deadlines.tables[0], taxBill.deadlines.tables[0], invoice.deadlines.tables[1], mortgages.deadlines.tables[1]],
  },

  choose: {
    eyebrow: 'Which finance fits?',
    h2: 'How to choose business finance',
    blocks: [
      { h3: 'Start with what the money is for', html: 'Match the finance to the need. Equipment usually suits <a href="/uk/business-finance/asset-finance/">asset finance</a>, slow-paying customers suit <a href="/uk/business-finance/invoice-finance/">invoice finance</a>, premises suit a <a href="/uk/business-finance/commercial-mortgages/">commercial mortgage</a>, and growth or working capital suits a <a href="/uk/business-finance/business-loans/">business loan</a>. Using short-term money for long-term needs is one of the most common and costly mistakes.' },
      { h3: 'Short-term property finance', html: 'A <a href="/uk/business-finance/bridging-loans/">bridging loan</a> covers a gap of months, not years, and costs more than a mortgage, so the exit must be clear before you borrow. <a href="/uk/business-finance/development-finance/">Development finance</a> releases money in stages as the build goes up.' },
      { h3: 'A tax bill you cannot pay in one go', html: 'Talk to HMRC early. A Time to Pay plan may cost only interest, while <a href="/uk/business-finance/tax-bill-funding/">tax bill funding</a> from a lender has its own interest and fees. We compare both before you decide.' },
      { h3: 'What lenders look at', html: 'Up-to-date accounts, management figures, a cash flow forecast and a clear reason for the money. As your accountants we prepare these in the form lenders expect, which saves time and avoids weak applications.' },
    ],
  },

  guidesTitle: 'Business finance guides',
  faqTitle: 'Business finance questions',
  faqs: [
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange finance with lenders. Whether Severin also lends directly, acts as a credit broker, and its FCA firm reference number are to be confirmed. We tell you in writing how we are paid before you apply.', tbc: true },
    { q: 'Will I need to give a personal guarantee?', a: 'Often, for loans to limited companies. It depends on the lender and the product. Under the Growth Guarantee Scheme your main home cannot be taken as security. We explain what any guarantee means before you sign.' },
    { q: 'Can a new business get finance?', a: 'Yes, but the choice is narrower. Start Up Loans lend £500 to £25,000 per person to businesses trading for less than 5 years, and asset finance is often available because the asset is the security.' },
    { q: 'How long does it take?', a: 'Invoice finance and some asset finance can be in place within days. Business loans and commercial mortgages usually take weeks, depending on the lender and how quickly the documents are ready.' },
  ],

  sources: [
    ['https://www.british-business-bank.co.uk/finance-options/debt-finance/growth-guarantee-scheme', 'British Business Bank: Growth Guarantee Scheme'],
    ['https://www.gov.uk/start-up-loans', 'GOV.UK: Start Up Loans'],
    ['https://www.gov.uk/difficulties-paying-hmrc', 'GOV.UK: If you cannot pay your tax bill on time'],
    ['https://www.gov.uk/late-commercial-payments-interest-debt-recovery', 'GOV.UK: Late commercial payments'],
    ['https://register.fca.org.uk/s/', 'FCA Financial Services Register'],
  ],
};
