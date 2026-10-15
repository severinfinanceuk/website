// Accountants in Edinburgh: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: City of Edinburgh Council (non-domestic rates 2026-27,
// visitor levy, LEZ, Forth Green Freeport), gov.scot (rates reliefs circular 7/2026, LBTT
// ready reckoners), GOV.UK (Scottish Income Tax), mygov.scot (LEZ penalties, short-term let
// control areas), Essential Edinburgh (BID levy). Scotland does not use the England
// business rates multipliers. Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/edinburgh/accountants-edinburgh-hero.jpg';
import festival from '../../assets/locations/edinburgh/accountants-edinburgh-royal-mile.jpg';
import tenements from '../../assets/locations/edinburgh/accountants-edinburgh-tenement-rooftops.jpg';
import mound from '../../assets/locations/edinburgh/accountants-edinburgh-the-mound.jpg';
import college from '../../assets/locations/edinburgh/accountants-edinburgh-old-college.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/edinburgh/',
  primaryKeyword: 'accountants in Edinburgh',
  secondaryKeywords: [
    'accountant Edinburgh', 'chartered accountants Edinburgh', 'tax accountant Edinburgh',
    'small business accountant Edinburgh', 'bookkeeping Edinburgh', 'landlord accountant Edinburgh',
    'Edinburgh visitor levy', 'Small Business Bonus Scheme Edinburgh',
  ],
  title: 'Accountants in Edinburgh | Severin Finance',
  description: 'Accountants in Edinburgh for Scottish tax returns, company accounts, VAT, payroll and the visitor levy. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Edinburgh', '/uk/edinburgh/'],
  ],
  place: { type: 'City', name: 'Edinburgh', wikidata: 'Q23436', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Edinburgh', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Edinburgh · Scotland',
    h1: 'Accountants in Edinburgh',
    answer: 'Our accountants in Edinburgh handle company accounts, Scottish tax returns, VAT, payroll and bookkeeping for fixed fees. We work to Scottish rules: six income tax bands, LBTT instead of Stamp Duty, and the Small Business Bonus Scheme. Since 24 July 2026, Edinburgh hotels and short-term lets also charge a 5% visitor levy.',
    image: hero,
    imageAlt: 'Dugald Stewart Monument on Calton Hill at sunrise, looking over Edinburgh to the castle and the Balmoral clock tower',
    chip: 'Scotland',
    card: { label: 'Edinburgh visitor levy', value: '5%', note: 'On the first five nights of a stay, from 24 July 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Edinburgh and the Lothians' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Edinburgh facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Edinburgh client mix) ----------
  who: {
    eyebrow: 'Who we help in Edinburgh',
    h2: 'Edinburgh festival trade, landlords, finance and tech',
    intro: 'Edinburgh runs on tourism and the August festivals, a crowded rental market, a large finance sector and its universities. Most of the clients we work with here fit one of four groups.',
    cards: [
      {
        img: festival, alt: 'Crowds walking along the Royal Mile in Edinburgh Old Town with a church spire behind',
        tag: 'Festivals and tourism', title: 'Hotels, venues and festival traders',
        text: 'Bookkeeping, VAT and visitor levy records for hotels, guest houses, bars and festival traders. We build in the 15% retail, hospitality and leisure rates relief, or 40% for certain hospitality premises and music venues.',
        link: ['/uk/tax/vat-accountant/', 'VAT accountant'],
      },
      {
        img: tenements, alt: 'Stone tenement rooftops, chimney pots and dormer windows in central Edinburgh',
        tag: 'Property', title: 'Tenement and short-term let landlords',
        text: 'Rental accounts, LBTT and the 8% Additional Dwelling Supplement for flat owners. The whole city is a short-term let control area, so letting a whole home that is not your own usually needs planning permission.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: mound, alt: 'The domed Bank of Scotland building on The Mound above trees in central Edinburgh',
        tag: 'Finance', title: 'Finance contractors and consultants',
        text: 'IR35 reviews, company accounts and salary and dividend planning for contractors who work for the banks, insurers and investment firms in the city. Salary is taxed at Scottish rates; dividends are not.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
      {
        img: college, alt: 'Old College quadrangle at the University of Edinburgh under a clear blue sky',
        tag: 'Universities and tech', title: 'Spin-outs, start-ups and tech founders',
        text: 'Company formation, SEIS and EIS advance assurance and R&D records for founders coming out of the city universities, and for the software and data firms that grow around them.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
    ],
  },

  // ---------- 3. Services most searched in Edinburgh ----------
  services: {
    eyebrow: 'Services in Edinburgh',
    h2: 'What Edinburgh clients ask us for most',
    intro: 'All our services are done online and priced the same wherever you are in Edinburgh and the Lothians. Each card links to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Year-end accounts, corporation tax and Companies House filings for Edinburgh and Leith companies. Corporation tax is the same across the UK.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Tax returns for Scottish taxpayers, with earnings taxed in the six Scottish bands and dividends and savings at UK rates. Filed before 31 January.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'VAT returns', text: 'Registration, scheme choice and Making Tax Digital returns for hotels, venues and festival traders, with visitor levy amounts recorded on their own.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI and pensions for hotels, bars and seasonal festival staff, with Scottish income tax applied to each Scottish employee.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlord accounts', text: 'Rental accounts for tenement flats and licensed short-term lets, plus LBTT and the Additional Dwelling Supplement when you buy.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Virtual finance director', text: 'Forecasts, board packs and investor reporting for growing Edinburgh tech and data firms, part time, without a full-time hire.', href: '/uk/accounting/virtual-finance-director/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Edinburgh) ----------
  facts: {
    eyebrow: 'Edinburgh facts',
    h2: 'What is different about trading in Edinburgh',
    intro: 'Scotland sets its own business rates, income tax bands and property tax. Edinburgh adds a visitor levy, a city centre BID and a low emission zone. Here is what applies in 2026-27.',
    tables: [
      {
        caption: 'Non-domestic rates in Edinburgh, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Basic property rate (RV up to £51,000)', '48.1p per £1'],
          ['Intermediate property rate (RV £51,001 to £100,000)', '53.5p per £1'],
          ['Higher property rate (RV over £100,000)', '54.8p per £1'],
          ['Small Business Bonus Scheme (one property)', '100% relief up to £12,000 combined RV, tapering to nil at £20,000'],
          ['Retail, hospitality and leisure relief (RV up to £100,000)', '15%, or 40% for certain hospitality premises and music venues'],
          ['Essential Edinburgh BID (city centre, RV £25,000 or more)', '1% of rateable value (0.4% in St James Quarter)'],
        ],
        after: 'The City of Edinburgh Council sends the bill. A new valuation roll started on 1 April 2026, and transitional relief limits the 2026-27 increase to 15%, 30% or 50%, depending on rateable value. The BID term runs from April 2023 to March 2028.',
      },
      {
        caption: 'Scottish taxes and Edinburgh charges',
        head: ['Item', 'Detail'],
        rows: [
          ['Income tax on earnings, 2026-27', 'Six bands from 19% to 48%; the 42% higher rate starts at £43,663'],
          ['LBTT on commercial property', '0% to £150,000, 1% to £250,000, 5% above'],
          ['LBTT Additional Dwelling Supplement', '8% on the price of an additional home'],
          ['Edinburgh visitor levy', '5% of the accommodation cost, first five nights, from 24 July 2026'],
          ['Low Emission Zone penalty (since 1 June 2024)', '£60, halved if paid within 14 days, doubling for repeats'],
          ['Forth Green Freeport tax sites', 'Leith and Burntisland (Mid-Forth), Rosyth and Grangemouth'],
        ],
        after: 'Dividends and savings interest are taxed at UK rates, and corporation tax, VAT and National Insurance are the same across the UK. LBTT is paid to Revenue Scotland, not HMRC, and the return and tax are due within 30 days of the day after the effective date.',
      },
    ],
    urgent: {
      title: 'The visitor levy started on 24 July 2026',
      text: 'Overnight stays in Edinburgh booked and paid from 1 October 2025 now carry a 5% levy on the first five nights. Accommodation providers are liable and file quarterly returns. We set up your records so the levy is tracked apart from your income.',
      cta: 'Get visitor levy help',
    },
  },

  // ---------- 6. How we work with Edinburgh clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Edinburgh clients',
    steps: [
      { title: 'Free consultation', text: 'A video or phone call about your business, your numbers and the Scottish and UK deadlines ahead. There is no charge.' },
      { title: 'Fixed fee in writing', text: 'We set out the work and the fee before we start. The fee only changes if the work does.' },
      { title: 'We do the work', text: 'You share records by secure upload or give us Xero or QuickBooks access. We prepare, check and file with HMRC, Revenue Scotland and Companies House, and remind you before each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Edinburgh',
      text: 'We work online, so a client in Leith, Morningside or South Queensferry gets the same service. Most meetings happen by video, which also suits the August festival rush.',
      items: [
        'Video or phone calls at a time that suits you',
        'Secure document upload and cloud bookkeeping access',
        'A named contact who knows your file',
        'Or meet us at our Fleet Street office in London, by appointment',
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against City of Edinburgh Council, gov.scot, GOV.UK, mygov.scot and Essential Edinburgh sources. Scottish rates, tax bands and levies change every year: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Edinburgh clients',
  faqs: [
    { q: 'Do Scottish income tax rates apply to my company?', a: 'No. Scottish income tax applies to the wages, pension and most other taxable income of Scottish taxpayers. Your company pays UK corporation tax, and dividends and savings interest are taxed at the same rates as the rest of the UK. That makes the mix of salary and dividends worth planning with care.' },
    { q: 'Who pays the Edinburgh visitor levy?', a: 'Accommodation providers are liable for it and usually pass it on to guests. From 24 July 2026 it is 5% of the accommodation cost for the first five nights in a row, on stays booked and paid on or after 1 October 2025. Providers file quarterly returns through a national online portal.' },
    { q: 'Do I qualify for the Small Business Bonus Scheme?', a: 'If the combined rateable value of your properties in Scotland is £12,000 or less, you get 100% relief. Between £12,001 and £20,000 it tapers to nil. With several properties, each one valued at £15,000 or less can get 25% while the total stays at £35,000 or less. From April 2026, short-term lets need a licence to qualify.' },
    { q: 'Do I need planning permission for a short-term let in Edinburgh?', a: 'Usually, yes. The whole city has been a short-term let control area since 5 September 2022, so letting a whole property that is not your main home needs planning permission. Every host also needs a short-term let licence from the council. We handle the accounts and the tax side of the let.' },
    { q: 'Is Leith in the Forth Green Freeport?', a: 'Yes. Leith and Burntisland form the Mid-Forth tax site, and Rosyth and Grangemouth are the other two. The sites were designated on 12 June 2024. Firms that invest there may get enhanced capital allowances, structures relief, rates relief, employer National Insurance relief and LBTT relief, if they meet the conditions.' },
    { q: 'What does the Edinburgh Low Emission Zone cost a business?', a: 'Nothing if your vehicles meet the standard, usually Euro 4 petrol or Euro 6 diesel for cars and vans. Enforcement started on 1 June 2024. A non-compliant vehicle gets a £60 penalty, halved if paid within 14 days. It doubles for each repeat within 90 days, up to £480 for vans and £960 for lorries.' },
    { q: 'How much does an accountant cost in Edinburgh?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. We confirm the exact fee in writing after a free consultation, based on your turnover and the state of your records.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Edinburgh clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/glasgow/', 'Accountants in Glasgow'],
      ['/uk/newcastle/', 'Accountants in Newcastle'],
      ['/uk/belfast/', 'Accountants in Belfast'],
      ['/uk/leeds/', 'Accountants in Leeds'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Guides and clients abroad', links: [
      ['/resources/eis-vs-seis/', 'EIS vs SEIS explained'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Edinburgh accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Edinburgh, Leith and the Lothians'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.edinburgh.gov.uk/business-rates/non-domestic-rate-charges-201920', 'City of Edinburgh Council: Non-domestic rate charges 2026-27'],
    ['https://www.gov.scot/publications/local-government-finance-circular-7-2026-non-domestic-rates-relief-guidance/pages/non-domestic-rates-relief-information-for-scottish-local-authorities/', 'gov.scot: Non-domestic rates relief guidance 2026-27'],
    ['https://www.gov.uk/scottish-income-tax', 'GOV.UK: Scottish Income Tax rates and bands'],
    ['https://www.gov.scot/publications/scottish-budget-2026-2027-scottish-tax-ready-reckoners/pages/4/', 'gov.scot: LBTT rates and bands 2026-27'],
    ['https://www.edinburgh.gov.uk/news/article/14141/edinburgh-declares-scotland-s-first-visitor-levy', 'City of Edinburgh Council: Edinburgh visitor levy'],
    ['https://www.mygov.scot/low-emission-zones/fines', 'mygov.scot: Low emission zone penalty charges'],
    ['https://www.edinburgh.gov.uk/regeneration-1/forth-green-freeport', 'City of Edinburgh Council: Forth Green Freeport'],
  ],
};
