// Accountants in Birmingham: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Brum Breathe (Clean Air Zone charges), Birmingham City Council
// (2026-27 rates and council tax booklet), WMCA and GOV.UK (Investment Zone), GOV.UK (multipliers).
// Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/birmingham/accountants-birmingham-hero.jpg';
import makers from '../../assets/locations/birmingham/accountants-birmingham-jewellery-quarter.jpg';
import offices from '../../assets/locations/birmingham/accountants-birmingham-offices.jpg';
import canal from '../../assets/locations/birmingham/accountants-birmingham-canal-flats.jpg';
import venues from '../../assets/locations/birmingham/accountants-birmingham-brindleyplace.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/birmingham/',
  primaryKeyword: 'accountants in Birmingham',
  secondaryKeywords: [
    'accountant Birmingham', 'Birmingham accountants for small business', 'tax accountant Birmingham',
    'chartered accountants Birmingham', 'bookkeeping Birmingham', 'Birmingham Clean Air Zone business',
    'business rates Birmingham', 'landlord accountant Birmingham',
  ],
  title: 'Accountants in Birmingham | Severin Finance',
  description: 'Accountants in Birmingham for company accounts, tax returns, VAT, payroll and finance, with Clean Air Zone costs planned in. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Birmingham', '/uk/birmingham/'],
  ],
  place: { type: 'City', name: 'Birmingham', wikidata: 'Q2256', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Birmingham', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Birmingham · West Midlands',
    h1: 'Accountants in Birmingham',
    answer: 'Our accountants in Birmingham prepare company accounts, tax returns, VAT and payroll for fixed fees, and arrange business finance. We plan for local costs as well: cars and vans that do not meet the standard pay £8 a day to drive inside the A4540 Middleway, and coaches and HGVs pay £50.',
    image: hero,
    imageAlt: 'The Library of Birmingham with its gold and metal lattice front in Centenary Square',
    chip: 'West Midlands',
    card: { label: 'Clean Air Zone', value: '£8 a day', note: 'For cars, taxis and vans that do not meet the standard' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across the West Midlands' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Birmingham facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Birmingham client mix) ----------
  who: {
    eyebrow: 'Who we help in Birmingham',
    h2: 'Makers, professional firms, landlords and venues',
    intro: 'Birmingham still makes things, from jewellery to engineering parts, and it is also a large centre for offices, rentals and nightlife. Our clients here tend to fall into four groups.',
    cards: [
      {
        img: makers, alt: 'Red-brick Victorian factory buildings with tall windows in Birmingham',
        tag: 'Makers', title: 'Workshops and small manufacturers',
        text: 'Stock records, VAT and capital allowances for jewellers, makers and small manufacturers in the Jewellery Quarter and across the city, where tools and machinery matter at year end.',
        link: ['/uk/business-finance/asset-finance/', 'Asset finance'],
      },
      {
        img: offices, alt: 'Glass office tower behind a Victorian building with a domed clock tower in Birmingham',
        tag: 'Professional services', title: 'Consultants and professional firms',
        text: 'Company accounts, director tax returns and monthly management accounts for consultants, agencies and advisers working from offices in the city centre.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: canal, alt: 'Apartment blocks beside a Birmingham canal with narrowboats moored along the towpath',
        tag: 'Property', title: 'Landlords and property investors',
        text: 'Rental accounts, Section 24 planning and company structures for landlords with city centre flats, student lets near the universities or homes across the West Midlands.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: venues, alt: 'Bars and restaurants beside the canal at Brindleyplace in Birmingham',
        tag: 'Hospitality', title: 'Bars, restaurants and venues',
        text: 'Payroll, VAT and rates checks for venues around Brindleyplace, Broad Street and the canals, including the 15% relief for pubs and live music venues in 2026-27.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
    ],
  },

  // ---------- 3. Services most searched in Birmingham ----------
  services: {
    eyebrow: 'Services in Birmingham',
    h2: 'What Birmingham clients ask us for most',
    intro: 'We deliver every service online, at the same fixed price anywhere in Birmingham and the West Midlands. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings for Birmingham companies, from one-person consultancies to family manufacturers.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Returns for sole traders, directors and landlords, with Clean Air Zone charges and travel costs claimed correctly.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, schemes and Making Tax Digital returns for Jewellery Quarter traders, wholesalers and online sellers.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and auto-enrolment for venues, shops and workshops, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'Asset finance', text: 'Funding for compliant vans, machinery and equipment, with the cost spread over the working life of the asset.', href: '/uk/business-finance/asset-finance/' },
      { title: 'Business loans', text: 'Loans and cash flow funding for Birmingham firms, with forecasts built on the new 2026 rates bill.', href: '/uk/business-finance/business-loans/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Birmingham) ----------
  facts: {
    eyebrow: 'Birmingham facts',
    h2: 'Costs that are specific to Birmingham',
    intro: 'Birmingham has a charging Clean Air Zone and a council still recovering its finances. These are the local figures that matter for 2026-27.',
    tables: [
      {
        caption: 'Birmingham Clean Air Zone',
        head: ['Item', 'Detail'],
        rows: [
          ['Cars, taxis and vans that do not meet the standard', '£8 a day'],
          ['Coaches, buses and HGVs that do not meet the standard', '£50 a day'],
          ['Where it applies', 'All roads inside the A4540 Middleway, not the ring road itself'],
          ['When it applies', '24 hours a day, every day of the year'],
          ['When to pay', 'From 6 days before to 6 days after the journey'],
        ],
        after: 'If you do not pay in time, you get a penalty charge notice. Businesses can open an account to pay for several vehicles. A daily charge for a business journey is normally an allowable cost; a penalty is not.',
      },
      {
        caption: 'Business rates and council tax in Birmingham, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Transitional relief, RV up to £20,000', 'Bill increase limited to 5%'],
          ['Transitional relief, RV £20,000 to £100,000', 'Bill increase limited to 15%'],
          ['Transitional relief, RV over £100,000', 'Bill increase limited to 30%'],
          ['Band D council tax, all parts', '£2,353.17, up 5.19%'],
        ],
        after: 'Birmingham City Council sends the rates bill, based on the new rating list from 1 April 2026. After two council tax rises above the usual limit, the council’s own share goes up 4.99% this year, and its budget needs no Exceptional Financial Support.',
      },
    ],
    urgent: {
      title: 'A non-compliant van costs £8 every day it enters',
      text: 'A van that drives into the zone on 250 working days pays £2,000 a year in charges. We compare that with replacing it, including asset finance and the capital allowances on a new vehicle.',
      cta: 'Talk to us about vehicle costs',
    },
  },

  // ---------- 6. How we work with Birmingham clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Birmingham clients',
    steps: [
      { title: 'Free consultation', text: 'We start with a call about what you need, what you have already filed and what is due next. It costs nothing.' },
      { title: 'Fixed fee in writing', text: 'You receive the scope of work and a fixed price before we begin, so there are no hourly bills.' },
      { title: 'We do the work', text: 'Send records through secure upload or connect your bookkeeping software. We prepare and file everything and keep track of your deadlines.' },
    ],
    meet: {
      title: 'Meeting us in Birmingham',
      text: 'We work by video, phone and secure upload, so you do not need to drive into the Clean Air Zone to see us.',
      items: [
        'Video meetings on Teams, Zoom or Google Meet',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Birmingham meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Birmingham City Council, Brum Breathe, West Midlands Combined Authority and GOV.UK sources. Charges and rates change each year, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Birmingham clients',
  faqs: [
    { q: 'Can my business claim the Birmingham Clean Air Zone charge?', a: 'Usually yes, if the vehicle is used for a business journey. The £8 daily charge for a car or van that does not meet the standard is a running cost, like fuel or parking. A penalty charge notice for paying late or not paying is not allowable.' },
    { q: 'Where is the Birmingham Clean Air Zone?', a: 'It covers all roads inside the A4540 Middleway ring road, but not the Middleway itself. It runs 24 hours a day, all year. You can pay up to 6 days before or 6 days after you drive in, and businesses can set up an account for several vehicles.' },
    { q: 'What did the section 114 notice mean for Birmingham businesses?', a: 'Birmingham City Council issued a section 114 notice in September 2023, which stops new spending that is not essential. Business rates multipliers are set nationally, so they did not change. Council tax rose above the usual limit for two years, and the council’s own share rises 4.99% for 2026-27.' },
    { q: 'Does the West Midlands Investment Zone offer tax relief?', a: 'Yes, on its tax site. Businesses that move into the Birmingham Knowledge Quarter tax site can get 100% business rates relief for 5 years, plus enhanced capital allowances and employer National Insurance relief. The zone focuses on battery, digital and sustainable construction technologies.' },
    { q: 'Why did my Birmingham rates bill change in April 2026?', a: 'A new rating list took effect on 1 April 2026, with new multipliers, and the 40% retail, hospitality and leisure relief ended. Transitional relief limits the increase for 2026-27 to 5% for properties up to £20,000 rateable value, 15% up to £100,000 and 30% above that.' },
    { q: 'Do you help landlords abroad with Birmingham property?', a: 'Yes. Rent from Birmingham property is taxed in the UK wherever you live. Under the Non-Resident Landlord Scheme your agent or tenant deducts basic rate tax unless HMRC lets you receive rent in full. We file your UK return and make the application.' },
    { q: 'How much does an accountant cost in Birmingham?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The fee depends on your turnover and records, and we confirm it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Birmingham clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/oxford/', 'Accountants in Oxford'],
      ['/uk/milton-keynes/', 'Accountants in Milton Keynes'],
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/bristol/', 'Accountants in Bristol'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Business finance', links: [
      ['/uk/business-finance/asset-finance/', 'Asset finance'],
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/business-finance/invoice-finance/', 'Invoice finance'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Birmingham accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Birmingham and the West Midlands'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.brumbreathes.co.uk/info/25/welcome-2/45/charges-operation-1/3', 'Brum Breathe: Clean Air Zone charges'],
    ['https://www.birmingham.gov.uk/download/downloads/id/9476/non-domestic_rates_budget_booklet_for_2026_to_2027.pdf', 'Birmingham City Council: business rates and budget booklet 2026 to 2027'],
    ['https://www.wmca.org.uk/what-we-do/economy-and-innovation/west-midlands-investment-zone', 'West Midlands Combined Authority: West Midlands Investment Zone'],
    ['https://www.gov.uk/guidance/investment-zones-in-england', 'GOV.UK: Investment Zones in England'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/publications/birmingham-city-council-explanatory-memorandum/birmingham-city-council-explanatory-memorandum', 'GOV.UK: Birmingham City Council intervention, explanatory memorandum'],
  ],
};
