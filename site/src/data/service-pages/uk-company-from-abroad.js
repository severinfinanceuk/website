// Set up a UK company from abroad: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK and Companies House guidance (directors, registered office, identity
// verification, registration fees), corporation tax rates, VAT Notice 700/1 and HMRC INTM120030 on 13 October 2026.
// No claims about specific banks. Whether Severin is an ACSP or provides a registered office is tbc.

import { rating } from '../reviews.js';
import hero from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-founders-team-table.jpg';
import euFounders from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-team-meeting-room.jpg';
import seller from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-online-seller-wrapping-parcel.jpg';
import subsidiary from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-two-directors-talking.jpg';
import consultant from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-consultant-laptop.jpg';
import branch from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-handshake-uk-branch.jpg';
import property from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-london-mews-property.jpg';
import consultation from '../../assets/services/uk-company-from-abroad/uk-company-from-abroad-signing-documents.jpg';

export default {
  // ---------- SEO ----------
  url: '/cross-border/uk-company-from-abroad/',
  primaryKeyword: 'set up a UK company from abroad',
  secondaryKeywords: [
    'set up UK company from abroad', 'UK company for non-residents', 'non-resident director UK company',
    'register a UK company from overseas', 'UK registered office address', 'Companies House identity verification abroad',
    'UK subsidiary of a foreign company', 'créer une LTD en Angleterre', 'domiciliation Londres',
  ],
  title: 'Set Up a UK Company from Abroad | Severin Finance',
  description: 'Set up a UK company from abroad: registration, registered office, director ID checks, corporation tax and VAT handled for you. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['Cross-border', '/cross-border/'],
    ['UK company from abroad', '/cross-border/uk-company-from-abroad/'],
  ],
  service: {
    name: 'UK company set-up for non-residents',
    serviceType: 'UK company formation, tax registration and accounting for overseas founders',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Set up a UK company from abroad',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'International · UK companies',
    h1: 'Set up a UK company from abroad',
    answer: 'We help you set up a UK company from abroad, without living in the UK or visiting. We register the company with Companies House, check your registered office, guide each director through identity verification from any country, and register corporation tax, VAT and payroll so the company is ready to trade.',
    image: hero,
    imageAlt: 'Team of founders talking around a wooden table with laptops in a bright office',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Rule in force', date: '18 November 2025', note: 'Directors must verify their identity with Companies House' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Companies House Authorised Corporate Service Provider', tbc: true },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Directors can live anywhere' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Key rules & tax rates'],
    ['how', 'How it works'],
    ['compare', 'Accountant vs formation agent'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Who sets up a UK company from abroad?',
    intro: 'A UK limited company can be owned and run from anywhere. These are the founders we help most.',
    cards: [
      { title: 'Founders selling into the UK', img: euFounders, alt: 'Team of women in a meeting room with laptops around a table', tag: 'Selling into the UK', text: 'A UK company costs £100 to register online. We set it up and handle the UK tax side, so you know what the company owes here.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Online sellers', img: seller, alt: 'Hands wrapping a parcel in brown paper and twine, with greenery and gift cards', tag: 'VAT from the first UK sale', text: 'A company with only a virtual office may not count as UK-established for VAT, and then there is no threshold. We check and register you.', link: ['/uk/tax/vat-accountant/', 'VAT accountant'] },
      { title: 'Overseas parent companies', img: subsidiary, alt: 'Two men in conversation at a table by a sunny window', tag: 'UK subsidiary', text: 'We set up the subsidiary, run the books and corporation tax, and check where it is managed so it is taxed where you expect.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Consultants with UK clients', img: consultant, alt: 'Woman writing notes next to her laptop at a wooden table', tag: 'Contracting through a UK company', text: 'A UK company lets you invoice UK clients from a UK business. We set it up and handle IR35, accounts and returns.', link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'] },
      { title: 'Overseas companies opening in the UK', img: branch, alt: 'Two businessmen shaking hands across a desk', tag: 'Branch or subsidiary', text: 'We compare a UK branch with a UK subsidiary, then handle the UK corporation tax for whichever you choose.', link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'] },
      { title: 'Property investors', img: property, alt: 'Cobbled London mews lined with white and brick houses', tag: 'UK property in a company', text: 'Some overseas investors hold UK rental property in a UK company. We set it up and handle the accounts and tax each year.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'UK company set-up fees',
    h2: 'Fixed fees to set up and run your UK company',
    intro: 'You know the price before we start. The £100 Companies House fee is shown separately.',
    plans: [
      { name: 'Company set-up', for: 'Founders who want the company registered', price: '£XXX', tbc: true, items: ['Company registered with Companies House', 'Director identity verification guided', 'Corporation tax registration'] },
      { name: 'Set-up and first year', for: 'Founders who want one team for everything', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Everything in Company set-up', 'VAT and payroll registration if needed', 'Bookkeeping, annual accounts and CT600', 'Confirmation statement filed'] },
      { name: 'UK subsidiary', for: 'Overseas companies opening in the UK', price: '£XXX', tbc: true, items: ['Subsidiary or branch compared', 'Residence and treaty position checked', 'Group reporting set up for your parent company'] },
    ],
    included: ['Fixed fee in writing', 'Company documents for your bank', 'HMRC agent authorisation', 'Reminders for every filing date', 'Letters from Companies House and HMRC answered'],
    note: { text: 'Prices include or exclude VAT: to confirm. Registered office address service: to confirm.', tbc: true },
  },

  // ---------- 4. Key rules and tax rates (tables) ----------
  deadlines: {
    eyebrow: 'Key rules & tax rates',
    h2: 'Rules to set up a UK company from abroad',
    intro: 'What Companies House and HMRC ask of overseas founders.',
    tables: [
      {
        caption: 'Companies House rules',
        head: ['What', 'Rule'],
        rows: [
          ['Directors', 'Must be 16 or over. They do not need to live in the UK.'],
          ['Registered office', 'A physical address in the part of the UK where the company is registered. No PO boxes.'],
          ['Registered email address', 'Required. It is not shown on the public register.'],
          ['Identity verification', 'Required for directors and people with significant control since 18 November 2025. Can be done from any country.'],
          ['Registration fee', '£100 online, usually within 24 hours. £124 by post.'],
        ],
      },
      {
        caption: 'UK tax rates and thresholds',
        head: ['Tax', 'Rate or threshold'],
        rows: [
          ['Corporation tax, profits of £50,000 or less', '19%'],
          ['Corporation tax, profits over £250,000', '25%'],
          ['Corporation tax, profits in between', '25%, reduced by marginal relief'],
          ['VAT registration, UK-established business', 'Taxable turnover over £90,000'],
          ['VAT registration, business not established in the UK', 'No threshold: register if you sell to the UK or expect to in the next 30 days'],
        ],
        after: 'A company incorporated in the UK is UK resident for corporation tax. If it is managed from abroad, it may also be resident there, and the tax treaty decides.',
      },
    ],
    urgent: {
      title: 'Already set up, but behind on filings?',
      text: 'Late accounts and tax returns lead to penalties. We bring filings up to date and deal with Companies House and HMRC for you.',
      cta: 'Get help with late filings',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we set up a UK company from abroad',
    image: consultation,
    imageAlt: 'Man signing a document while a woman beside him holds the papers',
    steps: [
      { title: 'Free consultation', text: 'Tell us what the company will do and where you live. We confirm the structure and a fixed fee in writing.' },
      { title: 'Verify and register', text: 'Each director verifies their identity. We prepare the documents and register the company.' },
      { title: 'Ready to trade', text: 'We register corporation tax, VAT and payroll as needed and send you the documents your bank asks for.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Company name and what it will do', 'Directors’ and shareholders’ details', 'Identity verification personal codes',
      'Share structure', 'UK registered office address', 'Registered email address',
      'Expected UK sales in the first year', 'Parent company details, for a subsidiary',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Accountant vs formation agent',
    h2: 'Accountant, formation agent or do it yourself?',
    cols: ['Severin Finance', 'Online formation agent', 'Doing it yourself'],
    rows: [
      ['Company registered with Companies House', true, true, true],
      ['Director identity verification', 'Guided', 'Sometimes', 'On your own'],
      ['Corporation tax and VAT registration', true, false, false],
      ['Residence and treaty position checked', true, false, false],
      ['Bookkeeping and annual accounts', true, false, false],
      ['UK figures ready for your adviser at home', true, false, false],
      ['Price', 'Fixed fee', 'Low formation fee', '£100 Companies House fee'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Companies House and HMRC guidance. Company rules changed in 2025 and keep changing: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Questions about setting up a UK company from abroad',
  faqs: [
    { q: 'Can I set up a UK company from abroad?', a: 'Yes. Directors must be 16 or over but do not need to live in the UK. The company needs a UK registered office and a registered email address. Registering online with Companies House costs £100 and usually takes 24 hours.' },
    { q: 'Do I need a UK address for my company?', a: 'Yes, a registered office. It must be a physical address in the part of the UK where the company is registered, not a PO box. It can be your accountant’s address if it meets the rules.' },
    { q: 'How do directors living abroad verify their identity?', a: 'Through GOV.UK One Login, or through an Authorised Corporate Service Provider, which can be done from any country. Each director then gets a personal code. New directors give it when the company is registered or when they are appointed.' },
    { q: 'Can a non-resident open a UK business bank account?', a: 'It is possible, but each bank sets its own rules on where directors live and what checks it needs, so it can take longer. We prepare the company documents banks usually ask for.' },
    { q: 'Will my UK company pay UK corporation tax?', a: 'Yes. A company incorporated in the UK is UK resident for corporation tax. The rate is 19% on profits of £50,000 or less and 25% over £250,000, with marginal relief in between. If the company is managed from abroad, it may also be resident there and the treaty decides.' },
    { q: 'Does my UK company need to register for VAT?', a: 'It depends on whether it is established in the UK. A UK-established business registers when taxable turnover goes over £90,000. A business not established in the UK has no threshold. A registered, serviced or virtual office alone does not make a company UK-established.' },
    { q: 'Will I also pay tax in my home country?', a: 'Possibly. It depends where the company is managed and where you live. Salary and dividends you take are usually taxed where you live, and UK tax treaties stop the same income being taxed twice. We handle the UK side and give your adviser at home the UK figures they need.' },
    { q: 'How long does it take to set up a UK company?', a: 'Usually 24 hours once the application is sent online and every director has verified their identity. Paper applications take 8 to 10 days.' },
    { q: 'Can you provide a registered office and act as company secretary?', a: 'Yes. We can provide a London registered office address and company secretarial services for an annual fee of £XXX.', tbc: true },
    { q: 'How much does it cost to set up a UK company from abroad?', a: '£XXX plus the £100 Companies House fee for registration. Set-up with a first year of accounts, or a UK subsidiary, costs more. You get the exact fee in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/company-services/company-formation/', 'Company formation'],
      ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/accounting/bookkeeping-services/', 'Bookkeeping services'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
      ['/uk/leeds/', 'Leeds'],
      ['/uk/bristol/', 'Bristol'],
      ['/uk/london/kensington/', 'Kensington'],
    ] },
    { title: 'Guides', links: [
      ['/resources/uk-company-for-non-residents/', 'UK companies for non-residents'],
      ['/resources/companies-house-identity-verification/', 'Companies House identity verification'],
      ['/resources/uk-branch-or-subsidiary/', 'UK branch or subsidiary?'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote to set up your', em: 'UK company',
    pills: ['Free first consultation', 'Fixed fee in writing', 'No need to visit the UK'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/limited-company-formation/appoint-directors-and-company-secretaries', 'GOV.UK: Appoint directors'],
    ['https://www.gov.uk/limited-company-formation/company-address', 'GOV.UK: Company address rules'],
    ['https://www.gov.uk/guidance/verifying-your-identity-for-companies-house', 'GOV.UK: Verifying your identity for Companies House'],
    ['https://www.gov.uk/corporation-tax-rates', 'GOV.UK: Corporation tax rates'],
    ['https://www.gov.uk/government/publications/vat-notice-7001-should-i-be-registered-for-vat/vat-notice-7001-should-i-be-registered-for-vat', 'GOV.UK: VAT Notice 700/1'],
    ['https://www.gov.uk/hmrc-internal-manuals/international-manual/intm120030', 'HMRC manual: Company residence (INTM120030)'],
  ],
};
