// Accountants in Leeds: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: LeedsBID (levy 2025-30), GOV.UK (Investment Zones, Clean Air
// Zones, rates multipliers, National Living Wage). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/leeds/accountants-leeds-hero.jpg';
import arcade from '../../assets/locations/leeds/accountants-leeds-victoria-quarter.jpg';
import campus from '../../assets/locations/leeds/accountants-leeds-university.jpg';
import dock from '../../assets/locations/leeds/accountants-leeds-dock-flats.jpg';
import riverside from '../../assets/locations/leeds/accountants-leeds-riverside-offices.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/leeds/',
  primaryKeyword: 'accountants in Leeds',
  secondaryKeywords: [
    'accountant Leeds', 'Leeds accountants for small business', 'tax accountant Leeds',
    'chartered accountants Leeds', 'bookkeeping Leeds', 'payroll Leeds',
    'LeedsBID levy', 'accountants West Yorkshire',
  ],
  title: 'Accountants in Leeds | Severin Finance',
  description: 'Accountants in Leeds for company accounts, self assessment, VAT, payroll and bookkeeping across West Yorkshire. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Leeds', '/uk/leeds/'],
  ],
  place: { type: 'City', name: 'Leeds', wikidata: 'Q39121', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Leeds', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Leeds · West Yorkshire',
    h1: 'Accountants in Leeds',
    answer: 'Our accountants in Leeds look after company accounts, tax returns, VAT, payroll and bookkeeping for fixed fees. We include the local costs in your figures: city centre premises with a rateable value of £60,000 or more pay the LeedsBID levy, set at 1.94% of rateable value for 2026-27.',
    image: hero,
    imageAlt: 'Leeds Town Hall clock tower at sunset with the city centre behind it',
    chip: 'West Yorkshire',
    card: { label: 'LeedsBID levy', value: '1.94%', note: 'Of rateable value in 2026-27, for premises at £60,000 RV or more' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across West Yorkshire' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Leeds facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Leeds client mix) ----------
  who: {
    eyebrow: 'Who we help in Leeds',
    h2: 'Leeds retailers, founders, landlords and professional firms',
    intro: 'Leeds is a regional centre for shopping, professional services and two large universities. The people we help here usually fall into one of these groups.',
    cards: [
      {
        img: arcade, alt: 'Shoppers under the stained glass roof of the Victoria Quarter arcade in Leeds',
        tag: 'Retail and hospitality', title: 'Shops, bars and restaurants',
        text: 'VAT, payroll and stock records for retailers and venues in the arcades and streets of the city centre, with rates, the BID levy and the £12.71 wage floor in the budget.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: campus, alt: 'Aerial view of the Parkinson Building and the University of Leeds campus at dusk',
        tag: 'Health tech', title: 'Health tech founders and spin-outs',
        text: 'Company formation, SEIS and EIS advance assurance and grant records for founders. HealthTech is the focus of the West Yorkshire Investment Zone.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: dock, alt: 'Apartment blocks and moored boats around the water at Leeds Dock',
        tag: 'Property', title: 'Landlords and property investors',
        text: 'Rental accounts, Section 24 planning and capital gains for landlords with flats at Leeds Dock, in the city centre or in student areas near the universities.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: riverside, alt: 'Office and apartment buildings beside the River Aire in Leeds city centre',
        tag: 'Professional services', title: 'Professional and financial firms',
        text: 'Management accounts, corporation tax and director pay planning for consultancies, law and finance firms, and the contractors who work alongside them.',
        link: ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      },
    ],
  },

  // ---------- 3. Services most searched in Leeds ----------
  services: {
    eyebrow: 'Services in Leeds',
    h2: 'What Leeds clients ask us for most',
    intro: 'Each service runs online at a fixed fee, whether you are in the city centre, Headingley or elsewhere in West Yorkshire. Each card links to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for Leeds companies, on a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Returns for sole traders, partners, directors and landlords in Leeds and the rest of West Yorkshire.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'VAT registration, scheme choice and quarterly Making Tax Digital returns for city centre traders.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for shops, bars and offices, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and compliance statements so investors in your Leeds start-up can claim their tax relief.', href: '/uk/company-services/eis-seis/' },
      { title: 'Virtual finance director', text: 'Board packs, forecasts and cash flow planning for growing firms that are not ready for a full-time finance director.', href: '/uk/accounting/virtual-finance-director/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Leeds) ----------
  facts: {
    eyebrow: 'Leeds facts',
    h2: 'Local costs and schemes in Leeds',
    intro: 'Leeds has a city centre BID levy that rises every year, no clean air charge and an Investment Zone without tax sites. The details for 2026-27 are below.',
    tables: [
      {
        caption: 'LeedsBID levy, 2025 to 2030',
        head: ['Item', 'Detail'],
        rows: [
          ['Who pays', 'City centre premises with a rateable value of £60,000 or more'],
          ['Levy 2025-26', '1.90% of rateable value'],
          ['Levy 2026-27', '1.94% of rateable value'],
          ['Levy 2027-28', '1.98% of rateable value'],
          ['Cap per property', '£40,800 in 2026-27 (£40,000 in 2025-26)'],
          ['Term', '1 April 2025 to 31 March 2030'],
        ],
        after: 'No reliefs or discounts apply to the BID levy, even where your business rates bill gets relief. The BID expects to raise about £18.75m over its five years.',
      },
      {
        caption: 'Business rates and schemes in Leeds, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Clean Air Zone', 'None: the council decided in October 2020 not to introduce one'],
          ['West Yorkshire Investment Zone', 'HealthTech, with the Innovation Arc in Leeds as one of its sites'],
          ['Investment Zone tax sites', 'None'],
        ],
        after: 'Leeds City Council sends the rates bill. Because there are no tax sites, the Investment Zone does not cut rates or National Insurance. Its funding (over £50m for infrastructure plus £25m revenue) goes to sites, research and skills.',
      },
    ],
    urgent: {
      title: 'The BID levy rises every April',
      text: 'LeedsBID goes from 1.90% to 1.94% to 1.98% over three years, on top of the April 2026 rates changes and the end of the 40% retail relief. We build every increase into your forecast.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Leeds clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Leeds clients',
    steps: [
      { title: 'Free consultation', text: 'Tell us about your business on a short call or video meeting. We look at your figures and deadlines at no cost.' },
      { title: 'Fixed fee in writing', text: 'We agree the work and the price in writing first, so you know the cost for the year.' },
      { title: 'We do the work', text: 'Upload records securely or link Xero or QuickBooks. We prepare and file the returns, and you get a reminder before every deadline.' },
    ],
    meet: {
      title: 'Meeting us in Leeds',
      text: 'Whether you are in the city centre, Headingley or Wakefield, we work by video, phone and secure upload, so nobody has to travel.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and cloud bookkeeping access',
        'One named contact for your account',
        { text: 'Leeds meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against LeedsBID and GOV.UK sources. Levies, rates and wage rates change each year, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Leeds clients',
  faqs: [
    { q: 'Does Leeds have a Clean Air Zone?', a: 'No. Leeds City Council decided in October 2020 not to introduce a charging Clean Air Zone. Businesses in Leeds pay no daily emission charge, though your vans can still be charged when they enter a charging zone in another UK city.' },
    { q: 'What is the LeedsBID levy?', a: 'It is a charge on city centre premises with a rateable value of £60,000 or more, which funds LeedsBID projects from 2025 to 2030. The rate is 1.94% of rateable value in 2026-27, capped at £40,800 per property. No reliefs or discounts apply.' },
    { q: 'What is the West Yorkshire Investment Zone?', a: 'It is a government-backed zone focused on HealthTech, with sites in Bradford, Kirklees and the Innovation Arc in Leeds. West Yorkshire has no tax sites, so there is no rates or National Insurance relief. Over 7,000 jobs are expected, and the funding goes to sites, research and skills.' },
    { q: 'Do I need an accountant based in Leeds?', a: 'Not necessarily. UK tax rules are the same in Leeds as across England, and we work online. A good accountant should still know the local costs, such as the LeedsBID levy, and which West Yorkshire schemes apply to you.' },
    { q: 'Why did my Leeds business rates bill change?', a: 'A new rating list took effect on 1 April 2026, with new multipliers of 43.2p for smaller properties and 48.0p standard, and lower rates for retail, hospitality and leisure. Leeds City Council sends the bill. Check your new rateable value, because small business rate relief depends on it.' },
    { q: 'Can you help my health tech start-up with SEIS or EIS?', a: 'Yes. We apply to HMRC for SEIS or EIS advance assurance, so investors know they should get tax relief, and we file the compliance statements once the shares are issued. We also prepare the forecasts and accounts that investors ask for.' },
    { q: 'How much does an accountant cost in Leeds?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. The exact figure depends on your turnover and records, and we put it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Leeds clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/liverpool/', 'Accountants in Liverpool'],
      ['/uk/newcastle/', 'Accountants in Newcastle'],
      ['/uk/sheffield/', 'Accountants in Sheffield'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Clients abroad', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Leeds accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Leeds and West Yorkshire'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.leedsbid.co.uk/governance/', 'LeedsBID: governance and levy 2025 to 2030'],
    ['https://www.gov.uk/guidance/investment-zones-in-england', 'GOV.UK: Investment Zones in England'],
    ['https://www.gov.uk/guidance/driving-in-a-clean-air-zone', 'GOV.UK: Driving in a Clean Air Zone'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
  ],
};
