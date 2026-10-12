// Commercial mortgages: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Business finance page: we do not yet know whether Severin lends directly or arranges finance
// through lenders (credit broker), or its FCA status. Copy says "we arrange"; rates, fees, lender
// panel and LTVs are placeholders. No approval guarantees.
// Facts checked against GOV.UK (SDLT) and the FCA Handbook (PERG 4.4) on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/commercial-mortgages/commercial-mortgage-bakery-owner-premises.jpg';
import ownerOccupier from '../../assets/services/commercial-mortgages/owner-occupied-commercial-mortgage-shop-owner.jpg';
import investor from '../../assets/services/commercial-mortgages/commercial-property-investment-london-offices.jpg';
import semiCommercial from '../../assets/services/commercial-mortgages/semi-commercial-mortgage-shop-with-flat-above.jpg';
import practice from '../../assets/services/commercial-mortgages/dental-practice-commercial-mortgage.jpg';
import industrial from '../../assets/services/commercial-mortgages/warehouse-industrial-commercial-mortgage.jpg';
import refinance from '../../assets/services/commercial-mortgages/commercial-remortgage-refinance-signing.jpg';
import meeting from '../../assets/services/commercial-mortgages/commercial-mortgage-adviser-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/business-finance/commercial-mortgages/',
  primaryKeyword: 'commercial mortgages',
  secondaryKeywords: [
    'commercial mortgage London', 'commercial mortgage broker', 'commercial property mortgage',
    'semi-commercial mortgage', 'owner occupier commercial mortgage', 'commercial investment mortgage',
    'commercial mortgage rates', 'commercial mortgage deposit', 'stamp duty on commercial property',
  ],
  title: 'Commercial Mortgages London & UK-wide | Severin Finance',
  description: 'Commercial mortgages in London and across the UK for owner-occupiers, investors and semi-commercial property. We compare lenders and apply.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Business finance', '/uk/business-finance/'],
    ['Commercial mortgages', '/uk/business-finance/commercial-mortgages/'],
  ],
  service: {
    name: 'Commercial mortgage arrangement',
    serviceType: 'Commercial mortgage sourcing and application support',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Commercial mortgage',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Business finance · Commercial property',
    h1: 'Commercial mortgages in London and across the UK',
    answer: 'Our team arranges commercial mortgages in London and across the UK for businesses buying their own premises and for investors buying let commercial or semi-commercial property. We prepare the figures lenders ask for, compare suitable lenders and manage the application. Finance is subject to status and lender approval, and your property may be repossessed if you miss repayments.',
    image: hero,
    imageAlt: 'Baker shaping loaves in his bakery, with fresh bread on the counter and a brick oven behind him',
    price: { prefix: 'Rates from', from: 'X.X%', note: 'a year, example', tbc: true },
    deadline: { label: 'Stamp duty', date: '14 days', note: 'SDLT return and payment due after completion' },
    cta: 'Get a free finance review',
    trust: [
      { text: 'Accountants and finance team under one roof' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Lender panel: XX lenders', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Rates'],
    ['deadlines', 'Stamp duty & key facts'],
    ['how', 'How it works'],
    ['compare', 'Us vs your bank'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who uses a commercial mortgage?',
    intro: 'Any business or investor buying or refinancing property that is not only a home. Not sure which type fits? We check for free.',
    cards: [
      { title: 'Owner-occupiers', img: ownerOccupier, alt: 'Smiling shop owner holding a “we’re open” sign outside her shop', tag: 'Your business trades from it', text: 'Stop paying rent and own your shop, office or unit. Lenders usually judge affordability on your trading profits.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Commercial property investors', img: investor, alt: 'London office towers including the Shard and the Gherkin at dusk', tag: 'Let to business tenants', text: 'Buying offices, shops or units to let. Lenders mainly look at the rent, the lease length and the tenant.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Semi-commercial property', img: semiCommercial, alt: 'Corner florist shop with flats on the floors above', tag: 'Shop with a flat above', text: 'Mixed-use buildings pay stamp duty at the non-residential rates. If you or your family will live in the flat, the loan may be a regulated mortgage.' },
      { title: 'Dentists, vets & other practices', img: practice, alt: 'Dentist talking with a smiling patient in a bright modern surgery', tag: 'Buying the practice building', text: 'Practice purchases often include goodwill as well as the building. We prepare the figures and projections lenders ask for.', link: ['/uk/company-services/business-valuation/', 'Business valuation'] },
      { title: 'Industrial & warehouse', img: industrial, alt: 'Two warehouse staff walking and talking between tall blue shelving', tag: 'Units, workshops, warehouses', text: 'Buy the unit you work from, or a let industrial unit as an investment. Need machinery as well? We arrange that separately.', link: ['/uk/business-finance/asset-finance/', 'Asset finance'] },
      { title: 'Refinancing & equity release', img: refinance, alt: 'Two people shaking hands over signed documents on a desk', tag: 'Remortgage commercial property', text: 'Move off a bridging loan or an expensive deal onto a term commercial mortgage, or raise capital from property you own.', link: ['/uk/business-finance/bridging-loans/', 'Bridging loans'] },
    ],
  },

  // ---------- 3. Rates (3 product types) ----------
  pricing: {
    eyebrow: 'Commercial mortgage rates',
    h2: 'Typical commercial mortgage rates',
    intro: 'Rates depend on the property, your business and the lender. These are examples only: you see the real offer before you commit.',
    plans: [
      { name: 'Owner-occupied', for: 'Your business trades from the property', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['Affordability based on your business accounts', 'Shops, offices, surgeries, units', 'Repayment or part interest-only, lender permitting', 'Personal or limited company purchase'] },
      { name: 'Investment', for: 'Let to one or more business tenants', prefix: 'rates from', price: 'X.X%', tbc: true, featured: true, badge: 'Most asked about', items: ['Affordability based mainly on the rent', 'Lease length and tenant reviewed for the lender', 'Single-let or multi-let property', 'Refinance from a bridging loan'] },
      { name: 'Semi-commercial', for: 'Shop, office or pub with flats', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['Commercial and residential rent counted', 'Stamp duty at mixed-use rates', 'Regulated or unregulated checked with you', 'Personal or limited company purchase'] },
    ],
    included: ['Free first consultation', 'Accounts and projections prepared for the lender', 'Search and comparison of suitable lenders', 'Application managed to completion', 'Valuer and solicitors chased for you'],
    note: { text: 'Example rates, our arrangement fee, typical loan-to-value and whether Severin acts as lender or credit broker: to confirm. Lender fees, valuation and legal costs are extra.', tbc: true },
  },

  // ---------- 4. Stamp duty and key facts (tables) ----------
  deadlines: {
    eyebrow: 'Stamp duty & key facts',
    h2: 'Commercial mortgages: stamp duty and key facts',
    intro: 'Stamp Duty Land Tax (SDLT) applies in England and Northern Ireland. Scotland and Wales have their own taxes.',
    tables: [
      {
        caption: 'SDLT on non-residential and mixed-use property (freehold)',
        head: ['Part of the price', 'SDLT rate'],
        rows: [
          ['Up to £150,000', '0%'],
          ['£150,001 to £250,000', '2%'],
          ['Above £250,000', '5%'],
          ['Example: £275,000 freehold shop', '£3,250'],
        ],
        after: 'Send the SDLT return and pay within 14 days of completion. On a new lease, rent with a net present value over £150,000 also pays 1% (2% above £5 million).',
      },
      {
        caption: 'Commercial mortgage types at a glance',
        head: ['Type', 'What lenders usually look at'],
        rows: [
          ['Owner-occupied', 'Your trading profits, accounts and the property'],
          ['Investment', 'The rent, lease length and tenant strength'],
          ['Semi-commercial', 'The commercial and residential rent together'],
          ['FCA regulation', 'Usually unregulated for business or investment property. A loan to an individual secured on a home they or close family live in is usually a regulated mortgage contract'],
        ],
        after: 'Finance is subject to status and lender approval. Your property may be repossessed if you do not keep up repayments on a mortgage or other loan secured on it.',
      },
    ],
    urgent: {
      title: 'Completion date coming up?',
      text: 'Commercial lenders take time to value and underwrite. If you have to complete fast, for example at auction, a bridging loan can fill the gap until the term mortgage is in place. We look at both.',
      cta: 'Talk to our finance team',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we arrange your commercial mortgage',
    image: meeting,
    imageAlt: 'Finance adviser talking a group of business clients through a proposal at a meeting table',
    steps: [
      { title: 'Free consultation', text: 'Tell us about the property, your business and your deposit. We tell you honestly what lenders are likely to need.' },
      { title: 'Figures and lenders', text: 'We prepare your accounts and projections, approach suitable lenders and explain each offer.' },
      { title: 'Valuation to completion', text: 'You choose the offer. We deal with the valuer and solicitors until the funds are released.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Latest accounts and tax returns', 'Management accounts for this year', 'Property details and price',
      'Lease and rent details (investment)', 'Proof of deposit', 'Business and personal bank statements',
      'Assets and liabilities statement', 'ID and address for each director',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs your bank',
    h2: 'Severin, your bank or an online lender?',
    cols: ['Severin Finance', 'Your bank directly', 'Online lender or marketplace'],
    rows: [
      ['Lenders compared', 'A range of lenders', 'One', 'Those on the platform'],
      ['Accounts and projections prepared for you', true, false, false],
      ['Owner-occupied, investment and semi-commercial', true, 'Depends on the bank', 'Often limited'],
      ['Help with complex or recent accounts', true, false, 'Partly'],
      ['Valuer and solicitors chased for you', true, false, false],
      ['Tax advice on personal or company ownership', true, false, false],
      ['Cost to you', 'To confirm', 'Bank fees', 'Platform and lender fees'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK stamp duty guidance and the FCA Handbook. Rates and rules change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Commercial mortgage questions',
  faqs: [
    { q: 'What is a commercial mortgage?', a: 'A commercial mortgage is a loan secured on business property, such as a shop, office, warehouse or a shop with a flat above. Businesses use it to buy the premises they trade from, and investors use it to buy property let to business tenants. Your property may be repossessed if you do not keep up repayments.' },
    { q: 'How much deposit do I need for a commercial mortgage?', a: 'Usually more than for a home mortgage. Lenders typically lend up to XX% of the value, so plan for a deposit of at least XX%. The exact figure depends on the property, your accounts and the lender. We tell you what to expect after a free consultation.', tbc: true },
    { q: 'What are commercial mortgage rates at the moment?', a: 'Rates start from about X.X% a year for strong cases. Your rate depends on the deposit, the property type, your trading record and the lender. We show you each offer in writing before you apply.', tbc: true },
    { q: 'Are commercial mortgages regulated by the FCA?', a: 'Usually not. Loans to a company, or for business or investment property, are usually unregulated. A loan to an individual secured on land where at least 40% is used as a home is usually a regulated mortgage contract, for example a flat above a shop where you or close family live. We check which applies before you apply.' },
    { q: 'What is a semi-commercial mortgage?', a: 'A semi-commercial mortgage is a loan on a building with both business and residential parts, such as a shop with flats above. Lenders count both rents. For stamp duty, mixed-use property pays the non-residential rates.' },
    { q: 'How much stamp duty do I pay on commercial property?', a: '0% up to £150,000, 2% from £150,001 to £250,000 and 5% above £250,000, on a freehold in England or Northern Ireland. A £275,000 freehold costs £3,250. You must file the SDLT return and pay within 14 days of completion.' },
    { q: 'Can a new business get a commercial mortgage?', a: 'Sometimes. Lenders usually want to see trading history, so a new business may need a bigger deposit, extra security or a strong business plan. We prepare projections and look for lenders that consider newer businesses.' },
    { q: 'Can my limited company buy the property?', a: 'Yes. Many owner-occupiers and investors buy through a limited company. Lenders usually ask the directors for personal guarantees. Our accountants compare the tax of personal and company ownership before you commit.' },
    { q: 'How long does a commercial mortgage take?', a: 'Typically X to X weeks from application to completion. Commercial cases take longer than home loans because the lender values the property and reviews your business. If you must complete sooner, we look at bridging finance.', tbc: true },
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange commercial mortgages with lenders. Whether Severin also lends directly, acts as a credit broker, and its FCA firm reference number are to be confirmed. We tell you in writing how we are paid before you apply.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/business-finance/bridging-loans/', 'Bridging loans'],
      ['/uk/business-finance/development-finance/', 'Development finance'],
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/business-finance/asset-finance/', 'Asset finance'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/company-services/business-valuation/', 'Business valuation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/commercial-mortgage-deposit/', 'Commercial mortgage deposits explained'],
      ['/resources/stamp-duty-commercial-property/', 'Stamp duty on commercial property'],
      ['/resources/buying-property-limited-company/', 'Buying property through a limited company'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a free review of your', em: 'commercial mortgage',
    pills: ['Free first consultation', 'Lenders compared for you', 'No obligation to proceed'],
    formTitle: 'Get your free finance review', button: 'Send my request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/stamp-duty-land-tax/nonresidential-and-mixed-rates', 'GOV.UK: SDLT on non-residential and mixed-use land'],
    ['https://www.gov.uk/stamp-duty-land-tax', 'GOV.UK: Stamp Duty Land Tax (14-day deadline)'],
    ['https://handbook.fca.org.uk/handbook/PERG/4/4.html', 'FCA Handbook PERG 4.4: What is a regulated mortgage contract?'],
    ['https://register.fca.org.uk/s/', 'FCA Financial Services Register'],
  ],
};
