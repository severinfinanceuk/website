// Accountants in Manchester: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: CityCo (Manchester City Centre BID levy rules 2023-28),
// Clean Air Greater Manchester (no charges), GOV.UK (Investment Zones, rates multipliers,
// National Living Wage). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/manchester/accountants-manchester-hero.jpg';
import venues from '../../assets/locations/manchester/accountants-manchester-exchange-square.jpg';
import media from '../../assets/locations/manchester/accountants-manchester-mediacity.jpg';
import mills from '../../assets/locations/manchester/accountants-manchester-canal-flats.jpg';
import tram from '../../assets/locations/manchester/accountants-manchester-metrolink.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/manchester/',
  primaryKeyword: 'accountants in Manchester',
  secondaryKeywords: [
    'accountant Manchester', 'Manchester accountants for small business', 'tax accountant Manchester',
    'chartered accountants Manchester', 'accountants Salford', 'bookkeeping Manchester',
    'contractor accountant Manchester', 'Manchester BID levy',
  ],
  title: 'Accountants in Manchester | Severin Finance',
  description: 'Accountants in Manchester for tax returns, company accounts, VAT, payroll and business finance across Greater Manchester. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Manchester', '/uk/manchester/'],
  ],
  place: { type: 'City', name: 'Manchester', wikidata: 'Q18125', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Manchester', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Manchester · Greater Manchester',
    h1: 'Accountants in Manchester',
    answer: 'Our accountants in Manchester handle company accounts, tax returns, VAT, payroll and business finance for fixed fees. We know the local picture: city centre premises with a rateable value of £40,000 or more pay the CityCo BID levy on top of business rates, and Greater Manchester has no clean air charge.',
    image: hero,
    imageAlt: 'Aerial view of Manchester city centre with tram lines curving between red-brick and modern buildings',
    chip: 'Greater Manchester',
    card: { label: 'City centre BID', value: '£40,000', note: 'Rateable value at which the CityCo BID levy starts' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Greater Manchester' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Manchester facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Manchester client mix) ----------
  who: {
    eyebrow: 'Who we help in Manchester',
    h2: 'Manchester and Salford businesses, landlords and contractors',
    intro: 'Manchester mixes a busy city centre economy with media and tech in Salford and a large rental market. Most of the clients we work with here fit one of four groups.',
    cards: [
      {
        img: venues, alt: 'Café tables under blue umbrellas beside a Victorian building and shops in Manchester city centre',
        tag: 'Hospitality', title: 'Bars, restaurants and shops',
        text: 'Bookkeeping, VAT and payroll for city centre venues and retailers, with staff on at least the £12.71 National Living Wage and the CityCo BID levy built into the budget.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: media, alt: 'MediaCityUK buildings and footbridge reflected in the water at Salford Quays',
        tag: 'Digital and creative', title: 'Media, tech and digital firms',
        text: 'Company accounts, R&D records and SEIS or EIS advance assurance for studios, agencies and software firms in the city centre and at MediaCityUK in Salford.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: mills, alt: 'Red-brick mills and an iron footbridge over a canal in Manchester',
        tag: 'Property', title: 'City centre landlords',
        text: 'Rental accounts, Section 24 planning and buy-to-let companies for landlords with flats in converted mills and new blocks around Ancoats, Castlefield and the canals.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: tram, alt: 'Commuters and a yellow Metrolink tram at a stop in Manchester city centre',
        tag: 'Contractors', title: 'Contractors and consultants',
        text: 'IR35 reviews, limited company accounts and director pay planning for contractors who work across Greater Manchester or travel to clients elsewhere in the UK.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Manchester ----------
  services: {
    eyebrow: 'Services in Manchester',
    h2: 'What Manchester clients ask us for most',
    intro: 'All our services are done online and priced the same wherever you are in Greater Manchester. Each card links to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Year-end accounts, corporation tax and Companies House filings for Manchester and Salford companies, on a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Tax returns for directors, sole traders and landlords across Greater Manchester, filed before the 31 January deadline.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, scheme choice and quarterly Making Tax Digital returns for city centre traders and online sellers.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI and pensions for venues and shops with large part-time teams, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'Contractor accounts', text: 'IR35 checks, expenses and salary and dividend planning for Manchester contractors who work through their own company.', href: '/uk/accounting/contractor-accountant/' },
      { title: 'Business loans', text: 'Loans and cash flow funding for growing Manchester firms, backed by the forecasts lenders expect to see.', href: '/uk/business-finance/business-loans/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Manchester) ----------
  facts: {
    eyebrow: 'Manchester facts',
    h2: 'What is different about trading in Manchester',
    intro: 'Tax rules are national, but the extra costs and schemes are local. Here is what applies to Manchester businesses in 2026-27.',
    tables: [
      {
        caption: 'Business rates and the city centre BID, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['CityCo BID levy (RV £40,000 or more)', '1.7% of rateable value, rising 2% a year from year three'],
          ['Offices and Arndale units with no street frontage', '1.5% BID levy (charities 1%)'],
          ['BID cap per property', '£32,000 a year, rising 2% a year from year three'],
        ],
        after: 'The BID levy for the 2023 to 2028 term is based on rateable values at 1 April 2023. Manchester City Council sends the rates bill for the city centre. MediaCityUK and Salford Quays are billed by Salford City Council.',
      },
      {
        caption: 'Greater Manchester schemes and charges',
        head: ['Item', 'Detail'],
        rows: [
          ['Clean air charge', 'None anywhere in Greater Manchester'],
          ['Investment Zone sector', 'Advanced manufacturing and materials'],
          ['Investment Zone sites', 'Innovation District Manchester, Salford Crescent and Atom Valley (Bury, Oldham, Rochdale)'],
          ['Investment Zone tax sites', 'None designated'],
          ['National Living Wage (21 and over)', '£12.71 an hour from 1 April 2026'],
        ],
        after: 'With no tax sites, the Investment Zone does not cut rates or National Insurance for individual firms. Its funding goes to research, skills and sites, with 32,000 jobs and £1.1bn of investment expected over ten years.',
      },
    ],
    urgent: {
      title: 'Your rates bill changed in April 2026',
      text: 'A new rating list and new multipliers started on 1 April 2026, and the 40% retail, hospitality and leisure relief ended. City centre firms pay the BID levy as well. We check the bill and rebuild your forecast.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Manchester clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Manchester clients',
    steps: [
      { title: 'Free consultation', text: 'A video or phone call about your business, your numbers and the deadlines ahead. There is no charge.' },
      { title: 'Fixed fee in writing', text: 'We set out the work and the fee before we start. The fee only changes if the work does.' },
      { title: 'We do the work', text: 'You share records by secure upload or give us Xero or QuickBooks access. We prepare, check and file, and remind you before each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Manchester',
      text: 'We work online, so a client in Salford, Stockport or the Northern Quarter gets the same service. Most meetings happen by video.',
      items: [
        'Video or phone calls at a time that suits you',
        'Secure document upload and cloud bookkeeping access',
        'A named contact who knows your file',
        { text: 'Manchester meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK, Clean Air Greater Manchester and CityCo sources. Rates, levies and wage rates change every year: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Manchester clients',
  faqs: [
    { q: 'Do I need an accountant based in Manchester?', a: 'No. Tax rules in Manchester are the same as in the rest of England, and we do most of our work online. It helps to use an accountant who knows the local costs, such as the city centre BID levy, and how the Investment Zone works.' },
    { q: 'Is there a clean air charge in Manchester?', a: 'No. There are no clean air charges to drive anywhere in Greater Manchester. The government approved an investment-led plan without charges in 2025. Your vans and cars follow the normal tax rules, with no daily zone charge to budget for.' },
    { q: 'What is the Manchester city centre BID levy?', a: 'It is an extra charge on city centre premises with a rateable value of £40,000 or more, collected by CityCo for the 2023 to 2028 term. The base rate is 1.7% of rateable value, or 1.5% for offices, capped at £32,000. Rates and the cap rise by 2% a year from year three.' },
    { q: 'Does the Greater Manchester Investment Zone cut my tax?', a: 'Not directly. Greater Manchester chose not to designate any Investment Zone tax sites, so the rates, National Insurance and capital allowance reliefs do not apply. The funding supports advanced manufacturing and materials at Innovation District Manchester, Salford Crescent and Atom Valley.' },
    { q: 'Who sends my business rates bill, Manchester or Salford?', a: 'It depends where your premises are. Manchester City Council bills the city centre, including the Northern Quarter and Spinningfields. MediaCityUK and Salford Quays are in Salford, so Salford City Council sends the bill. Each council runs its own discretionary relief schemes.' },
    { q: 'I moved abroad but still own a Manchester flat. Can you help?', a: 'Yes. Rent from a UK property stays taxable in the UK after you leave. Your letting agent may have to deduct basic rate tax under the Non-Resident Landlord Scheme unless HMRC approves you to receive rent in full. We file your return and handle the application.' },
    { q: 'How much does an accountant cost in Manchester?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. We confirm the exact fee in writing after a free consultation, based on your turnover and the state of your records.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Manchester clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/liverpool/', 'Accountants in Liverpool'],
      ['/uk/leeds/', 'Accountants in Leeds'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/sheffield/', 'Accountants in Sheffield'],
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
    h2: 'Talk to our', em: 'Manchester accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Manchester, Salford and Greater Manchester'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://cityco.com/?p=25385', 'CityCo: Manchester City Centre BID levy rules 2023-28'],
    ['https://cleanairgm.com/clean-air-plan/', 'Clean Air Greater Manchester: Clean Air Plan'],
    ['https://www.gov.uk/guidance/investment-zones-in-england', 'GOV.UK: Investment Zones in England'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
  ],
};
