// UK France tax: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK (2008 UK-France convention, RDR3, FIG regime) and impots.gouv.fr
// (art. 4 B CGI, 2026 declaration dates, form 2047, non-resident rates, prélèvements sociaux) on 13 October 2026.
// French filings: we work with the expert-comptable firm @com Pluriel Conseils. Scope of the partnership is tbc.

import { rating } from '../reviews.js';
import hero from '../../assets/services/uk-france/uk-france-tax-paris-cafe-terrace.jpg';
import frenchInLondon from '../../assets/services/uk-france/uk-france-tax-french-woman-london-thames.jpg';
import frenchProperty from '../../assets/services/uk-france/uk-france-tax-french-house-bougainvillea.jpg';
import ukLandlord from '../../assets/services/uk-france/uk-france-tax-london-colourful-street.jpg';
import movers from '../../assets/services/uk-france/uk-france-tax-traveller-train-platform.jpg';
import remote from '../../assets/services/uk-france/uk-france-tax-remote-worker-laptop.jpg';
import retirees from '../../assets/services/uk-france/uk-france-tax-retired-couple-cafe.jpg';
import consultation from '../../assets/services/uk-france/uk-france-tax-adviser-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/cross-border/uk-france-tax/',
  primaryKeyword: 'UK France tax',
  secondaryKeywords: [
    'UK France double taxation', 'double taxation UK France', 'UK France tax accountant',
    'French accountant in London', 'UK France double tax treaty', 'convention fiscale France Royaume-Uni',
    'form 2047', 'French property UK resident tax', 'prélèvements sociaux non-résident',
  ],
  title: 'UK France Tax Accountants: Double Taxation | Severin Finance',
  description: 'UK France tax accountants: UK and French returns, the double tax treaty and French property, so you are not taxed twice. Free consultation, fixed fee.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['Cross-border', '/cross-border/'],
    ['UK France tax', '/cross-border/uk-france-tax/'],
  ],
  service: {
    name: 'UK France tax service',
    serviceType: 'UK and French personal tax returns and double taxation advice',
    areaServed: [['Country', 'United Kingdom'], ['Country', 'France']],
  },
  formTopic: 'UK France tax',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Cross-border · UK and France',
    h1: 'UK France tax accountants',
    answer: 'Our UK France tax accountants work out where you are tax resident, which country taxes each income and how to avoid double taxation under the UK-France treaty. We prepare your UK return and, with our French partner, your French declaration, so tax paid in one country is credited in the other.',
    image: hero,
    imageAlt: 'People sitting at a Paris café terrace under a pink blossom tree',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'Next UK deadline', date: '31 January 2027', note: 'Online UK return and tax due for 2025/26' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'French returns with expert-comptable partner @com Pluriel Conseils', tbc: true },
      { text: rating.short, tbc: rating.tbc },
      { text: 'English and French spoken', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['prices', 'Prices'],
    ['deadlines', 'Key dates & treaty rules'],
    ['how', 'How it works'],
    ['compare', 'Why one firm for both'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help (photo cards) ----------
  who: {
    eyebrow: 'Who we help',
    h2: 'UK France tax help for people with a foot in both countries',
    intro: 'If you live, work, own property or draw a pension across the Channel, both tax offices may want a return. We look at the whole picture.',
    cards: [
      { title: 'French nationals living in London', img: frenchInLondon, alt: 'Young woman in a teal coat standing by the River Thames in London', tag: 'UK resident, ties in France', text: 'UK self assessment on your worldwide income, plus a French non-resident declaration if you still have French income.', link: ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'] },
      { title: 'British owners of French property', img: frenchProperty, alt: 'Orange French house with pink bougainvillea and a white gate', tag: 'Holiday home, gîte or rental', text: 'French rent and gains are taxed in France first. We claim the credit on your UK return and check your social charges.' },
      { title: 'UK landlords living in France', img: ukLandlord, alt: 'Row of pastel-coloured terraced houses on a London street', tag: 'French resident, UK rent', text: 'UK rent stays taxable in the UK. We handle the Non-Resident Landlord Scheme and declare it in France on form 2047.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
      { title: 'Moving between the UK and France', img: movers, alt: 'Woman with a red suitcase waiting on a railway platform', tag: 'Split year or 4-year FIG regime', text: 'The year you move is the hardest. We apply split-year rules and, if you qualify, the UK 4-year foreign income and gains regime.' },
      { title: 'Cross-border and remote workers', img: remote, alt: 'Woman with curly hair working on a laptop on the floor of her living room', tag: 'Employed in one country, living in the other', text: 'We check your residence under both countries’ rules and the treaty, then make sure tax paid in one is credited in the other.' },
      { title: 'Retirees with UK pensions', img: retirees, alt: 'Older couple sitting together at a café table', tag: 'Retired to France', text: 'Private pensions are taxed only in your country of residence. Government pensions follow different rules. We get it right on both returns.', link: ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'UK France tax fees',
    h2: 'Fixed fees for UK and French tax',
    intro: 'You know the price before we start. One team, one fee, both countries covered.',
    plans: [
      { name: 'One country', for: 'A UK return with French income, or a UK resident’s French return', price: '£XXX', tbc: true, items: ['UK self assessment with foreign tax credit', 'Or French non-resident declaration with our partner', 'Treaty position checked'] },
      { name: 'UK and France together', for: 'Income, property or pensions in both countries', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['UK self assessment return', 'French 2042 and 2047 declarations with our partner', 'Credits matched across both returns', 'Social charges checked on French property income'] },
      { name: 'Moving year', for: 'Leaving or arriving in the UK this year', price: '£XXX', tbc: true, items: ['Statutory Residence Test and split-year review', '4-year FIG regime eligibility and claim', 'Residence position under French art. 4 B and the treaty'] },
    ],
    included: ['HMRC agent authorisation', 'Residence check in both countries', 'Tax bills shown to you before filing', 'Filing confirmations', 'Letters from HMRC or the French tax office explained'],
    note: { text: 'Prices include or exclude VAT: to confirm. French declarations are prepared and filed with our partner @com Pluriel Conseils (expert-comptable): scope to confirm.', tbc: true },
  },

  // ---------- 4. Key dates and treaty rules (tables) ----------
  deadlines: {
    eyebrow: 'Key dates & treaty rules',
    h2: 'UK France double taxation: dates and rules',
    intro: 'The UK tax year runs from 6 April to 5 April. The French tax year is the calendar year.',
    tables: [
      {
        caption: 'Key UK and French tax dates',
        head: ['What', 'Date'],
        rows: [
          ['UK paper tax return for 2025/26', '31 October 2026'],
          ['UK online tax return and tax due for 2025/26', '31 January 2027'],
          ['French return for 2025 income: paper', '19 May 2026 (closed)'],
          ['French return for 2025 income: online, non-residents and departments 01 to 19', '21 May 2026 (closed)'],
          ['French return for 2025 income: online, departments 20 to 54 / 55 to 976', '28 May / 4 June 2026 (closed)'],
          ['French online correction service for the 2026 declaration', 'Open until mid-December 2026'],
          ['French return for 2026 income', 'Spring 2027 (dates published by impots.gouv.fr)'],
        ],
      },
      {
        caption: 'How the UK-France treaty shares the tax',
        head: ['Income', 'Who taxes it'],
        rows: [
          ['Rent from property', 'The country where the property is (art. 6). Your home country may also tax it but gives a credit (art. 24).'],
          ['Gains on property', 'The country where the property is (art. 14), with a credit in your home country'],
          ['Private pensions', 'Only your country of residence (art. 18)'],
          ['Government service pensions', 'The paying country, unless you are resident and a national of the other (art. 19)'],
          ['French income of non-residents', 'At least 20% up to €29,579 (2025 income), 30% above, unless your average rate is lower'],
          ['French social charges on property income', '17.2% unfurnished, 18.6% furnished. Only the 7.5% solidarity levy if you are covered by UK health insurance.'],
        ],
        after: 'Resident in both countries? The treaty decides in this order: permanent home, centre of vital interests, habitual abode, nationality.',
      },
    ],
    urgent: {
      title: 'Taxed twice, or a French return missed?',
      text: 'Most double taxation can be put right. We review past returns in both countries, claim the missing credits and help you correct a French declaration while the correction service is open.',
      cta: 'Get help with double taxation',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our UK France tax service works',
    image: consultation,
    imageAlt: 'Two women talking across a small table in a bright office',
    steps: [
      { title: 'Free consultation', text: 'Tell us where you live, work and own things. We confirm your residence position, the work and a fixed fee in writing.' },
      { title: 'Send your documents', text: 'We send one checklist for both countries. Upload what you have.' },
      { title: 'Approve, we file', text: 'You see both tax bills first. We file the UK return and, with our French partner, the French declaration.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'UTR and National Insurance number', 'French numéro fiscal and last avis d’imposition', 'Days spent in each country this year',
      'Salary, pension and benefit statements', 'Rent, costs and loan interest for each property', 'Bank interest and dividends in both countries',
      'Property or shares sold, with purchase costs', 'Tax already paid in the UK or France',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Why one firm for both',
    h2: 'One team for UK and French tax, or two advisers?',
    cols: ['Severin Finance', 'UK accountant only', 'French accountant only'],
    rows: [
      ['UK self assessment return', true, true, false],
      ['French declaration (2042, 2047)', 'With our partner', false, true],
      ['Residence checked under both countries’ rules', true, 'UK side only', 'French side only'],
      ['Treaty credits matched across both returns', true, 'Partly', 'Partly'],
      ['Social charges on French property checked', true, false, true],
      ['Advice on where to be resident before you move', true, 'UK side only', 'French side only'],
      ['Price', 'One fixed fee', 'Fee per country', 'Fee per country'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK, the UK-France tax treaty and impots.gouv.fr. Rules change every year in both countries: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'UK France tax questions',
  faqs: [
    { q: 'Is there a double tax treaty between the UK and France?', a: 'Yes. The 2008 UK-France convention came into force on 18 December 2009. It applies in France from 1 January 2010 and in the UK from 6 April 2010 for income tax and capital gains tax. It decides which country can tax each type of income and makes the other country give a credit, so you are not taxed twice.' },
    { q: 'How do I know if I am tax resident in the UK or in France?', a: 'Each country applies its own test. The UK uses the Statutory Residence Test, based on days spent in the UK and your ties. France treats you as resident if your home or main place of stay, your main work or the centre of your economic interests is in France. If both say you are resident, the treaty tie-breaker decides.' },
    { q: 'Do I pay tax twice on French rental income if I live in the UK?', a: 'No, not usually. France taxes the rent first because the property is there. You also declare it on your UK return, and the UK gives a credit for the French tax paid. We match the figures on both returns.' },
    { q: 'What is form 2047?', a: 'Form 2047 is the French form for declaring foreign income, such as UK rent, salary or pensions. You file it with your main 2042 return. The 2026 version, for 2025 income, is cerfa 11226*28.' },
    { q: 'When is the French tax return deadline?', a: 'For 2025 income, paper returns were due on 19 May 2026. Online returns were due on 21 May for non-residents and departments 01 to 19, 28 May for departments 20 to 54 and 4 June 2026 for departments 55 to 976. You can correct your declaration online until mid-December 2026. Dates for 2026 income are published in spring 2027.' },
    { q: 'Do UK residents pay French social charges on French property?', a: 'Usually only 7.5%. If you are covered by UK health insurance and not by a French scheme, you pay the 7.5% solidarity levy but no CSG or CRDS. Otherwise the full rate on rental income is 17.2% for unfurnished lettings and 18.6% for furnished lettings.' },
    { q: 'What replaced the remittance basis in the UK?', a: 'The 4-year foreign income and gains (FIG) regime, from 6 April 2025. If you become UK resident after at least 10 consecutive years of non-residence, you can claim it for your first 4 tax years of UK residence. You claim it on your tax return each year and lose your income tax and capital gains tax allowances for that year.' },
    { q: 'How are UK pensions taxed if I retire to France?', a: 'Private and workplace pensions are taxed only in France once you are French resident. Government service pensions, for example from the civil service, stay taxable in the UK unless you are both resident in France and a French national.' },
    { q: 'Can you file my French tax return?', a: 'Yes, with our partner @com Pluriel Conseils, a French expert-comptable firm. Our team prepares the UK side and gathers your figures; your French declaration is prepared and filed with them.', tbc: true },
    { q: 'How much does a UK France tax accountant cost?', a: '£XXX for one country’s return. Returns in both countries, property or a moving year cost more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Set up a UK company from abroad'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
    ] },
    { title: 'Where we work', links: [
      ['/fr/londres/', 'Comptable français à Londres'],
      ['/fr/paris/', 'Paris'],
      ['/fr/lyon/', 'Lyon'],
      ['/fr/bordeaux/', 'Bordeaux'],
      ['/fr/nice/', 'Nice'],
      ['/uk/london/', 'Accountants in London'],
    ] },
    { title: 'Guides', links: [
      ['/resources/uk-france-double-tax-treaty/', 'The UK-France tax treaty explained'],
      ['/resources/statutory-residence-test/', 'The Statutory Residence Test'],
      ['/resources/form-2047-foreign-income/', 'Declaring UK income on form 2047'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'UK and French tax',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Both countries in one quote'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/government/publications/france-tax-treaties', 'GOV.UK: UK-France tax treaties'],
    ['https://www.gov.uk/government/publications/rdr3-statutory-residence-test-srt/guidance-note-for-statutory-residence-test-srt-rdr3', 'GOV.UK: Statutory Residence Test (RDR3)'],
    ['https://www.gov.uk/guidance/check-if-you-can-claim-the-4-year-foreign-income-and-gains-regime', 'GOV.UK: 4-year foreign income and gains regime'],
    ['https://www.impots.gouv.fr/resident-de-france', 'impots.gouv.fr: Résident de France (art. 4 B CGI)'],
    ['https://www.impots.gouv.fr/les-modalites-de-la-declaration-de-revenus-en-2026', 'impots.gouv.fr: Déclaration de revenus 2026'],
    ['https://www.impots.gouv.fr/particulier/questions/je-donne-un-bien-en-location-dois-je-payer-des-prelevements-sociaux', 'impots.gouv.fr: Prélèvements sociaux sur les loyers'],
  ],
};
