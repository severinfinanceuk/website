// Accountants in Camden: all copy, local facts and SEO for one London area page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Camden Council (BID levy thresholds, 2026 BID ballots, 2026-27 rates letter),
// Knowledge Quarter, GOV.UK (multipliers, Supporting Small Business Relief), GLA (Crossrail BRS). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/camden/accountants-camden-camden-lock-bridge.jpg';
import market from '../../assets/locations/camden/accountants-camden-camden-market-arch.jpg';
import kingsCross from '../../assets/locations/camden/accountants-camden-kings-cross.jpg';
import bloomsbury from '../../assets/locations/camden/accountants-camden-bloomsbury-building.jpg';
import canalHomes from '../../assets/locations/camden/accountants-camden-canal-side-homes.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/camden/',
  primaryKeyword: 'accountants in Camden',
  secondaryKeywords: [
    'accountant Camden', 'accountants Camden Town', 'accountants King’s Cross',
    'accountants Holborn', 'tax accountant Camden', 'Camden business rates',
    'Camden BID levy', 'small business accountant NW1',
  ],
  title: 'Accountants in Camden | Severin Finance',
  description: 'Accountants in Camden for company accounts, VAT, payroll and tax, from Camden Market to King’s Cross and Holborn. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Camden', '/uk/london/camden/'],
  ],
  place: { type: 'AdministrativeArea', name: 'London Borough of Camden', wikidata: 'Q202088', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Camden', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'London · Camden Town, King’s Cross, Holborn',
    h1: 'Accountants in Camden',
    answer: 'Our accountants in Camden handle tax returns, company accounts, VAT, payroll and funding for businesses billed by the London Borough of Camden, from Camden Market traders to King’s Cross start-ups. We also check BID levies: five Camden BIDs add a charge on top of rates, starting at £40,000 rateable value in Hatton Garden.',
    image: hero,
    imageAlt: 'Blue Camden Lock railway bridge over a busy street in Camden Town, north London',
    chip: 'London Borough of Camden',
    card: { label: 'Camden BIDs', value: '5', note: 'Business Improvement Districts that add a levy to rates bills' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Camden and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Camden facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Camden client mix) ----------
  who: {
    eyebrow: 'Who we help in Camden',
    h2: 'Traders, founders, firms and landlords in Camden',
    intro: 'Camden runs from the market stalls of Camden Town to the labs and offices of King’s Cross and the law firms of Holborn. Our Camden clients fall into four groups.',
    cards: [
      {
        img: market, alt: 'Shoppers walking under the large entrance arch of Camden Market',
        tag: 'Market and venues', title: 'Market traders, bars and music venues',
        text: 'Bookkeeping, VAT and payroll for Camden Market stalls, bars and live music venues. Pubs and live music venues can claim a 15% relief on their 2026-27 rates bill.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: kingsCross, alt: 'People on the steps and paved square at King’s Cross with new office buildings behind',
        tag: 'Start-ups', title: 'Knowledge Quarter start-ups',
        text: 'Company formation, SEIS and EIS advance assurance and investor reporting for founders near King’s Cross, home to the Knowledge Quarter of universities, the British Library and the Francis Crick Institute.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: bloomsbury, alt: 'Victorian terracotta building on Russell Square in Bloomsbury',
        tag: 'Professional firms', title: 'Holborn and Bloomsbury firms',
        text: 'Company accounts, corporation tax and payroll for law practices, consultancies and Hatton Garden jewellers, including firms inside the Central District Alliance or Hatton Garden BID areas.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: canalHomes, alt: 'Modern canal-side homes along Regent’s Canal in Camden Town',
        tag: 'Property', title: 'Landlords in Camden',
        text: 'Rental accounts, Making Tax Digital for income tax and capital gains on sales for owners of flats in Camden Town, Kentish Town, Hampstead and Bloomsbury.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Camden ----------
  services: {
    eyebrow: 'Services in Camden',
    h2: 'What Camden clients ask us for most',
    intro: 'We work online across the borough, so a stall holder in Chalk Farm and a firm in Holborn get the same fixed-fee service. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for Camden companies, from Holborn practices to King’s Cross tech firms.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'VAT returns', text: 'VAT registration, the right scheme for market and food sales, and quarterly returns under Making Tax Digital.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll for bars, venues and shops with weekend and late shifts, set up for the £12.71 National Living Wage.', href: '/uk/accounting/payroll-services/' },
      { title: 'Company formation', text: 'New companies set up correctly for founders spinning out of the Knowledge Quarter, with share classes ready for investors.', href: '/uk/company-services/company-formation/' },
      { title: 'Self assessment', text: 'Tax returns for sole traders, directors and musicians with income from gigs, royalties and other work.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Landlords and property', text: 'Rental accounts and tax planning for Camden flats, including Making Tax Digital for landlords.', href: '/uk/accounting/landlord-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Camden) ----------
  facts: {
    eyebrow: 'Camden facts',
    h2: 'Camden BIDs and business rates',
    intro: 'Camden Council sends business rates bills across the borough. In five areas a Business Improvement District (BID) levy is added once your rateable value passes a set threshold. Figures for 2026-27.',
    tables: [
      {
        caption: 'Camden BID levy thresholds',
        head: ['BID', 'Levy applies from'],
        rows: [
          ['Hatton Garden', '£40,000 rateable value'],
          ['Euston Town', '£70,000 rateable value'],
          ['Camden Town Unlimited', '£120,000 rateable value'],
          ['Fitzrovia Partnership', '£160,000 rateable value'],
          ['Central District Alliance (Bloomsbury, Holborn, St Giles)', '£180,000 rateable value'],
        ],
        after: 'Camden Town Unlimited, Euston Town and Hatton Garden all won renewal ballots on 27 February 2026, so their levies continue. Below the threshold you pay no BID levy.',
      },
      {
        caption: 'Business rates in Camden, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Transitional relief cap on increases', '5% (RV up to £28,000), 15% (to £100,000), 30% (over £100,000)'],
          ['Pubs and live music venues', '15% relief on 2026-27 bills'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on RV over £92,000'],
        ],
        after: 'If you lost small business relief at the April 2026 revaluation, Supporting Small Business Relief limits the rise to £800 a year or the transitional cap, whichever is higher.',
      },
    ],
    urgent: {
      title: 'Has your rateable value crossed a threshold?',
      text: 'The April 2026 revaluation moved many Camden rateable values. Passing a BID threshold or the £92,000 Crossrail line adds a charge to your bill. We check the bill, the reliefs and your cash flow.',
      cta: 'Get a rates and cash flow check',
    },
  },

  // ---------- 6. How we work with Camden clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Camden clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your business, your rates bill and your deadlines. No charge and no obligation.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before we start. No hourly billing, whether you run one stall or a firm of 50.' },
      { title: 'We do the work', text: 'Upload records online or connect Xero or QuickBooks. We prepare and file everything and remind you of each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Camden',
      text: 'Most Camden clients work with us by video, phone and secure upload, so there is no need to cross Euston Road or pay the Congestion Charge to see us.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Camden meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Camden Council, GOV.UK, Greater London Authority and Knowledge Quarter sources. BID levies and rates change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Camden clients',
  faqs: [
    { q: 'Who sends the business rates bill in Camden?', a: 'The London Borough of Camden sends business rates bills for the whole borough, from Camden Town and Kentish Town to King’s Cross, Bloomsbury and Holborn. Any BID levy and the Crossrail supplement are collected by the council on top of your rates.' },
    { q: 'Do I have to pay a BID levy in Camden?', a: 'Only if your premises are inside one of the five BID areas and your rateable value is at or above that BID’s threshold. The thresholds range from £40,000 in Hatton Garden to £180,000 in the Central District Alliance area. Below that, you pay nothing extra.' },
    { q: 'Can a Camden music venue get help with business rates?', a: 'Yes. For 2026-27 pubs and live music venues can get 15% relief on their business rates bill. Other bars and restaurants pay the lower retail, hospitality and leisure multiplier instead of the old 40% relief, which ended on 31 March 2026.' },
    { q: 'Is Camden in the Congestion Charge zone?', a: 'Part of it. Euston Road forms the northern edge of the central zone, so Bloomsbury and Holborn are inside it and Camden Town and King’s Cross are outside. The charge is £18 a day. ULEZ covers the whole borough.' },
    { q: 'Can you help a King’s Cross start-up raise investment?', a: 'Yes. We set up the company and share structure, apply to HMRC for SEIS or EIS advance assurance, and prepare the compliance statements investors need to claim their tax relief. We also keep the records that R&D claims depend on.' },
    { q: 'Do I need to meet my accountant in person?', a: 'No. Our Camden clients work with us by video call, phone and secure upload, with Xero or QuickBooks access where you use it. You get one named contact and every deadline in your calendar.' },
    { q: 'How much does an accountant cost in Camden?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services in Camden', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Near Camden', links: [
      ['/uk/london/islington/', 'Accountants in Islington'],
      ['/uk/london/westminster/', 'Accountants in Westminster'],
      ['/uk/london/city-of-london/', 'Accountants in the City of London'],
      ['/uk/london/shoreditch/', 'Accountants in Shoreditch'],
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
    h2: 'Talk to our', em: 'Camden accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Camden Town to Holborn'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.camden.gov.uk/business-improvement-district-bid-levy', 'Camden Council: Business Improvement District levy'],
    ['https://www.camden.gov.uk/business-improvement-districts-bid-ballots', 'Camden Council: BID ballot results 2026'],
    ['https://www.camden.gov.uk/business-rates-letter-from-the-leader-of-the-council-2026-to-2027', 'Camden Council: Business rates letter 2026 to 2027'],
    ['https://www.knowledgequarter.london/', 'Knowledge Quarter, King’s Cross'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/apply-for-business-rate-relief/supporting-small-business-relief', 'GOV.UK: Supporting Small Business Relief'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
  ],
};
