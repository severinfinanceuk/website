// Tax hub (pillar page): /uk/tax/. Layout: src/layouts/HubPage.astro.
// Fact tables are reused from the service pages, so each figure is checked in one place.
// The income tax table is new here: rates for England, Wales and Northern Ireland, 2026-27
// (bands frozen; dividend rates 10.75% / 35.75% / 39.35% from 6 April 2026).
import sa from '../service-pages/self-assessment-accountant.js';
import ct from '../service-pages/corporation-tax-accountant.js';
import vat from '../service-pages/vat-accountant.js';
import cgt from '../service-pages/capital-gains-tax-accountant.js';

export default {
  url: '/uk/tax/',
  section: 'tax',
  title: 'Tax Accountants in London & UK-wide | Severin Finance',
  description: 'UK tax accountants for self assessment, corporation tax, VAT, Making Tax Digital, capital gains and inheritance tax, and HMRC enquiries. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [['Home', '/'], ['United Kingdom', '/uk/'], ['Tax', '/uk/tax/']],

  hero: {
    eyebrow: 'UK tax',
    h1: 'Tax accountants for individuals and companies',
    answer: 'Our tax accountants prepare and file UK tax returns for individuals, landlords and companies: self assessment, corporation tax, VAT and Making Tax Digital updates. We plan capital gains and inheritance tax, claim refunds you are owed and deal with HMRC enquiries for you. We work from London with clients across the UK and abroad.',
  },

  services: {
    eyebrow: 'Tax services',
    h2: 'Every UK tax, one team',
    intro: 'Returns filed on time, every relief checked, and one person to call when HMRC writes.',
    items: [
      { href: '/uk/tax/self-assessment-accountant/', text: 'Your self assessment return prepared, checked for every allowance and filed before 31 January.' },
      { href: '/uk/tax/corporation-tax-accountant/', text: 'The CT600 company tax return, marginal relief, capital allowances and R&D claims.' },
      { href: '/uk/tax/vat-accountant/', text: 'VAT registration, the right scheme for you and quarterly returns filed through MTD software.' },
      { href: '/uk/tax/making-tax-digital-accountant/', text: 'Software set up, digital records and the quarterly updates for Making Tax Digital for Income Tax.' },
      { href: '/uk/tax/capital-gains-tax-accountant/', text: 'Gains on property, shares and crypto worked out, reliefs claimed and the 60-day return filed.' },
      { href: '/uk/tax/inheritance-tax-planning/', text: 'Wills, gifts, trusts and business relief planned so more of your estate goes to your family.' },
      { href: '/uk/tax/tax-refunds/', text: 'Overpaid tax claimed back: emergency tax codes, work expenses, marriage allowance and more.' },
      { href: '/uk/tax/hmrc-tax-investigation/', text: 'HMRC letters, compliance checks and disclosures handled for you, with penalties kept as low as possible.' },
    ],
  },

  facts: {
    eyebrow: 'Rates & deadlines',
    h2: 'UK tax rates and deadlines',
    intro: 'The main rates for 2026-27 and the next filing dates. Checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'Income tax and dividend tax 2026-27 (England, Wales and Northern Ireland)',
        head: ['Band', 'Rate'],
        rows: [
          ['Personal allowance, up to £12,570', '0%'],
          ['Basic rate, £12,571 to £50,270', '20% (dividends 10.75%)'],
          ['Higher rate, £50,271 to £125,140', '40% (dividends 35.75%)'],
          ['Additional rate, over £125,140', '45% (dividends 39.35%)'],
          ['Dividend allowance', '£500'],
        ],
        after: 'The personal allowance falls by £1 for every £2 of income over £100,000. Scotland sets its own income tax bands for earned income.',
      },
      sa.deadlines.dates,
      ct.deadlines.tables[0],
      vat.deadlines.tables[0],
      cgt.deadlines.tables[0],
    ],
  },

  choose: {
    eyebrow: 'Which tax applies to you?',
    h2: 'A quick guide to UK tax',
    blocks: [
      { h3: 'Do I need to file a self assessment return?', html: 'Usually yes if you are self-employed with income over £1,000, a partner in a partnership, a landlord, or you have income or gains that tax was not taken from at source. If you need to file for the first time, register by 5 October after the tax year. Our <a href="/uk/tax/self-assessment-accountant/">self assessment accountants</a> check whether you need to file and handle the return.' },
      { h3: 'Tax for limited companies', html: 'Companies pay corporation tax at 19% on profits up to £50,000 and 25% over £250,000, with marginal relief in between. The tax is usually due 9 months and 1 day after the year end, and the return 12 months after it. See our <a href="/uk/tax/corporation-tax-accountant/">corporation tax</a> service.' },
      { h3: 'VAT and Making Tax Digital', html: 'You must register for VAT when your taxable turnover goes over £90,000 in a rolling 12 months. Every VAT-registered business files through Making Tax Digital software. Sole traders and landlords with qualifying income over £50,000 joined Making Tax Digital for Income Tax in April 2026, and the threshold falls to £30,000 in April 2027. See <a href="/uk/tax/vat-accountant/">VAT returns</a> and <a href="/uk/tax/making-tax-digital-accountant/">Making Tax Digital</a>.' },
      { h3: 'Selling assets and passing on wealth', html: 'Capital gains tax is 18% or 24% after a £3,000 allowance, and a UK home sale with tax to pay must be reported within 60 days. Inheritance tax is 40% above the £325,000 nil-rate band, and business and agricultural property relief changed on 6 April 2026. Plan early with our <a href="/uk/tax/capital-gains-tax-accountant/">capital gains</a> and <a href="/uk/tax/inheritance-tax-planning/">inheritance tax</a> advisers.' },
      { h3: 'A letter from HMRC', html: 'Do not ignore it, and do not miss the reply date. A compliance check can go back years, and a calm, complete answer usually keeps penalties down. Our <a href="/uk/tax/hmrc-tax-investigation/">HMRC investigation</a> team talks to HMRC for you.' },
    ],
  },

  guidesTitle: 'Tax guides',
  faqTitle: 'Tax questions',
  faqs: [
    { q: 'When is the next self assessment deadline?', a: 'The online tax return for the 2025-26 tax year is due by 31 January 2027, and so is any tax you owe for that year. Paper returns are due by 31 October 2026.' },
    { q: 'What are payments on account?', a: 'Advance payments towards next year’s tax bill. If your last bill was over £1,000 and less than 80% of your tax was taken at source, you pay 2 instalments, each half of last year’s bill, on 31 January and 31 July.' },
    { q: 'Can you deal with HMRC for me?', a: 'Yes. Once you authorise us as your tax agent, HMRC can talk to us about your affairs, and we handle the letters, calls and filings.' },
    { q: 'I am late with my tax return. Can you still help?', a: 'Yes. We file late and back-year returns, work out what you owe and ask HMRC to cancel penalties when there is a reasonable excuse. Filing as soon as possible stops daily penalties from growing.' },
    { q: 'Do you work with Scottish taxpayers?', a: 'Yes. We work with clients across the UK. Scotland has its own income tax bands for earned income, and we apply them on your return.' },
  ],

  sources: [
    ['https://www.gov.uk/income-tax-rates', 'GOV.UK: Income tax rates and bands'],
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
    ['https://www.gov.uk/self-assessment-tax-returns/deadlines', 'GOV.UK: Self assessment deadlines'],
    ['https://www.gov.uk/corporation-tax-rates', 'GOV.UK: Corporation tax rates'],
    ['https://www.gov.uk/register-for-vat', 'GOV.UK: Register for VAT'],
    ['https://www.gov.uk/capital-gains-tax/rates', 'GOV.UK: Capital Gains Tax rates'],
    ['https://www.gov.uk/inheritance-tax', 'GOV.UK: Inheritance Tax'],
  ],
};
