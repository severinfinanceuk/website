// Company formation: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Severin has not yet confirmed it offers company formation or a registered office service:
// keep scope modest and confirm before launch.
// Facts checked against GOV.UK and Companies House guidance on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/company-formation/company-formation-founder-fashion-studio.jpg';
import founders from '../../assets/services/company-formation/company-formation-first-time-founders-planning.jpg';
import soleTrader from '../../assets/services/company-formation/sole-trader-to-limited-company-carpenter.jpg';
import contractor from '../../assets/services/company-formation/limited-company-contractor-home-office.jpg';
import property from '../../assets/services/company-formation/property-company-formation-terraced-houses.jpg';
import overseas from '../../assets/services/company-formation/overseas-founder-uk-company-video-call.jpg';
import coFounders from '../../assets/services/company-formation/company-formation-co-founders-meeting.jpg';
import meeting from '../../assets/services/company-formation/company-formation-adviser-client-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/company-services/company-formation/',
  primaryKeyword: 'company formation',
  secondaryKeywords: [
    'form a limited company', 'company formation London', 'register a limited company',
    'company formation services', 'company registration services', 'company formation and accounting',
    'new company accountant', 'Companies House identity verification',
  ],
  title: 'Company Formation London & UK-wide | Severin Finance',
  description: 'UK company formation in London and across the UK: we form your limited company, file at Companies House and register it with HMRC. Fixed fee.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Company services', '/uk/company-services/'],
    ['Company formation', '/uk/company-services/company-formation/'],
  ],
  service: {
    name: 'Company formation service',
    serviceType: 'Limited company formation and HMRC registration',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Company formation',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Company services · Company formation',
    h1: 'Company formation in London and across the UK',
    answer: 'Our company formation service sets up your UK limited company at Companies House and registers it with HMRC for a fixed fee, whether you live in London, elsewhere in the UK or abroad. We check the name and share structure and guide each director through identity verification. Most companies are registered within 24 hours.',
    image: hero,
    imageAlt: 'Young woman working on a laptop in her fashion design studio, with sketches on the wall and coats on a rail',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'After you start trading', date: 'Within 3 months', note: 'Register your company for Corporation Tax' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Companies House and HMRC set-up' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Accounts and tax from day one' },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Prices'],
    ['deadlines', 'Fees & rules'],
    ['how', 'How it works'],
    ['compare', 'Us vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who forms a limited company with us?',
    intro: 'Most of our formation clients fall into one of these groups. Not sure a company is right for you? We check for free.',
    cards: [
      { title: 'First-time founders', img: founders, alt: 'Four young founders planning a new business round a table with coffee and papers in a brick-walled co-working space', tag: 'Starting a new business', text: 'We form the company, explain your duties as a director and set up simple bookkeeping from the start.', link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'] },
      { title: 'Sole traders going limited', img: soleTrader, alt: 'Smiling carpenter planing a plank of wood at the workbench in his timber workshop', tag: 'Switching from sole trader', text: 'We check whether a company would cut your tax first. If it does, we form it and move your business across.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Contractors & freelancers', img: contractor, alt: 'Self-employed contractor working on his laptop at a wooden desk in a bright home office', tag: 'Personal service company', text: 'Many clients want a limited company to contract through. We set it up and explain how IR35 affects you.', link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'] },
      { title: 'Landlords & property companies', img: property, alt: 'Row of colourful terraced houses with tall chimneys under a cloudy sky', tag: 'Buy-to-let company (SPV)', text: 'A company can buy and hold rental property. We talk through the tax first, then form it with the right SIC code.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Overseas founders', img: overseas, alt: 'Smiling businesswoman in glasses waving on a video call from her laptop in a colourful office', tag: 'Directors living abroad', text: 'You can form a UK company from abroad. You still need a UK registered office, and every director must verify their identity.', link: ['/cross-border/uk-company-from-abroad/', 'UK company from abroad'] },
      { title: 'Co-founders & partners', img: coFounders, alt: 'Two business partners talking through plans at a shared desk with a laptop, notebook and coffee mug', tag: 'Shares and control', text: 'We set out who owns what and who counts as a person with significant control, before anything is filed.', link: ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Company formation fees',
    h2: 'Fixed fees to form your company',
    intro: 'You know the price before we start. The Companies House fee is shown separately.',
    plans: [
      { name: 'Formation', for: 'One founder, simple share structure', price: '£XXX', tbc: true, items: ['Name and SIC code checks', 'Standard articles and share structure', 'Registration at Companies House', 'Corporation Tax set-up'] },
      { name: 'Formation + first year', for: 'New companies that want it all set up', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Everything in Formation', 'VAT and PAYE registration if needed', 'Bookkeeping software set up', 'First year accounts and Company Tax Return'] },
      { name: 'Overseas founders', for: 'Directors or shareholders outside the UK', price: '£XXX', tbc: true, items: ['Everything in Formation', 'Identity verification guidance for each director', 'UK tax residence questions answered', 'Registered office address (to confirm)'] },
    ],
    included: ['Free first consultation', 'Name availability check', 'Certificate of incorporation sent to you', 'Help with identity verification', 'Reminders for your first deadlines'],
    note: { text: 'Package contents, prices, VAT, and whether the £100 Companies House fee is included: to confirm.', tbc: true },
  },

  // ---------- 4. Fees and rules (tables) ----------
  deadlines: {
    eyebrow: 'Fees & rules',
    h2: 'Company formation fees and rules',
    intro: 'Companies House fees and the first legal steps for a new limited company. Checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'Companies House fees',
        head: ['Filing', 'Fee'],
        rows: [
          ['Register a company online', '£100'],
          ['Register through software', '£100, or £156 for same-day'],
          ['Register by post (form IN01)', '£124, takes 8 to 10 days'],
          ['Confirmation statement, online', '£50 a year'],
          ['Confirmation statement, paper', '£110 a year'],
        ],
        after: 'Online registration usually takes up to 24 hours.',
      },
      {
        caption: 'Rules for a new limited company',
        head: ['What', 'Rule'],
        rows: [
          ['Identity verification', 'Every director, and every person with significant control, verifies their identity and gives a personal code'],
          ['Registered office', 'A physical address in the same UK nation, where post reaches you. No PO boxes'],
          ['Registered email', 'Required. Not shown on the public register'],
          ['SIC code', 'At least one, describing what the company does'],
          ['Corporation Tax', 'Register within 3 months of starting to do business'],
          ['VAT', 'Register within 30 days if taxable turnover passes £90,000 in 12 months'],
          ['PAYE', 'Register as an employer before your first payday'],
        ],
      },
    ],
    urgent: {
      title: 'Already trading without registering?',
      text: 'If your company started doing business more than 3 months ago and is not registered for Corporation Tax, act now: HMRC can charge a penalty. We register it and bring your records up to date.',
      cta: 'Get help registering',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our company formation works',
    image: meeting,
    imageAlt: 'Smiling adviser going through paperwork with a client across his office desk',
    steps: [
      { title: 'Free consultation', text: 'We check a company suits you, agree the share structure and confirm a fixed fee in writing.' },
      { title: 'Verify and send details', text: 'Each director verifies their identity with Companies House. You send us the details on our checklist.' },
      { title: 'We file and register', text: 'We file at Companies House and set up Corporation Tax. You get your certificate of incorporation.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Company name, plus a back-up', 'What the company will do', 'Registered office address', 'Each director’s Companies House personal code',
      'Shareholders and shares each', 'People with significant control', 'A registered email address', 'Expected turnover and staff',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs DIY',
    h2: 'Accountant, DIY or online agent?',
    cols: ['Severin Finance', 'Doing it yourself', 'Online formation agent'],
    rows: [
      ['Companies House filing', true, true, true],
      ['Advice on sole trader vs company', true, false, false],
      ['Share structure explained', true, false, 'Templates'],
      ['Corporation Tax, VAT and PAYE set-up', true, 'You', 'Sometimes'],
      ['Accounts and tax after formation', true, false, 'Rarely'],
      ['Price', 'Fixed fee', '£100 Companies House fee', 'Package fee'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against Companies House and HMRC guidance on GOV.UK. Fees and filing rules change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Company formation questions',
  faqs: [
    { q: 'How much does it cost to register a company with Companies House?', a: '£100 online. Registering by post with form IN01 costs £124 and takes 8 to 10 days. Same-day registration through software costs £156. After that, the online confirmation statement costs £50 a year.' },
    { q: 'How long does it take to form a limited company?', a: 'Usually up to 24 hours online. Postal applications take 8 to 10 days. Allow extra time if a director has not yet verified their identity with Companies House.' },
    { q: 'Do directors need to verify their identity with Companies House?', a: 'Yes. Identity verification became a legal requirement on 18 November 2025. Each director gives their Companies House personal code when the company is registered. People with significant control must verify too. You only verify once, online through GOV.UK One Login or through an authorised agent.' },
    { q: 'Can I use my home address as the registered office?', a: 'Yes, if it is an appropriate address: a physical address in the same UK nation where the company is registered, where post reaches you. It appears on the public register. You can use another address, such as an accountant’s, with their permission. PO boxes are not allowed.' },
    { q: 'What is a SIC code?', a: 'A SIC code is a 5-digit code that tells Companies House what your company does. You choose at least one when you register. If the business changes, you update it in your confirmation statement.' },
    { q: 'When does a new company need to register for Corporation Tax?', a: 'Within 3 months of starting to do business. That includes buying, selling, advertising, renting a property or employing someone. Many companies set this up when they register at Companies House. Companies formed by post, through an agent or software register separately.' },
    { q: 'When does my company need to register for VAT?', a: 'When taxable turnover goes over £90,000 in any 12 months. You must register within 30 days of the end of the month you went over. You can also register voluntarily below the threshold, for example to reclaim VAT on start-up costs.' },
    { q: 'Should I be a sole trader or a limited company?', a: 'It depends on your profits and plans. A company limits your personal liability and can cost less tax at higher profits, but it has more filing and admin. We run the numbers for you in the free consultation.' },
    { q: 'Can I form a UK company if I live abroad?', a: 'Yes. Directors and shareholders do not need to live in the UK. The company needs a UK registered office in the nation where it is registered, and every director must verify their identity with Companies House.' },
    { q: 'How much does your company formation service cost?', a: 'Our fixed fee starts at £XXX for a simple formation. Packages with a first year of accounts, VAT or payroll set-up cost more. You get the exact fee in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
      ['/uk/accounting/payroll-services/', 'Payroll services'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/cross-border/uk-company-from-abroad/', 'UK company from abroad'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/sole-trader-vs-limited-company/', 'Sole trader or limited company?'],
      ['/resources/how-to-pay-yourself-from-a-limited-company/', 'How to pay yourself from a limited company'],
      ['/resources/companies-house-identity-verification/', 'Companies House identity verification'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote to form your', em: 'limited company',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Set up with HMRC from day one'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/limited-company-formation/register-your-company', 'GOV.UK: Register your company'],
    ['https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees', 'Companies House: Fees'],
    ['https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house', 'Companies House: When you need to verify your identity'],
    ['https://www.gov.uk/limited-company-formation/company-address', 'GOV.UK: Company address rules'],
    ['https://www.gov.uk/limited-company-formation/set-up-your-company-for-corporation-tax', 'GOV.UK: Register for Corporation Tax'],
    ['https://www.gov.uk/vat-registration/when-to-register', 'GOV.UK: When to register for VAT'],
  ],
};
