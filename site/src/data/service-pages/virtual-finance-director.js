// Virtual finance director: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK (Companies House and HMRC guidance) on 13 October 2026 (sources at the bottom).
// No cost comparison with a full-time FD salary: no official source, so the compare table stays qualitative.

import { rating } from '../reviews.js';
import hero from '../../assets/services/virtual-fd/virtual-finance-director-presenting-sales-charts.jpg';
import growing from '../../assets/services/virtual-fd/virtual-finance-director-growing-business-meeting.jpg';
import startup from '../../assets/services/virtual-fd/virtual-finance-director-startup-pie-charts.jpg';
import ecommerce from '../../assets/services/virtual-fd/virtual-finance-director-retail-boutique-owner.jpg';
import hospitality from '../../assets/services/virtual-fd/virtual-finance-director-bakery-owners.jpg';
import funding from '../../assets/services/virtual-fd/virtual-finance-director-funding-review-tablet.jpg';
import overseas from '../../assets/services/virtual-fd/virtual-finance-director-overseas-director-travel.jpg';
import review from '../../assets/services/virtual-fd/virtual-finance-director-monthly-review-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/accounting/virtual-finance-director/',
  primaryKeyword: 'virtual finance director',
  secondaryKeywords: [
    'management accounts', 'monthly management accounts', 'cash flow forecasting',
    'part-time finance director', 'outsourced finance director', 'fractional CFO',
    'virtual CFO London', 'financial controller services',
  ],
  title: 'Virtual Finance Director London & UK-wide | Severin Finance',
  description: 'Virtual finance director in London and across the UK: monthly management accounts, cash flow forecasts and board reporting for a fixed monthly fee.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Accounting', '/uk/accounting/'],
    ['Virtual finance director', '/uk/accounting/virtual-finance-director/'],
  ],
  service: {
    name: 'Virtual finance director service',
    serviceType: 'Part-time finance director, management accounts and cash flow forecasting',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Virtual finance director',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK accounting · Virtual FD',
    h1: 'Virtual finance director in London and across the UK',
    answer: 'A virtual finance director gives your business senior finance support part time, for a fixed monthly fee, whether you are in London, elsewhere in the UK or abroad. Our team prepares monthly management accounts, cash flow forecasts and budgets, then meets you to explain the numbers and agree next steps.',
    image: hero,
    imageAlt: 'Woman presenting sales charts on a large screen to colleagues in a meeting room',
    price: { from: '£XXX', note: 'a month', tbc: true },
    deadline: { label: 'Companies House accounts', date: '9 months', note: 'after your year end (private companies)' },
    cta: 'Book a free call',
    trust: [
      { text: 'Fixed monthly fee' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Monthly pack and review meeting' },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Prices'],
    ['deadlines', 'Monthly pack'],
    ['how', 'How it works'],
    ['compare', 'Virtual vs full-time FD'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who uses a virtual finance director?',
    intro: 'Businesses that need senior finance input, but not a full-time finance director yet.',
    cards: [
      { title: 'Growing SMEs', img: growing, alt: 'Four colleagues with laptops talking around a meeting table', tag: 'Growing, no finance lead', text: 'You have a bookkeeper but no one turning the numbers into decisions. We add monthly reporting, KPIs and a forecast.', link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'] },
      { title: 'Start-ups raising investment', img: startup, alt: 'Three colleagues discussing pie charts printed on paper', tag: 'Seed and early stage', text: 'Investors want a model and clean numbers. We build the financial model, budget and board reporting, and support due diligence.', link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'] },
      { title: 'Retail & e-commerce', img: ecommerce, alt: 'Smiling shop owner holding a tablet in her clothing boutique', tag: 'Stock, margins and cash', text: 'Stock ties up cash. We track gross margin by channel, stock levels and cash runway so you can plan buying and promotions.' },
      { title: 'Restaurants, cafés & hospitality', img: hospitality, alt: 'Two bakers shaping bread in front of a brick oven', tag: 'Tight margins, seasonal cash', text: 'We report food and staff costs against sales every month and forecast the quieter months before they arrive.', link: ['/uk/accounting/payroll-services/', 'Payroll services'] },
      { title: 'Businesses seeking finance', img: funding, alt: 'Three business people reviewing figures on a tablet and laptop', tag: 'Loans, refinancing, investment', text: 'Lenders ask for management accounts and a cash flow forecast. We prepare them and present the numbers with you.', link: ['/uk/business-finance/business-loans/', 'Business loans'] },
      { title: 'Overseas groups with a UK company', img: overseas, alt: 'Man with a backpack and laptop reading a departures board at a station', tag: 'UK subsidiary, parent abroad', text: 'We report the UK company’s results to your group each month and keep its UK filings on time.', link: ['/cross-border/uk-company-from-abroad/', 'UK company from abroad'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Virtual finance director fees',
    h2: 'Virtual finance director fees, fixed monthly',
    intro: 'One fixed monthly fee, agreed upfront. Change the level as your business changes.',
    plans: [
      { name: 'Management accounts', for: 'Monthly figures and a short review', price: '£XXX a month', tbc: true, items: ['Monthly profit and loss, balance sheet and cash position', 'KPIs against budget and last year', 'Review call each month'] },
      { name: 'Virtual finance director', for: 'Growing businesses with a bookkeeper', price: '£XXX a month', tbc: true, featured: true, badge: 'Most chosen', items: ['Everything in Management accounts', '13-week and 12-month cash flow forecasts', 'Annual budget and rolling forecast', 'Monthly board meeting with your finance director', 'Support with lenders and your bank'] },
      { name: 'Fractional CFO', for: 'Fundraising, scale-ups and groups', price: '£XXX a month', tbc: true, items: ['Financial model for investors', 'Investor reporting and due diligence', 'Group reporting across several companies', 'Pricing, hiring and growth plans costed'] },
    ],
    included: ['Fixed monthly fee in writing', 'Works with Xero, QuickBooks or Sage', 'Your bookkeeper or ours', 'Year-end accounts from the same numbers', 'No long-term employment cost'],
    note: { text: 'Prices include or exclude VAT, and the minimum term: to confirm.', tbc: true },
  },

  // ---------- 4. Key facts (tables) ----------
  deadlines: {
    eyebrow: 'What you get',
    h2: 'Your monthly reporting pack',
    intro: 'What our virtual finance director sends you each month, and the company deadlines we keep in view.',
    tables: [
      {
        caption: 'Monthly reporting pack',
        head: ['Report', 'What it tells you'],
        rows: [
          ['Profit and loss against budget', 'Where you are ahead of or behind plan, line by line'],
          ['Balance sheet', 'What the business owns and owes, including debtors, stock and loans'],
          ['Cash flow forecast', 'Whether you can pay wages, VAT and suppliers on time'],
          ['KPI dashboard', 'Margin, overheads, debtor days and the numbers you choose'],
          ['Commentary and actions', 'What changed, why, and what we recommend next'],
        ],
      },
      {
        caption: 'Company deadlines and limits we track',
        head: ['What', 'Rule'],
        rows: [
          ['Annual accounts to Companies House (private company)', '9 months after the accounting reference date'],
          ['Corporation tax payment (profits up to £1.5m)', '9 months and 1 day after the end of the accounting period'],
          ['Company Tax Return', '12 months after the end of the accounting period'],
          ['Small company (periods from 6 April 2025)', '2 of: turnover £15m or less, balance sheet £7.5m or less, 50 employees or fewer'],
          ['Late accounts penalty (private company)', '£150 up to 1 month late, rising to £1,500 over 6 months'],
        ],
        after: 'Companies House penalties double if accounts are late two years in a row.',
      },
    ],
    urgent: {
      title: 'Cash running tight?',
      text: 'If you are not sure you can pay wages, VAT or HMRC next month, talk to us now. We build a short-term cash flow forecast, find where cash is tied up and help you plan what to say to HMRC and your bank.',
      cta: 'Talk to our team',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our virtual finance director service works',
    image: review,
    imageAlt: 'Two men and a woman talking through figures at a table',
    steps: [
      { title: 'Free call', text: 'Tell us about your business and goals. We agree the scope and a fixed monthly fee in writing.' },
      { title: 'Set-up and first review', text: 'We connect to your accounting software, tidy the books and build your budget and forecast.' },
      { title: 'Monthly pack and meeting', text: 'Each month you get your reporting pack and a meeting to agree actions.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Access to your accounting software', 'Last two years’ accounts', 'Latest management accounts, if any',
      'Bank and loan statements', 'Aged debtors and creditors', 'Payroll summary',
      'Budget or business plan, if you have one', 'Your goals for the next 12 months',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Virtual vs full-time FD',
    h2: 'Virtual finance director, full-time FD or bookkeeper?',
    cols: ['Severin Finance', 'Full-time finance director', 'Bookkeeper only'],
    rows: [
      ['Cost', 'Fixed monthly fee', 'Salary, employer NI and pension', 'Hourly or monthly fee'],
      ['Monthly management accounts', true, true, 'Sometimes'],
      ['Cash flow forecasting', true, true, false],
      ['Budgets and financial models', true, true, false],
      ['Board, lender and investor reporting', true, true, false],
      ['Scales up or down with you', true, false, true],
      ['Recruitment and notice periods', false, true, false],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Companies House and HMRC guidance. Company rules change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Virtual finance director questions',
  faqs: [
    { q: 'What does a virtual finance director do?', a: 'A virtual finance director runs your finance function part time and mostly remotely. They prepare or review monthly management accounts, build cash flow forecasts and budgets, report to the board, lenders and investors, and advise on pricing, funding and growth. They work alongside your bookkeeper, not instead of them.' },
    { q: 'How much does a virtual finance director cost?', a: 'Our virtual finance director service starts at £XXX a month. The fee depends on how often we meet, how complex your business is and whether we also keep your books. You get a fixed monthly fee in writing before we start.', tbc: true },
    { q: 'What is the difference between a virtual FD and a fractional CFO?', a: 'Very little. Both are senior finance leaders who work part time. Finance director is the usual UK title. CFO is more common with investors and start-ups. We agree the scope of the work, not the title.' },
    { q: 'What are management accounts?', a: 'Management accounts are monthly or quarterly reports on how your business is doing: profit and loss, balance sheet, cash flow and key numbers. Unlike annual accounts, they are not filed at Companies House. They are for you, your board and your lenders.' },
    { q: 'How quickly do I get my management accounts each month?', a: 'By working day X after month end, once your bookkeeping is up to date. We then meet you to go through the pack and agree actions.', tbc: true },
    { q: 'What is a cash flow forecast?', a: 'A cash flow forecast shows the cash you expect in and out each week or month, so you see a shortfall before it happens. We build a 13-week forecast for short-term cash and a 12-month forecast for planning, and update both every month.' },
    { q: 'When does a business need a finance director?', a: 'When decisions are being made without timely numbers. Common triggers are raising investment or a loan, fast growth, cash pressure, new investors on the board, or planning a sale. A part-time finance director often makes sense long before a full-time one is affordable.' },
    { q: 'Is a virtual finance director the same as an accountant?', a: 'No. An accountant mostly looks back: year-end accounts and tax returns. A virtual finance director looks forward: forecasts, budgets and decisions. Our team does both, so your year-end accounts and corporation tax return come from the same numbers.' },
    { q: 'Can a virtual finance director help me raise finance?', a: 'Yes. Lenders and investors usually ask for management accounts, a cash flow forecast and a financial model. We prepare them, check the business can afford the repayments and join meetings with you. No one can promise a lender or investor will say yes.' },
    { q: 'Do you work with companies outside London?', a: 'Yes. Our team is based in London and works online with companies across the UK and abroad, and with overseas groups that own a UK company.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/business-finance/invoice-finance/', 'Invoice finance'],
      ['/uk/company-services/business-valuation/', 'Business valuation'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/management-accounts-explained/', 'Management accounts explained'],
      ['/resources/cash-flow-forecasting/', 'Cash flow forecasting for small businesses'],
      ['/resources/when-to-hire-a-finance-director/', 'When to hire a finance director'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed monthly quote for a', em: 'virtual finance director',
    pills: ['Free first call', 'Fixed monthly fee', 'No full-time hire'],
    formTitle: 'Talk to our team', button: 'Book my call',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/government/publications/life-of-a-company-annual-requirements/life-of-a-company-part-1-accounts', 'Companies House: Life of a company, accounts'],
    ['https://www.gov.uk/government/publications/late-filing-penalties/late-filing-penalties', 'Companies House: Late filing penalties'],
    ['https://www.gov.uk/company-tax-returns', 'GOV.UK: Company Tax Returns'],
    ['https://www.gov.uk/pay-corporation-tax', 'GOV.UK: Pay your Corporation Tax bill'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-corporation-tax/rates-and-allowances-corporation-tax', 'GOV.UK: Corporation Tax rates and allowances'],
  ],
};
