// Accountants in Kensington: all copy, local facts and SEO for one location page (Royal Borough of Kensington and Chelsea).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: RBKC (business rates 2026-27), GOV.UK (UK House Price Index July 2026,
// stamp duty, High Value Council Tax Surcharge, non-resident CGT, inheritance tax). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/kensington/accountants-kensington-royal-albert-hall.jpg';
import stucco from '../../assets/locations/kensington/accountants-kensington-white-stucco-terraces.jpg';
import mansion from '../../assets/locations/kensington/accountants-kensington-mansion-block.jpg';
import colourful from '../../assets/locations/kensington/accountants-kensington-colourful-houses.jpg';
import street from '../../assets/locations/kensington/accountants-kensington-street-dusk.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/kensington/',
  primaryKeyword: 'accountants in Kensington',
  secondaryKeywords: [
    'accountant Kensington', 'tax accountant Kensington', 'accountants Kensington and Chelsea',
    'landlord accountant Kensington', 'accountants South Kensington', 'non-resident landlord tax Kensington',
    'inheritance tax advice Kensington', 'High Value Council Tax Surcharge',
  ],
  title: 'Accountants in Kensington | Severin Finance',
  description: 'Accountants in Kensington for landlords, owners abroad and families: rental tax, capital gains and inheritance tax planning. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Kensington', '/uk/london/kensington/'],
  ],
  place: { type: 'AdministrativeArea', name: 'Royal Borough of Kensington and Chelsea', wikidata: 'Q188801', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Kensington', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'UK tax while living abroad',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Kensington · Royal Borough of Kensington and Chelsea',
    h1: 'Accountants in Kensington',
    answer: 'Our accountants in Kensington help landlords, families and people who live abroad with rental accounts, capital gains and inheritance tax. The average home in Kensington and Chelsea cost £1,232,640 in July 2026, so stamp duty, gains on a sale and the new High Value Council Tax Surcharge are real costs here.',
    image: hero,
    imageAlt: 'The Royal Albert Hall in South Kensington',
    chip: 'Kensington and Chelsea',
    card: { label: 'Average home price', value: '£1,232,640', note: 'Kensington and Chelsea, July 2026 (UK HPI)' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Owners here and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Kensington facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Kensington client mix) ----------
  who: {
    eyebrow: 'Who we help in Kensington',
    h2: 'Property owners, families and local businesses',
    intro: 'Kensington’s homes are among the most valuable in the UK, and many are owned by people with income or family in more than one place. Most of our clients here fall into four groups.',
    cards: [
      {
        img: stucco, alt: 'White stucco terraced houses on a street corner in Kensington',
        tag: 'Property', title: 'Landlords of prime flats and houses',
        text: 'Rental accounts, mortgage interest rules and Making Tax Digital for landlords letting Kensington flats and houses. Landlords with qualifying income over £50,000 have been in it since April 2026.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: mansion, alt: 'White mansion block with black railings in Kensington',
        tag: 'Clients abroad', title: 'Owners who live abroad',
        text: 'UK returns under the Non-Resident Landlord Scheme, the 2% stamp duty surcharge for non-UK resident buyers, and the 60-day capital gains report when you sell a Kensington home.',
        link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      },
      {
        img: colourful, alt: 'Row of red, blue and white painted houses on a west London street',
        tag: 'Families', title: 'Families planning ahead',
        text: 'Inheritance tax and gifting plans for families whose home alone can pass the £325,000 nil-rate band many times over, and planning for the High Value Council Tax Surcharge from April 2028.',
        link: ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      },
      {
        img: street, alt: 'Kensington street at dusk with mansion blocks and a church spire',
        tag: 'Local business', title: 'Shops, cafés and clinics',
        text: 'Bookkeeping, VAT and payroll for independent businesses on Kensington High Street, Kensington Church Street and around South Kensington, with rates bills now under the new transitional caps.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
    ],
  },

  // ---------- 3. Services most searched in Kensington ----------
  services: {
    eyebrow: 'Services in Kensington',
    h2: 'What Kensington clients ask us for most',
    intro: 'All of this is done online, so it works the same whether you live on Kensington Square or abroad. Each card goes to the full service page.',
    items: [
      { title: 'Landlord accounts', text: 'Rental accounts and Making Tax Digital for owners of Kensington flats and houses, let directly or through an agent.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'Non-resident UK tax', text: 'UK returns, Non-Resident Landlord Scheme approval and 60-day gains reports for owners who live abroad.', href: '/cross-border/non-resident-uk-tax/' },
      { title: 'Capital gains tax', text: 'Gains on selling a Kensington home or rental, with main residence relief worked out properly.', href: '/uk/tax/capital-gains-tax-accountant/' },
      { title: 'Inheritance tax planning', text: 'Wills, gifts and trusts reviewed for estates near or above the £2 million taper point.', href: '/uk/tax/inheritance-tax-planning/' },
      { title: 'Self assessment', text: 'Tax returns for residents with rental, investment and overseas income, filed before 31 January.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Bookkeeping', text: 'Monthly bookkeeping and VAT for Kensington High Street shops, cafés and clinics.', href: '/uk/accounting/bookkeeping-services/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Kensington) ----------
  facts: {
    eyebrow: 'Kensington facts',
    h2: 'Property tax on Kensington values',
    intro: 'The tax rules are the same across England, but Kensington’s prices push owners into the top bands. Figures for 2026-27 unless stated.',
    tables: [
      {
        caption: 'Buying, owning and passing on a Kensington home',
        head: ['Item', 'Amount'],
        rows: [
          ['Average price, Kensington and Chelsea (July 2026)', '£1,232,640, down 14.1% on a year earlier'],
          ['Stamp duty on a main home', '5% from £250,001 to £925,000, 10% to £1.5 million, 12% above'],
          ['Stamp duty surcharges', '+5% on additional homes, +2% for non-UK resident buyers'],
          ['Non-resident sale of a UK home', 'Report and pay capital gains within 60 days, even if no tax is due'],
          ['Inheritance tax', '40% above £325,000, up to £500,000 when a home passes to children or grandchildren'],
        ],
        after: 'Stamp duty is 0% up to £125,000 and 2% to £250,000. The extra £175,000 inheritance tax allowance for a home is cut back for estates over £2 million.',
      },
      {
        caption: 'High Value Council Tax Surcharge, from April 2028',
        head: ['Home value (2026)', 'Yearly surcharge'],
        rows: [
          ['£2 million to £2.5 million', '£2,500'],
          ['£2.5 million to £3.5 million', '£3,500'],
          ['£3.5 million to £5 million', '£5,000'],
          ['£5 million or more', '£7,500'],
        ],
        after: 'The surcharge is paid by the owner, not the tenant, on top of normal council tax. Fewer than 1% of homes in England are expected to pay it.',
      },
    ],
    urgent: {
      title: 'Selling a Kensington home from abroad?',
      text: 'You must report the sale to HMRC and pay any capital gains tax within 60 days of completion, even if no tax is due. Late reports bring penalties. Talk to us before you exchange.',
      cta: 'Plan your sale with us',
    },
  },

  // ---------- 6. How we work with Kensington clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Kensington clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your property, your income and your plans, at a time that suits you here or abroad.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before we start. A tax return, a 60-day report or an inheritance tax review is priced upfront.' },
      { title: 'We do the work', text: 'Send rental statements, completion papers and bank records by secure upload. We prepare, check and file, and tell you what to pay and when.' },
    ],
    meet: {
      title: 'Meeting us in Kensington',
      text: 'If you live abroad or travel often, we work by video, phone and secure upload at times that suit you.',
      items: [
        'Video calls at times that suit clients abroad',
        'Secure upload for rental and completion papers',
        'One named contact for your account',
        { text: 'Kensington meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Royal Borough of Kensington and Chelsea and GOV.UK sources, including the UK House Price Index. Property taxes change often: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Kensington clients',
  faqs: [
    { q: 'What is the High Value Council Tax Surcharge?', a: 'It is a new yearly charge on homes in England worth £2 million or more, based on 2026 values, starting in April 2028. It runs from £2,500 to £7,500 a year depending on the value band. Owners pay it, not tenants, on top of normal council tax.' },
    { q: 'Do I pay extra stamp duty if I live abroad and buy in Kensington?', a: 'Yes. Non-UK resident buyers pay a 2% surcharge on top of the normal rates. If you already own another home, the 5% additional property surcharge applies as well. On a Kensington price, the two together can add a large sum, so plan before you exchange.' },
    { q: 'I sold my Kensington flat while living abroad. What must I do?', a: 'Report the sale to HMRC and pay any capital gains tax within 60 days of completion. You must report even if no tax is due, for example because of a loss or relief. We work out the gain, the reliefs and file the return for you.' },
    { q: 'How does inheritance tax work on a Kensington home?', a: 'The estate pays 40% on value above £325,000. Leaving your home to children or grandchildren can raise the tax-free amount to £500,000, but that extra allowance is reduced for estates over £2 million. Early gifts and planning can reduce the bill.' },
    { q: 'I rent out my Kensington flat and live abroad. How is the rent taxed?', a: 'Under the Non-Resident Landlord Scheme your agent, or a tenant paying more than £100 a week, deducts basic rate tax from the rent. HMRC can approve you in writing to get rent in full. Either way you file a UK tax return each year.' },
    { q: 'What business rates help is there for Kensington shops in 2026-27?', a: 'The council applies transitional caps: increases are limited to 5% for rateable values up to £28,000, 15% up to £100,000 and 30% above. Supporting Small Business relief limits some rises to £800. The old Retail Discount ended on 1 April 2026.' },
    { q: 'How much does an accountant cost in Kensington?', a: 'Our fixed fees start at £XXX for a personal tax return and £XXX for a non-resident capital gains report. The exact fee depends on your income and property, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
    ] },
    { title: 'Nearby areas', links: [
      ['/uk/london/westminster/', 'Accountants in Westminster'],
      ['/uk/london/richmond/', 'Accountants in Richmond'],
      ['/uk/london/wimbledon/', 'Accountants in Wimbledon'],
      ['/uk/london/camden/', 'Accountants in Camden'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Clients abroad', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
      ['/cross-border/', 'Cross-border services'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Kensington accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Clients here and abroad'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/government/statistics/uk-house-price-index-for-july-2026/uk-house-price-index-england-july-2026', 'GOV.UK: UK House Price Index for England, July 2026'],
    ['https://www.gov.uk/government/publications/high-value-council-tax-surcharge/high-value-council-tax-surcharge', 'GOV.UK: High Value Council Tax Surcharge'],
    ['https://www.gov.uk/stamp-duty-land-tax/residential-property-rates', 'GOV.UK: Stamp Duty Land Tax residential rates'],
    ['https://www.gov.uk/guidance/capital-gains-tax-for-non-residents-uk-residential-property', 'GOV.UK: Capital Gains Tax for non-residents selling UK homes'],
    ['https://www.gov.uk/inheritance-tax/passing-on-home', 'GOV.UK: Inheritance tax when passing on a home'],
    ['https://www.gov.uk/guidance/paying-tax-on-rent-to-landlords-abroad', 'GOV.UK: Paying tax on rent to landlords abroad'],
    ['https://www.rbkc.gov.uk/council-tax/guide-council-tax-benefits-and-business-rates/your-council-tax-and-business-rates-2026-2027-and-our-performance-and-spending-plans/business-rates-2026-2027', 'Royal Borough of Kensington and Chelsea: Business rates 2026-2027'],
  ],
};
