// Accountants in Milton Keynes: all copy, local facts and SEO for one location page (UK city).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Milton Keynes City Council (Central Milton Keynes BID levy),
// GOV.UK (2022 city status, new towns draft programme, rates multipliers, minimum wage).
// Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/milton-keynes/accountants-milton-keynes-aerial-lakes.jpg';
import depot from '../../assets/locations/milton-keynes/accountants-milton-keynes-distribution-depot.jpg';
import office from '../../assets/locations/milton-keynes/accountants-milton-keynes-glass-office.jpg';
import homes from '../../assets/locations/milton-keynes/accountants-milton-keynes-new-homes.jpg';
import road from '../../assets/locations/milton-keynes/accountants-milton-keynes-grid-road.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/milton-keynes/',
  primaryKeyword: 'accountants in milton keynes',
  secondaryKeywords: [
    'accountant Milton Keynes', 'accountants MK', 'tax accountant Milton Keynes',
    'small business accountant Milton Keynes', 'bookkeeping Milton Keynes', 'landlord accountant Milton Keynes',
    'Central Milton Keynes BID levy',
  ],
  title: 'Accountants in Milton Keynes | Severin Finance',
  description: 'Accountants in Milton Keynes for logistics firms, start-ups and landlords: company accounts, VAT, payroll and tax. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Milton Keynes', '/uk/milton-keynes/'],
  ],
  place: { type: 'City', name: 'Milton Keynes', wikidata: 'Q204234', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Milton Keynes', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Milton Keynes · Milton Keynes City Council',
    h1: 'Accountants in Milton Keynes',
    answer: 'Our accountants in Milton Keynes support logistics firms, start-ups, landlords and commuters with tax, accounts, payroll and bookkeeping for fixed fees. Central MK businesses with a rateable value of £50,000 or more pay a BID levy until May 2027, and the city may grow by around 40,000 homes under the new towns plans.',
    image: hero,
    imageAlt: 'Aerial view of a lake, parkland and housing in Milton Keynes',
    chip: 'City status since 2022',
    card: { label: 'Homes proposed', value: '40,000', note: 'Renewed town plan in the March 2026 new towns draft programme' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in Milton Keynes and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Milton Keynes facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Milton Keynes client mix) ----------
  who: {
    eyebrow: 'Who we help in Milton Keynes',
    h2: 'Milton Keynes logistics firms, founders, landlords and commuters',
    intro: 'Milton Keynes is a planned city built around grid roads, warehouses and office campuses, and it is still growing. Most of our clients here fit one of four groups.',
    cards: [
      {
        img: depot, alt: 'Aerial view of lorry trailers parked at a distribution depot',
        tag: 'Logistics', title: 'Logistics and transport firms',
        text: 'VAT, payroll for shift teams and capital allowances on vans, trailers and equipment. Warehouse wages start at the £12.71 National Living Wage from April 2026.',
        link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      },
      {
        img: office, alt: 'Modern glass and white steel office building on a tree-lined street in Milton Keynes',
        tag: 'Start-ups', title: 'Start-ups and growing companies',
        text: 'Company formation, bookkeeping and management accounts for founders in Central Milton Keynes and the business parks around the city.',
        link: ['/uk/company-services/company-formation/', 'Company formation'],
      },
      {
        img: homes, alt: 'New brick houses with solar panels on their roofs',
        tag: 'Property', title: 'Landlords and developers',
        text: 'Rental accounts, buy-to-let companies and the tax on new builds and land sales as Milton Keynes keeps building. The new towns draft programme proposes around 40,000 more homes.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: road, alt: 'Straight tree-lined grid road in Milton Keynes under a cloudy sky',
        tag: 'Commuters', title: 'Commuters and employed professionals',
        text: 'Self assessment for employees with bonuses, shares, side income or rent, whether they drive across the grid roads or take the train to London.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment'],
      },
    ],
  },

  // ---------- 3. Services most searched in Milton Keynes ----------
  services: {
    eyebrow: 'Services in Milton Keynes',
    h2: 'What Milton Keynes clients ask us for most',
    intro: 'We work online, so a warehouse in the east of the city and a start-up in the centre get the same service and fixed fee. Each card opens the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for Milton Keynes owner-managed firms.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Payroll', text: 'Weekly or monthly payroll for warehouse and shift staff, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'VAT returns', text: 'VAT registration and Making Tax Digital returns for logistics, trade and online businesses.', href: '/uk/tax/vat-accountant/' },
      { title: 'Corporation tax', text: 'Corporation tax returns and capital allowances on vans, lorries, forklifts and warehouse equipment.', href: '/uk/tax/corporation-tax-accountant/' },
      { title: 'Capital gains tax', text: 'Capital gains tax on land and property sales as Milton Keynes grows, with the 60-day return filed on time.', href: '/uk/tax/capital-gains-tax-accountant/' },
      { title: 'Landlords and property', text: 'Rental accounts and tax planning for Milton Keynes houses, flats and new-build lets.', href: '/uk/accounting/landlord-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Milton Keynes) ----------
  facts: {
    eyebrow: 'Milton Keynes facts',
    h2: 'Rates, the BID and growth plans in Milton Keynes',
    intro: 'Milton Keynes City Council bills business rates across the city. Central Milton Keynes adds a BID levy, and government plans could make the city much larger. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business rates and the Central Milton Keynes BID, 2026-27',
        head: ['Rate', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 of rateable value'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['High value multiplier (RV £500,000 or more)', '50.8p per £1'],
          ['CMK BID levy (RV £50,000 or more)', '1.25% of rateable value, rising 3% a year since 2023'],
          ['Tenants of centre:mk, Midsummer Place, 12th Street, The Hub and Xscape', '1% discounted levy'],
          ['Properties with RV over £2,000,000', 'Levy capped at £20,000'],
        ],
        after: 'The BID is managed by MyMiltonKeynes and the current term runs from 1 June 2022 to 31 May 2027. The levy is billed every June for the year ahead.',
      },
      {
        caption: 'Growth and wages in Milton Keynes',
        head: ['Item', 'Detail'],
        rows: [
          ['City status', 'Granted in 2022 for the Platinum Jubilee'],
          ['Renewed town proposal (March 2026)', 'Around 40,000 more homes and a new local transport system'],
          ['National Living Wage (21 and over)', '£12.71 an hour from 1 April 2026'],
        ],
        after: 'The new towns programme is still a draft. If you own land or plan to sell property, we look at the capital gains tax, VAT and Stamp Duty effects early.',
      },
    ],
    urgent: {
      title: 'Wages and rates both rose in April 2026',
      text: 'Higher wage rates and new multipliers hit warehouse and shift-based businesses at the same time. We rebuild your cash flow forecast and check your rates bill and BID levy.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Milton Keynes clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Milton Keynes clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your company, your property or your tax deadlines. We explain what we would do and when.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the fee before work starts. A new property or an extra company is priced upfront.' },
      { title: 'We do the work', text: 'You upload records or connect Xero or QuickBooks. We prepare and file, and keep you ahead of every deadline.' },
    ],
    meet: {
      title: 'Meeting us in Milton Keynes',
      text: 'Milton Keynes clients work with us online, so a meeting fits between deliveries, shifts or a day in the office.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        'Or meet us at our Fleet Street office in London, by appointment',
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against Milton Keynes City Council and GOV.UK sources. Rates, levies, wages and growth plans change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Milton Keynes clients',
  faqs: [
    { q: 'Who sends the business rates bill in Milton Keynes?', a: 'Milton Keynes City Council bills business premises across the city. From 1 April 2026 the small business multiplier is 43.2p per £1 of rateable value and the standard multiplier is 48.0p. Retail, hospitality and leisure premises pay lower rates, so check your bill uses the right one.' },
    { q: 'What is the Central Milton Keynes BID levy?', a: 'It is an extra charge for premises in Central Milton Keynes with a rateable value of £50,000 or more. The levy started at 1.25% of rateable value and rises 3% a year from 2023. Tenants in centre:mk, Midsummer Place and some other centres pay a discounted 1%. The term ends on 31 May 2027.' },
    { q: 'Is Milton Keynes a city now?', a: 'Yes. Milton Keynes was granted city status in 2022 as part of the Platinum Jubilee civic honours, and the council is now Milton Keynes City Council. City status does not change tax rules: rates, income tax and corporation tax work the same as anywhere else in England.' },
    { q: 'What do the new towns plans mean for Milton Keynes landlords?', a: 'The government’s draft new towns programme, published in March 2026, proposes Milton Keynes as a renewed town with around 40,000 more homes and a new local transport system. It is not final. If you own land or plan to build or sell, we can model the capital gains tax, VAT and Stamp Duty position.' },
    { q: 'Can you help with the tax on new vans for my logistics business?', a: 'Yes. We check the VAT on each purchase, lease or hire purchase agreement and how capital allowances apply, so the tax relief is claimed in the right year. We also update your cash flow forecast so you can see the effect before you commit.' },
    { q: 'Do I need an accountant based in Milton Keynes?', a: 'No. Tax rules are the same across England and we do most work online. What helps is an accountant who knows the local costs, such as the CMK BID levy and the April 2026 wage and rates changes. We meet by video and you upload records securely.' },
    { q: 'How much does an accountant cost in Milton Keynes?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby locations', links: [
      ['/uk/oxford/', 'Accountants in Oxford'],
      ['/uk/cambridge/', 'Accountants in Cambridge'],
      ['/uk/reading/', 'Accountants in Reading'],
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
    h2: 'Talk to our', em: 'Milton Keynes accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Milton Keynes and nearby'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.milton-keynes.gov.uk/business/business-rates/business-improvement-district-levies', 'Milton Keynes City Council: Business Improvement District levies'],
    ['https://www.gov.uk/government/news/record-number-of-city-status-winners-announced-to-celebrate-platinum-jubilee', 'GOV.UK: City status winners for the Platinum Jubilee'],
    ['https://www.gov.uk/government/news/seven-new-towns-proposed-to-kickstart-housebuilding-push', 'GOV.UK: New towns draft programme'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
  ],
};
