// Accountants in Nottingham: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Nottingham City Council (Workplace Parking Levy 2026/27,
// BID levy, selective licensing fees), East Midlands Combined County Authority (Investment Zone),
// GOV.UK (Investment Zones, East Midlands Freeport tax sites, rates multipliers). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/nottingham/accountants-nottingham-council-house.jpg';
import tram from '../../assets/locations/nottingham/accountants-nottingham-tram.jpg';
import university from '../../assets/locations/nottingham/accountants-nottingham-university.jpg';
import laceMarket from '../../assets/locations/nottingham/accountants-nottingham-lace-market.jpg';
import canal from '../../assets/locations/nottingham/accountants-nottingham-canal-flats.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/nottingham/',
  primaryKeyword: 'accountants in Nottingham',
  secondaryKeywords: [
    'accountant Nottingham', 'small business accountant Nottingham', 'tax accountant Nottingham',
    'accountants West Bridgford', 'accountants Beeston', 'landlord accountant Nottingham',
    'payroll services Nottingham', 'Nottingham workplace parking levy',
  ],
  title: 'Accountants in Nottingham | Severin Finance',
  description: 'Accountants in Nottingham for company accounts, tax returns, VAT, payroll and Workplace Parking Levy budgets. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Nottingham', '/uk/nottingham/'],
  ],
  place: { type: 'City', name: 'Nottingham', wikidata: 'Q41262', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Nottingham', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Nottingham · East Midlands',
    h1: 'Accountants in Nottingham',
    answer: 'Our accountants in Nottingham look after company accounts, tax returns, VAT, payroll and bookkeeping for fixed fees. We plan for the costs only this city has: employers inside the city boundary with 11 or more liable staff parking places pay the Workplace Parking Levy, £592 a place in 2026/27.',
    image: hero,
    imageAlt: 'The Council House dome above Old Market Square in Nottingham city centre',
    chip: 'East Midlands',
    card: { label: 'Workplace Parking Levy', value: '£592', note: 'Per liable staff parking place in 2026/27, for employers with 11 or more' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Nottingham and Nottinghamshire' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Nottingham facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Nottingham client mix) ----------
  who: {
    eyebrow: 'Who we help in Nottingham',
    h2: 'Nottingham employers, start-ups, agencies and landlords',
    intro: 'Nottingham has two large universities, a busy city centre and a big private rented market, and employers here pay a workplace parking levy on staff spaces. Most of our clients here fit one of four groups.',
    cards: [
      {
        img: tram, alt: 'Victorian brick and stone buildings on a Nottingham city centre street, with a tram passing below',
        tag: 'Employers', title: 'Employers with staff parking',
        text: 'Payroll, staff costs and parking levy budgets for city employers. Firms with 11 or more liable places pay £592 each in 2026/27, and staff aged 21 and over earn at least £12.71 an hour.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: university, alt: 'The Trent Building at the University of Nottingham, seen across the lake at University Park',
        tag: 'Start-ups', title: 'University spinouts and tech start-ups',
        text: 'Company accounts, R&D records and SEIS or EIS advance assurance for start-ups coming out of the University of Nottingham and Nottingham Trent University.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: laceMarket, alt: 'Red-brick buildings and a clock tower in the Lace Market, Nottingham, at dusk',
        tag: 'Creative and professional', title: 'Agencies, studios and consultancies',
        text: 'Limited company accounts, VAT and director pay planning for agencies, design studios and consultancies in the Lace Market, Hockley and the city centre.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: canal, alt: 'Modern flats beside the Nottingham Canal',
        tag: 'Property', title: 'Landlords and student lets',
        text: 'Rental accounts, Section 24 planning and licence costs for landlords. Over 30,000 private rented homes in the city fall under selective licensing, from £759 for an accredited landlord.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Nottingham ----------
  services: {
    eyebrow: 'Services in Nottingham',
    h2: 'What Nottingham clients ask us for most',
    intro: 'We do the work online, at the same fixed fees for a firm in the city centre, Beeston or West Bridgford. Each card links to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Year-end accounts, corporation tax and Companies House filings for Nottingham companies, agreed as a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI and pensions, with the April parking levy bill built into your staff cost budget.', href: '/uk/accounting/payroll-services/' },
      { title: 'Self assessment', text: 'Tax returns for directors, sole traders and student-let landlords, filed before the 31 January deadline.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, scheme choice and Making Tax Digital returns for Nottingham retailers, makers and online sellers.', href: '/uk/tax/vat-accountant/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and investor paperwork for university spinouts and young tech firms raising their first round.', href: '/uk/company-services/eis-seis/' },
      { title: 'Corporation tax', text: 'Corporation tax returns and capital allowances on machinery, vehicles and equipment for manufacturers and engineering firms in the East Midlands supply chain.', href: '/uk/tax/corporation-tax-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Nottingham) ----------
  facts: {
    eyebrow: 'Nottingham facts',
    h2: 'What is different about trading in Nottingham',
    intro: 'Tax rules are national, but Nottingham adds its own parking levy, BID and landlord licensing. Here is what applies in 2026-27.',
    tables: [
      {
        caption: 'Business rates, BID and parking levy, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Workplace Parking Levy, 2026/27', '£592 per liable place (£570 in 2025/26)'],
          ['Employers with 10 or fewer liable places', '100% discount, but a licence is still needed'],
          ['Nottingham BID levy', 'Commercial premises in the BID area with RV of £35,000 or more'],
        ],
        after: 'Nottingham City Council bills business rates and runs the parking levy inside the city boundary. The levy year runs from 1 April to 31 March, and Blue Badge spaces are not counted. West Bridgford (Rushcliffe) and Beeston (Broxtowe) are billed by their own councils and are outside the levy.',
      },
      {
        caption: 'East Midlands schemes and Nottingham rules',
        head: ['Item', 'Detail'],
        rows: [
          ['Combined authority', 'East Midlands Combined County Authority (Derby, Derbyshire, Nottingham, Nottinghamshire)'],
          ['Investment Zone tax sites', 'Infinity Park (Derby), Explore Park (Worksop) and Hartington Staveley'],
          ['Nearest Freeport tax site', 'Ratcliffe on Soar, in Rushcliffe'],
          ['Selective licence fee from 1 April 2026', '£759 accredited, £950 not accredited, £1,318 less compliant'],
          ['Clean air zone', 'None charged in Nottingham'],
        ],
        after: 'The Investment Zone backs advanced manufacturing and clean energy, with the University of Nottingham and Nottingham Trent University as partners. Tax reliefs apply only on the designated sites, until 30 September 2034.',
      },
    ],
    urgent: {
      title: 'Your parking levy and rates bill changed in April',
      text: 'The Workplace Parking Levy rose to £592 a place on 1 April 2026, the same day the new rating list and multipliers started. We check both bills and rebuild your cash flow forecast.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Nottingham clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Nottingham clients',
    steps: [
      { title: 'Free consultation', text: 'A video or phone call to go through your business, your records and the deadlines coming up. It costs nothing.' },
      { title: 'Fixed fee in writing', text: 'We agree the scope and the fee before any work starts. It only changes if the work changes.' },
      { title: 'We do the work', text: 'You upload records securely or give us access to your cloud bookkeeping. We prepare, check and file, and remind you ahead of each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Nottingham',
      text: 'We work online, so a firm in Hockley, Beeston or West Bridgford gets the same service. Most meetings happen by video.',
      items: [
        'Video or phone calls at a time that suits you',
        'Secure document upload and cloud bookkeeping access',
        'A named contact who knows your file',
        { text: 'Nottingham meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'We checked this page against Nottingham City Council, East Midlands Combined County Authority and GOV.UK sources. The parking levy, licence fees and rates change each April, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Nottingham clients',
  faqs: [
    { q: 'What is the Nottingham Workplace Parking Levy?', a: 'It is a yearly charge on employers inside the Nottingham City Council boundary that provide parking for staff. In 2026/27 it is £592 for each liable place. Employers with 10 or fewer liable places get a 100% discount but still need a licence. Blue Badge spaces are not counted.' },
    { q: 'Is there a clean air zone in Nottingham?', a: 'No. Nottingham is not on the government list of charging clean air zones, so there is no daily charge to drive a van or car in the city. The nearest charging zone is in Sheffield, where non-compliant vans and taxis pay £10 a day.' },
    { q: 'Who sends my business rates bill in Nottingham?', a: 'Nottingham City Council bills premises inside the city boundary. Many suburbs sit in other districts: West Bridgford is in Rushcliffe and Beeston is in Broxtowe, so those councils send the bill and run their own relief schemes. The parking levy only applies inside the city boundary.' },
    { q: 'What is the Nottingham BID levy?', a: 'Nottingham BID charges commercial premises in its city centre area with a rateable value of £35,000 or more, collected with the rates. Businesses voted to renew it in July 2025, with 315 of 333 votes in favour. A separate accommodation BID, with a proposed £2 a night charge on hotel stays, was not approved in November 2025.' },
    { q: 'Does the East Midlands Investment Zone or Freeport cut tax for Nottingham firms?', a: 'Only on designated tax sites. The Investment Zone tax sites are Infinity Park in Derby, Explore Park in Worksop and Hartington Staveley. The nearest Freeport tax site to the city is Ratcliffe on Soar in Rushcliffe. Firms in the city centre pay normal business rates and National Insurance.' },
    { q: 'I moved abroad but still let a Nottingham house. Can you help?', a: 'Yes. UK rent stays taxable in the UK after you move. Unless HMRC approves you to receive rent gross under the Non-Resident Landlord Scheme, your agent or tenant deducts basic rate tax. We file your UK return and, if the house is in a licensing area, include the licence fee in your accounts.' },
    { q: 'How much does an accountant in Nottingham cost?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. We agree the exact fee in writing after a free consultation, based on your turnover, payroll and the state of your records.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Nottingham clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/resources/employer-payroll-deadlines/', 'Employer payroll deadlines'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/leicester/', 'Accountants in Leicester'],
      ['/uk/sheffield/', 'Accountants in Sheffield'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/leeds/', 'Accountants in Leeds'],
      ['/uk/manchester/', 'Accountants in Manchester'],
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
    h2: 'Talk to our', em: 'Nottingham accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Nottingham and Nottinghamshire'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.nottinghamcity.gov.uk/information-for-residents/transport-parking-and-streets/workplace-parking-levy/cost-of-a-wpl-licence/', 'Nottingham City Council: cost of a Workplace Parking Levy licence'],
    ['https://nottinghamcity.gov.uk/information-for-business/business-information-and-support/business-rates/business-improvement-district-bid-levy/', 'Nottingham City Council: Business Improvement District levy'],
    ['https://www.nottinghamcity.gov.uk/information-for-residents/housing/private-rented-accommodation/information-for-landlords/licensing-for-landlords/selective-licensing', 'Nottingham City Council: selective licensing'],
    ['https://www.eastmidlands-cca.gov.uk/what-we-do/east-midlands-investment-zone/', 'East Midlands Combined County Authority: Investment Zone'],
    ['https://www.gov.uk/guidance/investment-zones-in-england', 'GOV.UK: Investment Zones in England'],
    ['https://www.gov.uk/government/publications/maps-of-east-midlands-freeport-tax-sites', 'GOV.UK: East Midlands Freeport tax sites'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
  ],
};
