// Accountants in Westminster: all copy, local facts and SEO for one location page (City of Westminster, the West End).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Westminster City Council (BIDs), GLA (Oxford Street Development Corporation,
// Crossrail BRS), GOV.UK (rates multipliers, pubs and live music venues relief), TfL (Congestion Charge). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/westminster/accountants-westminster-houses-of-parliament.jpg';
import regent from '../../assets/locations/westminster/accountants-westminster-regent-street-lights.jpg';
import covent from '../../assets/locations/westminster/accountants-westminster-covent-garden-market.jpg';
import soho from '../../assets/locations/westminster/accountants-westminster-soho-night.jpg';
import square from '../../assets/locations/westminster/accountants-westminster-mansion-block-square.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/westminster/',
  primaryKeyword: 'accountants in Westminster',
  secondaryKeywords: [
    'accountant Westminster', 'accountants West End', 'accountants Mayfair', 'accountants Soho',
    'restaurant accountant West End', 'Westminster business rates', 'Westminster BID levy',
    'Oxford Street Development Corporation',
  ],
  title: 'Accountants in Westminster | Severin Finance',
  description: 'Accountants in Westminster for VAT, payroll and accounts for West End shops, restaurants, theatres and agencies. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Westminster', '/uk/london/westminster/'],
  ],
  place: { type: 'AdministrativeArea', name: 'City of Westminster', wikidata: 'Q179351', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Westminster', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'VAT or bookkeeping',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Westminster · The West End, Mayfair, Soho and Covent Garden',
    h1: 'Accountants in Westminster',
    answer: 'Our accountants in Westminster handle VAT, payroll, bookkeeping and company accounts for West End shops, restaurants, theatres and agencies. Westminster has 20 Business Improvement Districts, so many firms here pay a BID levy on top of business rates and, for larger premises, the Crossrail supplement. We build all of it into your figures.',
    image: hero,
    imageAlt: 'The Palace of Westminster, Big Ben and Westminster Bridge seen from the River Thames',
    chip: 'City of Westminster',
    card: { label: 'Business Improvement Districts', value: '20', note: 'Across Westminster, as of June 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Retail, hospitality and creative firms' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Westminster facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the West End client mix) ----------
  who: {
    eyebrow: 'Who we help in Westminster',
    h2: 'West End traders, venues, agencies and private clients',
    intro: 'Westminster holds the West End’s shopping streets, theatres and restaurants, Soho’s agencies and the homes and offices of Mayfair and St James’s. Our clients here fall into four groups.',
    cards: [
      {
        img: regent, alt: 'Christmas angel lights over Regent Street at night',
        tag: 'Retail', title: 'Shops on and around Oxford Street',
        text: 'VAT, stock accounting and rates planning for West End retailers. The 40% retail relief has gone, Oxford Street now has its own development corporation, and the main shopping streets sit inside a BID.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: covent, alt: 'Market stalls under bunting in Covent Garden',
        tag: 'Hospitality', title: 'Restaurants, pubs and theatres',
        text: 'Payroll for large part-time teams, VAT on food and tickets, and rates checks for Covent Garden, Soho and theatreland venues. Pubs and live music venues get 15% off their 2026-27 rates.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: soho, alt: 'Neon Soho sign above a street in the West End at night',
        tag: 'Creative', title: 'Soho agencies and studios',
        text: 'Company accounts, corporation tax and project cash flow for media, post-production, design and advertising businesses that work on retainers and big one-off jobs.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: square, alt: 'Red-brick mansion block behind a plane tree on a West End square',
        tag: 'Private clients', title: 'Families and property owners',
        text: 'Inheritance tax, capital gains and succession planning for families who own homes, offices or businesses in Mayfair, Marylebone and St James’s, including owners who live abroad.',
        link: ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      },
    ],
  },

  // ---------- 3. Services most searched in Westminster ----------
  services: {
    eyebrow: 'Services in Westminster',
    h2: 'What Westminster clients ask us for most',
    intro: 'All of this works online, so a restaurant in Soho and an agency in Fitzrovia get the same service and fixed fee. Each card goes to the full service page.',
    items: [
      { title: 'VAT returns', text: 'Registration, scheme choice and quarterly returns for West End shops, restaurants and ticketed venues.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Weekly or monthly payroll, RTI filings and pensions for hospitality teams with changing hours and seasonal staff.', href: '/uk/accounting/payroll-services/' },
      { title: 'Bookkeeping', text: 'Daily takings, card settlements and supplier bills reconciled in Xero or QuickBooks for busy West End businesses.', href: '/uk/accounting/bookkeeping-services/' },
      { title: 'Limited company accounts', text: 'Year-end accounts and corporation tax for Soho agencies, Mayfair firms and owner-run restaurants.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Inheritance tax planning', text: 'Planning for families with property and business assets in Westminster, before values and rules change again.', href: '/uk/tax/inheritance-tax-planning/' },
      { title: 'Capital gains tax', text: 'Capital gains tax on the sale of West End flats, freeholds and long leaseholds, with any 60-day return filed on time.', href: '/uk/tax/capital-gains-tax-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Westminster) ----------
  facts: {
    eyebrow: 'Westminster facts',
    h2: 'What changed for West End businesses in 2026',
    intro: 'Westminster City Council collects the rates, but the bill a West End business pays can include a BID levy and the Crossrail supplement too. Retail and hospitality rules also changed in April 2026.',
    tables: [
      {
        caption: 'Retail, hospitality and leisure rates, 2026-27',
        head: ['Rate', 'Amount'],
        rows: [
          ['Small RHL multiplier (RV under £51,000)', '38.2p per £1 of rateable value'],
          ['Standard RHL multiplier (RV £51,000 to £499,999)', '43.0p per £1'],
          ['High value multiplier (RV £500,000 or more, all uses)', '50.8p per £1, with no lower retail rate'],
          ['Pubs and live music venues', '15% off the 2026-27 bill, applied automatically'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on rateable values over £92,000'],
        ],
        after: 'The 40% retail, hospitality and leisure relief ended on 31 March 2026. The lower RHL multipliers replace it, but only below £500,000 rateable value. Large flagship stores with a rateable value of £500,000 or more pay the full high value rate.',
      },
      {
        caption: 'Westminster at a glance',
        head: ['Item', 'Detail'],
        rows: [
          ['Business Improvement Districts', '20 across Westminster (June 2026)'],
          ['Oxford Street Development Corporation', 'Set up by the Mayor on 1 January 2026 to lead the street’s regeneration'],
          ['Congestion Charge', '£18 a day from 2 January 2026; covers Mayfair, Soho, Covent Garden and St James’s'],
          ['ULEZ', '£12.50 a day for vehicles that do not meet the standards'],
        ],
        after: 'Each BID sets its own levy, based on rateable value, and it appears as a separate charge. Planning decisions on Oxford Street are moving from the councils to the development corporation, so check who decides before you plan a shopfront change.',
      },
    ],
    urgent: {
      title: 'Lost your 40% retail relief?',
      text: 'Many West End shops, cafés and bars saw their rates bill rise in April 2026 as the old relief ended. We check your bill, your rateable value and any BID levy, and rebuild your cash flow forecast.',
      cta: 'Get a rates and cash flow review',
    },
  },

  // ---------- 6. How we work with Westminster clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Westminster clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your business, your premises and your numbers, outside service hours if you run a venue.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before we start: bookkeeping, VAT and payroll priced together, not by the hour.' },
      { title: 'We do the work', text: 'Connect your till, card provider and bank feeds to Xero or QuickBooks. We reconcile, file and remind you of every deadline.' },
    ],
    meet: {
      title: 'Meeting us in Westminster',
      text: 'Most Westminster clients work with us by video, phone and secure upload, which fits around opening hours and show times.',
      items: [
        'Video calls before service or after close',
        'Till, card and bank feeds into Xero or QuickBooks',
        'One named contact for your account',
        'Meet us at 107-111 Fleet Street, EC4A 2AB, by appointment',
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against Westminster City Council, Greater London Authority, GOV.UK and TfL sources. Rates, reliefs and BID rules change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Westminster clients',
  faqs: [
    { q: 'Who sends the business rates bill in Westminster?', a: 'Westminster City Council. If your rateable value is over £92,000, the Crossrail supplement of 2p per £1 is added to the same bill. If you are inside a Business Improvement District, you will also be billed a BID levy.' },
    { q: 'What is a BID levy in Westminster?', a: 'It is an extra charge paid by businesses inside a Business Improvement District, worked out from rateable value. Westminster has 20 BIDs, each voted in by local businesses and spending the money on its own streets. The rate and threshold differ by BID, so check your bill.' },
    { q: 'Is retail relief still available for West End shops?', a: 'Not the old 40% relief. It ended on 31 March 2026. Retail, hospitality and leisure properties below £500,000 rateable value now pay lower multipliers of 38.2p or 43.0p. Properties at £500,000 or more pay the 50.8p high value rate.' },
    { q: 'Do West End pubs get rates relief in 2026-27?', a: 'Yes. Pubs and live music venues get 15% off their business rates bill for 2026-27, and the council applies it automatically. Restaurants, cafés and shops do not qualify for this relief, but may benefit from the lower retail multipliers.' },
    { q: 'What is the Oxford Street Development Corporation?', a: 'It is a Mayoral Development Corporation set up on 1 January 2026 to drive the regeneration of Oxford Street. It is taking on planning functions for the area from the councils. Businesses on and near the street should check who handles their applications.' },
    { q: 'Can my business claim the Congestion Charge in the West End?', a: 'Usually yes, when you pay it for a business journey in a business vehicle. The zone covers Mayfair, Soho, Covent Garden and St James’s, and costs £18 a day from 2 January 2026. Penalty notices and commuting costs are not allowable.' },
    { q: 'How much does an accountant cost in Westminster?', a: 'Our fixed fees start at £XXX a month for bookkeeping and VAT and £XXX a month for a limited company. The exact fee depends on your turnover, staff and transactions, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
    ] },
    { title: 'Nearby areas', links: [
      ['/uk/london/kensington/', 'Accountants in Kensington'],
      ['/uk/london/camden/', 'Accountants in Camden'],
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
    h2: 'Talk to our', em: 'Westminster accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'West End rates and BIDs planned in'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://westminster.gov.uk/business-improvement-districts', 'Westminster City Council: Business Improvement Districts'],
    ['https://www.london.gov.uk/md3453-decisions-relating-oxford-street-development-corporation', 'Greater London Authority: Oxford Street Development Corporation'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/pubs-and-live-music-venues-relief', 'GOV.UK: Pubs and live music venues relief'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
    ['https://tfl.gov.uk/modes/driving/congestion-charge', 'TfL: Congestion Charge'],
  ],
};
