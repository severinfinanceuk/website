// Accountants in Stratford: all copy, local facts and SEO for one London area page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Stratford Original BID (levy, term, ballot), Newham Council (BIDs, LLDC planning
// handover), Queen Elizabeth Olympic Park (East Bank), GOV.UK (multipliers), GLA (Crossrail BRS). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/stratford/accountants-stratford-olympic-park-orbit.jpg';
import retail from '../../assets/locations/stratford/accountants-stratford-stratford-station-westfield.jpg';
import building from '../../assets/locations/stratford/accountants-stratford-new-build-towers-crane.jpg';
import eastBank from '../../assets/locations/stratford/accountants-stratford-east-bank-railway.jpg';
import homes from '../../assets/locations/stratford/accountants-stratford-east-village-street.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/stratford/',
  primaryKeyword: 'accountants in Stratford',
  secondaryKeywords: [
    'accountant Stratford London', 'accountants Newham', 'accountants E15',
    'small business accountant Stratford', 'tax accountant Stratford', 'Newham business rates',
    'Stratford Original BID levy', 'landlord accountant Stratford',
  ],
  title: 'Accountants in Stratford | Severin Finance',
  description: 'Accountants in Stratford, east London, for company accounts, VAT, payroll and property tax across Newham. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Stratford', '/uk/london/stratford/'],
  ],
  place: { type: 'Place', name: 'Stratford', wikidata: 'Q676136', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Stratford', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'London · Stratford, Olympic Park, East Village',
    h1: 'Accountants in Stratford',
    answer: 'Our accountants in Stratford handle company accounts, tax, payroll and bookkeeping for businesses billed by Newham Council, from town centre retailers to builders around the Olympic Park. Inside the Stratford Original BID area, firms with a rateable value of £12,000 or more pay a 1.5% levy on top of business rates.',
    image: hero,
    imageAlt: 'ArcelorMittal Orbit and London Stadium above the trees and waterways of Queen Elizabeth Olympic Park, Stratford',
    chip: 'London Borough of Newham',
    card: { label: 'Stratford Original BID', value: '1.5%', note: 'Levy on top of rates, for rateable values of £12,000 or more' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Newham and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Stratford facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Stratford client mix) ----------
  who: {
    eyebrow: 'Who we help in Stratford',
    h2: 'Retailers, builders, new companies and landlords in Stratford',
    intro: 'Stratford has changed fast since 2012: a major shopping centre, new homes, the Elizabeth line and the East Bank campus on the Olympic Park. Our clients here fall into four groups.',
    cards: [
      {
        img: retail, alt: 'Shoppers and commuters outside Stratford station, with signs for the DLR, Elizabeth line and Overground',
        tag: 'Retail', title: 'Shops, cafés and restaurants',
        text: 'Bookkeeping, VAT and payroll for retailers and food businesses in Stratford town centre and around Westfield, including the BID levy if you trade inside the Stratford Original area.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: building, alt: 'New apartment towers and a tower crane rising above trees in Stratford',
        tag: 'Construction', title: 'Builders and developers',
        text: 'VAT on new builds and conversions, corporation tax and company accounts for trades and developers working on the new homes around Stratford and the Park.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: eastBank, alt: 'New East Bank buildings beside the railway lines at Stratford, with towers behind',
        tag: 'New businesses', title: 'New companies and creative firms',
        text: 'Company formation, first accounts and payroll for founders and creative businesses near East Bank, now home to UCL East, London College of Fashion, Sadler’s Wells East and the V&A East Storehouse.',
        link: ['/uk/company-services/company-formation/', 'Company formation'],
      },
      {
        img: homes, alt: 'Tree-lined street between new apartment blocks and a glass office tower in east London',
        tag: 'Property', title: 'Landlords and flat owners',
        text: 'Rental accounts, Making Tax Digital for income tax and capital gains planning for owners of new-build flats in Stratford and East Village.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Stratford ----------
  services: {
    eyebrow: 'Services in Stratford',
    h2: 'What Stratford clients ask us for most',
    intro: 'We work online, so a shop in Stratford Broadway and a developer in Sugar House Island get the same fixed-fee service. Each card goes to the full service page.',
    items: [
      { title: 'Company formation', text: 'New companies set up correctly for founders starting out in Stratford, with your first deadlines in the diary.', href: '/uk/company-services/company-formation/' },
      { title: 'Landlord accounts', text: 'Rental accounts, Making Tax Digital and capital gains planning for owners of new-build flats in Stratford and East Village.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Corporation tax', text: 'Corporation tax returns and capital allowances on fit-outs, plant and equipment for Stratford companies, from shops to building firms.', href: '/uk/tax/corporation-tax-accountant/' },
      { title: 'VAT returns', text: 'VAT registration and returns for retailers and for builders dealing with new-build and conversion rates.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll for shop, café and site teams, set up for the £12.71 National Living Wage from April 2026.', href: '/uk/accounting/payroll-services/' },
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for Stratford companies of every size.', href: '/uk/accounting/limited-company-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Stratford) ----------
  facts: {
    eyebrow: 'Stratford facts',
    h2: 'Rates, the BID and planning in Stratford',
    intro: 'Newham Council sends business rates bills in Stratford and, since December 2024, decides planning applications on the Olympic Park side too. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business rates in Stratford, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Council that bills you', 'Newham Council'],
          ['Stratford Original BID levy', '1.5% on top of rates, for rateable values of £12,000 or more'],
          ['BID term', 'Third term, 2025 to 2030'],
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on RV over £92,000'],
        ],
        after: 'Newham names Stratford Original as its only BID. At the renewal ballot 90% of voters, and 95% by rateable value, voted yes. The BID area reaches out to Burford Road and Cam Road in E15.',
      },
      {
        caption: 'Planning and the Olympic Park',
        head: ['Item', 'Detail'],
        rows: [
          ['Planning authority', 'Newham Council, since 1 December 2024 (previously the LLDC)'],
          ['Planning policy', 'LLDC Local Plan 2020-2036 applies until the new Newham Local Plan replaces it'],
          ['London Legacy Development Corporation', 'Still looks after Queen Elizabeth Olympic Park'],
          ['East Bank', 'UCL East and London College of Fashion (2023), Sadler’s Wells East (2025), V&A East Storehouse (2025)'],
        ],
        after: 'If you are building or converting in the old LLDC area, your application now goes to Newham, but the LLDC plan policies still apply for now.',
      },
    ],
    urgent: {
      title: 'Building or fitting out in Stratford?',
      text: 'VAT on construction, capital allowances on fit-out costs and planning costs need to be in your numbers before you commit. We model the tax position of the project with you.',
      cta: 'Talk about project tax',
    },
  },

  // ---------- 6. How we work with Stratford clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Stratford clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your business, your plans and your deadlines. No charge and no obligation.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before we start, from a first company return to a project cash flow forecast.' },
      { title: 'We do the work', text: 'Upload records online or connect Xero or QuickBooks. We prepare, file and remind you of every date.' },
    ],
    meet: {
      title: 'Meeting us in Stratford',
      text: 'Stratford clients work with us by video, phone and secure upload, so there is no need to leave the shop, the site or the office to see us.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        'Meet us at 107-111 Fleet Street, EC4A 2AB, by appointment',
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against Newham Council, Stratford Original BID, Queen Elizabeth Olympic Park, GOV.UK and Greater London Authority sources. Rates and levies change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Stratford clients',
  faqs: [
    { q: 'Who sends the business rates bill in Stratford?', a: 'Newham Council sends business rates bills in Stratford, including the town centre, Westfield and the Newham side of the Olympic Park. If your premises are in the Stratford Original BID area, the BID levy is billed on top. So is the Crossrail supplement if your rateable value is over £92,000.' },
    { q: 'What is the Stratford Original BID levy?', a: 'It is a compulsory charge of 1.5% on top of business rates for businesses in the BID area with a rateable value of £12,000 or more. It pays for BID projects in the town centre. The BID began its third term in 2025 and runs to 2030.' },
    { q: 'Who decides planning applications in Stratford now?', a: 'Newham Council. The London Legacy Development Corporation handed its planning powers back to the boroughs on 1 December 2024. Its Local Plan 2020-2036 still applies in the old LLDC area until Newham adopts its new Local Plan.' },
    { q: 'Can you help with the tax on a development in Stratford?', a: 'Yes. We look at VAT on new builds and conversions before you start on site, and at whether the profit is taxed as trading income or as a capital gain. We also prepare the accounts and cash flow forecasts for the company running the scheme.' },
    { q: 'Is Stratford in the ULEZ or the Congestion Charge zone?', a: 'Stratford is inside the ULEZ, which covers every London borough and costs £12.50 a day for vehicles that do not meet the standards. It is outside the central Congestion Charge zone. Business journeys in a business vehicle are usually an allowable cost.' },
    { q: 'Do I need to meet my accountant in person?', a: 'No. Our Stratford clients work with us by video call, phone and secure upload, with Xero or QuickBooks access where you use them. You get one named contact who knows your business.' },
    { q: 'How much does an accountant cost in Stratford?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services in Stratford', links: [
      ['/uk/company-services/company-formation/', 'Company formation'],
      ['/resources/vat-on-property-development/', 'VAT on property development'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Near Stratford', links: [
      ['/uk/london/canary-wharf/', 'Accountants in Canary Wharf'],
      ['/uk/london/shoreditch/', 'Accountants in Shoreditch'],
      ['/uk/london/city-of-london/', 'Accountants in the City of London'],
      ['/uk/london/islington/', 'Accountants in Islington'],
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
    h2: 'Talk to our', em: 'Stratford accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Stratford and all of Newham'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://stratfordoriginal.com/renewal-ballot/', 'Stratford Original BID: Renewal ballot 2025 to 2030'],
    ['https://www.newham.gov.uk/business-licensing-regulation/business-rates-1/5', 'Newham Council: Business Improvement Districts'],
    ['https://www.newham.gov.uk/planning-development-conservation/london-legacy-development-corporation-lldc', 'Newham Council: London Legacy Development Corporation (LLDC)'],
    ['https://www.queenelizabetholympicpark.co.uk/sites/default/files/attachments/East%20Bank%20Media%20Pack%20July%202025.pdf', 'Queen Elizabeth Olympic Park: East Bank media pack, July 2025'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
  ],
};
