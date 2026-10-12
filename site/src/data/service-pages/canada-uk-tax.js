// Canada UK tax: all copy, facts and SEO for one service page (moving between Canada and the UK).
// The layout (src/layouts/ServicePage.astro) turns this into the page. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against canada.ca (CRA) and the UK-Canada tax treaty on GOV.UK on 13 October 2026 (sources at the bottom).
// Also checked: CRA newcomers pages and GOV.UK HS266 (FIG regime, 2026) for the UK arrival relief.
// Canadian returns need a Canadian accountant: written as "with a licensed partner", tbc. "CPA" is a protected title: not used for Severin.

import { rating } from '../reviews.js';
import hero from '../../assets/services/canada-uk/canada-uk-tax-toronto-waterfront.jpg';
import moving from '../../assets/services/canada-uk/canada-uk-tax-moving-couple-boxes.jpg';
import london from '../../assets/services/canada-uk/canada-uk-tax-canadians-london-street.jpg';
import leaving from '../../assets/services/canada-uk/canada-uk-tax-leaving-canada-flag.jpg';
import retirees from '../../assets/services/canada-uk/canada-uk-tax-retirees-pension-papers.jpg';
import landlord from '../../assets/services/canada-uk/canada-uk-tax-rental-property-keys.jpg';
import investors from '../../assets/services/canada-uk/canada-uk-tax-investors-laptop.jpg';
import consultation from '../../assets/services/canada-uk/canada-uk-tax-video-call-consultation.jpg';

export default {
  // ---------- SEO ----------
  url: '/ca/canada-uk-tax/',
  primaryKeyword: 'Canada UK tax',
  secondaryKeywords: [
    'moving from UK to Canada tax', 'Canada UK tax treaty', 'leaving Canada departure tax',
    'Canadians living in London taxes', 'non-resident Canada tax return', 'Form T1135',
    'Canadian tax accountant UK', 'CRA tax deadline',
  ],
  title: 'Canada UK Tax Accountants in London | Severin Finance',
  description: 'Canada UK tax help for people moving either way: residency, departure tax, T1135, UK pensions and the treaty. Fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['Canada', '/ca/'],
    ['Canada UK tax', '/ca/canada-uk-tax/'],
  ],
  service: {
    name: 'Canada UK tax service',
    serviceType: 'Cross-border tax for people moving between Canada and the United Kingdom',
    areaServed: [['Country', 'Canada'], ['Country', 'United Kingdom']],
  },
  formTopic: 'Canada UK tax',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Cross-border tax · Canada',
    h1: 'Canada UK tax accountants in London',
    answer: 'Canada UK tax depends on where you are resident, and moving either way changes what you file. Our team plans your move, handles your UK tax and coordinates your Canadian return, including departure tax, Form T1135 and UK pensions under the treaty. Canadian returns for 2026 are due 30 April 2027.',
    image: hero,
    imageAlt: 'People sitting on park benches looking across the water at the Toronto skyline',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Next deadline', date: '30 April 2027', note: 'Canadian returns and balance owing for 2026' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Canadian returns filed with a licensed partner', tbc: true },
      { text: rating.short, tbc: rating.tbc },
      { text: 'UK and Canadian figures prepared together' },
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
    h2: 'Who needs Canada UK tax advice?',
    intro: 'Anyone with a foot in both countries. If one of these is you, talk to us before the move or before you file.',
    cards: [
      { title: 'Britons moving to Canada', img: moving, alt: 'Couple carrying a moving box and a potted plant into their new home', tag: 'New resident in Canada', text: 'Canada taxes you on world income from the day you become resident. We plan the move date, your last UK return and your first Canadian one.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
      { title: 'Canadians living in London', img: london, alt: 'Sunny Whitehall street with a red double-decker bus and Big Ben in the distance', tag: 'UK resident, Canadian ties', text: 'Keeping a home, partner or dependants in Canada can keep you resident there. We check your ties and file your UK return.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'Leaving Canada', img: leaving, alt: 'Woman wrapped in a Canadian flag looking at snowy mountains', tag: 'Departure tax', text: 'Most of what you own is treated as sold on the day you leave. We work out the tax, the forms and whether to defer payment.' },
      { title: 'Retirees with UK pensions', img: retirees, alt: 'Older couple on a sofa going through pension paperwork together', tag: 'UK pensions and RRSPs', text: 'Regular UK pension payments to a Canadian resident are taxed only in Canada. We check lump sums and RRSP withdrawals separately.' },
      { title: 'Landlords with property abroad', img: landlord, alt: 'Hand holding a set of house keys by an open front door', tag: 'Rent in Canada or the UK', text: 'Rent is taxed where the property is, and often where you live too. We coordinate both returns and claim relief for the tax already paid.', link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'] },
      { title: 'Investors with UK assets', img: investors, alt: 'Woman and man looking at a laptop together at a desk', tag: 'Over C$100,000 abroad', text: 'Canadian residents with foreign property costing more than C$100,000 file Form T1135. UK bank accounts, shares and a rental home all count.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Canada UK tax fees',
    h2: 'Fixed fees for Canada UK tax',
    intro: 'You know the price before we start. One fee covers the work agreed in writing.',
    plans: [
      { name: 'Moving year', for: 'Arriving in Canada or leaving it', price: '£XXX', tbc: true, items: ['Residence date planned with you', 'UK return for the year you move', 'Departure tax or arrival values worked out', 'Treaty tie-breaker checked'] },
      { name: 'Both countries, every year', for: 'Income or assets in Canada and the UK', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['UK self assessment return', 'Canadian return coordinated with the same figures', 'Form T1135 where needed', 'Relief for tax paid in the other country'] },
      { name: 'Pensions & property', for: 'Retirees and landlords', price: '£XXX', tbc: true, items: ['UK pensions, RRSPs and lump sums reviewed', 'Rental income in either country', 'Capital gains on a sale'] },
    ],
    included: ['Free first consultation', 'Fixed fee in writing', 'Tax position shown to you before filing', 'Deadline reminders for both countries', 'HMRC letters about the return answered'],
    note: { text: 'Prices include or exclude VAT: to confirm. Canadian returns are prepared and filed with our licensed partner in Canada: to confirm.', tbc: true },
  },

  // ---------- 4. Deadlines and key rules (tables) ----------
  deadlines: {
    eyebrow: 'Deadlines & rules',
    h2: 'Moving from the UK to Canada: tax deadlines and rules',
    intro: 'Canada’s tax year is the calendar year. The UK’s runs from 6 April to 5 April.',
    tables: [
      {
        caption: 'CRA deadlines for 2026 returns',
        head: ['What', 'Deadline'],
        rows: [
          ['Canadian income tax return', '30 April 2027'],
          ['Return if you or your spouse are self-employed', '15 June 2027'],
          ['Balance owing (everyone)', '30 April 2027'],
          ['Form T1135 foreign property', 'Same date as your return'],
          ['Election to defer departure tax (Form T1244)', '30 April of the year after you leave'],
        ],
      },
      {
        caption: 'Key Canada UK tax rules',
        head: ['Rule', 'What it means'],
        rows: [
          ['Departure tax', 'Most property is treated as sold at market value on the day you stop being resident. Canadian real estate, RRSPs and TFSAs are excluded.'],
          ['Form T1161', 'List what you own if it was worth more than C$25,000 in total when you left (cash and personal items under C$10,000 excluded)'],
          ['Form T1135', 'Foreign property costing more than C$100,000 at any time in the year'],
          ['Arriving in Canada', 'Your property is treated as bought at market value on the day you become resident'],
          ['UK pensions paid to a Canadian resident', 'Regular payments taxed only in Canada (treaty Article 17)'],
          ['Gains after a move (treaty Article 13)', 'If you paid departure tax, the new country taxes only the gain after you arrived'],
        ],
        after: 'Departure tax can be deferred until you sell, without interest. CRA asks for security if the federal tax deferred is more than C$16,500.',
      },
    ],
    urgent: {
      title: 'Moving soon?',
      text: 'Plan before you leave. The day you stop being resident sets your departure tax and your first returns in both countries. Talk to us while you can still choose the date.',
      cta: 'Plan my move',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our Canada UK tax service works',
    image: consultation,
    imageAlt: 'Smiling woman waving during a video call on her laptop',
    steps: [
      { title: 'Free consultation', text: 'Video call or in London. We map your residence in both countries and agree a fixed fee in writing.' },
      { title: 'Send your documents', text: 'One checklist for both countries. Upload or email what you have.' },
      { title: 'Approve, then we file', text: 'You see both tax positions first. Then the returns are filed and you get the confirmations.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'SIN and UK National Insurance number', 'Your last Canadian notice of assessment', 'UK P60 or P45',
      'Date you left or arrived', 'Values of what you owned on that date', 'RRSP, TFSA and UK pension statements',
      'Rental income and costs', 'Foreign bank and investment statements',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Who to use',
    h2: 'One team for both countries, or two firms?',
    cols: ['Severin Finance', 'A Canadian-only firm', 'A UK-only accountant'],
    rows: [
      ['Canadian return and T1135', true, true, false],
      ['UK self assessment', true, false, true],
      ['Move date planned for both countries', true, 'Partly', 'Partly'],
      ['UK pensions, RRSPs and treaty rules', true, 'Often limited', 'Often limited'],
      ['Meet in London', true, false, true],
      ['Price', 'Fixed fee', 'Varies', 'Varies'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against CRA guidance on canada.ca, HMRC guidance and the UK-Canada tax treaty on GOV.UK. Rules change every year: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Canada UK tax questions',
  faqs: [
    { q: 'Do I still pay Canadian tax if I move to the UK?', a: 'Only on Canadian income, once you are non-resident. Canada taxes residents on world income. You become non-resident on the latest of the day you leave, the day your spouse or dependants leave, or the day you become resident in the UK. In the year you leave, you file a Canadian return for the part of the year you were resident.' },
    { q: 'What is departure tax in Canada?', a: 'It is tax on gains you have not yet made. When you stop being resident, CRA treats most of your property as sold at market value on that day and taxes the gain. Canadian real estate, RRSPs and TFSAs are excluded. You can elect on Form T1244 to pay later, when you actually sell, without interest.' },
    { q: 'Does Canada tax my UK pension?', a: 'Yes, if you live in Canada. Under the UK-Canada treaty, regular pension payments are taxed only in the country where you live, so the UK should not tax them. Lump sums are not mentioned in that article, so check before taking one.' },
    { q: 'Can I keep my RRSP if I move to the UK?', a: 'Yes. Leaving Canada does not close your RRSP, and RRSPs are excluded from departure tax. Payments from it while you live in the UK fall under the treaty’s pension rules. How the UK treats growth inside the plan depends on your case, so we check it before you move.' },
    { q: 'What is Form T1135?', a: 'It is the CRA form for reporting foreign property. Canadian residents file it if the total cost of their foreign property was more than C$100,000 at any time in the year. It is due with your return. Personal-use property, such as a holiday home only you use, does not count. You do not file it for the year you first become resident.' },
    { q: 'When is the Canadian tax deadline?', a: '30 April 2027 for 2026 returns. If you or your spouse are self-employed, the return is due 15 June 2027, but any balance owing is still due on 30 April 2027.' },
    { q: 'Am I still a Canadian resident for tax?', a: 'It depends on your ties. A home, a spouse or common-law partner, or dependants in Canada are significant ties and usually keep you resident. A car, bank accounts, a provincial health card or a driver’s licence are secondary ties that also count. If both countries treat you as resident, the treaty tie-breaker decides.' },
    { q: 'Is there UK tax relief when I move from Canada to the UK?', a: 'Possibly. From 6 April 2025, people who become UK resident after 10 consecutive years of non-residence can claim relief on foreign income and gains for their first 4 tax years. You claim it each year on your self assessment return. Pay for work done abroad may also qualify for Overseas Workday Relief.' },
    { q: 'How much does Canada UK tax help cost?', a: '£XXX for a UK return with Canadian income. A moving year, departure tax or a Canadian return costs more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'Can you file my Canadian tax return?', a: 'Yes, with our licensed partner in Canada. Our team prepares your UK return and the partner files your Canadian return, using the same figures.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/us/expat-tax/', 'US expat tax'],
      ['/au/australia-uk-tax/', 'Australia UK tax'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/ca/toronto/', 'Toronto'],
      ['/ca/vancouver/', 'Vancouver'],
      ['/ca/calgary/', 'Calgary'],
      ['/ca/ottawa/', 'Ottawa'],
      ['/ca/fr/montreal/', 'Montréal (en français)'],
    ] },
    { title: 'Guides', links: [
      ['/resources/canada-departure-tax/', 'Canada departure tax explained'],
      ['/resources/moving-from-uk-to-canada-tax/', 'Moving from the UK to Canada: tax checklist'],
      ['/resources/uk-pensions-in-canada/', 'UK pensions and RRSPs under the treaty'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'Canada UK tax',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Both countries in one plan'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/information-been-moved/determining-your-residency-status.html', 'CRA: Determining your residency status'],
    ['https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/leaving-canada-emigrants.html', 'CRA: Leaving Canada (emigrants)'],
    ['https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada-non-residents/dispositions-property.html', 'CRA: Dispositions of property (departure tax)'],
    ['https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/information-been-moved/foreign-reporting/questions-answers-about-form-t1135.html', 'CRA: Questions and answers about Form T1135'],
    ['https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/important-dates-individuals.html', 'CRA: Important dates for individuals'],
    ['https://www.gov.uk/government/publications/canada-tax-treaties', 'GOV.UK: UK-Canada double taxation convention'],
  ],
};
