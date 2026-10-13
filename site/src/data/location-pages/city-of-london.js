// Accountants in the City of London: all copy, local facts and SEO for one location page (the Square Mile).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: City of London Corporation (rates premium, BIDs, residents and workers),
// GLA (Crossrail BRS), GOV.UK (rates multipliers, off-payroll working), TfL (Congestion Charge). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/city-of-london/accountants-city-of-london-gherkin-towers.jpg';
import offices from '../../assets/locations/city-of-london/accountants-city-of-london-offices-at-night.jpg';
import street from '../../assets/locations/city-of-london/accountants-city-of-london-street-towers.jpg';
import stpauls from '../../assets/locations/city-of-london/accountants-city-of-london-st-pauls-bridge.jpg';
import skyline from '../../assets/locations/city-of-london/accountants-city-of-london-skyline-dusk.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/city-of-london/',
  primaryKeyword: 'accountants in the City of London',
  secondaryKeywords: [
    'accountants City of London', 'accountant Square Mile', 'City of London business rates',
    'City of London business rate premium', 'contractor accountant City of London',
    'chartered accountants EC2', 'tax accountant City of London', 'City of London BID levy',
  ],
  title: 'Accountants in the City of London | Severin Finance',
  description: 'Accountants in the City of London for company accounts, contractors, payroll and VAT, with the City rates premium built in. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['City of London', '/uk/london/city-of-london/'],
  ],
  place: { type: 'City', name: 'City of London', wikidata: 'Q23311', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in the City of London', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'City of London · The Square Mile',
    h1: 'Accountants in the City of London',
    answer: 'Our accountants in the City of London handle company accounts, payroll, VAT and tax for firms, contractors and residents of the Square Mile. Business rates here carry a City premium of up to 3.2p per £1 on top of the national rate, plus the Crossrail supplement above £92,000. We plan for both.',
    image: hero,
    imageAlt: 'The Gherkin and the Scalpel among glass office towers in the City of London',
    chip: 'City of London Corporation',
    card: { label: 'City rates premium', value: '3.2p', note: 'Per £1 of rateable value on top of national rates, 2026-27' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Firms, contractors and residents' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'City facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Square Mile client mix) ----------
  who: {
    eyebrow: 'Who we help in the City',
    h2: 'Firms and people who work in the Square Mile',
    intro: 'The City has about 8,600 residents but around 614,500 people work here. Our clients are mostly the smaller firms and the individuals inside that working population.',
    cards: [
      {
        img: offices, alt: 'The Gherkin and lit office windows in the City of London at night',
        tag: 'Financial services', title: 'Brokers, advisers and boutique firms',
        text: 'Management accounts, corporation tax and board reporting for small insurance brokers, wealth managers and advisory firms that need finance support without a full-time finance director.',
        link: ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      },
      {
        img: street, alt: 'Ornate Victorian office buildings and a glass tower on a City of London street',
        tag: 'Contractors', title: 'Contractors on bank and insurer projects',
        text: 'Limited company accounts and IR35 checks for IT, change and risk contractors. Large City clients usually decide your status themselves and must give you a status determination statement.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
      {
        img: stpauls, alt: 'Millennium Bridge leading to St Paul’s Cathedral at sunset',
        tag: 'Professional firms', title: 'Law firms, partners and consultants',
        text: 'Partnership and LLP returns, partners’ self assessment and payments on account for law, audit and consulting practices from Fleet Street to Aldgate.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment'],
      },
      {
        img: skyline, alt: 'City of London skyline across the River Thames at dusk',
        tag: 'Residents and owners', title: 'City flat owners, here or abroad',
        text: 'Rental accounts and UK returns for owners of flats in the Barbican and around the City, including owners who now live abroad and receive rent through the Non-Resident Landlord Scheme.',
        link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      },
    ],
  },

  // ---------- 3. Services most searched in the City ----------
  services: {
    eyebrow: 'Services in the City',
    h2: 'What City clients ask us for most',
    intro: 'All of this is done online, so a firm on Lime Street and a contractor working from home pay the same fixed fee. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Year-end accounts and Companies House filings for City firms and personal service companies, on a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Contractor accounts', text: 'Accounts, dividends and IR35 reviews for contractors placed at City banks, insurers and law firms.', href: '/uk/accounting/contractor-accountant/' },
      { title: 'Corporation tax', text: 'Corporation tax returns and quarterly instalment planning for profitable City companies.', href: '/uk/tax/corporation-tax-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI filings and pensions for small City teams paying salaries, bonuses and benefits.', href: '/uk/accounting/payroll-services/' },
      { title: 'VAT returns', text: 'VAT registration and quarterly returns, including the partial exemption questions that come up in financial services.', href: '/uk/tax/vat-accountant/' },
      { title: 'Virtual finance director', text: 'Monthly management accounts, forecasts and board packs for City firms without an in-house finance director.', href: '/uk/accounting/virtual-finance-director/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in the City) ----------
  facts: {
    eyebrow: 'City facts',
    h2: 'Why a City rates bill is higher',
    intro: 'The City of London Corporation is its own billing authority. It adds a City premium to the national multipliers, so the same rateable value costs more here than in any London borough. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business rates in the City of London, 2026-27',
        head: ['Rate', 'Amount'],
        rows: [
          ['City premium (set by the Court of Common Council)', '2.9p per £1 on small business rates, 3.2p on all others'],
          ['Small business (RV under £51,000), City total', '46.1p per £1 (41.1p for retail, hospitality and leisure)'],
          ['Standard (RV £51,000 to £499,999), City total', '51.2p per £1 (46.2p for retail, hospitality and leisure)'],
          ['High value (RV £500,000 or more), City total', '54.0p per £1'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on rateable values over £92,000'],
          ['One-year City supplement from 1 April 2026', 'A further 1p per £1, offset for properties on Transitional Relief or Supporting Small Business relief'],
        ],
        after: 'The City premium pays for policing, security and resilience in the Square Mile. Pubs and live music venues get a 15% reduction in 2026-27. Check that your bill uses the right multiplier for your rateable value.',
      },
      {
        caption: 'The Square Mile in numbers',
        head: ['Item', 'Figure'],
        rows: [
          ['Residents (Census 2021)', 'About 8,600'],
          ['People working in the City (ONS 2022)', 'About 614,500'],
          ['Business Improvement Districts', '5: Aldgate Connect, Cheapside, Culture Mile, Fleet Street Quarter and Eastern City'],
          ['Congestion Charge', 'The whole City is inside the zone: £18 a day from 2 January 2026'],
        ],
        after: 'Each BID charges its own levy, worked out from rateable value. ULEZ also applies here, as it does across London. A business journey charge is usually an allowable cost; a penalty is not.',
      },
    ],
    urgent: {
      title: 'Your 2026-27 City bill has three layers',
      text: 'National multiplier, City premium and, above £92,000 rateable value, the Crossrail supplement. Add the one-year 1p supplement and a BID levy and the total can surprise you. We check your bill and build it into your forecast.',
      cta: 'Get your rates bill checked',
    },
  },

  // ---------- 6. How we work with City clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with City clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting, at a time that suits a City working day, about your company, your contract or your property. No charge.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before we start. Year-end, payroll and tax returns are priced together, not by the hour.' },
      { title: 'We do the work', text: 'Upload records securely or give us Xero or QuickBooks access. We prepare, check and file, and track every HMRC and Companies House deadline.' },
    ],
    meet: {
      title: 'Meeting us in the City',
      text: 'Most City clients deal with us by video and phone, often before or after the working day. Nobody needs to drive into the Congestion Charge zone to see us.',
      items: [
        'Early and late video calls on request',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'City of London meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against City of London Corporation, Greater London Authority, GOV.UK and TfL sources. The City premium and supplements are set every year: we update the page when they change.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from City of London clients',
  faqs: [
    { q: 'Who sends the business rates bill in the City of London?', a: 'The City of London Corporation, not a borough council. It collects national business rates, the City premium set by the Court of Common Council and, for larger properties, the Crossrail supplement. All of them appear on the same bill.' },
    { q: 'What is the City of London business rate premium?', a: 'It is an extra charge on top of the national multipliers. For 2026-27 it is 2.9p per £1 of rateable value on the small business multiplier and 3.2p on the others. The money pays for policing, security, resilience and contingency planning in the City.' },
    { q: 'Does the Crossrail supplement apply in the City?', a: 'Yes, if your rateable value is over £92,000. It is 2p per £1 for 2026-27, collected with your rates. Below that threshold you pay nothing, though the City premium still applies.' },
    { q: 'Do City firms pay a BID levy?', a: 'Many do. There are five Business Improvement Districts in the City: Aldgate Connect, Cheapside, Culture Mile, Fleet Street Quarter and Eastern City. Each sets its own levy, based on rateable value, and spends it on its own area. Check whether your address falls inside one.' },
    { q: 'I contract for a City bank. Who decides my IR35 status?', a: 'For a medium or large client, the client does. It must give you a status determination statement with its reasons. We review the contract and your working practices, and help you challenge the statement if you disagree with it.' },
    { q: 'Is the City inside the Congestion Charge zone?', a: 'Yes, the whole Square Mile is inside it. The charge is £18 a day from 2 January 2026, and ULEZ applies too. Charges paid for business journeys in a business vehicle are usually allowable. Your commute and any penalty notices are not.' },
    { q: 'How much does an accountant cost in the City of London?', a: 'Our fixed fees start at £XXX a month for a limited company and £XXX for a contractor company. The exact fee depends on your turnover, payroll and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
    ] },
    { title: 'Nearby areas', links: [
      ['/uk/london/shoreditch/', 'Accountants in Shoreditch'],
      ['/uk/london/islington/', 'Accountants in Islington'],
      ['/uk/london/canary-wharf/', 'Accountants in Canary Wharf'],
      ['/uk/london/westminster/', 'Accountants in Westminster'],
      ['/uk/london/camden/', 'Accountants in Camden'],
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
    h2: 'Talk to our', em: 'City of London accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'City rates premium planned in'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.cityoflondon.gov.uk/services/business-rates/how-your-bill-is-calculated', 'City of London Corporation: How your business rates bill is calculated'],
    ['https://www.cityoflondon.gov.uk/supporting-businesses/commercial-property-support-and-advice/city-business-improvement-districts', 'City of London Corporation: City Business Improvement Districts'],
    ['https://www.cityoflondon.gov.uk/about-us/plans-policies/our-corporate-plan/who-we-are', 'City of London Corporation: Who we are (residents and workers)'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/guidance/understanding-off-payroll-working-ir35', 'GOV.UK: Understanding off-payroll working (IR35)'],
    ['https://tfl.gov.uk/modes/driving/congestion-charge', 'TfL: Congestion Charge'],
  ],
};
