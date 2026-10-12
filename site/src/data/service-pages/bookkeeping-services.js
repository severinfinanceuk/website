// Bookkeeping services: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Severin's Xero / QuickBooks partner status is not confirmed: do not claim certification until it is.
// Facts checked against GOV.UK (HMRC guidance and VAT Notice 700/22) on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/bookkeeping/bookkeeping-services-small-business-owner-laptop.jpg';
import soleTrader from '../../assets/services/bookkeeping/sole-trader-bookkeeping-tradesman.jpg';
import company from '../../assets/services/bookkeeping/limited-company-bookkeeping-fashion-business.jpg';
import ecommerce from '../../assets/services/bookkeeping/ecommerce-bookkeeping-online-seller-parcels.jpg';
import retail from '../../assets/services/bookkeeping/retail-bookkeeping-florist-shop.jpg';
import vat from '../../assets/services/bookkeeping/vat-bookkeeping-bakery-owner.jpg';
import catchUp from '../../assets/services/bookkeeping/catch-up-bookkeeping-reviewing-documents.jpg';
import review from '../../assets/services/bookkeeping/bookkeeper-client-review-cafe.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/accounting/bookkeeping-services/',
  primaryKeyword: 'bookkeeping services',
  secondaryKeywords: [
    'bookkeeping services London', 'bookkeeping services for small business', 'Xero bookkeeper',
    'QuickBooks bookkeeper', 'monthly bookkeeping services', 'catch up bookkeeping',
    'bank reconciliation services', 'how much do bookkeeping services cost',
  ],
  title: 'Bookkeeping Services London & France | Severin Finance',
  description: 'Bookkeeping services for London and France: Xero and QuickBooks books kept up to date weekly or monthly, MTD ready. Fixed monthly fee. Free quote.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Accounting', '/uk/accounting/'],
    ['Bookkeeping services', '/uk/accounting/bookkeeping-services/'],
  ],
  service: {
    name: 'Bookkeeping service',
    serviceType: 'Weekly and monthly bookkeeping in Xero and QuickBooks',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London'], ['Country', 'France']],
  },
  formTopic: 'Bookkeeping',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK accounting · Bookkeeping',
    h1: 'Bookkeeping services for London and France',
    answer: 'Our bookkeeping services keep your UK business records up to date in Xero or QuickBooks every week or month, for a fixed fee. We work with owners in London, across the UK and in France. We reconcile your bank, record sales and costs, and keep you ready for VAT returns and Making Tax Digital.',
    image: hero,
    imageAlt: 'Small business owner in a red top working on her laptop at home',
    price: { from: '£XXX', note: 'a month, fixed fee', tbc: true },
    deadline: { label: 'Next MTD quarterly update', date: '7 November 2026', note: 'Quarter to 5 October, for income over £50,000' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Xero and QuickBooks bookkeeping' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Making Tax Digital ready records' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Record-keeping rules'],
    ['how', 'How it works'],
    ['compare', 'Bookkeeper vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Bookkeeping for small businesses',
    intro: 'Every business must keep records HMRC can check. We keep them accurate, so you can get on with the work.',
    cards: [
      { title: 'Sole traders & landlords', img: soleTrader, alt: 'Tradesman in work overalls standing in front of a colourful mural', tag: 'Making Tax Digital from April 2026', text: 'Digital records and quarterly updates for Making Tax Digital for Income Tax, kept up to date for you.', link: ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'] },
      { title: 'Limited companies', img: company, alt: 'Clothing shop owner working on her laptop among the rails', tag: 'Records for your annual accounts', text: 'Clean monthly books make year-end accounts quicker and show your profit before you take dividends.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Online sellers', img: ecommerce, alt: 'Online seller checking an order on her phone beside a parcel', tag: 'Ecommerce and marketplace sales', text: 'We match marketplace payouts, fees and refunds to your bank so your sales figures are right.' },
      { title: 'Shops, cafés & florists', img: retail, alt: 'Florist working at the counter of her flower shop', tag: 'Card takings and cash', text: 'Daily takings, card payments, supplier bills and petty cash recorded and reconciled every month.' },
      { title: 'VAT-registered businesses', img: vat, alt: 'Bakery owner smiling behind her counter of fresh bread', tag: 'Making Tax Digital for VAT', text: 'Digital records with proper digital links, and your VAT return figures checked before they are filed.', link: ['/uk/tax/vat-accountant/', 'VAT accountant'] },
      { title: 'Catch-up & clean-up', img: catchUp, alt: 'Woman in glasses reading through printed records at a desk', tag: 'Behind on your books', text: 'Months or years of missing bookkeeping brought up to date, and messy Xero or QuickBooks files put right.' },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Fixed fees',
    h2: 'Bookkeeping services pricing',
    intro: 'A fixed monthly fee set by how many transactions you have. You choose weekly or monthly bookkeeping.',
    plans: [
      { name: 'Starter', for: 'Sole traders and small companies with few transactions', price: '£XXX a month', tbc: true, items: ['Bank reconciled every month', 'Sales and costs recorded in Xero or QuickBooks', 'Receipts and invoices matched to your bank'] },
      { name: 'Monthly', for: 'Growing businesses with regular sales and bills', price: '£XXX a month', tbc: true, featured: true, badge: 'Most chosen', items: ['Everything in Starter', 'Monthly report: profit, cash and who owes you', 'VAT return figures prepared', 'Customer invoices and supplier bills tracked'] },
      { name: 'Weekly', for: 'Busy businesses with a high volume of transactions', price: '£XXX a month', tbc: true, items: ['Books updated every week', 'Several bank, card and payment accounts', 'Weekly list of who owes you and who you owe', 'Cash flow forecast'] },
    ],
    included: ['Bank feeds connected', 'Digital records for Making Tax Digital', 'Year-end handover to our accountants', 'Questions answered by email', 'Free first consultation'],
    note: { text: 'Prices include or exclude VAT: to confirm. Set-up, migration and catch-up work quoted separately: to confirm.', tbc: true },
  },

  // ---------- 4. Record-keeping rules (tables) ----------
  deadlines: {
    eyebrow: 'Rules & deadlines',
    h2: 'Record-keeping rules and MTD dates',
    intro: 'What HMRC expects from your records. Checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'How long to keep business records',
        head: ['Business', 'Rule'],
        rows: [
          ['Limited company', 'Keep records for 6 years from the end of the last company financial year they relate to'],
          ['Sole trader', 'Keep records for at least 5 years after the 31 January tax return deadline'],
          ['VAT-registered business', 'Keep digital records and file VAT returns through compatible software'],
          ['Moving data between programs (VAT)', 'Use digital links: copying and pasting does not count'],
        ],
        after: 'HMRC can fine a company £3,000, or a director can be disqualified, if the company does not keep accounting records.',
      },
      {
        caption: 'Making Tax Digital for Income Tax',
        head: ['Qualifying income', 'You must use MTD from'],
        rows: [
          ['Over £50,000 (2024/25 tax year)', '6 April 2026'],
          ['Over £30,000 (2025/26 tax year)', '6 April 2027'],
          ['Over £20,000 (2026/27 tax year)', '6 April 2028'],
          ['Quarterly updates due', '7 August, 7 November, 7 February and 7 May'],
        ],
        after: 'Quarterly updates cover the periods to 5 July, 5 October, 5 January and 5 April.',
      },
    ],
    urgent: {
      title: 'Behind on your bookkeeping?',
      text: 'Catch-up bookkeeping is the quickest way out. We bring your records up to date, reconcile every account and get you ready for your next VAT return, accounts or Making Tax Digital update.',
      cta: 'Get catch-up bookkeeping',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our bookkeeping services work',
    image: review,
    imageAlt: 'Bookkeeper going through figures on a laptop with a client at a café table',
    steps: [
      { title: 'Free consultation', text: 'Tell us how many transactions you have and the software you use. We confirm a fixed fee in writing.' },
      { title: 'Set-up or migration', text: 'We connect your bank feeds and set up or tidy your Xero or QuickBooks file.' },
      { title: 'Books kept up to date', text: 'Each week or month we record, reconcile and send you your figures.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Access to your business bank accounts', 'Xero, QuickBooks or spreadsheet login', 'Sales invoices',
      'Supplier bills and expense receipts', 'Card and payment provider statements', 'Loan and credit card statements',
      'VAT number, if registered', 'Last year’s accounts',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Bookkeeper vs DIY',
    h2: 'Outsourced, DIY or in-house?',
    cols: ['Severin Finance', 'Doing it yourself', 'In-house bookkeeper'],
    rows: [
      ['Who does the bookkeeping', 'Our bookkeeping team', 'You', 'An employee'],
      ['Bank reconciled every month', true, 'If you find time', true],
      ['Checked by accountants', true, false, 'Sometimes'],
      ['Making Tax Digital ready', true, 'Depends on you', true],
      ['Cover for holidays and sickness', true, false, false],
      ['Ready for year-end accounts', true, 'Often needs work', true],
      ['Price', 'Fixed monthly fee', 'Your time', 'Salary plus employer costs'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance on record keeping and Making Tax Digital. We update it when the rules change.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Bookkeeping questions',
  faqs: [
    { q: 'How much do bookkeeping services cost?', a: 'Our fixed fees start at £XXX a month for a business with few transactions. The fee depends on how many transactions you have and whether you want weekly or monthly bookkeeping. You get the exact fee in writing after a free consultation.', tbc: true },
    { q: 'What is the difference between a bookkeeper and an accountant?', a: 'A bookkeeper records your day-to-day transactions and reconciles your bank. An accountant uses those records to prepare your annual accounts and tax returns, and advises you. Our team does both, so your books and your accounts match.' },
    { q: 'How long do I need to keep business records?', a: '6 years for a limited company, from the end of the last company financial year they relate to. Sole traders must keep records for at least 5 years after the 31 January deadline for the tax return they relate to.' },
    { q: 'Do I need software for Making Tax Digital?', a: 'Yes. VAT-registered businesses must keep digital records and file VAT returns through compatible software. Sole traders and landlords with qualifying income over £50,000 must also use it for Income Tax from 6 April 2026. The threshold falls to £30,000 in April 2027 and £20,000 in April 2028.' },
    { q: 'Can I copy figures from a spreadsheet into my VAT software?', a: 'No. Under Making Tax Digital for VAT, data moving between programs must use digital links, and copying and pasting does not count. We set up your software so your records link up correctly.' },
    { q: 'Do you work with Xero and QuickBooks?', a: 'Yes. We keep your books in Xero or QuickBooks, set up new files and move you across from spreadsheets or other software.' },
    { q: 'What is catch-up bookkeeping?', a: 'Catch-up bookkeeping brings your records up to date when you have fallen behind. We collect your bank statements, invoices and receipts, record every transaction and reconcile each account, so your accounts, VAT return or tax return can be filed.' },
    { q: 'How often should bookkeeping be done?', a: 'At least monthly for most small businesses. Weekly suits businesses with lots of transactions or tight cash flow. Leaving it until the VAT return or year end makes mistakes harder to find and fix.' },
    { q: 'What happens if I do not keep proper records?', a: 'You can be fined. HMRC can fine a limited company £3,000 for not keeping accounting records, and its directors can be disqualified. Poor records also make it harder to claim expenses and to answer HMRC’s questions.' },
    { q: 'Do I need a bookkeeper based in London?', a: 'No. We are based in London and keep books online for UK businesses across the UK, including businesses run from France. Everything runs through your cloud software, so there is no paperwork to post.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Bookkeepers in London'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/london/islington/', 'Islington'],
      ['/uk/london/camden/', 'Camden'],
      ['/uk/leeds/', 'Leeds'],
      ['/fr/', 'France'],
      ['/fr/londres/', 'Français à Londres'],
    ] },
    { title: 'Guides', links: [
      ['/resources/accountant-vs-bookkeeper/', 'Accountant or bookkeeper?'],
      ['/resources/monthly-bookkeeping-checklist/', 'Monthly bookkeeping checklist'],
      ['/resources/making-tax-digital-for-income-tax/', 'Making Tax Digital for Income Tax explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'bookkeeping',
    pills: ['Free first consultation', 'Fixed monthly fee', 'Xero or QuickBooks'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/running-a-limited-company/company-and-accounting-records', 'GOV.UK: Company and accounting records'],
    ['https://www.gov.uk/self-employed-records/how-long-to-keep-your-records', 'GOV.UK: How long sole traders keep records'],
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: When you need Making Tax Digital for Income Tax'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates', 'GOV.UK: Send quarterly updates'],
    ['https://www.gov.uk/guidance/making-tax-digital-for-vat', 'GOV.UK: Making Tax Digital for VAT'],
    ['https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat', 'HMRC: VAT Notice 700/22'],
  ],
};
