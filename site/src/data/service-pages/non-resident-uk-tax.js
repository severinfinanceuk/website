// Non-resident UK tax: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK (RDR3 Statutory Residence Test, Non-Resident Landlord Scheme, NRL1,
// non-resident CGT, CGT rates, personal allowance, HS278 2026, P85) on 13 October 2026.

import { rating } from '../reviews.js';
import hero from '../../assets/services/non-resident/non-resident-uk-tax-woman-departure-board.jpg';
import landlord from '../../assets/services/non-resident/non-resident-landlord-london-mansion-blocks.jpg';
import seller from '../../assets/services/non-resident/non-resident-cgt-london-townhouse.jpg';
import leaving from '../../assets/services/non-resident/non-resident-uk-tax-moving-boxes.jpg';
import worker from '../../assets/services/non-resident/non-resident-uk-tax-expat-working-laptop.jpg';
import returning from '../../assets/services/non-resident/non-resident-uk-tax-returning-suitcase.jpg';
import retirees from '../../assets/services/non-resident/non-resident-uk-tax-retired-couple-beach.jpg';
import consultation from '../../assets/services/non-resident/non-resident-uk-tax-team-meeting-notes.jpg';

export default {
  // ---------- SEO ----------
  url: '/cross-border/non-resident-uk-tax/',
  primaryKeyword: 'non-resident UK tax',
  secondaryKeywords: [
    'non resident tax return', 'non-resident tax return UK', 'non-resident landlord scheme',
    'NRL1', 'non-resident capital gains tax UK property', 'statutory residence test',
    'split year treatment', 'personal allowance non-resident', 'temporary non-residence',
  ],
  title: 'Non-Resident UK Tax Return Accountants | Severin Finance',
  description: 'Non-resident UK tax returns: UK rent, property sales, pensions and the year you leave, filed for you from abroad. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['Cross-border', '/cross-border/'],
    ['Non-resident UK tax', '/cross-border/non-resident-uk-tax/'],
  ],
  service: {
    name: 'Non-resident UK tax return service',
    serviceType: 'UK tax returns and residence advice for non-residents',
    areaServed: [
      ['Country', 'United Kingdom'], ['Country', 'France'], ['Country', 'United Arab Emirates'],
      ['Country', 'United States'], ['Country', 'Canada'], ['Country', 'Australia'],
    ],
  },
  formTopic: 'Non-resident UK tax',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Cross-border · Non-residents',
    h1: 'Non-resident UK tax accountants',
    answer: 'Our non-resident UK tax accountants file your UK tax return while you live abroad, covering rent, property sales, pensions and the year you leave. We check your status under the Statutory Residence Test, deal with the Non-Resident Landlord Scheme and report UK property sales to HMRC within 60 days.',
    image: hero,
    imageAlt: 'Woman smiling on the phone next to a departures board at an airport terminal',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Next deadline', date: '31 January 2027', note: 'Online return and tax due for 2025/26' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Fixed fee agreed before we start' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients in France, the UAE, the US, Canada and Australia' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Deadlines & residence test'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Do you need a non-resident UK tax return?',
    intro: 'Living abroad does not end your UK tax. If any of these apply, you probably still deal with HMRC.',
    cards: [
      { title: 'Non-resident landlords', img: landlord, alt: 'Street of red-brick mansion blocks with cars parked outside in London', tag: 'UK rent, living abroad', text: 'Your agent or tenant deducts basic rate tax unless HMRC approves you. We apply on form NRL1 so rent is paid gross, then file your return.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Selling UK property', img: seller, alt: 'White stucco London townhouse with black railings and a black front door', tag: '60-day return', text: 'Every UK property sale by a non-resident must be reported within 60 days of completion, even with no tax due. We work out the gain and file.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
      { title: 'Leaving the UK this year', img: leaving, alt: 'Woman packing cardboard moving boxes in her living room', tag: 'Split-year treatment', text: 'We check whether you qualify for split-year treatment, so only the UK part of the year is taxed as a resident, and tell HMRC you have left.' },
      { title: 'Working full-time abroad', img: worker, alt: 'Woman in a blue jumper working on a laptop at a desk', tag: 'Full-time work overseas', text: 'Work full-time abroad for a whole tax year, with fewer than 91 days in the UK and no more than 30 UK working days, and you are usually non-resident.' },
      { title: 'Coming back to the UK', img: returning, alt: 'Woman walking with a grey suitcase across a station concourse', tag: 'Temporary non-residence', text: 'Back within 5 years? Gains and some income received while away can be taxed in the year you return. We plan the timing with you.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Retirees living abroad', img: retirees, alt: 'Older couple sitting on a bench looking out over a beach at sunset', tag: 'UK pensions and allowance', text: 'British and EEA citizens can usually keep the UK personal allowance. We claim it, and treaty relief on your pensions.', link: ['/cross-border/uk-france-tax/', 'UK France tax'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Non-resident tax return fees',
    h2: 'Fixed fees for non-resident UK tax',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Non-resident return', for: 'UK pension, savings or one small income', price: '£XXX', tbc: true, items: ['Residence status checked (SRT)', 'Personal allowance claimed if you qualify', 'Treaty relief claimed'] },
      { name: 'Non-resident landlord', for: 'One or more UK properties let while you live abroad', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['NRL1 application to receive rent gross', 'Rental accounts with every allowable cost', 'Tax deducted by your agent credited', 'Non-resident tax return filed'] },
      { name: 'Property sale', for: 'Selling UK property while non-resident', price: '£XXX', tbc: true, items: ['Gain worked out with every allowable cost', '60-day return filed and tax calculated', 'Gain carried to your annual return'] },
    ],
    included: ['HMRC agent authorisation', 'Tax bill shown to you before filing', 'Filing and HMRC confirmation', 'Payment reminders', 'HMRC letters answered'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Deadlines and the residence test (tables) ----------
  deadlines: {
    eyebrow: 'Deadlines & residence test',
    h2: 'Non-resident UK tax deadlines and the residence test',
    intro: 'Dates for the 2025/26 tax year (6 April 2025 to 5 April 2026), plus the day counts HMRC uses.',
    tables: [
      {
        caption: 'Non-resident deadlines',
        head: ['What', 'Deadline'],
        rows: [
          ['Report and pay tax on UK property sold', 'Within 60 days of completion'],
          ['Letting agent’s annual NRL return and your NRL6 tax certificate', '5 July'],
          ['Paper tax return for 2025/26', '31 October 2026'],
          ['Online tax return and tax due for 2025/26', '31 January 2027'],
        ],
        after: 'Late 60-day returns and late annual returns both lead to penalties and interest.',
      },
      {
        caption: 'Statutory Residence Test: days in the UK',
        head: ['Days in the UK in the tax year', 'Result'],
        rows: [
          ['Fewer than 16', 'Non-resident'],
          ['Fewer than 46, and not UK resident in any of the last 3 tax years', 'Non-resident'],
          ['Full-time work abroad, under 91 days and no more than 30 UK working days', 'Non-resident'],
          ['183 or more', 'UK resident'],
          ['16 to 45 (if UK resident in any of the last 3 years)', 'Resident with 4 or more UK ties'],
          ['46 to 90', 'Resident with 3 or more UK ties'],
          ['91 to 120', 'Resident with 2 or more UK ties'],
          ['121 to 182', 'Resident with 1 or more UK ties'],
        ],
        after: 'The tie counts are for people who were UK resident in any of the last 3 tax years. Ties are family, accommodation, work, more than 90 days in the UK in either of the last 2 years, and spending more time in the UK than in any other country. New arrivals need more ties. A UK home can also make you resident.',
      },
    ],
    urgent: {
      title: 'Missed a 60-day return or a tax return?',
      text: 'File as soon as you can: penalties and interest grow over time. We prepare late returns, bring past years up to date and appeal penalties where you had a reasonable excuse.',
      cta: 'Get help with a late return',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our non-resident UK tax service works',
    image: consultation,
    imageAlt: 'Colleagues taking notes around a wooden meeting table',
    steps: [
      { title: 'Free consultation', text: 'We talk by video wherever you are. We confirm your residence position, the work and a fixed fee in writing.' },
      { title: 'Send your documents', text: 'We send you a short checklist. Upload what you have from any country.' },
      { title: 'Approve, we file', text: 'You see your tax bill first. We file with HMRC and send you the confirmation.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'UTR and National Insurance number', 'Date you left the UK', 'Days spent in the UK each tax year',
      'Rent, costs and mortgage interest', 'NRL6 certificate from your agent', 'Completion statements for property sold',
      'UK pension and savings statements', 'Tax paid in your new country',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'Accountant, DIY or letting agent?',
    cols: ['Severin Finance', 'Doing it yourself', 'Letting agent only'],
    rows: [
      ['Non-resident tax return filed', true, 'By post or software', false],
      ['NRL1 application to receive rent gross', true, 'You apply', false],
      ['Residence status checked (SRT)', true, false, false],
      ['60-day property return', true, 'You file', false],
      ['Personal allowance and treaty relief claimed', true, 'Complex', false],
      ['HMRC letters handled', true, false, false],
      ['Price', 'Fixed fee', 'Free', 'Agent’s fee, tax deducted from rent'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance on residence, non-resident landlords and capital gains. Rules change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Non-resident UK tax questions',
  faqs: [
    { q: 'Do non-residents have to file a UK tax return?', a: 'Usually yes, if you have UK income such as rent. Non-resident landlords must file unless HMRC tells them otherwise, even when tax is deducted from the rent. HMRC’s free online service does not take non-resident returns, so you file by post, with commercial software or through an agent like us.' },
    { q: 'How do I know if I am non-resident for UK tax?', a: 'The Statutory Residence Test decides. You are automatically non-resident with fewer than 16 days in the UK, or fewer than 46 days if you were not resident in the last 3 tax years. You are automatically resident with 183 days or more. In between, it depends on your UK ties.' },
    { q: 'What is the Non-Resident Landlord Scheme?', a: 'It is how HMRC taxes UK rent paid to landlords who live abroad for more than 6 months a year. Your letting agent, or your tenant if they pay over £100 a week and there is no agent, deducts basic rate tax from the rent and pays it to HMRC.' },
    { q: 'How do I receive UK rent without tax deducted?', a: 'Apply to HMRC on form NRL1, online or by post. Once approved, your agent or tenant pays you the rent in full. HMRC can refuse if your UK tax affairs are not up to date, and you still file a tax return each year.' },
    { q: 'Do non-residents pay capital gains tax on UK property?', a: 'Yes. You must report the sale and pay any tax within 60 days of completion, even if no tax is due or you made a loss. This covers homes and commercial property. For 2026/27 the rates are 18% within the basic rate band and 24% above it, after the £3,000 annual exempt amount.' },
    { q: 'Can non-residents claim the UK personal allowance?', a: 'Yes, if you are a British or EEA citizen, worked for the UK government during the tax year, or a tax treaty gives you the right. You claim it on your tax return, or on form R43 if you do not file one.' },
    { q: 'What is split-year treatment?', a: 'It splits the tax year you leave or arrive into a UK part and an overseas part, so foreign income after you leave is not taxed as if you were resident. You must meet one of HMRC’s set cases, for example starting full-time work abroad. It does not apply if you leave for less than a full tax year.' },
    { q: 'What is the temporary non-residence rule?', a: 'If you are non-resident for 5 years or less, and were UK resident in at least 4 of the 7 tax years before you left, some income and gains from your time away are taxed when you return. This includes capital gains, dividends from your own close company and some pension lump sums.' },
    { q: 'Do I need to tell HMRC I am leaving the UK?', a: 'Yes. If you do not normally file a tax return, send form P85 with parts 2 and 3 of your P45. If you do file, complete the residence pages (SA109) with your return instead.' },
    { q: 'How much does a non-resident tax return cost?', a: '£XXX for a simple non-resident return. Rental properties, a property sale or a year of leaving cost more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/cross-border/uk-france-tax/', 'UK France tax'],
      ['/uae/moving-to-dubai/', 'Moving to Dubai from the UK'],
      ['/us/expat-tax/', 'US expat tax'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/fr/paris/', 'Paris'],
      ['/uae/dubai/', 'Dubai'],
      ['/us/', 'United States'],
      ['/ca/', 'Canada'],
      ['/au/', 'Australia'],
    ] },
    { title: 'Guides', links: [
      ['/resources/statutory-residence-test/', 'The Statutory Residence Test explained'],
      ['/resources/non-resident-landlord-scheme/', 'The Non-Resident Landlord Scheme'],
      ['/resources/60-day-property-return/', 'The 60-day property return'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'non-resident tax return',
    pills: ['Free first consultation', 'Fixed fee in writing', 'We work with you by video'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/government/publications/rdr3-statutory-residence-test-srt/guidance-note-for-statutory-residence-test-srt-rdr3', 'GOV.UK: Statutory Residence Test (RDR3)'],
    ['https://www.gov.uk/guidance/paying-tax-on-rent-to-landlords-abroad', 'GOV.UK: Paying tax on rent to landlords abroad'],
    ['https://www.gov.uk/guidance/capital-gains-tax-for-non-residents-uk-residential-property', 'GOV.UK: Capital gains tax for non-residents'],
    ['https://www.gov.uk/tax-uk-income-live-abroad/personal-allowance', 'GOV.UK: Personal allowance if you live abroad'],
    ['https://www.gov.uk/government/publications/temporary-non-residents-and-capital-gains-tax-hs278-self-assessment-helpsheet/hs278-temporary-non-residents-and-capital-gains-tax-2026', 'GOV.UK: Temporary non-residents (HS278)'],
    ['https://www.gov.uk/tax-right-retire-abroad-return-to-uk', 'GOV.UK: Tax if you leave the UK'],
  ],
};
