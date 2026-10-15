// Accountants in Cardiff: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Cardiff is in Wales, so the England rates multipliers and Stamp Duty do not apply here.
// Facts checked on 13 October 2026: Welsh Government (2026-27 multipliers, transitional relief,
// Land Transaction Tax), Blaenau Gwent council (Welsh small business and hospitality reliefs),
// GOV.UK (Welsh rates of income tax, Cardiff Capital Region City Deal and Investment Zone),
// Cardiff Council newsroom (visitor levy). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/cardiff/accountants-cardiff-hero.jpg';
import bay from '../../assets/locations/cardiff/accountants-cardiff-bay-marina.jpg';
import dining from '../../assets/locations/cardiff/accountants-cardiff-restaurant-street.jpg';
import rooftops from '../../assets/locations/cardiff/accountants-cardiff-rooftops.jpg';
import wmc from '../../assets/locations/cardiff/accountants-cardiff-millennium-centre.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/cardiff/',
  primaryKeyword: 'accountants in Cardiff',
  secondaryKeywords: [
    'accountant Cardiff', 'Cardiff accountants for small business', 'tax accountant Cardiff',
    'chartered accountants Cardiff', 'business rates Wales 2026-27', 'Land Transaction Tax accountant',
    'Cardiff visitor levy', 'accountants south Wales',
  ],
  title: 'Accountants in Cardiff | Severin Finance',
  description: 'Accountants in Cardiff for company accounts, tax returns, VAT and payroll, with Welsh business rates and Land Transaction Tax. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Cardiff', '/uk/cardiff/'],
  ],
  place: { type: 'City', name: 'Cardiff', wikidata: 'Q10690', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Cardiff', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Cardiff · Wales',
    h1: 'Accountants in Cardiff',
    answer: 'Our accountants in Cardiff handle company accounts, tax returns, VAT, payroll and bookkeeping for fixed fees, under Welsh rules. Business rates here use the Welsh standard multiplier of 50.2p in the pound for 2026-27, property buyers pay Land Transaction Tax instead of Stamp Duty, and a visitor levy starts on 1 April 2027.',
    image: hero,
    imageAlt: 'Principality Stadium in Cardiff reflected in the River Taff on a sunny day',
    chip: 'Wales',
    card: { label: 'Welsh standard multiplier', value: '50.2p', note: 'Per £1 of rateable value in 2026-27, the first cut in Wales since 2010' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across south-east Wales' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Cardiff facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Cardiff client mix) ----------
  who: {
    eyebrow: 'Who we help in Cardiff',
    h2: 'Cardiff hosts, venues, landlords and founders',
    intro: 'Cardiff is a capital city with a busy visitor trade, a large rental market and a growing tech base. These are the four groups we help most here.',
    cards: [
      {
        img: bay, alt: 'Pierhead Building and a big wheel behind boats moored in Cardiff Bay',
        tag: 'Visitor accommodation', title: 'Hotels, guest houses and holiday lets',
        text: 'Visitor levy records and VAT for accommodation providers, who must register with the Welsh Revenue Authority by 31 March 2027 and charge most guests £1.30 a night from April.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: dining, alt: 'Outdoor restaurant seating along a pedestrianised street of Victorian buildings in Cardiff city centre',
        tag: 'Hospitality', title: 'Restaurants, pubs and cafés',
        text: 'Payroll, VAT and rates checks for venues, including the 15% Welsh food and drink hospitality relief, capped at £110,000 per business across Wales.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: rooftops, alt: 'Cardiff city centre skyline rising behind rows of houses and trees',
        tag: 'Property', title: 'Landlords and property buyers',
        text: 'Rental accounts and Land Transaction Tax planning, where a buy-to-let or company purchase pays the higher rates, starting at 5% on the first £180,000.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: wmc, alt: 'Bronze-clad front of the Wales Millennium Centre with the Pierhead Building behind in Cardiff Bay',
        tag: 'Start-ups and tech', title: 'Founders and tech start-ups',
        text: 'Company formation, SEIS and EIS for founders in a region whose £160m Investment Zone links a semiconductor hub in Newport with a science and tech park in Cardiff.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
    ],
  },

  // ---------- 3. Services most searched in Cardiff ----------
  services: {
    eyebrow: 'Services in Cardiff',
    h2: 'What Cardiff clients ask us for most',
    intro: 'We run every service online at a fixed fee, wherever you are in Cardiff or the wider Capital Region. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Accounts, corporation tax and Companies House filings. Corporation tax is UK-wide, so Cardiff companies pay the same rates as English ones.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Returns for directors, freelancers and landlords, checked against your C tax code and the Welsh rates of income tax.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, schemes and Making Tax Digital returns for venues and accommodation providers, with the visitor levy handled correctly.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions at the UK-wide National Living Wage of £12.71 an hour, with Welsh tax codes set up from the start.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlord accounts', text: 'Rental accounts, Section 24 planning and a Land Transaction Tax check before you buy your next property.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and investor paperwork for Cardiff start-ups and university spin-outs.', href: '/uk/company-services/eis-seis/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Wales) ----------
  facts: {
    eyebrow: 'Cardiff facts',
    h2: 'Welsh rates and taxes that apply in Cardiff',
    intro: 'Wales sets its own business rates, reliefs and property tax, and the Senedd sets part of your income tax. The figures for 2026-27 are below.',
    tables: [
      {
        caption: 'Business rates in Cardiff, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Standard multiplier (most properties)', '50.2p per £1 of rateable value'],
          ['Retail multiplier (eligible small and medium shops)', '35.0p per £1'],
          ['Higher multiplier (rateable value above £100,000)', '51.5p per £1'],
          ['Small business rates relief', '100% up to £6,000 rateable value, tapering to nil at £12,000 (up to two properties per council area)'],
          ['Food and drink hospitality relief', '15%, capped at £110,000 per business across Wales'],
        ],
        after: 'Cardiff Council sends the bill. Where the 2026 revaluation raises a bill by more than £300, transitional relief phases in the increase: you pay 33% of it in 2026-27, 66% in 2027-28 and all of it from 2028-29.',
      },
      {
        caption: 'Welsh tax on income and property, 2026-27',
        head: ['Tax', 'Detail'],
        rows: [
          ['Income tax (Welsh rates)', '20%, 40% and 45%, with a £12,570 personal allowance. Your tax code starts with C'],
          ['Land Transaction Tax, main home', '0% up to £225,000, then 6%, 7.5%, 10% and 12% over £1.5m'],
          ['Land Transaction Tax, higher rates (second homes and companies)', '5% up to £180,000, rising in bands to 17% over £1.5m'],
          ['Land Transaction Tax, non-residential', '0% up to £225,000, 1% to £250,000, 5% to £1m, 6% above'],
        ],
        after: 'The Welsh Revenue Authority collects Land Transaction Tax, not HMRC. HMRC still collects income tax, and for 2026-27 the Welsh rates add up to the same totals as in England.',
      },
    ],
    urgent: {
      title: 'Visitor levy: bookings taken now already count',
      text: 'Cardiff charges a visitor levy on stays from 1 April 2027. Since 28 September 2026, providers must account for it on new bookings for those stays, and every provider must register with the Welsh Revenue Authority by 31 March 2027.',
      cta: 'Talk to us about the levy',
    },
  },

  // ---------- 6. How we work with Cardiff clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Cardiff clients',
    steps: [
      { title: 'Free consultation', text: 'We talk through your business, your records and your next deadlines on a free call.' },
      { title: 'Fixed fee in writing', text: 'You get a written scope and a fixed price before we start, with no hourly billing.' },
      { title: 'We do the work', text: 'Upload records securely or give us access to Xero or QuickBooks. We prepare and file with HMRC and the Welsh Revenue Authority, and remind you before every deadline.' },
    ],
    meet: {
      title: 'Meeting us in Cardiff',
      text: 'We work by video, phone and secure upload, so clients in Cardiff, Newport and the valleys get the same service without travelling.',
      items: [
        'Video meetings on Teams, Zoom or Google Meet',
        'Secure upload and cloud bookkeeping access',
        'One named contact for your account',
        'Or meet us at our Fleet Street office in London, by appointment',
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against Welsh Government, Welsh Revenue Authority, Cardiff Council and GOV.UK sources. Welsh rates and reliefs change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Cardiff clients',
  faqs: [
    { q: 'What is the business rates multiplier in Wales for 2026-27?', a: 'The standard multiplier is 50.2p for every £1 of rateable value, the first cut in Wales since 2010. Eligible small and medium shops use a retail multiplier of 35.0p, and properties with a rateable value above £100,000 pay a higher multiplier of 51.5p. Cardiff Council sends the bill.' },
    { q: 'Do small businesses in Cardiff pay business rates?', a: 'Many pay nothing. Welsh small business rates relief gives 100% relief on premises with a rateable value up to £6,000, tapering to nil at £12,000. You can get it on up to two properties in each council area, and registered childcare providers get 100% relief.' },
    { q: 'Is income tax different in Wales?', a: 'The Senedd sets the Welsh rates of income tax, and HMRC adds a C to your tax code. For 2026-27 the totals are the same as in England: 20% basic, 40% higher and 45% additional, with a £12,570 personal allowance. National Insurance, VAT and corporation tax are UK-wide.' },
    { q: 'Do you pay Stamp Duty when you buy property in Cardiff?', a: 'No. In Wales you pay Land Transaction Tax to the Welsh Revenue Authority instead. A main home pays nothing up to £225,000. Second homes, buy-to-let and company purchases pay higher rates from 5%. Non-residential property pays nothing up to £225,000, then 1%, 5% and 6%.' },
    { q: 'How much is the Cardiff visitor levy?', a: 'From 1 April 2027 it is £1.30 per person per night, or 75p for campsites and shared rooms such as hostels. Under-18s in those cheaper stays, bookings of more than 31 nights and council emergency housing are exempt. The Welsh Revenue Authority collects it for Cardiff Council.' },
    { q: 'What is the Cardiff Capital Region?', a: 'It is the partnership of 10 councils in south-east Wales, including Cardiff, Newport, Bridgend and Monmouthshire. Its 2016 City Deal created a £1.2 billion investment fund over 20 years. Its £160m Investment Zone, backed by the UK Government, supports advanced manufacturing and tech, including the semiconductor hub in Newport.' },
    { q: 'Do I need an accountant based in Cardiff?', a: 'No. We work online, and filings go to HMRC and the Welsh Revenue Authority the same way from anywhere. It does help to use an accountant who knows the Welsh rules, such as the multipliers, Land Transaction Tax and the visitor levy, because they differ from England.' },
    { q: 'How much does an accountant cost in Cardiff?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. The fee depends on your turnover and records, and we confirm it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Cardiff clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/bristol/', 'Accountants in Bristol'],
      ['/uk/bath/', 'Accountants in Bath'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/oxford/', 'Accountants in Oxford'],
      ['/uk/southampton/', 'Accountants in Southampton'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Property and tax', links: [
      ['/resources/stamp-duty-commercial-property/', 'Stamp Duty and LTT on commercial property'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/resources/capital-gains-tax-on-property/', 'Capital gains tax on property'],
      ['/resources/buy-to-let-limited-company/', 'Buy-to-let through a limited company'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Cardiff accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Cardiff and south-east Wales'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.wales/node/72900', 'Welsh Government: non-domestic rates support for 2026-27 (written statement)'],
    ['https://www.blaenau-gwent.gov.uk/en/business/business-rates-nndr/business-rates-reductions', 'Blaenau Gwent County Borough Council: Welsh small business and hospitality rates relief'],
    ['https://www.gov.uk/welsh-income-tax', 'GOV.UK: Welsh Income Tax 2026 to 2027'],
    ['https://www.gov.wales/land-transaction-tax-rates-and-bands', 'Welsh Revenue Authority: Land Transaction Tax rates and bands'],
    ['https://www.cardiffnewsroom.co.uk/releases/c25/37008.html', 'Cardiff Council: visitor levy for overnight stays approved'],
    ['https://www.gov.uk/government/news/cardiff-capital-region-city-deal-signed', 'GOV.UK: Cardiff Capital Region City Deal signed'],
    ['https://www.gov.uk/government/news/growth-and-local-jobs-top-of-the-agenda-as-cardiff-capital-region-investment-zone-advances', 'GOV.UK: Cardiff Capital Region Investment Zone'],
  ],
};
