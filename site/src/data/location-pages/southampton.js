// Accountants in Southampton: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: GOV.UK (Solent Freeport tax sites, clean air zones, rates
// multipliers), Southampton City Council (Freeport rates relief, GO! Southampton BID renewal report),
// ABP (Port of Southampton), Hampshire and the Solent Combined County Authority. Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/southampton/accountants-southampton-hero.jpg';
import port from '../../assets/locations/southampton/accountants-southampton-container-port.jpg';
import cruise from '../../assets/locations/southampton/accountants-southampton-cruise-ship.jpg';
import westquay from '../../assets/locations/southampton/accountants-southampton-westquay.jpg';
import flats from '../../assets/locations/southampton/accountants-southampton-waterfront-flats.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/southampton/',
  primaryKeyword: 'accountants in Southampton',
  secondaryKeywords: [
    'accountant Southampton', 'Southampton accountants for small business', 'tax accountant Southampton',
    'chartered accountants Southampton', 'bookkeeping Southampton', 'Solent Freeport business rates relief',
    'GO! Southampton BID levy', 'accountants Hampshire',
  ],
  title: 'Accountants in Southampton | Severin Finance',
  description: 'Accountants in Southampton for port, logistics and city centre firms: accounts, VAT, payroll and Freeport rates relief checks. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Southampton', '/uk/southampton/'],
  ],
  place: { type: 'City', name: 'Southampton', wikidata: 'Q79848', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Southampton', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'VAT or bookkeeping',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Southampton · Hampshire',
    h1: 'Accountants in Southampton',
    answer: 'As accountants in Southampton, we handle accounts, tax, VAT and payroll for port, logistics, retail and property businesses at fixed fees. Firms that start trading at the Redbridge Freeport tax site can get full business rates relief for five years, and city centre premises at £19,000 rateable value or more pay the GO! Southampton levy.',
    image: hero,
    imageAlt: 'Arches of the medieval town walls in Southampton Old Town, with a wooden boat on the paving in front',
    chip: 'Solent Freeport',
    card: { label: 'Freeport rates relief', value: '5 years', note: 'Full business rates relief for eligible firms at the Redbridge tax site' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Hampshire and the Solent' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Southampton facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Southampton client mix) ----------
  who: {
    eyebrow: 'Who we help in Southampton',
    h2: 'Port firms, cruise suppliers, shops and landlords',
    intro: 'The Port of Southampton supports around 45,600 jobs, and the city also has a large shopping centre and two universities. These are the four groups we help most here.',
    cards: [
      {
        img: port, alt: 'Container ship and cranes at the Southampton container terminal at night',
        tag: 'Port and logistics', title: 'Freight, haulage and Freeport firms',
        text: 'Corporation tax, import VAT and rates relief checks for forwarders, hauliers and warehouse operators. Southampton has the second largest container terminal in the UK.',
        link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      },
      {
        img: cruise, alt: 'Large cruise ship at a Southampton cruise terminal, seen through a gap in the old town walls',
        tag: 'Cruise and visitors', title: 'Cruise suppliers, hotels and tour firms',
        text: 'VAT, payroll and seasonal cash flow for businesses that serve around 3 million cruise passengers a year passing through the five cruise terminals.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: westquay, alt: 'WestQuay shopping centre beside the medieval town walls in Southampton city centre',
        tag: 'City centre', title: 'Shops, bars and restaurants',
        text: 'Payroll, VAT and rates checks for retailers and venues. City centre premises at £19,000 rateable value or more pay the GO! Southampton BID levy each April.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: flats, alt: 'Waterside town houses in front of apartment towers in Southampton',
        tag: 'Property', title: 'Landlords and student lets',
        text: 'Rental accounts, Section 24 planning and capital gains for owners of waterside flats and student houses near the University of Southampton and Solent University.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Southampton ----------
  services: {
    eyebrow: 'Services in Southampton',
    h2: 'What Southampton clients ask us for most',
    intro: 'We run every service online at a fixed fee, for clients in Southampton, Eastleigh, Totton and across the Solent. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings for port suppliers, marine firms and city centre businesses.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'VAT returns', text: 'Registration, postponed VAT accounting for importers and Making Tax Digital returns for goods moving through the port.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for shops, hotels and cruise season staff, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'Invoice finance', text: 'Cash against unpaid invoices for hauliers and logistics firms who wait weeks for customers to pay.', href: '/uk/business-finance/invoice-finance/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and investor paperwork for start-ups and spin-outs at Southampton Science Park in Chilworth.', href: '/uk/company-services/eis-seis/' },
      { title: 'Self assessment', text: 'Returns for directors, landlords and self-employed contractors working in the docks and the city.', href: '/uk/tax/self-assessment-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Southampton) ----------
  facts: {
    eyebrow: 'Southampton facts',
    h2: 'Freeport, rates and BID rules in Southampton',
    intro: 'Southampton sits inside the Solent Freeport, and part of the port is a Freeport tax site. There is no charging Clean Air Zone. The figures for 2026-27 are below.',
    tables: [
      {
        caption: 'Solent Freeport and the Port of Southampton',
        head: ['Item', 'Detail'],
        rows: [
          ['Freeport tax site inside the city', 'Redbridge, at the Port of Southampton'],
          ['Other Solent Freeport tax sites', 'Dunsbury Park, Navigator Quarter, and Fawley and Marchwood on Southampton Water'],
          ['Business rates relief at Redbridge', '100% for five years, for eligible new or expanding businesses'],
          ['Deadline for relief', 'Occupation must start before 30 September 2031'],
          ['Port of Southampton', 'About 3 million cruise passengers and 600,000 vehicles a year'],
        ],
        after: 'Southampton City Council runs the relief scheme for the Redbridge site. The other tax sites are billed by their own councils. We check that your business and premises qualify before you rely on the relief in a forecast.',
      },
      {
        caption: 'Business rates and the GO! Southampton BID, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['GO! Southampton BID', 'Premises at £19,000 rateable value or more'],
          ['BID levy rate', '1.56% in the first year (1.46% where a management charge is paid), with small inflation rises since'],
          ['BID term and billing', '1 April 2022 to 31 March 2027, bills sent in March and due on 1 April'],
        ],
        after: 'Southampton City Council sends the rates bill and the BID levy bill. Ask GO! Southampton for the levy rate that applies this year, as it rises a little each April.',
      },
    ],
    urgent: {
      title: 'The current BID term ends in March 2027',
      text: 'The GO! Southampton term runs to 31 March 2027. Whether it continues depends on a vote by levy payers. If your premises are at £19,000 rateable value or more, we keep the levy in your 2027-28 budget until the result is known.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Southampton clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Southampton clients',
    steps: [
      { title: 'Free consultation', text: 'We start with a free call about your business, your records and your next filing dates.' },
      { title: 'Fixed fee in writing', text: 'A written scope and a fixed price come before any work. We do not bill by the hour.' },
      { title: 'We do the work', text: 'Send records by secure upload or connect us to Xero or QuickBooks. We prepare and file, and remind you before each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Southampton',
      text: 'We work by video, phone and secure upload, which suits port and cruise businesses that work shifts and peak seasons.',
      items: [
        'Video meetings on Teams, Zoom or Google Meet',
        'Secure upload and cloud bookkeeping access',
        'One named contact for your account',
        { text: 'Southampton meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Southampton City Council, ABP, Hampshire and the Solent Combined County Authority and GOV.UK sources. Reliefs and levies change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Southampton clients',
  faqs: [
    { q: 'What is the Solent Freeport business rates relief?', a: 'Eligible new or expanding businesses at a Freeport tax site can get full business rates relief for five years. In Southampton the tax site is Redbridge, at the port. Southampton City Council runs the scheme, and occupation must start before 30 September 2031 to qualify.' },
    { q: 'Which Solent Freeport tax sites are near Southampton?', a: 'Redbridge is the tax site inside the city. The Southampton Water tax site also includes Fawley and Marchwood across the water. The other Solent Freeport tax sites are Dunsbury Park and Navigator Quarter. Rates relief at each site is run by the council that bills it.' },
    { q: 'What is the GO! Southampton BID levy?', a: 'GO! Southampton is the Business Improvement District for the city centre. Premises with a rateable value of £19,000 or more pay a levy. It was 1.56% of rateable value in the first year, or 1.46% where a management charge is paid, with small inflation rises each year since.' },
    { q: 'Is there a Clean Air Zone in Southampton?', a: 'No. Southampton is not on the GOV.UK list of clean air zones, and the council chose a plan without a daily charge in 2019. Vans, taxis and lorries can drive in the city without paying a clean air charge, unlike in Bath or Bristol.' },
    { q: 'Can I reclaim import VAT on goods through Southampton port?', a: 'If you are VAT registered, you can usually use postponed VAT accounting. You declare the import VAT on your VAT return and reclaim it on the same return, so you do not pay it at the border. We set this up and check your monthly import statements.' },
    { q: 'What is the Hampshire and the Solent Combined County Authority?', a: 'It is a combined authority set up in 2026 by Hampshire County Council, Isle of Wight Council, Portsmouth City Council and Southampton City Council. A Board of Leaders runs it for now, and the first mayor is due to be elected in May 2028 for a four-year term.' },
    { q: 'How much does an accountant cost in Southampton?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. The fee depends on your turnover and records, and we confirm it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Southampton clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/brighton/', 'Accountants in Brighton'],
      ['/uk/reading/', 'Accountants in Reading'],
      ['/uk/bath/', 'Accountants in Bath'],
      ['/uk/oxford/', 'Accountants in Oxford'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Business finance', links: [
      ['/uk/business-finance/invoice-finance/', 'Invoice finance'],
      ['/uk/business-finance/asset-finance/', 'Asset finance'],
      ['/uk/business-finance/commercial-mortgages/', 'Commercial mortgages'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Southampton accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Southampton and the Solent'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/government/publications/maps-of-solent-freeport-tax-sites', 'GOV.UK: Solent Freeport tax sites'],
    ['https://www.southampton.gov.uk/business-licensing/business-rates/solent-freeport-business-rate-relief-scheme', 'Southampton City Council: Solent Freeport business rate relief'],
    ['https://southampton.gov.uk/modernGov/%28S%2830n4owbuda0mqe55vsynzn55%29%29/documents/s51052/GO%20Southampton%20BID%20Renewal%20Ballot.pdf', 'Southampton City Council: GO! Southampton BID renewal report'],
    ['https://abports.co.uk/locations/southampton', 'ABP: Port of Southampton'],
    ['https://hantsandsolent-ca.gov.uk/about-us/', 'Hampshire and the Solent Combined County Authority: about us'],
    ['https://www.gov.uk/guidance/driving-in-a-clean-air-zone', 'GOV.UK: Clean air zones in England'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
  ],
};
