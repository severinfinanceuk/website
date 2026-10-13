// Capital gains tax accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 13 October 2026 (sources at the bottom). Also checked:
// gov.uk/business-asset-disposal-relief/how-to-claim (£1m lifetime limit, claim deadlines),
// gov.uk/capital-gains-tax/what-you-pay-it-on, gov.uk/tax-sell-home/absence-from-home (final 9 months),
// gov.uk/guidance/reporting-cryptoasset-user-and-transaction-data (CARF, from 1 January 2026).

import { rating } from '../reviews.js';
import hero from '../../assets/services/capital-gains-tax/capital-gains-tax-accountant-property-sale.jpg';
import landlord from '../../assets/services/capital-gains-tax/landlord-second-home-sale-cgt.jpg';
import homeowner from '../../assets/services/capital-gains-tax/homeowner-private-residence-relief.jpg';
import shares from '../../assets/services/capital-gains-tax/shares-investor-capital-gains.jpg';
import crypto from '../../assets/services/capital-gains-tax/crypto-capital-gains-tax.jpg';
import business from '../../assets/services/capital-gains-tax/business-owner-sale-badr.jpg';
import nonResident from '../../assets/services/capital-gains-tax/non-resident-uk-property-cgt.jpg';
import consultation from '../../assets/services/capital-gains-tax/cgt-adviser-consultation.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/capital-gains-tax-accountant/',
  primaryKeyword: 'capital gains tax accountant',
  secondaryKeywords: [
    'CGT on property sale', 'capital gains tax accountant London', '60 day capital gains tax return',
    'crypto tax accountant', 'Business Asset Disposal Relief', 'private residence relief',
    'capital gains tax rates 2026-27', 'non-resident capital gains tax',
  ],
  title: 'Capital Gains Tax Accountants London & UK | Severin Finance',
  description: 'Capital gains tax accountants in London and across the UK: we work out your CGT on property, shares, crypto or a business sale and report it to HMRC.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['Capital gains tax accountant', '/uk/tax/capital-gains-tax-accountant/'],
  ],
  service: {
    name: 'Capital gains tax service',
    serviceType: 'Capital gains tax calculation, planning and reporting',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · Capital gains tax',
    h1: 'Capital gains tax accountants in London and across the UK',
    answer: 'Our capital gains tax accountants work out what you owe when you sell property, shares, crypto or a business, claim every relief and report the gain to HMRC, whether you live in London, elsewhere in the UK or abroad. For 2026-27, gains above the £3,000 allowance are taxed at 18% or 24%.',
    image: hero,
    imageAlt: 'Excited couple reading a letter together in a bright blue kitchen at home',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Sold a UK home?', date: '60 days', note: 'From completion to report and pay the tax' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Fixed fee agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: '60-day property returns filed for you' },
    ],
  },

  jump: [
    ['who', 'Who pays CGT'],
    ['prices', 'Prices'],
    ['deadlines', 'Rates & deadlines'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who needs this (photo cards) ----------
  who: {
    eyebrow: 'Who pays capital gains tax',
    h2: 'Do you need a capital gains tax accountant?',
    intro: 'CGT is due when you sell or give away something that has gone up in value. These are the sales we see most.',
    cards: [
      { title: 'Landlords & second homes', img: landlord, alt: 'Hand holding a set of house keys inside the hallway of a bright home', tag: 'Buy-to-let or holiday home sold', text: 'We work out the gain, deduct your costs and file the 60-day return so the tax is paid on time.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Homeowners', img: homeowner, alt: 'Smiling couple sitting on the floor among moving boxes in their home', tag: 'Private residence relief', text: 'Your main home is usually tax-free. Letting it out, a business room or grounds over 5,000 m² can change that. We check.' },
      { title: 'Share & fund investors', img: shares, alt: 'Investor checking share price charts on a phone and laptop in a cafe', tag: 'Shares outside an ISA', text: 'We match each sale to the right purchase cost, use your £3,000 allowance and report the gain.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Crypto investors', img: crypto, alt: 'Hand holding a phone showing live cryptocurrency prices including Bitcoin', tag: 'Sold, swapped or spent crypto', text: 'Swapping one token for another is a disposal too. We rebuild your pooled costs from exchange records.' },
      { title: 'Business owners selling up', img: business, alt: 'Butcher standing with folded arms in the doorway of his own shop', tag: 'Business Asset Disposal Relief', text: 'BADR taxes qualifying gains at 18% from 6 April 2026, up to £1 million over your lifetime. We check you qualify before you sell.', link: ['/uk/company-services/succession-planning/', 'Succession planning'] },
      { title: 'Non-residents', img: nonResident, alt: 'Quiet cobbled London mews lined with brick and white painted houses', tag: 'Living abroad, selling in the UK', text: 'You must report every sale of UK property or land within 60 days, even if no tax is due.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Capital gains tax accountant fees',
    h2: 'Fixed fees for your CGT',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Shares & funds', for: 'A few share or fund sales in one tax year', price: '£XXX', tbc: true, items: ['Gains worked out sale by sale', 'Annual allowance and any losses used', 'Gains added to your self assessment return'] },
      { name: 'Property sale', for: 'A second home, buy-to-let or part-let home', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Gain worked out from your completion statements', 'Buying, selling and improvement costs deducted', 'Private residence relief checked', '60-day UK property return filed'] },
      { name: 'Complex gains', for: 'Crypto, a business sale or non-residents', price: '£XXX', tbc: true, items: ['Crypto pooled costs rebuilt from exchange records', 'Business Asset Disposal Relief claim', 'Non-resident property returns and treaty relief'] },
    ],
    included: ['HMRC agent authorisation', 'Tax bill shown to you before filing', 'Filing and HMRC confirmation', 'Payment reference and reminders', 'HMRC letters about the gain answered'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Rates and deadlines (tables) ----------
  deadlines: {
    eyebrow: 'Rates & deadlines',
    h2: 'Capital gains tax rates and deadlines',
    intro: 'Figures for the 2026-27 tax year (6 April 2026 to 5 April 2027).',
    tables: [
      {
        caption: 'Capital gains tax rates and allowance 2026-27',
        head: ['What', '2026-27'],
        rows: [
          ['Tax-free allowance (annual exempt amount)', '£3,000 (most trusts: £1,500)'],
          ['Gains within your basic rate band', '18%'],
          ['Gains above your basic rate band', '24%'],
          ['Trustees and personal representatives', '24%'],
          ['Business Asset Disposal Relief', '18% (14% in 2025-26), up to £1 million lifetime'],
        ],
        after: 'The same rates apply to property, shares and crypto. Gifts to a spouse, civil partner or charity are usually tax-free.',
      },
      {
        caption: 'When to report and pay',
        head: ['What you sold', 'Deadline'],
        rows: [
          ['UK residential property, with tax to pay (UK resident)', 'Report and pay within 60 days of completion'],
          ['Any UK property or land (non-resident)', 'Report within 60 days, even if no tax is due'],
          ['Other gains, real time CGT service', '31 December after the tax year'],
          ['Other gains in 2025-26, self assessment', '31 January 2027'],
          ['Business Asset Disposal Relief claim, 2025-26 sales', '31 January 2028'],
        ],
        after: 'Report or pay late and HMRC can charge interest and a penalty.',
      },
    ],
    urgent: {
      title: 'Sold a property in the last 60 days?',
      text: 'The clock started on completion day. Send us the completion statement and we work out the gain, file the return and give you the payment reference.',
      cta: 'Get help with a 60-day return',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our capital gains tax service works',
    image: consultation,
    imageAlt: 'Adviser and client talking across a table with a laptop, notes and coffee',
    steps: [
      { title: 'Free consultation', text: 'Tell us what you sold or plan to sell. We confirm the work and a fixed fee in writing.' },
      { title: 'Send your records', text: 'We send a short checklist. Upload completion statements, broker or exchange reports.' },
      { title: 'Approve, we file', text: 'You see the gain and the tax first. We file with HMRC and send you the confirmation.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'UTR and National Insurance number', 'Purchase and sale completion statements', 'Receipts for improvement works',
      'Dates you lived in or let the property', 'Broker contract notes or annual statements', 'Crypto exchange and wallet transaction history',
      'Details of the business or shares sold', 'Where you lived in each tax year',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'Accountant, DIY or online calculator?',
    cols: ['Severin Finance', 'Doing it yourself', 'Online CGT calculator'],
    rows: [
      ['Who works out the gain', 'Qualified accountants', 'You', 'You, with prompts'],
      ['Reliefs checked (home, BADR, spouse transfers)', true, false, 'Partly'],
      ['60-day property return filed', true, 'You file', false],
      ['Crypto pooled costs rebuilt', true, 'Complex', 'Often limited'],
      ['Planning before you sell', true, false, false],
      ['HMRC letters and enquiries handled', true, false, false],
      ['Price', 'Fixed fee', 'Free', 'Free or subscription'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance on GOV.UK. CGT rates and reliefs change often: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Capital gains tax questions',
  faqs: [
    { q: 'What are the capital gains tax rates for 2026-27?', a: '18% or 24%. Gains that fall within your basic rate Income Tax band are taxed at 18%, and the rest at 24%. Trustees and personal representatives pay 24%. The same rates apply to property, shares and crypto.' },
    { q: 'What is the capital gains tax allowance?', a: '£3,000 a year for individuals and £1,500 for most trusts. You only pay CGT on gains above it. An unused allowance cannot be carried forward to the next year.' },
    { q: 'Do I pay capital gains tax when I sell my home?', a: 'Usually not. Private residence relief makes the sale tax-free if it was your only or main home for the whole time you owned it, you did not let part of it out or use part only for business, and the grounds are under 5,000 square metres. The last 9 months of ownership always qualify if it was your main home at some point.' },
    { q: 'How long do I have to report capital gains tax on a property sale?', a: '60 days from completion. UK residents must report and pay within 60 days when they sell UK residential property with tax to pay. Non-residents must report every sale of UK property or land within 60 days, even if no tax is due.' },
    { q: 'Do I pay capital gains tax on crypto?', a: 'Yes, when you dispose of it and your total gains are above the £3,000 allowance. Selling, swapping one token for another, paying for goods with crypto and giving it away all count. Gifts to a spouse, civil partner or charity are exempt. Each token type sits in a pool with an average cost.' },
    { q: 'What is the Business Asset Disposal Relief rate from April 2026?', a: '18%. Qualifying gains on sales from 6 April 2026 are taxed at 18%, up from 14% in 2025-26. The relief covers up to £1 million of gains over your lifetime. You usually need to have owned the business, or at least 5% of a trading company where you work, for 2 years before the sale.' },
    { q: 'Do I need to file a self assessment return for capital gains?', a: 'Yes, if you have capital gains tax to pay and do not use HMRC’s real time CGT service. The real time service lets you report by 31 December after the tax year. UK property sales also need the separate 60-day return.' },
    { q: 'How can I reduce capital gains tax legally?', a: 'Use the £3,000 allowance each year, hold shares in an ISA, and check reliefs before you sell. Transfers to a spouse or civil partner are usually tax-free, so couples can use two allowances and two basic rate bands. Business owners may qualify for Business Asset Disposal Relief.' },
    { q: 'How much does a capital gains tax accountant cost?', a: 'Our fixed fees start at £XXX for a few share sales. A property sale with a 60-day return, crypto or a business sale costs more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'Can you help if I live abroad?', a: 'Yes. We file non-resident capital gains tax returns for UK property and land, wherever you live now.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/company-services/business-valuation/', 'Business valuation'],
      ['/uk/tax/hmrc-tax-investigation/', 'HMRC tax investigation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/kensington/', 'Kensington'],
      ['/uk/london/richmond/', 'Richmond'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/capital-gains-tax-on-property/', 'Capital gains tax on property'],
      ['/resources/crypto-tax-uk/', 'Crypto tax in the UK'],
      ['/resources/business-asset-disposal-relief/', 'Business Asset Disposal Relief explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'capital gains tax',
    pills: ['Free first consultation', 'Fixed fee in writing', '60-day deadline met'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/capital-gains-tax/rates', 'GOV.UK: Capital Gains Tax rates'],
    ['https://www.gov.uk/capital-gains-tax/allowances', 'GOV.UK: Capital Gains Tax allowances'],
    ['https://www.gov.uk/report-and-pay-your-capital-gains-tax/if-you-sold-a-property-in-the-uk-on-or-after-6-april-2020', 'GOV.UK: Report and pay CGT on UK property'],
    ['https://www.gov.uk/business-asset-disposal-relief', 'GOV.UK: Business Asset Disposal Relief'],
    ['https://www.gov.uk/tax-sell-home', 'GOV.UK: Tax when you sell your home'],
    ['https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-sell-cryptoassets', 'GOV.UK: Tax when you sell cryptoassets'],
  ],
};
