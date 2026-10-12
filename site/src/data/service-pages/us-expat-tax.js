// US expat tax: all copy, facts and SEO for one service page (Americans living in the UK).
// The layout (src/layouts/ServicePage.astro) turns this into the page. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against IRS.gov and the UK-US tax treaty on GOV.UK on 13 October 2026 (sources at the bottom).
// Also checked: irs.gov foreign tax credit page, Form 8621 (PFIC) page and the 15 October extension page.
// US filing needs a US-licensed preparer (enrolled agent or CPA): written as "with a licensed partner", tbc.

import { rating } from '../reviews.js';
import hero from '../../assets/services/us-expat/us-expat-tax-london-thames-woman.jpg';
import working from '../../assets/services/us-expat/us-expat-tax-american-working-london.jpg';
import dual from '../../assets/services/us-expat/us-expat-tax-dual-citizen-passports.jpg';
import catchUp from '../../assets/services/us-expat/us-expat-tax-catch-up-filing-letter.jpg';
import savings from '../../assets/services/us-expat/us-expat-tax-isa-pension-couple.jpg';
import selfEmployed from '../../assets/services/us-expat/us-expat-tax-self-employed-laptop.jpg';
import moving from '../../assets/services/us-expat/us-expat-tax-moving-suitcase.jpg';
import consultation from '../../assets/services/us-expat/us-expat-tax-accountant-consultation.jpg';

export default {
  // ---------- SEO ----------
  url: '/us/expat-tax/',
  primaryKeyword: 'US expat tax',
  secondaryKeywords: [
    'US expat tax accountant London', 'US tax return for Americans in London', 'FBAR filing',
    'FATCA reporting', 'foreign earned income exclusion', 'US UK tax treaty', 'dual citizen taxes',
    'streamlined filing procedures',
  ],
  title: 'US Expat Tax Accountants in London | Severin Finance',
  description: 'US expat tax accountants in London: US return, FBAR and UK self assessment for Americans in the UK, done together. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United States', '/us/'],
    ['US expat tax', '/us/expat-tax/'],
  ],
  service: {
    name: 'US expat tax service',
    serviceType: 'US expat tax returns, FBAR and UK tax for Americans living in the UK',
    areaServed: [['Country', 'United States'], ['Country', 'United Kingdom']],
  },
  formTopic: 'US expat tax',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Cross-border tax · United States',
    h1: 'US expat tax accountants in London',
    answer: 'US expat tax rules follow you to London: US citizens and green card holders file a US return wherever they live. We coordinate your US federal return, FBAR and UK self assessment, using the foreign tax credit or the earned income exclusion to limit double tax. Extended 2025 returns are due 15 October 2026.',
    image: hero,
    imageAlt: 'Woman in an orange top by the River Thames at dusk with the London skyline behind her',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Next deadline', date: '15 October 2026', note: 'Extended 2025 US returns and FBARs' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'US returns filed with a licensed US partner', tbc: true },
      { text: rating.short, tbc: rating.tbc },
      { text: 'US and UK returns prepared together' },
    ],
  },

  jump: [
    ['who', 'Who needs to file'],
    ['prices', 'Prices'],
    ['deadlines', 'Deadlines & thresholds'],
    ['how', 'How it works'],
    ['compare', 'Who to use'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who needs help (photo cards) ----------
  who: {
    eyebrow: 'Who needs to file',
    h2: 'Who needs US expat tax help in the UK?',
    intro: 'US citizens and green card holders in the UK file in both countries. If one of these is you, we can help. Not sure? We check for free.',
    cards: [
      { title: 'Americans working in London', img: working, alt: 'Smiling woman in a denim jacket walking down a city street', tag: 'Salary taxed in the UK', text: 'You still file a US return. We compare the foreign tax credit and the earned income exclusion and use the one that leaves less US tax.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Dual citizens & accidental Americans', img: dual, alt: 'Hand holding two US passports with boarding passes tucked inside', tag: 'Born in the US or to US parents', text: 'US citizenship means US filing, even if you have never lived there. We check what you owe the IRS, if anything, and put it right.' },
      { title: 'Behind on US filing', img: catchUp, alt: 'Man reading a letter at his kitchen table', tag: 'Missed returns or FBARs', text: 'If you did not know you had to file, the Streamlined Foreign Offshore Procedures can bring you up to date without most penalties.' },
      { title: 'UK savings, ISAs & pensions', img: savings, alt: 'Couple reading paperwork together in a bright kitchen', tag: 'ISAs, UK funds, workplace pensions', text: 'The US gives ISAs no tax-free status, and many UK funds count as PFICs. We report them correctly and flag the costly ones.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
      { title: 'Self-employed & business owners', img: selfEmployed, alt: 'Man in a cap drinking coffee while working on a laptop', tag: 'Freelance or UK company', text: 'Running a UK business adds US reporting. We prepare both sides so your UK accounts and your US return match.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Moving between the US and UK', img: moving, alt: 'Woman pulling a pink suitcase along a rainy station platform', tag: 'Arriving or leaving this year', text: 'The year you move needs care on both sides. We plan the move date, your UK residence status and your first returns.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'US expat tax fees',
    h2: 'Fixed fees for US and UK returns',
    intro: 'You know the price before we start. One fee covers the work agreed in writing.',
    plans: [
      { name: 'US return', for: 'Salaried Americans in the UK', price: '£XXX', tbc: true, items: ['Federal Form 1040 with foreign tax credit or exclusion', 'FBAR (FinCEN Form 114)', 'Treaty position checked'] },
      { name: 'US and UK together', for: 'Americans who also file UK self assessment', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['US federal return and FBAR', 'UK self assessment return', 'Foreign tax credits matched across both returns', 'Form 8938 (FATCA) where needed'] },
      { name: 'Catch-up (Streamlined)', for: 'Americans behind on US filing', price: '£XXX', tbc: true, items: ['Last 3 years of US returns', 'Last 6 years of FBARs', 'Non-wilful certification prepared with you', 'ISAs and UK funds (PFIC) reviewed'] },
    ],
    included: ['Free first consultation', 'Fixed fee in writing', 'US and UK figures reconciled', 'Tax position shown to you before filing', 'Deadline reminders for both countries'],
    note: { text: 'Prices include or exclude VAT: to confirm. US returns are prepared and signed with our licensed US partner (enrolled agent or CPA): to confirm.', tbc: true },
  },

  // ---------- 4. Deadlines and thresholds (tables) ----------
  deadlines: {
    eyebrow: 'Deadlines & thresholds',
    h2: 'US expat tax deadlines and 2026 thresholds',
    intro: 'The US tax year runs from 1 January to 31 December. These are the dates for 2026 returns, filed in 2027.',
    tables: [
      {
        caption: 'US filing deadlines for Americans abroad (2026 returns)',
        head: ['What', 'Deadline'],
        rows: [
          ['Extended 2025 returns and FBARs', '15 October 2026'],
          ['Federal return and any tax due (normal date)', '15 April 2027'],
          ['Automatic extension if you live abroad (attach a statement)', '15 June 2027'],
          ['Further extension with Form 4868', '15 October 2027 (filing only, not payment)'],
          ['FBAR (FinCEN Form 114)', '15 April 2027, extended automatically to 15 October 2027'],
        ],
        after: 'Interest on unpaid US tax runs from 15 April, even when you have an extension to file.',
      },
      {
        caption: 'Key US figures for 2026',
        head: ['Rule', '2026 figure'],
        rows: [
          ['Foreign earned income exclusion', '$132,900 per person'],
          ['Physical presence test for the exclusion', '330 full days abroad in any 12 months in a row'],
          ['FBAR', 'Foreign accounts above $10,000 in total at any time in the year'],
          ['Form 8938 (FATCA), single, living abroad', 'Over $200,000 on 31 December or $300,000 at any time'],
          ['Form 8938, married filing jointly, living abroad', 'Over $400,000 on 31 December or $600,000 at any time'],
        ],
        after: 'You cannot claim the foreign tax credit and the exclusion on the same income.',
      },
    ],
    urgent: {
      title: 'Behind on US filing?',
      text: 'Many Americans in the UK find out late. If you did not know you had to file, the Streamlined Foreign Offshore Procedures let you catch up on 3 years of returns and 6 years of FBARs without most penalties.',
      cta: 'Talk to us about catching up',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our US expat tax service works',
    image: consultation,
    imageAlt: 'Two women talking through paperwork at a desk in a bright office',
    steps: [
      { title: 'Free consultation', text: 'We check what you must file in each country and which years are open. You get a fixed fee in writing.' },
      { title: 'Send your documents', text: 'We send you one checklist for both countries. Upload or email what you have.' },
      { title: 'Approve, then we file', text: 'You see your US and UK tax positions first. Then both returns and your FBAR are filed.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'US passport and Social Security number', 'Your last US return, if you filed one', 'UK P60 and P11D',
      'Bank, savings and ISA statements', 'Highest balance of each account in the year', 'Pension statements',
      'Investment and fund statements', 'Days spent in the US',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Who to use',
    h2: 'One team for both countries, or two firms?',
    cols: ['Severin Finance', 'A US-only preparer', 'A UK-only accountant'],
    rows: [
      ['US federal return and FBAR', true, true, false],
      ['UK self assessment', true, false, true],
      ['Foreign tax credits matched on both returns', true, 'Partly', 'Partly'],
      ['ISAs, UK pensions and treaty rules', true, 'Often limited', 'Often limited'],
      ['Meet in London', true, false, true],
      ['Price', 'Fixed fee', 'Varies', 'Varies'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against IRS guidance and the UK-US tax treaty on GOV.UK. US and UK rules change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'US expat tax questions',
  faqs: [
    { q: 'Do US citizens living in the UK have to file a US tax return?', a: 'Yes. US citizens and green card holders file a US return on their worldwide income wherever they live, if their income is above the filing threshold. Moving to London does not end that. The foreign tax credit or the foreign earned income exclusion often reduces the US tax, but you must file to claim them.' },
    { q: 'When is the US tax deadline for Americans living abroad?', a: '15 June 2027 for 2026 returns, if you live outside the US. The normal date is 15 April 2027, and Americans abroad get an automatic two-month extension by attaching a statement. Form 4868 extends filing to 15 October 2027. Interest on any tax due still runs from 15 April.' },
    { q: 'Do I need to file an FBAR?', a: 'Yes, if your non-US accounts added up to more than $10,000 at any time in the year. The FBAR (FinCEN Form 114) lists your foreign bank and financial accounts. It is filed online with FinCEN, not with your tax return, by 15 April, with an automatic extension to 15 October. UK current accounts, savings accounts and ISAs usually count.' },
    { q: 'What is the foreign earned income exclusion for 2026?', a: '$132,900 per person. You qualify if you pass the bona fide residence test or spend 330 full days outside the US in any 12 consecutive months. It covers earned income such as salary, not interest, dividends or pensions. You cannot also claim the foreign tax credit on the same income.' },
    { q: 'Should I claim the foreign tax credit or the exclusion?', a: 'It depends on your figures. UK income tax on a salary is often higher than the US tax on it, so the foreign tax credit (Form 1116) can remove the US tax on those earnings. The exclusion can suit some lower earners. We work out both before filing and use the better one.' },
    { q: 'Are ISAs tax-free for Americans?', a: 'No. The US gives ISAs no special status, so interest, dividends and gains inside an ISA are generally taxable on your US return. Many UK funds, including funds held in an ISA, can also count as passive foreign investment companies (PFICs). These need Form 8621 and can be taxed at high rates with an interest charge. Talk to us before you invest.' },
    { q: 'Does the UK-US tax treaty stop double taxation?', a: 'Partly. The treaty decides which country taxes each kind of income and requires relief for tax paid in the other. But its saving clause lets the US tax its citizens as if the treaty did not exist, with exceptions such as pensions and double tax relief. In practice, the foreign tax credit does most of the work.' },
    { q: 'I have never filed a US return. What should I do?', a: 'Use the Streamlined Foreign Offshore Procedures, if your failure to file was not wilful. You file the last 3 years of returns and the last 6 years of FBARs, pay any tax and interest, and certify that the failure was not wilful. You must have lived outside the US in at least one of those years. It is not open to you if the IRS is already examining you.' },
    { q: 'How much does a US expat tax accountant cost?', a: '£XXX for a US return with FBAR. Returns that also include UK self assessment, a business or catch-up years cost more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'Can you file my US tax return from London?', a: 'Yes, with our licensed US partner. Your US return and FBAR are prepared with an enrolled agent or CPA, and our team prepares your UK return using the same figures.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      ['/ca/canada-uk-tax/', 'Canada UK tax'],
      ['/au/australia-uk-tax/', 'Australia UK tax'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/us/new-york/', 'New York'],
      ['/us/los-angeles/', 'Los Angeles'],
      ['/us/san-francisco/', 'San Francisco'],
      ['/us/boston/', 'Boston'],
    ] },
    { title: 'Guides', links: [
      ['/resources/how-to-file-fbar/', 'How to file an FBAR'],
      ['/resources/isas-pfic-americans-uk/', 'ISAs and PFICs for Americans in the UK'],
      ['/resources/us-uk-totalization-agreement/', 'US UK totalization agreement'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'US expat tax return',
    pills: ['Free first consultation', 'Fixed fee in writing', 'US and UK done together'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.irs.gov/individuals/international-taxpayers/figuring-the-foreign-earned-income-exclusion', 'IRS: Foreign earned income exclusion'],
    ['https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad-automatic-2-month-extension-of-time-to-file', 'IRS: Automatic 2-month extension for taxpayers abroad'],
    ['https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar', 'IRS: Report of Foreign Bank and Financial Accounts (FBAR)'],
    ['https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements', 'IRS: Form 8938 and FBAR requirements compared'],
    ['https://www.irs.gov/individuals/international-taxpayers/us-taxpayers-residing-outside-the-united-states', 'IRS: Streamlined Foreign Offshore Procedures'],
    ['https://www.gov.uk/government/publications/usa-tax-treaties/2001-uk-usa-double-taxation-convention-as-amended-by-the-2002-protocol-in-force', 'GOV.UK: UK-USA double taxation convention'],
  ],
};
