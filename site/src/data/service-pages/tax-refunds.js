// Tax refunds: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 13 October 2026 (sources at the bottom). Also checked:
// gov.uk/tax-overpayments-and-underpayments (P800 letters June to March),
// gov.uk/self-assessment-tax-returns/corrections (overpayment relief: 4 years after the tax year),
// gov.uk/tax-relief-for-employees/working-at-home (no relief from 2026/27; earlier years still claimable),
// gov.uk/claim-pension-tax-refund.
// Compliance: no "maximum refund" or "guaranteed" claims (see docs/01-master-plan.md, ASA note).

import { rating } from '../reviews.js';
import hero from '../../assets/services/tax-refunds/tax-refunds-employee-checking-payslip.jpg';
import newJob from '../../assets/services/tax-refunds/new-job-emergency-tax-refund.jpg';
import leftJob from '../../assets/services/tax-refunds/left-job-overpaid-tax-refund.jpg';
import uniform from '../../assets/services/tax-refunds/uniform-work-expenses-tax-rebate.jpg';
import couple from '../../assets/services/tax-refunds/marriage-allowance-tax-refund-couple.jpg';
import selfEmployed from '../../assets/services/tax-refunds/self-employed-overpaid-tax-refund.jpg';
import pension from '../../assets/services/tax-refunds/pension-lump-sum-tax-refund.jpg';
import consultation from '../../assets/services/tax-refunds/tax-refund-accountant-consultation.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/tax-refunds/',
  primaryKeyword: 'tax refunds',
  secondaryKeywords: [
    'tax rebate', 'HMRC tax refund', 'tax refund UK', 'emergency tax refund',
    'uniform tax rebate', 'marriage allowance backdate', 'overpaid tax refund', 'prior year tax returns',
  ],
  title: 'Tax Refunds and Rebates London & UK-wide | Severin Finance',
  description: 'UK tax refunds in London and across the UK: we check if you overpaid through PAYE, emergency tax or self assessment and claim it back. Free refund check.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['Tax refunds', '/uk/tax/tax-refunds/'],
  ],
  service: {
    name: 'Tax refund service',
    serviceType: 'HMRC tax refund and rebate claims',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · Tax refunds',
    h1: 'Tax refunds and rebates in London and across the UK',
    answer: 'Tax refunds are due when you paid HMRC more than you owed, often through emergency tax, a job change, work expenses or an unclaimed allowance. Our team checks your records and makes the claim, whether you live in London or elsewhere in the UK, or have moved abroad. You can usually claim for the last 4 tax years.',
    image: hero,
    imageAlt: 'Smiling young woman checking her phone over a cup of coffee in a cafe',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Last chance for 2022/23', date: '5 April 2027', note: 'Claims for that tax year close after this date' },
    cta: 'Check my refund',
    trust: [
      { text: 'Fixed fee, not a share of your refund', tbc: true },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Refund paid by HMRC' },
    ],
  },

  jump: [
    ['who', 'Who is owed tax'],
    ['prices', 'Prices'],
    ['deadlines', 'Time limits'],
    ['how', 'How it works'],
    ['compare', 'Us, DIY or claims firm'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who needs this (photo cards) ----------
  who: {
    eyebrow: 'Who is owed tax',
    h2: 'Could you be owed a tax refund?',
    intro: 'These are the most common reasons people overpay. Not sure? We check for free.',
    cards: [
      { title: 'New job or emergency tax', img: newJob, alt: 'Smiling woman in glasses shaking hands across a desk with a new colleague', tag: 'Code ending W1, M1 or X', text: 'An emergency tax code taxes each payslip on its own. If it was never put right, we work out the overpayment.' },
      { title: 'Left a job mid-year', img: leftJob, alt: 'Smiling woman carrying a box of her belongings and a plant out of an office', tag: 'Stopped work or left the UK', text: 'Leave part-way through the year and you may not use your full Personal Allowance. We claim back the excess.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
      { title: 'Uniform & work expenses', img: uniform, alt: 'Construction worker in hi-vis vest and hard hat cutting steel on a building site', tag: 'Tax rebate on job costs', text: 'Cleaning or replacing a uniform, tools, professional fees and work mileage can all bring a tax rebate.' },
      { title: 'Married couples', img: couple, alt: 'Smiling couple cooking together at home in a bright kitchen', tag: 'Marriage Allowance', text: 'Transfer £1,260 of allowance to a basic rate partner and save up to £252 a year, backdated to 2022/23.' },
      { title: 'Self-employed & landlords', img: selfEmployed, alt: 'Plumber in a red T-shirt fixing the pipes under a kitchen sink', tag: 'Overpaid self assessment', text: 'Payments on account too high, or a mistake on an old return? We amend it or claim overpayment relief.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Pension lump sums', img: pension, alt: 'Smiling retired couple sitting together on a sofa in a bright living room', tag: 'Flexible pension withdrawal', text: 'A first pension withdrawal is often taxed as if it were paid every month. We help you claim the excess back.' },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Tax refund fees',
    h2: 'Tax refund fees, agreed upfront',
    intro: 'You know the price before we start. HMRC pays the refund to you.',
    plans: [
      { name: 'Refund check', for: 'One tax year, PAYE only', price: '£XXX', tbc: true, items: ['Payslips, P60 and tax code checked', 'Overpayment worked out', 'Claim made or HMRC letter explained'] },
      { name: 'Multi-year claim', for: 'Up to 4 past years', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Every open tax year reviewed', 'Work expenses and Marriage Allowance claimed', 'Tax code corrected for this year', 'HMRC follow-up until the claim is settled'] },
      { name: 'Self assessment refund', for: 'Self-employed, landlords, pension lump sums', price: '£XXX', tbc: true, items: ['Returns amended or overpayment relief claimed', 'Payments on account reduced', 'Pension and foreign income refunds'] },
    ],
    included: ['Free first check', 'HMRC agent authorisation', 'Refund paid straight to you by HMRC', 'Tax code checked for the current year', 'HMRC letters answered'],
    note: { text: 'Prices include or exclude VAT: to confirm. Fee model (fixed fee or share of the refund, and any fee if no refund is due): to confirm.', tbc: true },
  },

  // ---------- 4. Time limits (tables) ----------
  deadlines: {
    eyebrow: 'Time limits',
    h2: 'How far back can you claim a tax refund?',
    intro: 'Most claims can go back 4 tax years. After that, the money is lost.',
    tables: [
      {
        caption: 'Tax refund claim deadlines',
        head: ['Tax year', 'Last day to claim'],
        rows: [
          ['2022/23', '5 April 2027'],
          ['2023/24', '5 April 2028'],
          ['2024/25', '5 April 2029'],
          ['2025/26', '5 April 2030'],
        ],
        after: 'Applies to overpaid PAYE, work expenses and overpayment relief on self assessment. Marriage Allowance can be backdated to 6 April 2022.',
      },
      {
        caption: 'Common refunds and allowances',
        head: ['Reason', 'Key fact'],
        rows: [
          ['Emergency tax code', 'Ends in W1, M1 or X. HMRC usually updates it within 35 days'],
          ['Marriage Allowance', '£1,260 transferred, up to £252 a year off your partner’s tax'],
          ['Uniform, tools and work clothing', 'Cleaning, repair or replacement, not the first purchase'],
          ['Working from home', 'No relief from 2026/27; earlier years can still be claimed'],
          ['P800 tax calculation', 'Sent by HMRC between June and March after the tax year'],
        ],
      },
    ],
    urgent: {
      title: 'Overpaid in 2022/23? Claim by 5 April 2027',
      text: 'After that date the refund for that year cannot be claimed. Send us your payslips or P60s and we check every open year at once.',
      cta: 'Check my refund',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our tax refund service works',
    image: consultation,
    imageAlt: 'Accountant showing a client a document on a clipboard across an office desk',
    steps: [
      { title: 'Free check', text: 'Tell us what changed: job, tax code, expenses or pension. We tell you if a claim is worth making.' },
      { title: 'Send your documents', text: 'We send a short checklist. Upload payslips, P60s or HMRC letters.' },
      { title: 'We claim, HMRC pays', text: 'We make the claim as your agent. HMRC pays the refund to you, not to us.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'National Insurance number', 'P60, P45 or payslips', 'Tax code notices and P800 letters',
      'Receipts for work expenses', 'Your partner’s details (Marriage Allowance)', 'Pension withdrawal statements',
      'Self assessment returns, if you file', 'Date you left the UK, if you did',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us, DIY or claims firm',
    h2: 'Accountant, DIY or claims company?',
    cols: ['Severin Finance', 'Claiming yourself', 'Refund claims company'],
    rows: [
      ['Cost', 'Fee agreed upfront', 'Free on GOV.UK', 'Often a share of the refund'],
      ['Who gets paid by HMRC', 'You', 'You', 'Check the contract'],
      ['Every open year checked', true, 'If you know how', 'Varies'],
      ['Tax code fixed for this year', true, true, 'Varies'],
      ['Self assessment and pension refunds', true, 'Complex', 'Often limited'],
      ['HMRC letters handled', true, false, 'Varies'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance on GOV.UK. Refund rules and time limits change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Tax refund questions',
  faqs: [
    { q: 'How do I know if I am due a tax refund?', a: 'Check your tax code and payslips. You may be owed money if you were on an emergency tax code, left a job part-way through the year, paid for work expenses yourself, took a pension lump sum or overpaid through self assessment. HMRC may also send a P800 tax calculation between June and March after the tax year.' },
    { q: 'How far back can I claim a tax refund?', a: '4 years. You can usually claim for the current tax year and the 4 before it. Today that means back to 2022/23, and claims for that year close on 5 April 2027.' },
    { q: 'What is an emergency tax code?', a: 'A code ending in W1, M1 or X. It taxes each payslip on its own, without the rest of the year. You often get one when you start a new job without a P45. HMRC usually updates it within 35 days. If you overpaid, you can claim a refund.' },
    { q: 'Can I claim a tax rebate for my uniform?', a: 'Yes, if you clean, repair or replace a uniform or specialist clothing yourself. You cannot claim for the first purchase. Many jobs have an agreed flat rate expense. You can claim for the current tax year and the 4 years before.' },
    { q: 'Can I backdate Marriage Allowance?', a: 'Yes, back to 6 April 2022. You can transfer £1,260 of your Personal Allowance to a husband, wife or civil partner who pays basic rate tax. It cuts their tax by up to £252 a year. Your income must usually be under £12,570.' },
    { q: 'Can I still claim tax relief for working from home?', a: 'Not for 2026/27. Employees cannot claim working from home relief for the tax year that started on 6 April 2026. You can still claim for the 4 previous tax years if you had to work from home.' },
    { q: 'Do I need a company to claim a tax refund?', a: 'No. You can claim directly from HMRC on GOV.UK for free. Some repayment agents charge a share of the refund, in some cases up to 50%, according to HMRC. If you use one, check the fee and the contract first. We agree our fee in writing before we start.' },
    { q: 'Is a tax refund text or email from HMRC genuine?', a: 'Be careful. HMRC says it never tells you about a tax rebate by text message or on social media, and only emails about one from an address ending in hmrc.gov.uk. Forward suspicious emails to phishing@hmrc.gov.uk and texts to 60599.' },
    { q: 'How much do you charge for a tax refund claim?', a: 'Our fixed fees start at £XXX for a one-year check. Claims covering several years, self assessment or pension refunds cost more. You get the exact fee in writing after a free check, before any work starts.', tbc: true },
    { q: 'How long does an HMRC tax refund take?', a: 'It depends on the claim. HMRC sets its own processing times and shows them in its online tool for checking when you can expect a reply. We chase HMRC for you while the claim is open.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/hmrc-tax-investigation/', 'HMRC tax investigation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/stratford/', 'Stratford'],
      ['/uk/london/croydon/', 'Croydon'],
      ['/uk/london/camden/', 'Camden'],
      ['/uk/birmingham/', 'Birmingham'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/emergency-tax-code/', 'Emergency tax codes explained'],
      ['/resources/marriage-allowance/', 'Marriage Allowance: how to backdate'],
      ['/resources/hmrc-refund-scams/', 'How to spot an HMRC refund scam'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Check if you are owed a', em: 'tax refund',
    pills: ['Free first check', 'Fee agreed in writing', 'Refund paid to you by HMRC'],
    formTitle: 'Get your free refund check', button: 'Check my refund',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/claim-tax-refund', 'GOV.UK: Claim a tax refund'],
    ['https://www.gov.uk/tax-codes/emergency-tax-codes', 'GOV.UK: Emergency tax codes'],
    ['https://www.gov.uk/tax-relief-for-employees/uniforms-work-clothing-and-tools', 'GOV.UK: Tax relief for uniforms, work clothing and tools'],
    ['https://www.gov.uk/marriage-allowance', 'GOV.UK: Marriage Allowance'],
    ['https://www.gov.uk/government/news/dont-miss-out-on-a-tax-refund-for-work-expenses-hmrc-urges', 'GOV.UK: HMRC on claiming directly and repayment agents'],
    ['https://www.gov.uk/government/organisations/hm-revenue-customs/contact/reporting-fraudulent-emails', 'GOV.UK: Report HMRC phishing emails and texts'],
  ],
};
