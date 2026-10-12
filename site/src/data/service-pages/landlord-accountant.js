// Landlord accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK (HMRC guidance and manuals) on 13 October 2026 (sources at the bottom).
// April 2027 property income rates: HMRC technical note, 26 November 2025.

import { rating } from '../reviews.js';
import hero from '../../assets/services/landlords/landlord-accountant-london-terraced-houses.jpg';
import buyToLet from '../../assets/services/landlords/landlord-accountant-buy-to-let-colourful-houses.jpg';
import company from '../../assets/services/landlords/landlord-accountant-model-house-calculator.jpg';
import nonResident from '../../assets/services/landlords/landlord-accountant-non-resident-laptop-beach.jpg';
import accidental from '../../assets/services/landlords/landlord-accountant-couple-moving-boxes.jpg';
import portfolio from '../../assets/services/landlords/landlord-accountant-portfolio-brick-terraces.jpg';
import selling from '../../assets/services/landlords/landlord-accountant-couple-signing-sale.jpg';
import meeting from '../../assets/services/landlords/landlord-accountant-team-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/accounting/landlord-accountant/',
  primaryKeyword: 'landlord accountant',
  secondaryKeywords: [
    'property tax accountant London', 'landlord tax accountant', 'buy-to-let tax',
    'property investor accountant', 'non-resident landlord scheme', 'property company SPV accounts',
    'MTD for landlords', 'Section 24 mortgage interest',
  ],
  title: 'Landlord Accountants London & UK-wide | Severin Finance',
  description: 'Landlord accountants in London and across the UK: UK property tax returns, Section 24, buy-to-let companies and MTD, including landlords living abroad.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Accounting', '/uk/accounting/'],
    ['Landlord accountant', '/uk/accounting/landlord-accountant/'],
  ],
  service: {
    name: 'Landlord accounting and property tax service',
    serviceType: 'Property tax returns and accounts for landlords',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Landlord accountant',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK accounting · Landlords',
    h1: 'Landlord accountants in London and across the UK',
    answer: 'Our landlord accountants prepare your UK property tax return for a fixed fee, claim every allowable expense and work out your 20% tax credit on mortgage interest, whether you live in London, elsewhere in the UK or abroad. From 6 April 2027, Making Tax Digital applies to landlords with qualifying income over £30,000.',
    image: hero,
    imageAlt: 'Row of pastel-painted London terraced houses under a blue sky',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Next deadline', date: '31 January 2027', note: 'Online return and tax due for 2025/26' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'UK and overseas landlords' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Rates & rules'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Do you need a landlord accountant?',
    intro: 'If you receive rent from UK property, you must report it to HMRC. These are the landlords we work with most.',
    cards: [
      { title: 'Buy-to-let landlords', img: buyToLet, alt: 'Street of pink, blue and white terraced houses with parked cars', tag: 'One or more rental properties', text: 'We prepare the property pages of your return, claim repairs, agent fees and insurance, and work out the credit on mortgage interest.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Limited company landlords', img: company, alt: 'Man holding a small model house next to a calculator', tag: 'Property company (SPV)', text: 'Companies deduct mortgage interest as a cost. We prepare your SPV accounts and company tax return, and plan how you take money out.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Non-resident landlords', img: nonResident, alt: 'Woman working on a laptop on a beach next to an orange suitcase', tag: 'Living abroad 6+ months a year', text: 'We apply for you to receive rent without tax deducted under the Non-Resident Landlord Scheme and file your UK return each year.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
      { title: 'Accidental landlords', img: accidental, alt: 'Couple carrying cardboard boxes into their new home', tag: 'Let your old home or an inherited one', text: 'Moved in with a partner, or inherited a flat? We register you with HMRC and check whether the £1,000 property allowance beats your expenses.' },
      { title: 'Portfolio & HMO landlords', img: portfolio, alt: 'Row of red brick terraced houses', tag: 'Several properties or HMOs', text: 'We keep digital records per property, send your Making Tax Digital quarterly updates and review whether a company structure makes sense.', link: ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'] },
      { title: 'Selling a rental property', img: selling, alt: 'Couple signing a document at a desk', tag: 'Capital gains tax', text: 'UK property sales must be reported, and the tax paid, within 60 days of completion. We work out the gain and file the return.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Landlord accountant fees',
    h2: 'Fixed fees for landlords',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'One property', for: 'Individual landlord, one let', price: '£XXX', tbc: true, items: ['Rental income and expenses prepared', 'Mortgage interest tax credit worked out', 'Property allowance compared with actual costs', 'Self assessment return filed'] },
      { name: 'Portfolio', for: 'Two or more properties, or HMOs', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Income and costs tracked per property', 'Making Tax Digital quarterly updates', 'Replacement of domestic items relief claimed', 'Annual review: personal or company ownership'] },
      { name: 'Property company', for: 'Limited company (SPV) landlords', price: '£XXX', tbc: true, items: ['Annual accounts filed at Companies House', 'Company Tax Return', 'Director salary and dividend planning', 'Confirmation statement'] },
    ],
    included: ['HMRC agent authorisation', 'Tax bill shown to you before filing', 'Payment reminders', 'HMRC letters about the return answered', 'Making Tax Digital set-up advice'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Rates and rules (tables) ----------
  deadlines: {
    eyebrow: 'Rates & rules',
    h2: 'Landlord tax rates and rules for 2026/27',
    intro: 'Key figures for UK landlords. Stamp duty rates are for England and Northern Ireland; Scotland and Wales have their own taxes.',
    tables: [
      {
        caption: 'Landlord tax: key figures',
        head: ['Rule', '2026/27'],
        rows: [
          ['Property allowance (instead of expenses)', '£1,000 a year'],
          ['Mortgage interest for individual landlords (Section 24)', 'Tax credit of 20% of finance costs'],
          ['Mortgage interest for limited companies', 'Deducted as a business cost'],
          ['From 6 April 2027', 'Property income rates of 22%, 42% and 47% (outside Scotland); finance cost credit rises to 22%'],
          ['Capital gains tax on residential property', '18% or 24%, after a £3,000 annual exempt amount'],
          ['Report and pay CGT on a UK property sale', 'Within 60 days of completion'],
          ['Stamp duty on an additional home', 'Standard rates plus 5%, plus 2% more for non-UK residents'],
        ],
      },
      {
        caption: 'Making Tax Digital for Income Tax',
        head: ['Qualifying income (rent and self-employment, before expenses)', 'Must use MTD from'],
        rows: [
          ['Over £50,000 in 2024/25', '6 April 2026'],
          ['Over £30,000 in 2025/26', '6 April 2027'],
          ['Over £20,000 in 2026/27', '6 April 2028'],
        ],
        after: 'Quarterly updates are due by 7 August, 7 November, 7 February and 7 May.',
      },
    ],
    urgent: {
      title: 'Rent you never told HMRC about?',
      text: 'Individual landlords can come forward through HMRC’s Let Property Campaign. You then have 90 days to work out and pay what you owe, and penalties are usually lower than if HMRC finds you first. We work out the tax for each year and make the disclosure for you.',
      cta: 'Get help with a disclosure',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our landlord accountant service works',
    image: meeting,
    imageAlt: 'Three people smiling in a meeting at a table',
    steps: [
      { title: 'Free consultation', text: 'Tell us about your properties. We confirm the work and a fixed fee in writing.' },
      { title: 'Send your figures', text: 'We send you a short checklist. Upload agent statements and receipts.' },
      { title: 'Approve, we file', text: 'You see your tax bill first. We file with HMRC and send you the confirmation.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'UTR and National Insurance number', 'Rent received and letting agent statements', 'Mortgage interest statements',
      'Repairs, insurance and service charges', 'Ground rent and agent fees', 'Purchase and sale completion statements',
      'Dates each property was let or empty', 'Overseas address and residence dates, if you live abroad',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'Landlord accountant, DIY or tax app?',
    cols: ['Severin Finance', 'Doing it yourself', 'Tax return app'],
    rows: [
      ['Who prepares the return', 'Our accountants', 'You', 'You, with prompts'],
      ['Mortgage interest credit worked out', true, 'You work it out', 'Partly'],
      ['Making Tax Digital quarterly updates', true, 'You send them', 'If MTD-compatible'],
      ['Personal vs company ownership advice', true, false, false],
      ['60-day CGT return when you sell', true, 'You file it', false],
      ['Non-Resident Landlord Scheme application', true, 'You apply', false],
      ['HMRC letters and enquiries handled', true, false, false],
      ['Price', 'Fixed fee', 'Free', 'Subscription'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance and manuals. Property tax rules change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Landlord tax questions',
  faqs: [
    { q: 'Do I need an accountant as a landlord?', a: 'No. You can report rental income to HMRC yourself. An accountant helps when you have a mortgage, several properties, a company, a sale or you live abroad, because the rules on finance costs, Making Tax Digital and capital gains are easy to get wrong.' },
    { q: 'What is Section 24 for landlords?', a: 'Section 24 stops individual landlords deducting mortgage interest from rental income. Instead you get a tax credit of 20% of your finance costs, limited by your property profits and your income. Higher-rate taxpayers lose relief at 40% or 45%. It does not apply to limited companies.' },
    { q: 'Should I put my buy-to-let in a limited company?', a: 'It depends on your figures. Companies deduct mortgage interest in full and pay corporation tax at 19% to 25%, but you pay dividend tax to take money out. Moving properties you already own into a company can trigger capital gains tax and stamp duty. We model both options before you decide.' },
    { q: 'What expenses can landlords claim?', a: 'Costs needed to run the let: letting agent fees, accountancy fees, insurance, repairs and maintenance, ground rent, service charges, Council Tax and utilities you pay, and services such as cleaning. You cannot claim improvements or the cost of buying the property. Individual landlords get the mortgage interest credit instead of a deduction.' },
    { q: 'What is the Non-Resident Landlord Scheme?', a: 'It is the HMRC scheme for landlords who live abroad for more than 6 months a year. Your letting agent, or your tenant if rent is over £100 a week, deducts basic rate tax from the rent unless HMRC approves you to receive it gross. You still file a UK tax return.' },
    { q: 'Do landlords need to use Making Tax Digital?', a: 'Yes, if your qualifying income is over £50,000 (from 6 April 2026), £30,000 (from 6 April 2027) or £20,000 (from 6 April 2028). Qualifying income is your rent plus any self-employed turnover, before expenses. You keep digital records and send quarterly updates.' },
    { q: 'What changes for landlords in April 2027?', a: 'Tax on rental income goes up by 2 percentage points. From 6 April 2027, property income has its own rates of 22%, 42% and 47% outside Scotland, and the mortgage interest credit rises to 22%. The £1,000 property allowance and Rent a Room relief do not change.' },
    { q: 'How much stamp duty do landlords pay on a buy-to-let?', a: 'Standard rates plus 5% on each band. A £300,000 buy-to-let in England costs £20,000 in stamp duty. Non-UK residents pay another 2%. Companies buying homes pay the higher rates too, and 17% can apply above £500,000.' },
    { q: 'What is the property allowance?', a: '£1,000 a year. You can claim it instead of your actual expenses, which helps when your costs are low. If your gross property income is over £1,000 you must tell HMRC, and over £2,500 you must register for self assessment.' },
    { q: 'How much does a landlord accountant cost?', a: 'Our fixed fees start at £XXX for one property. Portfolios, HMOs and property companies cost more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/business-finance/commercial-mortgages/', 'Commercial mortgages'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/kensington/', 'Kensington'],
      ['/uk/london/islington/', 'Islington'],
      ['/uk/london/croydon/', 'Croydon'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/section-24-explained/', 'Section 24 explained'],
      ['/resources/buy-to-let-limited-company/', 'Buy-to-let through a limited company'],
      ['/resources/making-tax-digital-for-landlords/', 'Making Tax Digital for landlords'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'property tax',
    pills: ['Free first consultation', 'Fixed fee in writing', 'UK and overseas landlords'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/changes-to-tax-relief-for-residential-landlords-how-its-worked-out-including-case-studies', 'GOV.UK: Tax relief for residential landlords (Section 24)'],
    ['https://www.gov.uk/government/publications/changes-to-tax-rates-for-property-savings-and-dividend-income/change-to-tax-rates-for-property-savings-and-dividend-income-technical-note', 'HMRC: Property, savings and dividend tax rates technical note'],
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: Making Tax Digital for Income Tax'],
    ['https://www.gov.uk/guidance/paying-tax-on-rent-to-landlords-abroad', 'GOV.UK: Non-Resident Landlord Scheme'],
    ['https://www.gov.uk/stamp-duty-land-tax/residential-property-rates', 'GOV.UK: Stamp Duty Land Tax rates'],
    ['https://www.gov.uk/renting-out-a-property/paying-tax', 'GOV.UK: Paying tax on rental income'],
  ],
};
