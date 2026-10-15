// Accountants in Leicester: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: BID Leicester (levy FAQs), Leicester City Council (selective
// licensing, rates reliefs 2026/27, news on the mayoral strategic authority request, the dropped
// clean air zone and parking levy), GOV.UK (East Midlands Freeport sites). Sources at the bottom.
// Leicester is NOT in the East Midlands Combined County Authority (Derby, Derbyshire, Nottingham, Notts).

import { rating } from '../reviews.js';
import hero from '../../assets/locations/leicester/accountants-leicester-city-street.jpg';
import makers from '../../assets/locations/leicester/accountants-leicester-rutland-street.jpg';
import shops from '../../assets/locations/leicester/accountants-leicester-corner-shops.jpg';
import terraces from '../../assets/locations/leicester/accountants-leicester-terraced-street.jpg';
import research from '../../assets/locations/leicester/accountants-leicester-cathedral-path.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/leicester/',
  primaryKeyword: 'accountants in Leicester',
  secondaryKeywords: [
    'accountant Leicester', 'small business accountant Leicester', 'tax accountant Leicester',
    'chartered accountants Leicester', 'bookkeeping Leicester', 'landlord accountant Leicester',
    'accountants Leicestershire', 'BID Leicester levy',
  ],
  title: 'Accountants in Leicester | Severin Finance',
  description: 'Accountants in Leicester for company accounts, VAT, payroll, landlord tax and bookkeeping across Leicestershire. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Leicester', '/uk/leicester/'],
  ],
  place: { type: 'City', name: 'Leicester', wikidata: 'Q83065', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Leicester', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'VAT or bookkeeping',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Leicester · Leicestershire',
    h1: 'Accountants in Leicester',
    answer: 'Our accountants in Leicester prepare company accounts, VAT returns, payroll and landlord tax for fixed fees. We know what applies here: city centre premises with a rateable value of £20,000 or more pay a 1.25% BID Leicester levy, while the city has no clean air charge and no workplace parking levy.',
    image: hero,
    imageAlt: 'Red-brick Victorian buildings reflected in a puddle on a street in Leicester city centre',
    chip: 'Leicestershire',
    card: { label: 'BID Leicester levy', value: '1.25%', note: 'Of rateable value, for city centre premises at £20,000 or more' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Leicester and Leicestershire' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Leicester facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Leicester client mix) ----------
  who: {
    eyebrow: 'Who we help in Leicester',
    h2: 'Leicester makers, traders, landlords and researchers',
    intro: 'Leicester still makes things, from clothing and textiles to food, and its two universities run space and health research. Most of the clients we work with here fit one of four groups.',
    cards: [
      {
        img: makers, alt: 'Red-brick building on the corner of Rutland Street in Leicester city centre',
        tag: 'Makers', title: 'Textile, clothing and food manufacturers',
        text: 'Bookkeeping, VAT and payroll for makers and wholesalers, with stock, shift pay at the £12.71 National Living Wage and machinery costs set out clearly for capital allowances and HMRC.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: shops, alt: 'Victorian red-brick corner building with a shop front in Leicester city centre',
        tag: 'Retail and food', title: 'Shops, restaurants and venues',
        text: 'VAT, payroll and rates checks for shops and restaurants in the BID Leicester area, where the levy is 1.25% of rateable value, or 1% for units inside a shopping centre.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: terraces, alt: 'Terraced houses and parked cars on a Leicester street, with city centre towers behind',
        tag: 'Property', title: 'Landlords in licensing areas',
        text: 'Rental accounts, Section 24 planning and licence costs for landlords. A selective licence costs £1,290 in parts of Westcotes, Fosse, Stoneygate, Saffron and Braunstone Park and Rowley Fields.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: research, alt: 'A footpath beside a Gothic stone church in Leicester city centre in autumn',
        tag: 'Research and start-ups', title: 'Space, health and university spinouts',
        text: 'Company accounts, R&D records and SEIS or EIS advance assurance for start-ups linked to the University of Leicester, Space Park Leicester and De Montfort University.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
    ],
  },

  // ---------- 3. Services most searched in Leicester ----------
  services: {
    eyebrow: 'Services in Leicester',
    h2: 'What Leicester clients ask us for most',
    intro: 'Everything is done online, at the same fixed fees for a business in the city centre, Oadby or Wigston. Each card links to the full service page.',
    items: [
      { title: 'VAT returns', text: 'Registration, scheme choice and Making Tax Digital returns for wholesalers, makers and online sellers with stock moving every week.', href: '/uk/tax/vat-accountant/' },
      { title: 'Limited company accounts', text: 'Year-end accounts, corporation tax and Companies House filings for Leicester companies, from city centre firms to workshops on the industrial estates.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for factories, shops and restaurants with shift and part-time staff.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlord accounts', text: 'Rental accounts and tax returns for Leicester landlords, with selective licence fees and repairs claimed correctly.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Bookkeeping', text: 'Monthly bookkeeping, debtor reports and cash flow forecasts for makers and wholesalers who wait weeks for retail customers to pay.', href: '/uk/accounting/bookkeeping-services/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and investor paperwork for space, engineering and health start-ups raising their first funds.', href: '/uk/company-services/eis-seis/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Leicester) ----------
  facts: {
    eyebrow: 'Leicester facts',
    h2: 'What is different about trading in Leicester',
    intro: 'Tax rules are national, but Leicester has its own BID, licensing areas and rates reliefs, and no combined authority yet. Here is what applies in 2026-27.',
    tables: [
      {
        caption: 'Business rates and BID Leicester, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['BID Leicester levy (RV £20,000 or more)', '1.25% of rateable value'],
          ['Units inside a shopping centre', '1% BID levy'],
          ['Pubs and live music venues relief, 2026/27', '15% off the rates bill'],
        ],
        after: 'Premises with a rateable value under £20,000 pay no BID levy. BID Leicester is in its second five-year term, under its 2023 to 2028 business plan. Leicester City Council bills rates in the city. Supporting small business relief caps the rise for firms that lost relief in April 2026 at £800, or a percentage cap, whichever is greater.',
      },
      {
        caption: 'Leicester schemes and charges',
        head: ['Item', 'Detail'],
        rows: [
          ['Combined authority', 'None yet: council leaders asked the government for a mayoral strategic authority in September 2026'],
          ['Clean air zone', 'None: Defra confirmed in 2021 that a zone for buses and taxis was not needed'],
          ['Workplace Parking Levy', 'None: the council dropped the plan in November 2022'],
          ['Freeport', 'East Midlands Freeport, with a customs site at Space Park Leicester'],
          ['Selective licence (parts of 5 areas)', '£1,290, with £1,032 paid on application'],
          ['National Living Wage (21 and over)', '£12.71 an hour from 1 April 2026'],
        ],
        after: 'Leicester is not part of the East Midlands Combined County Authority, which covers Derby, Derbyshire, Nottingham and Nottinghamshire. The Freeport tax sites are outside the city: the East Midlands Airport and Gateway Industrial Cluster in North West Leicestershire, East Midlands Intermodal Park and Ratcliffe on Soar.',
      },
    ],
    urgent: {
      title: 'Lost small business rate relief in April?',
      text: 'The new rating list on 1 April 2026 pushed some Leicester shops and workshops out of small business rate relief. Supporting small business relief caps the rise and is usually applied automatically. We check your bill and rebuild your forecast.',
      cta: 'Get a rates check',
    },
  },

  // ---------- 6. How we work with Leicester clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Leicester clients',
    steps: [
      { title: 'Free consultation', text: 'A short video or phone call about your business, your records and what is due next. There is no charge.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the fee in writing before we start. The fee changes only if the work does.' },
      { title: 'We do the work', text: 'Send records by secure upload or share your cloud bookkeeping. We prepare, check and file everything, and remind you before each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Leicester',
      text: 'We work online, so a business in the city centre, Oadby or Wigston gets the same service. Most meetings happen by video.',
      items: [
        'Video or phone calls at a time that suits you',
        'Secure document upload and cloud bookkeeping access',
        'A named contact who knows your file',
        { text: 'Leicester meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'We checked this page against BID Leicester, Leicester City Council and GOV.UK sources. Rates reliefs, licence fees and the plans for a Leicestershire mayoral authority can change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Leicester clients',
  faqs: [
    { q: 'Is Leicester part of the East Midlands Combined County Authority?', a: 'No. The East Midlands Combined County Authority covers Derby, Derbyshire, Nottingham and Nottinghamshire. Leicester, Leicestershire and Rutland are outside it. In September 2026 the ten council leaders across the three areas wrote to the government asking for a mayoral strategic authority of their own.' },
    { q: 'Is there a clean air zone or parking levy in Leicester?', a: 'No to both. Leicester dropped its planned clean air zone for buses and taxis in 2021, after Defra confirmed it was not needed because air quality had improved. The council dropped its workplace parking levy plan in November 2022. Nottingham does charge a parking levy, so firms with sites in both cities should check.' },
    { q: 'What is the BID Leicester levy?', a: 'It is an extra charge for city centre businesses with a rateable value of £20,000 or more. The levy is 1.25% of rateable value, or 1% for businesses inside a shopping centre. Premises below £20,000 are exempt. The BID is in its second five-year term, under its 2023 to 2028 business plan.' },
    { q: 'Do I need a selective licence to let a house in Leicester?', a: 'Only in the designated areas, which cover parts of Braunstone Park and Rowley Fields, Fosse, Westcotes, Stoneygate and Saffron. The licence costs £1,290, with £1,032 paid when you apply and £258 later. Larger HMOs need a different licence. We include the fee in your rental accounts.' },
    { q: 'Does the East Midlands Freeport help Leicester businesses?', a: 'It can if you trade through a Freeport site. Space Park Leicester is a customs site, where approved businesses can suspend duty on goods held there. The tax sites, with rates and employer National Insurance reliefs, are outside the city, including the East Midlands Airport and Gateway Industrial Cluster in North West Leicestershire.' },
    { q: 'I live abroad and own a Leicester property. What do I need to file?', a: 'You still file a UK return for the rent. Under the Non-Resident Landlord Scheme your agent deducts basic rate tax unless HMRC approves gross payment. If you sell, the disposal must be reported to HMRC within 60 days. We handle both, plus any selective licence costs.' },
    { q: 'How much does an accountant in Leicester cost?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. We confirm the exact fee in writing after a free consultation, based on your turnover, stock and the state of your records.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Leicester clients', links: [
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/resources/making-tax-digital-for-landlords/', 'Making Tax Digital for landlords'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/nottingham/', 'Accountants in Nottingham'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/milton-keynes/', 'Accountants in Milton Keynes'],
      ['/uk/sheffield/', 'Accountants in Sheffield'],
      ['/uk/cambridge/', 'Accountants in Cambridge'],
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
    h2: 'Talk to our', em: 'Leicester accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Leicester and Leicestershire'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://bidleicester.co.uk/faqs/', 'BID Leicester: levy FAQs'],
    ['https://www.leicester.gov.uk/business/business-rates/reliefs-and-exemptions/', 'Leicester City Council: business rates reliefs and exemptions'],
    ['https://www.leicester.gov.uk/housing/landlords/property-licensing/selective-licensing', 'Leicester City Council: selective licensing'],
    ['https://news.leicester.gov.uk/news-articles/2026/september/council-leaders-call-for-mayoral-strategic-authority/', 'Leicester City Council: council leaders call for a mayoral strategic authority'],
    ['https://news.leicester.gov.uk/news-articles/2021/november/no-need-for-planned-clean-air-zone-for-buses-and-taxis-as-air-quality-improves', 'Leicester City Council: no need for a clean air zone for buses and taxis'],
    ['https://news.leicester.gov.uk/news-articles/2022/november/council-drops-workplace-parking-levy-proposals-due-to-cost-of-living-crisis/', 'Leicester City Council: workplace parking levy proposals dropped'],
    ['https://www.gov.uk/government/publications/maps-of-east-midlands-freeport-tax-sites', 'GOV.UK: East Midlands Freeport tax sites'],
  ],
};
