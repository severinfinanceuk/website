// Moving to Dubai from the UK (tax): all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK (2016 UK-UAE convention, Statutory Residence Test, P85, HS278 2026)
// and u.ae / tax.gov.ae (UAE FTA) on 13 October 2026.
// UAE tax filings need an FTA-registered tax agent: written as "with a licensed partner", tbc.

import { rating } from '../reviews.js';
import hero from '../../assets/services/moving-to-dubai/moving-to-dubai-woman-marina-skyline.jpg';
import employee from '../../assets/services/moving-to-dubai/moving-to-dubai-professional-downtown.jpg';
import owner from '../../assets/services/moving-to-dubai/moving-to-dubai-business-owner-tablet.jpg';
import landlord from '../../assets/services/moving-to-dubai/moving-to-dubai-house-model-coins.jpg';
import family from '../../assets/services/moving-to-dubai/moving-to-dubai-family-luggage.jpg';
import entrepreneur from '../../assets/services/moving-to-dubai/moving-to-dubai-entrepreneur-phone.jpg';
import seller from '../../assets/services/moving-to-dubai/moving-to-dubai-retired-couple-coast.jpg';
import consultation from '../../assets/services/moving-to-dubai/moving-to-dubai-video-call-adviser.jpg';

export default {
  // ---------- SEO ----------
  url: '/uae/moving-to-dubai/',
  primaryKeyword: 'moving to Dubai from UK tax',
  secondaryKeywords: [
    'UK tax when moving to Dubai', 'UK tax non-resident Dubai', 'moving to Dubai tax',
    'UK UAE double tax treaty', 'P85 moving abroad', 'split year treatment Dubai',
    '5 year rule non-resident', 'UAE corporate tax', 'income tax in Dubai',
  ],
  title: 'Moving to Dubai from UK: Tax Advice | Severin Finance',
  description: 'Moving to Dubai from the UK? We plan your UK tax: residence test, split year, P85, UK property and the 5-year rule. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['UAE', '/uae/'],
    ['Moving to Dubai from the UK', '/uae/moving-to-dubai/'],
  ],
  service: {
    name: 'UK tax planning for moving to Dubai',
    serviceType: 'UK residence and tax planning for people relocating to the UAE',
    areaServed: [['Country', 'United Kingdom'], ['Country', 'United Arab Emirates'], ['City', 'Dubai']],
  },
  formTopic: 'Moving to Dubai from the UK',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UAE · Moving to Dubai',
    h1: 'Moving to Dubai from the UK: tax advice',
    answer: 'Moving to Dubai from the UK only ends your UK tax once you are non-resident under the Statutory Residence Test. Our team plans your move: the split year, form P85, UK property you keep and the 5-year temporary non-residence rule. In the UAE, individuals pay no income tax.',
    image: hero,
    imageAlt: 'Woman with a shoulder bag looking out at the Dubai Marina skyline across the sea',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Plan before', date: '5 April 2027', note: 'End of the 2026/27 UK tax year' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'UAE filings with an FTA-registered tax agent partner', tbc: true },
      { text: rating.short, tbc: rating.tbc },
      { text: 'UK and UAE rules checked together' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'UK and UAE rules'],
    ['how', 'How it works'],
    ['compare', 'Planned vs unplanned move'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Moving to Dubai from the UK: who needs tax advice?',
    intro: 'The UK keeps its claim on some income after you leave. These are the moves we plan most often.',
    cards: [
      { title: 'Employees relocating', img: employee, alt: 'Woman on the phone in front of glass towers in downtown Dubai', tag: 'New job in Dubai', text: 'Full-time work abroad for a whole tax year can make you non-resident from the day you leave. We check the split year and tell HMRC.' },
      { title: 'Company owners and directors', img: owner, alt: 'Man in a red and white keffiyeh using his phone and tablet at a desk', tag: 'Dividends from a UK company', text: 'Dividends from your own UK company while you are away can be taxed if you return within 5 years. We plan the timing with you.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Landlords keeping UK property', img: landlord, alt: 'Small wooden model house next to a pile of coins', tag: 'UK rent while in Dubai', text: 'UK rent stays taxable in the UK. We set you up under the Non-Resident Landlord Scheme and file your UK return.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
      { title: 'Families moving together', img: family, alt: 'Woman standing with three colourful suitcases in an airport', tag: 'Family ties', text: 'A partner or children under 18 who stay UK resident count as a UK tie. We plan visits and days so your status is clear.' },
      { title: 'Entrepreneurs setting up in the UAE', img: entrepreneur, alt: 'Man in a white ghutra and sunglasses talking on the phone outdoors', tag: 'UAE corporate tax', text: 'UAE corporate tax is 9% on taxable income over AED 375,000. If you also run a UK company from Dubai, we check where it is taxed.', link: ['/cross-border/uk-company-from-abroad/', 'UK company from abroad'] },
      { title: 'Selling UK assets', img: seller, alt: 'Older couple sitting on a bench above a sunny beach', tag: 'Shares, property or a business', text: 'Gains on UK property are taxed in the UK even after you leave. Other gains made after you leave can be taxed if you return within 5 years.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Moving to Dubai tax fees',
    h2: 'Fixed fees for your move to Dubai',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Leaving review', for: 'Employees moving for a new job', price: '£XXX', tbc: true, items: ['Statutory Residence Test checked', 'Split-year treatment reviewed', 'P85 or SA109 completed'] },
      { name: 'Move and first year', for: 'Movers who keep UK income or property', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Everything in Leaving review', 'Non-Resident Landlord Scheme set up', 'Leaving-year tax return filed', 'UK days and ties tracked with you'] },
      { name: 'Business owners', for: 'Directors and shareholders of UK companies', price: '£XXX', tbc: true, items: ['Dividend and sale timing planned', '5-year temporary non-residence rule checked', 'Where your company is managed reviewed'] },
    ],
    included: ['Fixed fee in writing', 'HMRC agent authorisation', 'Tax position shown to you before filing', 'Day-count checklist', 'HMRC letters answered'],
    note: { text: 'Prices include or exclude VAT: to confirm. UAE corporate tax and VAT filings are prepared with our FTA-registered tax agent partner: to confirm.', tbc: true },
  },

  // ---------- 4. UK and UAE rules (tables) ----------
  deadlines: {
    eyebrow: 'UK and UAE rules',
    h2: 'UK tax when moving to Dubai, and UAE taxes',
    intro: 'The UK tax year runs from 6 April to 5 April. Most UK rules depend on the tax year you leave in.',
    tables: [
      {
        caption: 'UK rules when you move to Dubai',
        head: ['What', 'UK rule'],
        rows: [
          ['Telling HMRC you have left', 'Form P85, or the residence pages (SA109) with your tax return'],
          ['Non-resident from the day you leave', 'Only with split-year treatment, for example when you start full-time work abroad'],
          ['Full-time work abroad', 'Fewer than 91 days in the UK and no more than 30 UK working days in the tax year'],
          ['UK rent', 'Still taxed in the UK, through the Non-Resident Landlord Scheme'],
          ['Selling UK property', 'Taxed in the UK. Report and pay within 60 days of completion.'],
          ['Coming back within 5 years', 'Some gains and income from your time away are taxed in the year you return'],
        ],
      },
      {
        caption: 'UAE taxes',
        head: ['Tax', 'Rate'],
        rows: [
          ['Personal income tax', 'None'],
          ['Corporate tax', '0% up to AED 375,000 of taxable income, 9% above'],
          ['Corporate tax for individuals in business', 'Only if business turnover is over AED 1 million a year. Salary, personal investments and property investment income are excluded.'],
          ['VAT', '5%. Registration required over AED 375,000 a year, optional over AED 187,500.'],
        ],
        after: 'Under the UK-UAE tax treaty, in force since 25 December 2016, UK property income and gains can still be taxed in the UK, and private pensions are taxed only where you live.',
      },
    ],
    urgent: {
      title: 'Already moved, and not sure where you stand?',
      text: 'It is not too late. We count your days and ties, check whether the split year applies and put your UK returns right with HMRC.',
      cta: 'Check my UK tax position',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we plan your UK tax when moving to Dubai',
    image: consultation,
    imageAlt: 'Laptop showing a video call with many participants next to a green mug',
    steps: [
      { title: 'Free consultation', text: 'Tell us your moving date, income and what you keep in the UK. We confirm the work and a fixed fee in writing.' },
      { title: 'Plan the move', text: 'We set out your residence position, the tax year to leave in and what to do before you go.' },
      { title: 'We tell HMRC and file', text: 'We send P85 or file your leaving-year return, and set up UK rent and property reporting.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'UTR and National Insurance number', 'Moving date and Dubai employment contract', 'Days planned in the UK each tax year',
      'P45 from your UK employer', 'UK property, rent and mortgage details', 'Shareholdings and UK company details',
      'UK pensions and savings', 'UAE residence visa, once issued',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Planned vs unplanned move',
    h2: 'Why plan your UK tax before moving to Dubai?',
    cols: ['Planned with Severin Finance', 'Moving without advice', 'Online tax guide only'],
    rows: [
      ['Residence position confirmed in writing', true, false, false],
      ['Split-year treatment checked', true, 'Easy to miss', 'General rules only'],
      ['UK property and rent set up correctly', true, 'Tax deducted at source', false],
      ['5-year rule on dividends and gains planned', true, false, 'General rules only'],
      ['HMRC told and returns filed', true, 'You do it', false],
      ['UAE side coordinated', 'With our partner', false, false],
      ['Price', 'Fixed fee', 'Free', 'Free'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance, the UK-UAE tax treaty and UAE government tax pages. Rules change in both countries: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Moving to Dubai: UK tax questions',
  faqs: [
    { q: 'Do I pay UK tax if I move to Dubai?', a: 'Only on UK income once you are non-resident. Foreign income, including your Dubai salary, is outside UK tax. UK rent and gains on UK property stay taxable in the UK, and some income and gains can be taxed if you return within 5 years.' },
    { q: 'How do I become non-resident when I move to Dubai?', a: 'You must meet the Statutory Residence Test. The usual route is full-time work abroad for a whole tax year, with fewer than 91 days in the UK and no more than 30 UK working days. Otherwise it depends on your days in the UK and your UK ties.' },
    { q: 'Is there income tax in Dubai?', a: 'No. The UAE does not tax individuals on income. Businesses pay corporate tax at 9% on taxable income over AED 375,000, and VAT is 5%.' },
    { q: 'What is the 5-year rule for UK non-residents?', a: 'If you are non-resident for 5 years or less, and were UK resident in at least 4 of the 7 tax years before you left, some gains and income from your time away are taxed when you return. This includes capital gains and dividends from your own close company.' },
    { q: 'Do I need to fill in a P85 when moving to Dubai?', a: 'Yes, if you do not normally file a tax return. Send form P85 with parts 2 and 3 of your P45. If you do file a return, complete the residence pages (SA109) instead.' },
    { q: 'What happens to my UK rental property if I move to Dubai?', a: 'The rent stays taxable in the UK. Your letting agent or tenant deducts basic rate tax unless HMRC approves you on form NRL1 to receive it gross. You still file a UK tax return each year.' },
    { q: 'Is there a double tax treaty between the UK and the UAE?', a: 'Yes. It was signed on 12 April 2016 and came into force on 25 December 2016. It decides where you are resident if both countries claim you, starting with where you have a permanent home. UK property income and gains can still be taxed in the UK.' },
    { q: 'Can I get split-year treatment when I move to Dubai?', a: 'Yes, if you meet one of HMRC’s cases, for example starting full-time work abroad. The tax year is then split, and you are taxed as non-resident from the day you leave. It does not apply if you leave for less than a full tax year.' },
    { q: 'Do freelancers in Dubai pay UAE corporate tax?', a: 'Only if business turnover is over AED 1 million in a calendar year. Salary, personal investment income and property investment income do not count towards it.' },
    { q: 'Can you file my UAE tax returns?', a: 'Yes, with our partner, an FTA-registered tax agent. Our team handles the UK side and coordinates your UAE corporate tax and VAT filings with them.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      ['/cross-border/uk-company-from-abroad/', 'UK company from abroad'],
    ] },
    { title: 'Where we work', links: [
      ['/uae/dubai/', 'Accountants in Dubai'],
      ['/uae/dubai/difc/', 'DIFC'],
      ['/uae/dubai/dmcc/', 'DMCC'],
      ['/uae/dubai/business-bay/', 'Business Bay'],
      ['/uae/abu-dhabi/', 'Abu Dhabi'],
      ['/uk/london/', 'Accountants in London'],
    ] },
    { title: 'Guides', links: [
      ['/resources/uk-tax-when-moving-abroad/', 'UK tax when moving abroad'],
      ['/resources/temporary-non-residence-5-year-rule/', 'The 5-year temporary non-residence rule'],
      ['/resources/uae-corporate-tax-explained/', 'UAE corporate tax explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote to plan your', em: 'move to Dubai',
    pills: ['Free first consultation', 'Fixed fee in writing', 'UK and UAE rules together'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/government/publications/united-arab-emirates-tax-treaties', 'GOV.UK: UK-UAE tax treaty'],
    ['https://www.gov.uk/tax-right-retire-abroad-return-to-uk', 'GOV.UK: Tax if you leave the UK'],
    ['https://www.gov.uk/government/publications/temporary-non-residents-and-capital-gains-tax-hs278-self-assessment-helpsheet/hs278-temporary-non-residents-and-capital-gains-tax-2026', 'GOV.UK: Temporary non-residents (HS278)'],
    ['https://u.ae/en/information-and-services/finance-and-investment/taxation', 'u.ae: Taxation in the UAE'],
    ['https://u.ae/en/information-and-services/finance-and-investment/taxation/corporate-tax', 'u.ae: UAE corporate tax'],
    ['https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx', 'UAE FTA: Corporate tax for individuals'],
  ],
};
