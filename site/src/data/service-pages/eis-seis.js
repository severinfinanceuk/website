// EIS and SEIS: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Severin has not yet confirmed it offers EIS/SEIS work: keep scope modest, confirm before launch.
// Facts checked against GOV.UK venture capital schemes guidance on 13 October 2026, including the
// EIS limits that apply from 6 April 2026 (sources at the bottom). SEIS company limits: GOV.UK page
// last changed May 2023 and shows no April 2026 change.

import { rating } from '../reviews.js';
import hero from '../../assets/services/eis-seis/eis-seis-startup-founders-colourful-office.jpg';
import preseed from '../../assets/services/eis-seis/seis-pre-seed-founder-laptop-sticky-notes.jpg';
import growth from '../../assets/services/eis-seis/eis-funding-round-founder-pitch-presentation.jpg';
import kic from '../../assets/services/eis-seis/knowledge-intensive-company-eis-scientist-lab.jpg';
import angel from '../../assets/services/eis-seis/angel-investor-seis-cafe-meeting.jpg';
import crowd from '../../assets/services/eis-seis/eis-crowdfunding-syndicate-startup-event-audience.jpg';
import raised from '../../assets/services/eis-seis/eis-compliance-founder-paperwork-laptop.jpg';
import advisers from '../../assets/services/eis-seis/seis-advance-assurance-adviser-founder-documents.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/company-services/eis-seis/',
  primaryKeyword: 'EIS and SEIS',
  secondaryKeywords: [
    'SEIS advance assurance', 'EIS advance assurance', 'SEIS accountant', 'EIS accountant',
    'EIS1 compliance statement', 'SEIS1', 'knowledge-intensive company EIS', 'EIS tax relief',
  ],
  title: 'EIS and SEIS Advance Assurance | Severin Finance',
  description: 'EIS and SEIS advance assurance for startups in London, the UK and France. We check eligibility, apply to HMRC and file your EIS1 or SEIS1.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Company services', '/uk/company-services/'],
    ['EIS and SEIS', '/uk/company-services/eis-seis/'],
  ],
  service: {
    name: 'EIS and SEIS advance assurance and compliance service',
    serviceType: 'EIS and SEIS tax relief applications',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London'], ['Country', 'France']],
  },
  formTopic: 'EIS and SEIS',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Company services · EIS and SEIS',
    h1: 'EIS and SEIS advance assurance for London and France',
    answer: 'EIS and SEIS give your investors income tax relief of 30% or 50% on what they invest in your company. We check your company qualifies, apply to HMRC for advance assurance before you raise and file the EIS1 or SEIS1 afterwards, for founders in London, across the UK and in France.',
    image: hero,
    imageAlt: 'Three startup founders working with laptops and papers at a shared table in a bright office with a colourful geometric wall',
    price: { from: '£XXX', note: 'fixed fee for advance assurance', tbc: true },
    deadline: { label: 'EIS annual company limit', date: '£10m', note: 'From 6 April 2026 (£20m for knowledge-intensive)' },
    cta: 'Check if you qualify',
    trust: [
      { text: 'Advance assurance and EIS1/SEIS1' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Limits checked against 2026 rules' },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Prices'],
    ['deadlines', 'Limits & reliefs'],
    ['how', 'How it works'],
    ['compare', 'SEIS vs EIS'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who we help with EIS and SEIS',
    intro: 'Founders raising from UK investors, and the investors themselves.',
    cards: [
      { title: 'Pre-seed startups', img: preseed, alt: 'Young founder in glasses and a mustard jumper working on a laptop behind a glass board covered in sticky notes', tag: 'SEIS, up to £250,000', text: 'Your first round. SEIS gives angels 50% relief, which makes an early cheque far easier to write.', link: ['/uk/company-services/company-formation/', 'Company formation'] },
      { title: 'Growing companies', img: growth, alt: 'Founder presenting charts on a large screen to a small group around a meeting table', tag: 'EIS, up to £10m a year', text: 'Seed and Series A rounds. We check the age, size and risk-to-capital rules before you pitch.', link: ['/uk/company-services/business-valuation/', 'Business valuation'] },
      { title: 'Knowledge-intensive companies', img: kic, alt: 'Scientist in a white lab coat working at a computer on a research bench full of equipment and colourful cables', tag: 'Higher EIS limits', text: 'Research-led companies can raise up to £20m a year and £40m in total under EIS.' },
      { title: 'Angel investors', img: angel, alt: 'Smiling investor in a dark suit meeting a founder over coffee at a café table', tag: 'Claiming the relief', text: 'You claim on your tax return with the EIS3 or SEIS3 certificate. We handle the claim and carry-back.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Crowdfunding and syndicates', img: crowd, alt: 'Smiling audience of men and women at a startup networking event', tag: 'Many investors, one round', text: 'Platforms and syndicates usually ask for advance assurance first. We prepare it with your round.' },
      { title: 'Already raised the money', img: raised, alt: 'Founder at a desk going through financial paperwork next to a laptop in a brick-walled office', tag: 'EIS1 or SEIS1 to file', text: 'Investors cannot claim until you file the compliance statement. We prepare it and handle HMRC questions.', link: ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'EIS and SEIS fees',
    h2: 'Fixed fees for EIS and SEIS',
    intro: 'You know the price before we start. Most founders need advance assurance and then a compliance statement.',
    plans: [
      { name: 'Eligibility check', for: 'Founders before a round', price: '£XXX', tbc: true, items: ['SEIS and EIS conditions checked', 'Issues to fix flagged', 'Written yes, no or what to change'] },
      { name: 'Advance assurance', for: 'Founders ready to raise', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Eligibility check included', 'Business plan and forecasts reviewed', 'HMRC online application prepared', 'HMRC questions answered', 'Investor-ready summary of the outcome'] },
      { name: 'Compliance statement', for: 'After the shares are issued', price: '£XXX', tbc: true, items: ['EIS1 or SEIS1 prepared and filed', 'Share issue details checked', 'Certificates passed to investors'] },
    ],
    included: ['Free first consultation', 'Fixed fee agreed upfront', 'Plain-English advice', 'HMRC correspondence', 'Deadline reminders'],
    note: { text: 'Prices, VAT, and whether a combined advance assurance and EIS1/SEIS1 package is offered: to confirm.', tbc: true },
  },

  // ---------- 4. Limits and reliefs (tables) ----------
  deadlines: {
    eyebrow: 'Limits & reliefs',
    h2: 'EIS and SEIS limits and investor reliefs',
    intro: 'Figures checked on GOV.UK on 13 October 2026. EIS company limits rose from 6 April 2026.',
    tables: [
      {
        caption: 'What investors get',
        head: ['Relief', 'SEIS', 'EIS'],
        rows: [
          ['Income tax relief', '50%', '30%'],
          ['Maximum investment a year', '£200,000', '£1 million (£2 million if the extra is in knowledge-intensive companies)'],
          ['Minimum holding period', '3 years', '3 years'],
          ['Carry back to the previous tax year', 'Yes', 'Yes'],
          ['Capital gains tax', 'No CGT on a gain when sold after 3 years. Reinvestment relief on 50% of the amount, up to £100,000', 'No CGT on a gain when sold after 3 years. Deferral relief on other gains'],
          ['If the company fails', 'Loss relief', 'Loss relief'],
        ],
      },
      {
        caption: 'What your company can raise',
        head: ['Company rule', 'SEIS', 'EIS (from 6 April 2026)'],
        rows: [
          ['Amount you can raise', '£250,000 in total', '£10m a year, £24m lifetime (knowledge-intensive: £20m and £40m)'],
          ['Gross assets', 'No more than £350,000', 'No more than £30m before and £35m after the issue'],
          ['Employees', 'Fewer than 25', 'Fewer than 250 full-time equivalent'],
          ['Company age', 'Trading for no more than 3 years', 'Within 7 years of first commercial sale (different rules if knowledge-intensive)'],
          ['Spend the money within', '3 years', '2 years'],
          ['Compliance statement', 'SEIS1', 'EIS1'],
        ],
        after: 'The SEIS limit includes other de minimis state aid received in the previous 3 years. Lower EIS limits apply to specified companies, mainly in Northern Ireland.',
      },
    ],
    urgent: {
      title: 'Raising in the next few months?',
      text: 'HMRC does not give a timescale for advance assurance, and many investors will not commit without it. Apply before you start your round.',
      cta: 'Check if you qualify',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How SEIS advance assurance works with us',
    image: advisers,
    imageAlt: 'Adviser showing a document to a founder at a table covered with notebooks and papers',
    steps: [
      { title: 'Eligibility check', text: 'We check the company, the trade and the planned round against the SEIS and EIS rules.' },
      { title: 'Advance assurance', text: 'We prepare and submit HMRC’s online application with your plan, forecasts and documents, and answer HMRC’s questions.' },
      { title: 'Compliance statement', text: 'After the shares are issued and the conditions are met, we file the SEIS1 or EIS1 so HMRC issues investor certificates.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Business plan', 'Financial forecasts', 'Latest accounts (if any)', 'Articles of association',
      'Register of members', 'Amount you plan to raise', 'Prospective investors’ details', 'Draft subscription documents',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'SEIS vs EIS',
    h2: 'SEIS or EIS: which fits your round?',
    cols: ['SEIS', 'EIS', 'No scheme'],
    rows: [
      ['Investor income tax relief', '50%', '30%', 'None'],
      ['Most you can raise', '£250,000', '£10m a year', 'No limit'],
      ['Best for', 'First round', 'Seed and later rounds', 'Investors who do not pay UK tax'],
      ['Advance assurance available', true, true, false],
      ['Compliance statement needed', true, true, false],
      ['Can be used together', 'SEIS first, then EIS', 'Ends SEIS', 'n/a'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC’s venture capital schemes guidance on GOV.UK, including the EIS limits that changed on 6 April 2026.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'EIS and SEIS questions',
  faqs: [
    { q: 'What is the difference between EIS and SEIS?', a: 'Size and stage. SEIS is for very early companies raising up to £250,000 and gives investors 50% income tax relief. EIS is for larger raises, up to £10m a year from 6 April 2026, and gives 30% relief.' },
    { q: 'What is SEIS advance assurance?', a: 'It is HMRC’s view, before you raise, that your company and share issue are likely to qualify for SEIS. It is optional, but many investors will not invest without it. It does not confirm that each investor qualifies.' },
    { q: 'How long does advance assurance take?', a: 'HMRC does not publish a timescale. Incomplete applications take longer, so we send the business plan, forecasts and documents HMRC asks for in one go.' },
    { q: 'Can I use SEIS and EIS in the same company?', a: 'Yes. Most companies raise under SEIS first and then EIS. You cannot use SEIS once the company has received EIS or VCT investment.' },
    { q: 'When can I file the EIS1 or SEIS1?', a: 'After 4 months of trading or qualifying activity. For SEIS, you can also file once 70% of the money is spent. The EIS1 deadline is 2 years after the end of the tax year of the share issue, or 2 years after the 4-month point if later.' },
    { q: 'How long must investors hold EIS or SEIS shares?', a: '3 years. If they sell earlier, or the company stops qualifying in that time, the relief can be withdrawn.' },
    { q: 'What are the EIS limits from April 2026?', a: '£10m a year and £24m in total, or £20m and £40m for knowledge-intensive companies. Gross assets can be no more than £30m before and £35m after the share issue.' },
    { q: 'How do investors claim EIS or SEIS relief?', a: 'With the EIS3 or SEIS3 certificate the company gives them after HMRC accepts the compliance statement. They claim on their Self Assessment tax return, and can carry the relief back to the previous tax year.' },
    { q: 'How much does EIS or SEIS advance assurance cost?', a: 'Our fixed fees start at £XXX for advance assurance. The EIS1 or SEIS1 compliance statement is a separate fixed fee. You get the exact fee in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/company-services/company-formation/', 'Company formation'],
      ['/uk/company-services/business-valuation/', 'Business valuation'],
      ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment for investors'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/shoreditch/', 'Shoreditch'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/london/islington/', 'Islington'],
      ['/uk/cambridge/', 'Cambridge'],
      ['/fr/', 'France'],
      ['/fr/londres/', 'Français à Londres'],
    ] },
    { title: 'Guides', links: [
      ['/resources/seis-advance-assurance-guide/', 'SEIS advance assurance guide'],
      ['/resources/eis-vs-seis/', 'EIS vs SEIS'],
      ['/resources/eis1-compliance-statement/', 'How to file an EIS1'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Raise with confidence using', em: 'EIS and SEIS',
    pills: ['Free first consultation', 'Eligibility checked first', 'Fixed fee in writing'],
    formTitle: 'Check if you qualify', button: 'Check my company',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/venture-capital-schemes-tax-relief-for-investors', 'GOV.UK: Venture capital schemes, tax relief for investors'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-for-the-enterprise-investment-scheme', 'GOV.UK: Apply for the Enterprise Investment Scheme'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-to-use-the-seed-enterprise-investment-scheme', 'GOV.UK: Apply to use the Seed Enterprise Investment Scheme'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-for-advance-assurance', 'GOV.UK: Apply for advance assurance'],
    ['https://www.gov.uk/government/publications/enterprise-investment-scheme-eis-and-venture-capital-trusts-vct-changes/venture-capital-trusts-enterprise-investment-scheme-investment-limit-increase-and-restructure', 'HMRC: EIS and VCT limit increase from April 2026'],
  ],
};
