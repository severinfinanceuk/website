// Accountants in Shoreditch: all copy, local facts and SEO for one London area page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Hackney Council (business rates, Shoreditch jobs figure), Tower Hamlets
// (East Shoreditch boundary), GOV.UK (multipliers, Supporting Small Business Relief), GLA (Crossrail BRS). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/shoreditch/accountants-shoreditch-village-underground.jpg';
import tech from '../../assets/locations/shoreditch/accountants-shoreditch-street-city-towers.jpg';
import studio from '../../assets/locations/shoreditch/accountants-shoreditch-mural-building.jpg';
import bars from '../../assets/locations/shoreditch/accountants-shoreditch-railway-bridge-cafes.jpg';
import freelance from '../../assets/locations/shoreditch/accountants-shoreditch-brick-lane-terrace.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/shoreditch/',
  primaryKeyword: 'accountants in Shoreditch',
  secondaryKeywords: [
    'accountant Shoreditch', 'start-up accountant Shoreditch', 'tech accountant Shoreditch',
    'accountants Old Street', 'accountants Hackney', 'EIS SEIS accountant London',
    'Hackney business rates', 'accountant EC2A',
  ],
  title: 'Accountants in Shoreditch | Severin Finance',
  description: 'Accountants in Shoreditch for start-ups, creative studios and bars: company accounts, SEIS and EIS, VAT and payroll. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Shoreditch', '/uk/london/shoreditch/'],
  ],
  place: { type: 'Place', name: 'Shoreditch', wikidata: 'Q1027127', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Shoreditch', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'London · Shoreditch, Old Street, Hoxton',
    h1: 'Accountants in Shoreditch',
    answer: 'Our accountants in Shoreditch handle company accounts, tax, payroll and investor paperwork for start-ups, studios and bars. Most of Shoreditch sits in the London Borough of Hackney, which sends the rates bill, while its eastern edge falls in Tower Hamlets. We check which council and which 2026-27 multiplier applies to you.',
    image: hero,
    imageAlt: 'Village Underground in Shoreditch, with old Tube carriages on the roof and a large mural on the wall',
    chip: 'Hackney and Tower Hamlets',
    card: { label: 'Shoreditch jobs', value: '40,000+', note: 'In over 4,000 businesses (Hackney Council, 2017)' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Founders in Shoreditch and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Shoreditch facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Shoreditch client mix) ----------
  who: {
    eyebrow: 'Who we help in Shoreditch',
    h2: 'Founders, studios, venues and freelancers in Shoreditch',
    intro: 'Hackney Council has called Shoreditch the borough’s major employment area. It grew from warehouses and studios into the Tech City cluster around Old Street. Our clients here fall into four groups.',
    cards: [
      {
        img: tech, alt: 'Graffiti-covered building on an east London street with City of London towers behind',
        tag: 'Start-ups', title: 'Tech start-ups',
        text: 'Company formation, SEIS and EIS advance assurance and investor-ready accounts for founders building products around Old Street and Shoreditch High Street.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: studio, alt: 'Building covered in a large colourful mural on an east London street',
        tag: 'Creative', title: 'Creative studios and agencies',
        text: 'Company accounts, VAT and dividend planning for design, film, music and branding studios, including those in shared or affordable workspace.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: bars, alt: 'Street under a railway bridge on the edge of Shoreditch, lined with restaurants and street art',
        tag: 'Hospitality', title: 'Bars, cafés and restaurants',
        text: 'Bookkeeping, VAT and payroll for late-night venues and restaurants that lost the 40% retail, hospitality and leisure relief on 31 March 2026.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: freelance, alt: 'Brick terrace with sash windows and a Brick Lane street sign, on the edge of Shoreditch',
        tag: 'Freelancers', title: 'Contractors and freelancers',
        text: 'IR35 reviews, limited company accounts and self assessment for developers, designers and consultants working from Shoreditch desks and studios.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Shoreditch ----------
  services: {
    eyebrow: 'Services in Shoreditch',
    h2: 'What Shoreditch clients ask us for most',
    intro: 'We work online, so founders, studios and venues get the same fixed-fee service on either side of the Hackney and Tower Hamlets line. Each card goes to the full service page.',
    items: [
      { title: 'Company formation', text: 'New companies set up with the right share structure from day one, ready for angel and seed investors.', href: '/uk/company-services/company-formation/' },
      { title: 'Virtual finance director', text: 'Board packs, cash runway forecasts and investor reporting for funded Shoreditch start-ups, without a full-time hire.', href: '/uk/accounting/virtual-finance-director/' },
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for studios and agencies.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'VAT returns', text: 'Registration, scheme choice and quarterly returns for bars, restaurants and digital businesses selling online.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll for bar and kitchen teams and for start-ups with share options, set up for April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'Contractor accounts', text: 'IR35 checks, dividends and expenses for contractors working for tech and media clients.', href: '/uk/accounting/contractor-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Shoreditch) ----------
  facts: {
    eyebrow: 'Shoreditch facts',
    h2: 'Business rates in Shoreditch from April 2026',
    intro: 'Most Shoreditch premises are billed by Hackney Council. The East Shoreditch edge falls in Tower Hamlets, so check the council on your bill. The national multipliers apply in both. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business rates in Shoreditch, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Council that bills you', 'Hackney (most of Shoreditch) or Tower Hamlets (eastern edge)'],
          ['Revaluation', 'From 1 April 2026, based on rents at 1 April 2024'],
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['High value multiplier (RV £500,000 or more)', '50.8p per £1'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on RV over £92,000'],
        ],
        after: 'The lower retail, hospitality and leisure multipliers replace the 40% relief that ended on 31 March 2026. For many Shoreditch bars and restaurants the net bill went up.',
      },
      {
        caption: 'Transitional relief in London, 2026-27',
        head: ['Rateable value', 'Most your bill can rise'],
        rows: [
          ['Up to £28,000', '5%'],
          ['£28,001 to £100,000', '15%'],
          ['Over £100,000', '30%'],
        ],
        after: 'If you lost small business relief at the revaluation, Supporting Small Business Relief caps the rise at £800 a year or the transitional cap, whichever is higher.',
      },
    ],
    urgent: {
      title: 'Did your bar or restaurant bill jump in April?',
      text: 'A revaluation, new multipliers and the end of the 40% relief all landed on 1 April 2026. We check your Hackney or Tower Hamlets bill, the reliefs you can claim and your cash flow.',
      cta: 'Get a rates and cash flow check',
    },
  },

  // ---------- 6. How we work with Shoreditch clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Shoreditch clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your company, your investor plans and your deadlines. No charge and no obligation.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before we start, so it fits your runway or your venue budget.' },
      { title: 'We do the work', text: 'Connect Xero or QuickBooks and upload records online. We prepare, file and keep investors and HMRC up to date.' },
    ],
    meet: {
      title: 'Meeting us in Shoreditch',
      text: 'Shoreditch clients work with us by video, phone, email and secure upload, which suits founders and venue owners with no time to spare.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Shoreditch meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Hackney Council, Tower Hamlets Council, GOV.UK and Greater London Authority sources. Rates and reliefs change every year: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Shoreditch clients',
  faqs: [
    { q: 'Is Shoreditch in Hackney or Tower Hamlets?', a: 'Mostly Hackney. The London Borough of Hackney covers most of Shoreditch, including Old Street, Hoxton and Shoreditch High Street. The borough boundary runs through East Shoreditch, so premises on that edge are billed by Tower Hamlets. Your rates bill shows which council you deal with.' },
    { q: 'Why did my Shoreditch bar’s business rates go up in April 2026?', a: 'Three changes landed together on 1 April 2026: a revaluation based on 2024 rents, new multipliers, and the end of the 40% retail, hospitality and leisure relief. The lower multipliers for those sectors do not always make up for the lost relief. Transitional relief limits how fast the bill can rise.' },
    { q: 'Can you help my start-up get SEIS or EIS advance assurance?', a: 'Yes. We check your company and share structure, prepare the advance assurance application to HMRC and, once investors put money in, file the compliance statements so they can claim their tax relief. We also keep the records an R&D claim needs.' },
    { q: 'Does the Crossrail supplement apply in Shoreditch?', a: 'Only if your rateable value is over £92,000. Then you pay an extra 2p per £1 of rateable value on top of business rates, collected by Hackney or Tower Hamlets on the same bill. Most small studios and cafés are below the threshold.' },
    { q: 'Should a Shoreditch freelancer work through a limited company?', a: 'It depends on your profit, your clients and whether IR35 applies to your contracts. A company can save tax at higher profits but adds accounts and filings. We compare both routes with your real figures in the free consultation.' },
    { q: 'Do I need to meet my accountant in person?', a: 'No. Most of our Shoreditch clients never meet us face to face. We work by video, phone and secure upload, and connect to Xero or QuickBooks, so your accounts stay up to date between calls.' },
    { q: 'How much does an accountant cost in Shoreditch?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services in Shoreditch', links: [
      ['/uk/company-services/company-formation/', 'Company formation'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
    ] },
    { title: 'Near Shoreditch', links: [
      ['/uk/london/islington/', 'Accountants in Islington'],
      ['/uk/london/city-of-london/', 'Accountants in the City of London'],
      ['/uk/london/stratford/', 'Accountants in Stratford'],
      ['/uk/london/canary-wharf/', 'Accountants in Canary Wharf'],
      ['/uk/london/camden/', 'Accountants in Camden'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Founders abroad', links: [
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Shoreditch accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Hackney and Tower Hamlets'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://hackney.gov.uk/business-and-licensing/business-rates/business-rates', 'Hackney Council: Business rates'],
    ['https://www.towerhamlets.gov.uk/Documents/Planning-and-building-control/Neighbourhood-Planning-Documents-March-2021/1-East-Shoreditch-Area-Boundary-Map.pdf', 'Tower Hamlets Council: East Shoreditch area boundary map'],
    ['https://news.hackney.gov.uk/news/planning-for-future-shoreditch', 'Hackney Council: Planning for the future of Shoreditch (2017)'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/apply-for-business-rate-relief/supporting-small-business-relief', 'GOV.UK: Supporting Small Business Relief'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
  ],
};
