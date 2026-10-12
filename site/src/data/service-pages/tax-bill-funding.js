// Tax bill funding (VAT loans, corporation tax loans): all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Business finance page: we do not yet know whether Severin lends directly or arranges finance
// through lenders (credit broker), or its FCA status. Copy says "we arrange"; rates, fees,
// lender panel and turnaround are placeholders. No approval guarantees.
// Facts checked against GOV.UK, HMRC and the Bank of England on 13 October 2026 (sources at the bottom).
// GOV.UK no longer lists online self-serve limits for VAT or PAYE payment plans, so only the
// self assessment limit (£30,000) is stated.

import { rating } from '../reviews.js';
import hero from '../../assets/services/tax-bill-funding/tax-bill-funding-director-documents.jpg';
import vatShop from '../../assets/services/tax-bill-funding/tax-bill-funding-florist-shop.jpg';
import corpTax from '../../assets/services/tax-bill-funding/tax-bill-funding-corporation-tax-paperwork.jpg';
import construction from '../../assets/services/tax-bill-funding/tax-bill-funding-construction-workers.jpg';
import seasonal from '../../assets/services/tax-bill-funding/tax-bill-funding-coffee-shop.jpg';
import director from '../../assets/services/tax-bill-funding/tax-bill-funding-director-tablet.jpg';
import service from '../../assets/services/tax-bill-funding/tax-bill-funding-salon-reception.jpg';
import meeting from '../../assets/services/tax-bill-funding/tax-bill-funding-agreement-handshake.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/business-finance/tax-bill-funding/',
  primaryKeyword: 'tax bill funding',
  secondaryKeywords: [
    'VAT loan', 'corporation tax loan', 'pay HMRC in instalments', 'HMRC Time to Pay',
    'VAT bill funding', 'tax loan for business', 'HMRC payment plan', 'self assessment payment plan',
  ],
  title: 'Tax Bill Funding & VAT Loans in London | Severin Finance',
  description: 'Tax bill funding for VAT, corporation tax and self assessment. We compare a loan with HMRC Time to Pay and arrange funding if it fits. Free review.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Business finance', '/uk/business-finance/'],
    ['Tax bill funding', '/uk/business-finance/tax-bill-funding/'],
  ],
  service: {
    name: 'Tax bill funding arrangement',
    serviceType: 'VAT and corporation tax loan sourcing and HMRC payment plan advice',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Business finance',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Business finance · Tax bills',
    h1: 'Tax bill funding in London',
    answer: 'Tax bill funding is a short-term loan that pays your VAT, corporation tax or self assessment bill to HMRC on time, which you then repay in monthly instalments. Our team compares it with an HMRC payment plan first and arranges funding only when it fits. Finance is subject to status and lender approval.',
    image: hero,
    imageAlt: 'Business owner reading a document on a clipboard at her desk with a laptop',
    price: { prefix: 'Rates from', from: 'X.X%', note: 'a year, example', tbc: true },
    deadline: { label: 'HMRC late payment interest', date: '7.75% a year', note: 'Bank Rate plus 4%, charged daily' },
    cta: 'Get a free finance review',
    trust: [
      { text: 'Accountants who check the tax bill first' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'FCA firm reference number: to confirm', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Rates'],
    ['deadlines', 'Funding vs Time to Pay'],
    ['how', 'How it works'],
    ['compare', 'Us vs your bank'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who uses tax bill funding?',
    intro: 'Profitable businesses with a big tax bill and not enough cash on the due date. Not sure which route is cheaper? We check for free.',
    cards: [
      { title: 'VAT-registered shops', img: vatShop, alt: 'Florist arranging roses among buckets of flowers in her shop', tag: 'Quarterly VAT bill', text: 'A large VAT quarter after a busy season. Spreading the bill can protect your cash for stock and wages.', link: ['/uk/tax/vat-accountant/', 'VAT accountant'] },
      { title: 'Limited companies', img: corpTax, alt: 'Person signing a spread of printed documents on a dark desk', tag: 'Corporation tax bill', text: 'Corporation tax is usually due 9 months and 1 day after your year end. A corporation tax loan spreads it over months.', link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'] },
      { title: 'Construction firms', img: construction, alt: 'Construction workers in hard hats and hi-vis working together on site', tag: 'PAYE and CIS', text: 'Wages and CIS deductions go to HMRC every month. If a client pays late, compare HMRC options with funding.', link: ['/uk/accounting/payroll-services/', 'Payroll services'] },
      { title: 'Hospitality & seasonal trade', img: seasonal, alt: 'Smiling barista in a mustard beanie working the coffee machine in a café', tag: 'Uneven cash flow', text: 'Quiet months can leave a big bill with little cash. Lenders may let repayments fit your trading pattern.', link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'] },
      { title: 'Directors & self-employed', img: director, alt: 'Smiling woman holding a tablet at a wooden table', tag: 'Self assessment bill', text: 'Owe £30,000 or less? You may be able to set up an HMRC payment plan online yourself. We check that first.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Service businesses', img: service, alt: 'Salon receptionist checking in a client on a tablet at the front desk', tag: 'One-off tax bill', text: 'A bigger bill than expected after a strong year. We check the figures, then compare HMRC options with a loan.', link: ['/uk/business-finance/business-loans/', 'Business loans'] },
    ],
  },

  // ---------- 3. Rates (3 product types) ----------
  pricing: {
    eyebrow: 'Tax bill funding rates',
    h2: 'Typical tax bill funding rates',
    intro: 'Your rate depends on your business, the bill and the lender. These are examples only: you see the real offer before you commit.',
    plans: [
      { name: 'VAT loan', for: 'Quarterly or annual VAT bills', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['Repay over a few months, lender permitting', 'Based on your accounts and VAT returns', 'Can avoid VAT late payment penalties', 'Directors may be asked for a personal guarantee'] },
      { name: 'Corporation tax loan', for: 'Limited company tax bills', prefix: 'rates from', price: 'X.X%', tbc: true, featured: true, badge: 'Most asked about', items: ['Tax computation checked by our accountants first', 'Monthly repayments to the lender', 'Bill paid to HMRC by the due date', 'Directors may be asked for a personal guarantee'] },
      { name: 'PAYE & self assessment', for: 'Payroll and personal tax bills', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['PAYE and CIS bills for employers', 'Self assessment for sole traders and directors', 'HMRC payment plan checked first', 'Some loans to sole traders are FCA-regulated'] },
    ],
    included: ['Free first consultation', 'HMRC payment plan options checked first', 'Tax bill checked by our accountants', 'Search and comparison of suitable lenders', 'Application managed to payment'],
    note: { text: 'Example rates, our arrangement fee, the number of lenders we work with and whether Severin acts as lender or credit broker: to confirm.', tbc: true },
  },

  // ---------- 4. Funding vs Time to Pay (tables) ----------
  deadlines: {
    eyebrow: 'Funding vs Time to Pay',
    h2: 'Tax bill funding vs HMRC Time to Pay',
    intro: 'What paying HMRC late costs, and how HMRC payment plans work. Checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'What paying HMRC late costs',
        head: ['Item', 'Current rule'],
        rows: [
          ['HMRC late payment interest', '7.75% a year (Bank Rate 3.75% plus 4%), charged daily'],
          ['VAT 1 to 15 days late', 'No penalty, interest only'],
          ['VAT 16 to 30 days late', 'Penalty of 3% of what you owed on day 15'],
          ['VAT 31 days or more late', 'A further 3% of what you owed on day 30, plus a daily penalty at 10% a year'],
          ['Corporation tax due date', '9 months and 1 day after your year end (profits up to £1.5 million)'],
        ],
        after: 'If you agree a payment plan with HMRC, VAT late payment penalties can be lower or not charged at all. Interest still runs until the tax is paid.',
      },
      {
        caption: 'HMRC payment plans (Time to Pay)',
        head: ['Question', 'What GOV.UK says'],
        rows: [
          ['Self assessment online plan', 'Owe £30,000 or less, returns up to date, no other tax debts or HMRC payment plans'],
          ['Other taxes or bigger debts', 'Use HMRC’s online service if eligible, otherwise call HMRC'],
          ['Cost', 'Interest at Bank Rate plus 4% is included in the payments'],
          ['How long', 'No fixed time limit. HMRC sets payments it thinks you can afford'],
          ['Company tax debts', 'HMRC may ask you to sell assets first, and directors to put in funds or arrange lending'],
          ['If you do nothing', 'HMRC can use debt collectors or court action, and can close a company over business tax debts'],
        ],
        after: 'Tax bill funding is a loan with its own interest and fees, and the lender decides. Finance is subject to status and lender approval. If you miss repayments, the lender can chase the debt and any personal guarantee.',
      },
    ],
    urgent: {
      title: 'Tax due soon and you cannot pay?',
      text: 'Do not ignore it. Interest starts the day after the due date, and VAT penalties start from day 16. Contact HMRC before the deadline, or talk to us now and we will look at every option with you.',
      cta: 'Talk to our team today',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we arrange tax bill funding',
    image: meeting,
    imageAlt: 'Two businesswomen shaking hands in a bright modern office',
    steps: [
      { title: 'Check the bill', text: 'Our accountants check the tax is right and whether reliefs or a lower payment are available.' },
      { title: 'Compare the options', text: 'We compare an HMRC payment plan with funding, on total cost and on what HMRC is likely to accept.' },
      { title: 'Apply and pay HMRC', text: 'If funding fits, we manage the application so HMRC can be paid by the due date.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'The HMRC bill or tax computation', 'Latest filed accounts', 'Management accounts for this year',
      'VAT returns for the last 12 months', 'Last 6 months of business bank statements', 'Existing loans and HMRC payment plans',
      'ID and address for each director', 'Cash flow forecast (we can prepare it)',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs your bank',
    h2: 'Severin, your bank or an online lender?',
    cols: ['Severin Finance', 'Your bank directly', 'Online lender or marketplace'],
    rows: [
      ['Lenders compared', 'A range of lenders', 'One', 'Those on the platform'],
      ['HMRC payment plan compared first', true, false, false],
      ['Tax bill checked by accountants', true, false, false],
      ['VAT, corporation tax, PAYE and self assessment', true, 'Varies', 'Varies'],
      ['Cash flow forecast prepared for you', true, false, false],
      ['Help talking to HMRC', true, false, false],
      ['Cost to you', 'To confirm', 'Bank fees', 'Platform and lender fees'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK and HMRC guidance and the Bank of England Bank Rate. Interest rates change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Tax bill funding questions',
  faqs: [
    { q: 'What is tax bill funding?', a: 'Tax bill funding is a short-term loan that pays a tax bill to HMRC on time, which you repay to the lender in monthly instalments. Businesses use it for VAT, corporation tax, PAYE and self assessment. It has interest and fees, so we compare it with an HMRC payment plan first.' },
    { q: 'Can I pay my tax bill in instalments?', a: 'Yes. HMRC may agree a payment plan, often called Time to Pay. If you owe £30,000 or less in self assessment and meet the conditions, you can set it up online. For other taxes, use HMRC’s online service if you are eligible, or call HMRC. Interest is charged on the plan.' },
    { q: 'What is a VAT loan?', a: 'A VAT loan is a short-term business loan that pays your VAT bill on time. You repay the lender over a few months. It can avoid VAT late payment penalties, which start at 3% once the VAT is more than 15 days late, but the loan has its own interest and fees.' },
    { q: 'What is a corporation tax loan?', a: 'A corporation tax loan pays your company’s corporation tax to HMRC by the due date, usually 9 months and 1 day after your year end. Your company then repays the lender in instalments. Lenders may ask directors for a personal guarantee.' },
    { q: 'What interest does HMRC charge on late tax?', a: '7.75% a year. HMRC late payment interest is the Bank of England Bank Rate plus 4%. Bank Rate is 3.75%, so the rate has been 7.75% since 9 January 2026. It is charged daily until the tax is paid.' },
    { q: 'Is tax bill funding cheaper than HMRC Time to Pay?', a: 'Not always. An HMRC plan costs interest at 7.75% a year with no lender fees, but HMRC must agree it. A loan gives you a fixed plan, with rates typically from X.X% a year plus fees. We compare the total cost of both before you decide.', tbc: true },
    { q: 'What happens if I cannot pay my VAT bill on time?', a: 'Contact HMRC before the due date. Interest starts straight away. If the VAT is still unpaid after 15 days, a 3% penalty applies, then another 3% after 30 days and a daily penalty at 10% a year. An agreed payment plan can reduce or stop the penalties.' },
    { q: 'Will HMRC agree a payment plan for my company?', a: 'It depends. HMRC decides each case. For company tax debts it asks how quickly you can pay, may expect you to sell assets such as stock or vehicles first, and may ask directors to put in personal funds or arrange lending.' },
    { q: 'How quickly can tax bill funding be arranged?', a: 'Typically X to X working days once we have your accounts, bank statements and the HMRC bill. Start early: if the loan is not in place by the due date, HMRC interest and any penalties still apply.', tbc: true },
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange tax bill funding with lenders. Whether Severin also lends directly, acts as a credit broker, and its FCA firm reference number are to be confirmed. We tell you in writing how we are paid before you apply.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/business-finance/invoice-finance/', 'Invoice finance'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/london/stratford/', 'Stratford'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/leeds/', 'Leeds'],
    ] },
    { title: 'Guides', links: [
      ['/resources/pay-hmrc-in-instalments/', 'Paying HMRC in instalments'],
      ['/resources/hmrc-time-to-pay/', 'HMRC Time to Pay explained'],
      ['/resources/vat-late-payment-penalties/', 'VAT late payment penalties'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a free review of your', em: 'tax bill options',
    pills: ['Free first consultation', 'HMRC options checked first', 'No obligation'],
    formTitle: 'Get your free finance review', button: 'Get my free review',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/difficulties-paying-hmrc', 'GOV.UK: If you cannot pay your tax bill on time'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates for late payments'],
    ['https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late', 'GOV.UK: VAT late payment penalties'],
    ['https://www.gov.uk/pay-corporation-tax', 'GOV.UK: Pay your Corporation Tax bill'],
    ['https://www.tax.service.gov.uk/pay-what-you-owe-in-instalments/eligibility/call-us', 'HMRC: Self assessment payment plan eligibility'],
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
  ],
};
