// VAT accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/vat/vat-accountant-cafe-owner-open-sign.jpg';
import threshold from '../../assets/services/vat/vat-accountant-florist-shop.jpg';
import ecommerce from '../../assets/services/vat/vat-accountant-online-seller-parcels.jpg';
import builder from '../../assets/services/vat/vat-accountant-builder-timber-frame.jpg';
import hospitality from '../../assets/services/vat/vat-accountant-restaurant-chef.jpg';
import creative from '../../assets/services/vat/vat-accountant-designer-flat-rate.jpg';
import importer from '../../assets/services/vat/vat-accountant-warehouse-importer.jpg';
import meeting from '../../assets/services/vat/vat-accountant-cafe-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/vat-accountant/',
  primaryKeyword: 'VAT accountant',
  secondaryKeywords: [
    'VAT return services', 'VAT return preparation', 'VAT return filing', 'VAT registration',
    'VAT threshold UK', 'flat rate VAT scheme', 'VAT for e-commerce', 'VAT accounting services',
    'Making Tax Digital VAT', 'VAT loan', 'VAT accountant Birmingham',
  ],
  title: 'VAT Accountant in London | Severin Finance',
  description: 'VAT accountant in London: we register you, file your VAT returns through Making Tax Digital and pick the right scheme. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['VAT accountant', '/uk/tax/vat-accountant/'],
  ],
  service: {
    name: 'VAT return and registration service',
    serviceType: 'VAT registration, VAT return preparation and filing',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'VAT returns and registration',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · VAT',
    h1: 'VAT accountant in London',
    answer: 'Our VAT accountants register your business, prepare your VAT returns and file them with HMRC through Making Tax Digital software for a fixed fee. We check you use the right rates and the right scheme. You must register once your taxable turnover goes over £90,000 in any rolling 12 months.',
    image: hero,
    imageAlt: 'Smiling café owner holding up an open sign inside her café',
    price: { from: '£XXX', note: 'a quarter', tbc: true },
    deadline: { label: 'Return and payment due', date: '1 month + 7 days', note: 'After the end of each VAT period' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Fixed fee agreed before we start' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Making Tax Digital compatible software' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Thresholds & penalties'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Who needs a VAT accountant?',
    intro: 'Any business that is VAT registered, or close to the threshold. These are the businesses we help most often.',
    cards: [
      { title: 'Businesses near the threshold', img: threshold, alt: 'Florist arranging colourful flowers in her flower shop', tag: 'Turnover close to £90,000', text: 'We track your rolling 12-month turnover, tell you when to register and plan prices so VAT does not come out of your margin.', link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'] },
      { title: 'Online sellers & e-commerce', img: ecommerce, alt: 'Hands taping up a parcel wrapped in brown paper', tag: 'VAT for e-commerce', text: 'Website, marketplace and overseas sales. We work out the VAT on each sales channel and keep the records HMRC expects.' },
      { title: 'Builders & trades', img: builder, alt: 'Builder in a hard hat hammering a timber frame against a blue sky', tag: 'Construction VAT', text: 'We check when the construction reverse charge applies, which jobs carry which rate and how CIS fits with your VAT return.', link: ['/uk/accounting/payroll-services/', 'Payroll services'] },
      { title: 'Restaurants, cafés & takeaways', img: hospitality, alt: 'Chef chopping fresh vegetables in a restaurant kitchen', tag: 'Standard, reduced and zero rates', text: 'Hot and cold food, eat-in and takeaway can carry different rates. We set up your till reports so each sale is recorded right.' },
      { title: 'Consultants & creatives', img: creative, alt: 'Designer drawing on a graphics tablet next to a laptop and colour swatches', tag: 'Flat Rate Scheme', text: 'We check whether the Flat Rate Scheme saves you money, including the 16.5% rate for limited cost businesses.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Importers & wholesalers', img: importer, alt: 'Warehouse staff in blue uniforms walking through a large storage aisle', tag: 'Imports and cash flow', text: 'We handle import VAT and check whether cash accounting would help cash flow. If a VAT bill is due before you are paid, we can help fund it.', link: ['/uk/business-finance/tax-bill-funding/', 'VAT bill funding'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'VAT accountant fees',
    h2: 'Fixed fees for VAT registration and returns',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'VAT registration', for: 'New registrations, one-off', price: '£XXX', tbc: true, items: ['Check if and when you must register', 'Scheme advice: standard, flat rate, cash or annual', 'Registration with HMRC', 'Making Tax Digital software set up'] },
      { name: 'Quarterly VAT returns', for: 'Most VAT-registered businesses, per quarter', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['VAT return prepared from your records', 'Checked before filing, with the amount to pay', 'Filed through Making Tax Digital software', 'Deadline and payment reminders'] },
      { name: 'Complex VAT', for: 'Imports, partial exemption, property, e-commerce', price: '£XXX', tbc: true, items: ['Import VAT and overseas sales', 'Partial exemption calculations', 'Errors in past returns corrected', 'VAT letters and inspections handled'] },
    ],
    included: ['HMRC agent authorisation', 'VAT due shown to you before filing', 'Making Tax Digital filing', 'Payment reminders', 'HMRC letters about your VAT answered'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Thresholds, deadlines and penalties (tables) ----------
  deadlines: {
    eyebrow: 'Thresholds & penalties',
    h2: 'VAT thresholds, rates, deadlines and penalties',
    intro: 'Current figures from HMRC. The thresholds apply to VAT taxable turnover, not total income.',
    tables: [
      {
        caption: 'VAT thresholds, rates and schemes',
        head: ['What', 'Figure'],
        rows: [
          ['Registration threshold', 'Taxable turnover over £90,000 in the last 12 months'],
          ['Expected to go over', '£90,000 in the next 30 days alone'],
          ['Deregistration threshold', 'Taxable turnover below £88,000'],
          ['Standard rate', '20%'],
          ['Reduced rate', '5%, for example home energy and children’s car seats'],
          ['Zero rate', '0%, for example most food and children’s clothes'],
          ['Flat Rate Scheme', 'Join at £150,000 or less, leave over £230,000'],
          ['Cash and Annual Accounting Schemes', 'Join at £1.35 million or less, leave over £1.6 million'],
        ],
        after: 'Flat Rate Scheme: joining is based on turnover excluding VAT, leaving on turnover including VAT. Limited cost businesses pay a flat rate of 16.5%.',
      },
      {
        caption: 'VAT deadlines and penalties',
        head: ['What', 'Deadline or penalty'],
        rows: [
          ['Register for VAT', '30 days after the end of the month you went over £90,000'],
          ['VAT return and payment', '1 calendar month and 7 days after the period ends'],
          ['Each late return', '1 penalty point'],
          ['Points threshold', '2 for annual, 4 for quarterly, 5 for monthly returns'],
          ['At the threshold', '£200, plus £200 for each late return after that'],
          ['Payment up to 15 days late', 'No penalty if you pay or agree a payment plan'],
          ['Payment 16 to 30 days late', '3% of the VAT owed at day 15'],
          ['Payment 31 days or more late', '3% at day 15, 3% at day 30, then 10% a year daily'],
        ],
        after: 'Late payment penalty rates shown apply to VAT periods starting on or after 1 April 2025. HMRC also charges late payment interest at the Bank of England base rate plus 4%.',
      },
    ],
    urgent: {
      title: 'Registered late or behind on VAT returns?',
      text: 'Late registration means VAT is owed on past sales. We work out what is due, file overdue returns, appeal penalties when you had a reasonable excuse and can help you ask HMRC for time to pay.',
      cta: 'Get help with late VAT',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our VAT accountant service works',
    image: meeting,
    imageAlt: 'Woman and two men discussing paperwork over coffee at a café table',
    steps: [
      { title: 'Free consultation', text: 'Tell us about your sales and costs. We confirm the scheme, the work and a fixed fee in writing.' },
      { title: 'Connect your records', text: 'We link your bookkeeping software or set it up, so records stay digital.' },
      { title: 'Approve, we file', text: 'You see the VAT due first. We file through Making Tax Digital and remind you to pay.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'VAT registration number (if registered)', 'Sales invoices and till reports', 'Purchase invoices and receipts',
      'Business bank statements', 'Import documents', 'Marketplace and payment platform reports',
      'Bookkeeping software login', 'HMRC letters about VAT',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'VAT accountant, DIY or bookkeeping app?',
    cols: ['Severin Finance', 'Doing it yourself', 'Bookkeeping app alone'],
    rows: [
      ['Who prepares the return', 'Qualified accountants', 'You', 'You, from app data'],
      ['VAT rate on each sale checked', true, false, false],
      ['Scheme choice reviewed', true, false, false],
      ['Making Tax Digital filing', true, 'With software', true],
      ['Imports, property, partial exemption', true, 'Complex', 'Limited'],
      ['HMRC letters and inspections handled', true, false, false],
      ['Price', 'Fixed fee', 'Free', 'Monthly subscription'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance on GOV.UK. VAT thresholds and penalties change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'VAT questions',
  faqs: [
    { q: 'What is the VAT threshold in the UK?', a: '£90,000. You must register if your VAT taxable turnover for the last 12 months goes over £90,000, or if you expect it to go over £90,000 in the next 30 days alone. You can register voluntarily below the threshold.' },
    { q: 'How long do I have to register for VAT?', a: '30 days from the end of the month in which you went over the threshold. Your registration starts on the first day of the second month after you went over. For example, if you went over on 15 July, register by 30 August and you are registered from 1 September.' },
    { q: 'When are VAT returns due?', a: '1 calendar month and 7 days after the end of the VAT period, for most businesses. The VAT you owe is due by the same date. On the Annual Accounting Scheme you file one return a year, due 2 months after your accounting period ends.' },
    { q: 'What happens if I submit a VAT return late?', a: 'You get a penalty point. When you reach the threshold (2 points for annual, 4 for quarterly and 5 for monthly returns), HMRC charges £200, and another £200 for each late return after that. Paying late adds separate penalties and interest.' },
    { q: 'How much does a VAT accountant cost?', a: 'Our fixed fee for quarterly VAT returns starts at £XXX a quarter, and VAT registration starts at £XXX. Imports, property or partial exemption cost more. You get the exact fee in writing after a free consultation.', tbc: true },
    { q: 'Is the Flat Rate Scheme worth it?', a: 'Sometimes. You pay a fixed percentage of your VAT-inclusive turnover, set by your type of business, with a 1% discount in your first year. You usually cannot reclaim VAT on purchases, and limited cost businesses pay 16.5%. We compare both methods before you join.' },
    { q: 'Do I need Making Tax Digital for VAT?', a: 'Yes. All VAT-registered businesses must keep digital records and file VAT returns through compatible software, whatever their turnover. HMRC signs new registrations up automatically. We set up the software and file for you.' },
    { q: 'What are the VAT rates in the UK?', a: '20% for most goods and services. Some things have a 5% reduced rate, such as home energy and children’s car seats, and some are zero-rated at 0%, such as most food and children’s clothes. Some items are exempt from VAT altogether.' },
    { q: 'Can I deregister for VAT?', a: 'Yes, if your VAT taxable turnover falls below £88,000 you can ask HMRC to cancel your registration. You must cancel within 30 days if you are no longer eligible, for example because you stop trading.' },
    { q: 'Can you deal with HMRC about my VAT?', a: 'Yes. Once you authorise us as your agent, we file your VAT returns, see your VAT account and answer HMRC letters, checks and inspections for you.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/business-finance/tax-bill-funding/', 'VAT loan'],
      ['/uk/tax/hmrc-tax-investigation/', 'HMRC tax investigation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/birmingham/', 'VAT accountant Birmingham'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/vat-registration/', 'VAT registration explained'],
      ['/resources/flat-rate-vat-scheme/', 'Flat rate VAT scheme guide'],
      ['/resources/vat-penalties/', 'VAT penalty points explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'VAT returns',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Filed through Making Tax Digital'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/register-for-vat', 'GOV.UK: Register for VAT'],
    ['https://www.gov.uk/vat-rates', 'GOV.UK: VAT rates'],
    ['https://www.gov.uk/submit-vat-return', 'GOV.UK: Submit a VAT return'],
    ['https://www.gov.uk/vat-flat-rate-scheme', 'GOV.UK: VAT Flat Rate Scheme'],
    ['https://www.gov.uk/guidance/penalty-points-and-penalties-if-you-submit-your-vat-return-late', 'GOV.UK: VAT late submission penalties'],
    ['https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late', 'GOV.UK: VAT late payment penalties'],
  ],
};
