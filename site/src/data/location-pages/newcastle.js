// Accountants in Newcastle: all copy, local facts and SEO for one UK city location page.
// Newcastle here means Newcastle upon Tyne. The layout (src/layouts/LocationPage.astro) turns this
// into the page. Every location page uses the same keys. See docs/02-location-pages-plan.md
// (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Breathe (Tyneside Clean Air Zone charges and penalties),
// NE1 Ltd and Newcastle City Council (NE1 BID levy), North East Mayoral Strategic Authority
// (name, mayor, Investment Zone), GOV.UK (rates multipliers). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/newcastle/accountants-newcastle-hero.jpg';
import quayside from '../../assets/locations/newcastle/accountants-newcastle-quayside.jpg';
import sandhill from '../../assets/locations/newcastle/accountants-newcastle-sandhill-van.jpg';
import flats from '../../assets/locations/newcastle/accountants-newcastle-quayside-flats.jpg';
import ouseburn from '../../assets/locations/newcastle/accountants-newcastle-ouseburn.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/newcastle/',
  primaryKeyword: 'accountants in Newcastle',
  secondaryKeywords: [
    'accountant Newcastle upon Tyne', 'accountants Newcastle small business', 'tax accountant Newcastle',
    'chartered accountants Newcastle', 'bookkeeping Newcastle', 'Newcastle Clean Air Zone van charge',
    'NE1 BID levy', 'accountants North East England',
  ],
  title: 'Accountants in Newcastle | Severin Finance',
  description: 'Accountants in Newcastle upon Tyne for company accounts, tax, VAT and payroll, with the NE1 levy and Clean Air Zone costs planned in. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Newcastle', '/uk/newcastle/'],
  ],
  place: { type: 'City', name: 'Newcastle upon Tyne', wikidata: 'Q1425428', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Newcastle', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Newcastle upon Tyne · North East',
    h1: 'Accountants in Newcastle',
    answer: 'We are accountants in Newcastle for limited companies, sole traders and landlords, with fixed fees for accounts, tax returns, VAT and payroll. We build local costs into your figures: the NE1 levy of 1.5% on city centre premises at £20,000 rateable value or more, and the £12.50 daily Clean Air Zone charge for older vans and taxis.',
    image: hero,
    imageAlt: 'The Tyne Bridge over the River Tyne in Newcastle, with boats moored along the Quayside',
    chip: 'Tyne and Wear',
    card: { label: 'Tyneside Clean Air Zone', value: '£12.50 a day', note: 'For vans, taxis and private hire cars that miss the standard' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across the North East' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Newcastle facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Newcastle client mix) ----------
  who: {
    eyebrow: 'Who we help in Newcastle',
    h2: 'Quayside venues, van firms, landlords and makers',
    intro: 'Newcastle mixes a busy city centre, two large universities and a strong engineering base along the Tyne. These are the four groups we work with most here.',
    cards: [
      {
        img: quayside, alt: 'Stone office and restaurant buildings on Sandhill in Newcastle, with the Tyne Bridge behind',
        tag: 'City centre', title: 'Bars, restaurants and shops in NE1',
        text: 'Payroll, VAT and rates checks for venues and retailers in the city centre. Premises at £20,000 rateable value or more pay the NE1 levy, even when empty, and rates reliefs do not reduce it.',
        link: ['/uk/accounting/payroll-services/', 'Payroll services'],
      },
      {
        img: sandhill, alt: 'Delivery van on a street of Victorian buildings below a road bridge in central Newcastle',
        tag: 'Vans and trades', title: 'Trades, couriers and taxi drivers',
        text: 'Self assessment and vehicle cost planning for drivers who cross the Tyne bridges. Vans, taxis and private hire cars below Euro 6 diesel or Euro 4 petrol pay £12.50 a day in the zone.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      },
      {
        img: flats, alt: 'Apartment blocks along the Quayside promenade on the River Tyne in Newcastle at sunset',
        tag: 'Property', title: 'Landlords and student lets',
        text: 'Rental accounts, Section 24 planning and capital gains for owners of Quayside flats and houses let to students at Newcastle University and Northumbria University.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: ouseburn, alt: 'Brick warehouse buildings and flats beside the Ouseburn river in Newcastle',
        tag: 'Engineering and energy', title: 'Manufacturers and green energy suppliers',
        text: 'Corporation tax, capital allowances and R&D records for engineering firms and suppliers to the North East Investment Zone, which backs advanced manufacturing and green industries.',
        link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Newcastle ----------
  services: {
    eyebrow: 'Services in Newcastle',
    h2: 'What Newcastle clients ask us for most',
    intro: 'Every service runs online at a fixed fee, for clients in Newcastle, Gateshead and across Tyne and Wear. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Year-end accounts and Companies House filings for Newcastle companies, from Quayside agencies to engineering firms.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Corporation tax', text: 'Returns and capital allowance claims for manufacturers investing in plant and machinery on Tyneside.', href: '/uk/tax/corporation-tax-accountant/' },
      { title: 'Self assessment', text: 'Returns for directors, landlords and drivers, with Clean Air Zone charges on business trips claimed correctly.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, schemes and Making Tax Digital returns for city centre hospitality and retail.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll, RTI and pensions for venues and shops, set up for the National Living Wage of £12.71 from April 2026.', href: '/uk/accounting/payroll-services/' },
      { title: 'Asset finance', text: 'Funding for a compliant van now that the Clean Air Zone upgrade grants have closed.', href: '/uk/business-finance/asset-finance/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Newcastle) ----------
  facts: {
    eyebrow: 'Newcastle facts',
    h2: 'Charges and levies that apply in Newcastle',
    intro: 'Newcastle and Gateshead run a joint class C Clean Air Zone, which does not charge private cars. The city centre also has the NE1 Business Improvement District. The figures for 2026-27 are below.',
    tables: [
      {
        caption: 'Tyneside Clean Air Zone charges',
        head: ['Vehicle or rule', 'Detail'],
        rows: [
          ['Vans, taxis and private hire cars below the standard', '£12.50 a day'],
          ['Buses, coaches and HGVs below the standard', '£50 a day'],
          ['Private cars', 'No charge'],
          ['Standard to meet', 'Euro 6 diesel or Euro 4 petrol'],
          ['Charge not paid by the sixth day after travel', '£120 penalty, cut to £60 if paid within 14 days'],
        ],
        after: 'The zone covers the city centre and the Tyne, Swing, High Level and Redheugh bridges, with each charging day running midnight to midnight. A charge paid for a business trip is a running cost of the vehicle. The penalty cannot be claimed.',
      },
      {
        caption: 'Business rates and the NE1 BID, 2026-27',
        head: ['Item', 'Detail'],
        rows: [
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['NE1 BID levy', '1.5% of rateable value, adjusted for inflation, on premises at £20,000 RV or more'],
          ['NE1 BID term', '1 April 2024 to 31 March 2029, after a 93% yes vote'],
          ['Empty premises and rates reliefs', 'The NE1 levy is still due'],
        ],
        after: 'Newcastle City Council sends the rates and NE1 levy bills for premises north of the river. If you trade on the Gateshead side of the Quayside, Gateshead Council bills you instead.',
      },
    ],
    urgent: {
      title: 'Clean Air Zone grants have closed',
      text: 'The Tyneside vehicle upgrade grants closed on 30 January 2026. Replacing an older van now comes out of your own cash or finance. We compare the daily charge with the cost of a compliant van so you can decide.',
      cta: 'Get a van cost review',
    },
  },

  // ---------- 6. How we work with Newcastle clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Newcastle clients',
    steps: [
      { title: 'Free consultation', text: 'A free call to go through your business, your records and the deadlines coming up.' },
      { title: 'Fixed fee in writing', text: 'We send a written scope and a fixed price before any work starts. There is no hourly billing.' },
      { title: 'We do the work', text: 'Share records by secure upload or give us access to Xero or QuickBooks. We prepare and file, and remind you ahead of each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Newcastle',
      text: 'Most clients meet us by video or phone, so you do not need to bring a van over the bridges into the Clean Air Zone to see us.',
      items: [
        'Video meetings on Teams, Zoom or Google Meet',
        'Secure upload and cloud bookkeeping access',
        'One named contact for your account',
        { text: 'Newcastle meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Breathe (the Newcastle and Gateshead Clean Air Zone service), NE1, Newcastle City Council, the North East Mayoral Strategic Authority and GOV.UK sources. Charges and levies change, and we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Newcastle clients',
  faqs: [
    { q: 'How much is the Newcastle Clean Air Zone charge?', a: 'Vans, taxis and private hire vehicles that do not meet the standard pay £12.50 a day. Buses, coaches and HGVs pay £50 a day. The standard is Euro 6 for diesel and Euro 4 for petrol. Each charging day runs from midnight to midnight.' },
    { q: 'Do private cars pay the Newcastle Clean Air Zone?', a: 'No. The Tyneside zone is class C, so private cars are not charged, whatever their age. The charge applies to vans, taxis, private hire vehicles, buses, coaches and HGVs that do not meet the standard. If you miss a payment, the penalty is £120, cut to £60 if paid within 14 days.' },
    { q: 'What is the NE1 levy?', a: 'NE1 is the Business Improvement District for Newcastle city centre. Premises with a rateable value of £20,000 or more pay a levy of 1.5% of rateable value, adjusted for inflation. The levy is due on empty premises too, and rates reliefs do not reduce it. The current term runs to 31 March 2029.' },
    { q: 'Is there an Investment Zone in Newcastle?', a: 'The North East Investment Zone backs advanced manufacturing and green industries with £160m over 10 years. Its tax sites are at Blyth in Northumberland and at the IAMSS advanced manufacturing site between Sunderland and South Tyneside. Newcastle has no tax site, but is part of the River Tyne Economic Corridor growth site.' },
    { q: 'Who sends business rates bills in Newcastle?', a: 'Newcastle City Council bills premises in the city, including the NE1 levy. Businesses on the south bank of the Tyne, such as the Gateshead Quayside, are billed by Gateshead Council. Check which council your premises sit in before you apply for small business rate relief.' },
    { q: 'What is the North East Mayoral Strategic Authority?', a: 'It is the new name, since 18 May 2026, for the North East Combined Authority. Led by Mayor Kim McGuinness, it covers seven council areas: County Durham, Gateshead, Newcastle, North Tyneside, Northumberland, South Tyneside and Sunderland. It runs the Investment Zone and regional business support.' },
    { q: 'How much does an accountant cost in Newcastle?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. The fee depends on your turnover and records, and we confirm it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Newcastle clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/leeds/', 'Accountants in Leeds'],
      ['/uk/edinburgh/', 'Accountants in Edinburgh'],
      ['/uk/sheffield/', 'Accountants in Sheffield'],
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/', 'Accountants in the UK'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Investing in plant and vans', links: [
      ['/resources/capital-allowances-explained/', 'Capital allowances explained'],
      ['/resources/full-expensing/', 'Full expensing'],
      ['/uk/business-finance/asset-finance/', 'Asset finance'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Newcastle accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Newcastle and Tyne and Wear'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.breathe-cleanair.com/faqs-charges', 'Breathe: Newcastle and Gateshead Clean Air Zone charges'],
    ['https://www.breathe-cleanair.com/pcn', 'Breathe: Clean Air Zone penalty charge notices'],
    ['https://www.newcastlene1ltd.com/about-us/faqs', 'NE1: BID levy and term'],
    ['https://new.newcastle.gov.uk/business/business-rates/business-improvement-district-bid/how-bid-levy-calculated', 'Newcastle City Council: how the BID levy is calculated'],
    ['https://www.northeast-ca.gov.uk/about', 'North East Mayoral Strategic Authority: about'],
    ['https://www.northeast-ca.gov.uk/projects/north-east-investment-zone', 'North East Mayoral Strategic Authority: North East Investment Zone'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
  ],
};
