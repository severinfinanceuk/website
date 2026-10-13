// Succession planning and management buy-outs: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Severin has not yet confirmed the scope of this service (e.g. whether it runs full MBO
// transactions or advises alongside the client's solicitors): keep claims modest.
// Facts checked against GOV.UK, HMRC helpsheet HS277 and legislation.gov.uk on 13 October 2026
// (sources at the bottom). EOT trustee rules and the EOT bonus exemption are left out on purpose.

import { rating } from '../reviews.js';
import hero from '../../assets/services/succession-planning/succession-planning-potter-and-apprentice-workshop.jpg';
import family from '../../assets/services/succession-planning/family-business-succession-three-generations-pottery.jpg';
import mbo from '../../assets/services/succession-planning/management-buy-out-team-meeting.jpg';
import retiring from '../../assets/services/succession-planning/retiring-shareholder-business-owner-workshop.jpg';
import eot from '../../assets/services/succession-planning/employee-ownership-trust-staff-team.jpg';
import sale from '../../assets/services/succession-planning/business-sale-exit-handshake-deal.jpg';
import planning from '../../assets/services/succession-planning/exit-planning-business-owner-notebook-laptop.jpg';
import advisers from '../../assets/services/succession-planning/succession-planning-advisers-reviewing-documents.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/company-services/succession-planning/',
  primaryKeyword: 'succession planning',
  secondaryKeywords: [
    'management buy-out', 'business succession planning', 'MBO accountant', 'exit planning',
    'company purchase of own shares', 'employee ownership trust', 'business asset disposal relief', 'family business succession',
  ],
  title: 'Succession Planning & Management Buy-Outs | Severin Finance',
  description: 'Succession planning and management buy-outs in London and across the UK. Exit routes, share buy-backs, EOTs and the tax on each, planned early.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Company services', '/uk/company-services/'],
    ['Succession planning', '/uk/company-services/succession-planning/'],
  ],
  service: {
    name: 'Business succession planning and management buy-out service',
    serviceType: 'Succession planning and management buy-outs',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Succession planning',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Company services · Succession planning',
    h1: 'Succession planning and management buy-outs in London and across the UK',
    answer: 'Succession planning decides who takes over your company and how you get paid for it: a family member, your managers through a management buy-out, an employee ownership trust or an outside buyer. We compare each route, its tax and its funding for UK company owners in London, across the UK and abroad.',
    image: hero,
    imageAlt: 'Older potter with a white beard working alongside a young woman at a pottery wheel in a workshop lined with ceramics',
    price: { from: '£XXX', note: 'fixed fee for a succession plan', tbc: true },
    deadline: { label: 'BADR rate on qualifying gains', date: '18%', note: 'From 6 April 2026' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Every exit route compared' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'We work alongside your solicitor' },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Prices'],
    ['deadlines', 'Exit routes & tax'],
    ['how', 'How it works'],
    ['compare', 'Exit routes compared'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who needs succession planning?',
    intro: 'Any owner who will one day step back. These are the situations we see most.',
    cards: [
      { title: 'Family businesses', img: family, alt: 'Grandfather, son and young grandson working together at a table of clay pots in the family pottery', tag: 'Passing to the next generation', text: 'Hand shares to your children in stages, and plan for inheritance tax under the Business Relief cap.', link: ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'] },
      { title: 'Management buy-outs', img: mbo, alt: 'Management team in a bright meeting room, one colleague standing at the head of the table', tag: 'MBO', text: 'Your managers buy the company. We model the price, the funding and the tax for you and for them.', link: ['/uk/business-finance/business-loans/', 'Business loans'] },
      { title: 'Retiring shareholders', img: retiring, alt: 'Smiling older business owner with glasses and grey beard in a checked shirt standing in his workshop', tag: 'Company buys back shares', text: 'The company can buy your shares back. We check whether the payment can be taxed as a capital gain.' },
      { title: 'Employee ownership', img: eot, alt: 'Four smiling staff members standing together in their office in front of a chalkboard wall', tag: 'Employee ownership trust', text: 'Sell a controlling stake to a trust for your staff. We explain the relief, which changed in November 2025.' },
      { title: 'Selling to a buyer', img: sale, alt: 'Two business people shaking hands across a desk with a clipboard and laptop', tag: 'Trade sale', text: 'Know what your company is worth and get its accounts in shape before buyers look closely.', link: ['/uk/company-services/business-valuation/', 'Business valuation'] },
      { title: 'Owners planning their exit', img: planning, alt: 'Business owner in a suit making notes beside his laptop while on a phone call', tag: '2 to 5 years out', text: 'Many reliefs need 2 years of ownership. Starting early keeps more routes open and lowers the tax.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Succession planning fees',
    h2: 'Fixed fees for succession planning',
    intro: 'You know the price before we start. Deal work is quoted once we know the route.',
    plans: [
      { name: 'Exit options review', for: 'Owners thinking ahead', price: '£XXX', tbc: true, items: ['Each exit route explained', 'Tax on each route estimated', 'Short written summary'] },
      { name: 'Succession plan', for: 'Owners ready to choose a route', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Business valuation', 'Routes compared side by side', 'Reliefs checked: BADR, Business Relief', 'Timeline for you and your successors', 'Meeting with your family or managers'] },
      { name: 'Transaction support', for: 'MBOs, buy-backs and EOT sales', price: '£XXX', tbc: true, items: ['Funding and cash flow model', 'HMRC clearance application', 'Work with your solicitor to completion'] },
    ],
    included: ['Free first consultation', 'Fixed fee agreed upfront', 'Plain-English advice', 'Confidential handling', 'Tax estimate for each route'],
    note: { text: 'Prices, VAT, and whether we act as lead adviser on a full MBO or EOT transaction: to confirm.', tbc: true },
  },

  // ---------- 4. Exit routes and tax (tables) ----------
  deadlines: {
    eyebrow: 'Exit routes & tax',
    h2: 'Succession planning: exit routes and the tax rules',
    intro: 'Rates and reliefs checked on GOV.UK on 13 October 2026. Several changed in 2025 and 2026.',
    tables: [
      {
        caption: 'Key reliefs for owners passing on a company',
        head: ['Relief', 'Rule now'],
        rows: [
          ['Business Asset Disposal Relief rate', '18% on disposals from 6 April 2026 (14% in 2025-26)'],
          ['BADR lifetime limit', '£1 million of qualifying gains'],
          ['BADR conditions', 'Officer or employee with at least 5% of shares and votes, for 2 years before the sale'],
          ['Employee ownership trust sale', 'From 26 November 2025, 50% of the gain is relieved and 50% is taxed'],
          ['Business Relief (inheritance tax)', '100% on the first £2.5 million of business and agricultural property, 50% above it, for deaths from 6 April 2026'],
          ['Business Relief ownership period', 'Usually 2 years before the death or gift'],
        ],
        after: 'BADR cannot be claimed on the same gain as employee ownership trust relief.',
      },
      {
        caption: 'Company buying back your shares: capital treatment',
        head: ['Condition', 'What it means'],
        rows: [
          ['Company', 'Unquoted trading company, or holding company of a trading group'],
          ['Seller', 'UK resident when the shares are bought'],
          ['Ownership', 'Shares held for 5 years (3 years if inherited)'],
          ['Reduction', 'Your interest falls to no more than 75% of what it was'],
          ['Connection', 'Afterwards, you hold no more than 30% of the company'],
          ['Purpose', 'Wholly or mainly to benefit the trade, not to avoid tax'],
        ],
        after: 'If a condition fails, the payment is usually taxed as a dividend. The company can ask HMRC for clearance in advance.',
      },
    ],
    urgent: {
      title: 'Selling or retiring in the next 2 years?',
      text: 'Most reliefs need 2 years of qualifying ownership before the sale. Check your position now, while there is still time to fix it.',
      cta: 'Book a free consultation',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our succession planning works',
    image: advisers,
    imageAlt: 'Four men in shirts and ties reviewing documents together at a white table',
    steps: [
      { title: 'Free consultation', text: 'Tell us your timescale and who might take over. We agree the scope and a fixed fee in writing.' },
      { title: 'Value and compare', text: 'We value the company and set out each exit route, with the tax and funding for each.' },
      { title: 'Plan and deliver', text: 'You choose a route. We apply for HMRC clearance where needed and work with your solicitor to completion.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Last 3 years’ accounts', 'Latest management accounts', 'Articles and shareholders’ agreement', 'Share register and history',
      'Your preferred timescale', 'Who might take over', 'Existing loans and guarantees', 'Your wider estate and will',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Exit routes compared',
    h2: 'Management buy-out, EOT or trade sale?',
    cols: ['Management buy-out', 'Employee ownership trust', 'Trade sale'],
    rows: [
      ['Business Asset Disposal Relief available', true, false, true],
      ['Capital gains tax relief on the sale', 'BADR (18%)', '50% of the gain relieved', 'BADR (18%)'],
      ['Buyer already knows the business', true, true, false],
      ['Payment usually spread over time', 'Often', 'Usually', 'Sometimes'],
      ['Staff and culture kept', true, true, 'Depends on buyer'],
      ['Open market price tested', false, false, true],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK guidance on Business Asset Disposal Relief, Business Relief, employee ownership trusts (HS277) and company share buy-backs.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Succession planning and management buy-out questions',
  faqs: [
    { q: 'What is business succession planning?', a: 'It is deciding who will own and run your company after you, and how you will be paid. A good plan covers the route, the value, the funding, the tax and the timing, usually several years before you step back.' },
    { q: 'What is a management buy-out?', a: 'A management buy-out (MBO) is when your existing managers buy the company from you. It is usually funded by the managers, bank or private equity debt and deferred payments to you out of future profits.' },
    { q: 'How are management buy-outs funded?', a: 'Usually with a mix of the managers’ own money, bank or specialist lending, and deferred payments to the seller. Often the managers set up a new company that borrows to buy your shares.' },
    { q: 'What tax do I pay when I sell my company?', a: 'Usually capital gains tax. With Business Asset Disposal Relief, qualifying gains are taxed at 18% from 6 April 2026, up to a £1 million lifetime limit. Gains above that are taxed at the normal rates.' },
    { q: 'Can my company buy back my shares?', a: 'Yes. A company can buy its own shares. If the conditions are met, the payment is taxed as a capital gain instead of a dividend. The company can ask HMRC for clearance in advance under section 1044 of the Corporation Tax Act 2010.' },
    { q: 'What is an employee ownership trust?', a: 'It is a trust that holds a controlling stake in a trading company for the benefit of all its employees. If you sell to one on or after 26 November 2025, half of your gain is relieved and half is taxed.' },
    { q: 'Can I claim BADR on a sale to an employee ownership trust?', a: 'No. Business Asset Disposal Relief cannot be claimed on a gain where you claim employee ownership trust relief. We compare both routes so you know which leaves you better off.' },
    { q: 'How does inheritance tax apply to my company shares?', a: 'Business Relief can reduce it. For deaths from 6 April 2026, unquoted trading company shares get 100% relief on the first £2.5 million of business and agricultural property, and 50% above that.' },
    { q: 'When should I start succession planning?', a: 'Ideally 3 to 5 years before you want to step back. Many reliefs need 2 years of qualifying ownership, and successors need time to learn the business and raise funding.' },
    { q: 'How much does succession planning cost?', a: 'Our fixed fees start at £XXX for an exit options review. A full succession plan and transaction support cost more. You get the exact fee in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/company-services/business-valuation/', 'Business valuation'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      ['/uk/business-finance/business-loans/', 'Business loans for buy-outs'],
      ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/london/richmond/', 'Richmond'],
      ['/uk/london/wimbledon/', 'Wimbledon'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/business-asset-disposal-relief/', 'Business Asset Disposal Relief'],
      ['/resources/management-buy-out-guide/', 'Management buy-out guide'],
      ['/resources/employee-ownership-trusts/', 'Employee ownership trusts explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Plan your exit with a clear', em: 'succession plan',
    pills: ['Free first consultation', 'Every route compared', 'Fixed fee in writing'],
    formTitle: 'Book your free consultation', button: 'Book my consultation',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/business-asset-disposal-relief', 'GOV.UK: Business Asset Disposal Relief'],
    ['https://www.gov.uk/business-relief-inheritance-tax/what-qualifies-for-business-relief', 'GOV.UK: Business Relief for inheritance tax'],
    ['https://www.gov.uk/government/publications/employee-ownership-trusts-and-capital-gains-tax-self-assessment-helpsheet-hs277/hs277-employee-ownership-trusts-and-capital-gains-tax-2026--2', 'HMRC helpsheet HS277: Employee ownership trusts'],
    ['https://www.gov.uk/guidance/clearance-applications-and-exempt-distribution-when-a-company-purchases-its-own-shares', 'GOV.UK: Clearance when a company buys its own shares'],
    ['https://www.legislation.gov.uk/ukpga/2010/4/section/1044', 'Corporation Tax Act 2010, section 1044'],
  ],
};
