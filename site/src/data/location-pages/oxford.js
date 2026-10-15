// Accountants in Oxford: all copy, local facts and SEO for one location page (UK city).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Oxford City Council (additional HMO licensing), Oxfordshire
// County Council (Zero Emission Zone, traffic filters), GOV.UK (rates multipliers, EIS limits).
// Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/oxford/accountants-oxford-radcliffe-camera.jpg';
import lab from '../../assets/locations/oxford/accountants-oxford-lab-microscopes.jpg';
import houses from '../../assets/locations/oxford/accountants-oxford-terraced-houses.jpg';
import shops from '../../assets/locations/oxford/accountants-oxford-city-centre-shops.jpg';
import street from '../../assets/locations/oxford/accountants-oxford-street-parked-cars.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/oxford/',
  primaryKeyword: 'accountants in oxford',
  secondaryKeywords: [
    'accountant Oxford', 'tax accountant Oxford', 'landlord accountant Oxford',
    'HMO licence Oxford', 'start-up accountant Oxford', 'small business accountant Oxford',
    'Oxford Zero Emission Zone', 'Oxford traffic filters',
  ],
  title: 'Accountants in Oxford | Severin Finance',
  description: 'Accountants in Oxford for landlords, spin-outs, shops and trades: tax returns, company accounts, EIS and payroll. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Oxford', '/uk/oxford/'],
  ],
  place: { type: 'City', name: 'Oxford', wikidata: 'Q34217', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Oxford', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Oxford · Oxfordshire',
    h1: 'Accountants in Oxford',
    answer: 'Our accountants in Oxford help spin-outs, landlords, shops and trades with tax, accounts, payroll and bookkeeping for fixed fees. Local rules add costs: a new citywide HMO licensing scheme started on 25 June 2026, and cars without a permit crossing the traffic filters since 28 September 2026 face a £70 fine.',
    image: hero,
    imageAlt: 'The Radcliffe Camera and surrounding college buildings in central Oxford',
    chip: 'Oxford City Council',
    card: { label: 'Traffic filter fine', value: '£70', note: 'For cars without a permit, from 28 September 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in Oxford and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Oxford facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Oxford client mix) ----------
  who: {
    eyebrow: 'Who we help in Oxford',
    h2: 'Oxford spin-outs, landlords, shops and trades',
    intro: 'Oxford has a large rental market, a stream of university spin-outs and a compact centre with strict traffic rules. Most of our Oxford clients fall into four groups.',
    cards: [
      {
        img: lab, alt: 'Row of white microscopes on a laboratory bench',
        tag: 'Spin-outs', title: 'Spin-outs and life sciences',
        text: 'Company set-up, SEIS and EIS advance assurance, R&D claims and EMI share options for founders around the university and the science parks.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: houses, alt: 'Yellow and blue painted terraced houses with sash windows',
        tag: 'Property', title: 'Landlords and HMO owners',
        text: 'Rental accounts, capital gains and tax planning for Oxford lets. Since 25 June 2026 most shared houses with three or more tenants need a licence from Oxford City Council.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: shops, alt: 'Shops and historic stone buildings on a street in central Oxford',
        tag: 'City centre', title: 'Shops, cafés and visitor businesses',
        text: 'Bookkeeping, VAT and payroll for city centre traders, with deliveries planned around the Zero Emission Zone and the traffic filters.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: street, alt: 'Quiet Oxford street of stone buildings with parked cars',
        tag: 'Trades', title: 'Trades, drivers and delivery firms',
        text: 'Accounts, vehicle costs and capital allowances for people who drive into Oxford for work. A zero-emission van pays no ZEZ charge, and we work out the tax relief on making the switch.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      },
    ],
  },

  // ---------- 3. Services most searched in Oxford ----------
  services: {
    eyebrow: 'Services in Oxford',
    h2: 'What Oxford clients ask us for most',
    intro: 'Every service runs online, so a landlord in Headington and a founder in the centre pay the same fixed fee. Each card opens the full service page.',
    items: [
      { title: 'Landlords and HMOs', text: 'Rental accounts for single lets and HMOs, with licence fees and compliance costs recorded properly.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Self assessment', text: 'Tax returns for Oxford landlords, academics with side income and self-employed trades.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and compliance statements for Oxford spin-outs raising money from investors.', href: '/uk/company-services/eis-seis/' },
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and R&D claims for Oxford start-ups and owner-managed firms.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Capital gains tax', text: 'Gains on the sale of Oxford rental homes, reported and paid within the 60-day deadline.', href: '/uk/tax/capital-gains-tax-accountant/' },
      { title: 'Bookkeeping', text: 'Monthly bookkeeping for trades working in central Oxford, with ZEZ charges, vehicle costs and zero-emission van allowances recorded correctly.', href: '/uk/accounting/bookkeeping-services/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Oxford) ----------
  facts: {
    eyebrow: 'Oxford facts',
    h2: 'Rules that only apply in Oxford',
    intro: 'Tax rules are national, but Oxford adds its own costs: a zero emission zone, traffic filters and citywide HMO licensing. Rates figures are for 2026-27.',
    tables: [
      {
        caption: 'Driving in central Oxford, 2026',
        head: ['Rule', 'What it means'],
        rows: [
          ['Zero Emission Zone pilot (9 central streets, 7am to 7pm)', 'Zero-emission vehicles free; others pay a daily charge set by emissions'],
          ['Traffic filters (6 points, from 28 September 2026)', 'Cars need a permit; vans and HGVs are exempt'],
          ['Traffic filter fine', '£70, or £35 if paid within 21 days'],
          ['First 6 months of traffic filters', 'A warning letter for a first offence'],
        ],
        after: 'The traffic filters replaced the temporary £5 congestion charge. ZEZ charges paid on business journeys are usually an allowable cost. Fines are not.',
      },
      {
        caption: 'Rates and HMO licensing in Oxford, 2026-27',
        head: ['Item', 'Amount or rule'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 of rateable value'],
          ['Small retail, hospitality and leisure', '38.2p per £1'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Additional HMO licensing (3 or 4 tenants)', 'Citywide for 5 years from 25 June 2026'],
          ['Mandatory HMO licensing', '5 or more tenants'],
        ],
        after: 'Oxford City Council bills business rates in the city. Science parks outside it, such as Harwell in the Vale of White Horse, are billed by that district council.',
      },
    ],
    urgent: {
      title: 'New HMO licence rules from June 2026',
      text: 'If you let a shared house in Oxford to three or four tenants, you probably need an additional licence. We record the licence fee and any upgrade works correctly in your rental accounts.',
      cta: 'Review my rental accounts',
    },
  },

  // ---------- 6. How we work with Oxford clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Oxford clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your lets, your company or your tax return. You hear what we would do and when.' },
      { title: 'Fixed fee in writing', text: 'We send the scope and the fee before work starts. Extra properties or an investment round are priced upfront too.' },
      { title: 'We do the work', text: 'You upload records or connect Xero or QuickBooks. We prepare and file, and track your licence, tax and Companies House dates.' },
    ],
    meet: {
      title: 'Meeting us in Oxford',
      text: 'Oxford clients work with us online, so there is no need to drive through the traffic filters or find parking in the centre.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Oxford meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Oxford City Council, Oxfordshire County Council and GOV.UK sources. Charges, licences and rates change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Oxford clients',
  faqs: [
    { q: 'Do I need an HMO licence for my Oxford rental?', a: 'Probably, if three or more tenants from more than one household share it. Oxford City Council’s additional licensing scheme covers HMOs with three or four tenants citywide for five years from 25 June 2026. Homes with five or more tenants fall under mandatory licensing. We include licence costs in your rental accounts.' },
    { q: 'What is the Oxford Zero Emission Zone?', a: 'It is a pilot zone on nine central streets, including Cornmarket Street, Queen Street and New Inn Hall Street, running from 7am to 7pm since February 2022. Zero-emission vehicles pay nothing. Other vehicles pay a daily charge based on their emissions, so check the current rate before you drive in.' },
    { q: 'Do the Oxford traffic filters apply to my van?', a: 'No. Since 28 September 2026 the six traffic filters stop cars without a permit at set times. Vans and HGVs are exempt. Cars that pass without a permit get a £70 fine, or £35 if paid within 21 days, with a warning for a first offence in the first six months.' },
    { q: 'Can my business claim ZEZ charges as an expense?', a: 'Usually yes, when you pay the charge for a business journey in a business vehicle. Penalty charges and traffic filter fines are not allowable. Charges on trips between home and your normal workplace are commuting costs, so they do not count either.' },
    { q: 'Who sends the business rates bill in Oxford?', a: 'Oxford City Council bills premises within the city. Many research sites sit outside it: Harwell, for example, is in the Vale of White Horse, so that district council sends the bill. The 2026-27 multipliers are the same across England.' },
    { q: 'Can you help an Oxford spin-out with SEIS and EIS?', a: 'Yes. We set up the company, apply for SEIS or EIS advance assurance and keep the records investors check. From 6 April 2026 a company can raise up to £10m a year under EIS, or £20m if it is knowledge-intensive. We can also set up EMI share options for early staff.' },
    { q: 'How much does an accountant cost in Oxford?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
    ] },
    { title: 'Nearby locations', links: [
      ['/uk/reading/', 'Accountants in Reading'],
      ['/uk/milton-keynes/', 'Accountants in Milton Keynes'],
      ['/uk/cambridge/', 'Accountants in Cambridge'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
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
    h2: 'Talk to our', em: 'Oxford accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Landlords, founders and trades'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.oxford.gov.uk/houses-multiple-occupation-hmos/additional-licensing-scheme', 'Oxford City Council: HMO additional licensing scheme'],
    ['https://news.oxfordshire.gov.uk/britains-first-zero-emission-zone-begins-in-oxford/', 'Oxfordshire County Council: Zero Emission Zone pilot'],
    ['https://blogs.oxfordshire.gov.uk/traffic-filters/', 'Oxfordshire County Council: Oxford traffic filters'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/publications/enterprise-investment-scheme-eis-and-venture-capital-trusts-vct-changes', 'GOV.UK: EIS and VCT changes from April 2026'],
  ],
};
