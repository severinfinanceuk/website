// Accountants in Bristol: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Clean Air for Bristol (CAZ charges), Bristol BID and Bristol
// City Council (BIDs), West of England Combined Authority (creative fund), GOV.UK (Investment Zones,
// rates multipliers). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/bristol/accountants-bristol-hero.jpg';
import creative from '../../assets/locations/bristol/accountants-bristol-creative.jpg';
import harbourside from '../../assets/locations/bristol/accountants-bristol-harbourside.jpg';
import flats from '../../assets/locations/bristol/accountants-bristol-waterside-flats.jpg';
import oldCity from '../../assets/locations/bristol/accountants-bristol-old-city.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/bristol/',
  primaryKeyword: 'accountants in Bristol',
  secondaryKeywords: [
    'accountant Bristol', 'Bristol accountants for small business', 'tax accountant Bristol',
    'chartered accountants Bristol', 'bookkeeping Bristol', 'Bristol Clean Air Zone business',
    'Bristol BID levy', 'accountants West of England',
  ],
  title: 'Accountants in Bristol | Severin Finance',
  description: 'Accountants in Bristol for company accounts, tax returns, VAT, payroll and finance, with Clean Air Zone costs planned in. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Bristol', '/uk/bristol/'],
  ],
  place: { type: 'City', name: 'Bristol', wikidata: 'Q23154', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Bristol', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Bristol · West of England',
    h1: 'Accountants in Bristol',
    answer: 'Our accountants in Bristol handle company accounts, tax returns, VAT, payroll and business finance for fixed fees. We plan for the costs of trading here: cars, taxis and vans that do not meet the standard pay £9 a day in the Clean Air Zone, and HGVs, buses and coaches pay £100.',
    image: hero,
    imageAlt: 'Narrowboat moored in Bristol harbour with rows of colourful houses on the hill behind',
    chip: 'West of England',
    card: { label: 'Clean Air Zone', value: '£9 a day', note: 'For cars, taxis and vans that do not meet the standard' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across the West of England' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Bristol facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Bristol client mix) ----------
  who: {
    eyebrow: 'Who we help in Bristol',
    h2: 'Bristol creatives, venues, landlords and founders',
    intro: 'Bristol has a strong creative and digital sector, a busy harbourside and a large rental market. These are the four groups we help most here.',
    cards: [
      {
        img: creative, alt: 'Large painted mural on a city centre building next to an office tower in Bristol',
        tag: 'Creative and digital', title: 'Creative, media and tech firms',
        text: 'Company accounts, VAT and investor-ready forecasts for studios, production companies and software firms, in a region that has created almost 18,500 creative jobs since 2015.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: harbourside, alt: 'Restaurants and bars along the harbourside with boats moored in Bristol',
        tag: 'Hospitality', title: 'Bars, restaurants and venues',
        text: 'Payroll, VAT and rates checks for venues on the harbourside and in the city centre, where premises at £30,000 rateable value or more pay the Bristol BID levy.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: flats, alt: 'Waterside apartment blocks above a marina on Bristol harbour',
        tag: 'Property', title: 'Landlords and property investors',
        text: 'Rental accounts, Section 24 planning and capital gains for landlords with harbourside flats, student lets or family homes across the city.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: oldCity, alt: 'Georgian and Victorian buildings along a street in Bristol city centre',
        tag: 'Start-ups', title: 'Founders and university spin-outs',
        text: 'Company formation, SEIS and EIS advance assurance and grant records for founders, including those around Temple Quarter and the University of Bristol.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
    ],
  },

  // ---------- 3. Services most searched in Bristol ----------
  services: {
    eyebrow: 'Services in Bristol',
    h2: 'What Bristol clients ask us for most',
    intro: 'We run every service online at a fixed fee, wherever you are in Bristol or the West of England. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings for Bristol companies, from studios to engineering firms.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Returns for freelancers, directors and landlords in Bristol, with vehicle and Clean Air Zone costs claimed correctly.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, schemes and Making Tax Digital returns for hospitality, retail and creative businesses.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for venues and growing teams, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and investor paperwork for Bristol start-ups and university spin-outs.', href: '/uk/company-services/eis-seis/' },
      { title: 'Asset finance', text: 'Funding for compliant vans and equipment, so the Clean Air Zone charge stops being a daily cost.', href: '/uk/business-finance/asset-finance/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Bristol) ----------
  facts: {
    eyebrow: 'Bristol facts',
    h2: 'Charges and levies that apply in Bristol',
    intro: 'Bristol has a class D Clean Air Zone, which also charges private cars, and a single BID across the centre. The figures for 2026-27 are below.',
    tables: [
      {
        caption: 'Bristol Clean Air Zone charges',
        head: ['Vehicle', 'Daily charge'],
        rows: [
          ['Private cars, taxis and vans that do not meet the standard', '£9 a day'],
          ['HGVs, buses and coaches that do not meet the standard', '£100 a day'],
          ['Motorcycles', 'No charge'],
          ['Euro 6 diesel vehicles', 'No charge'],
          ['Hours', 'Midnight to midnight, every day of the year'],
        ],
        after: 'A charge paid for a business journey is normally an allowable cost. A penalty for not paying is not, and neither is a charge on your commute between home and your usual workplace.',
      },
      {
        caption: 'Business rates and BIDs in Bristol, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Bristol BID (City Centre, Broadmead, Redcliffe and Temple)', 'Premises at £30,000 rateable value or more, 1 November 2025 to 31 October 2030'],
          ['Bristol BID charity discount', '50% for registered charities, and no cap on the levy'],
          ['Clifton Village BID', '1.5% levy, term from 1 November 2022'],
        ],
        after: 'Bristol City Council sends the rates bill. The merged Bristol BID raises up to £3.8m a year from over 1,000 businesses. Ask Bristol BID which levy rate applies to your premises.',
      },
    ],
    urgent: {
      title: 'One BID now covers the centre',
      text: 'Since 1 November 2025 a single Bristol BID covers the city centre, Broadmead and Redcliffe and Temple, with no cap on the levy. If your premises are at £30,000 rateable value or more, we add it to your budget.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Bristol clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Bristol clients',
    steps: [
      { title: 'Free consultation', text: 'We talk through your business, your records and your next deadlines on a free call.' },
      { title: 'Fixed fee in writing', text: 'You get a written scope and a fixed price before we start, with no hourly billing.' },
      { title: 'We do the work', text: 'Upload records securely or give us access to Xero or QuickBooks. We prepare and file, and remind you before every deadline.' },
    ],
    meet: {
      title: 'Meeting us in Bristol',
      text: 'We work by video, phone and secure upload, so there is no need to drive into the Clean Air Zone or find parking in the centre.',
      items: [
        'Video meetings on Teams, Zoom or Google Meet',
        'Secure upload and cloud bookkeeping access',
        'One named contact for your account',
        { text: 'Bristol meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Bristol City Council, Clean Air for Bristol, Bristol BID, West of England Combined Authority and GOV.UK sources. Charges and levies change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Bristol clients',
  faqs: [
    { q: 'How much is the Bristol Clean Air Zone charge?', a: 'Private cars, taxis and vans that do not meet the emission standards pay £9 a day. HGVs, buses and coaches pay £100 a day. Motorcycles are not charged. The zone runs midnight to midnight, every day of the year, in central Bristol.' },
    { q: 'Can I claim the Clean Air Zone charge as a business expense?', a: 'Usually yes, when the journey is for business. The daily charge counts as a vehicle running cost. Penalty charges for not paying are not allowable, and neither are charges for commuting between home and your usual workplace.' },
    { q: 'What is the Bristol BID?', a: 'It is a single Business Improvement District that joins the City Centre, Broadmead and Redcliffe & Temple BIDs. It runs from 1 November 2025 to 31 October 2030. Premises with a rateable value of £30,000 or more pay a levy, with no cap, and registered charities get a 50% discount.' },
    { q: 'Is there an Investment Zone in Bristol?', a: 'No. The West of England is not one of the Investment Zones in England, so there are no Investment Zone tax sites in Bristol. There is other support, such as the West of England Combined Authority’s £25m Creative Places Growth Fund from 2026.' },
    { q: 'Who sends business rates bills in Bristol?', a: 'Bristol City Council, for premises inside the city. Some large employers nearby, such as the aerospace sites at Filton, are in South Gloucestershire, which has its own council and rates bills. Check which council your premises are in before you apply for relief.' },
    { q: 'Do I need an accountant based in Bristol?', a: 'No. Tax rules are the same in Bristol as across England, and we work online. It does help to use an accountant who knows the local costs, such as the Clean Air Zone, the Bristol BID levy and West of England funding.' },
    { q: 'How much does an accountant cost in Bristol?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. The fee depends on your turnover and records, and we confirm it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Bristol clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/reading/', 'Accountants in Reading'],
      ['/uk/cardiff/', 'Accountants in Cardiff'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/bath/', 'Accountants in Bath'],
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
    h2: 'Talk to our', em: 'Bristol accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Bristol and the West of England'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.cleanairforbristol.org/caz/charges-bristol-clean-air-zone/', 'Clean Air for Bristol: Clean Air Zone charges'],
    ['https://bristolbid.co.uk/bristols-business-improvement-districts-unveil-business-plan-to-unite-and-expand-operations', 'Bristol BID: business plan for the merged BID 2025 to 2030'],
    ['https://www.bristol.gov.uk/business/business-rates/business-rates-explained/business-improvement-districts', 'Bristol City Council: Business Improvement Districts'],
    ['https://www.westofengland-ca.gov.uk/news/west-secures-25-million-to-bolster-world-class-creative-industries/', 'West of England Combined Authority: £25m Creative Places Growth Fund'],
    ['https://www.gov.uk/guidance/investment-zones-in-england', 'GOV.UK: Investment Zones in England'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
  ],
};
