// Company secretarial services: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Severin has not yet confirmed it offers company secretarial work or a registered office
// service: keep scope modest and confirm before launch.
// Facts checked against GOV.UK and Companies House guidance on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/company-secretarial/company-secretarial-services-directors-office-paperwork.jpg';
import busy from '../../assets/services/company-secretarial/confirmation-statement-shop-owner-director.jpg';
import shares from '../../assets/services/company-secretarial/share-allotment-shareholders-handshake.jpg';
import directors from '../../assets/services/company-secretarial/director-change-new-officer-introduction.jpg';
import home from '../../assets/services/company-secretarial/registered-office-home-business-kitchen.jpg';
import overseas from '../../assets/services/company-secretarial/company-secretarial-overseas-director-video-call.jpg';
import dormant from '../../assets/services/company-secretarial/statutory-registers-records-archive.jpg';
import review from '../../assets/services/company-secretarial/company-secretary-client-document-review.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/company-services/company-secretarial-services/',
  primaryKeyword: 'company secretarial services',
  secondaryKeywords: [
    'company secretarial services London', 'confirmation statement filing', 'Companies House filing support',
    'registered office services', 'statutory registers', 'PSC register', 'change of director Companies House',
    'Companies House identity verification',
  ],
  title: 'Company Secretarial Services London & France',
  description: 'Company secretarial services for London and France: confirmation statements, director and PSC changes, registers and ID checks. Fixed fee.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Company services', '/uk/company-services/'],
    ['Company secretarial services', '/uk/company-services/company-secretarial-services/'],
  ],
  service: {
    name: 'Company secretarial service',
    serviceType: 'Company secretarial and Companies House filing',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London'], ['Country', 'France']],
  },
  formTopic: 'Company secretarial',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Company services · Company secretarial',
    h1: 'Company secretarial services for London and France',
    answer: 'Our company secretarial services keep your UK company up to date at Companies House, whether its directors are in London, elsewhere in the UK or in France. We file your confirmation statement, report changes to directors, shareholders and people with significant control, and track identity verification. A missed confirmation statement can mean a fine of up to £5,000.',
    image: hero,
    imageAlt: 'Two company directors giving each other a high five across a desk covered in paperwork in a bright brick-walled office',
    price: { from: '£XXX', note: 'a year', tbc: true },
    deadline: { label: 'Confirmation statement', date: '14 days', note: 'To file after your review period ends' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Every Companies House date tracked' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Linked to your accounts and tax' },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Prices'],
    ['deadlines', 'Deadlines & fines'],
    ['how', 'How it works'],
    ['compare', 'Us vs DIY'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who needs company secretarial help?',
    intro: 'Every limited company has the same Companies House duties, whatever its size. These clients hand them to us.',
    cards: [
      { title: 'Busy directors', img: busy, alt: 'Smiling food shop owner in a blue apron checking his phone behind the counter', tag: 'No time for admin', text: 'We track every Companies House date and file for you, so nothing depends on someone remembering.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'New shareholders', img: shares, alt: 'Two smiling businessmen shaking hands across a table with paperwork and coffee', tag: 'Share issues and transfers', text: 'We prepare the paperwork for new shares, report the allotment within a month and update your register of members.', link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'] },
      { title: 'Director changes', img: directors, alt: 'Businesswoman introducing herself to a new colleague while team members look on in an office', tag: 'Appointments and resignations', text: 'We report changes within 14 days and check each new director has verified their identity first.' },
      { title: 'Home-based businesses', img: home, alt: 'Woman running her business from her kitchen table, on the phone while working on a laptop', tag: 'Registered office address', text: 'Your registered office is on the public register. We explain the rules and your options for a different address.', link: ['/uk/company-services/company-formation/', 'Company formation'] },
      { title: 'Overseas-owned companies', img: overseas, alt: 'Smiling businessman waving at his laptop during a video call in a modern office', tag: 'Directors abroad', text: 'We keep your UK filings on time from wherever you are, and tell each director and PSC when to verify.', link: ['/cross-border/uk-company-from-abroad/', 'UK company from abroad'] },
      { title: 'Holding & dormant companies', img: dormant, alt: 'Woman searching through shelves of red and blue record folders in an archive', tag: 'Low activity, same duties', text: 'Dormant and holding companies still file a confirmation statement and accounts every year. We handle both.' },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Company secretarial fees',
    h2: 'Fixed fees for company secretarial work',
    intro: 'You know the price before we start. No hourly billing for routine filings.',
    plans: [
      { name: 'Confirmation statement', for: 'Companies with no changes in the year', price: '£XXX', tbc: true, items: ['Confirmation statement prepared and filed', 'Director identity verification checked', 'SIC codes and shareholder details checked'] },
      { name: 'Company secretarial', for: 'Ongoing support for most companies', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Confirmation statement every year', 'Director, secretary and PSC changes filed', 'Register of members kept up to date', 'Registered office and SIC code changes', 'Reminders for directors and PSCs'] },
      { name: 'Share changes', for: 'New shares, transfers and buy-backs', price: '£XXX', tbc: true, items: ['Board minutes and resolutions prepared', 'Share allotments and statement of capital filed', 'Share transfers recorded', 'Changes to the articles filed'] },
    ],
    included: ['Free first consultation', 'Companies House deadlines tracked', 'Reminders before each date', 'Filing confirmation sent to you', 'Companies House letters answered'],
    note: { text: 'Prices, VAT, whether Companies House fees are included, and whether we offer a registered office address: to confirm.', tbc: true },
  },

  // ---------- 4. Deadlines and fines (tables) ----------
  deadlines: {
    eyebrow: 'Deadlines & fines',
    h2: 'Companies House deadlines and fines',
    intro: 'The dates every private limited company has to meet. Checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'Companies House deadlines',
        head: ['What', 'Deadline'],
        rows: [
          ['Confirmation statement', 'At least every 12 months, within 14 days after the review period ends'],
          ['Director or secretary appointed, left or details changed', 'Within 14 days'],
          ['Person with significant control (PSC) added, removed or changed', 'Within 14 days'],
          ['New shares issued', 'Within 1 month'],
          ['Existing director: identity verification', 'Personal code given with the next confirmation statement'],
          ['New director or PSC: identity verification', 'When appointed, or within 14 days for a new PSC'],
        ],
      },
      {
        caption: 'Fines and penalties',
        head: ['What', 'Penalty'],
        rows: [
          ['Confirmation statement not filed', 'Fine of up to £5,000, and the company may be struck off'],
          ['Accounts up to 1 month late', '£150'],
          ['Accounts 1 to 3 months late', '£375'],
          ['Accounts 3 to 6 months late', '£750'],
          ['Accounts more than 6 months late', '£1,500'],
        ],
        after: 'Accounts penalties double if the accounts are late 2 years in a row. The confirmation statement costs £50 online or £110 on paper.',
      },
    ],
    urgent: {
      title: 'Confirmation statement overdue?',
      text: 'File it as soon as you can. Companies House will not accept it until every director has verified their identity, so start there. We help your directors verify and then file for you.',
      cta: 'Get help with a late filing',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our company secretarial service works',
    image: review,
    imageAlt: 'Adviser and client going through printed documents together at a table',
    steps: [
      { title: 'Free review', text: 'We check your Companies House record, your register of members and your next dates, then confirm a fixed fee.' },
      { title: 'We take over the diary', text: 'We put every filing date in our system and remind you, and each director, before anything is due.' },
      { title: 'You approve, we file', text: 'We prepare each filing, you check it, and we file it and send you the confirmation.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Company number and authentication code', 'Register of members', 'Share certificates issued', 'Directors’ personal codes',
      'PSC details', 'Registered email address', 'Articles of association', 'Recent board minutes and resolutions',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs DIY',
    h2: 'Accountant, DIY or filing agent?',
    cols: ['Severin Finance', 'Doing it yourself', 'Online filing agent'],
    rows: [
      ['Confirmation statement filed', true, true, true],
      ['Deadlines tracked for you', true, false, 'Reminders'],
      ['Director and PSC changes', true, 'You', 'Extra fee'],
      ['Register of members kept', true, 'You', false],
      ['Linked to your accounts and tax', true, false, false],
      ['Price', 'Fixed fee', 'Companies House fees', 'Fee per filing'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Companies House guidance on GOV.UK. Company law is changing in stages: we update this page when it does.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Company secretarial questions',
  faqs: [
    { q: 'What do company secretarial services include?', a: 'Company secretarial services cover a company’s legal admin: the confirmation statement, reporting changes to directors, shareholders and PSCs, the register of members, board minutes and resolutions. Private limited companies do not have to appoint a company secretary, but the work still has to be done.' },
    { q: 'How much does a confirmation statement cost?', a: '£50 online. A paper confirmation statement (form CS01) costs £110. You pay once in each 12-month payment period, with the first statement you file in that period.' },
    { q: 'When is my confirmation statement due?', a: 'Within 14 days after your review period ends. The review period ends 12 months after the company was formed, or after your last confirmation statement date. You can file early, but that sets a new date.' },
    { q: 'What happens if I do not file my confirmation statement?', a: 'You can be fined up to £5,000, and your company may be struck off the register. Companies House may also charge a financial penalty. File as soon as you can.' },
    { q: 'Do companies still need to keep statutory registers?', a: 'Yes, but fewer of them. Since 18 November 2025, companies no longer keep their own registers of directors, directors’ home addresses, secretaries or PSCs: Companies House holds that information. You must still keep a register of members at your registered office or a single alternative inspection location.' },
    { q: 'When do existing directors need to verify their identity?', a: 'With the company’s next confirmation statement. Each director gives their Companies House personal code, and Companies House will not accept the statement until every director has verified. New directors give their code when they are appointed.' },
    { q: 'What is a person with significant control (PSC)?', a: 'A PSC is usually someone who holds more than 25% of the shares or voting rights, can appoint or remove most of the directors, or otherwise controls the company. You must tell Companies House about PSC changes within 14 days.' },
    { q: 'Which company changes must I report to Companies House?', a: 'Changes to directors, secretaries and PSCs, and to where you keep your records, within 14 days. New shares within 1 month. Changing the company name, removing a director or changing the articles also needs shareholder approval first.' },
    { q: 'Can you provide a registered office address?', a: 'We can explain the rules and your options. Whether we offer a London registered office address service, and its price, is still to be confirmed.', tbc: true },
    { q: 'How much do your company secretarial services cost?', a: 'Our fixed fees start at £XXX a year for a company with no changes. Share issues, transfers and other changes are priced separately. You get the exact fee in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/company-services/company-formation/', 'Company formation'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS advance assurance'],
      ['/uk/company-services/business-valuation/', 'Business valuation'],
      ['/cross-border/uk-company-from-abroad/', 'UK company from abroad'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/manchester/', 'Manchester'],
      ['/fr/', 'France'],
      ['/fr/londres/', 'Français à Londres'],
    ] },
    { title: 'Guides', links: [
      ['/resources/confirmation-statement-guide/', 'Confirmation statement guide'],
      ['/resources/companies-house-identity-verification/', 'Companies House identity verification'],
      ['/resources/statutory-registers-explained/', 'Statutory registers explained'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'company secretarial work',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Every deadline tracked'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/confirmation-statement-guidance', 'Companies House: Confirmation statement guidance'],
    ['https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house', 'Companies House: When you need to verify your identity'],
    ['https://changestoukcompanylaw.campaign.gov.uk/changes-to-company-registers/', 'Companies House: Changes to company registers'],
    ['https://www.gov.uk/running-a-limited-company/company-changes-you-must-report', 'GOV.UK: Company changes you must report'],
    ['https://www.gov.uk/guidance/people-with-significant-control-pscs', 'Companies House: People with significant control'],
    ['https://www.gov.uk/annual-accounts/penalties-for-late-filing', 'GOV.UK: Penalties for late filing'],
  ],
};
