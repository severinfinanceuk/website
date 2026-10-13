// Accountants in Wimbledon: all copy, local facts and SEO for one location page (a London area page).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Love Wimbledon BID (2026 ballot), Merton Council (council tax,
// Future Wimbledon), ONS (rents), GOV.UK (Rent a Room, property allowance), City of London (90-night rule). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/wimbledon/accountants-wimbledon-white-house.jpg';
import mural from '../../assets/locations/wimbledon/accountants-wimbledon-alwyne-road-mural.jpg';
import courts from '../../assets/locations/wimbledon/accountants-wimbledon-tennis-courts.jpg';
import train from '../../assets/locations/wimbledon/accountants-wimbledon-underground-train.jpg';
import windmill from '../../assets/locations/wimbledon/accountants-wimbledon-common-windmill.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/wimbledon/',
  primaryKeyword: 'accountants in Wimbledon',
  secondaryKeywords: [
    'accountant Wimbledon', 'tax accountant Wimbledon', 'small business accountant Wimbledon',
    'accountants Merton', 'Wimbledon rent a room tax', 'renting house during Wimbledon tax',
    'Love Wimbledon BID levy',
  ],
  title: 'Accountants in Wimbledon | Severin Finance',
  description: 'Accountants in Wimbledon for tax returns, landlord accounts, VAT and payroll, plus tax on Championships lets. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Wimbledon', '/uk/london/wimbledon/'],
  ],
  place: { type: 'Place', name: 'Wimbledon', wikidata: 'Q736742', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Wimbledon', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Wimbledon · London Borough of Merton',
    h1: 'Accountants in Wimbledon',
    answer: 'Our accountants in Wimbledon prepare tax returns, company accounts, VAT and payroll for town centre businesses, professionals and landlords. Merton Council bills business rates here, and the Love Wimbledon BID ballot on a proposed 1.30% levy runs until 5 November 2026. We also handle the tax on rooms and homes let during the Championships.',
    image: hero,
    imageAlt: 'Large white Georgian house with a glass-fronted terrace, lawns and blue sky in Wimbledon',
    chip: 'London Borough of Merton',
    card: { label: 'Average private rent', value: '£2,172', note: 'A month in Merton, August 2026, up 5.4% in a year (ONS)' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in Wimbledon and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Wimbledon facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Wimbledon client mix) ----------
  who: {
    eyebrow: 'Who we help in Wimbledon',
    h2: 'Town centre firms, Championships hosts, commuters and landlords',
    intro: 'Wimbledon is a busy town centre and a rail hub for south-west London, and Merton rents rose 5.4% in the year to August 2026. Our Wimbledon clients mostly fall into four groups.',
    cards: [
      {
        img: mural, alt: 'Mural of two sparrows and the words “It’s oh so quiet” on a building in Alwyne Road, Wimbledon',
        tag: 'Small business', title: 'Town centre shops, cafés and offices',
        text: 'Bookkeeping, VAT and payroll for businesses around Wimbledon station and the Broadway. Premises from £20,000 rateable value can vote now on the next Love Wimbledon BID levy.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: courts, alt: 'Aerial view of tennis courts and a park path in Wimbledon at sunset',
        tag: 'Short lets', title: 'Homeowners letting for the Championships',
        text: 'For two weeks each summer, some residents let a room or their whole home. We check whether Rent a Room (£7,500 a year) or the £1,000 property allowance applies, and file the return if you need one.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      },
      {
        img: train, alt: 'District line train waiting at a London Underground platform',
        tag: 'Professionals', title: 'Commuting professionals and contractors',
        text: 'Wimbledon has trains to Waterloo in about 16 minutes, Thameslink and the District line. We do tax returns, IR35 checks and company accounts for City and West End professionals who live here.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
      {
        img: windmill, alt: 'Brick base of the Wimbledon Windmill on Wimbledon Common, with a white wooden balcony',
        tag: 'Property', title: 'Landlords near the Common and the Village',
        text: 'Rental accounts, Making Tax Digital and capital gains for landlords in a borough where the average private rent reached £2,172 a month in August 2026.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Wimbledon ----------
  services: {
    eyebrow: 'Services in Wimbledon',
    h2: 'What Wimbledon clients ask us for most',
    intro: 'We work online at fixed fees across Wimbledon, from the town centre and South Wimbledon to the Village and Raynes Park. Each card opens the full service page.',
    items: [
      { title: 'Self assessment', text: 'Tax returns for professionals, directors, landlords and anyone with Championships letting income above the tax-free limits.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Landlord accounts', text: 'Rental profit, allowable costs and mortgage interest rules for Wimbledon buy-to-let and short-let owners.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Making Tax Digital', text: 'Quarterly updates for Wimbledon landlords and sole traders now inside Making Tax Digital for Income Tax.', href: '/uk/tax/making-tax-digital-accountant/' },
      { title: 'Limited company accounts', text: 'Accounts and corporation tax for consultancies and town centre firms, with director pay planned ahead.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'VAT returns', text: 'Registration and quarterly VAT returns for Wimbledon shops, restaurants and service firms.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI and pensions for town centre employers at the £12.71 National Living Wage.', href: '/uk/accounting/payroll-services/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Wimbledon) ----------
  facts: {
    eyebrow: 'Wimbledon facts',
    h2: 'Short lets, rates and levies in Wimbledon',
    intro: 'Two things set Wimbledon apart for tax: the yearly wave of Championships lets, and a town centre BID that is being renewed now. Merton Council bills business rates and council tax.',
    tables: [
      {
        caption: 'Tax on letting your home during the Championships, 2026-27',
        head: ['Rule', 'Detail'],
        rows: [
          ['Rent a Room (furnished room in your only or main home)', '£7,500 a year tax free, or £3,750 if the income is shared'],
          ['Property allowance (other small property income)', '£1,000 a year, not on top of Rent a Room for the same income'],
          ['Property income between £1,000 and £2,500', 'Contact HMRC'],
          ['Property income over £2,500', 'Register for Self Assessment'],
          ['London short-let limit', 'Whole home up to 90 nights a calendar year without planning permission'],
        ],
        after: 'Rent a Room only covers furnished accommodation in your main home while it is your home. If you move out and let the whole house, it may not apply, and the property allowance or normal rental rules may be the better fit. We check before you file.',
      },
      {
        caption: 'Business costs in Wimbledon',
        head: ['Item', 'Detail'],
        rows: [
          ['Business rates billing authority', 'London Borough of Merton'],
          ['Love Wimbledon BID proposal', '1.30% of rateable value, premises of £20,000 or more'],
          ['BID ballot', 'Postal vote from 9 October to 5pm on 5 November 2026'],
          ['Proposed BID term', '1 April 2027 to 31 March 2032, about 400 premises'],
          ['Merton Band D council tax 2026-27', '£2,140.52, or £2,181.90 with the Wimbledon and Putney Commons levy'],
        ],
        after: 'Under the proposal, charities with rate relief would pay 40% of the BID rate and Wimbledon Quarter retail 90%. Premises above £92,000 rateable value also pay the 2p Crossrail supplement on the Merton bill.',
      },
    ],
    urgent: {
      title: 'Love Wimbledon BID vote closes on 5 November 2026',
      text: 'If your premises have a rateable value of £20,000 or more, you can vote on the proposed 1.30% levy. We can show what it would cost you from April 2027 and add it to your forecast.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Wimbledon clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Wimbledon clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your income, lets or business, and what is due next. No charge.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the fee before we start, including one-off returns for a Championships let.' },
      { title: 'We do the work', text: 'Send booking statements, receipts and records through secure upload. We work out the tax, file the return and tell you what to pay.' },
    ],
    meet: {
      title: 'Working with us from Wimbledon',
      text: 'Wimbledon clients work with us by video, phone and secure upload, which suits busy commuters and anyone away during the Championships fortnight.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Wimbledon meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Merton Council, Love Wimbledon, GOV.UK, ONS and City of London sources. Allowances, levies and council tax change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Wimbledon clients',
  faqs: [
    { q: 'Do I pay tax on renting my home out during Wimbledon?', a: 'Possibly. If you let a furnished room in your main home, the first £7,500 a year is tax free under Rent a Room. Other small property income can use the £1,000 property allowance instead. Above those limits, you usually report the income on a Self Assessment tax return.' },
    { q: 'Can I let my whole house for the Championships?', a: 'In London you can let a whole home for up to 90 nights in a calendar year without planning permission, if you pay council tax on it. Check your mortgage, lease and insurance too. Rent a Room may not apply while you are not living there, so we check which allowance fits.' },
    { q: 'Who collects business rates in Wimbledon?', a: 'The London Borough of Merton bills and collects business rates in Wimbledon, from the town centre to South Wimbledon and the Village. Larger town centre premises also pay the Love Wimbledon BID levy, and the 2p Crossrail supplement applies only above £92,000 rateable value.' },
    { q: 'What is the Love Wimbledon BID levy from 2027?', a: 'The proposal for the next term is 1.30% of rateable value on premises worth £20,000 or more, from 1 April 2027 to 31 March 2032. Charities with rate relief would pay 40% of that rate. The postal ballot closes at 5pm on 5 November 2026.' },
    { q: 'What is the Wimbledon and Putney Commons levy?', a: 'It is an extra charge on the council tax of homes within three quarters of a mile of Wimbledon Common. In 2026-27 a Band D home in Merton pays £2,140.52, or £2,181.90 with the levy. It appears on your Merton council tax bill.' },
    { q: 'Do I need an accountant in Wimbledon, or can I work online?', a: 'You can work online. Tax rules are the same across England, and we work by video, phone and secure upload. What matters is local knowledge: Merton rates, the BID ballot, the commons levy and the tax on Championships lets.' },
    { q: 'How much does an accountant cost in Wimbledon?', a: 'Fixed fees start at £XXX for a self assessment tax return, £XXX for a one-off Championships letting return and £XXX a month for a small limited company. You get the figure in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
    ] },
    { title: 'Near Wimbledon', links: [
      ['/uk/london/richmond/', 'Accountants in Richmond'],
      ['/uk/london/croydon/', 'Accountants in Croydon'],
      ['/uk/london/kensington/', 'Accountants in Kensington'],
      ['/uk/london/westminster/', 'Accountants in Westminster'],
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
    h2: 'Talk to our', em: 'Wimbledon accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Wimbledon, the Village and Raynes Park'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://lovewimbledon.org/the-bid/ballot-2026/', 'Love Wimbledon: BID ballot 2026 and proposed levy'],
    ['https://www.merton.gov.uk/council-tax-benefits-and-housing/council-tax/council-tax-charges-and-bands', 'Merton Council: council tax charges and bands 2026-27'],
    ['https://www.merton.gov.uk/planning-and-buildings/regeneration-projects/future-wimbledon', 'Merton Council: Future Wimbledon'],
    ['https://www.ons.gov.uk/visualisations/housingpriceslocal/E09000024/', 'ONS: Housing prices and rents in Merton'],
    ['https://www.gov.uk/rent-room-in-your-home', 'GOV.UK: Rent a Room Scheme'],
    ['https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income', 'GOV.UK: Property and trading allowances'],
    ['https://www.cityoflondon.gov.uk/services/planning/planning-enforcement/short-term-letting', 'City of London: short-term letting and the 90-night rule'],
  ],
};
