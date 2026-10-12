// Bridging loans: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Business finance page: we do not yet know whether Severin lends directly or arranges finance
// through lenders (credit broker), or its FCA status. Regulated bridging (a home the borrower or
// family lives in) needs FCA permissions: who handles it is to be confirmed. Copy says "we arrange";
// rates, fees and speed are placeholders. No approval guarantees.
// Auction timings (10% deposit on the day, completion usually 28 days later) are the usual market
// practice, not a legal rule: phrased as "usually" and pointing to each lot's legal pack.
// Facts checked against the FCA Handbook (PERG 4.4), the FCA and GOV.UK (SDLT) on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/bridging-loans/bridging-loans-london-terraced-houses.jpg';
import auction from '../../assets/services/bridging-loans/auction-bridging-loan-sold-sign.jpg';
import chainBreak from '../../assets/services/bridging-loans/chain-break-bridging-loan-couple-moving.jpg';
import refurb from '../../assets/services/bridging-loans/refurbishment-bridging-loan-derelict-room.jpg';
import landlord from '../../assets/services/bridging-loans/landlord-bridging-loan-house-keys.jpg';
import business from '../../assets/services/bridging-loans/business-bridging-loan-directors.jpg';
import devExit from '../../assets/services/bridging-loans/development-exit-bridging-new-homes.jpg';
import meeting from '../../assets/services/bridging-loans/bridging-loan-application-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/business-finance/bridging-loans/',
  primaryKeyword: 'bridging loans',
  secondaryKeywords: [
    'bridging loan London', 'bridging finance', 'auction finance', 'open bridging loan',
    'closed bridging loan', 'second charge bridging loan', 'regulated bridging loan',
    'bridging loan rates', 'chain break bridging loan', 'bridging loan exit strategy',
  ],
  title: 'Bridging Loans London & UK-wide | Severin Finance',
  description: 'Bridging loans in London and across the UK for auction purchases, chain breaks and refurbishments. We find lenders and plan your exit. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Business finance', '/uk/business-finance/'],
    ['Bridging loans', '/uk/business-finance/bridging-loans/'],
  ],
  service: {
    name: 'Bridging loan arrangement',
    serviceType: 'Bridging finance sourcing and application support',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Bridging loan',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Business finance · Short-term property finance',
    h1: 'Bridging loans in London and across the UK',
    answer: 'Our team arranges bridging loans in London and across the UK: short-term loans secured on property that cover the gap until a sale or a longer-term mortgage. They suit auction purchases, broken chains and refurbishments, and we agree your exit first. Finance is subject to lender approval, and your property may be repossessed if you do not repay.',
    image: hero,
    imageAlt: 'Pastel-painted terraced houses with white bay windows behind leafy green trees',
    price: { prefix: 'Rates from', from: 'X.XX%', note: 'a month, example', tbc: true },
    deadline: { label: 'Auction completion', date: 'Usually 28 days', note: 'After the hammer falls. Check the legal pack' },
    cta: 'Get a free bridging review',
    trust: [
      { text: 'Exit strategy checked by our accountants' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Terms in XX hours', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Rates'],
    ['deadlines', 'Types & auctions'],
    ['how', 'How it works'],
    ['compare', 'Us vs your bank'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'When is a bridging loan the right tool?',
    intro: 'When you need money for property faster than a mortgage can deliver, and you know how you will repay it.',
    cards: [
      { title: 'Auction buyers', img: auction, alt: 'Sold sign outside a red-brick house behind a green hedge', tag: 'Completion usually 28 days', text: 'Get the bridge agreed before you bid, so the money is there when the hammer falls. Each lot’s legal pack sets the exact date.' },
      { title: 'Broken property chains', img: chainBreak, alt: 'Couple sitting among moving boxes looking at a phone together', tag: 'Buy before you sell', text: 'Buy your next home before your current one sells. Secured on a home you live in, this is usually a regulated bridging loan.' },
      { title: 'Refurbishment projects', img: refurb, alt: 'Empty run-down room with peeling walls and a damaged floor', tag: 'Property lenders will not touch yet', text: 'Some mortgage lenders will not lend on a property without a working kitchen or bathroom. A bridge funds the purchase and works, then you refinance.' },
      { title: 'Landlords & investors', img: landlord, alt: 'Hand holding up a set of house keys', tag: 'Buy, improve, refinance', text: 'Buy fast, add value, then move onto a buy-to-let mortgage. Lending on property you let out is usually unregulated.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Business owners', img: business, alt: 'Two business people in suits looking at a phone in a bright office', tag: 'Second-charge business bridging', text: 'Raise short-term money against property you already own, for an acquisition, stock or a large tax bill.', link: ['/uk/business-finance/tax-bill-funding/', 'Tax bill funding'] },
      { title: 'Developers', img: devExit, alt: 'Newly built red-brick houses behind a wooden fence', tag: 'Development exit', text: 'Scheme finished but units not sold? An exit bridge can repay development finance while you sell or let.', link: ['/uk/business-finance/development-finance/', 'Development finance'] },
    ],
  },

  // ---------- 3. Rates (3 bridge types) ----------
  pricing: {
    eyebrow: 'Bridging loan rates',
    h2: 'Typical bridging loan rates',
    intro: 'Bridging interest is usually quoted per month. These are examples only: you see every fee in writing before you commit.',
    plans: [
      { name: 'Closed bridge', for: 'Exit already agreed, e.g. an exchanged sale', prefix: 'rates from', price: 'X.XX%', tbc: true, items: ['Repayment date fixed at the start', 'First or second charge', 'Residential, commercial or land', 'Chain breaks and quick purchases'] },
      { name: 'Open bridge', for: 'Sale or refinance not fixed yet', prefix: 'rates from', price: 'X.XX%', tbc: true, featured: true, badge: 'Most asked about', items: ['Repay when the sale or refinance completes', 'Within the lender’s maximum term', 'Auction and refurbishment purchases', 'Clear exit strategy still needed'] },
      { name: 'Regulated bridge', for: 'Secured on a home you or family live in', prefix: 'rates from', price: 'X.XX%', tbc: true, items: ['FCA mortgage rules and protections apply', 'Affordability checked by the lender', 'Chain breaks and downsizing', 'Arranged through an FCA-authorised firm'] },
    ],
    included: ['Free first consultation', 'Exit strategy reviewed by our accountants', 'Search and comparison of suitable lenders', 'Interest options explained: monthly, rolled up or retained', 'Valuer and solicitors coordinated'],
    note: { text: 'Example rates, our fee, and whether Severin acts as lender, credit broker or introducer (and its FCA status): to confirm. Lender arrangement and exit fees, valuation and legal costs are extra.', tbc: true },
  },

  // ---------- 4. Types and auction timeline (tables) ----------
  deadlines: {
    eyebrow: 'Types & auctions',
    h2: 'Bridging loan types and auction timings',
    intro: 'The type of bridge decides your rate, your protections and how long you have to repay.',
    tables: [
      {
        caption: 'Types of bridging loan',
        head: ['Type', 'How it works'],
        rows: [
          ['Closed bridge', 'Fixed repayment date, because the exit is already agreed, such as an exchanged sale'],
          ['Open bridge', 'No fixed repayment date within the lender’s maximum term. You still need a clear exit'],
          ['First charge', 'The bridge is the main loan secured on the property'],
          ['Second charge', 'Ranks behind an existing mortgage on the same property'],
          ['Regulated', 'Usually when an individual borrows against a home they or close family live in. FCA rules apply'],
          ['Unregulated', 'Usually business or investment property, or borrowing through a company. Fewer consumer protections'],
        ],
        after: 'The FCA warns that if you are pushed into setting up a company to borrow from a firm registered with it only for anti-money laundering, you cannot use the Financial Ombudsman Service if things go wrong.',
      },
      {
        caption: 'Buying at auction: the usual timeline',
        head: ['Stage', 'What usually happens'],
        rows: [
          ['Before you bid', 'Read the legal pack, agree the bridge in principle, instruct a solicitor'],
          ['Hammer falls', 'Contracts exchange. You usually pay a 10% deposit on the day'],
          ['Completion', 'Usually 28 days later at a traditional auction. The legal pack sets the date'],
          ['Stamp duty', 'SDLT return and payment within 14 days of completion. Usually 5% extra on residential property if you already own a home'],
          ['Exit', 'Sell the property, or refinance onto a buy-to-let or commercial mortgage'],
        ],
        after: 'Miss completion and you can lose your deposit. Finance is subject to status and lender approval. Your property may be repossessed if you do not repay a loan secured on it.',
      },
    ],
    urgent: {
      title: 'Auction in the next few weeks?',
      text: 'Talk to us before you bid. We check the numbers, your exit and which lenders can realistically complete in time.',
      cta: 'Check my auction purchase',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we arrange your bridging loan',
    image: meeting,
    imageAlt: 'Adviser pointing to figures on a document while two clients look on over coffee',
    steps: [
      { title: 'Free consultation and exit plan', text: 'Tell us about the property and how you will repay. Our accountants test the exit before any lender sees it.' },
      { title: 'Terms from lenders', text: 'We approach suitable lenders and explain each offer: rate, fees, term and how interest is paid.' },
      { title: 'Valuation to completion', text: 'You choose the offer. We coordinate the valuer and solicitors so you complete on time.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Property address and price', 'Auction legal pack, if buying at auction', 'Your exit plan: sale or refinance',
      'Refurbishment costs and schedule', 'Proof of deposit', 'Details of existing mortgages',
      'Latest accounts or tax returns', 'ID and address for each borrower',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs your bank',
    h2: 'Severin, your bank or an online lender?',
    cols: ['Severin Finance', 'Your bank directly', 'Online lender or marketplace'],
    rows: [
      ['Lenders compared', 'A range of bridging lenders', 'One', 'Those on the platform'],
      ['Exit strategy checked by accountants', true, false, false],
      ['Auction deadlines planned for', true, 'Depends on the bank', 'Partly'],
      ['Refurbishment costs included', true, 'Rarely', 'Sometimes'],
      ['Refinance planned from day one', true, false, false],
      ['Tax on the sale or rental income reviewed', true, false, false],
      ['Cost to you', 'To confirm', 'Bank fees', 'Platform and lender fees'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against the FCA Handbook, FCA statements and GOV.UK stamp duty guidance. Rules change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Bridging loan questions',
  faqs: [
    { q: 'What is a bridging loan?', a: 'A bridging loan is a short-term loan secured on property. It covers a gap until money arrives from a sale or a longer-term mortgage. Terms are usually counted in months, not years, and interest is usually charged monthly. Your property may be repossessed if you do not repay.' },
    { q: 'How much does a bridging loan cost?', a: 'Rates start from about X.XX% a month, plus lender arrangement, valuation and legal fees, and sometimes an exit fee. The total depends on the property, the loan size and how long you keep the loan. We show you every cost in writing before you apply.', tbc: true },
    { q: 'What is an exit strategy?', a: 'Your exit strategy is how you will repay the bridge, usually by selling the property or refinancing onto a mortgage. Lenders want to see a realistic exit before they lend. Our accountants check yours first.' },
    { q: 'What is the difference between an open and a closed bridging loan?', a: 'A closed bridge has a fixed repayment date because the exit is already agreed, such as an exchanged sale. An open bridge has no fixed date within the lender’s maximum term, so you still need a clear plan to repay.' },
    { q: 'Can I use a bridging loan to buy at auction?', a: 'Yes. At a traditional auction you usually pay a 10% deposit on the day and complete about 28 days later, which is often too fast for a standard mortgage. Arrange the bridge before you bid and check the legal pack for the exact date.' },
    { q: 'Are bridging loans regulated by the FCA?', a: 'Some are. A bridging loan to an individual secured on a home they or close family live in is usually a regulated mortgage contract. Bridging for business or investment property, or to a company, is usually unregulated. The FCA warns that people pushed into setting up a company to borrow from lenders registered only for anti-money laundering lose access to the Financial Ombudsman Service.' },
    { q: 'What is a second charge bridging loan?', a: 'A second charge bridging loan is secured behind an existing mortgage on the same property. It lets you raise money without repaying your first mortgage. Your existing lender may need to be told or to agree.' },
    { q: 'How quickly can I get a bridging loan?', a: 'Typically X to X working days from application to funds, if the valuation and legal work move quickly. Auction and chain-break cases need the lender, valuer and solicitors lined up early.', tbc: true },
    { q: 'What happens if I cannot repay a bridging loan on time?', a: 'The lender can add default interest and fees, and in the end repossess and sell the property. If your sale or refinance is delayed, speak to the lender early about an extension. We help you plan a realistic exit from the start.' },
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange bridging loans with lenders. Whether Severin also lends directly, acts as a credit broker or introducer, and its FCA firm reference number are to be confirmed. Regulated bridging is arranged through an FCA-authorised firm.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/business-finance/commercial-mortgages/', 'Commercial mortgages'],
      ['/uk/business-finance/development-finance/', 'Development finance'],
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/business-finance/tax-bill-funding/', 'Tax bill funding'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/kensington/', 'Kensington'],
      ['/uk/london/islington/', 'Islington'],
      ['/uk/london/croydon/', 'Croydon'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/bridging-loan-exit-strategy/', 'Bridging loan exit strategies'],
      ['/resources/buying-property-at-auction/', 'Buying property at auction'],
      ['/resources/regulated-vs-unregulated-bridging/', 'Regulated vs unregulated bridging loans'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a free review of your', em: 'bridging loan',
    pills: ['Free first consultation', 'Exit strategy checked', 'No obligation to proceed'],
    formTitle: 'Get your free bridging review', button: 'Send my request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://handbook.fca.org.uk/handbook/PERG/4/4.html', 'FCA Handbook PERG 4.4: What is a regulated mortgage contract?'],
    ['https://www.fca.org.uk/news/statements/fca-highlights-risks-unregulated-lenders', 'FCA: Risks when dealing with unregulated lenders (20 March 2026)'],
    ['https://www.gov.uk/stamp-duty-land-tax', 'GOV.UK: Stamp Duty Land Tax (14-day deadline)'],
    ['https://www.gov.uk/stamp-duty-land-tax/residential-property-rates', 'GOV.UK: SDLT residential rates and the 5% higher rate'],
    ['https://register.fca.org.uk/s/', 'FCA Financial Services Register'],
  ],
};
