// Accountants in Belfast: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Belfast is in Northern Ireland: rates are the regional rate plus the district rate, billed by
// Land & Property Services, so the England multipliers do not apply. SDLT and income tax match England.
// Facts checked on 13 October 2026: Department of Finance (2026-27 rate poundages, rate support
// schemes), Belfast City Council (district rate, city centre BIDs, Belfast Region City Deal),
// nibusinessinfo.co.uk (Small Business Rate Relief bands), GOV.UK (SDLT). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/belfast/accountants-belfast-hero.jpg';
import lane from '../../assets/locations/belfast/accountants-belfast-commercial-court.jpg';
import shops from '../../assets/locations/belfast/accountants-belfast-shopping-street.jpg';
import lagan from '../../assets/locations/belfast/accountants-belfast-river-lagan-flats.jpg';
import queens from '../../assets/locations/belfast/accountants-belfast-queens-university.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/belfast/',
  primaryKeyword: 'accountants in Belfast',
  secondaryKeywords: [
    'accountant Belfast', 'Belfast accountants for small business', 'tax accountant Belfast',
    'chartered accountants Belfast', 'business rates Belfast 2026-27', 'small business rate relief Northern Ireland',
    'accountants Northern Ireland', 'bookkeeping Belfast',
  ],
  title: 'Accountants in Belfast | Severin Finance',
  description: 'Accountants in Belfast for company accounts, tax returns, VAT, payroll and Northern Ireland rates checks. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Belfast', '/uk/belfast/'],
  ],
  place: { type: 'City', name: 'Belfast', wikidata: 'Q10686', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Belfast', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Belfast · Northern Ireland',
    h1: 'Accountants in Belfast',
    answer: 'Our accountants in Belfast handle company accounts, tax returns, VAT, payroll and bookkeeping for fixed fees. We work to the Northern Ireland rating system: in 2026-27, Belfast business premises pay 65.03p for every £1 of net annual value, the regional rate plus Belfast City Council’s district rate, billed by Land & Property Services.',
    image: hero,
    imageAlt: 'Belfast City Hall with its green copper domes, seen across the lawn of Donegall Square',
    chip: 'Northern Ireland',
    card: { label: 'Belfast business rates', value: '65.03p', note: 'Per £1 of net annual value in 2026-27, regional plus district rate' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Northern Ireland' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Belfast facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Belfast client mix) ----------
  who: {
    eyebrow: 'Who we help in Belfast',
    h2: 'Belfast venues, small firms, landlords and founders',
    intro: 'Belfast has a busy city centre, thousands of small firms on reduced rates and two universities feeding new companies. These are the four groups we help most here.',
    cards: [
      {
        img: lane, alt: 'Neon signs and coloured umbrellas strung above a pub lane in Belfast city centre',
        tag: 'Hospitality and retail', title: 'Pubs, restaurants and city centre shops',
        text: 'Payroll, VAT and rates checks for venues and shops in the Belfast One, Linen Quarter and Destination CQ BID areas, where the levy is set by your net annual value.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: shops, alt: 'Shoppers walking past red-brick shopfronts and a steel sculpture in Belfast city centre',
        tag: 'Small business', title: 'Sole traders and small firms',
        text: 'Bookkeeping, tax returns and rates checks for small firms, where premises with a net annual value of £15,000 or less get 20% to 50% off automatically.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      },
      {
        img: lagan, alt: 'The River Lagan seen from the waterfront in Belfast city centre, with apartment blocks along the bank',
        tag: 'Property', title: 'Landlords and property buyers',
        text: 'Rental accounts, Section 24 planning and Stamp Duty Land Tax, which applies in Northern Ireland on the same bands as in England.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: queens, alt: 'The Lanyon Building at Queen’s University Belfast, framed by trees',
        tag: 'Start-ups', title: 'Founders and university spin-outs',
        text: 'Company formation, SEIS and EIS for founders linked to Queen’s University Belfast and Ulster University, both partners in the Belfast Region City Deal.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
    ],
  },

  // ---------- 3. Services most searched in Belfast ----------
  services: {
    eyebrow: 'Services in Belfast',
    h2: 'What Belfast clients ask us for most',
    intro: 'We run every service online at a fixed fee, wherever you are in Belfast or across Northern Ireland. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings. Corporation tax is UK-wide, so Belfast companies pay the same rates as English ones.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Returns for directors, sole traders and landlords in Belfast, at the same income tax rates and bands as England.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, schemes and Making Tax Digital returns, including the separate rules for goods that apply in Northern Ireland.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions at the UK-wide National Living Wage of £12.71 an hour from April 2026.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlord accounts', text: 'Rental accounts, Section 24 planning and SDLT checks for property in Belfast and across Northern Ireland.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and investor paperwork for Belfast start-ups and university spin-outs.', href: '/uk/company-services/eis-seis/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Northern Ireland) ----------
  facts: {
    eyebrow: 'Belfast facts',
    h2: 'Rates and taxes that apply in Belfast',
    intro: 'Northern Ireland has its own rating system: two rates added together, charged on net annual value and billed by Land & Property Services. The figures for 2026-27 are below.',
    tables: [
      {
        caption: 'Business rates in Belfast, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Regional rate (set by the NI Executive)', '30.79p per £1 of net annual value'],
          ['Belfast district rate (set by Belfast City Council)', '34.24p per £1, up 4.48% on 2025-26'],
          ['Total non-domestic poundage', '65.03p per £1 of net annual value'],
          ['Small Business Rate Relief', '50% at £2,000 NAV or less, 25% up to £5,000, 20% up to £15,000'],
          ['Back in Business', '50% off for up to two years on retail premises empty for 12 months or more'],
        ],
        after: 'Land & Property Services sends and collects the bill. Small Business Rate Relief is automatic, with no form to fill in. Premises in the Belfast One, Linen Quarter and Destination CQ areas also pay a BID levy based on their net annual value.',
      },
      {
        caption: 'Tax on income and property in Belfast, 2026-27',
        head: ['Tax', 'Detail'],
        rows: [
          ['Income tax', 'Same rates and bands as England: 20%, 40% and 45%, with a £12,570 personal allowance'],
          ['Stamp Duty Land Tax', 'Applies in Northern Ireland, on the same bands as England'],
          ['SDLT on commercial property', '0% up to £150,000, 2% to £250,000, 5% above'],
          ['Domestic rates in Belfast (homes)', '0.010051 per £1 of capital value, about £1,005 a year on a £100,000 valuation'],
        ],
        after: 'Homes in Northern Ireland pay domestic rates, not council tax. Corporation tax, VAT and National Insurance are UK-wide, so they are the same in Belfast as in England.',
      },
    ],
    urgent: {
      title: 'Small business relief is renewed one year at a time',
      text: 'Small Business Rate Relief has been extended for the 2026-27 rating year. It started in 2010 and is now renewed one year at a time after review. If your premises have a net annual value of £15,000 or less, we plan your cash flow for the relief changing or ending from April 2027.',
      cta: 'Get a cash flow review',
    },
  },

  // ---------- 6. How we work with Belfast clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Belfast clients',
    steps: [
      { title: 'Free consultation', text: 'We talk through your business, your records and your next deadlines on a free call.' },
      { title: 'Fixed fee in writing', text: 'You get a written scope and a fixed price before we start, with no hourly billing.' },
      { title: 'We do the work', text: 'Upload records securely or give us access to Xero or QuickBooks. We prepare and file with HMRC and Companies House, and remind you before every deadline.' },
    ],
    meet: {
      title: 'Meeting us in Belfast',
      text: 'We work by video, phone and secure upload, so clients in Belfast and across Northern Ireland get the same service without travelling.',
      items: [
        'Video meetings on Teams, Zoom or Google Meet',
        'Secure upload and cloud bookkeeping access',
        'One named contact for your account',
        { text: 'Belfast meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Department of Finance, Belfast City Council, nibusinessinfo.co.uk and GOV.UK sources. Rate poundages and reliefs change each year, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Belfast clients',
  faqs: [
    { q: 'How are business rates worked out in Belfast?', a: 'Your property’s net annual value is multiplied by the rate poundage. For 2026-27 the Belfast non-domestic poundage is 65.0288p: the regional rate of 30.79p set by the NI Executive plus Belfast City Council’s district rate of 34.2388p. Reliefs then come off the bill.' },
    { q: 'Do small businesses get rate relief in Belfast?', a: 'Yes. Small Business Rate Relief gives 50% off where the net annual value is £2,000 or less, 25% up to £5,000 and 20% up to £15,000. It covers the 2026-27 rating year and is applied automatically, so there is nothing to apply for.' },
    { q: 'Who sends business rates bills in Belfast?', a: 'Land & Property Services sends and collects rates bills across Northern Ireland. Belfast City Council does not bill you itself, but it sets the district rate, which rose 4.48% for 2026-27. The NI Executive sets the regional rate.' },
    { q: 'Is income tax different in Northern Ireland?', a: 'No. Northern Ireland uses the same income tax rates and bands as England: 20% basic, 40% higher and 45% additional for 2026-27, with a £12,570 personal allowance. National Insurance, VAT and corporation tax are also UK-wide.' },
    { q: 'Do you pay Stamp Duty when you buy property in Belfast?', a: 'Yes. Stamp Duty Land Tax applies in Northern Ireland, as in England, and you pay it to HMRC. Scotland and Wales have their own property taxes, but Belfast buyers use the SDLT bands. Commercial property pays 0% up to £150,000, 2% to £250,000 and 5% above.' },
    { q: 'Is there council tax in Belfast?', a: 'No. Homes in Northern Ireland pay domestic rates, based on the property’s capital value. In Belfast the 2026-27 domestic poundage is 0.010051 per £1, so a home valued at £100,000 pays about £1,005 a year before any relief. Land & Property Services sends these bills too.' },
    { q: 'What is the Belfast Region City Deal?', a: 'It is a £1 billion programme signed in December 2021 by six councils, Queen’s University Belfast, Ulster University and four further education colleges. It aims to create up to 20,000 jobs over 10 years. Studio Ulster and the Digital Twin are open, and more projects are being built.' },
    { q: 'How much does an accountant cost in Belfast?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. The fee depends on your turnover and records, and we confirm it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Belfast clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/glasgow/', 'Accountants in Glasgow'],
      ['/uk/edinburgh/', 'Accountants in Edinburgh'],
      ['/uk/liverpool/', 'Accountants in Liverpool'],
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/newcastle/', 'Accountants in Newcastle'],
      ['/uk/', 'Accountants across the UK'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Property and clients abroad', links: [
      ['/resources/stamp-duty-commercial-property/', 'Stamp Duty on commercial property'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Belfast accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Belfast and Northern Ireland'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.finance-ni.gov.uk/articles/rate-poundages', 'Department of Finance: rate poundages 2026 to 2027'],
    ['https://www.belfastcity.gov.uk/News/Belfast-councillors-strike-district-rate-for-2026', 'Belfast City Council: district rate for 2026'],
    ['https://www.nibusinessinfo.co.uk/content/small-business-rate-relief', 'nibusinessinfo.co.uk: Small Business Rate Relief'],
    ['https://www.finance-ni.gov.uk/news/finance-minister-backs-local-businesses-extending-rate-support-schemes', 'Department of Finance: rate support schemes extended for 2026-27'],
    ['https://minutes.belfastcity.gov.uk/mgAi.aspx?ID=86676', 'Belfast City Council: city centre Business Improvement Districts'],
    ['https://www.belfastcity.gov.uk/InvestInBelfast/Gamechangers/Belfast-Region-City-Deal', 'Belfast City Council: Belfast Region City Deal'],
    ['https://www.gov.uk/stamp-duty-land-tax/nonresidential-and-mixed-rates', 'GOV.UK: Stamp Duty Land Tax on non-residential property'],
  ],
};
