// Accountants in the UK: the country hub (/uk/). Same keys as london.js, plus `areas`
// listing London and every UK city page. See docs/02-location-pages-plan.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/locations/uk/accountants-uk-high-street-cafe.jpg';
import shop from '../../assets/locations/uk/accountants-uk-butcher-shop.jpg';
import commuters from '../../assets/locations/uk/accountants-uk-commuter-train-station.jpg';
import houses from '../../assets/locations/uk/accountants-uk-brick-terraced-houses.jpg';
import abroad from '../../assets/locations/uk/accountants-uk-heathrow-terminal.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/',
  primaryKeyword: 'accountants in the UK',
  secondaryKeywords: [
    'UK accountants', 'online accountant UK', 'accountant for small business UK',
    'tax accountant UK', 'chartered accountants UK', 'accountants near me',
    'UK accountant for non-residents',
  ],
  title: 'Accountants in the UK | Severin Finance',
  description: 'Accountants in the UK for company accounts, tax returns, VAT, payroll and bookkeeping, in London, every UK city and abroad. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
  ],
  place: { type: 'Country', name: 'United Kingdom', wikidata: 'Q145' },
  service: { name: 'Accountants in the UK', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'United Kingdom · London and every UK region',
    h1: 'Accountants in the UK',
    answer: 'Our accountants in the UK work with companies, sole traders, landlords and people abroad with UK income, wherever they are based. We prepare accounts, tax returns, VAT and payroll online for fixed fees. From 6 April 2026, Making Tax Digital for Income Tax applies to qualifying income over £50,000.',
    image: hero,
    imageAlt: 'Café on a cobbled English street with a red telephone box and people sitting outside',
    chip: 'England · Scotland · Wales · NI',
    card: { label: 'Making Tax Digital', value: '£50,000', note: 'Qualifying income threshold from 6 April 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across the UK and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'UK tax facts'],
    ['areas', 'Cities'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'UK businesses, landlords and people with UK income',
    intro: 'We are a UK firm working online, so clients in a market town get the same team and the same fixed fees as clients in central London.',
    cards: [
      {
        img: shop, alt: 'Butcher writing a label at the counter of a traditional shop',
        tag: 'Small business', title: 'Shops, trades and family firms',
        text: 'Bookkeeping, VAT and year-end accounts for owner-run businesses, with payroll set for the £12.71 National Living Wage from April 2026.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: commuters, alt: 'Commuter train waiting at a small station platform on a sunny morning',
        tag: 'Directors', title: 'Directors and contractors',
        text: 'Limited company accounts, salary and dividend planning with the new 10.75% and 35.75% dividend rates, and IR35 reviews for contractors.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
      {
        img: houses, alt: 'Row of red brick cottages on a quiet tree-lined street',
        tag: 'Property', title: 'Landlords',
        text: 'Rental accounts, Section 24 and Making Tax Digital for landlords, who join MTD from April 2026 if rent plus self-employed income is over £50,000.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: abroad, alt: 'Entrance to Terminal 3 at Heathrow Airport at dusk',
        tag: 'Clients abroad', title: 'People abroad with UK income',
        text: 'UK tax returns for people living abroad with UK rent, pensions or a UK company, including the Non-Resident Landlord Scheme.',
        link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      },
    ],
  },

  // ---------- 3. Services ----------
  services: {
    eyebrow: 'Services',
    h2: 'Our most requested services',
    intro: 'Every service is done online and priced the same wherever you are in the UK. Each card goes to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax returns and Companies House filings for a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Personal tax returns for sole traders, directors, landlords and higher earners, filed on time.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Making Tax Digital', text: 'Software set-up and quarterly updates for sole traders and landlords joining MTD for Income Tax.', href: '/uk/tax/making-tax-digital-accountant/' },
      { title: 'VAT returns', text: 'VAT registration, scheme choice and quarterly returns through MTD-compatible software.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI submissions, auto-enrolment pensions and P60s for employers of any size.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlord accounts', text: 'Rental accounts, Section 24 planning and capital gains tax for landlords with one property or a whole portfolio.', href: '/uk/accounting/landlord-accountant/' },
    ],
  },

  // ---------- 4. Key facts ----------
  facts: {
    eyebrow: 'UK tax facts',
    h2: 'The UK rates and deadlines that matter in 2026-27',
    intro: 'Most tax rules are the same across the UK. The main exceptions are income tax on earnings in Scotland and business rates, which each nation sets for itself.',
    tables: [
      {
        caption: 'Main UK tax rates, 2026-27',
        head: ['Tax', 'Rate or threshold'],
        rows: [
          ['Personal allowance', '£12,570'],
          ['Corporation tax', '19% on profits up to £50,000, 25% over £250,000'],
          ['Dividend tax from 6 April 2026', '10.75% basic, 35.75% higher, 39.35% additional'],
          ['VAT registration threshold', '£90,000 taxable turnover in 12 months'],
          ['National Living Wage (21 and over)', '£12.71 an hour from 1 April 2026'],
        ],
        after: 'Scotland sets its own income tax rates and bands on earnings. Business rates are set separately in England, Scotland, Wales and Northern Ireland, so our city pages show the local figures.',
      },
      {
        caption: 'Key deadlines',
        head: ['Filing', 'Deadline'],
        rows: [
          ['Self assessment online return, 2025-26', '31 January 2027'],
          ['Corporation tax payment (most companies)', '9 months and 1 day after the year end'],
          ['Company tax return', '12 months after the year end'],
          ['Private company accounts to Companies House', '9 months after the year end'],
          ['VAT return and payment', '1 month and 7 days after the VAT period'],
        ],
        after: 'Late filing penalties start the day after the deadline, even if no tax is due. We put every date in your diary and remind you before each one.',
      },
    ],
    urgent: {
      title: 'Joining Making Tax Digital this tax year?',
      text: 'Sole traders and landlords with qualifying income over £50,000 must keep digital records and send quarterly updates from 6 April 2026. We set up the software and send the updates for you.',
      cta: 'Get MTD ready',
      href: '/uk/tax/making-tax-digital-accountant/',
    },
  },

  // ---------- 5. Areas we cover (UK hub) ----------
  areas: {
    eyebrow: 'Cities',
    h2: 'UK cities we cover',
    intro: 'We work with clients in every part of the UK. These pages cover the cities we are asked about most, with the local council, schemes and costs for each.',
    items: [
      { name: 'London', href: '/uk/london/', text: 'All 32 boroughs and the City, with pages for 11 London areas.', meta: 'Greater London' },
      { name: 'Manchester', href: '/uk/manchester/', text: 'Tech, media and professional services in the North West.', meta: 'Greater Manchester' },
      { name: 'Birmingham', href: '/uk/birmingham/', text: 'Manufacturing, professional services and a regional Investment Zone.', meta: 'West Midlands' },
      { name: 'Leeds', href: '/uk/leeds/', text: 'Financial, legal and health tech firms in West Yorkshire.', meta: 'West Yorkshire' },
      { name: 'Liverpool', href: '/uk/liverpool/', text: 'The port, life sciences, hospitality and a city region Freeport.', meta: 'Liverpool City Region' },
      { name: 'Bristol', href: '/uk/bristol/', text: 'Aerospace, creative and tech businesses in the South West.', meta: 'West of England' },
      { name: 'Brighton', href: '/uk/brighton/', text: 'Digital agencies, freelancers, hospitality and commuters.', meta: 'Brighton and Hove' },
      { name: 'Cambridge', href: '/uk/cambridge/', text: 'Life sciences, deep tech and university spin-outs.', meta: 'Cambridgeshire' },
      { name: 'Oxford', href: '/uk/oxford/', text: 'Spin-outs, science parks, landlords and a Zero Emission Zone.', meta: 'Oxfordshire' },
      { name: 'Reading', href: '/uk/reading/', text: 'Thames Valley tech firms, contractors and commuters.', meta: 'Berkshire' },
      { name: 'Milton Keynes', href: '/uk/milton-keynes/', text: 'Logistics, start-ups and new homes in a fast-growing city.', meta: 'Buckinghamshire' },
      { name: 'Edinburgh', href: '/uk/edinburgh/', text: 'Finance, festivals, short-term lets and Scottish income tax and LBTT.', meta: 'Scotland' },
      { name: 'Glasgow', href: '/uk/glasgow/', text: 'Professional firms, retail, landlords and the city region Investment Zone.', meta: 'Scotland' },
      { name: 'Cardiff', href: '/uk/cardiff/', text: 'Welsh business rates, Land Transaction Tax and the Cardiff Capital Region.', meta: 'Wales' },
      { name: 'Belfast', href: '/uk/belfast/', text: 'Regional and district rates, small business rate relief and a city deal.', meta: 'Northern Ireland' },
      { name: 'Newcastle', href: '/uk/newcastle/', text: 'NE1 venues, a Clean Air Zone for vans and taxis, and green industries.', meta: 'Tyne and Wear' },
      { name: 'Sheffield', href: '/uk/sheffield/', text: 'Advanced manufacturing, universities and a Clean Air Zone for vans and taxis.', meta: 'South Yorkshire' },
      { name: 'Nottingham', href: '/uk/nottingham/', text: 'A Workplace Parking Levy, selective licensing for landlords, and students.', meta: 'East Midlands' },
      { name: 'Leicester', href: '/uk/leicester/', text: 'Textile and food makers, BID Leicester and selective licensing for landlords.', meta: 'Leicestershire' },
      { name: 'Southampton', href: '/uk/southampton/', text: 'Port and cruise firms, the Solent Freeport and student lets.', meta: 'Hampshire' },
      { name: 'Bath', href: '/uk/bath/', text: 'Hotels, holiday lets, independent shops and a Clean Air Zone.', meta: 'Somerset' },
    ],
  },

  // ---------- 6. How we work ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with clients across the UK',
    steps: [
      { title: 'Free consultation', text: 'A phone or video call about your business, your figures and your deadlines. No charge and no obligation.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before any work starts, so you know the cost for the year.' },
      { title: 'We do the work', text: 'You upload records or connect Xero or QuickBooks. We prepare, check and file, and remind you of each deadline.' },
    ],
    meet: {
      title: 'Working with us from anywhere',
      text: 'Our clients are spread across the UK and abroad, so everything is set up to work online.',
      items: [
        'Video calls and phone meetings',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        'Or meet us at our Fleet Street office in London, by appointment',
      ],
    },
  },

  // ---------- 7. Proof ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against GOV.UK and HMRC guidance. Rates and thresholds change every tax year: we update it when they do.',
  },

  // ---------- 8. FAQ ----------
  faqTitle: 'Questions about working with a UK accountant',
  faqs: [
    { q: 'Can an online accountant work for my business anywhere in the UK?', a: 'Yes. Accounts, tax returns, VAT and payroll are filed online with HMRC and Companies House, so your accountant does not need to be in your town. You share records through secure upload or cloud software such as Xero or QuickBooks.' },
    { q: 'Is tax different in Scotland, Wales and Northern Ireland?', a: 'Partly. Scotland sets its own income tax rates and bands on earnings, and Wales has its own rate of income tax set by the Welsh Government. Corporation tax, VAT and National Insurance are UK-wide. Business rates are set by each nation, and Scotland and Wales have their own taxes on buying property.' },
    { q: 'When do I need to register for VAT?', a: 'When your taxable turnover goes over £90,000 in any rolling 12 months, or you expect it to go over £90,000 in the next 30 days alone. You can also register voluntarily below the threshold if it helps you reclaim VAT on costs.' },
    { q: 'Who has to use Making Tax Digital for Income Tax?', a: 'Sole traders and landlords with qualifying income over £50,000 from 6 April 2026, over £30,000 from April 2027 and over £20,000 from April 2028. Qualifying income is your self-employed turnover plus rent, before expenses.' },
    { q: 'Can you help if I live abroad but have UK income?', a: 'Yes. We prepare UK tax returns for people living abroad with UK rent, a UK company or other UK income, and we handle the Non-Resident Landlord Scheme. We advise on UK tax only.' },
    { q: 'How much does an accountant cost in the UK?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a personal tax return. The exact fee depends on your turnover and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
    ] },
    { title: 'Places', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/birmingham/', 'Accountants in Birmingham'],
      ['/uk/leeds/', 'Accountants in Leeds'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Clients abroad', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'UK accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Anywhere in the UK or abroad'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources ----------
  sources: [
    ['https://www.gov.uk/income-tax-rates', 'GOV.UK: Income Tax rates and Personal Allowances'],
    ['https://www.gov.uk/corporation-tax-rates', 'GOV.UK: Corporation tax rates'],
    ['https://www.gov.uk/government/publications/changes-to-tax-rates-for-property-savings-and-dividend-income/change-to-tax-rates-for-property-savings-and-dividend-income-technical-note', 'HMRC: Property, savings and dividend tax rates technical note'],
    ['https://www.gov.uk/vat-registration/when-to-register', 'GOV.UK: When to register for VAT'],
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: Making Tax Digital for Income Tax'],
    ['https://www.gov.uk/company-tax-returns', 'GOV.UK: Company Tax Returns'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
  ],
};
