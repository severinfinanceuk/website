// Contractor accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK (HMRC guidance and manuals) on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/contractors/contractor-accountant-developer-two-monitors.jpg';
import tech from '../../assets/services/contractors/contractor-accountant-it-contractors-coding.jpg';
import engineering from '../../assets/services/contractors/contractor-accountant-engineers-hard-hats.jpg';
import locum from '../../assets/services/contractors/contractor-accountant-locum-doctor-scrubs.jpg';
import cis from '../../assets/services/contractors/contractor-accountant-carpenter-workshop.jpg';
import interim from '../../assets/services/contractors/contractor-accountant-interim-managers-table.jpg';
import review from '../../assets/services/contractors/contractor-accountant-ir35-contract-review.jpg';
import signing from '../../assets/services/contractors/contractor-accountant-signing-contract.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/accounting/contractor-accountant/',
  primaryKeyword: 'contractor accountant',
  secondaryKeywords: [
    'IR35 accountant', 'umbrella vs limited company', 'limited company contractor',
    'off-payroll working', 'flat rate VAT scheme', 'dividend tax rates',
    'CIS tax accountant', 'contractor payroll services',
  ],
  title: 'Contractor Accountants London & UK-wide | Severin Finance',
  description: 'Contractor accountants in London and across the UK: limited company accounts, IR35 reviews, payroll, VAT and tax returns for one fixed monthly fee.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Accounting', '/uk/accounting/'],
    ['Contractor accountant', '/uk/accounting/contractor-accountant/'],
  ],
  service: {
    name: 'Contractor accounting service',
    serviceType: 'Accounting, tax and IR35 advice for limited company contractors',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Contractor accountant',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK accounting · Contractors',
    h1: 'Contractor accountants in London and across the UK',
    answer: 'Our contractor accountants run the finance side of your UK limited company for a fixed monthly fee, whether you contract in London, across the UK or from abroad: accounts, corporation tax, VAT, payroll and your personal tax return. We review your contracts for IR35, plan salary and dividends, and claim allowed expenses.',
    image: hero,
    imageAlt: 'Red-haired woman writing code at a desk with two monitors',
    price: { from: '£XXX', note: 'a month', tbc: true },
    deadline: { label: 'Dividend tax 2026-27', date: '10.75% / 35.75% / 39.35%', note: 'After a £500 dividend allowance' },
    cta: 'Book a free call',
    trust: [
      { text: 'Fixed monthly fee' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'IR35 contract reviews' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Rates & IR35'],
    ['how', 'How it works'],
    ['compare', 'Umbrella vs limited'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Who uses a contractor accountant?',
    intro: 'Contractors working through their own limited company, an umbrella or the Construction Industry Scheme.',
    cards: [
      { title: 'IT & tech contractors', img: tech, alt: 'Two people writing code at desks with monitors', tag: 'Developers, data, DevOps', text: 'Many tech roles go through agencies to large clients, who decide your IR35 status. We check the status determination statement against how you actually work.' },
      { title: 'Engineering & project contractors', img: engineering, alt: 'Two women in hard hats reviewing documents by a window', tag: 'Engineers, project managers', text: 'Long contracts need care. We review each new contract and keep your company’s records ready if a client or HMRC asks.' },
      { title: 'Healthcare locums', img: locum, alt: 'Person in blue scrubs with a stethoscope around their neck', tag: 'Locum doctors, nurses, AHPs', text: 'Public sector bodies always decide your IR35 status. We handle inside and outside IR35 work in the same tax return.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Construction & CIS', img: cis, alt: 'Carpenter using a power drill on a wooden frame in a workshop', tag: 'Construction Industry Scheme', text: 'Contractors deduct 20%, or 30% if you are not registered. We reclaim CIS deductions and help you apply for gross payment status.', link: ['/uk/accounting/payroll-services/', 'Payroll services'] },
      { title: 'Interim managers & consultants', img: interim, alt: 'Professionals talking around a meeting table', tag: 'Interim, consulting, freelance', text: 'Working for small private sector clients? Then your own company decides IR35 status. We assess it and keep the evidence.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Starting out: umbrella or limited?', img: review, alt: 'Two men going through papers with a pen at a table', tag: 'First contract or switching', text: 'We compare your take-home pay through an umbrella and your own company, then set up the company, VAT and payroll if it makes sense.', link: ['/uk/company-services/company-formation/', 'Company formation'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Contractor accountant fees',
    h2: 'Contractor accountant fees, fixed monthly',
    intro: 'One fixed fee, agreed upfront. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Umbrella & inside IR35', for: 'Self assessment and advice', price: '£XXX a year', tbc: true, items: ['Self assessment tax return', 'Umbrella payslip check', 'Expenses and pension advice'] },
      { name: 'Limited company', for: 'Outside IR35 contractors', price: '£XXX a month', tbc: true, featured: true, badge: 'Most chosen', items: ['Annual accounts and Company Tax Return', 'VAT returns, with a Flat Rate Scheme check', 'Director payroll and dividend paperwork', 'Your self assessment tax return', 'IR35 review for each new contract'] },
      { name: 'Limited company plus', for: 'Several contracts, CIS or a partner in the business', price: '£XXX a month', tbc: true, items: ['Everything in Limited company', 'Bookkeeping done for you', 'CIS deductions tracked and reclaimed', 'Second director or shareholder'] },
    ],
    included: ['HMRC agent authorisation', 'Cloud accounting software set-up', 'Tax deadlines tracked for you', 'Companies House confirmation statement', 'HMRC letters answered'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Rates and IR35 (tables) ----------
  deadlines: {
    eyebrow: 'Rates & IR35',
    h2: 'Contractor tax rates and IR35 rules for 2026-27',
    intro: 'Key figures for limited company contractors, and who decides your IR35 status.',
    tables: [
      {
        caption: 'Limited company contractor: key rates',
        head: ['Rule', '2026-27'],
        rows: [
          ['Corporation tax, profits £50,000 or less', '19%'],
          ['Corporation tax, profits over £250,000', '25%, with marginal relief in between'],
          ['Dividend allowance', '£500'],
          ['Dividend tax rates', '10.75% basic, 35.75% higher, 39.35% additional'],
          ['Personal allowance', '£12,570, reduced above £100,000 income'],
          ['VAT registration threshold', '£90,000 taxable turnover'],
          ['Flat Rate Scheme', 'Join at £150,000 or less; limited cost business rate 16.5%'],
        ],
      },
      {
        caption: 'Off-payroll working (IR35): who decides your status',
        head: ['Your client', 'Who decides'],
        rows: [
          ['Public sector body', 'The client'],
          ['Medium or large private or voluntary sector client', 'The client, who must give you a status determination statement'],
          ['Small private or voluntary sector client', 'Your own company'],
          ['Small company test for 2026-27', '2 or more of: turnover £10.2m or less, balance sheet £5.1m or less, 50 employees or fewer'],
          ['Small company test from 2027-28', '2 or more of: turnover £15m or less, balance sheet £7.5m or less, 50 employees or fewer'],
        ],
        after: 'Inside IR35, the fee-payer deducts income tax and employee National Insurance, and pays employer National Insurance, before paying your company.',
      },
    ],
    urgent: {
      title: 'New contract on the table?',
      text: 'Send it to us before you sign. We review the terms and working practices for IR35, check any status determination statement and show you what it means for your take-home pay.',
      cta: 'Get a contract review',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our contractor accountant service works',
    image: signing,
    imageAlt: 'Business people signing a contract at a table',
    steps: [
      { title: 'Free call', text: 'Tell us about your contracts. We compare umbrella and limited company and agree a fixed fee.' },
      { title: 'Set-up', text: 'We form or take over your company, register for VAT and PAYE, and connect your bank to accounting software.' },
      { title: 'We run it monthly', text: 'You send invoices and receipts. We run payroll, file VAT and plan dividends, then do your year-end.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Contract or schedule from the client or agency', 'Status determination statement, if issued', 'Company number and HMRC details',
      'Business bank account access', 'Invoices and timesheets', 'Receipts for business expenses',
      'Previous accounts and tax returns', 'Day rate and expected contract length',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Umbrella vs limited',
    h2: 'Limited company, umbrella or sole trader?',
    cols: ['Limited company with Severin', 'Umbrella company', 'Sole trader'],
    rows: [
      ['Who runs payroll and tax', 'Our team', 'The umbrella', 'You'],
      ['Tax on outside IR35 income', 'Corporation tax, then dividend tax', 'PAYE, as an employee', 'Income tax and Class 4 NI'],
      ['Salary and dividend planning', true, false, false],
      ['Business expenses claimed', true, 'Limited', true],
      ['Employee rights such as holiday pay', false, true, false],
      ['Admin for you', 'Low, we do it', 'Lowest', 'Medium'],
      ['Cost', 'Fixed monthly fee', 'Umbrella margin from your pay', 'Accountant fee, if you use one'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance and manuals. Tax rules change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Contractor accountant questions',
  faqs: [
    { q: 'What is IR35?', a: 'IR35, also called the off-payroll working rules, applies when you work through your own company but would be an employee if you were hired directly. If you are inside IR35, the client or agency deducts income tax and National Insurance from your fees, as if you were employed.' },
    { q: 'Who decides if my contract is inside IR35?', a: 'The client, if it is a public sector body or a medium or large business. It must give you a status determination statement with its reasons. If the client is small and in the private or voluntary sector, your own company decides.' },
    { q: 'Umbrella or limited company: which is better?', a: 'It depends on your IR35 status. Inside IR35, an umbrella is usually simpler, because most of the tax advantage of a company disappears. Outside IR35, a limited company usually leaves you more after tax, with more admin and responsibility. We compare both using your day rate.' },
    { q: 'What dividend tax will I pay in 2026-27?', a: '10.75% at the basic rate, 35.75% at the higher rate and 39.35% at the additional rate, after a £500 tax-free dividend allowance. The basic and higher rates rose by 2 percentage points from 6 April 2026.' },
    { q: 'What corporation tax does a contractor company pay?', a: '19% on profits of £50,000 or less and 25% on profits over £250,000, with marginal relief in between. The limits are shared between associated companies and reduced for short accounting periods.' },
    { q: 'Can a contractor use the Flat Rate VAT Scheme?', a: 'Yes, if your VAT taxable turnover is £150,000 or less. Many contractors spend little on goods, so they count as a limited cost business and pay 16.5% of gross turnover, which often leaves little benefit. You get 1% off in your first year of VAT registration. We check it for you.' },
    { q: 'What salary should a contractor director take?', a: 'Usually a small salary, often around the £12,570 personal allowance, with the rest taken as dividends. The right figure depends on National Insurance thresholds, your other income and your pension plans. We set it with you each tax year.' },
    { q: 'Do umbrella company rules change in 2026?', a: 'Yes. From 6 April 2026, if an umbrella company does not pay the PAYE due on your pay, the agency that holds the contract with the end client can be made to pay it. If there is no agency, the end client is liable.' },
    { q: 'Do you help construction contractors with CIS?', a: 'Yes. Contractors deduct 20% from labour payments to registered subcontractors, or 30% if you are not registered. We register you, track deductions, reclaim them through your company or tax return and help you apply for gross payment status.' },
    { q: 'How much does a contractor accountant cost?', a: 'Our limited company package starts at £XXX a month. Umbrella and inside IR35 contractors who only need a tax return pay a fixed annual fee. You get the exact fee in writing after a free call, before any work starts.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/company-services/company-formation/', 'Company formation'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/reading/', 'Reading'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/ir35-explained/', 'IR35 explained'],
      ['/resources/umbrella-vs-limited-company/', 'Umbrella vs limited company'],
      ['/resources/dividend-tax-rates/', 'Dividend tax rates 2026-27'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed monthly quote from a', em: 'contractor accountant',
    pills: ['Free first call', 'Fixed monthly fee', 'IR35 contract reviews'],
    formTitle: 'Talk to our team', button: 'Book my call',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/understanding-off-payroll-working-ir35', 'GOV.UK: Understanding off-payroll working (IR35)'],
    ['https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm10006a', 'HMRC manual ESM10006A: small company test'],
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-corporation-tax/rates-and-allowances-corporation-tax', 'GOV.UK: Corporation Tax rates and allowances'],
    ['https://www.gov.uk/vat-flat-rate-scheme/how-much-you-pay', 'GOV.UK: VAT Flat Rate Scheme'],
    ['https://www.gov.uk/government/publications/umbrella-company-market-changes-to-income-tax-rules-to-tackle-non-compliance', 'HMRC: Umbrella company PAYE changes'],
  ],
};
