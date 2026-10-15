// Accountants in Croydon: all copy, local facts and SEO for one location page (a London area page).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Croydon BID (levy rules and 2026 ballot), Croydon Council
// (growth plan, small business rates relief), GOV.UK (Exceptional Financial Support, multipliers), ONS. Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/croydon/accountants-croydon-town-centre-night.jpg';
import tower from '../../assets/locations/croydon/accountants-croydon-no1-croydon-tower.jpg';
import trades from '../../assets/locations/croydon/accountants-croydon-trades-workshop.jpg';
import flats from '../../assets/locations/croydon/accountants-croydon-apartments.jpg';
import station from '../../assets/locations/croydon/accountants-croydon-east-croydon-station.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/croydon/',
  primaryKeyword: 'accountants in Croydon',
  secondaryKeywords: [
    'accountant Croydon', 'tax accountant Croydon', 'small business accountant Croydon',
    'chartered accountants Croydon', 'bookkeeping Croydon', 'Croydon BID levy',
    'business rates Croydon',
  ],
  title: 'Accountants in Croydon | Severin Finance',
  description: 'Accountants in Croydon for company accounts, VAT, payroll and tax returns, with Croydon BID and business rates advice. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Croydon', '/uk/london/croydon/'],
  ],
  place: { type: 'AdministrativeArea', name: 'London Borough of Croydon', wikidata: 'Q26888', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Croydon', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Croydon · South London',
    h1: 'Accountants in Croydon',
    answer: 'Our accountants in Croydon handle company accounts, VAT, payroll and tax returns for owner-managed firms, trades and landlords across the borough, at fixed fees. Croydon Council bills your rates. Larger town centre premises also pay the Croydon BID levy, and the vote on renewing it closes on 21 October 2026.',
    image: hero,
    imageAlt: 'Croydon town centre at dusk, with office towers, street lights and light trails from passing traffic',
    chip: 'London Borough of Croydon',
    card: { label: 'Microbusiness growth', value: '+24%', note: 'Croydon in 2024, the highest rise in London (Croydon Growth Plan 2025)' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Croydon and Purley' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Croydon facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Croydon client mix) ----------
  who: {
    eyebrow: 'Who we help in Croydon',
    h2: 'Owner-managed firms, trades, landlords and contractors',
    intro: 'Croydon is the most populous London borough, with about 16,000 businesses and the largest base of small firms in London. Our Croydon clients mostly fall into four groups.',
    cards: [
      {
        img: tower, alt: 'Black and white view looking up at the stacked floors of No. 1 Croydon tower',
        tag: 'Small companies', title: 'Owner-managed companies',
        text: 'Year-end accounts, corporation tax and the salary and dividend mix for directors. Croydon saw a 24% rise in microbusinesses in 2024, and many of those new owners now need their first set of accounts.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: trades, alt: 'Tradesperson cutting metal with sparks flying from the tool',
        tag: 'Trades and logistics', title: 'Trades, builders and Purley Way firms',
        text: 'Construction, engineering and logistics businesses around the Purley Way, where the council says industrial rents have nearly doubled in ten years. We claim capital allowances on vans, plant and fit-outs, and keep VAT and payroll on track.',
        link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      },
      {
        img: flats, alt: 'Modern apartment block with balconies near a traffic light in Croydon',
        tag: 'Property', title: 'Landlords with Croydon flats',
        text: 'Rental accounts, mortgage interest rules and Making Tax Digital for landlords letting in new town centre blocks and older family streets. The average Croydon private rent was £1,582 a month in August 2026.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: station, alt: 'Black and white street scene outside East Croydon station with a tram and overhead wires',
        tag: 'Contractors', title: 'Contractors and creative freelancers',
        text: 'IR35 reviews, expenses and tax returns for contractors who reach London Bridge in about 14 minutes from East Croydon, and for gaming, media and design freelancers in the Croydon Creative Enterprise Zone.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Croydon ----------
  services: {
    eyebrow: 'Services in Croydon',
    h2: 'What Croydon clients ask us for most',
    intro: 'All our work is done online at a fixed fee, from a shop on North End to a yard on the Purley Way. Each card opens the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings for Croydon companies, with directors’ pay planned before the year end.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'VAT returns', text: 'Registration, scheme choice and quarterly returns for Croydon traders, retailers and building firms.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI and pensions for Croydon employers, set up for the £12.71 National Living Wage from April 2026.', href: '/uk/accounting/payroll-services/' },
      { title: 'Self assessment', text: 'Tax returns for sole traders, directors and landlords in the borough, filed well before 31 January.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Landlord accounts', text: 'Rental profit, allowable costs and capital gains on sales for Croydon buy-to-let owners.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Bookkeeping', text: 'Monthly bookkeeping in Xero or QuickBooks for Purley Way and trade businesses, with vans and equipment recorded for capital allowances.', href: '/uk/accounting/bookkeeping-services/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Croydon) ----------
  facts: {
    eyebrow: 'Croydon facts',
    h2: 'Rates and levies in Croydon',
    intro: 'Croydon Council bills business rates for the whole borough. The town centre and Purley each have a Business Improvement District, and the Croydon BID is being voted on now.',
    tables: [
      {
        caption: 'Croydon BID levy, now and from April 2027',
        head: ['Item', 'Detail'],
        rows: [
          ['Current levy (1 April 2022 to 31 March 2027)', '1% of rateable value'],
          ['Who pays now', 'Premises with a rateable value of £40,000 or more'],
          ['Proposed levy (1 April 2027 to 31 March 2032)', '1.3% of rateable value on the 2026 list'],
          ['Renewal ballot', 'Voting from 21 September to 5pm on 21 October 2026'],
          ['Collection', 'By Croydon Council, one payment due each 1 April'],
        ],
        after: 'Premises under £40,000 rateable value would stay exempt. The proposal has no charity exemption and allows a yearly inflation rise in line with CPIH. If the vote is no, the BID stops by 31 March 2027. Purley has a separate BID, renewed at a ballot in December 2025.',
      },
      {
        caption: 'Business rates in Croydon, 2026-27',
        head: ['Rate or relief', 'Amount'],
        rows: [
          ['Billing authority', 'Croydon Council'],
          ['Small business rates relief', '100% up to £12,000 rateable value, tapering to nil at £15,000'],
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Crossrail Business Rate Supplement', '2p per £1, only above £92,000 rateable value'],
        ],
        after: 'The multipliers are set nationally, so the council’s own budget does not change your rate. Check the rateable value on your bill, and claim small business relief if you qualify. The council asks for applications by email.',
      },
    ],
    urgent: {
      title: 'Croydon BID vote closes on 21 October 2026',
      text: 'If your premises have a rateable value of £40,000 or more, you can vote on the 1.3% levy. We can work out what it would add to your costs from April 2027 and build it into your budget.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Croydon clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Croydon clients',
    steps: [
      { title: 'Free consultation', text: 'A short call or video meeting about your business, your figures and the deadlines coming up. No charge.' },
      { title: 'Fixed fee in writing', text: 'We agree the scope and send you the fee before we start. You will not get an hourly bill.' },
      { title: 'We do the work', text: 'You send records through secure upload or give us Xero or QuickBooks access. We prepare, check and file, and remind you of each deadline.' },
    ],
    meet: {
      title: 'Working with us from Croydon',
      text: 'Croydon clients work with us by video, phone and secure upload, so there is no trip into town and no ULEZ charge for an older van.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Croydon meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Croydon Council, Croydon BID, GOV.UK and ONS sources. BID levies, reliefs and rates change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Croydon clients',
  faqs: [
    { q: 'Who collects business rates in Croydon?', a: 'Croydon Council bills and collects business rates across the borough, from the town centre to Purley, Thornton Heath and New Addington. It also collects the Croydon BID levy. Premises below £12,000 rateable value can get 100% small business rates relief, tapering to nil at £15,000.' },
    { q: 'What is the Croydon BID levy?', a: 'Croydon BID is the business improvement district for the town centre. The current levy is 1% of rateable value on premises worth £40,000 or more, until 31 March 2027. A ballot closing on 21 October 2026 asks businesses to approve a new five-year term at 1.3%.' },
    { q: 'Does Croydon Council’s financial position affect my business?', a: 'Not your business rates, which use national multipliers. The government has agreed £119.0m of Exceptional Financial Support in principle for 2026-27. For 2026-27 the council did not raise council tax above the 4.99% cap.' },
    { q: 'I run a business on the Purley Way. Can you help?', a: 'Yes. The council’s growth plan names the Purley Way as Croydon’s main industrial and logistics area, where industrial rents have nearly doubled in ten years. We do the accounts, VAT and payroll, and claim capital allowances on vans, machinery and fit-outs.' },
    { q: 'Can I claim travel from Croydon to a contract in central London?', a: 'Ordinary commuting to a permanent workplace is not tax deductible. If you contract through your own limited company, travel to a temporary workplace can be, unless the contract falls inside IR35. We review the contract and your working pattern before you claim.' },
    { q: 'Do I need an accountant based in Croydon?', a: 'No. Tax rules are the same across England and we work online. What matters is knowing the local costs: Croydon Council rates relief, the BID levies in the town centre and Purley, and London-wide charges such as the £12.50 daily ULEZ charge.' },
    { q: 'How much does an accountant cost in Croydon?', a: 'Fixed fees start at £XXX a month for a Croydon limited company and £XXX for a self assessment tax return. The fee depends on your turnover, payroll and records. You get the figure in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Near Croydon', links: [
      ['/uk/london/wimbledon/', 'Accountants in Wimbledon'],
      ['/uk/london/richmond/', 'Accountants in Richmond'],
      ['/uk/london/city-of-london/', 'Accountants in the City of London'],
      ['/uk/brighton/', 'Accountants in Brighton'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Tax and planning', links: [
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/resources/capital-allowances-explained/', 'Capital allowances explained'],
      ['/resources/pay-hmrc-in-instalments/', 'Paying HMRC in instalments'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Croydon accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Croydon, Purley and the whole borough'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://croydonbid.com/business/about-us/levy-regulations/', 'Croydon BID: levy rules 2022 to 2027'],
    ['https://croydonbid.com/ballot-2026/', 'Croydon BID: 2026 renewal ballot and proposed 1.3% levy'],
    ['https://www.croydon.gov.uk/sites/default/files/2025-05/croydon-growth-plan-2025-final.pdf', 'Croydon Council: Croydon Growth Plan 2025'],
    ['https://www.croydon.gov.uk/business-licences-and-tenders/business-rates/business-rate-reductions/small-business-rates-reduction', 'Croydon Council: small business rates relief'],
    ['https://www.gov.uk/guidance/exceptional-financial-support-for-local-authorities-for-2026-27', 'GOV.UK: Exceptional Financial Support for councils, 2026-27'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.ons.gov.uk/visualisations/housingpriceslocal/E09000008/', 'ONS: Housing prices and rents in Croydon'],
  ],
};
