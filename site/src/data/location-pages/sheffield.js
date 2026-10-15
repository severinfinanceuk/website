// Accountants in Sheffield: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Sheffield City Council (clean air zone charges), Sheffield BID
// (levy rules 2026-31), GOV.UK (clean air zones, Investment Zones, rates multipliers, National
// Living Wage). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/sheffield/accountants-sheffield-town-hall.jpg';
import steel from '../../assets/locations/sheffield/accountants-sheffield-women-of-steel.jpg';
import kelham from '../../assets/locations/sheffield/accountants-sheffield-kelham-island.jpg';
import shops from '../../assets/locations/sheffield/accountants-sheffield-shop-street.jpg';
import skyline from '../../assets/locations/sheffield/accountants-sheffield-skyline.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/sheffield/',
  primaryKeyword: 'accountants in Sheffield',
  secondaryKeywords: [
    'accountant Sheffield', 'small business accountant Sheffield', 'tax accountant Sheffield',
    'chartered accountants Sheffield', 'accountants South Yorkshire', 'bookkeeping Sheffield',
    'landlord accountant Sheffield', 'Sheffield clean air zone charge',
  ],
  title: 'Accountants in Sheffield | Severin Finance',
  description: 'Accountants in Sheffield for company accounts, tax returns, VAT, payroll and capital allowances in South Yorkshire. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Sheffield', '/uk/sheffield/'],
  ],
  place: { type: 'City', name: 'Sheffield', wikidata: 'Q42448', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Sheffield', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Sheffield · South Yorkshire',
    h1: 'Accountants in Sheffield',
    answer: 'Our accountants in Sheffield handle company accounts, tax returns, VAT, payroll and bookkeeping for fixed fees. We build in the local costs: vans and taxis that miss the emission standards pay £10 a day inside the clean air zone, and city centre premises with a rateable value of £40,000 or more pay a 1.75% BID levy.',
    image: hero,
    imageAlt: 'Sheffield Town Hall clock tower behind the fountains of the Peace Gardens in autumn',
    chip: 'South Yorkshire',
    card: { label: 'Clean air zone', value: '£10 a day', note: 'For vans, taxis and private hire vehicles that miss the standards' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Sheffield and South Yorkshire' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Sheffield facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Sheffield client mix) ----------
  who: {
    eyebrow: 'Who we help in Sheffield',
    h2: 'Sheffield engineers, venues, trades and landlords',
    intro: 'Sheffield grew on steel and still has a strong engineering base, alongside a lively food and drink scene and two large universities. Most of the clients we work with here fit one of four groups.',
    cards: [
      {
        img: steel, alt: 'The Women of Steel statue in Sheffield city centre, honouring women who worked in the steel industry',
        tag: 'Engineering', title: 'Engineering and advanced manufacturing',
        text: 'Company accounts, capital allowances and cash flow planning for engineering firms, toolmakers and suppliers to the University of Sheffield Advanced Manufacturing Research Centre.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: kelham, alt: 'A red-brick former works building with a tall chimney in Kelham Island, Sheffield',
        tag: 'Hospitality', title: 'Bars, breweries and restaurants',
        text: 'Bookkeeping, VAT and payroll for venues in Kelham Island and the city centre. Hotels are exempt from the BID levy, but bars and restaurants with a rateable value of £40,000 or more pay it.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: shops, alt: 'A Sheffield shopping street of terraced shops with parked cars and vans',
        tag: 'Trades and vans', title: 'Trades, shops and van operators',
        text: 'Vehicle costs, VAT and capital allowances for trades and retailers. A non-compliant van pays £10 for each day it drives inside the clean air zone, so we check when replacing it pays off.',
        link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      },
      {
        img: skyline, alt: 'Sheffield city centre skyline above the railway station on a clear day',
        tag: 'Property', title: 'Landlords and student lets',
        text: 'Rental accounts, Section 24 planning and buy-to-let company advice for landlords letting to students at the University of Sheffield and Sheffield Hallam, and to city centre tenants.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Sheffield ----------
  services: {
    eyebrow: 'Services in Sheffield',
    h2: 'What Sheffield clients ask us for most',
    intro: 'We work online and charge the same fixed fees anywhere in South Yorkshire. Each card links to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Year-end accounts, corporation tax and Companies House filings for Sheffield companies, from Kelham Island to the Lower Don Valley.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Corporation tax', text: 'Corporation tax returns and capital allowances on machine tools, vans and equipment, including vans replaced to avoid the clean air zone charge.', href: '/uk/tax/corporation-tax-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for workshops, venues and shops, set up for the £12.71 National Living Wage from April 2026.', href: '/uk/accounting/payroll-services/' },
      { title: 'VAT returns', text: 'Registration and Making Tax Digital returns for makers, venues and online sellers across the city.', href: '/uk/tax/vat-accountant/' },
      { title: 'Self assessment', text: 'Tax returns for directors, sole traders and student-let landlords, filed before the 31 January deadline.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'EIS and SEIS', text: 'Advance assurance for spinouts and start-ups, including those using the lab and spin-out space the Investment Zone aims to open in the city centre.', href: '/uk/company-services/eis-seis/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Sheffield) ----------
  facts: {
    eyebrow: 'Sheffield facts',
    h2: 'What is different about trading in Sheffield',
    intro: 'Tax rules are national, but Sheffield charges older commercial vehicles in its clean air zone and has a new BID term. Here is what applies in 2026-27.',
    tables: [
      {
        caption: 'Business rates and the Sheffield BID, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Sheffield BID levy (RV £40,000 or more)', '1.75% of rateable value, rising a fixed 3% a year from year 2'],
          ['BID cap', '£20,000 per property, £45,000 per ratepayer'],
          ['Charities with mandatory rates relief', '60% of the standard levy'],
        ],
        after: 'The BID term runs from 1 April 2026 to 31 March 2031 and uses 2023 rating list values throughout, so the 2026 revaluation does not change the levy. Sheffield City Council collects it. Hotels, hospitals and schools for children under 16 are exempt.',
      },
      {
        caption: 'Clean air zone and South Yorkshire schemes',
        head: ['Item', 'Detail'],
        rows: [
          ['Clean air zone', 'Class C, covering the inner ring road and city centre'],
          ['Non-compliant taxis, private hire vehicles and vans', '£10 a day'],
          ['Non-compliant buses, coaches and HGVs', '£50 a day'],
          ['Private cars and motorbikes', 'Not charged'],
          ['Combined authority', 'South Yorkshire Mayoral Combined Authority (Barnsley, Doncaster, Rotherham, Sheffield)'],
          ['Investment Zone', 'Advanced manufacturing, with no tax sites'],
        ],
        after: 'Diesel vans need a Euro 6 engine and petrol vans Euro 4 to avoid the charge. You can pay up to 6 days before, on the day or up to 6 days after. The Investment Zone funds sites and research space in Sheffield city centre and the Advanced Manufacturing Innovation District, not tax reliefs for individual firms.',
      },
    ],
    urgent: {
      title: 'Driving an older van into the city centre?',
      text: 'A non-compliant van pays £10 for each day inside the clean air zone. Five days a week, that is about £2,600 a year. We compare it with the cost of a compliant van, after capital allowances.',
      cta: 'Compare van costs',
    },
  },

  // ---------- 6. How we work with Sheffield clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Sheffield clients',
    steps: [
      { title: 'Free consultation', text: 'A video or phone call to talk through your business, your figures and your next deadlines, free of charge.' },
      { title: 'Fixed fee in writing', text: 'We confirm the scope and the fee in writing first. It stays the same unless the work changes.' },
      { title: 'We do the work', text: 'Share records by secure upload or through your cloud bookkeeping. We prepare, check and file, with a reminder before every deadline.' },
    ],
    meet: {
      title: 'Meeting us in Sheffield',
      text: 'We work online, so a client in Kelham Island, Hillsborough or Rotherham gets the same service. Most meetings happen by video.',
      items: [
        'Video or phone calls at a time that suits you',
        'Secure document upload and cloud bookkeeping access',
        'A named contact who knows your file',
        { text: 'Sheffield meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'We checked this page against Sheffield City Council, Sheffield BID and GOV.UK sources. Clean air zone charges, the BID levy and wage rates can change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Sheffield clients',
  faqs: [
    { q: 'Do I have to pay the Sheffield clean air zone charge?', a: 'Only if you drive a non-compliant taxi, private hire vehicle, van, bus, coach or HGV inside the zone. Private cars and motorbikes are not charged. Vans and taxis pay £10 a day and buses, coaches and HGVs pay £50. Diesel vans need a Euro 6 engine and petrol vans Euro 4.' },
    { q: 'What is the Sheffield BID levy?', a: 'It is a charge on city centre premises with a rateable value of £40,000 or more, collected by Sheffield City Council. For the 2026 to 2031 term it is 1.75% of the 2023 rateable value, capped at £20,000 per property, and the rate rises by a fixed 3% a year from year 2.' },
    { q: 'Does the South Yorkshire Investment Zone cut my tax?', a: 'No. The South Yorkshire Investment Zone chose not to designate any tax sites, so there is no rates or National Insurance relief for individual firms. The money goes on sites, infrastructure and research space in Sheffield city centre, the Advanced Manufacturing Innovation District, Rotherham, Doncaster and Barnsley.' },
    { q: 'Is Sheffield part of a combined authority?', a: 'Yes. Sheffield is one of four councils in the South Yorkshire Mayoral Combined Authority, with Barnsley, Doncaster and Rotherham. It has an elected mayor. Business rates are still billed by Sheffield City Council, which also collects the BID levy for city centre premises.' },
    { q: 'Can you help a Sheffield landlord with student lets?', a: 'Yes. We prepare rental accounts and returns for landlords letting to students at both universities. Mortgage interest only gets basic rate relief under Section 24, so we check whether a company suits new purchases. From April 2026, landlords with qualifying income over £50,000 also need Making Tax Digital records.' },
    { q: 'I left Sheffield to live abroad. Do I still file UK returns?', a: 'You may. If you keep a Sheffield house or flat, the rent is still taxed in the UK and the Non-Resident Landlord Scheme applies. If you run a UK company from abroad, it still files accounts and corporation tax returns here. We handle the returns online.' },
    { q: 'How much does an accountant in Sheffield cost?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. We confirm the exact fee in writing after a free consultation, based on your turnover, staff and the state of your records.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Sheffield clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/resources/capital-allowances-explained/', 'Capital allowances explained'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/leeds/', 'Accountants in Leeds'],
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/nottingham/', 'Accountants in Nottingham'],
      ['/uk/leicester/', 'Accountants in Leicester'],
      ['/uk/liverpool/', 'Accountants in Liverpool'],
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
    h2: 'Talk to our', em: 'Sheffield accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Sheffield and South Yorkshire'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.sheffield.gov.uk/clean-air-zone-sheffield/clean-air-zone-charges-and-how-pay', 'Sheffield City Council: clean air zone charges and how to pay'],
    ['https://www.gov.uk/guidance/driving-in-a-clean-air-zone', 'GOV.UK: Driving in a clean air zone'],
    ['https://www.sheffieldbid.com/levy-rules-explained', 'Sheffield BID: levy rules explained'],
    ['https://www.gov.uk/guidance/investment-zones-in-england', 'GOV.UK: Investment Zones in England'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
  ],
};
