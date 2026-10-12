// HMRC tax investigation: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK and HMRC manuals on 13 October 2026 (sources at the bottom). Also checked:
// SAM31100 (enquiry window: 12 months after an on-time return),
// gov.uk/guidance/admitting-tax-fraud-the-contractual-disclosure-facility-cdf (COP9: 60 days to accept),
// gov.uk/government/publications/specialist-investigations-for-fraud-and-bespoke-avoidance-cop-8 and TTOG3415 (COP8),
// gov.uk/guidance/let-property-campaign-your-guide-to-making-a-disclosure (90 days to pay after notifying).
// Compliance: no promises about outcomes or penalty levels. Fee protection insurance is tbc.

import { rating } from '../reviews.js';
import hero from '../../assets/services/hmrc-investigations/hmrc-tax-investigation-business-owner-letter.jpg';
import soleTrader from '../../assets/services/hmrc-investigations/sole-trader-tax-enquiry.jpg';
import director from '../../assets/services/hmrc-investigations/company-director-hmrc-enquiry.jpg';
import vat from '../../assets/services/hmrc-investigations/vat-inspection-retail-business.jpg';
import landlord from '../../assets/services/hmrc-investigations/landlord-undeclared-rental-income.jpg';
import offshore from '../../assets/services/hmrc-investigations/offshore-income-disclosure.jpg';
import crypto from '../../assets/services/hmrc-investigations/online-seller-crypto-hmrc-letter.jpg';
import consultation from '../../assets/services/hmrc-investigations/hmrc-investigation-specialist-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/hmrc-tax-investigation/',
  primaryKeyword: 'HMRC tax investigation',
  secondaryKeywords: [
    'HMRC investigation specialist', 'HMRC compliance check', 'HMRC enquiry letter',
    'COP9 investigation', 'Worldwide Disclosure Facility', 'HMRC voluntary disclosure',
    'HMRC penalties', 'Let Property Campaign',
  ],
  title: 'HMRC Tax Investigations London & UK-wide | Severin Finance',
  description: 'HMRC tax investigation help in London and across the UK: we answer HMRC, handle compliance checks and disclosures, and work to reduce penalties. Free call.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['HMRC tax investigation', '/uk/tax/hmrc-tax-investigation/'],
  ],
  service: {
    name: 'HMRC tax investigation support',
    serviceType: 'HMRC compliance check, enquiry and disclosure support',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'HMRC tax investigation',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · HMRC investigations',
    h1: 'HMRC tax investigation help in London and across the UK',
    answer: 'An HMRC tax investigation, or compliance check, is HMRC checking that your tax return, VAT return or records are right. Our team answers HMRC’s letters and deals with the officer for you, whether you are in London, elsewhere in the UK or abroad. We explain your options early and work to keep penalties as low as the rules allow.',
    image: hero,
    imageAlt: 'Man in a blue shirt reading a letter at his kitchen table',
    price: { from: '£XXX', note: 'first letter review', tbc: true },
    deadline: { label: 'Disagree with a decision?', date: '30 days', note: 'To ask for a review or appeal' },
    cta: 'Talk to us about your letter',
    trust: [
      { text: 'We deal with HMRC for you' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Fee protection insurance', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Penalties & time limits'],
    ['how', 'How it works'],
    ['compare', 'Us or go it alone'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who needs this (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Who we help with HMRC enquiries',
    intro: 'Every check is different. These are the cases we see most.',
    cards: [
      { title: 'Sole traders', img: soleTrader, alt: 'Electrician in a yellow hard hat working on a wall socket', tag: 'Self assessment enquiry', text: 'HMRC questions your income or expenses. We check the figures, answer the officer and fix any errors.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Company directors', img: director, alt: 'Three business people reviewing financial charts at a meeting table', tag: 'Corporation tax enquiry', text: 'Checks into company returns, director’s loans or expenses. We deal with HMRC for you and the company.', link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'] },
      { title: 'VAT-registered businesses', img: vat, alt: 'Two cafe owners in aprons standing behind the counter beside the till', tag: 'VAT inspection', text: 'A VAT visit or a large repayment claim under review. We prepare your records and attend with you.', link: ['/uk/tax/vat-accountant/', 'VAT accountant'] },
      { title: 'Landlords', img: landlord, alt: 'Row of red brick Victorian houses on a residential street', tag: 'Let Property Campaign', text: 'Rental income not declared? The Let Property Campaign lets you tell HMRC first. We work out what is owed.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Offshore income', img: offshore, alt: 'Woman working on laptops on a sunny balcony with palm trees', tag: 'Worldwide Disclosure Facility', text: 'Foreign income or gains missing from UK returns. We prepare a disclosure through the Worldwide Disclosure Facility.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
      { title: 'Crypto & online sellers', img: crypto, alt: 'Person holding a phone showing a crypto trading chart beside a cup of coffee', tag: 'Nudge letters', text: 'A letter about crypto gains or online sales. We work out the tax and reply to HMRC.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'HMRC investigation fees',
    h2: 'Clear fees for HMRC investigation support',
    intro: 'We agree the scope and fee with you before we reply to HMRC.',
    plans: [
      { name: 'Letter review', for: 'You have just received an HMRC letter', price: '£XXX', tbc: true, items: ['Letter read and explained', 'Risks and options set out', 'Reply deadline diarised'] },
      { name: 'Compliance check support', for: 'Aspect or full enquiry', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Agent authorisation with HMRC', 'Records gathered and reviewed', 'All letters and meetings with HMRC', 'Penalty reductions argued', 'Review or appeal if needed'] },
      { name: 'Voluntary disclosure', for: 'WDF, Let Property Campaign, COP9', price: '£XXX', tbc: true, items: ['Tax, interest and penalty worked out', 'Disclosure prepared and submitted', 'Payment plan discussed with HMRC'] },
    ],
    included: ['Free first call', 'Deadlines tracked for you', 'One point of contact', 'Plain English updates', 'Your returns kept up to date during the check'],
    note: { text: 'Prices include or exclude VAT: to confirm. Hourly or fixed fees for complex cases: to confirm.', tbc: true },
  },

  // ---------- 4. Penalties and time limits (tables) ----------
  deadlines: {
    eyebrow: 'Penalties & time limits',
    h2: 'HMRC tax investigation penalties and time limits',
    intro: 'Penalties depend on why the error happened and whether you told HMRC first.',
    tables: [
      {
        caption: 'Penalties for inaccuracies (% of the extra tax)',
        head: ['Behaviour', 'You told HMRC first', 'HMRC found it'],
        rows: [
          ['Took reasonable care', 'No penalty', 'No penalty'],
          ['Careless', '0% to 30%', '15% to 30%'],
          ['Deliberate', '20% to 70%', '35% to 70%'],
          ['Deliberate and concealed', '30% to 100%', '50% to 100%'],
        ],
        after: 'Penalties are reduced for telling HMRC, helping it work out the tax and giving access to records. Careless penalties can be suspended for up to 2 years.',
      },
      {
        caption: 'Key time limits',
        head: ['What', 'Time limit'],
        rows: [
          ['HMRC opens an enquiry into an on-time return', '12 months after HMRC receives it'],
          ['HMRC assesses tax: normal limit', '4 years after the end of the tax year'],
          ['Careless error', '6 years'],
          ['Deliberate error', '20 years'],
          ['Offshore matters (most cases)', '12 years'],
          ['Accept a COP9 offer', '60 days'],
          ['Ask for a review or appeal a decision', '30 days'],
        ],
      },
    ],
    urgent: {
      title: 'Received a letter from HMRC?',
      text: 'Do not ignore it. Note the reply date and keep filing your returns. Send the letter to our team and we tell you what HMRC is asking for and what to do next.',
      cta: 'Send us your letter',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we handle an HMRC tax investigation',
    image: consultation,
    imageAlt: 'Adviser and client reading through papers together at a table with a laptop',
    steps: [
      { title: 'Free first call', text: 'Tell us what HMRC sent you. We explain what it means and what we would do.' },
      { title: 'We become your agent', text: 'We get authorisation, review your records and reply to HMRC by the deadline.' },
      { title: 'We see it through', text: 'We deal with the officer, argue penalty reductions and agree the outcome or ask for a review.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Every letter from HMRC', 'Tax returns for the years in question', 'Bank statements',
      'Invoices, receipts and records', 'VAT returns, if registered', 'Details of foreign income or assets',
      'Crypto exchange statements', 'Any notes of calls with HMRC',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us or go it alone',
    h2: 'Specialist help or deal with HMRC yourself?',
    cols: ['Severin Finance', 'Dealing with HMRC yourself', 'Ignoring the letter'],
    rows: [
      ['Cost', 'Fee agreed upfront', 'Free', 'Risk of extra penalties'],
      ['Knows what HMRC is entitled to ask', true, 'You must research it', false],
      ['Penalty reductions argued', true, 'If you know how', false],
      ['Deadlines tracked', true, 'Up to you', false],
      ['HMRC calls and meetings handled', true, false, false],
      ['Review or appeal prepared', true, 'Complex', false],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC’s compliance check factsheets and internal manuals on GOV.UK. We update it when the rules change.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'HMRC tax investigation questions',
  faqs: [
    { q: 'What triggers an HMRC tax investigation?', a: 'HMRC can check any tax return. Things that may prompt a check include figures that look wrong, a large VAT refund claim when turnover is low, or a small amount of tax declared when turnover is high. A check does not mean HMRC thinks you have done anything wrong.' },
    { q: 'How far back can HMRC investigate?', a: '4 years as standard. HMRC can go back 6 years for careless errors and 20 years for deliberate ones. For most offshore matters the limit is 12 years. Each limit runs from the end of the tax year concerned.' },
    { q: 'How long does HMRC have to open an enquiry into my tax return?', a: '12 months after it receives the return, if you filed on time. If you filed late, the window runs to a later quarter date. After that, HMRC can still assess extra tax within the time limits above if it finds something new.' },
    { q: 'What is the difference between an aspect enquiry and a full enquiry?', a: 'An aspect enquiry looks at one part of your return, such as an expense or an income figure. A full enquiry looks at the whole return and the records behind it. We find out which it is and what HMRC needs.' },
    { q: 'What penalties can HMRC charge?', a: 'Up to 100% of the extra tax. Careless errors cost 0% to 30%, deliberate errors 20% to 70%, and deliberate and concealed errors 30% to 100%. Penalties are lower if you tell HMRC before it finds out, and there is no penalty if you took reasonable care.' },
    { q: 'What is COP9?', a: 'COP9 is HMRC’s Code of Practice 9, used where it suspects tax fraud. You are offered the Contractual Disclosure Facility and have 60 days to accept. If you make a full disclosure, HMRC will not start a criminal investigation with a view to prosecution for the conduct you disclose.' },
    { q: 'What is COP8?', a: 'COP8 is HMRC’s Code of Practice 8 for specialist investigations. HMRC uses it mainly for complex tax avoidance where COP9 is not appropriate. These cases are run by HMRC’s Fraud Investigation Service.' },
    { q: 'What is the Worldwide Disclosure Facility?', a: 'It is how you tell HMRC about unpaid UK tax on offshore income or assets. You notify HMRC through the Digital Disclosure Service, then have 90 days to make the full disclosure and pay. Landlords with UK rental income use the Let Property Campaign instead.' },
    { q: 'Do you offer fee protection insurance?', a: 'We are confirming this. Fee protection insurance can cover an accountant’s fees in an HMRC enquiry. Ask us for details before your next return is filed.', tbc: true },
    { q: 'How much does help with an HMRC investigation cost?', a: 'From £XXX for a review of your HMRC letter. Full enquiry support and disclosures are priced after we see the letter and your records. You get the fee in writing before we start.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/manchester/', 'Manchester'],
      ['/uk/birmingham/', 'Birmingham'],
    ] },
    { title: 'Guides', links: [
      ['/resources/hmrc-compliance-check-letter/', 'What to do with an HMRC compliance check letter'],
      ['/resources/hmrc-penalties-explained/', 'HMRC penalties explained'],
      ['/resources/worldwide-disclosure-facility/', 'Worldwide Disclosure Facility guide'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to us about your', em: 'HMRC letter',
    pills: ['Free first call', 'Fee agreed upfront', 'We deal with HMRC for you'],
    formTitle: 'Tell us what HMRC sent you', button: 'Get help with my letter',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/hmrc-compliance-checks-help-and-support', 'GOV.UK: HMRC compliance checks help and support'],
    ['https://www.gov.uk/government/publications/compliance-checks-penalties-for-inaccuracies-in-returns-or-documents-ccfs7a/compliance-checks-for-penalties-of-inaccuracies-in-returns-or-documents-ccfs7a-factsheet', 'HMRC factsheet CC/FS7a: Penalties for inaccuracies'],
    ['https://www.gov.uk/hmrc-internal-manuals/compliance-handbook/ch53100', 'HMRC Compliance Handbook CH53100: Assessment time limits'],
    ['https://www.gov.uk/guidance/admitting-tax-fraud-the-contractual-disclosure-facility-cdf', 'GOV.UK: Contractual Disclosure Facility (COP9)'],
    ['https://www.gov.uk/guidance/worldwide-disclosure-facility-make-a-disclosure', 'GOV.UK: Worldwide Disclosure Facility'],
    ['https://www.gov.uk/guidance/let-property-campaign-your-guide-to-making-a-disclosure', 'GOV.UK: Let Property Campaign'],
  ],
};
