// Corporation tax accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/corporation-tax/corporation-tax-accountant-business-team.jpg';
import ownerManaged from '../../assets/services/corporation-tax/corporation-tax-accountant-garden-centre-owner.jpg';
import startup from '../../assets/services/corporation-tax/corporation-tax-accountant-startup-founders.jpg';
import research from '../../assets/services/corporation-tax/corporation-tax-accountant-laboratory-research.jpg';
import equipment from '../../assets/services/corporation-tax/corporation-tax-accountant-workshop-equipment.jpg';
import large from '../../assets/services/corporation-tax/corporation-tax-accountant-board-meeting.jpg';
import contractor from '../../assets/services/corporation-tax/corporation-tax-accountant-contractor-laptop.jpg';
import review from '../../assets/services/corporation-tax/corporation-tax-accountant-review-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/corporation-tax-accountant/',
  primaryKeyword: 'corporation tax accountant',
  secondaryKeywords: [
    'corporation tax return CT600', 'company tax return preparation', 'corporation tax planning',
    'corporate tax accountant', 'corporate tax services', 'corporation tax rates',
    'R&D tax credits accountant', 'R&D tax relief accountant', 'corporation tax time to pay',
  ],
  title: 'Corporation Tax Accountant London & UK | Severin Finance',
  description: 'Corporation tax accountant in London and across the UK: we prepare and file your CT600, plan your tax and claim every relief. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['Corporation tax accountant', '/uk/tax/corporation-tax-accountant/'],
  ],
  service: {
    name: 'Corporation tax return service',
    serviceType: 'Corporation tax return (CT600) preparation, filing and planning',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Corporation tax return',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · Corporation tax',
    h1: 'Corporation tax accountant in London and across the UK',
    answer: 'Our corporation tax accountants prepare your company’s CT600 and file it with HMRC for a fixed fee, for UK companies run from London, across the UK or from abroad. We work out the tax, claim capital allowances and R&D relief where they apply, and tell you what to pay. Most pay 9 months and 1 day after year end.',
    image: hero,
    imageAlt: 'Diverse business team working together around a table in a bright modern office',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Payment deadline', date: '9 months + 1 day', note: 'After your year end. The CT600 is due at 12 months.' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Fixed fee agreed before we start' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Filed with HMRC-recognised software' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Rates & deadlines'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Which companies need a corporation tax accountant?',
    intro: 'Every UK limited company pays corporation tax on its profits and files a CT600, even when it makes a loss. These are the companies we work with most.',
    cards: [
      { title: 'Owner-managed companies', img: ownerManaged, alt: 'Smiling garden centre owner holding a tablet among the plants in her greenhouse', tag: 'Profits up to £50,000: 19%', text: 'We file your accounts and CT600 together, and plan salary, dividends and pension so you keep more of the profit.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Start-ups & new companies', img: startup, alt: 'Two smiling founders looking at a laptop together', tag: 'First accounting period', text: 'We register you for corporation tax, explain your first periods and set up records so the first return is simple.', link: ['/uk/company-services/company-formation/', 'Company formation'] },
      { title: 'R&D and tech companies', img: research, alt: 'Scientist in blue gloves placing a petri dish under a laboratory microscope', tag: 'R&D tax relief', text: 'We check which projects qualify and prepare the claim under the merged scheme or enhanced support for R&D-intensive SMEs.', link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'] },
      { title: 'Companies buying equipment', img: equipment, alt: 'Craftsman measuring a metal frame in a workshop', tag: 'Full expensing and AIA', text: 'Machinery, vans and fit-outs. We claim the Annual Investment Allowance or full expensing to cut the tax bill in the year you buy.' },
      { title: 'Growing and large companies', img: large, alt: 'Colleagues around a meeting table with laptops listening to a presenter', tag: 'Profits over £1.5 million', text: 'Large companies pay in quarterly instalments. We forecast profits so each payment is right and interest is kept down.', link: ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'] },
      { title: 'Contractors & consultants', img: contractor, alt: 'Woman in a blue top typing on a laptop at a white desk', tag: 'Personal service companies', text: 'One-person companies working on contracts. We handle the CT600, expenses and the salary and dividend mix.', link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Corporation tax accountant fees',
    h2: 'Fixed fees for your company tax return',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Small company', for: 'Contractors and simple trading companies', price: '£XXX', tbc: true, items: ['CT600 prepared from your year-end accounts', 'Corporation tax computation', 'Allowable expenses and capital allowances claimed'] },
      { name: 'Accounts + CT600', for: 'Owner-managed companies', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Year-end accounts for Companies House', 'CT600 and computation filed with HMRC', 'Salary and dividend planning', 'Payment reminder before the 9-month deadline'] },
      { name: 'Complex or growing', for: 'Groups, R&D claims, large companies', price: '£XXX', tbc: true, items: ['R&D tax relief claims', 'Associated companies and Marginal Relief', 'Quarterly instalment forecasts', 'Losses and group relief'] },
    ],
    included: ['HMRC agent authorisation', 'Tax bill shown to you before filing', 'Online filing and HMRC confirmation', 'Payment reference and reminders', 'HMRC letters about the return answered'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Rates, deadlines and penalties (tables) ----------
  deadlines: {
    eyebrow: 'Rates & deadlines',
    h2: 'Corporation tax rates, deadlines and penalties',
    intro: 'Rates for the financial year starting 1 April 2026. They are the same as the three years before.',
    tables: [
      {
        caption: 'Corporation tax rates from 1 April 2026',
        head: ['Taxable profits', 'Rate'],
        rows: [
          ['£50,000 or less', '19% (small profits rate)'],
          ['Between £50,000 and £250,000', '25%, reduced by Marginal Relief'],
          ['Over £250,000', '25% (main rate)'],
        ],
        after: 'The £50,000 and £250,000 limits are divided by the number of associated companies plus one, and cut for accounting periods shorter than 12 months.',
      },
      {
        caption: 'Deadlines and late filing penalties',
        head: ['What', 'Deadline or penalty'],
        rows: [
          ['Pay corporation tax (profits up to £1.5 million)', '9 months and 1 day after the accounting period ends'],
          ['Pay corporation tax (profits over £1.5 million)', '4 quarterly instalments, the first 6 months and 13 days after the period starts'],
          ['File the CT600 company tax return', '12 months after the accounting period ends'],
          ['Return 1 day late', '£200'],
          ['Return 3 months late', 'Another £200'],
          ['Return 6 months late', '10% of the unpaid tax'],
          ['Return 12 months late', 'Another 10% of the unpaid tax'],
        ],
        after: 'Penalties shown are for returns due on or after 1 April 2026. If the return is late 3 times in a row, each £200 penalty becomes £1,000. Late payment also costs interest at the Bank of England base rate plus 4%.',
      },
    ],
    urgent: {
      title: 'Late CT600 or a bill you cannot pay?',
      text: 'The sooner the return is filed, the less it costs. We file late returns, bring past years up to date, appeal penalties when there was a reasonable excuse and can help you ask HMRC for time to pay.',
      cta: 'Get help with a late return',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our corporation tax service works',
    image: review,
    imageAlt: 'Two colleagues sitting side by side reviewing work on a laptop',
    steps: [
      { title: 'Free consultation', text: 'Tell us about your company and year end. We confirm the work and a fixed fee in writing.' },
      { title: 'Send your records', text: 'We send a short checklist. Share your bookkeeping, bank statements and invoices.' },
      { title: 'Approve, we file', text: 'You see the tax bill first. We file the CT600 and tell you what to pay and when.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Company name and Unique Taxpayer Reference', 'Year-end accounts or bookkeeping records', 'Business bank statements',
      'Sales and purchase invoices', 'Assets bought or sold in the year', 'Directors’ salaries and dividends',
      'Loans to or from directors', 'Details of any R&D projects',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'Corporation tax accountant, DIY or online-only service?',
    cols: ['Severin Finance', 'Doing it yourself', 'Online-only service'],
    rows: [
      ['Who prepares the CT600', 'Qualified accountants', 'You', 'Software, with checks'],
      ['Capital allowances and reliefs reviewed', true, false, 'Partly'],
      ['R&D tax relief claims', true, false, 'Often extra'],
      ['Salary and dividend planning', true, false, 'Limited'],
      ['Associated companies and Marginal Relief', true, 'Complex', 'Partly'],
      ['HMRC letters and enquiries handled', true, false, false],
      ['Price', 'Fixed fee', 'Free', 'Monthly subscription'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC guidance on GOV.UK. Corporation tax rules change with each Budget: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Corporation tax questions',
  faqs: [
    { q: 'What is the corporation tax rate for 2026?', a: '25% on profits over £250,000 and 19% on profits of £50,000 or less, for the financial year starting 1 April 2026. Companies with profits in between pay the main rate reduced by Marginal Relief. The limits are shared between associated companies.' },
    { q: 'When is corporation tax due?', a: '9 months and 1 day after the end of your accounting period, if your taxable profits are up to £1.5 million. Companies with profits over £1.5 million pay in 4 quarterly instalments. The CT600 return is due later, 12 months after the period ends, so you usually pay before you file.' },
    { q: 'What is the penalty for a late company tax return?', a: '£200 if it is 1 day late and another £200 at 3 months. At 6 months HMRC adds 10% of the unpaid tax, and another 10% at 12 months. These amounts apply to returns due on or after 1 April 2026. If you are late 3 times in a row, each £200 becomes £1,000.' },
    { q: 'How much does a corporation tax accountant cost?', a: 'Our fixed fees start at £XXX for a small company CT600. Fees for accounts plus the return, R&D claims or groups are higher. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'What is Marginal Relief?', a: 'Marginal Relief lowers the 25% main rate for companies with profits between £50,000 and £250,000. HMRC uses a standard fraction of 3/200. The result is a bill between 19% and 25% of profits, but each pound of profit inside the band is taxed at 26.5%.' },
    { q: 'Do I need to file a CT600 if my company made a loss?', a: 'Yes. A company must still file its return when it makes a loss or has no corporation tax to pay. Filing also records the loss, so it can be used to reduce tax in other periods.' },
    { q: 'Can my company claim R&D tax relief?', a: 'Yes, if it works on projects that seek an advance in science or technology. For periods starting on or after 1 April 2024, most companies claim the merged scheme, a 20% expenditure credit. Loss-making SMEs that are R&D intensive can claim enhanced support instead.' },
    { q: 'What is full expensing?', a: 'Full expensing lets a company deduct 100% of the cost of new, unused plant and machinery from its profits in the year of purchase. It covers spending from 1 April 2023 with no end date, but not cars. The Annual Investment Allowance also covers up to £1 million a year.' },
    { q: 'Can you deal with HMRC for my company?', a: 'Yes. Once you authorise us as your agent, we file the CT600, see your company’s HMRC records and answer HMRC letters and enquiries about the return for you.' },
    { q: 'Do you only work with London companies?', a: 'No. We are based in London and work online with limited companies across the UK, including UK companies owned or run from abroad.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      ['/uk/tax/hmrc-tax-investigation/', 'HMRC tax investigation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/cross-border/uk-company-from-abroad/', 'Run a UK company from abroad'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/corporation-tax-rates/', 'Corporation tax rates explained'],
      ['/resources/marginal-relief-calculator/', 'How Marginal Relief works'],
      ['/resources/salary-vs-dividends/', 'Salary or dividends?'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'company tax return',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Filed before the deadline'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/government/publications/rates-and-allowances-corporation-tax/rates-and-allowances-corporation-tax', 'GOV.UK: Rates and allowances for Corporation Tax'],
    ['https://www.gov.uk/company-tax-returns', 'GOV.UK: Company Tax Returns'],
    ['https://www.gov.uk/company-tax-returns/penalties-for-late-filing', 'GOV.UK: Penalties for late filing'],
    ['https://www.gov.uk/guidance/corporation-tax-paying-in-instalments', 'GOV.UK: Paying Corporation Tax in instalments'],
    ['https://www.gov.uk/capital-allowances/full-expensing', 'GOV.UK: Full expensing'],
    ['https://www.gov.uk/guidance/research-and-development-rd-tax-relief-the-merged-scheme-and-enhanced-rd-intensive-support', 'GOV.UK: R&D tax relief, merged scheme and ERIS'],
  ],
};
