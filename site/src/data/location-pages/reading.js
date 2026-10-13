// Accountants in Reading: all copy, local facts and SEO for one location page (UK city).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Reading Borough Council (2026 multipliers, Reading Central and
// Abbey Quarter BIDs), GOV.UK (rates multipliers, off-payroll working, minimum wage), Living Wage
// Foundation. Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/reading/accountants-reading-aerial-river.jpg';
import laptop from '../../assets/locations/reading/accountants-reading-contractor-laptop.jpg';
import townHall from '../../assets/locations/reading/accountants-reading-town-hall.jpg';
import train from '../../assets/locations/reading/accountants-reading-elizabeth-line-train.jpg';
import houses from '../../assets/locations/reading/accountants-reading-houses.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/reading/',
  primaryKeyword: 'accountants in reading',
  secondaryKeywords: [
    'accountant Reading', 'accountants Reading Berkshire', 'contractor accountant Reading',
    'IR35 accountant Reading', 'tax accountant Reading', 'small business accountant Reading',
    'Reading BID levy',
  ],
  title: 'Accountants in Reading | Severin Finance',
  description: 'Accountants in Reading for contractors, IR35, company accounts, payroll and landlords across the Thames Valley. Fixed fees. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Reading', '/uk/reading/'],
  ],
  place: { type: 'City', name: 'Reading', wikidata: 'Q161491', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Reading', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Reading · Berkshire and the Thames Valley',
    h1: 'Accountants in Reading',
    answer: 'Our accountants in Reading look after contractors, town centre businesses, landlords and commuters, with tax returns, company accounts, VAT and payroll for fixed fees. Most businesses in the Reading Central and Abbey Quarter BIDs pay a levy on top of their rates until 2029, and we build it into your cash flow.',
    image: hero,
    imageAlt: 'Aerial view of Reading town centre with the river and a footbridge at sunset',
    chip: 'Reading Borough Council',
    card: { label: 'Town centre BIDs', value: '2', note: 'Reading Central and Abbey Quarter, nearly £1.5m a year to 2029' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in Reading and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Reading facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Reading client mix) ----------
  who: {
    eyebrow: 'Who we help in Reading',
    h2: 'Reading contractors, traders, commuters and landlords',
    intro: 'Reading is a Thames Valley business town with a large contractor market, a busy centre and fast rail links into London. Most of our Reading clients fit one of four groups.',
    cards: [
      {
        img: laptop, alt: 'Contractor typing on a laptop at a wooden desk with a coffee and notebook',
        tag: 'Contractors', title: 'IT and engineering contractors',
        text: 'Limited company accounts, IR35 checks and director pay for contractors working with Thames Valley tech and engineering firms, on site or from home.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
      {
        img: townHall, alt: 'Red brick clock tower of Reading Town Hall against a blue sky',
        tag: 'Town centre', title: 'Shops, cafés and town centre firms',
        text: 'Bookkeeping, VAT and payroll for businesses in the centre, including the BID levy charged on top of business rates in the Reading Central and Abbey Quarter areas.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: train, alt: 'Elizabeth line train arriving at a station platform',
        tag: 'Commuters', title: 'London commuters and higher earners',
        text: 'Self assessment for employees with bonuses, shares or rental income who live in Reading and work in London. Reading is the western end of the Elizabeth line.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment'],
      },
      {
        img: houses, alt: 'Detached houses behind hedges on a residential street at sunset',
        tag: 'Property', title: 'Landlords and property investors',
        text: 'Rental accounts, buy-to-let companies and capital gains on sales for landlords letting to students, staff and commuters across Reading.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Reading ----------
  services: {
    eyebrow: 'Services in Reading',
    h2: 'What Reading clients ask us for most',
    intro: 'We work online, so a contractor in Caversham and a shop on Broad Street get the same service and fixed fee. Each card opens the full service page.',
    items: [
      { title: 'Contractor accounts', text: 'Accounts, salary and dividend planning and IR35 reviews for Reading contractor companies.', href: '/uk/accounting/contractor-accountant/' },
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for Thames Valley owner-managed firms.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Tax returns for commuters, directors and landlords, filed before the 31 January deadline.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'VAT registration and Making Tax Digital returns for Reading traders and consultancies.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for town centre employers, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlords and property', text: 'Rental accounts and tax planning for Reading houses, flats and shared lets.', href: '/uk/accounting/landlord-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Reading) ----------
  facts: {
    eyebrow: 'Reading facts',
    h2: 'Rates, BIDs and contractor rules in Reading',
    intro: 'Reading Borough Council asked ratepayers to check their 2026-27 multiplier after the April changes. The town centre adds two BID levies, and contractors face the national off-payroll rules.',
    tables: [
      {
        caption: 'Business rates in Reading, 2026-27',
        head: ['Rate', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 of rateable value'],
          ['Small retail, hospitality and leisure', '38.2p per £1'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['High value multiplier (RV £500,000 or more)', '50.8p per £1'],
          ['Reading Central and Abbey Quarter BIDs', 'Extra levy in each BID area, 2024 to 2029'],
        ],
        after: 'Reading Borough Council sends the bill in the borough. Earley, Woodley and the Thames Valley Science Park at Shinfield are in Wokingham Borough, so Wokingham Borough Council bills those premises.',
      },
      {
        caption: 'Contractors and employers, 2026-27',
        head: ['Rule', 'What it means'],
        rows: [
          ['Off-payroll rules, medium or large client', 'The client decides your IR35 status'],
          ['Off-payroll rules, small client', 'Your own company decides your status'],
          ['National Living Wage (21 and over)', '£12.71 an hour from 1 April 2026'],
          ['Real Living Wage (voluntary)', '£13.45 an hour'],
        ],
        after: 'If a client treats a contract as inside IR35, the fee is paid after tax and National Insurance. We review each contract and your company’s pay plan.',
      },
    ],
    urgent: {
      title: 'New contract, new IR35 question',
      text: 'A status decision can change your take-home pay a lot. Send us the contract and the client’s status determination before you sign, and we explain what it means for your company.',
      cta: 'Get an IR35 review',
    },
  },

  // ---------- 6. How we work with Reading clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Reading clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your company, contracts or tax return. We tell you what we would do and what it would cost.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the fee before we start. A new contract or extra rental property is priced upfront.' },
      { title: 'We do the work', text: 'You upload records or connect Xero or QuickBooks. We prepare and file, and remind you of every HMRC and Companies House date.' },
    ],
    meet: {
      title: 'Meeting us in Reading',
      text: 'Reading clients work with us by video and secure upload, early or late around a London commute or a client site.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Reading meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Reading Borough Council and GOV.UK sources. Rates, BID levies and IR35 guidance change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Reading clients',
  faqs: [
    { q: 'Who sends the business rates bill in Reading?', a: 'Reading Borough Council bills premises in the borough. Some places people call Reading are in Wokingham Borough, including Earley, Woodley and the Thames Valley Science Park at Shinfield, so Wokingham Borough Council bills those. The 2026-27 multipliers are the same in both.' },
    { q: 'What are the Reading BIDs?', a: 'Reading has two business improvement districts: Reading Central, set up in 2006, and Abbey Quarter, set up in 2019. Both were renewed for 2024 to 2029. Businesses in each area pay a levy on top of business rates, and together the two BIDs raise nearly £1.5m a year.' },
    { q: 'Who decides if my Reading contract is inside IR35?', a: 'If your client is a medium or large business, the client decides and must give you a status determination statement. If the client is small, your own company decides. Inside IR35, the fee is taxed like employment income. We review the contract and your working practices.' },
    { q: 'I commute from Reading to London. Can I claim my season ticket?', a: 'Usually not. Travel between home and your normal workplace is ordinary commuting, so employees and directors cannot claim it. Some employers offer season ticket loans, which are tax-free up to a limit. Contractors may claim travel to a temporary workplace in some cases.' },
    { q: 'Do I need an accountant based in Reading?', a: 'No. Tax rules are the same across England and we do most work online. What helps is an accountant who knows Reading’s mix of contractors, town centre firms and landlords, and which council bills your premises. We meet by video and you upload records securely.' },
    { q: 'I moved abroad but still own a house in Reading. Can you help?', a: 'Yes. You still pay UK tax on the rent and file a UK return. Your letting agent or tenant must deduct basic rate tax under the Non-Resident Landlord Scheme unless HMRC approves you to receive the rent in full. We file your return and make the application.' },
    { q: 'How much does an accountant cost in Reading?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby locations', links: [
      ['/uk/oxford/', 'Accountants in Oxford'],
      ['/uk/london/richmond/', 'Accountants in Richmond'],
      ['/uk/london/wimbledon/', 'Accountants in Wimbledon'],
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
    h2: 'Talk to our', em: 'Reading accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Reading and the Thames Valley'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.reading.gov.uk/business/business-rates/changes-to-business-rates-multipliers-from-2026/', 'Reading Borough Council: Business rates multipliers from 2026'],
    ['https://democracy.reading.gov.uk/mgAi.aspx?ID=12455', 'Reading Borough Council: Reading Central and Abbey Quarter BIDs 2024 to 2029'],
    ['https://www.gov.uk/guidance/understanding-off-payroll-working-ir35', 'GOV.UK: Understanding off-payroll working (IR35)'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
    ['https://www.livingwage.org.uk/what-real-living-wage', 'Living Wage Foundation: Real Living Wage'],
  ],
};
