// Accountants in Brighton: all copy, local facts and SEO for one location page (UK city).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Brighton & Hove City Council (Brilliant Brighton BID ballot and
// cabinet report), HMRC (furnished holiday lettings abolition), GOV.UK (rates multipliers, minimum wage),
// Living Wage Foundation. Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/brighton/accountants-brighton-palace-pier.jpg';
import hotel from '../../assets/locations/brighton/accountants-brighton-seafront-hotel.jpg';
import shops from '../../assets/locations/brighton/accountants-brighton-independent-shops.jpg';
import homes from '../../assets/locations/brighton/accountants-brighton-terraced-townhouses.jpg';
import station from '../../assets/locations/brighton/accountants-brighton-station.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/brighton/',
  primaryKeyword: 'accountants in brighton',
  secondaryKeywords: [
    'accountant Brighton', 'accountants Brighton and Hove', 'tax accountant Brighton',
    'small business accountant Brighton', 'bookkeeping Brighton', 'holiday let accountant Brighton',
    'Brighton BID levy',
  ],
  title: 'Accountants in Brighton | Severin Finance',
  description: 'Accountants in Brighton for VAT, payroll, holiday let tax and company accounts across Brighton and Hove. Fixed fees. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Brighton', '/uk/brighton/'],
  ],
  place: { type: 'City', name: 'Brighton', wikidata: 'Q131491', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Brighton', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'VAT or bookkeeping',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Brighton · Brighton and Hove',
    h1: 'Accountants in Brighton',
    answer: 'Our accountants in Brighton handle tax returns, company accounts, VAT, payroll and holiday let tax for fixed fees across Brighton and Hove. Central businesses in the Brilliant Brighton BID area pay a 2% levy on rateable value from July 2026, and hospitality lost its 40% rates relief in April. We plan for both.',
    image: hero,
    imageAlt: 'Brighton Palace Pier seen from the shingle beach under a clear blue sky',
    chip: 'Brighton & Hove City Council',
    card: { label: 'Brighton BID levy', value: '2%', note: 'Of rateable value from 1 July 2026, up from 1.5%' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in Brighton, Hove and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Brighton facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Brighton client mix) ----------
  who: {
    eyebrow: 'Who we help in Brighton',
    h2: 'Brighton venues, independents, landlords and commuters',
    intro: 'Brighton runs on visitors, small independents and people who split the week with London. Our Brighton and Hove clients mostly fall into four groups.',
    cards: [
      {
        img: hotel, alt: 'Cream-painted seafront hotel on a sunny day in Brighton',
        tag: 'Hospitality', title: 'Hotels, cafés and bars',
        text: 'VAT, payroll and rates planning for seafront and city centre venues. The 40% retail, hospitality and leisure relief ended on 31 March 2026, so many bills went up this year.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: shops, alt: 'Quiet Brighton street of independent shops and cafés',
        tag: 'Independents', title: 'Independent shops and creative studios',
        text: 'Bookkeeping and VAT for traders in the North Laine and The Lanes, plus designers and digital freelancers. Inside the Brilliant Brighton BID area the levy rises to 2% from July 2026.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: homes, alt: 'Narrow Brighton street of terraced townhouses with bay windows',
        tag: 'Property', title: 'Landlords and holiday lets',
        text: 'The furnished holiday lettings rules were abolished from April 2025. We rework the numbers for short lets and flats, from finance costs to capital gains on a sale.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: station, alt: 'Glass and iron roof of Brighton station with a departure board for London Victoria',
        tag: 'Commuters', title: 'London commuters and contractors',
        text: 'Tax returns for people who live in Brighton and Hove and work in London, and accounts for contractor companies that need to check the off-payroll (IR35) rules.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Brighton ----------
  services: {
    eyebrow: 'Services in Brighton',
    h2: 'What Brighton clients ask us for most',
    intro: 'All our services run online, so a Hove flat or a North Laine shop pays the same fixed fee. Each card opens the full service page.',
    items: [
      { title: 'VAT returns', text: 'VAT registration, scheme choice and quarterly returns for Brighton hotels, cafés, bars and shops.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll for seasonal and part-time staff, set up for the £12.71 National Living Wage from April 2026.', href: '/uk/accounting/payroll-services/' },
      { title: 'Self assessment', text: 'Tax returns for freelancers, landlords and London commuters living in Brighton and Hove.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Landlords and holiday lets', text: 'Rental accounts for long lets and former holiday lets now taxed under the normal property rules.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Bookkeeping', text: 'Monthly bookkeeping in Xero or QuickBooks for independent traders in the North Laine and The Lanes.', href: '/uk/accounting/bookkeeping-services/' },
      { title: 'Limited company accounts', text: 'Annual accounts and corporation tax for Brighton design studios, agencies and digital businesses.', href: '/uk/accounting/limited-company-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Brighton) ----------
  facts: {
    eyebrow: 'Brighton facts',
    h2: 'What changed for Brighton businesses in 2026',
    intro: 'Rates and tax rules are set nationally. Brighton adds a business improvement district levy in the centre, and its many holiday lets felt the end of the old rules. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business rates in Brighton and Hove, 2026-27',
        head: ['Rate', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 of rateable value'],
          ['Small retail, hospitality and leisure', '38.2p per £1'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Brilliant Brighton BID levy, 1 July 2026 to 30 June 2031', '2% of rateable value, up from 1.5%'],
        ],
        after: 'Brighton & Hove City Council sends the rates bill. The BID levy uses rateable values at 31 March 2025, and the new term adds upper-floor commercial premises. Small businesses below the threshold do not pay it.',
      },
      {
        caption: 'Lettings and wages in Brighton, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Furnished holiday lettings rules', 'Abolished from 6 April 2025 (1 April 2025 for companies)'],
          ['National Living Wage (21 and over), legal minimum', '£12.71 an hour from 1 April 2026'],
          ['Real Living Wage (voluntary)', '£13.45 an hour'],
        ],
        after: 'Holiday let profits are now taxed like other residential lettings. Mortgage interest gets basic rate relief only. The first personal return affected is for 2025-26, due by 31 January 2027.',
      },
    ],
    urgent: {
      title: 'Your first holiday let return under the new rules',
      text: 'If you let a Brighton flat or house to visitors, 2025-26 is the first tax year without the furnished holiday lettings rules. We check what changed for you before the 31 January 2027 deadline.',
      cta: 'Check my holiday let tax',
    },
  },

  // ---------- 6. How we work with Brighton clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Brighton clients',
    steps: [
      { title: 'Free consultation', text: 'A short call or video meeting about your business, your lets or your tax return. We tell you what we would do and what it would cost.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the fee in writing before we start. Busy summer months do not change the price.' },
      { title: 'We do the work', text: 'You send records online or give us access to Xero or QuickBooks. We prepare and file everything, and remind you of each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Brighton',
      text: 'Most Brighton and Hove clients work with us online. Video calls fit around a shift at the café or a day in the London office.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Brighton meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Brighton & Hove City Council, HMRC and GOV.UK sources. BID levies, rates and wages change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Brighton clients',
  faqs: [
    { q: 'Who sends the business rates bill in Brighton?', a: 'Brighton & Hove City Council bills business premises across the city, including Hove. From 1 April 2026 the small business multiplier is 43.2p and small retail, hospitality and leisure premises pay 38.2p per £1 of rateable value. Check that your 2026-27 bill uses the right one.' },
    { q: 'What is the Brilliant Brighton BID levy?', a: 'It is an extra charge for businesses in the central Brighton BID area. Businesses voted on 11 December 2025 to renew the BID for five years from 1 July 2026. The levy rises from 1.5% to 2% of rateable value and now covers upper-floor commercial premises. Small businesses below the threshold do not pay.' },
    { q: 'My Brighton café lost its 40% rates relief. What now?', a: 'The 40% retail, hospitality and leisure relief ended on 31 March 2026. Instead, retail and hospitality premises pay lower multipliers: 38.2p below £51,000 rateable value and 43.0p up to £499,999. We check your bill, look at small business rate relief and update your cash flow forecast.' },
    { q: 'How is my Brighton holiday let taxed now?', a: 'The furnished holiday lettings rules were abolished from 6 April 2025. Holiday let profits are now taxed like other residential lettings. Mortgage interest gets a basic rate tax credit only, and a sale no longer qualifies for business reliefs such as Business Asset Disposal Relief. Your 2025-26 return is the first one affected.' },
    { q: 'I live in Brighton and work in London. Can I claim my train fare?', a: 'Usually not. Travel between home and your normal workplace is ordinary commuting, which employees and directors cannot claim. Contractors with their own company can sometimes claim travel to a temporary workplace, so we check your contracts first. Living in Brighton does not change your tax rates.' },
    { q: 'Do I need an accountant based in Brighton?', a: 'No. Tax rules are the same across England and we do most work online. What helps is an accountant who knows the local costs, such as the BID levy, the end of the 40% retail relief and the new holiday let rules. We meet by video and you upload records securely.' },
    { q: 'I moved abroad but still rent out my Brighton flat. Can you help?', a: 'Yes. You still pay UK tax on the rent and file a UK return. Your letting agent or tenant must deduct basic rate tax under the Non-Resident Landlord Scheme unless HMRC approves you to receive the rent in full. We file your return and make the application.' },
    { q: 'How much does an accountant cost in Brighton?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
    ] },
    { title: 'Nearby locations', links: [
      ['/uk/london/croydon/', 'Accountants in Croydon'],
      ['/uk/london/wimbledon/', 'Accountants in Wimbledon'],
      ['/uk/london/richmond/', 'Accountants in Richmond'],
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
    h2: 'Talk to our', em: 'Brighton accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Brighton, Hove and nearby'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.brighton-hove.gov.uk/council-and-democracy/voting-and-elections/brighton-bid-ballot', 'Brighton & Hove City Council: Brighton BID ballot'],
    ['https://democracy.brighton-hove.gov.uk/documents/s210039/Brilliant%20Brighton%20Business%20Improvement%20District%20BID%20-%20New%20Ballot.pdf', 'Brighton & Hove City Council: Brilliant Brighton BID new ballot report'],
    ['https://www.gov.uk/hmrc-internal-manuals/property-income-manual/pim4105', 'HMRC Property Income Manual: abolition of furnished holiday lettings'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
    ['https://www.livingwage.org.uk/what-real-living-wage', 'Living Wage Foundation: Real Living Wage'],
  ],
};
