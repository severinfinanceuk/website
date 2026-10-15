// Accountants in Cambridge: all copy, local facts and SEO for one location page (UK city).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Cambridge City Council (Cambridge BID), Cambridgeshire and
// Peterborough Combined Authority, GOV.UK (EIS and EMI limits from April 2026, rates multipliers).
// Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/cambridge/accountants-cambridge-kings-college-chapel.jpg';
import pipette from '../../assets/locations/cambridge/accountants-cambridge-lab-pipette.jpg';
import lab from '../../assets/locations/cambridge/accountants-cambridge-lab-microscope.jpg';
import shops from '../../assets/locations/cambridge/accountants-cambridge-trinity-street-shops.jpg';
import homes from '../../assets/locations/cambridge/accountants-cambridge-riverside-homes.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/cambridge/',
  primaryKeyword: 'accountants in cambridge',
  secondaryKeywords: [
    'accountant Cambridge', 'tax accountant Cambridge', 'start-up accountant Cambridge',
    'R&D tax relief Cambridge', 'EIS SEIS advance assurance Cambridge', 'small business accountant Cambridge',
    'Cambridge BID levy',
  ],
  title: 'Accountants in Cambridge | Severin Finance',
  description: 'Accountants in Cambridge for start-ups, spin-outs, EIS and SEIS, R&D claims, company accounts and payroll. Fixed fees. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Cambridge', '/uk/cambridge/'],
  ],
  place: { type: 'City', name: 'Cambridge', wikidata: 'Q350', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Cambridge', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Cambridge · Cambridgeshire and Peterborough',
    h1: 'Accountants in Cambridge',
    answer: 'Our accountants in Cambridge work with life sciences companies, university spin-outs, shops and landlords on tax, accounts, payroll and investor schemes for fixed fees. From 6 April 2026 the EMI share option limit doubled to £6m per company, and city centre firms in the Cambridge BID pay 1.25% of rateable value above £34,500.',
    image: hero,
    imageAlt: 'King’s College Chapel and lawn in Cambridge on a clear summer day',
    chip: 'Cambridge City Council',
    card: { label: 'Cambridge BID levy', value: '1.25%', note: 'Of rateable value above £34,500, April 2023 to March 2028' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Founders in Cambridge and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Cambridge facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Cambridge client mix) ----------
  who: {
    eyebrow: 'Who we help in Cambridge',
    h2: 'Cambridge founders, researchers, traders and landlords',
    intro: 'Cambridge mixes a university city centre with science parks, the Biomedical Campus and a busy rental market. Most of our Cambridge clients fit one of four groups.',
    cards: [
      {
        img: pipette, alt: 'Pipette adding pink liquid to a tray of sample tubes in a laboratory',
        tag: 'Life sciences', title: 'Biotech and life sciences companies',
        text: 'Investor-ready accounts, SEIS and EIS advance assurance and R&D tax relief claims for companies around the science parks and the Biomedical Campus.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: lab, alt: 'Laboratory bench with a microscope and research equipment',
        tag: 'Spin-outs', title: 'Spin-outs and deep tech start-ups',
        text: 'Company set-up, cap tables, EMI share options and monthly reporting for founders leaving the lab. EMI limits rose sharply from 6 April 2026.',
        link: ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      },
      {
        img: shops, alt: 'Cyclists passing shops and old stone buildings in central Cambridge',
        tag: 'City centre', title: 'Shops, cafés and visitor businesses',
        text: 'Bookkeeping, VAT and payroll for city centre traders. Premises in the BID area with a rateable value above £34,500 pay the Cambridge BID levy on top of business rates.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: homes, alt: 'Swans on the river in front of modern riverside houses in Cambridge',
        tag: 'Property', title: 'Landlords and property investors',
        text: 'Rental accounts, buy-to-let companies and capital gains on sales for landlords letting to researchers, students and staff.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Cambridge ----------
  services: {
    eyebrow: 'Services in Cambridge',
    h2: 'What Cambridge clients ask us for most',
    intro: 'We work online, so a start-up on a science park and a shop near the market get the same service and fixed fee. Each card opens the full service page.',
    items: [
      { title: 'EIS and SEIS', text: 'Advance assurance, compliance statements and investor certificates for Cambridge start-ups raising their first rounds.', href: '/uk/company-services/eis-seis/' },
      { title: 'Corporation tax and R&D', text: 'Corporation tax returns with R&D tax relief claims for biotech, software and engineering companies.', href: '/uk/tax/corporation-tax-accountant/' },
      { title: 'Company formation', text: 'New companies for spin-outs and founders, with share classes and records set up for investors.', href: '/uk/company-services/company-formation/' },
      { title: 'Virtual finance director', text: 'Board packs, cash runway forecasts and investor reporting for funded Cambridge companies.', href: '/uk/accounting/virtual-finance-director/' },
      { title: 'Payroll', text: 'Payroll and pensions for growing research teams, set up for the April 2026 wage rates.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlords and property', text: 'Rental accounts and tax planning for Cambridge flats, houses and shared homes.', href: '/uk/accounting/landlord-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Cambridge) ----------
  facts: {
    eyebrow: 'Cambridge facts',
    h2: 'Rates, the BID and start-up schemes in Cambridge',
    intro: 'Cambridge city centre adds a BID levy to business rates. For the city’s many start-ups, the bigger news is that EIS and EMI limits rose from 6 April 2026.',
    tables: [
      {
        caption: 'Business rates and the BID in Cambridge, 2026-27',
        head: ['Rate', 'Amount'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 of rateable value'],
          ['Small retail, hospitality and leisure', '38.2p per £1'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Cambridge BID levy (April 2023 to March 2028)', '1.25% of rateable value, on premises above £34,500'],
        ],
        after: 'Cambridge City Council bills premises in the city, and 84% of votes backed the current BID term. Parks outside the city boundary, such as Granta Park and the Babraham Research Campus, are in South Cambridgeshire, so that district council sends the bill.',
      },
      {
        caption: 'Start-up tax schemes from 6 April 2026',
        head: ['Scheme', 'New limit'],
        rows: [
          ['EIS: annual amount a company can raise', '£10m (£20m for knowledge-intensive companies)'],
          ['EIS: lifetime amount a company can raise', '£24m (£40m for knowledge-intensive companies)'],
          ['EMI: company share option limit', '£6m, up from £3m'],
          ['EMI: gross assets limit', '£120m, up from £30m'],
          ['EMI: employee limit', '500, up from 250'],
          ['EMI: time to exercise options', 'Up to 15 years, up from 10'],
        ],
        after: 'More Cambridge scale-ups now qualify for EMI. Check the limits again before each grant, and keep the HMRC notification deadlines.',
      },
    ],
    urgent: {
      title: 'Raising a round or granting options this year?',
      text: 'The higher EIS and EMI limits from April 2026 change what your company can offer investors and staff. We check eligibility and handle the HMRC paperwork before you sign.',
      cta: 'Check my EIS or EMI plans',
    },
  },

  // ---------- 6. How we work with Cambridge clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Cambridge clients',
    steps: [
      { title: 'Free consultation', text: 'A call about your company, your investor plans and your deadlines. We explain what we would take on and when.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the fee before work starts, including any EIS or R&D work, so there is no surprise invoice after a funding round.' },
      { title: 'We do the work', text: 'You connect Xero or QuickBooks and upload records. We prepare, check and file, and keep your investor and HMRC dates in one calendar.' },
    ],
    meet: {
      title: 'Meeting us in Cambridge',
      text: 'Founders and landlords in Cambridge work with us by video and secure upload, so meetings fit between lab time and lectures.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        'Or meet us at our Fleet Street office in London, by appointment',
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against Cambridge City Council, Combined Authority and GOV.UK sources. Scheme limits and levies change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Cambridge clients',
  faqs: [
    { q: 'Who sends the business rates bill in Cambridge?', a: 'Cambridge City Council bills premises inside the city boundary. Many science and research parks sit outside it, such as Granta Park and the Babraham Research Campus in South Cambridgeshire, so South Cambridgeshire District Council sends those bills. Multipliers are the same in both.' },
    { q: 'What is the Cambridge BID levy?', a: 'It is an extra charge for businesses in the Cambridge BID area. The current term runs from April 2023 to March 2028, after 84% of votes backed renewal. The levy is 1.25% of rateable value and only applies to premises with a rateable value above £34,500.' },
    { q: 'Can you help my Cambridge spin-out get SEIS or EIS advance assurance?', a: 'Yes. We check that your company and share issue qualify, prepare the advance assurance application and, after the round, file the compliance statement so investors get their certificates. From 6 April 2026 a company can raise up to £10m a year under EIS, or £20m if knowledge-intensive.' },
    { q: 'What changed for EMI share options in 2026?', a: 'From 6 April 2026 the EMI limits rose. A company can grant options over shares worth up to £6m, up from £3m. It can have gross assets up to £120m and up to 500 employees. Options can now be exercised within 15 years. More Cambridge scale-ups now qualify.' },
    { q: 'Can my Cambridge biotech claim R&D tax relief?', a: 'Often yes, if the company works to resolve scientific or technological uncertainty. We work out which costs qualify, prepare the claim with your corporation tax return and file the additional information form HMRC needs first. Loss-making companies may get a payable credit.' },
    { q: 'What business support does the Combined Authority offer?', a: 'The Cambridgeshire and Peterborough Combined Authority, led by Mayor Paul Bristow, runs business growth support for firms across the area, including Cambridge. We can prepare the forecasts and accounts that grant and support schemes usually ask for.' },
    { q: 'How much does an accountant cost in Cambridge?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/company-services/company-formation/', 'Company formation'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby locations', links: [
      ['/uk/milton-keynes/', 'Accountants in Milton Keynes'],
      ['/uk/oxford/', 'Accountants in Oxford'],
      ['/uk/london/camden/', 'Accountants in Camden'],
      ['/uk/london/islington/', 'Accountants in Islington'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Clients abroad', links: [
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Cambridge accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Start-ups, spin-outs and landlords'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://cambridge.gov.uk/news/2022/11/11/result-of-cambridge-bid-renewal-ballot', 'Cambridge City Council: Cambridge BID renewal ballot result'],
    ['https://cambridgeshirepeterborough-ca.gov.uk/', 'Cambridgeshire and Peterborough Combined Authority'],
    ['https://www.gov.uk/government/publications/enterprise-investment-scheme-eis-and-venture-capital-trusts-vct-changes', 'GOV.UK: EIS and VCT changes from April 2026'],
    ['https://www.gov.uk/government/publications/enterprise-management-incentive-scheme-increasing-the-limits', 'GOV.UK: Enterprise Management Incentive limits'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
  ],
};
