// Making Tax Digital accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/making-tax-digital/making-tax-digital-accountant-woman-laptop-home.jpg';
import trades from '../../assets/services/making-tax-digital/making-tax-digital-accountant-plumber.jpg';
import landlord from '../../assets/services/making-tax-digital/making-tax-digital-accountant-landlord-keys.jpg';
import mixed from '../../assets/services/making-tax-digital/making-tax-digital-accountant-living-room-laptop.jpg';
import freelancer from '../../assets/services/making-tax-digital/making-tax-digital-accountant-illustrator-tablet.jpg';
import trader from '../../assets/services/making-tax-digital/making-tax-digital-accountant-market-trader.jpg';
import vatBusiness from '../../assets/services/making-tax-digital/making-tax-digital-accountant-bakery-owner.jpg';
import meeting from '../../assets/services/making-tax-digital/making-tax-digital-accountant-laptop-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/making-tax-digital-accountant/',
  primaryKeyword: 'making tax digital accountant',
  secondaryKeywords: [
    'MTD for income tax', 'MTD for landlords', 'MTD software help', 'quarterly updates HMRC',
    'Making Tax Digital for VAT', 'MTD accountant London', 'Making Tax Digital sole traders',
  ],
  title: 'Making Tax Digital Accountant London & UK | Severin Finance',
  description: 'Making Tax Digital accountant in London and across the UK: we set up your software and send your quarterly updates and tax return to HMRC. Fixed fee.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['Making Tax Digital accountant', '/uk/tax/making-tax-digital-accountant/'],
  ],
  service: {
    name: 'Making Tax Digital service',
    serviceType: 'Making Tax Digital for Income Tax and VAT: software set-up, quarterly updates and tax returns',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Making Tax Digital',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · Making Tax Digital',
    h1: 'Making Tax Digital accountant in London and across the UK',
    answer: 'Our Making Tax Digital accountants set up compatible software and send your quarterly updates and tax return to HMRC for a fixed fee, for sole traders and landlords in London, across the UK and abroad. It applies above £50,000 of qualifying income now, £30,000 from April 2027 and £20,000 from April 2028.',
    image: hero,
    imageAlt: 'Woman working on her laptop at the kitchen table at home',
    price: { from: '£XXX', note: 'a quarter', tbc: true },
    deadline: { label: 'Next quarterly update', date: '7 November 2026', note: 'Covers 6 April to 5 October 2026' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Fixed fee agreed before we start' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Software set up for you' },
    ],
  },

  jump: [
    ['who', 'Who must use MTD'],
    ['prices', 'Prices'],
    ['deadlines', 'Dates & penalties'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who must use MTD (photo cards) ----------
  who: {
    eyebrow: 'Who must use MTD',
    h2: 'Do you need Making Tax Digital for Income Tax?',
    intro: 'It depends on your qualifying income: gross self-employment and property income before expenses. Not sure? We check for free.',
    cards: [
      { title: 'Sole traders over £50,000', img: trades, alt: 'Plumber in blue overalls fixing pipes in a bathroom with his toolbox', tag: 'Required since 6 April 2026', text: 'Tradespeople, shops and services. We set up your software, keep your records digital and send each update.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Landlords', img: landlord, alt: 'Hand holding house keys on a house-shaped keyring by a staircase', tag: 'MTD for landlords', text: 'Gross rent counts, not profit. UK and overseas property. We record income and costs per property each quarter.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Sole traders who also let property', img: mixed, alt: 'Woman working on a laptop in a cosy living room', tag: 'Income added together', text: '£25,000 rent plus £27,000 from self-employment is £52,000, so MTD applies. We file both in the same software.' },
      { title: 'Freelancers & creatives', img: freelancer, alt: 'Illustrator drawing on a tablet at her desk', tag: 'Over £30,000: from April 2027', text: 'Based on your 2025/26 return. We get your software running well before your first quarter starts.' },
      { title: 'Market traders & small businesses', img: trader, alt: 'Woman selling fresh vegetables at a colourful market stall', tag: 'Over £20,000: from April 2028', text: 'Moving from paper or spreadsheets? We pick simple software and show you how to record sales on your phone.', link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'] },
      { title: 'VAT-registered businesses', img: vatBusiness, alt: 'Baker working behind the counter of her bakery', tag: 'MTD for VAT already applies', text: 'Every VAT-registered business files VAT returns through MTD software. We can run your VAT and Income Tax together.', link: ['/uk/tax/vat-accountant/', 'VAT accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Making Tax Digital accountant fees',
    h2: 'Fixed fees for Making Tax Digital',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'MTD set-up', for: 'One-off, before your first quarter', price: '£XXX', tbc: true, items: ['Check if and when MTD applies to you', 'Software chosen and set up', 'Sign-up with HMRC as your agent', 'Short training on recording income and costs'] },
      { name: 'Quarterly updates + tax return', for: 'Sole traders or landlords, per quarter', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['4 quarterly updates sent to HMRC', 'Tax return submitted after the year end', 'Records reviewed each quarter', 'Tax estimate so you can plan payments'] },
      { name: 'Mixed income', for: 'Self-employed plus property, or several properties', price: '£XXX', tbc: true, items: ['Each business and property tracked separately', 'UK and overseas property', 'Capital allowances and adjustments', 'VAT returns if you are VAT registered'] },
    ],
    included: ['HMRC agent authorisation', 'Quarterly deadline reminders', 'Updates checked before sending', 'Tax return through MTD software', 'HMRC letters answered'],
    note: { text: 'Prices include or exclude VAT, and whether software subscriptions are included: to confirm.', tbc: true },
  },

  // ---------- 4. Dates and penalties (tables) ----------
  deadlines: {
    eyebrow: 'Dates & penalties',
    h2: 'Making Tax Digital dates, thresholds and penalties',
    intro: 'For Making Tax Digital for Income Tax. Qualifying income is taken from your Self Assessment return two tax years before.',
    tables: [
      {
        caption: 'When you must use Making Tax Digital for Income Tax',
        head: ['Qualifying income', 'Must use MTD from'],
        rows: [
          ['Over £50,000 in 2024/25', '6 April 2026'],
          ['Over £30,000 in 2025/26', '6 April 2027'],
          ['Over £20,000 in 2026/27', '6 April 2028'],
          ['£20,000 or less', 'Not required (automatic exemption)'],
        ],
        after: 'Qualifying income is gross self-employment and property income before expenses. Partnerships are not included yet.',
      },
      {
        caption: 'Quarterly update deadlines for 2026/27',
        head: ['Update covering', 'Due by'],
        rows: [
          ['6 April to 5 July 2026', '7 August 2026'],
          ['6 April to 5 October 2026', '7 November 2026'],
          ['6 April 2026 to 5 January 2027', '7 February 2027'],
          ['6 April 2026 to 5 April 2027', '7 May 2027'],
          ['Tax return for 2026/27', '31 January 2028'],
        ],
        after: 'No penalties for late quarterly updates in 2026/27. After that, each missed deadline gets 1 point and 4 points means a £200 penalty. Tax paid more than 15 days late costs 3% in 2026/27, rising to 4% from 2027/28.',
      },
    ],
    urgent: {
      title: 'Already in MTD and not set up?',
      text: 'If your income was over £50,000 in 2024/25, you should have started on 6 April 2026. You can still sign up. We set up the software, catch up your records and send the missing updates.',
      cta: 'Get set up now',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our Making Tax Digital accountant service works',
    image: meeting,
    imageAlt: 'Person explaining figures on a laptop during a meeting',
    steps: [
      { title: 'Free check', text: 'We confirm your qualifying income, your start date and a fixed fee in writing.' },
      { title: 'Software set up', text: 'We choose compatible software, connect your bank feed and sign you up with HMRC.' },
      { title: 'We send each update', text: 'You record income and costs. We review and send each quarter and the year-end return.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'UTR and National Insurance number', 'Your last Self Assessment return', 'Business bank statements',
      'Rental income and property costs', 'Receipts and invoices', 'Current spreadsheets or software login',
      'VAT number (if registered)', 'Government Gateway access, if you have it',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'Making Tax Digital: accountant, DIY or software alone?',
    cols: ['Severin Finance', 'Doing it yourself', 'Software alone'],
    rows: [
      ['Software chosen and set up', true, 'You', 'You'],
      ['Quarterly updates checked before sending', true, false, false],
      ['Tax return and adjustments', true, 'You', 'Partly'],
      ['Several businesses or properties', true, 'Complex', 'Depends on package'],
      ['Penalty points tracked', true, 'You', 'Reminders only'],
      ['HMRC letters handled', true, false, false],
      ['Price', 'Fixed fee', 'Software only', 'Subscription'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance on GOV.UK. Making Tax Digital rules are still being phased in: we update it when they change.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Making Tax Digital questions',
  faqs: [
    { q: 'Who needs to use Making Tax Digital for Income Tax?', a: 'Sole traders and landlords registered for Self Assessment whose qualifying income is over the threshold. It is over £50,000 from 6 April 2026, over £30,000 from 6 April 2027 and over £20,000 from 6 April 2028. Qualifying income is gross self-employment and property income before expenses.' },
    { q: 'How is qualifying income worked out?', a: 'It is the total of your self-employment and property income before expenses, taken from your Self Assessment return two tax years before. For example, £25,000 of rent plus £27,000 from self-employment is £52,000, so you would need MTD. Employment income and dividends do not count.' },
    { q: 'When are MTD quarterly updates due?', a: '7 August, 7 November, 7 February and 7 May. Standard quarters run from 6 April to 5 July, 5 October, 5 January and 5 April, or you can choose calendar quarters. You must send an update even if you had no income in the quarter.' },
    { q: 'Do I still need to file a tax return under MTD?', a: 'Yes. After the tax year ends you submit your tax return through your MTD software by 31 January. This used to be called the final declaration. You also file a normal Self Assessment return for the year before you join MTD.' },
    { q: 'What are the penalties for Making Tax Digital?', a: 'There are no penalties for late quarterly updates in 2026/27. After that, each missed deadline gets 1 point, and 4 points means a £200 penalty, plus £200 for each further miss. Tax paid more than 15 days late costs 3% in 2026/27 and 4% from 2027/28, plus more after 30 days.' },
    { q: 'Who is exempt from Making Tax Digital?', a: 'You are exempt automatically if your qualifying income is £20,000 or less, you do not have a National Insurance number, or you file as a trustee, personal representative or non-resident company. Some people are exempt until April 2027, such as foster carers. You can also apply if you are digitally excluded.' },
    { q: 'Which software can I use for Making Tax Digital?', a: 'Any software HMRC lists as compatible with Making Tax Digital for Income Tax. HMRC does not recommend any product, but it has a tool to find software that fits your needs, including free options. We work in Xero and QuickBooks and can set up whichever suits your records.' },
    { q: 'Does Making Tax Digital apply to VAT?', a: 'Yes. All VAT-registered businesses must keep digital records and file VAT returns through compatible software, whatever their turnover. HMRC signs new VAT registrations up automatically. MTD for VAT and MTD for Income Tax are separate, with separate penalty points.' },
    { q: 'How much does a Making Tax Digital accountant cost?', a: 'Our fixed fee for quarterly updates and the tax return starts at £XXX a quarter, with a one-off set-up from £XXX. Mixed income or several properties cost more. You get the exact fee in writing after a free check.', tbc: true },
    { q: 'Do partnerships need to use Making Tax Digital?', a: 'Not yet. Partnerships are not included in Making Tax Digital for Income Tax at the moment. Partners keep filing Self Assessment as normal, and we will tell you if HMRC sets a start date.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/tax-refunds/', 'Tax refunds'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/croydon/', 'Croydon'],
      ['/uk/london/stratford/', 'Stratford'],
      ['/uk/london/wimbledon/', 'Wimbledon'],
      ['/uk/leeds/', 'Leeds'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/making-tax-digital-for-income-tax/', 'MTD for Income Tax explained'],
      ['/resources/making-tax-digital-for-landlords/', 'MTD for landlords'],
      ['/resources/mtd-software/', 'Choosing MTD software'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get ready for', em: 'Making Tax Digital',
    pills: ['Free MTD check', 'Fixed fee in writing', 'Software set up for you'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: When you need to use MTD for Income Tax'],
    ['https://www.gov.uk/guidance/work-out-your-qualifying-income-for-making-tax-digital-for-income-tax', 'GOV.UK: Work out your qualifying income'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates', 'GOV.UK: Send quarterly updates'],
    ['https://www.gov.uk/guidance/penalties-for-making-tax-digital-for-income-tax', 'GOV.UK: Penalties for MTD for Income Tax'],
    ['https://www.gov.uk/guidance/find-out-if-you-can-get-an-exemption-from-making-tax-digital-for-income-tax', 'GOV.UK: MTD exemptions'],
    ['https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax', 'GOV.UK: Choose MTD software'],
  ],
};
