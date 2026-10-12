// Australia UK tax: all copy, facts and SEO for one service page (moving between Australia and the UK).
// The layout (src/layouts/ServicePage.astro) turns this into the page. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against ato.gov.au (ATO), GOV.UK and the UK-Australia tax treaty on GOV.UK on 13 October 2026 (sources at the bottom).
// Also checked: ATO 'Transfer from a foreign super fund to an Australian super fund' (6-month rule, contribution caps).
// ato.gov.au blocks automated fetches: ATO pages were checked through search results limited to ato.gov.au.
// "Tax agent" and "BAS agent" are TPB-registered titles: never used for Severin. Australian returns are
// written as "with a registered tax agent partner", tbc. Pension transfer advice is regulated: we only explain the tax.

import { rating } from '../reviews.js';
import hero from '../../assets/services/australia-uk/australia-uk-tax-sydney-sunset-couple.jpg';
import moving from '../../assets/services/australia-uk/australia-uk-tax-moving-beach-couple.jpg';
import london from '../../assets/services/australia-uk/australia-uk-tax-australians-london-tower-bridge.jpg';
import pension from '../../assets/services/australia-uk/australia-uk-tax-pension-transfer-retirees.jpg';
import selling from '../../assets/services/australia-uk/australia-uk-tax-selling-home-keys.jpg';
import returning from '../../assets/services/australia-uk/australia-uk-tax-returning-uk-airport.jpg';
import landlord from '../../assets/services/australia-uk/australia-uk-tax-uk-landlord-laptop.jpg';
import consultation from '../../assets/services/australia-uk/australia-uk-tax-online-meeting-at-home.jpg';

export default {
  // ---------- SEO ----------
  url: '/au/australia-uk-tax/',
  primaryKeyword: 'Australia UK tax',
  secondaryKeywords: [
    'UK expat tax Australia', 'UK Australia tax treaty', 'Australian tax residency',
    'UK pension transfer to Australia', 'temporary resident tax Australia',
    'main residence exemption foreign resident', 'Australian tax return deadline', 'moving to Australia tax',
  ],
  title: 'Australia UK Tax Accountants in London | Severin Finance',
  description: 'Australia UK tax help: residency, temporary resident rules, UK pensions and super, selling a home from abroad. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['Australia', '/au/'],
    ['Australia UK tax', '/au/australia-uk-tax/'],
  ],
  service: {
    name: 'Australia UK tax service',
    serviceType: 'Cross-border tax for people moving between Australia and the United Kingdom',
    areaServed: [['Country', 'Australia'], ['Country', 'United Kingdom']],
  },
  formTopic: 'Australia UK tax',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Cross-border tax · Australia',
    h1: 'Australia UK tax accountants in London',
    answer: 'Australia UK tax depends on your residency in each country, and the tax years do not line up: Australia’s runs from 1 July to 30 June. Our team handles your UK tax and coordinates your Australian return, including UK pensions, temporary resident rules and selling a home from abroad. Self-lodged 2025–26 returns are due 31 October 2026.',
    image: hero,
    imageAlt: 'Couple sitting on a hill watching a pink sunset over the Sydney skyline',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Next deadline', date: '31 October 2026', note: 'Self-lodged Australian returns for 2025–26' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Australian returns lodged with a registered tax agent partner', tbc: true },
      { text: rating.short, tbc: rating.tbc },
      { text: 'UK and Australian figures prepared together' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Deadlines & rules'],
    ['how', 'How it works'],
    ['compare', 'Who to use'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'Who needs Australia UK tax advice?',
    intro: 'Anyone with income, property or a pension in both countries. If one of these is you, talk to us before you move or file.',
    cards: [
      { title: 'Britons moving to Australia', img: moving, alt: 'Man and girl walking barefoot along the edge of the sea on a sandy beach', tag: 'Temporary or permanent visa', text: 'On a temporary visa, most foreign income is exempt in Australia. On a permanent visa it is taxed. We plan the move and your last UK return.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
      { title: 'Australians living in London', img: london, alt: 'People walking along the Thames path beside Tower Bridge', tag: 'UK resident, Australian ties', text: 'You can stay an Australian resident for tax while living here. We check the residency tests and the treaty tie-breaker, then file your UK return.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'UK pensions and super', img: pension, alt: 'Older couple walking arm in arm down a country road', tag: 'QROPS transfers', text: 'A transfer can bring a 25% UK charge and Australian tax on growth. We explain the tax on both sides. A regulated adviser covers the transfer itself.' },
      { title: 'Selling a home while overseas', img: selling, alt: 'Hand holding house keys above colourful miniature houses', tag: 'Main residence exemption', text: 'Foreign residents usually cannot use the main residence exemption on an Australian home. We check the life events test and the timing of the sale.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
      { title: 'Returning to the UK', img: returning, alt: 'Couple with backpacks walking through a bright airport terminal', tag: 'Leaving Australia', text: 'Coming home touches two tax years in each country. We work out your UK residence date and what Australia still taxes.' },
      { title: 'UK landlords in Australia', img: landlord, alt: 'Smiling couple looking at a laptop together in the evening', tag: 'UK rental property', text: 'UK rent stays taxable in the UK. If you are Australian resident, Australia taxes it too, usually with credit for the UK tax. We file both sides.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Australia UK tax fees',
    h2: 'Fixed fees for Australia UK tax',
    intro: 'You know the price before we start. One fee covers the work agreed in writing.',
    plans: [
      { name: 'Moving year', for: 'Moving to or from Australia', price: '£XXX', tbc: true, items: ['Residence date planned with you', 'UK return for the year you move', 'Temporary resident status checked', 'Treaty tie-breaker checked'] },
      { name: 'Both countries, every year', for: 'Income or property in Australia and the UK', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['UK self assessment return', 'Australian return coordinated with the same figures', 'UK rent, pensions and savings', 'Relief for tax paid in the other country'] },
      { name: 'Pensions & property sales', for: 'Pension transfers and home sales', price: '£XXX', tbc: true, items: ['Tax on a UK pension transfer explained', 'Capital gains on an Australian or UK home', 'Main residence and life events test checked'] },
    ],
    included: ['Free first consultation', 'Fixed fee in writing', 'Tax position shown to you before filing', 'Deadline reminders for both countries', 'HMRC letters about the return answered'],
    note: { text: 'Prices include or exclude VAT: to confirm. Australian returns are prepared and lodged with our partner, a TPB-registered tax agent: to confirm.', tbc: true },
  },

  // ---------- 4. Deadlines and key rules (tables) ----------
  deadlines: {
    eyebrow: 'Deadlines & rules',
    h2: 'UK expat tax in Australia: deadlines and rules',
    intro: 'Australia’s income year runs from 1 July to 30 June. The UK’s tax year runs from 6 April to 5 April.',
    tables: [
      {
        caption: 'Australian and UK deadlines',
        head: ['What', 'Deadline'],
        rows: [
          ['Australian return for 2025–26, if you lodge it yourself', '31 October 2026'],
          ['Tax to pay on a self-lodged return', '21 November 2026'],
          ['Australian return through a registered tax agent', 'Later, if you are on the agent’s list before 31 October'],
          ['UK online self assessment for 2025/26', '31 January 2027'],
        ],
        after: 'If 31 October falls on a weekend, you can lodge on the next business day.',
      },
      {
        caption: 'Key Australia UK tax rules',
        head: ['Rule', 'What it means'],
        rows: [
          ['Australian residency tests', 'Resides, domicile, 183-day and Commonwealth super fund tests. Meeting one makes you resident.'],
          ['Temporary residents', 'Most foreign income and gains are exempt, except pay for work done overseas while a temporary resident'],
          ['UK pensions paid to an Australian resident', 'Taxed only in Australia (treaty Article 17)'],
          ['UK pension transfer to super', 'The fund must be a QROPS, or the transfer can be taxed at 40% or more in the UK'],
          ['Overseas transfer charge', '25%, unless an exemption applies, such as living in the country where the QROPS is based'],
          ['Main residence exemption', 'Not available to foreign residents on sales from 1 July 2020, unless the life events test is met'],
        ],
        after: 'Transfer UK pension savings more than 6 months after becoming an Australian resident and the growth since you arrived is taxable in Australia. Transfers usually count towards the non-concessional contributions cap ($130,000 for 2026–27).',
      },
    ],
    urgent: {
      title: 'Selling, transferring or moving soon?',
      text: 'Timing changes the tax. Selling an Australian home while still resident, or transferring a pension within 6 months of arriving, can cost far less. Talk to us before you act.',
      cta: 'Check my timing',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our Australia UK tax service works',
    image: consultation,
    imageAlt: 'Two women at a kitchen table with a laptop and a cup of coffee',
    steps: [
      { title: 'Free consultation', text: 'Video call or in London. We map your residence in both countries and agree a fixed fee in writing.' },
      { title: 'Send your documents', text: 'One checklist for both countries and both tax years. Upload or email what you have.' },
      { title: 'Approve, then we file', text: 'You see both tax positions first. Then the returns are lodged and you get the confirmations.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Tax file number and UK National Insurance number', 'Visa type and arrival or departure date', 'UK P60 or P45',
      'Australian income statement', 'UK pension and super statements', 'Rental income and costs',
      'Purchase and sale papers for any home sold', 'Foreign bank and investment statements',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Who to use',
    h2: 'One team for both countries, or two firms?',
    cols: ['Severin Finance', 'An Australian-only firm', 'A UK-only accountant'],
    rows: [
      ['Australian return', true, true, false],
      ['UK self assessment', true, false, true],
      ['Two tax years lined up', true, 'Partly', 'Partly'],
      ['UK pensions, QROPS and treaty rules', true, 'Often limited', 'Often limited'],
      ['Meet in London', true, false, true],
      ['Price', 'Fixed fee', 'Varies', 'Varies'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against ATO guidance, GOV.UK and the UK-Australia tax treaty. Rules change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Australia UK tax questions',
  faqs: [
    { q: 'Am I an Australian resident for tax purposes?', a: 'Possibly, even while living in London. The ATO uses four tests: the resides test, the domicile test, the 183-day test and the Commonwealth superannuation fund test. Meeting any one makes you resident. If both countries treat you as resident, the treaty tie-breaker looks at your permanent home, then your centre of vital interests, then your nationality.' },
    { q: 'When is the Australian tax return due?', a: '31 October 2026 for the 2025–26 income year, if you lodge it yourself. If 31 October falls on a weekend, you can lodge on the next business day. A registered tax agent can usually lodge later, if you are on their client list before 31 October.' },
    { q: 'Do temporary residents pay Australian tax on UK income?', a: 'Mostly no. If you hold a temporary visa and neither you nor your spouse is an Australian citizen or permanent resident, most foreign income and gains are exempt. Pay for work done overseas while you are a temporary resident is still taxable, and Australian income is taxed as normal.' },
    { q: 'Can I transfer my UK pension to Australian super?', a: 'Yes, but only to a fund that is a qualifying recognised overseas pension scheme (QROPS). Otherwise the UK can tax the transfer at 40% or more. A 25% overseas transfer charge applies unless an exemption fits, such as living in the country where the QROPS is based. We explain the tax; a regulated adviser should advise on the transfer itself.' },
    { q: 'Does Australia tax my UK pension?', a: 'Yes, if you live in Australia. Under the UK-Australia treaty, pensions and annuities paid to an Australian resident are taxed only in Australia. Lump sums are not mentioned in that article, so check before taking one.' },
    { q: 'Do I pay capital gains tax selling my Australian home while living overseas?', a: 'Usually, yes. Foreign residents cannot claim the main residence exemption on sales from 1 July 2020, unless they meet the life events test: foreign resident for 6 years or less, plus a terminal illness, death or divorce in the immediate family. Selling while still an Australian resident can keep the exemption.' },
    { q: 'Do I still file a UK tax return after moving to Australia?', a: 'Often, yes. You usually file for the tax year you leave, and every year after if you still have UK income such as rent. UK rent stays taxable in the UK wherever you live.' },
    { q: 'How much does Australia UK tax help cost?', a: '£XXX for a UK return with Australian income. A moving year, a home sale or an Australian return costs more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'Can you lodge my Australian tax return?', a: 'Yes, with our partner, a TPB-registered tax agent in Australia. Our team prepares your UK return and the partner lodges your Australian return, using the same figures.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/us/expat-tax/', 'US expat tax'],
      ['/ca/canada-uk-tax/', 'Canada UK tax'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/au/sydney/', 'Sydney'],
      ['/au/melbourne/', 'Melbourne'],
      ['/au/brisbane/', 'Brisbane'],
      ['/au/perth/', 'Perth'],
      ['/au/adelaide/', 'Adelaide'],
    ] },
    { title: 'Guides', links: [
      ['/resources/uk-pension-transfer-to-australia/', 'UK pension transfers to Australia'],
      ['/resources/australian-tax-residency-tests/', 'Australian tax residency tests'],
      ['/resources/uk-expat-tax-australia/', 'UK expat tax in Australia'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'Australia UK tax',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Both countries in one plan'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency/australian-resident-for-tax-purposes', 'ATO: Australian resident for tax purposes'],
    ['https://www.ato.gov.au/individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/preparing-your-tax-return', 'ATO: Preparing your tax return (lodgment dates)'],
    ['https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency/foreign-and-temporary-residents', 'ATO: Foreign and temporary residents'],
    ['https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax/foreign-residents-and-capital-gains-tax/main-residence-exemption-for-foreign-residents', 'ATO: Main residence exemption for foreign residents'],
    ['https://www.gov.uk/transferring-your-pension/transferring-to-an-overseas-pension-scheme', 'GOV.UK: Transferring to an overseas pension scheme'],
    ['https://www.gov.uk/government/publications/australia-tax-treaties/2003-australia-uk-double-taxation-convention-in-force', 'GOV.UK: UK-Australia double taxation convention'],
  ],
};
