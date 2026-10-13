// Accountants in Bath: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Bath and North East Somerset Council (Clean Air Zone charges
// and penalties, BID ballot result), Bath BID (fourth term), GOV.UK (self-catering rates rules,
// rates multipliers), West of England Combined Authority. Sources at the bottom.
// The Bath BID levy rate for 2026 to 2031 was not confirmed, so it is left out.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/bath/accountants-bath-hero.jpg';
import cafe from '../../assets/locations/bath/accountants-bath-cafe-street.jpg';
import crescent from '../../assets/locations/bath/accountants-bath-royal-crescent.jpg';
import shops from '../../assets/locations/bath/accountants-bath-shops-street.jpg';
import traffic from '../../assets/locations/bath/accountants-bath-traffic-street.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/bath/',
  primaryKeyword: 'accountants in Bath',
  secondaryKeywords: [
    'accountant Bath', 'Bath accountants for small business', 'tax accountant Bath',
    'holiday let accountant Bath', 'bookkeeping Bath', 'Bath Clean Air Zone business',
    'Bath BID', 'accountants Bath and North East Somerset',
  ],
  title: 'Accountants in Bath | Severin Finance',
  description: 'Accountants in Bath for hotels, shops, trades and holiday let owners: tax returns, VAT, payroll and accounts at fixed fees. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Bath', '/uk/bath/'],
  ],
  place: { type: 'City', name: 'Bath', wikidata: 'Q22889', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Bath', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Bath · Bath and North East Somerset',
    h1: 'Accountants in Bath',
    answer: 'Our accountants in Bath look after hotels, cafés, independent shops, trades and holiday let owners, with tax returns, VAT, payroll and accounts at fixed fees. Here, vans and taxis below the standard pay £9 a day in the Bath Clean Air Zone, and a holiday let must be let for 70 nights a year to pay business rates.',
    image: hero,
    imageAlt: 'Pulteney Bridge and the weir on the River Avon in Bath, framed by trees',
    chip: 'Bath and North East Somerset',
    card: { label: 'Bath BID renewal vote', value: '300 of 311', note: 'Votes in favour of a fourth Bath BID term from 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Bath and North East Somerset' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Bath facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Bath client mix) ----------
  who: {
    eyebrow: 'Who we help in Bath',
    h2: 'Hotels, holiday lets, independents and trades',
    intro: 'Bath is a small city with a large visitor economy, many short-term lets and a centre full of independent shops. These are the four groups we help most here.',
    cards: [
      {
        img: cafe, alt: 'Café tables under red umbrellas on a stone street of Georgian buildings in Bath',
        tag: 'Visitor economy', title: 'Hotels, cafés and restaurants',
        text: 'Payroll, VAT and rates checks for venues that live on visitor trade. Retail, hospitality and leisure premises under £51,000 rateable value pay the lower 38.2p multiplier in 2026-27.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: crescent, alt: 'The Royal Crescent, a curved terrace of Georgian houses above a lawn in Bath',
        tag: 'Holiday lets', title: 'Holiday let owners and landlords',
        text: 'Rental accounts and rates advice for short-term lets. A let is only rated as a business if it is available for 140 nights and actually let for 70 nights a year.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: shops, alt: 'Lit shop fronts along a stone street in Bath at dusk, with church towers above',
        tag: 'Independents', title: 'Independent shops and makers',
        text: 'Bookkeeping, VAT and year-end accounts for owner-run shops and studios in the city centre, where the Bath BID started its fourth term in 2026.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      },
      {
        img: traffic, alt: 'City bus and traffic on a Georgian street in Bath in evening sun, with a church spire behind',
        tag: 'Trades and drivers', title: 'Builders, couriers and taxi drivers',
        text: 'Self assessment and van cost planning for trades who work in the centre. Vans, taxis and minibuses below the standard pay £9 a day. Private cars are not charged.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Bath ----------
  services: {
    eyebrow: 'Services in Bath',
    h2: 'What Bath clients ask us for most',
    intro: 'We work online at a fixed fee for clients in Bath, Keynsham, Midsomer Norton and the villages around them. Each card goes to the full service page.',
    items: [
      { title: 'Self assessment', text: 'Returns for holiday let owners, sole traders and directors in Bath, with property and vehicle costs claimed correctly.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Landlord accounts', text: 'Rental figures for holiday lets, student houses near the University of Bath and Bath Spa University, and family lets.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Capital gains tax', text: 'Gains on selling a holiday let or second home, now that the furnished holiday let rules have ended.', href: '/uk/tax/capital-gains-tax-accountant/' },
      { title: 'VAT returns', text: 'Registration, schemes and Making Tax Digital returns for hotels, restaurants and shops with seasonal takings.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for venues that take on extra staff for the busy months, at the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings for Bath companies, from design studios to building firms.', href: '/uk/accounting/limited-company-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Bath) ----------
  facts: {
    eyebrow: 'Bath facts',
    h2: 'Charges, levies and letting rules in Bath',
    intro: 'Bath has a class C Clean Air Zone, which does not charge private cars, and a city centre BID that won a fourth term in 2025. The figures for 2026-27 are below.',
    tables: [
      {
        caption: 'Bath Clean Air Zone charges',
        head: ['Vehicle or rule', 'Detail'],
        rows: [
          ['Private cars and motorbikes', 'No charge'],
          ['Taxis, private hire cars, minibuses and vans below the standard', '£9 a day'],
          ['Buses, coaches and HGVs below the standard', '£100 a day'],
          ['Vehicles charged', 'Diesel Euro 1 to 5 and petrol Euro 1 to 3'],
          ['Charge not paid', '£120 penalty, cut to £60 if paid within 14 days'],
        ],
        after: 'The zone runs midnight to midnight, every day of the year. You can pay from 6 days before to 6 days after the journey. We treat the charge on a business trip as a vehicle cost. A penalty is never tax deductible.',
      },
      {
        caption: 'Business rates, the Bath BID and holiday lets, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Bath BID fourth term', '2026 to 2031'],
          ['Bath BID ballot, 24 October 2025', '300 of 311 votes in favour, covering £36.9m of £37.6m rateable value'],
          ['Holiday let rated as a business', 'Available for 140 nights and let for 70 nights in 12 months'],
        ],
        after: 'Bath and North East Somerset Council sends the rates bill. A holiday let that misses the 140 and 70 night tests pays council tax instead. Ask Bath BID which levy rate applies to your premises.',
      },
    ],
    urgent: {
      title: 'Holiday lets lost their special tax rules',
      text: 'The furnished holiday lettings rules ended in April 2025. Bath holiday lets are now taxed like other rental property, with mortgage interest given only as a basic rate credit. We check your 2025-26 figures before the 31 January 2027 deadline.',
      cta: 'Get a holiday let review',
    },
  },

  // ---------- 6. How we work with Bath clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Bath clients',
    steps: [
      { title: 'Free consultation', text: 'We talk about your business or lets, your records and the next deadlines on a free call.' },
      { title: 'Fixed fee in writing', text: 'You receive a written scope and a fixed price first. We never bill by the hour.' },
      { title: 'We do the work', text: 'Upload records securely or share Xero or QuickBooks with us. We prepare and file, and remind you before each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Bath',
      text: 'We meet by video and phone, so there is no need to find parking in the centre of Bath on a busy visitor day.',
      items: [
        'Video meetings on Teams, Zoom or Google Meet',
        'Secure upload and cloud bookkeeping access',
        'One named contact for your account',
        { text: 'Bath meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Bath and North East Somerset Council, Bath BID, West of England Combined Authority and GOV.UK sources. Charges, levies and letting rules change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Bath clients',
  faqs: [
    { q: 'How much is the Bath Clean Air Zone charge?', a: 'Taxis, private hire cars, minibuses and vans that do not meet the standard pay £9 a day. Buses, coaches and HGVs pay £100 a day. The zone covers central Bath and runs midnight to midnight, every day of the year. Unpaid charges lead to a £120 penalty.' },
    { q: 'Do private cars pay the Bath Clean Air Zone?', a: 'No. Bath has a class C zone, so private cars and motorbikes are not charged, whatever their age. This is different from Bristol, where older private cars do pay. Private HGVs such as motorhomes and horseboxes can pay £9 instead of £100 if registered with the council.' },
    { q: 'Does my Bath holiday let pay business rates or council tax?', a: 'It is rated for business rates only if it is available to let for 140 nights or more and actually let for 70 nights or more in 12 months. If it is rated, small business rate relief may reduce the bill. If not, it pays council tax to Bath and North East Somerset Council.' },
    { q: 'What is the Bath BID?', a: 'It is the Business Improvement District for Bath city centre. In the ballot on 24 October 2025, 300 of 311 valid votes backed a fourth term, which runs from 2026 to 2031. Businesses in the area pay a levy based on rateable value. Ask Bath BID for the rate.' },
    { q: 'How are Bath holiday lets taxed since April 2025?', a: 'The furnished holiday lettings regime ended in April 2025. Holiday lets are now taxed like other residential lets. Mortgage interest gets a basic rate credit instead of a full deduction, and the profits no longer count as relevant earnings for pensions. Selling one may cost more in capital gains tax.' },
    { q: 'What does the West of England Combined Authority do for Bath?', a: 'It covers Bath and North East Somerset, Bristol and South Gloucestershire, and is led by Mayor Helen Godwin. Bath businesses can use its West of England Growth Hub for support and advice, and Invest Bristol and Bath helps companies moving into the area.' },
    { q: 'How much does an accountant cost in Bath?', a: 'Our fixed fees start at £XXX for a self assessment return and £XXX a month for a small limited company. The fee depends on your income, lets and records, and we confirm it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Bath clients', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/bristol/', 'Accountants in Bristol'],
      ['/uk/cardiff/', 'Accountants in Cardiff'],
      ['/uk/southampton/', 'Accountants in Southampton'],
      ['/uk/reading/', 'Accountants in Reading'],
      ['/uk/oxford/', 'Accountants in Oxford'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Guides for property owners', links: [
      ['/resources/section-24-explained/', 'Section 24 explained'],
      ['/resources/making-tax-digital-for-landlords/', 'Making Tax Digital for landlords'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Bath accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Bath and North East Somerset'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.bathnes.gov.uk/find-out-bath-clean-air-zone-charges', 'Bath and North East Somerset Council: Clean Air Zone charges'],
    ['https://www.bathnes.gov.uk/pay-clean-air-zone-fine', 'Bath and North East Somerset Council: Clean Air Zone penalties'],
    ['https://www.bathnes.gov.uk/bid-2025-notice-result', 'Bath and North East Somerset Council: Bath BID ballot result 2025'],
    ['https://www.bathbid.co.uk/about-bath-bid/bath-bid-iv-ballot/', 'Bath BID: fourth term ballot'],
    ['https://www.gov.uk/guidance/apply-for-business-rates-for-a-self-catering-property-in-england', 'GOV.UK: Business rates for self-catering properties'],
    ['https://www.westofengland-ca.gov.uk/about-us/', 'West of England Combined Authority: about us'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
  ],
};
