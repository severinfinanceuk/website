// Accountants in Richmond: all copy, local facts and SEO for one location page (a London area page).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Richmond Council (BIDs, council tax and business rates guide 2026-27,
// invest pages), ONS (house prices), GOV.UK (inheritance tax, capital gains on property). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/richmond/accountants-richmond-bridge.jpg';
import office from '../../assets/locations/richmond/accountants-richmond-home-office.jpg';
import lane from '../../assets/locations/richmond/accountants-richmond-water-lane.jpg';
import view from '../../assets/locations/richmond/accountants-richmond-hill-thames-view.jpg';
import house from '../../assets/locations/richmond/accountants-richmond-house.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/richmond/',
  primaryKeyword: 'accountants in Richmond',
  secondaryKeywords: [
    'accountant Richmond', 'accountants Twickenham', 'tax accountant Richmond upon Thames',
    'inheritance tax advice Richmond', 'small business accountant Richmond', 'accountant Kew',
    'chartered accountants Richmond',
  ],
  title: 'Accountants in Richmond | Severin Finance',
  description: 'Accountants in Richmond for self assessment, company accounts, inheritance tax and capital gains, across Twickenham and Kew. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Richmond', '/uk/london/richmond/'],
  ],
  place: { type: 'AdministrativeArea', name: 'London Borough of Richmond upon Thames', wikidata: 'Q32515', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Richmond', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Richmond · Twickenham · Kew',
    h1: 'Accountants in Richmond',
    answer: 'Our accountants in Richmond look after tax returns, company accounts, inheritance tax and capital gains for consultants, shop owners and families across Richmond upon Thames. With the average home in the borough at £803,000 in July 2026, well above the London average, estate and property tax planning is a large part of our work here.',
    image: hero,
    imageAlt: 'Richmond Bridge over the Thames on a sunny day, with wooden rowing boats moored in front',
    chip: 'Richmond upon Thames',
    card: { label: 'Average home', value: '£803,000', note: 'Richmond upon Thames, July 2026 (ONS, provisional)' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in Richmond and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Richmond facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Richmond client mix) ----------
  who: {
    eyebrow: 'Who we help in Richmond',
    h2: 'Consultants, independent shops and families with property',
    intro: 'Richmond Council says the borough has one of the highest rates of self-employment in the country. It also has some of London’s most valuable homes. Our Richmond clients mostly fall into four groups.',
    cards: [
      {
        img: office, alt: 'Home office desk and chair beside a large window looking onto a leafy garden',
        tag: 'Self-employed', title: 'Consultants working from home',
        text: 'Sole trader or limited company, home office costs, pension contributions and Making Tax Digital for self-employed consultants, coaches and advisers who work from home in Richmond, Teddington or Barnes.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      },
      {
        img: lane, alt: 'Water Lane in Richmond at dusk, a narrow street of brick buildings leading down to the river',
        tag: 'Small business', title: 'Independent shops and restaurants',
        text: 'Bookkeeping, VAT and payroll for independents in Richmond and Twickenham town centres, where both BIDs charge a levy and the 40% retail relief ended in March 2026.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: view, alt: 'The Thames curving through green meadows, seen from Richmond Hill on a clear day',
        tag: 'Family wealth', title: 'Families planning for inheritance tax',
        text: 'Wills, lifetime gifts and pensions reviewed against the frozen £325,000 nil-rate band and the £175,000 residence band, before unused pensions start to count towards estates from April 2027.',
        link: ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      },
      {
        img: house, alt: 'White painted period house and cottage on a quiet street in Richmond',
        tag: 'Property', title: 'Landlords and second-home sellers',
        text: 'Capital gains on a rental or second home sold in the borough, reported and paid within 60 days, plus yearly rental accounts for landlords who kept a family flat.',
        link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Richmond ----------
  services: {
    eyebrow: 'Services in Richmond',
    h2: 'What Richmond clients ask us for most',
    intro: 'We work online at fixed fees across the borough, from Kew and Barnes to Twickenham and Hampton. Each card opens the full service page.',
    items: [
      { title: 'Self assessment', text: 'Tax returns for consultants, directors, landlords and higher earners in Richmond, filed before 31 January.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and director pay planning for one-person consultancies and family companies.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Inheritance tax planning', text: 'Estate reviews, gifts and trusts for families whose Richmond home takes up much of their tax-free bands.', href: '/uk/tax/inheritance-tax-planning/' },
      { title: 'Capital gains tax', text: 'Gains on rentals, second homes and shares, with the 60-day property return filed on time.', href: '/uk/tax/capital-gains-tax-accountant/' },
      { title: 'Bookkeeping', text: 'Monthly bookkeeping and VAT for shops, cafés and restaurants in Richmond and Twickenham.', href: '/uk/accounting/bookkeeping-services/' },
      { title: 'Succession planning', text: 'Passing a family business or property company to the next generation with the tax worked out first.', href: '/uk/company-services/succession-planning/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Richmond) ----------
  facts: {
    eyebrow: 'Richmond facts',
    h2: 'Rates, levies and reliefs in Richmond upon Thames',
    intro: 'Richmond Council bills business rates across the borough and collects two BID levies, one for Richmond town centre and one for Twickenham. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business Improvement Districts in the borough',
        head: ['BID', 'Levy'],
        rows: [
          ['Be Richmond (Richmond town centre)', '1.74% of 2017 rateable value, term from 1 April 2026'],
          ['Be Richmond: who pays', 'Rateable value of £35,000 or more, capped at £7,750 a year'],
          ['Discover Twickenham', '1.6% of 2023 rateable value, term from 1 March 2026'],
          ['Discover Twickenham: who pays', 'Rateable value of £12,000 or more, capped at £12,000 a year'],
        ],
        after: 'Richmond Council bills and collects both levies. Charities are exempt from the Be Richmond levy. If you are taking on premises, check whether they sit inside a BID area before you agree the rent.',
      },
      {
        caption: 'Business rates in Richmond upon Thames, 2026-27',
        head: ['Rate or relief', 'Detail'],
        rows: [
          ['Small business rates relief', '100% below £12,000 rateable value, tapering to nil at £15,000'],
          ['Supporting Small Business Relief', 'Bill rises capped at £800 or the transitional cap, 2026-27 to 2028-29'],
          ['Retail, hospitality and leisure', '40% relief ended 31 March 2026, lower 38.2p and 43.0p multipliers instead'],
          ['Pubs and live music venues', 'A further 15% off the bill'],
          ['Payment', 'Bills sent in March, 10 monthly instalments, or 12 on request'],
        ],
        after: 'Supporting Small Business Relief is applied automatically. Premises above £92,000 rateable value also pay the 2p Crossrail supplement on the same bill.',
      },
    ],
    urgent: {
      title: 'Unused pensions count for inheritance tax from April 2027',
      text: 'From 6 April 2027 most unused pension funds will count towards the estate. With the tax-free bands frozen until April 2031 and high house prices in the borough, more Richmond estates may owe tax. We review wills, gifts and pensions now.',
      cta: 'Book an estate review',
    },
  },

  // ---------- 6. How we work with Richmond clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Richmond clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your income, property and plans. No charge and no obligation.' },
      { title: 'Fixed fee in writing', text: 'You see the scope and the fee before anything starts, whether it is one tax return or a full estate review.' },
      { title: 'We do the work', text: 'You share documents through secure upload or connect your bookkeeping software. We prepare and file, and tell you what is due and when.' },
    ],
    meet: {
      title: 'Working with us from Richmond',
      text: 'Most Richmond clients work with us from home by video and phone. Family meetings about estates can include relatives who live elsewhere in the UK or abroad.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Richmond meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Richmond Council, GOV.UK and ONS sources. Tax bands, BID levies and reliefs change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Richmond clients',
  faqs: [
    { q: 'Who collects business rates in Richmond and Twickenham?', a: 'The London Borough of Richmond upon Thames bills and collects business rates across the borough, including Richmond, Twickenham, Teddington, Kew and Barnes. It also collects the Be Richmond and Discover Twickenham BID levies. Bills go out in March and are paid in 10 monthly instalments unless you ask for 12.' },
    { q: 'What is the BID levy in Richmond town centre?', a: 'Be Richmond charges 1.74% of the 2017 rateable value on premises worth £35,000 or more, capped at £7,750 a year, for the term that started on 1 April 2026. Charities are exempt. Twickenham has its own BID at 1.6%, starting at a lower £12,000 rateable value.' },
    { q: 'Will my family pay inheritance tax on a Richmond house?', a: 'It depends on the whole estate. Each person has a £325,000 nil-rate band, plus up to £175,000 when a home passes to children or grandchildren. Both are frozen until April 2031, and the extra band tapers away above £2 million. A Richmond home plus savings and pensions can pass these limits.' },
    { q: 'How quickly must I pay capital gains tax after selling a property?', a: 'If you sell a UK home that is not your main residence, such as a rental or second home, you must report and pay any capital gains tax within 60 days of completion. The rates are 18% and 24%, depending on your income.' },
    { q: 'I consult from home in Richmond. Should I set up a limited company?', a: 'It depends on your profit, how much you draw and your plans. A company can save tax at higher profits, but it adds admin and costs. We compare both routes with your real figures, including home office costs and pension contributions, before you decide.' },
    { q: 'Can you help pass on a family business?', a: 'Yes. We plan share transfers, value the business and check which inheritance tax and capital gains reliefs apply. The aim is to hand the business to the next generation without a tax bill that forces a sale.' },
    { q: 'How much does an accountant cost in Richmond?', a: 'Fixed fees start at £XXX for a self assessment tax return and £XXX a month for a small limited company. Estate and capital gains work is priced per job. You get the figure in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/company-services/succession-planning/', 'Succession planning'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Near Richmond', links: [
      ['/uk/london/wimbledon/', 'Accountants in Wimbledon'],
      ['/uk/london/kensington/', 'Accountants in Kensington'],
      ['/uk/london/westminster/', 'Accountants in Westminster'],
      ['/uk/reading/', 'Accountants in Reading'],
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
    h2: 'Talk to our', em: 'Richmond accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Richmond, Twickenham, Kew and Barnes'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.richmond.gov.uk/services/business/business_improvement_district', 'Richmond Council: Business Improvement Districts'],
    ['https://www.richmond.gov.uk/media/vxpihkqb/guide_to_council_tax_and_business_rates.pdf', 'Richmond Council: Guide to council tax and business rates 2026-27'],
    ['https://www.richmond.gov.uk/services/business/local_information_for_businesses/why_invest/invest_infographic', 'Richmond Council: Why invest in Richmond upon Thames'],
    ['https://www.ons.gov.uk/visualisations/housingpriceslocal/E09000027/', 'ONS: Housing prices in Richmond upon Thames'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-inheritance-tax-thresholds-and-interest-rates/inheritance-tax-thresholds-and-interest-rates', 'GOV.UK: Inheritance tax thresholds'],
    ['https://www.gov.uk/government/publications/reforming-inheritance-tax-unused-pension-funds-and-death-benefits', 'GOV.UK: Unused pension funds and inheritance tax from April 2027'],
    ['https://www.gov.uk/report-and-pay-your-capital-gains-tax/if-you-sold-a-property-in-the-uk-on-or-after-6-april-2020', 'GOV.UK: Report and pay capital gains tax on UK property'],
  ],
};
