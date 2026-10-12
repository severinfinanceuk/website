// Business loans: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Business finance page: we do not yet know whether Severin lends directly or arranges finance
// through lenders (credit broker), or its FCA status. Copy says "we arrange"; rates, fees,
// lender panel and turnaround are placeholders. No approval guarantees.
// Facts checked against the British Business Bank, GOV.UK and the Bank of England on 13 October 2026
// (sources at the bottom). Growth Guarantee Scheme changes announced in July 2026 (10-year terms,
// £54m turnover limit) were still being rolled out, so the table shows current terms and flags them.

import { rating } from '../reviews.js';
import hero from '../../assets/services/business-loans/business-loans-garden-centre-owner.jpg';
import startUp from '../../assets/services/business-loans/business-loans-start-up-founders.jpg';
import retail from '../../assets/services/business-loans/business-loans-retail-counter.jpg';
import restaurant from '../../assets/services/business-loans/business-loans-restaurant-chef.jpg';
import trades from '../../assets/services/business-loans/business-loans-tradesperson-power-tool.jpg';
import clinic from '../../assets/services/business-loans/business-loans-dental-clinic.jpg';
import growth from '../../assets/services/business-loans/business-loans-growing-team.jpg';
import meeting from '../../assets/services/business-loans/business-loans-adviser-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/business-finance/business-loans/',
  primaryKeyword: 'business loans',
  secondaryKeywords: [
    'business loans UK', 'small business loans London', 'start-up business loans',
    'secured business loan', 'unsecured business loan', 'business loan broker',
    'working capital loan', 'Growth Guarantee Scheme', 'business loan interest rates UK',
  ],
  title: 'Business Loans in London | Severin Finance',
  description: 'Business loans in London: secured, unsecured and government-backed. We prepare your figures, compare lenders and run the application. Free review.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Business finance', '/uk/business-finance/'],
    ['Business loans', '/uk/business-finance/business-loans/'],
  ],
  service: {
    name: 'Business loan arrangement',
    serviceType: 'Business loan sourcing and application support',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Business finance',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Business finance · Loans',
    h1: 'Business loans in London',
    answer: 'Our team arranges business loans in London for limited companies, sole traders and partnerships. We prepare the accounts and forecasts lenders ask for, compare secured, unsecured and government-backed options, and manage the application. Finance is subject to status and lender approval, and you stay responsible for repaying the loan.',
    image: hero,
    imageAlt: 'Smiling garden centre owner holding a crate of flowers in his greenhouse',
    price: { prefix: 'Rates from', from: 'X.X%', note: 'a year, example', tbc: true },
    deadline: { label: 'Bank of England Bank Rate', date: '3.75%', note: 'Next decision 5 November 2026' },
    cta: 'Get a free finance review',
    trust: [
      { text: 'Accountants and finance team under one roof' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'FCA firm reference number: to confirm', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Rates'],
    ['deadlines', 'Loan types & schemes'],
    ['how', 'How it works'],
    ['compare', 'Us vs your bank'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who uses business loans?',
    intro: 'Most small businesses borrow at some point: to start, to grow or to smooth cash flow. Not sure which loan fits? We check for free.',
    cards: [
      { title: 'Start-ups', img: startUp, alt: 'Two smiling founders looking at a laptop together on a sofa', tag: 'Trading less than 5 years', text: 'Government-backed Start Up Loans lend £500 to £25,000 at a fixed 7.5%. We help with the business plan and cash flow forecast.', link: ['/uk/company-services/company-formation/', 'Company formation'] },
      { title: 'Shops & retailers', img: retail, alt: 'Smiling shop owner leaning on her counter under a neon sign', tag: 'Stock, refits, a second site', text: 'Lenders look at your sales history and whether the repayments fit your cash flow. Clean books help.', link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'] },
      { title: 'Restaurants & cafés', img: restaurant, alt: 'Chef cooking over a flaming pan in a busy restaurant kitchen', tag: 'Fit-out and expansion', text: 'Kitchen equipment can suit asset finance better than a loan. We compare both before you apply.', link: ['/uk/business-finance/asset-finance/', 'Asset finance'] },
      { title: 'Trades & construction', img: trades, alt: 'Tradesman in safety gear cutting timber with a power tool on site', tag: 'Working capital', text: 'Pay for materials and wages before clients pay you. Invoice finance can also release cash from unpaid invoices.', link: ['/uk/business-finance/invoice-finance/', 'Invoice finance'] },
      { title: 'Clinics & practices', img: clinic, alt: 'Two dentists treating a patient in a bright dental surgery', tag: 'Buying in or expanding', text: 'Buying into a practice or adding a surgery. We prepare the projections and valuation evidence lenders ask for.', link: ['/uk/company-services/business-valuation/', 'Business valuation'] },
      { title: 'Growing companies', img: growth, alt: 'Four colleagues gathered around a laptop in a bright office', tag: 'Hiring and growth', text: 'Hire, launch a product or enter a new market. Larger loans may be available through the government Growth Guarantee Scheme.', link: ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'] },
    ],
  },

  // ---------- 3. Rates (3 loan types) ----------
  pricing: {
    eyebrow: 'Business loan rates',
    h2: 'Typical business loan rates',
    intro: 'Your rate depends on your business, any security and the lender. These are examples only: you see the real offer before you commit.',
    plans: [
      { name: 'Unsecured loan', for: 'No property or asset security', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['Usually smaller amounts and shorter terms', 'Based on accounts, bank statements and credit history', 'Directors usually give a personal guarantee', 'Fixed monthly repayments'] },
      { name: 'Secured loan', for: 'Backed by property or other assets', prefix: 'rates from', price: 'X.X%', tbc: true, featured: true, badge: 'Most asked about', items: ['Larger amounts and longer terms possible', 'Often a lower rate than unsecured', 'Valuation and legal fees usually extra', 'The security is at risk if you miss repayments'] },
      { name: 'Government-backed', for: 'Growth Guarantee Scheme', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['Through accredited lenders only', 'Term loans from £25,001', 'Lender gets a 70% government guarantee', 'Your business stays 100% liable for the debt'] },
    ],
    included: ['Free first consultation', 'Accounts and cash flow forecast prepared for lenders', 'Search and comparison of suitable lenders', 'Application managed to drawdown', 'Each offer explained in plain English'],
    note: { text: 'Example rates, our arrangement fee, the number of lenders we work with and whether Severin acts as lender or credit broker: to confirm.', tbc: true },
  },

  // ---------- 4. Loan types and schemes (tables) ----------
  deadlines: {
    eyebrow: 'Loan types & schemes',
    h2: 'Business loans: government schemes and key facts',
    intro: 'Terms of the two main government-backed routes, checked on 13 October 2026.',
    tables: [
      {
        caption: 'Growth Guarantee Scheme (British Business Bank)',
        head: ['Feature', 'Current terms'],
        rows: [
          ['Products', 'Term loans, overdrafts, asset finance, invoice finance and asset-based lending'],
          ['Facility size', 'Term loans and overdrafts from £25,001, generally up to £2 million per business group'],
          ['Term', 'Term loans: 3 months to 6 years. Overdrafts: 3 months to 3 years'],
          ['Guarantee', '70% to the lender. Your business stays 100% liable for the debt'],
          ['Turnover limit', 'Up to £45 million'],
          ['Personal guarantees', 'At the lender’s discretion. Your main home cannot be taken as security'],
        ],
        after: 'In July 2026 the government announced terms of up to 10 years for some loans and a £54 million turnover limit. The British Business Bank is bringing these in over the coming weeks. Lenders set the price and make every decision.',
      },
      {
        caption: 'Start Up Loans',
        head: ['Feature', 'Terms'],
        rows: [
          ['Amount', '£500 to £25,000 per person'],
          ['Interest rate', '7.5% a year, fixed'],
          ['Repayment', 'Over 1 to 5 years. No early repayment fee'],
          ['Who can apply', 'Aged 18 or over, living in the UK, business trading for less than 5 years'],
          ['Extras', 'Up to 12 months of free mentoring. No application fee'],
        ],
        after: 'A Start Up Loan is an unsecured personal loan: you repay it even if the business fails. Finance is subject to status and lender approval. Property or assets given as security may be at risk if you do not keep up repayments.',
      },
    ],
    urgent: {
      title: 'Need funds quickly?',
      text: 'Tell us the amount, what it is for and when you need it. We tell you honestly which lenders are likely to consider it, and whether invoice finance or tax bill funding would fit better.',
      cta: 'Talk to our finance team',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we arrange your business loan',
    image: meeting,
    imageAlt: 'Finance adviser and a business owner talking across a wooden meeting table',
    steps: [
      { title: 'Free finance review', text: 'Tell us what you need and why. We look at your accounts and tell you honestly what lenders are likely to ask.' },
      { title: 'Figures and lenders', text: 'We prepare your forecast, approach suitable lenders and explain each offer, including any personal guarantee.' },
      { title: 'Offer to drawdown', text: 'You choose the offer. We deal with the lender’s questions until the funds reach your account.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Latest accounts and tax returns', 'Management accounts for this year', 'Last 6 months of business bank statements',
      'What the loan is for and how much', 'Existing loans, leases and overdrafts', 'Cash flow forecast (we can prepare it)',
      'ID and address for each director', 'Assets and liabilities of any guarantor',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs your bank',
    h2: 'Severin, your bank or an online lender?',
    cols: ['Severin Finance', 'Your bank directly', 'Online lender or marketplace'],
    rows: [
      ['Lenders compared', 'A range of lenders', 'One', 'Those on the platform'],
      ['Accounts and forecasts prepared for you', true, false, false],
      ['Secured, unsecured and government-backed options', true, 'Depends on the bank', 'Mostly unsecured'],
      ['Personal guarantee terms explained', true, false, false],
      ['Tax and cash flow advice from accountants', true, false, false],
      ['Help with complex or recent accounts', true, false, 'Partly'],
      ['Cost to you', 'To confirm', 'Bank fees', 'Platform and lender fees'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against British Business Bank, GOV.UK and Bank of England information. Scheme terms and rates change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Business loan questions',
  faqs: [
    { q: 'How do I get a business loan?', a: 'Start with up-to-date accounts, recent bank statements and a clear reason for borrowing. Lenders check your trading history, profits, cash flow, credit record and any security. We prepare these figures, find lenders likely to consider your case and manage the application. Approval is always the lender’s decision.' },
    { q: 'What is the difference between a secured and an unsecured business loan?', a: 'A secured loan is backed by an asset, such as property or equipment, which the lender can take if you do not repay. An unsecured loan has no asset security, but lenders usually ask directors for a personal guarantee. Secured loans are usually larger and cheaper. Unsecured loans are usually quicker.' },
    { q: 'What is a personal guarantee?', a: 'A personal guarantee is your promise to repay the business debt yourself if the business cannot. Your personal assets could be at risk. Check the amount, the term and what triggers it before you sign, and take independent legal advice. Under the Growth Guarantee Scheme, your main home cannot be taken as security.' },
    { q: 'What is the Growth Guarantee Scheme?', a: 'The Growth Guarantee Scheme is a government scheme run by the British Business Bank. Accredited lenders offer term loans, overdrafts, asset finance and invoice finance, and the government guarantees 70% of the lender’s loss. Your business stays 100% liable for the debt. Facilities are generally up to £2 million per business group.' },
    { q: 'How do Start Up Loans work?', a: '£500 to £25,000 per person, at a fixed 7.5% a year, repaid over 1 to 5 years. Start Up Loans are government-backed personal loans for businesses trading for less than 5 years. There is a credit check, no application fee, no early repayment fee and up to 12 months of free mentoring.' },
    { q: 'What do lenders look at for a business loan?', a: 'Mainly whether you can afford the repayments. Lenders check your accounts, bank statements, existing debts, credit history, how long you have traded and any security. Up-to-date bookkeeping and a realistic forecast help a lender understand your case.' },
    { q: 'Can a new business get a loan?', a: 'Yes, but the choice is narrower. Many lenders prefer to see filed accounts. Start Up Loans are designed for businesses trading for less than 5 years, and some lenders consider newer businesses with a strong plan or security. We prepare the plan and forecasts with you.' },
    { q: 'What are business loan interest rates at the moment?', a: 'Rates start from about X.X% a year for strong secured cases. Your rate depends on your trading record, security, loan term and the lender. Bank Rate is 3.75%, which affects variable-rate loans. We show you each offer in writing before you apply.', tbc: true },
    { q: 'How long does a business loan take?', a: 'Typically X to X working days for unsecured loans and X to X weeks for secured loans. Secured loans take longer because the lender values the security. Having your accounts and bank statements ready speeds things up.', tbc: true },
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange business loans with lenders. Whether Severin also lends directly, acts as a credit broker, and its FCA firm reference number are to be confirmed. We tell you in writing how we are paid before you apply.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/business-finance/invoice-finance/', 'Invoice finance'],
      ['/uk/business-finance/asset-finance/', 'Asset finance'],
      ['/uk/business-finance/tax-bill-funding/', 'Tax bill funding'],
      ['/uk/business-finance/commercial-mortgages/', 'Commercial mortgages'],
      ['/uk/business-finance/bridging-loans/', 'Bridging loans'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/london/croydon/', 'Croydon'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/how-to-get-a-business-loan/', 'How to get a business loan'],
      ['/resources/business-loan-interest-rates-uk/', 'Business loan interest rates UK'],
      ['/resources/personal-guarantees-explained/', 'Personal guarantees explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a free review of your', em: 'business loan options',
    pills: ['Free first consultation', 'Lenders compared for you', 'No obligation'],
    formTitle: 'Get your free finance review', button: 'Get my free review',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.british-business-bank.co.uk/finance-options/debt-finance/growth-guarantee-scheme', 'British Business Bank: Growth Guarantee Scheme'],
    ['https://www.gov.uk/government/news/chancellor-to-unlock-billions-in-finance-for-small-businesses--2', 'GOV.UK: Growth Guarantee Scheme changes (July 2026)'],
    ['https://www.gov.uk/start-up-loans', 'GOV.UK: Start Up Loans'],
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
  ],
};
