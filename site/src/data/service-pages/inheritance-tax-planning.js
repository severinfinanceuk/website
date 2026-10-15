// Inheritance tax planning: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked against GOV.UK on 13 October 2026 (sources at the bottom). Also checked:
// gov.uk/paying-inheritance-tax (due by the end of the sixth month after death) and
// gov.uk/government/publications/rates-and-allowances-inheritance-tax-thresholds-and-interest-rates
// (thresholds fixed up to and including 5 April 2031).
// Planning only: Severin does not draft wills or trusts (a solicitor does). Partner solicitor = tbc.

import { rating } from '../reviews.js';
import hero from '../../assets/services/inheritance-tax/inheritance-tax-planning-family.jpg';
import homeowners from '../../assets/services/inheritance-tax/homeowners-estate-inheritance-tax.jpg';
import gifts from '../../assets/services/inheritance-tax/gifts-to-children-seven-year-rule.jpg';
import business from '../../assets/services/inheritance-tax/business-owner-business-relief.jpg';
import farmer from '../../assets/services/inheritance-tax/farmer-agricultural-property-relief.jpg';
import pension from '../../assets/services/inheritance-tax/pension-savings-inheritance-tax.jpg';
import international from '../../assets/services/inheritance-tax/non-dom-long-term-resident-iht.jpg';
import meeting from '../../assets/services/inheritance-tax/inheritance-tax-adviser-meeting.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/tax/inheritance-tax-planning/',
  primaryKeyword: 'inheritance tax planning',
  secondaryKeywords: [
    'inheritance tax accountant London', 'inheritance tax advice', 'estate planning London',
    '7 year rule inheritance tax', 'gifts out of income', 'business property relief 2026',
    'agricultural property relief', 'pensions inheritance tax 2027',
  ],
  title: 'Inheritance Tax Planning London & UK-wide | Severin Finance',
  description: 'Inheritance tax planning in London and across the UK: we map your estate, plan gifts, pensions and business relief, and cut the tax your family pays.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Tax', '/uk/tax/'],
    ['Inheritance tax planning', '/uk/tax/inheritance-tax-planning/'],
  ],
  service: {
    name: 'Inheritance tax planning service',
    serviceType: 'Inheritance tax and estate planning advice',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Inheritance tax planning',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'UK tax · Inheritance tax',
    h1: 'Inheritance tax planning in London and across the UK',
    answer: 'Inheritance tax planning means arranging your estate, gifts and pensions so your family pays less tax, within HMRC rules. Our team values your estate, uses every relief and works with your solicitor, including for families with homes in the UK and abroad. Estates above £325,000 can pay 40%, and unused pensions count from 6 April 2027.',
    image: hero,
    imageAlt: 'Smiling grandparents hugging their three granddaughters at the window of a red brick house',
    price: { from: '£XXX', note: 'fixed-fee estate review', tbc: true },
    deadline: { label: 'Pension rules change', date: '6 April 2027', note: 'Unused pension funds join the estate for inheritance tax' },
    cta: 'Book an estate review',
    trust: [
      { text: 'Fixed fee agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'We work with your solicitor' },
    ],
  },

  jump: [
    ['who', 'Who needs a plan'],
    ['prices', 'Prices'],
    ['deadlines', 'Allowances & gifts'],
    ['how', 'How it works'],
    ['compare', 'Plan vs no plan'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who needs this (photo cards) ----------
  who: {
    eyebrow: 'Who needs a plan',
    h2: 'Who needs inheritance tax planning?',
    intro: 'Rising house prices and frozen allowances bring more families into inheritance tax. These are the estates we plan for most.',
    cards: [
      { title: 'Homeowners & couples', img: homeowners, alt: 'Older couple laughing outside their brick townhouse covered in purple wisteria', tag: 'Estate over £500,000', text: 'Leave your home to children or grandchildren and the threshold can rise to £500,000 each. We make sure both of you use it.' },
      { title: 'Parents & grandparents', img: gifts, alt: 'Grandmother and young granddaughter in aprons hugging in their kitchen', tag: 'Gifts and the 7-year rule', text: 'Gifts are tax-free if you live 7 more years. Regular gifts from surplus income are exempt at once. We keep the records HMRC asks for.' },
      { title: 'Business owners', img: business, alt: 'Older craftsman in a leather apron lifting his magnifying visor in his workshop', tag: 'Business property relief', text: 'From 6 April 2026, 100% relief covers the first £2.5 million of business and farm property, then 50%. We check what qualifies.', link: ['/uk/company-services/succession-planning/', 'Succession planning'] },
      { title: 'Farmers & landowners', img: farmer, alt: 'Young farming couple holding their toddler beside a wooden fence on their farm', tag: 'Agricultural property relief', text: 'Farms share the £2.5 million allowance. Tax on the rest can be paid in 10 yearly instalments, interest-free for deaths from 6 April 2026.' },
      { title: 'Pension savers', img: pension, alt: 'Retired couple on a sofa going through bills and paperwork together', tag: 'From 6 April 2027', text: 'Unused pension funds and death benefits will count towards your estate. Death in service benefits stay outside. We review your plan now.' },
      { title: 'International families', img: international, alt: 'Woman with a backpack looking across the Thames towards Tower Bridge in London', tag: 'Long-term UK residents', text: 'Since 6 April 2025, residence decides your exposure, not domicile. After 10 of the last 20 years here, overseas assets are in scope.', link: ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Inheritance tax planning fees',
    h2: 'Fixed fees for your estate plan',
    intro: 'You know the price before we start. No hourly billing, no surprise invoices.',
    plans: [
      { name: 'Estate review', for: 'Homeowners who want to know where they stand', price: '£XXX', tbc: true, items: ['Estate valued and inheritance tax worked out', 'Nil-rate bands checked for both partners', 'Clear summary of your options'] },
      { name: 'Estate plan', for: 'Couples and families ready to act', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Everything in the estate review', 'Gifting plan, including gifts from surplus income', 'Pension and life cover reviewed for April 2027', 'Written plan to share with your solicitor'] },
      { name: 'Business & international', for: 'Business owners, farms, long-term UK residents', price: '£XXX', tbc: true, items: ['Business and agricultural relief checked', 'Shares and company structure reviewed', 'Overseas assets and residence history assessed'] },
    ],
    included: ['Free first consultation', 'Inheritance tax figure in writing', 'Gift records template', 'Call with your solicitor or financial adviser', 'Yearly check-in reminder'],
    note: { text: 'Prices include or exclude VAT: to confirm. We do not draft wills or trusts: your solicitor does.', tbc: true },
  },

  // ---------- 4. Allowances and gifts (tables) ----------
  deadlines: {
    eyebrow: 'Allowances & gifts',
    h2: 'Inheritance tax allowances and the 7-year rule',
    intro: 'Figures for the 2026-27 tax year. The £325,000 threshold is fixed until 5 April 2031.',
    tables: [
      {
        caption: 'Inheritance tax thresholds, rates and reliefs',
        head: ['What', 'Amount'],
        rows: [
          ['Nil-rate band (tax-free threshold)', '£325,000 per person'],
          ['Residence nil-rate band (home left to children or grandchildren)', 'Up to £175,000 per person'],
          ['Residence nil-rate band taper', '£1 lost for every £2 the estate is over £2 million'],
          ['Tax rate above the threshold', '40% (36% if 10% or more goes to charity)'],
          ['Spouse or civil partner', 'Usually no tax; unused threshold passes to the survivor'],
          ['Business and agricultural property relief, from 6 April 2026', '100% on the first £2.5 million, 50% above'],
        ],
        after: 'Inheritance tax is due by the end of the sixth month after death. HMRC charges interest after that.',
      },
      {
        caption: 'Gifts: tax if you die within 7 years',
        head: ['Years between gift and death', 'Tax on the gift'],
        rows: [
          ['Less than 3', '40%'],
          ['3 to 4', '32%'],
          ['4 to 5', '24%'],
          ['5 to 6', '16%'],
          ['6 to 7', '8%'],
          ['7 or more', '0%'],
        ],
        after: 'Taper relief only applies if gifts in the 7 years before death add up to more than £325,000. Always tax-free: £3,000 a year (plus last year’s if unused), £250 gifts per person, and regular gifts from surplus income.',
      },
    ],
    urgent: {
      title: 'Pensions join the estate in April 2027',
      text: 'Many families kept pensions untouched to pass on free of inheritance tax. For deaths from 6 April 2027 that changes. Review your plan while there is time to act.',
      cta: 'Review my estate plan',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our inheritance tax planning works',
    image: meeting,
    imageAlt: 'Adviser talking an older couple through documents across his office desk',
    steps: [
      { title: 'Free consultation', text: 'Tell us about your family, home and savings. We confirm the work and a fixed fee in writing.' },
      { title: 'We map your estate', text: 'We value what you own, work out the tax today and show where it can fall.' },
      { title: 'Your written plan', text: 'Clear steps on gifts, pensions and reliefs. We brief your solicitor on any will or trust changes.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Your current will, if you have one', 'Property values and mortgages', 'Bank, savings and investment statements',
      'Pension statements and nominations', 'Life insurance policies', 'Business or farm accounts',
      'Gifts made in the last 7 years', 'Countries you have lived in',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Plan vs no plan',
    h2: 'Planning now or leaving it?',
    cols: ['Severin Finance plan', 'Will only', 'No plan'],
    rows: [
      ['Estate valued and tax worked out', true, 'Sometimes', false],
      ['Both nil-rate bands and home allowance used', true, 'Sometimes', 'Not always'],
      ['Gifting plan and records', true, false, false],
      ['Pensions reviewed for April 2027', true, false, false],
      ['Business and farm relief checked', true, 'Sometimes', false],
      ['Will and trusts drafted', 'By your solicitor', true, false],
      ['Price', 'Fixed fee', 'Solicitor’s fee', 'Up to 40% above the threshold'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against HMRC guidance and government policy papers on GOV.UK. Inheritance tax rules are changing fast: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Inheritance tax questions',
  faqs: [
    { q: 'What is the inheritance tax threshold for 2026-27?', a: '£325,000 per person. It rises by up to £175,000 if you leave your home to children or grandchildren, so up to £500,000. A spouse or civil partner can inherit any unused threshold. The £325,000 figure is fixed until 5 April 2031.' },
    { q: 'How much is inheritance tax?', a: '40% on the part of the estate above the threshold. The rate falls to 36% on some assets if you leave 10% or more of the net estate to charity. Business and farm property above the £2.5 million allowance gets 50% relief, so an effective rate of up to 20%.' },
    { q: 'What is the 7-year rule for gifts?', a: 'Gifts are free of inheritance tax if you live for 7 years after making them. If you die within 7 years, the gift can be taxed. Taper relief lowers the tax on gifts made 3 to 7 years before death, but only when gifts in those 7 years total more than £325,000.' },
    { q: 'How much can I give away tax-free each year?', a: '£3,000 a year, plus last year’s £3,000 if you did not use it. You can also give up to £250 to as many people as you like, wedding gifts of up to £5,000 to a child, and regular gifts from surplus income with no set limit.' },
    { q: 'Will my pension be subject to inheritance tax?', a: 'Yes, from 6 April 2027. For deaths on or after that date, most unused pension funds and death benefits count towards the estate. Death in service benefits stay outside, and benefits left to a spouse, civil partner or charity stay exempt. Personal representatives report and pay the tax.' },
    { q: 'What changed for business and agricultural property relief in April 2026?', a: 'Full relief is now capped. From 6 April 2026, 100% relief covers the first £2.5 million of combined business and agricultural property, and 50% applies above that. Unused allowance can pass to a surviving spouse or civil partner. Shares on markets such as AIM get 50% relief.' },
    { q: 'When does inheritance tax have to be paid?', a: 'By the end of the sixth month after the death. HMRC charges interest after that. Tax on business or agricultural property can be paid in 10 equal yearly instalments, interest-free where the death is on or after 6 April 2026.' },
    { q: 'Do non-doms pay UK inheritance tax?', a: 'It now depends on residence, not domicile. Since 6 April 2025, you are a long-term UK resident if you have been UK resident for 10 of the last 20 tax years. Your overseas assets are then in scope, and this can continue for up to 10 years after you leave.' },
    { q: 'How much does inheritance tax planning cost?', a: 'Our fixed fees start at £XXX for an estate review. Business, farm and international estates cost more. You get the exact fee in writing after a free consultation, before any work starts.', tbc: true },
    { q: 'Do you write wills and set up trusts?', a: 'No. We plan the tax and work out the figures. A solicitor drafts your will and any trust, and we brief them on the plan. We can introduce a solicitor we work with.' },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/company-services/succession-planning/', 'Succession planning'],
      ['/uk/company-services/business-valuation/', 'Business valuation'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/kensington/', 'Kensington'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/london/richmond/', 'Richmond'],
      ['/uk/london/wimbledon/', 'Wimbledon'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/inheritance-tax-7-year-rule/', 'The 7-year rule explained'],
      ['/resources/pensions-inheritance-tax-2027/', 'Pensions and inheritance tax from 2027'],
      ['/resources/business-property-relief-2026/', 'Business property relief from 2026'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Plan your', em: 'inheritance tax',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Plan shared with your solicitor'],
    formTitle: 'Book your estate review', button: 'Book my review',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/inheritance-tax', 'GOV.UK: Inheritance Tax'],
    ['https://www.gov.uk/inheritance-tax/gifts', 'GOV.UK: Gifts and the 7-year rule'],
    ['https://www.gov.uk/guidance/inheritance-tax-residence-nil-rate-band', 'GOV.UK: Residence nil rate band'],
    ['https://www.gov.uk/government/publications/changes-to-agricultural-property-relief-and-business-property-relief/agricultural-property-relief-and-business-property-relief-changes', 'GOV.UK: Agricultural and business property relief changes'],
    ['https://www.gov.uk/government/publications/inheritance-tax-unused-pension-funds-and-death-benefits/inheritance-tax-unused-pension-funds-and-death-benefits', 'GOV.UK: Inheritance tax on unused pension funds'],
    ['https://www.gov.uk/guidance/inheritance-tax-if-youre-a-long-term-uk-resident', 'GOV.UK: Inheritance tax for long-term UK residents'],
  ],
};
