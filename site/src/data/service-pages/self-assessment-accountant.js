// Self assessment accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. To build another service
// page, copy this file, keep the same keys and rewrite every value. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 9 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/self-assessment/self-assessment-accountant-freelancer.jpg';
import soleTrader from '../../assets/services/self-assessment/self-employed-sole-trader-hairdresser.jpg';
import landlord from '../../assets/services/self-assessment/landlord-rental-income-tax.jpg';
import director from '../../assets/services/self-assessment/company-director-tax-return.jpg';
import investor from '../../assets/services/self-assessment/capital-gains-shares-crypto.jpg';
import family from '../../assets/services/self-assessment/high-income-child-benefit-charge-family.jpg';
import expat from '../../assets/services/self-assessment/foreign-income-expat-tax-return.jpg';
import consultation from '../../assets/services/self-assessment/tax-adviser-consultation-london.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/self-assessment-accountant/',
  primaryKeyword: 'self assessment accountant',
  secondaryKeywords: [
    'self assessment tax return help', 'tax return accountant London', 'sole trader accountant',
    'self employed accountant', 'late self assessment', 'HMRC late filing penalty',
    'self assessment accountant fees', 'self assessment deadline',
  ],
  title: 'Self Assessment Accountant London & UK | Severin Finance',
  description: 'Self assessment accountants in London and across the UK: we prepare and file your UK tax return and deal with HMRC. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-09', label: '9 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['Self assessment accountant', '/uk/tax/self-assessment-accountant/'],
  ],
  service: {
    name: 'Self assessment tax return service',
    serviceType: 'Self assessment tax return preparation and filing',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Self assessment tax return',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · Self assessment',
    h1: 'Self assessment accountants in London and across the UK',
    answer: 'Our self assessment accountants prepare and file your UK tax return with HMRC for a fixed fee, for clients in London, across the UK and abroad. We check every allowance and expense, work out your payments on account and deal with HMRC for you. For 2025-26, the online deadline is 31 January 2027.',
    image: hero,
    imageAlt: 'Self-employed woman in a colourful cardigan working on her laptop by a window',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Next deadline', date: '31 January 2027', note: 'Online return and tax due for 2025-26' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Chartered Management Accountant practice' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'HMRC-recognised filing software' },
    ],
  },

  jump: [
    ['who', 'Who needs to file'],
    ['prices', 'Prices'],
    ['deadlines', 'Deadlines & penalties'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who needs to file (photo cards) ----------
  who: {
    eyebrow: 'Who needs to file',
    h2: 'Do you need to file a self assessment tax return?',
    intro: 'You must file if any of these applied between 6 April and 5 April. Not sure? We check for free.',
    cards: [
      { title: 'Sole traders & freelancers', img: soleTrader, alt: 'Self-employed hairdresser cutting a client’s hair in her salon', tag: 'Self-employed income over £1,000', text: 'We prepare your accounts, claim every allowable expense and work out your Class 4 National Insurance.' },
      { title: 'Landlords', img: landlord, alt: 'Red model house with a set of keys on a wooden table', tag: 'Rental income', text: 'UK or overseas property. We claim allowable costs and the 20% tax credit on mortgage interest.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Company directors', img: director, alt: 'Company director reviewing figures on a laptop in a bright office', tag: 'Dividends and untaxed income', text: 'Dividends usually mean a return. We plan salary and dividends together so less of it goes in tax.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Investors & capital gains', img: investor, alt: 'Blue share price chart on a trading screen', tag: 'Shares, crypto or property sold', text: 'If you owe capital gains tax you must file. UK home sales also need a separate 60-day return.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
      { title: 'High earners with Child Benefit', img: family, alt: 'Parents and their young child laughing together at home', tag: 'Income over £60,000', text: 'The High Income Child Benefit Charge goes through self assessment unless you pay it through your tax code.' },
      { title: 'Expats & foreign income', img: expat, alt: 'Passport pages covered in colourful travel stamps', tag: 'Foreign income or non-resident', text: 'Foreign income, or UK income while living abroad. We claim treaty relief so you are not taxed twice.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Self assessment accountant fees',
    h2: 'Fixed fees for your tax return',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Simple return', for: 'Employed, with some extra income', price: '£XXX', tbc: true, items: ['Salary (P60) plus savings, dividends or one small income', 'High Income Child Benefit Charge', 'Pension and Gift Aid relief claimed'] },
      { name: 'Self-employed & landlords', for: 'Sole traders, freelancers, one or two properties', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Income and expenses prepared from your records', 'Every allowable expense and capital allowance claimed', 'Payments on account checked and reduced if income has fallen', 'Making Tax Digital set-up advice'] },
      { name: 'Complex return', for: 'Capital gains, foreign income, several properties', price: '£XXX', tbc: true, items: ['Capital gains on shares, crypto or property', 'Foreign income and double tax relief', 'Partnership income and non-resident returns'] },
    ],
    included: ['HMRC agent authorisation', 'Tax bill shown to you before filing', 'Filing and HMRC confirmation', 'Payment reminders', 'HMRC letters about the return answered'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Deadlines and penalties (tables) ----------
  deadlines: {
    eyebrow: 'Deadlines & penalties',
    h2: 'Self assessment deadlines and HMRC penalties',
    intro: 'Dates for the 2025-26 tax year (6 April 2025 to 5 April 2026).',
    dates: {
      caption: 'Self assessment deadlines for 2025-26',
      head: ['What', 'Deadline'],
      rows: [
        ['Register for self assessment (first return)', '5 October 2026'],
        ['Paper tax return', '31 October 2026'],
        ['Online return, if you want tax under £3,000 collected through your tax code', '30 December 2026'],
        ['Online tax return', '31 January 2027'],
        ['Pay the tax you owe, plus the first payment on account for 2026-27', '31 January 2027'],
        ['Second payment on account for 2026-27', '31 July 2027'],
      ],
    },
    penalties: {
      caption: 'Late filing penalties',
      head: ['How late', 'Penalty'],
      rows: [
        ['1 day', '£100, even if no tax is due'],
        ['3 months', '£10 a day, up to £900'],
        ['6 months', '5% of the tax due or £300, whichever is more'],
        ['12 months', 'Another 5% or £300, whichever is more'],
      ],
      after: 'Paying late costs 5% of the unpaid tax at 30 days, 6 months and 12 months, plus interest on top.',
    },
    urgent: {
      title: 'Late or missed the deadline?',
      text: 'The sooner the return is filed, the less you pay. We prepare late returns, bring past years up to date and appeal penalties when you had a reasonable excuse.',
      cta: 'Get help with a late return',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our self assessment service works',
    image: consultation,
    imageAlt: 'Tax adviser going through a client’s tax return with her at a desk',
    steps: [
      { title: 'Free consultation', text: 'Tell us about your income. We confirm the work and a fixed fee in writing.' },
      { title: 'Send your documents', text: 'We send you a short checklist. Upload or email what you have.' },
      { title: 'Approve, we file', text: 'You see your tax bill first. We file with HMRC and send you the confirmation.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'UTR and National Insurance number', 'P60, P45 or P11D', 'Self-employed income and expenses',
      'Rental income, costs and mortgage interest', 'Bank interest and dividends', 'Pension contributions and Gift Aid',
      'Shares, crypto or property you sold', 'Foreign income and tax paid abroad',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'Accountant, DIY or tax app?',
    cols: ['Severin Finance', 'Doing it yourself', 'Tax return app'],
    rows: [
      ['Who prepares the return', 'Qualified accountants', 'You', 'You, with prompts'],
      ['Every allowance and expense checked', true, false, 'Partly'],
      ['Payments on account reviewed', true, false, false],
      ['Capital gains, foreign income, property', true, 'Complex', 'Often limited'],
      ['HMRC letters and enquiries handled', true, false, false],
      ['Penalty appeals', true, false, false],
      ['Price', 'Fixed fee', 'Free', 'Subscription'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against HMRC guidance. Tax rules change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Self assessment questions',
  faqs: [
    { q: 'Do I need to file a self assessment tax return?', a: 'You must file if, in the last tax year, you were self-employed and earned more than £1,000, were a partner in a business partnership, had capital gains tax to pay, had to pay the High Income Child Benefit Charge outside PAYE, or are an off-payroll worker repaying a student loan. You may also need to file for untaxed income such as rent, savings interest, dividends or foreign income.' },
    { q: 'When is the self assessment deadline for 2025-26?', a: 'Paper returns are due by 31 October 2026 and online returns by 11:59pm on 31 January 2027. The tax you owe is also due on 31 January 2027. If you want tax under £3,000 collected through your tax code, file online by 30 December 2026.' },
    { q: 'What is the penalty for a late self assessment tax return?', a: 'HMRC charges £100 as soon as the return is late. After 3 months it adds £10 a day up to £900, after 6 months 5% of the tax due or £300 (whichever is more), and after 12 months another 5% or £300. Late payment adds 5% of the unpaid tax at 30 days, 6 months and 12 months, plus interest.' },
    { q: 'How much does a self assessment accountant cost?', a: 'Our fixed fees start at £XXX for a simple return. Returns with self-employment, rental income, capital gains or foreign income cost more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'Can you file my tax return if I missed the deadline?', a: 'Yes. File as soon as possible: the £100 penalty applies straight away, and daily penalties start after 3 months. We prepare the late return, tell you what to pay and appeal the penalties if you had a reasonable excuse.' },
    { q: 'What are payments on account?', a: 'Payments on account are two advance payments towards next year’s tax, each half of last year’s bill, due by 31 January and 31 July. You do not make them if last year’s bill was under £1,000 or more than 80% of your tax was collected at source, such as through PAYE. If your income has fallen, we can ask HMRC to reduce them.' },
    { q: 'How does Making Tax Digital change self assessment?', a: 'Sole traders and landlords with qualifying income over £50,000 must use Making Tax Digital for Income Tax from 6 April 2026. The threshold falls to £30,000 from 6 April 2027 and £20,000 from 6 April 2028. You keep digital records and send quarterly updates through compatible software. We set this up for you.' },
    { q: 'Can an accountant deal with HMRC for me?', a: 'Yes. Once you authorise us as your agent, we file your return, see your HMRC records and answer HMRC’s letters and calls about your tax for you.' },
    { q: 'Do I need to live in London to use you?', a: 'No. We are based in London and work online with clients across the UK, and with UK landlords and expats living abroad.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/tax/tax-refunds/', 'Tax refunds'],
      ['/uk/tax/hmrc-tax-investigation/', 'HMRC tax investigation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
      ['/uk/leeds/', 'Leeds'],
    ] },
    { title: 'Guides', links: [
      ['/resources/self-assessment-deadlines/', 'Self assessment deadlines explained'],
      ['/resources/sole-trader-vs-limited-company/', 'Sole trader or limited company?'],
      ['/resources/pay-hmrc-in-instalments/', 'Paying HMRC in instalments'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'tax return',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Filed before the deadline'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/self-assessment-tax-returns/who-must-send-a-tax-return', 'GOV.UK: Who must send a tax return'],
    ['https://www.gov.uk/self-assessment-tax-returns/deadlines', 'GOV.UK: Self assessment deadlines'],
    ['https://www.gov.uk/self-assessment-tax-returns/penalties', 'GOV.UK: Self assessment penalties'],
    ['https://www.gov.uk/understand-self-assessment-bill/payments-on-account', 'GOV.UK: Payments on account'],
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: Making Tax Digital for Income Tax'],
  ],
};
