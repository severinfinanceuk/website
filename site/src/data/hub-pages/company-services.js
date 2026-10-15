// Company services hub (pillar page): /uk/company-services/. Layout: src/layouts/HubPage.astro.
// Fact tables are reused from the service pages, so each figure is checked in one place.
import formation from '../service-pages/company-formation.js';
import cosec from '../service-pages/company-secretarial-services.js';
import eis from '../service-pages/eis-seis.js';

export default {
  url: '/uk/company-services/',
  section: 'company-services',
  title: 'UK Company Services: Formation to Sale | Severin Finance',
  description: 'UK company services: company formation, company secretarial, EIS and SEIS, business valuation and succession planning, from one team. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [['Home', '/'], ['United Kingdom', '/uk/'], ['Company services', '/uk/company-services/']],

  hero: {
    eyebrow: 'UK company services',
    h1: 'Company services from formation to sale',
    answer: 'We look after a UK company through its whole life. We register it with Companies House, keep its filings and statutory registers up to date, and handle EIS and SEIS tax relief when it issues shares. When the time comes, we value the business and plan a sale, buy-out or handover. Directors can live in the UK or abroad.',
  },

  services: {
    eyebrow: 'Company services',
    h2: 'Set up, run, grow and pass on',
    intro: 'Company law and tax handled together, so the paperwork and the planning never pull in different directions.',
    items: [
      { href: '/uk/company-services/company-formation/', text: 'Your limited company registered, directors verified and HMRC registrations done in the right order.' },
      { href: '/uk/company-services/company-secretarial-services/', text: 'Confirmation statements, registers, director changes and share issues filed with Companies House on time.' },
      { href: '/uk/company-services/eis-seis/', text: 'Advance assurance, compliance statements and investor certificates, so your investors get their tax relief.' },
      { href: '/uk/company-services/business-valuation/', text: 'A clear, evidence-based value for a sale, a share issue, a divorce, a dispute or an HMRC check.' },
      { href: '/uk/company-services/succession-planning/', text: 'Family handovers, management buy-outs and employee ownership trusts, planned for the lowest tax.' },
    ],
  },

  facts: {
    eyebrow: 'Fees & rules',
    h2: 'Companies House fees, deadlines and investor reliefs',
    intro: 'What a UK company pays and files, and what EIS and SEIS investors get. Checked on GOV.UK on 13 October 2026.',
    tables: [formation.deadlines.tables[0], cosec.deadlines.tables[0], eis.deadlines.tables[0]],
  },

  choose: {
    eyebrow: 'Where are you now?',
    h2: 'The right help at each stage',
    blocks: [
      { h3: 'Starting a company', html: 'Registering online with Companies House costs £100 and usually takes about a day. Every director and person with significant control must verify their identity first. Then the company registers for corporation tax within 3 months of starting to trade, and for PAYE before its first payday. Our <a href="/uk/company-services/company-formation/">company formation</a> service does it all in order.' },
      { h3: 'Running it properly', html: 'A company files a confirmation statement at least once a year, reports changes to directors, shareholders and addresses, and keeps its statutory registers. Missed filings lead to fines and, in the end, the company being struck off. Our <a href="/uk/company-services/company-secretarial-services/">company secretarial</a> team keeps the dates for you.' },
      { h3: 'Raising money', html: 'SEIS and EIS give investors income tax relief of 50% and 30%, which makes your shares easier to sell. Getting HMRC advance assurance first gives investors confidence. See our <a href="/uk/company-services/eis-seis/">EIS and SEIS</a> service.' },
      { h3: 'Selling or handing on', html: 'Start with a realistic <a href="/uk/company-services/business-valuation/">business valuation</a>. Then choose the route: a sale, a management buy-out, a family handover or an employee ownership trust. Each has a different tax result, which our <a href="/uk/company-services/succession-planning/">succession planning</a> advisers compare for you.' },
    ],
  },

  guidesTitle: 'Company guides',
  faqTitle: 'Company services questions',
  faqs: [
    { q: 'Can I set up a UK company if I live abroad?', a: 'Yes. Directors and shareholders do not need to live in the UK, and identity verification can be done from any country. The company needs a UK registered office address. See our page on running a UK company from abroad.' },
    { q: 'What is a confirmation statement?', a: 'A yearly check that the information Companies House holds about your company is correct. It is due at least every 12 months and costs £50 online.' },
    { q: 'Do directors have to verify their identity?', a: 'Yes. Since 18 November 2025, new directors and people with significant control verify their identity with Companies House, and existing directors do it with the company’s next confirmation statement.' },
    { q: 'How long does a business valuation take?', a: 'It depends on the size of the business and why you need the value. We agree the scope, the timetable and a fixed fee after a free consultation.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees', 'Companies House: Fees'],
    ['https://www.gov.uk/guidance/confirmation-statement-guidance', 'Companies House: Confirmation statement guidance'],
    ['https://www.gov.uk/guidance/verifying-your-identity-for-companies-house', 'GOV.UK: Verifying your identity for Companies House'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-tax-relief-for-investors', 'GOV.UK: Venture capital schemes, tax relief for investors'],
  ],
};
