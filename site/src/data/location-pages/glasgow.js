// Accountants in Glasgow: all copy, local facts and SEO for one UK city location page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Glasgow City Council (non-domestic rates 2026-27, visitor
// levy, LEZ), gov.scot (rates reliefs circular 7/2026, Investment Zones), GOV.UK (Scottish
// Income Tax, Glasgow City Region Investment Zone tax sites), Clyde Gateway, University of
// Glasgow (GRID). Scotland does not use the England business rates multipliers.
// Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/glasgow/accountants-glasgow-hero.jpg';
import clyde from '../../assets/locations/glasgow/accountants-glasgow-broomielaw.jpg';
import shops from '../../assets/locations/glasgow/accountants-glasgow-buchanan-street.jpg';
import tenements from '../../assets/locations/glasgow/accountants-glasgow-sandstone-tenements.jpg';
import university from '../../assets/locations/glasgow/accountants-glasgow-university.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/glasgow/',
  primaryKeyword: 'accountants in Glasgow',
  secondaryKeywords: [
    'accountant Glasgow', 'chartered accountants Glasgow', 'tax accountant Glasgow',
    'small business accountant Glasgow', 'bookkeeping Glasgow', 'landlord accountant Glasgow',
    'Glasgow visitor levy', 'Glasgow business rates',
  ],
  title: 'Accountants in Glasgow | Severin Finance',
  description: 'Accountants in Glasgow for company accounts, Scottish tax returns, bookkeeping, VAT and payroll, with visitor levy planning. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Glasgow', '/uk/glasgow/'],
  ],
  place: { type: 'City', name: 'Glasgow', wikidata: 'Q4093', containedIn: ['Country', 'United Kingdom'] },
  service: { name: 'Accountants in Glasgow', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'VAT or bookkeeping',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Glasgow · Scotland',
    h1: 'Accountants in Glasgow',
    answer: 'Our accountants in Glasgow handle company accounts, Scottish tax returns, VAT, payroll and bookkeeping for fixed fees. We plan for local changes: from 25 January 2027 Glasgow adds a 5% visitor levy to every night of a stay, and Investment Zone tax sites now run at AMIDS and Glasgow Airport.',
    image: hero,
    imageAlt: 'The SEC Armadillo, the Hydro arena and the Finnieston Crane reflected in the River Clyde in Glasgow',
    chip: 'Scotland',
    card: { label: 'Glasgow visitor levy', value: '25 Jan 2027', note: '5% on every night of a stay booked from 1 April 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Glasgow and the Clyde' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Glasgow facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Glasgow client mix) ----------
  who: {
    eyebrow: 'Who we help in Glasgow',
    h2: 'Glasgow firms, traders, landlords and makers',
    intro: 'Glasgow is Scotland\'s most populated city, with a large business services sector, busy shopping streets, a big tenement rental market and new innovation sites along the Clyde. Most of our clients here fit one of four groups.',
    cards: [
      {
        img: clyde, alt: 'Office buildings along the north bank of the River Clyde in Glasgow city centre, with a white footbridge across the river',
        tag: 'Business services', title: 'Financial and professional firms',
        text: 'Company accounts, payroll and VAT for finance, legal and shared service firms around the Broomielaw and the International Financial Services District, plus IR35 reviews for the contractors they use.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: shops, alt: 'Shoppers walking down Buchanan Street in Glasgow city centre on a sunny day',
        tag: 'Retail and events', title: 'Shops, bars and events businesses',
        text: 'Bookkeeping, VAT and payroll for retailers, bars, restaurants and firms that work around concerts and conferences by the Clyde. We plan for the 15% rates relief and for the visitor levy from 2027.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: tenements, alt: 'Red sandstone tenement steps and bay windows on a tree-lined Glasgow street',
        tag: 'Property', title: 'Tenement and student landlords',
        text: 'Rental accounts, Section 24 planning and LBTT on purchases for landlords with sandstone flats in the West End and the Southside. Rental profits are taxed at Scottish income tax rates.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: university, alt: 'The University of Glasgow main building and tower behind pink rhododendrons',
        tag: 'Innovation and manufacturing', title: 'Founders, spin-outs and manufacturers',
        text: 'SEIS and EIS, R&D records and company set-up for founders in the Glasgow Riverside Innovation District, and capital allowance and tax relief work for manufacturers looking at the AMIDS Investment Zone site.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
    ],
  },

  // ---------- 3. Services most searched in Glasgow ----------
  services: {
    eyebrow: 'Services in Glasgow',
    h2: 'What Glasgow clients ask us for most',
    intro: 'All our services are done online and priced the same wherever you are in Glasgow and the Clyde valley. Each card links to the full service page.',
    items: [
      { title: 'Limited company accounts', text: 'Year-end accounts, corporation tax and Companies House filings for Glasgow companies, from the city centre to Clyde Gateway, on a fixed monthly fee.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'Self assessment', text: 'Tax returns for Scottish taxpayers. The 21% intermediate rate starts at £29,527 and the 42% higher rate at £43,663, so every pound of income counts.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Bookkeeping', text: 'Monthly bookkeeping for Buchanan Street and Merchant City traders, with visitor levy and VAT kept apart in the ledger once the levy starts.', href: '/uk/accounting/bookkeeping-services/' },
      { title: 'Payroll', text: 'Monthly payroll, RTI and pensions for Glasgow shops, bars and event teams, with Scottish income tax applied to each Scottish employee.', href: '/uk/accounting/payroll-services/' },
      { title: 'Corporation tax', text: 'Corporation tax returns and capital allowances on machinery, vehicles and equipment for Glasgow manufacturers and trades, including Low Emission Zone compliant vans.', href: '/uk/tax/corporation-tax-accountant/' },
      { title: 'Landlord accounts', text: 'Rental accounts for tenement flats and student lets, Section 24 planning and LBTT on buy-to-let purchases.', href: '/uk/accounting/landlord-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Glasgow) ----------
  facts: {
    eyebrow: 'Glasgow facts',
    h2: 'What is different about trading in Glasgow',
    intro: 'Scotland sets its own business rates and income tax bands. Glasgow adds its own visitor levy, a low emission zone enforced since 2023 and new Investment Zone tax sites. Here is what applies in 2026-27.',
    tables: [
      {
        caption: 'Non-domestic rates in Glasgow, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Basic property rate (RV up to £51,000)', '48.1p per £1'],
          ['Intermediate property rate (RV £51,001 to £100,000)', '53.5p per £1'],
          ['Higher property rate (RV over £100,000)', '54.8p per £1'],
          ['Small Business Bonus Scheme', '100% relief up to £12,000 combined RV; 25% on each property up to £15,000 for totals up to £35,000'],
          ['Retail, hospitality and leisure relief (RV up to £100,000)', '15%, or 40% for certain hospitality premises and music venues, capped at £110,000'],
          ['Fresh Start relief (RV up to £100,000)', 'Up to 100% for 12 months after a property has been empty for six months'],
        ],
        after: 'Glasgow City Council sends the bill. The new valuation roll started on 1 April 2026, and transitional relief limits the rise in 2026-27. Firms that lose small business relief on 1 April 2026 pay 25% of the increase this year.',
      },
      {
        caption: 'Scottish tax and Glasgow schemes',
        head: ['Item', 'Detail'],
        rows: [
          ['Income tax on earnings, 2026-27', '21% from £29,527, 42% from £43,663, 45% from £75,001, 48% over £125,140'],
          ['Glasgow visitor levy', '5% of the room cost net of VAT, every night, from 25 January 2027'],
          ['Low Emission Zone', 'City centre, enforced since 1 June 2023; £60 penalty, halved if paid within 14 days'],
          ['Investment Zone tax sites', 'AMIDS and Glasgow Airport, in Renfrewshire, from 26 February 2026'],
          ['Investment Zone focus', 'Advanced manufacturing, including space, semiconductors and maritime'],
          ['Clyde Gateway regeneration area', '840 hectares across Bridgeton, Dalmarnock and Rutherglen'],
        ],
        after: 'Corporation tax, VAT and National Insurance are the same across the UK, and dividends and savings interest are taxed at UK rates. Investment Zone tax reliefs only apply to firms on the tax sites, not to the rest of the city region.',
      },
    ],
    urgent: {
      title: 'The Glasgow visitor levy is already in your bookings',
      text: 'Any stay from 25 January 2027 that was booked on or after 1 April 2026 carries the 5% levy for every night, with no cap. Hotels, hostels, guest houses and self-catering hosts need their systems ready. We set up the records so the levy stays apart from your sales and VAT.',
      cta: 'Get visitor levy help',
    },
  },

  // ---------- 6. How we work with Glasgow clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Glasgow clients',
    steps: [
      { title: 'Free consultation', text: 'A video or phone call about your business, your numbers and the rates, tax and levy dates ahead. There is no charge.' },
      { title: 'Fixed fee in writing', text: 'We set out the work and the fee before we start. The fee only changes if the work does.' },
      { title: 'We do the work', text: 'You share records by secure upload or give us Xero or QuickBooks access. We prepare, check and file, and remind you before each deadline.' },
    ],
    meet: {
      title: 'Meeting us in Glasgow',
      text: 'We work online, so a client in the Merchant City, Partick or Shawlands gets the same service. Most meetings happen by video.',
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
    text: 'This page was checked against Glasgow City Council, gov.scot, GOV.UK and Clyde Gateway sources. Scottish rates, tax bands and the visitor levy rules change often: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Glasgow clients',
  faqs: [
    { q: 'When does the Glasgow visitor levy start?', a: 'It applies to stays on or after 25 January 2027 that were booked on or after 1 April 2026. The levy is 5% of the accommodation part of the bill, net of VAT, and there is no cap on the number of nights. It covers hotels, hostels, guest houses, B&Bs and self-catering lets.' },
    { q: 'Does the Glasgow City Region Investment Zone cut my tax?', a: 'Only if you are on a tax site. The two tax sites, at AMIDS and Glasgow Airport in Renfrewshire, took effect on 26 February 2026. The zone backs advanced manufacturing, including space, semiconductors and maritime. Firms on a tax site may qualify for extra reliefs. Firms elsewhere in Glasgow do not.' },
    { q: 'Can I drive a van into the Glasgow Low Emission Zone?', a: 'Yes, if it meets the standard, which is usually Euro 6 for diesel and Euro 4 for petrol. The city centre zone has been enforced since 1 June 2023. A non-compliant vehicle gets a £60 penalty, halved if paid within 14 days, and it doubles for each repeat within 90 days.' },
    { q: 'Do I qualify for the Small Business Bonus Scheme in Glasgow?', a: 'Glasgow City Council applies the national scheme. If your properties in Scotland have a combined rateable value of £12,000 or less, you pay no rates. Relief tapers between £12,001 and £20,000. With a total of up to £35,000, each property valued at £15,000 or less can get 25%. The scheme runs to March 2029.' },
    { q: 'Is there rates relief for reopening an empty shop?', a: 'Yes. Fresh Start relief can give up to 100% off rates for up to 12 months when a property that has been empty for at least six months is brought back into use, if its rateable value is £100,000 or less. Conditions apply, so we check them before you sign a lease.' },
    { q: 'How does Scottish income tax change my pay as a Glasgow director?', a: 'Salary above £29,526 is taxed at 21%, and above £43,662 at 42%, compared with a 40% higher rate in the rest of the UK. Dividends are taxed at UK rates. So the best mix of salary and dividends is not the same as in England, and we work it out for you each year.' },
    { q: 'How much does an accountant cost in Glasgow?', a: 'Our fixed fees start at £XXX a month for a small limited company and £XXX for a self assessment return. We confirm the exact fee in writing after a free consultation, based on your turnover and the state of your records.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Services for Glasgow clients', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
    ] },
    { title: 'Nearby cities', links: [
      ['/uk/edinburgh/', 'Accountants in Edinburgh'],
      ['/uk/belfast/', 'Accountants in Belfast'],
      ['/uk/newcastle/', 'Accountants in Newcastle'],
      ['/uk/manchester/', 'Accountants in Manchester'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Guides and clients abroad', links: [
      ['/resources/section-24-explained/', 'Section 24 explained'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Glasgow accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Glasgow and the Clyde'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.glasgow.gov.uk/ndr2026', 'Glasgow City Council: Non-domestic rates 2026-27'],
    ['https://www.gov.scot/publications/local-government-finance-circular-7-2026-non-domestic-rates-relief-guidance/pages/non-domestic-rates-relief-information-for-scottish-local-authorities/', 'gov.scot: Non-domestic rates relief guidance 2026-27'],
    ['https://www.gov.uk/scottish-income-tax', 'GOV.UK: Scottish Income Tax rates and bands'],
    ['https://www.glasgow.gov.uk/article/14799/Glasgow-s-Visitor-Levy', 'Glasgow City Council: Glasgow visitor levy'],
    ['https://www.glasgow.gov.uk/article/3982/Glasgow-s-LEZ-Key-Information', 'Glasgow City Council: Low Emission Zone key information'],
    ['https://www.gov.uk/government/publications/maps-of-glasgow-city-region-investment-zone-tax-sites', 'GOV.UK: Glasgow City Region Investment Zone tax sites'],
    ['https://clydegateway.com/about/', 'Clyde Gateway: About the regeneration area'],
  ],
};
