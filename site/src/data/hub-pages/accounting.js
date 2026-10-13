// Accounting hub (pillar page): /uk/accounting/. Layout: src/layouts/HubPage.astro.
// Fact tables are reused from the service pages, so each figure is checked in one place.
import lc from '../service-pages/limited-company-accountant.js';
import payroll from '../service-pages/payroll-services.js';
import books from '../service-pages/bookkeeping-services.js';

export default {
  url: '/uk/accounting/',
  section: 'accounting',
  title: 'Accountants for UK Businesses & Landlords | Severin Finance',
  description: 'Accounting for UK limited companies, sole traders, contractors and landlords: accounts, bookkeeping, payroll and virtual FD. Fixed fees. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [['Home', '/'], ['United Kingdom', '/uk/'], ['Accounting', '/uk/accounting/']],

  hero: {
    eyebrow: 'UK accounting',
    h1: 'Accounting services for UK businesses',
    answer: 'Our accounting services cover everything a UK business has to keep and file: year-end accounts for limited companies, monthly bookkeeping, payroll, management accounts and a virtual finance director. We also run specialist accounts for contractors and landlords. One London team works with clients across the UK and abroad, for a fixed fee agreed in writing.',
  },

  services: {
    eyebrow: 'Accounting services',
    h2: 'What we do for your business',
    intro: 'Pick one service or let us run the whole finance side. Every service is done in-house by the same team.',
    items: [
      { href: '/uk/accounting/limited-company-accountant/', text: 'Year-end accounts for Companies House, the CT600 tax return and director pay planned for the lowest tax.' },
      { href: '/uk/accounting/bookkeeping-services/', text: 'Your books kept up to date in Xero or QuickBooks every week or month, ready for VAT and Making Tax Digital.' },
      { href: '/uk/accounting/payroll-services/', text: 'Payslips, RTI filings, pensions auto-enrolment and P60s, run on time every payday.' },
      { href: '/uk/accounting/virtual-finance-director/', text: 'Monthly management accounts, cash flow forecasts and a finance director for the meetings that matter.' },
      { href: '/uk/accounting/landlord-accountant/', text: 'Rental accounts, Section 24, Making Tax Digital and buy-to-let companies, for one flat or a portfolio.' },
      { href: '/uk/accounting/contractor-accountant/', text: 'Limited company accounts for contractors and freelancers, with IR35 reviews and salary and dividend planning.' },
    ],
  },

  facts: {
    eyebrow: 'Rules & deadlines',
    h2: 'Company, payroll and record-keeping rules',
    intro: 'The dates and figures every UK business owner should know. Checked on GOV.UK on 13 October 2026.',
    tables: [lc.deadlines.tables[0], payroll.deadlines.tables[0], books.deadlines.tables[0]],
  },

  choose: {
    eyebrow: 'Which service do you need?',
    h2: 'How to choose the right accounting help',
    blocks: [
      { h3: 'Accountant or bookkeeper?', html: 'A bookkeeper records what happens every day: sales, bills, bank payments and receipts. An accountant uses those records to prepare your year-end accounts and tax returns, and advises on how to pay less tax within the rules. Most small businesses need both. We offer <a href="/uk/accounting/bookkeeping-services/">bookkeeping</a> on its own, or bookkeeping and <a href="/uk/accounting/limited-company-accountant/">year-end accounts</a> together from one team.' },
      { h3: 'Limited company, sole trader or landlord?', html: 'A limited company files annual accounts with Companies House, a Company Tax Return with HMRC and a confirmation statement every year. Sole traders and landlords file a self assessment tax return instead, and from April 2026 those with qualifying income over £50,000 must also keep digital records and send quarterly updates under Making Tax Digital. See our <a href="/uk/tax/self-assessment-accountant/">self assessment</a> and <a href="/uk/accounting/landlord-accountant/">landlord</a> services.' },
      { h3: 'When does a virtual finance director make sense?', html: 'When you need more than compliance: monthly figures you can act on, a cash flow forecast, a budget, or a lender or investor asking for numbers. A <a href="/uk/accounting/virtual-finance-director/">virtual finance director</a> gives you that for a set number of days a month, without the cost of a full-time hire.' },
      { h3: 'Contractors and IR35', html: 'If you work through your own company, your client usually decides whether IR35 applies when it is a medium or large business, and you decide when it is small. We review your contracts and working practices and run your company accounts. See our <a href="/uk/accounting/contractor-accountant/">contractor accountant</a> page.' },
    ],
  },

  guidesTitle: 'Accounting guides',
  faqTitle: 'Accounting questions',
  faqs: [
    { q: 'How much does an accountant cost for a small business?', a: 'It depends on the work: a sole trader with simple books costs less than a VAT-registered company with staff. We agree a fixed fee in writing after a free consultation, before any work starts.' },
    { q: 'Can you take over from my current accountant?', a: 'Yes. We contact your current accountant for a professional handover of your records and deadlines, so nothing is missed in the change.' },
    { q: 'Do I need to be in London?', a: 'No. We are based in London and work online with businesses across the UK, and with owners who live abroad. Most clients never need to visit the office.' },
    { q: 'Which accounting software do you use?', a: 'We work in Xero and QuickBooks, and can work with the software you already use.' },
    { q: 'Does my company need an audit?', a: 'Usually not. A small company is normally exempt from audit. For years starting on or after 6 April 2025, a company is small if it meets 2 of these: turnover of £15 million or less, a balance sheet of £7.5 million or less, and 50 employees or fewer. Some companies need an audit anyway, for example if shareholders ask for one.' },
  ],

  sources: [
    ['https://www.gov.uk/prepare-file-annual-accounts-for-limited-company', 'GOV.UK: Prepare and file annual accounts'],
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/running-a-limited-company/company-and-accounting-records', 'GOV.UK: Company and accounting records'],
    ['https://www.gov.uk/audit-exemptions-for-private-limited-companies', 'GOV.UK: Audit exemptions for private limited companies'],
  ],
};
