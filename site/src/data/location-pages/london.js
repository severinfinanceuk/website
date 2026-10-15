// Accountants in London: all copy, local facts and SEO for one location page (the London hub).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: GLA (Crossrail BRS), GOV.UK (rates multipliers, minimum wage),
// Living Wage Foundation (London Living Wage), TfL (Congestion Charge, ULEZ). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/london/accountants-london-red-bus.jpg';
import cafe from '../../assets/locations/london/accountants-london-cafe-storefront.jpg';
import tech from '../../assets/locations/london/accountants-london-tech-week.jpg';
import houses from '../../assets/locations/london/accountants-london-colourful-buildings.jpg';
import abroad from '../../assets/locations/london/accountants-london-bridge-walkers.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/',
  primaryKeyword: 'accountants in London',
  secondaryKeywords: [
    'accountant London', 'London accountants for small business', 'tax accountant London',
    'chartered accountants London', 'accountancy firm London', 'bookkeeping London',
    'business rates London', 'Crossrail business rate supplement',
  ],
  title: 'Accountants in London | Severin Finance',
  description: 'Accountants in London for tax returns, company accounts, VAT, payroll and bookkeeping across all 32 boroughs. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
  ],
  place: { type: 'City', name: 'London', wikidata: 'Q84', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in London', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'London · All 32 boroughs and the City',
    h1: 'Accountants in London',
    answer: 'Our accountants in London handle tax returns, company accounts, VAT, payroll and bookkeeping for fixed fees, across all 32 boroughs and the City. We plan for the costs that only apply here, from the Crossrail rates supplement above £92,000 rateable value to ULEZ charges and the London Living Wage.',
    image: hero,
    imageAlt: 'Red double-decker bus passing Piccadilly Circus in central London on a sunny day',
    chip: '32 boroughs + the City',
    card: { label: 'Crossrail levy', value: '£92,000', note: 'Rateable value threshold from 1 April 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in London and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'London facts'],
    ['areas', 'Areas'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the London client mix) ----------
  who: {
    eyebrow: 'Who we help in London',
    h2: 'London businesses, landlords and people with London ties',
    intro: 'London has more businesses than any other UK city and some of its highest costs: rents, rates, wages and transport. Most of our London clients fall into four groups.',
    cards: [
      {
        img: cafe, alt: 'Small café with chalkboard menus on a wet cobbled street in London',
        tag: 'Small business', title: 'Shops, cafés and restaurants',
        text: 'Bookkeeping, VAT and payroll for high street businesses, with wages set at the £12.71 National Living Wage or the £14.80 London Living Wage, and a rates bill that changed in April 2026.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: tech, alt: 'London Tech Week sign at a busy exhibition hall',
        tag: 'Start-ups', title: 'Start-ups and scale-ups',
        text: 'Company formation, SEIS and EIS advance assurance for investors, R&D records and management accounts for founders in Shoreditch, King’s Cross, Canary Wharf and beyond.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: houses, alt: 'Row of pastel-painted stucco houses with parked cars on a west London street',
        tag: 'Property', title: 'Landlords and property investors',
        text: 'Rental accounts, Section 24, buy-to-let companies and capital gains on sales, for landlords with one London flat or a portfolio across several boroughs.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: abroad, alt: 'People walking over Waterloo Bridge with St Paul’s and the City of London skyline behind',
        tag: 'Clients abroad', title: 'People abroad with London ties',
        text: 'UK tax returns for people who moved away but kept a London home, a company or rental income, including the Non-Resident Landlord Scheme and UK companies run from abroad.',
        link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      },
    ],
  },

  // ---------- 3. Services most searched in London ----------
  services: {
    eyebrow: 'Services in London',
    h2: 'What London clients ask us for most',
    intro: 'Every service is UK-wide and done online, so where you are in London makes no difference to the price. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for London limited companies, with a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Tax returns for sole traders, directors, landlords and higher earners, filed before the 31 January deadline.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'VAT registration, scheme choice and quarterly returns under Making Tax Digital for London traders.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI filings and pensions, set up for the April 2026 wage rates and London Living Wage employers.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlords and property', text: 'Rental accounts, Making Tax Digital for landlords and tax planning for London buy-to-let portfolios.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Management accounts', text: 'Monthly management accounts, cash flow forecasts and board packs for growing London businesses, without a full-time finance director.', href: '/uk/accounting/virtual-finance-director/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in London) ----------
  facts: {
    eyebrow: 'London facts',
    h2: 'Costs that only apply in London',
    intro: 'National tax rules are the same across England. London adds its own layer: a rates supplement, transport charges and a higher voluntary wage. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business rates in London, 2026-27',
        head: ['Rate', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 of rateable value'],
          ['Small retail, hospitality and leisure', '38.2p per £1'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['High value multiplier (RV £500,000 or more)', '50.8p per £1'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on rateable values over £92,000'],
        ],
        after: 'About 87% of London properties are below the Crossrail threshold and pay no supplement. The 40% retail, hospitality and leisure relief ended on 31 March 2026. Your borough council sends the bill (the City of London Corporation in the Square Mile).',
      },
      {
        caption: 'Wages and transport in London, 2026',
        head: ['Item', 'Amount'],
        rows: [
          ['National Living Wage (21 and over), legal minimum', '£12.71 an hour from 1 April 2026'],
          ['London Living Wage (voluntary)', '£14.80 an hour'],
          ['Congestion Charge (central zone)', '£18 a day from 2 January 2026'],
          ['ULEZ (all London boroughs)', '£12.50 a day for vehicles that do not meet the standards'],
        ],
        after: 'Congestion Charge paid for business journeys is usually an allowable cost. Penalty charge notices are not. Check vehicle compliance on the TfL website before you buy a van.',
      },
    ],
    urgent: {
      title: 'Rates and wages went up in April 2026',
      text: 'New multipliers, the end of the 40% retail relief and a higher National Living Wage hit London margins at the same time. We rebuild your cash flow forecast around the new figures.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 5. Areas we cover (London hub only) ----------
  areas: {
    eyebrow: 'Areas of London',
    h2: 'London areas we cover',
    intro: 'We work with clients in every borough. These pages cover the areas we are asked about most, with the local council, client mix and costs for each.',
    items: [
      { name: 'City of London', href: '/uk/london/city-of-london/', text: 'The Square Mile: finance, law and insurance firms, and their contractors.', meta: 'City of London Corporation' },
      { name: 'Canary Wharf', href: '/uk/london/canary-wharf/', text: 'Banks, fintechs and professional firms on the Isle of Dogs.', meta: 'Tower Hamlets' },
      { name: 'Westminster', href: '/uk/london/westminster/', text: 'The West End, Mayfair and Soho: retail, hospitality and creative firms.', meta: 'Westminster City Council' },
      { name: 'Kensington', href: '/uk/london/kensington/', text: 'Prime homes, landlords and families with assets in several places.', meta: 'Kensington and Chelsea' },
      { name: 'Camden', href: '/uk/london/camden/', text: 'King’s Cross, Camden Town and Holborn: tech, life sciences and venues.', meta: 'Camden' },
      { name: 'Islington', href: '/uk/london/islington/', text: 'Angel, Highbury and Old Street: freelancers, agencies and cafés.', meta: 'Islington' },
      { name: 'Shoreditch', href: '/uk/london/shoreditch/', text: 'Start-ups, creative studios, bars and restaurants in east London.', meta: 'Hackney' },
      { name: 'Stratford', href: '/uk/london/stratford/', text: 'The Olympic Park, Westfield and new businesses in east London.', meta: 'Newham' },
      { name: 'Croydon', href: '/uk/london/croydon/', text: 'South London’s largest town centre: owner-managed firms and trades.', meta: 'Croydon' },
      { name: 'Richmond', href: '/uk/london/richmond/', text: 'Independent shops, consultants and family businesses by the Thames.', meta: 'Richmond upon Thames' },
      { name: 'Wimbledon', href: '/uk/london/wimbledon/', text: 'Town centre businesses, professionals and landlords in south-west London.', meta: 'Merton' },
    ],
  },

  // ---------- 6. How we work with London clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with London clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your business, your figures and your deadlines. No charge and no obligation.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before any work starts. No hourly billing and no surprise invoices.' },
      { title: 'We do the work', text: 'You upload records online or connect Xero or QuickBooks. We prepare, check and file, and remind you of every deadline.' },
    ],
    meet: {
      title: 'Meeting us in London',
      text: 'Most London clients never need to travel: we work by video, phone and secure upload, so you skip the Congestion Charge and the commute.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'London meeting address to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK, Greater London Authority and TfL sources. Rates, wages and charges change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from London clients',
  faqs: [
    { q: 'Do I need an accountant based in London?', a: 'No. Tax rules for London are the same as for the rest of England, and most of our London work is done online. What matters is an accountant who knows the local costs, such as the Crossrail rates supplement, ULEZ and London wage rates.' },
    { q: 'What is the Crossrail Business Rate Supplement?', a: 'It is an extra charge on business rates in London that helps pay for the Elizabeth line. For 2026-27 it is 2p per £1 of rateable value, but only for properties with a rateable value over £92,000. About 87% of London properties pay nothing.' },
    { q: 'Who sends the business rates bill in London?', a: 'Your borough council, or the City of London Corporation if your premises are in the Square Mile. The Crossrail supplement, if it applies, is collected on the same bill.' },
    { q: 'Do I have to pay the London Living Wage?', a: 'No. The London Living Wage of £14.80 an hour is voluntary. The legal minimum is the National Living Wage, £12.71 an hour for workers aged 21 and over from 1 April 2026. Some employers pay the London rate to recruit and keep staff.' },
    { q: 'Can my business claim the Congestion Charge or ULEZ?', a: 'Usually yes, when the charge is paid for a business journey in a business vehicle. Penalty charge notices for not paying are not allowable. Charges for commuting between home and your normal workplace are not business costs.' },
    { q: 'I live abroad but own a London flat. Can you help?', a: 'Yes. You still file a UK tax return on the rent. Your letting agent or tenant may have to deduct tax under the Non-Resident Landlord Scheme unless HMRC approves you to receive rent in full. We handle the return and the application.' },
    { q: 'How much does an accountant cost in London?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Across the UK', links: [
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/bristol/', 'Accountants in Bristol'],
      ['/uk/cambridge/', 'Accountants in Cambridge'],
      ['/uk/reading/', 'Accountants in Reading'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Clients abroad', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'London accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'All 32 boroughs and the City'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
    ['https://www.livingwage.org.uk/what-real-living-wage', 'Living Wage Foundation: London Living Wage'],
    ['https://tfl.gov.uk/modes/driving/congestion-charge', 'TfL: Congestion Charge'],
    ['https://tfl.gov.uk/modes/driving/ultra-low-emission-zone', 'TfL: Ultra Low Emission Zone'],
  ],
};
