// Development finance: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Business finance page: we do not yet know whether Severin lends directly or arranges finance
// through lenders (credit broker), or its FCA status. Copy says "we arrange"; rates, fees,
// LTGDV / LTC limits and speed are placeholders (no official source for typical figures). No approval guarantees.
// Facts checked against GOV.UK (VAT Notice 708, VAT rates, planning permission, building regulations)
// and the FCA Handbook (PERG 4.4) on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/development-finance/development-finance-construction-site-workers.jpg';
import groundUp from '../../assets/services/development-finance/ground-up-development-finance-site.jpg';
import heavyRefurb from '../../assets/services/development-finance/heavy-refurbishment-finance-structural-works.jpg';
import lightRefurb from '../../assets/services/development-finance/light-refurbishment-finance-decorator.jpg';
import conversion from '../../assets/services/development-finance/conversion-development-finance-warehouse.jpg';
import firstTime from '../../assets/services/development-finance/first-time-developer-plans-development-finance.jpg';
import housing from '../../assets/services/development-finance/housing-scheme-development-finance-new-homes.jpg';
import monitoring from '../../assets/services/development-finance/monitoring-surveyor-site-visit-development-finance.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/business-finance/development-finance/',
  primaryKeyword: 'development finance',
  secondaryKeywords: [
    'development finance London', 'property development finance', 'property development loans',
    'ground up development finance', 'refurbishment finance', 'heavy refurbishment finance',
    'development finance for first time developers', 'loan to GDV', 'development finance rates',
    'monitoring surveyor',
  ],
  title: 'Development Finance in London | Severin Finance',
  description: 'Development finance in London for ground-up builds, conversions and refurbishments. We find lenders and check your costs and VAT. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Business finance', '/uk/business-finance/'],
    ['Development finance', '/uk/business-finance/development-finance/'],
  ],
  service: {
    name: 'Development finance arrangement',
    serviceType: 'Property development finance sourcing and application support',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Development finance',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Business finance · Property development',
    h1: 'Development finance in London',
    answer: 'Our team arranges development finance in London for ground-up builds, conversions and heavy refurbishments. Lenders release the loan in stages as work progresses, checked by a monitoring surveyor. Our accountants review your build costs, VAT and exit first. Finance is subject to lender approval, and your property may be repossessed if you do not repay.',
    image: hero,
    imageAlt: 'Two construction workers in hard hats and orange vests fixing steel reinforcement on a building site',
    price: { prefix: 'Rates from', from: 'X.XX%', note: 'a month, example', tbc: true },
    deadline: { label: 'Planning decision', date: 'Usually 8 weeks', note: '13 weeks for large or complex applications' },
    cta: 'Get a free development review',
    trust: [
      { text: 'Build costs and VAT checked by our accountants' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Lender panel: XX lenders', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Rates'],
    ['deadlines', 'VAT & planning'],
    ['how', 'How it works'],
    ['compare', 'Us vs your bank'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who uses development finance?',
    intro: 'Developers and investors who are building, converting or rebuilding property to sell or let.',
    cards: [
      { title: 'Ground-up developments', img: groundUp, alt: 'Aerial view of a concrete building site with workers and formwork', tag: 'New build from a cleared site', text: 'Land and build costs funded in stages, from groundworks to completion. Building new homes is usually zero-rated for VAT.' },
      { title: 'Heavy refurbishment', img: heavyRefurb, alt: 'Stripped-out room with steel props holding up the ceiling and rubble on the floor', tag: 'Structural work', text: 'Structural changes, extensions or work that needs planning or building regulations approval. Lenders usually treat this as development.', link: ['/uk/business-finance/bridging-loans/', 'Bridging loans'] },
      { title: 'Light refurbishment', img: lightRefurb, alt: 'Decorator in a hi-vis vest painting a wall with a roller', tag: 'Cosmetic work', text: 'New kitchens, bathrooms and decoration with no structural change. Often funded with a refurbishment bridge rather than full development finance.' },
      { title: 'Conversions', img: conversion, alt: 'Red-brick former industrial building with green windows and metal fire escapes', tag: 'Offices or warehouses to homes', text: 'Turning a commercial building into flats. Conversion work into homes is usually charged at the reduced 5% VAT rate.', link: ['/uk/tax/vat-accountant/', 'VAT accountant'] },
      { title: 'First-time developers', img: firstTime, alt: 'Hands checking architectural floor plans with a ruler and a calculator', tag: 'Your first scheme', text: 'Lenders look closely at your team, contractor and costings. We help you present the project clearly and realistically.' },
      { title: 'Small housing schemes', img: housing, alt: 'Row of newly built brick terraced houses', tag: 'Building through a company', text: 'Houses or flats built through a limited company or SPV. Our accountants set up the structure and keep the books.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
    ],
  },

  // ---------- 3. Rates (3 project types) ----------
  pricing: {
    eyebrow: 'Development finance rates',
    h2: 'Typical development finance rates',
    intro: 'Rates and loan limits depend on the project, your experience and the exit. These are examples only: you see every fee in writing before you commit.',
    plans: [
      { name: 'Light refurbishment', for: 'Cosmetic work, no structural change', prefix: 'rates from', price: 'X.XX%', tbc: true, items: ['Purchase plus works', 'Usually a shorter term', 'Kitchens, bathrooms, decoration', 'Exit by sale or refinance'] },
      { name: 'Heavy refurbishment', for: 'Structural work and conversions', prefix: 'rates from', price: 'X.XX%', tbc: true, featured: true, badge: 'Most asked about', items: ['Works released in stages', 'Planning and building control in place', 'Monitoring surveyor visits', 'Conversions to flats'] },
      { name: 'Ground-up development', for: 'New build from a cleared site', prefix: 'rates from', price: 'X.XX%', tbc: true, items: ['Land plus build costs', 'Lending up to XX% of GDV', 'Staged drawdowns', 'Exit finance on completion'] },
    ],
    included: ['Free first consultation', 'Appraisal and cost plan reviewed by our accountants', 'VAT position on the build checked', 'Search and comparison of suitable lenders', 'Valuer, monitoring surveyor and solicitors coordinated'],
    note: { text: 'Example rates, typical LTGDV and LTC limits, our fee, and whether Severin acts as lender, credit broker or introducer (and its FCA status): to confirm. Lender arrangement and exit fees, valuation, monitoring surveyor and legal costs are extra.', tbc: true },
  },

  // ---------- 4. VAT and planning (tables) ----------
  deadlines: {
    eyebrow: 'VAT & planning',
    h2: 'VAT and planning rules for development finance',
    intro: 'Lenders check your VAT costs and permissions before they release money. Get both right early.',
    tables: [
      {
        caption: 'VAT on building work',
        head: ['Type of work', 'VAT rate'],
        rows: [
          ['Building new homes (qualifying dwellings)', '0% (zero-rated)'],
          ['First sale or long lease of a new home by the developer', '0% (zero-rated)'],
          ['Converting a non-residential building into homes', '5% (reduced rate)'],
          ['Renovating homes empty for 2 years or more', '5% (reduced rate)'],
          ['Most other building and refurbishment work', '20% (standard rate)'],
        ],
        after: 'Conditions apply to every relief. HMRC VAT Notice 708 sets them out, and our accountants check them against your scheme.',
      },
      {
        caption: 'Planning and building control',
        head: ['Step', 'What GOV.UK says'],
        rows: [
          ['Planning permission', 'Usually needed to build something new, make a major change or change the use'],
          ['Planning decision', 'Usually within 8 weeks. 13 weeks for unusually large or complex applications in England'],
          ['Building regulations', 'A separate approval from planning. You might need both'],
          ['Who approves', 'Local authority building control or a registered building control approver'],
          ['Higher-risk buildings', 'At least 7 storeys or 18 metres with homes: Building Safety Regulator approval before work starts'],
        ],
        after: 'Finance is subject to status and lender approval. Your property may be repossessed if you do not keep up repayments on a loan secured on it. Build costs can overrun: plan a contingency.',
      },
    ],
    urgent: {
      title: 'Site under offer or planning just granted?',
      text: 'Talk to us before you exchange. We check the appraisal, the VAT and which lenders fit your scheme and timescale.',
      cta: 'Check my development',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we arrange your development finance',
    image: monitoring,
    imageAlt: 'Three people in white hard hats and hi-vis vests talking on a building site',
    steps: [
      { title: 'Free consultation and appraisal check', text: 'Send us your site, costs and GDV. Our accountants test the numbers, the VAT and your exit before any lender sees them.' },
      { title: 'Terms from lenders', text: 'We approach suitable lenders and explain each offer: rate, fees, LTGDV, LTC and how money is drawn down.' },
      { title: 'Staged drawdowns to completion', text: 'After valuation and legal work, the lender releases money in stages. A monitoring surveyor checks the work before each one.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Site address and purchase price', 'Planning permission or application', 'Plans and specification',
      'Build cost plan and programme', 'Estimated GDV and sales evidence', 'Contractor and professional team',
      'Your development experience', 'Latest accounts and company details',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs your bank',
    h2: 'Severin, your bank or an online lender?',
    cols: ['Severin Finance', 'Your bank directly', 'Online lender or marketplace'],
    rows: [
      ['Lenders compared', 'A range of development lenders', 'One', 'Those on the platform'],
      ['Appraisal checked by accountants', true, false, false],
      ['VAT on the build reviewed', true, false, false],
      ['First-time developers considered', 'Yes, case by case', 'Rarely', 'Sometimes'],
      ['Company or SPV set up and accounts', true, false, false],
      ['Exit finance planned from day one', true, 'Depends on the bank', 'Partly'],
      ['Cost to you', 'To confirm', 'Bank fees', 'Platform and lender fees'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC VAT Notice 708, GOV.UK planning and building regulations guidance and the FCA Handbook. Rules change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Development finance questions',
  faqs: [
    { q: 'What is development finance?', a: 'Development finance is a short-term loan to buy land or a building and pay for construction or major works. The lender releases money in stages as the build progresses. You usually repay it by selling the finished units or refinancing onto a longer-term mortgage.' },
    { q: 'What is LTGDV?', a: 'LTGDV means loan to gross development value: the total loan as a percentage of what the finished scheme is expected to be worth. Lenders use it with loan to cost (LTC), the loan as a percentage of land and build costs, to set your maximum loan.' },
    { q: 'How much can I borrow with development finance?', a: 'Typically up to XX% of gross development value and up to XX% of total costs, whichever is lower. You fund the rest yourself. The exact limits depend on the lender, your experience and the scheme.', tbc: true },
    { q: 'How is development finance paid out?', a: 'In stages. The lender usually funds part of the purchase at the start, then releases build money in drawdowns as each stage is finished. A monitoring surveyor checks the work before each release.' },
    { q: 'What does a monitoring surveyor do?', a: 'A monitoring surveyor checks your costs and programme for the lender before the loan starts, then visits the site before each drawdown to confirm the work is done. You usually pay their fees.' },
    { q: 'Do I need planning permission before applying?', a: 'Usually, yes. Most lenders want planning permission in place before they release build money, and building regulations approval is a separate step. GOV.UK says most planning applications are decided within 8 weeks.' },
    { q: 'Is VAT charged on building new homes?', a: 'No. Building new qualifying homes is usually zero-rated for VAT, as is the first sale or long lease of a new home. Converting a non-residential building into homes is usually 5%. Most other building work is 20%.' },
    { q: 'Can first-time developers get development finance?', a: 'Yes, some lenders consider first-time developers. They usually expect an experienced contractor and professional team, a realistic cost plan and more of your own money in the scheme. We help you present the project clearly.' },
    { q: 'What are development finance rates?', a: 'Rates start from about X.XX% a month, plus arrangement, valuation, monitoring surveyor and legal fees, and often an exit fee. Interest is usually rolled up and repaid at the end. We show you every cost in writing before you apply.', tbc: true },
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange development finance with lenders. Whether Severin also lends directly, acts as a credit broker or introducer, and its FCA firm reference number are to be confirmed. Lending on a home you or close family will live in can be regulated by the FCA.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/business-finance/bridging-loans/', 'Bridging loans'],
      ['/uk/business-finance/commercial-mortgages/', 'Commercial mortgages'],
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/stratford/', 'Stratford'],
      ['/uk/london/croydon/', 'Croydon'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/development-finance-ltgdv-explained/', 'LTGDV and LTC explained'],
      ['/resources/vat-on-property-development/', 'VAT on property development'],
      ['/resources/development-appraisal-checklist/', 'Development appraisal checklist'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a free review of your', em: 'development finance',
    pills: ['Free first consultation', 'Appraisal and VAT checked', 'No obligation to proceed'],
    formTitle: 'Get your free development review', button: 'Send my request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/buildings-and-construction-vat-notice-708', 'HMRC VAT Notice 708: Buildings and construction'],
    ['https://www.gov.uk/vat-rates', 'GOV.UK: VAT rates'],
    ['https://www.gov.uk/planning-permission-england-wales/after-you-apply', 'GOV.UK: Planning permission, after you apply'],
    ['https://www.gov.uk/building-regulations-approval', 'GOV.UK: Building regulations approval'],
    ['https://handbook.fca.org.uk/handbook/PERG/4/4.html', 'FCA Handbook PERG 4.4: What is a regulated mortgage contract?'],
    ['https://register.fca.org.uk/s/', 'FCA Financial Services Register'],
  ],
};
