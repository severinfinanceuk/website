// Accountants in Liverpool: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: legislation.gov.uk (Freeport tax sites), GOV.UK (Investment
// Zones, rates multipliers), Liverpool BID Company and Liverpool City Council (BIDs). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/liverpool/accountants-liverpool-hero.jpg';
import dock from '../../assets/locations/liverpool/accountants-liverpool-albert-dock.jpg';
import street from '../../assets/locations/liverpool/accountants-liverpool-bold-street.jpg';
import science from '../../assets/locations/liverpool/accountants-liverpool-knowledge-quarter.jpg';
import flats from '../../assets/locations/liverpool/accountants-liverpool-waterfront.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/liverpool/',
  primaryKeyword: 'accountants in Liverpool',
  secondaryKeywords: [
    'accountant Liverpool', 'Liverpool accountants for small business', 'tax accountant Liverpool',
    'chartered accountants Liverpool', 'accountants Merseyside', 'bookkeeping Liverpool',
    'Liverpool Freeport tax site', 'landlord accountant Liverpool',
  ],
  title: 'Accountants in Liverpool | Severin Finance',
  description: 'Accountants in Liverpool for company accounts, tax returns, VAT, payroll and business finance across the city region. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Liverpool', '/uk/liverpool/'],
  ],
  place: { type: 'City', name: 'Liverpool', wikidata: 'Q24826', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Liverpool', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Liverpool · Liverpool City Region',
    h1: 'Accountants in Liverpool',
    answer: 'Our accountants in Liverpool provide company accounts, tax returns, VAT, payroll and business finance for fixed fees. We know the region’s tax sites: the Liverpool City Region Freeport has three, at Wirral Waters, Parkside in St Helens and 3MG in Widnes, and the life sciences Investment Zone adds three more.',
    image: hero,
    imageAlt: 'The Royal Liver Building and the Pier Head waterfront in Liverpool under a blue sky',
    chip: 'Liverpool City Region',
    card: { label: 'Life sciences Investment Zone', value: '£640m', note: 'Private investment expected over 10 years' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Merseyside' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Liverpool facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Liverpool client mix) ----------
  who: {
    eyebrow: 'Who we help in Liverpool',
    h2: 'Traders, venues, founders and landlords in Liverpool',
    intro: 'Liverpool’s economy runs on its port, its visitors, its universities and a large rental market. Most of the people we help here belong to one of four groups.',
    cards: [
      {
        img: dock, alt: 'Royal Albert Dock warehouses with the Liver Building across the water in Liverpool',
        tag: 'Trade and logistics', title: 'Importers, hauliers and traders',
        text: 'Import VAT, customs costs and Freeport tax site checks for businesses linked to the Port of Liverpool and the Freeport sites on both sides of the Mersey.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: street, alt: 'Shoppers walking down a busy pedestrian street of shops in Liverpool city centre',
        tag: 'Retail and hospitality', title: 'Shops, cafés, bars and hotels',
        text: 'Bookkeeping, VAT and payroll for city centre businesses, where premises at £45,000 rateable value or more pay a BID levy on top of business rates.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: science, alt: 'Modern university and research buildings along a wide street in Liverpool',
        tag: 'Life sciences', title: 'Life sciences and university spin-outs',
        text: 'Company formation, SEIS and EIS advance assurance and grant records for founders in and around the Knowledge Quarter, the heart of the life sciences Investment Zone.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: flats, alt: 'New apartment and office blocks beside a dock on the Liverpool waterfront',
        tag: 'Property', title: 'Landlords and property investors',
        text: 'Rental accounts, Section 24 planning and company structures for investors with city centre and waterfront apartments or student lets near the universities.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Liverpool ----------
  services: {
    eyebrow: 'Services in Liverpool',
    h2: 'What Liverpool clients ask us for most',
    intro: 'We provide each service online, at one fixed fee wherever you are on Merseyside. Each card links to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings for Liverpool companies, on a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Returns for sole traders, directors and landlords across Merseyside, filed before 31 January.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, import VAT and quarterly Making Tax Digital returns for traders and hospitality firms.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for hotels, bars and shops with seasonal and part-time staff.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlord accounts', text: 'Rental accounts, Making Tax Digital for landlords and tax planning for Liverpool apartments and student lets.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and compliance statements for life sciences and tech start-ups raising money from investors.', href: '/uk/company-services/eis-seis/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Liverpool) ----------
  facts: {
    eyebrow: 'Liverpool facts',
    h2: 'Tax sites, levies and rates in Liverpool',
    intro: 'The Liverpool City Region has both Freeport and Investment Zone tax sites, and the city centre has more than one BID. The details for 2026-27 are below.',
    tables: [
      {
        caption: 'Tax sites in the Liverpool City Region',
        head: ['Site', 'Scheme'],
        rows: [
          ['Wirral Waters, Birkenhead', 'Freeport tax site'],
          ['Parkside East and West, St Helens', 'Freeport tax site'],
          ['3MG, Widnes', 'Freeport tax site'],
          ['Sci-Tech Daresbury', 'Investment Zone tax site'],
          ['Maghull Health Park', 'Investment Zone tax site'],
          ['St Helens Manufacturing and Innovation Campus', 'Investment Zone tax site'],
        ],
        after: 'The Freeport tax sites were designated from 22 March 2022. Tax site reliefs, such as business rates relief and lower employer National Insurance, depend on the business, the site and the dates, so we check eligibility before you plan around them.',
      },
      {
        caption: 'Business rates and BIDs in Liverpool, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Retail & Leisure BID (fifth term, 2023 to 2028)', 'Premises at £45,000 rateable value or more'],
          ['Culture & Commerce BID (from 1 June 2026)', 'Premises at £45,000 rateable value or more'],
        ],
        after: 'Liverpool City Council sends the rates bill. Businesses voted 116 to 16 for the new Culture & Commerce BID in March 2026. The BID areas differ, so check which one covers your street.',
      },
    ],
    urgent: {
      title: 'A new BID levy started in June 2026',
      text: 'If your premises are in the Culture & Commerce BID area with a rateable value of £45,000 or more, you now pay a levy on top of rates. We add it to your budget along with the April 2026 rates changes.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Liverpool clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Liverpool clients',
    steps: [
      { title: 'Free consultation', text: 'A short call to understand your business, your records and what is due. There is nothing to pay.' },
      { title: 'Fixed fee in writing', text: 'We confirm the scope and a fixed price in writing before any work begins.' },
      { title: 'We do the work', text: 'Share your records online or connect your bookkeeping software. We prepare, check and file, and keep you ahead of each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Liverpool',
      text: 'Clients in the city centre, on the Wirral or in St Helens work with us the same way: by video, phone and secure upload.',
      items: [
        'Video calls at a time that suits you',
        'Secure upload and Xero or QuickBooks access',
        'A named contact who knows your business',
        { text: 'Liverpool meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK, legislation.gov.uk, Liverpool City Council and Liverpool BID Company sources. Schemes and rates change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Liverpool clients',
  faqs: [
    { q: 'What is the Liverpool City Region Freeport?', a: 'It is a Freeport around the Port of Liverpool with three tax sites: Wirral Waters in Birkenhead, Parkside in St Helens and 3MG in Widnes. They were designated from 22 March 2022. Businesses that set up on a tax site may qualify for business rates and employer National Insurance reliefs.' },
    { q: 'Is there an Investment Zone in Liverpool?', a: 'Yes. The Liverpool City Region Investment Zone focuses on life sciences, centred on the Knowledge Quarter Liverpool and the Speke pharmaceutical cluster. Its tax sites are Sci-Tech Daresbury, Maghull Health Park and the St Helens Manufacturing and Innovation Campus. It aims for up to £640m of private investment.' },
    { q: 'Which BIDs operate in Liverpool city centre?', a: 'There are several. The Retail & Leisure BID is in its fifth term, from 2023 to 2028, and covers premises with a rateable value of £45,000 or more. A new Culture & Commerce BID began on 1 June 2026 after a ballot in March 2026, with the same £45,000 threshold.' },
    { q: 'Who sends business rates bills in Liverpool?', a: 'Liverpool City Council, for premises inside the city boundary. Birkenhead, St Helens and Widnes have their own councils (Wirral, St Helens and Halton), so a business on one of those Freeport sites gets its rates bill from that council.' },
    { q: 'Do I need a Liverpool-based accountant?', a: 'No. UK tax rules are the same in Liverpool as anywhere in England, and we work by video, phone and secure upload. What helps is an accountant who knows the local schemes, from Freeport tax sites to city centre BID levies.' },
    { q: 'I live abroad and rent out a Liverpool flat. What do I file?', a: 'You file a UK self assessment return on the rent each year. Under the Non-Resident Landlord Scheme, your letting agent deducts basic rate tax unless HMRC approves you to receive rent in full. We prepare the return and make the application for you.' },
    { q: 'How much does an accountant cost in Liverpool?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Liverpool clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/leeds/', 'Accountants in Leeds'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/milton-keynes/', 'Accountants in Milton Keynes'],
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
    h2: 'Talk to our', em: 'Liverpool accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Liverpool and the city region'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.legislation.gov.uk/uksi/2022/185/regulation/2/made', 'legislation.gov.uk: Liverpool City Region Freeport tax sites, 2022'],
    ['https://www.gov.uk/guidance/investment-zones-in-england', 'GOV.UK: Investment Zones in England'],
    ['https://liverpoolbidcompany.com/retail-leisure-bid/', 'Liverpool BID Company: Retail & Leisure BID'],
    ['https://liverpool.gov.uk/council/consultation-and-engagement/consultation-results/results-of-the-culture-commerce-business-improvement-district-ballot', 'Liverpool City Council: Culture & Commerce BID ballot result'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
  ],
};
