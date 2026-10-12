// Limited company accountant: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK and Companies House guidance on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/limited-company/limited-company-accountant-director-fashion-studio.jpg';
import ownerManaged from '../../assets/services/limited-company/owner-managed-company-cafe-owners.jpg';
import newCompany from '../../assets/services/limited-company/new-limited-company-founders-documents.jpg';
import contractor from '../../assets/services/limited-company/contractor-limited-company-consultant.jpg';
import property from '../../assets/services/limited-company/property-company-spv-colourful-houses.jpg';
import dormant from '../../assets/services/limited-company/dormant-company-accounts-shop-keys.jpg';
import late from '../../assets/services/limited-company/late-company-accounts-paperwork.jpg';
import meeting from '../../assets/services/limited-company/limited-company-accountant-meeting-london.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/accounting/limited-company-accountant/',
  primaryKeyword: 'limited company accountant',
  secondaryKeywords: [
    'accountant for limited company', 'limited company accounts', 'annual accounts Companies House',
    'Company Tax Return CT600', 'confirmation statement filing', 'dormant company accounts',
    'how to pay yourself from a limited company', 'accountant fees for limited company',
  ],
  title: 'Limited Company Accountant London & France | Severin Finance',
  description: 'Limited company accountants for London and France: annual accounts, Company Tax Return, confirmation statement and dividend planning. Fixed fee.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Accounting', '/uk/accounting/'],
    ['Limited company accountant', '/uk/accounting/limited-company-accountant/'],
  ],
  service: {
    name: 'Limited company accounting service',
    serviceType: 'Limited company annual accounts and Company Tax Return',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London'], ['Country', 'France']],
  },
  formTopic: 'Limited company accounts',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK accounting · Limited companies',
    h1: 'Limited company accountants for London and France',
    answer: 'Our limited company accountants prepare your annual accounts, file them at Companies House and send your Company Tax Return to HMRC for a fixed fee. We work with UK companies run from London, across the UK and from France, and plan directors’ salary and dividends. Accounts are due 9 months after your year end.',
    image: hero,
    imageAlt: 'Company director in a denim shirt on the phone at her laptop in a fashion studio',
    price: { from: '£XXX', note: 'a month, fixed fee', tbc: true },
    deadline: { label: 'Year end 31 March 2026?', date: '31 December 2026', note: 'Annual accounts due at Companies House' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Accounts and tax return in one fixed fee' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Companies House and HMRC filing' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Deadlines & penalties'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Accounts for every kind of company',
    intro: 'Every limited company files accounts, a tax return and a confirmation statement each year. We do all three.',
    cards: [
      { title: 'Owner-managed companies', img: ownerManaged, alt: 'Two café owners in aprons smiling behind their counter', tag: 'Directors who own the company', text: 'We prepare your accounts and tax return together, and plan salary and dividends so you know what you can take out.' },
      { title: 'New companies', img: newCompany, alt: 'Four founders reviewing documents together at a wooden table', tag: 'First accounts due at 21 months', text: 'We set up your records from day one, check your first accounting period and file your first accounts on time.', link: ['/uk/company-services/company-formation/', 'Company formation'] },
      { title: 'Contractors & consultants', img: contractor, alt: 'Consultant in a suit working on his laptop with a coffee', tag: 'One-person limited companies', text: 'Simple accounts for a company with one director and a few clients, plus your expenses and director’s tax return.', link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'] },
      { title: 'Property companies', img: property, alt: 'Row of colourful terraced houses on a London street', tag: 'Buy-to-let and SPV companies', text: 'Rent, mortgage interest, property costs and directors’ loans set out clearly in your company accounts.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Dormant companies', img: dormant, alt: 'Smiling shop owner holding a set of keys in his shop', tag: 'Not trading yet', text: 'A dormant company still files accounts and a confirmation statement every year. We prepare and file both.' },
      { title: 'Late accounts or switching', img: late, alt: 'Tall stacks of paper documents on a desk', tag: 'Overdue or unhappy with your accountant', text: 'We bring overdue accounts and tax returns up to date, then keep you on track from the next year end.', link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Fixed fees',
    h2: 'Limited company accountant fees',
    intro: 'A fixed monthly fee, agreed before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Dormant & micro', for: 'Dormant companies and very small companies', price: '£XXX a month', tbc: true, items: ['Dormant or micro-entity accounts filed at Companies House', 'Company Tax Return (CT600) if one is due', 'Confirmation statement filed'] },
      { name: 'Owner-managed company', for: 'Directors and small teams', price: '£XXX a month', tbc: true, featured: true, badge: 'Most chosen', items: ['Annual accounts and Company Tax Return (CT600)', 'Salary and dividend plan for each director', 'Director’s self assessment tax return', 'Confirmation statement filed', 'Year-end tax planning meeting'] },
      { name: 'Growing company', for: 'Staff, VAT and monthly figures', price: '£XXX a month', tbc: true, items: ['Everything in the owner-managed package', 'Monthly bookkeeping in Xero or QuickBooks', 'VAT returns under Making Tax Digital', 'Payroll for your team'] },
    ],
    included: ['HMRC and Companies House authorisation', 'Corporation Tax bill shown to you before filing', 'Deadline reminders', 'HMRC letters about the company answered', 'Free first consultation'],
    note: { text: 'Prices include or exclude VAT: to confirm.', tbc: true },
  },

  // ---------- 4. Deadlines and penalties (tables) ----------
  deadlines: {
    eyebrow: 'Deadlines & penalties',
    h2: 'Limited company deadlines and penalties',
    intro: 'Every limited company has the same yearly deadlines, counted from its own year end. Checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'Limited company deadlines',
        head: ['What', 'Deadline'],
        rows: [
          ['First annual accounts to Companies House', '21 months after the company was registered'],
          ['Annual accounts after that', '9 months after the financial year end'],
          ['Pay Corporation Tax', '9 months and 1 day after the accounting period ends'],
          ['Company Tax Return (CT600) to HMRC', '12 months after the accounting period ends'],
          ['Confirmation statement', 'At least every 12 months, within 14 days of the review period ending'],
          ['Director identity verification', 'Existing directors: with the company’s next confirmation statement'],
        ],
        after: 'Confirmation statement fee: £50 online, £110 on paper. Identity verification for directors has been a legal requirement since 18 November 2025.',
      },
      {
        caption: 'Late filing penalties',
        head: ['How late', 'Penalty'],
        rows: [
          ['Accounts to Companies House, up to 1 month', '£150'],
          ['Accounts, 1 to 3 months', '£375'],
          ['Accounts, 3 to 6 months', '£750'],
          ['Accounts, more than 6 months', '£1,500'],
          ['Company Tax Return, 1 day', '£200'],
          ['Company Tax Return, 3 months', 'Another £200'],
          ['Company Tax Return, 6 months', 'HMRC estimates your tax and adds 10% of the unpaid tax'],
          ['Company Tax Return, 12 months', 'Another 10% of the unpaid tax'],
        ],
        after: 'Companies House penalties double if accounts are late 2 years in a row. HMRC’s £200 penalties become £1,000 each if your tax return is late 3 times in a row.',
      },
    ],
    urgent: {
      title: 'Accounts overdue or a penalty letter?',
      text: 'File as soon as you can: the penalty rises the longer accounts are late. We prepare overdue accounts and tax returns, bring the company up to date and help you appeal when you had a reasonable excuse.',
      cta: 'Get help with late accounts',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our company accounts service works',
    image: meeting,
    imageAlt: 'Three people discussing company figures around a small café table',
    steps: [
      { title: 'Free consultation', text: 'Tell us about your company. We confirm the work and a fixed fee in writing.' },
      { title: 'Connect your records', text: 'You give us access to your bookkeeping and bank. We take over the HMRC and Companies House authorisations.' },
      { title: 'Approve, we file', text: 'You review the accounts and tax bill first. We file and send you the confirmations.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Company number and authentication code', 'Corporation Tax UTR', 'Bank statements for the year',
      'Sales and purchase invoices', 'Access to Xero, QuickBooks or your spreadsheets', 'Last year’s accounts and tax return',
      'Directors’ loan account details', 'Payroll and dividend records',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs DIY',
    h2: 'Accountant, DIY or accounting app?',
    cols: ['Severin Finance', 'Doing it yourself', 'Online accounting app'],
    rows: [
      ['Who prepares the accounts', 'Our accountants', 'You', 'You, with software'],
      ['Accounts and CT600 filed together', true, false, 'Partly'],
      ['Salary and dividend planning', true, false, false],
      ['Confirmation statement filed', true, 'You file it', 'Sometimes'],
      ['HMRC letters and enquiries handled', true, false, false],
      ['Deadline reminders', true, false, true],
      ['Price', 'Fixed fee', 'Your time', 'Subscription'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK and Companies House guidance. Company rules change often: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Limited company accounts questions',
  faqs: [
    { q: 'Do I need an accountant for a limited company?', a: 'No, the law does not require one. But every limited company must file annual accounts at Companies House, a Company Tax Return with HMRC and a confirmation statement each year, and the directors are responsible for getting them right. Most directors use an accountant to meet the deadlines and plan salary and dividends.' },
    { q: 'How much does a limited company accountant cost?', a: 'Our fixed fees start at £XXX a month for a dormant or very small company. Companies with staff, VAT or monthly bookkeeping cost more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'What does a limited company accountant do?', a: 'We prepare your annual accounts, file them at Companies House and send your Company Tax Return to HMRC. We also work out your Corporation Tax, plan directors’ salary and dividends, file your confirmation statement and deal with HMRC for the company.' },
    { q: 'When are limited company accounts due?', a: '9 months after your financial year end. A company’s first accounts are due 21 months after it was registered. The Company Tax Return is due 12 months after the accounting period ends, but Corporation Tax must be paid 9 months and 1 day after it ends.' },
    { q: 'What is the penalty for filing company accounts late?', a: '£150 if your accounts reach Companies House up to 1 month late, rising to £375, £750 and £1,500 after more than 6 months. The penalty doubles if accounts are late 2 years in a row. HMRC charges separate penalties for a late Company Tax Return, starting at £200.' },
    { q: 'How should I pay myself from a limited company?', a: 'Most directors take a small salary and the rest as dividends. Salary is a business cost for Corporation Tax. Dividends are paid from profit after Corporation Tax: for 2026/27 the first £500 is tax-free, then you pay 10.75%, 35.75% or 39.35% depending on your tax band. We work out the right mix each year.' },
    { q: 'Do dormant companies need to file accounts?', a: 'Yes. A dormant company must still file annual accounts and a confirmation statement with Companies House every year. Dormant accounts are short and simpler to prepare, so the fee is lower.' },
    { q: 'What is a confirmation statement?', a: 'It is a yearly check that Companies House holds the right details about your company, such as its directors, shareholders and registered office. You file it at least every 12 months, within 14 days of the end of your review period. It costs £50 online or £110 on paper.' },
    { q: 'Do directors need to verify their identity with Companies House?', a: 'Yes. Identity verification has been a legal requirement since 18 November 2025. Existing directors give their personal code when the company files its next confirmation statement. You verify through GOV.UK One Login or through an authorised agent.' },
    { q: 'Can I switch accountants part way through the year?', a: 'Yes. We contact your previous accountant for a handover, take over your HMRC and Companies House authorisations and carry on from your last filed accounts. Your deadlines stay the same.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'],
      ['/uk/company-services/company-formation/', 'Company formation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/manchester/', 'Manchester'],
      ['/fr/', 'France'],
      ['/fr/londres/', 'Français à Londres'],
    ] },
    { title: 'Guides', links: [
      ['/resources/how-to-pay-yourself-from-a-limited-company/', 'How to pay yourself from a limited company'],
      ['/resources/sole-trader-vs-limited-company/', 'Sole trader or limited company?'],
      ['/resources/limited-company-deadlines/', 'Limited company deadlines explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'company accounts',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Filed before the deadline'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/prepare-file-annual-accounts-for-limited-company', 'GOV.UK: Prepare and file annual accounts'],
    ['https://www.gov.uk/annual-accounts/penalties-for-late-filing', 'GOV.UK: Late filing penalties for company accounts'],
    ['https://www.gov.uk/company-tax-returns/penalties-for-late-filing', 'GOV.UK: Company Tax Return penalties'],
    ['https://www.gov.uk/guidance/confirmation-statement-guidance', 'Companies House: Confirmation statement guidance'],
    ['https://www.gov.uk/guidance/verify-your-identity-for-companies-house', 'Companies House: Verify your identity'],
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
  ],
};
