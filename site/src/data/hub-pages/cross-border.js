// Clients abroad hub (pillar page): /cross-border/. Layout: src/layouts/HubPage.astro.
// UK-only rule: we do UK tax and UK companies for people and businesses outside the UK.
// No other country, foreign authority or partner firm is named.
// Fact tables are reused from the service pages, so each figure is checked in one place.
import nr from '../service-pages/non-resident-uk-tax.js';
import abroad from '../service-pages/uk-company-from-abroad.js';

export default {
  url: '/cross-border/',
  section: 'cross-border',
  title: 'UK Tax & UK Companies for Clients Abroad | Severin Finance',
  description: 'UK tax returns for non-residents, UK rent and property sales, and UK companies run from abroad, handled by a London team. Free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [['Home', '/'], ['Clients abroad', '/cross-border/']],

  hero: {
    eyebrow: 'Clients abroad',
    h1: 'UK tax and UK companies for clients abroad',
    answer: 'If you live outside the UK but still have UK income, property or a UK company, we handle the UK side for you. We file non-resident tax returns, report UK property sales within 60 days, register landlords for gross rent and run UK companies for directors abroad. One London team, working with you online.',
  },

  services: {
    eyebrow: 'Services for clients abroad',
    h2: 'Your UK affairs, handled from London',
    intro: 'We deal with HMRC and Companies House, so you do not have to manage UK paperwork from a distance.',
    items: [
      { href: '/cross-border/non-resident-uk-tax/', text: 'UK tax returns for people who have left the UK: rent, pensions, property sales and the year you leave.' },
      { href: '/cross-border/uk-company-from-abroad/', text: 'Set up and run a UK limited company while you live abroad, with accounts, tax and filings done for you.' },
      { href: '/uk/accounting/landlord-accountant/', label: 'UK rental property', text: 'Non-Resident Landlord Scheme registration, rental accounts and your UK return, for one flat or many.' },
      { href: '/uk/tax/capital-gains-tax-accountant/', label: 'Selling UK property', text: 'The 60-day return filed and the gain worked out, using the rules that protect gains made before 2015 or 2019.' },
    ],
  },

  facts: {
    eyebrow: 'Rules & deadlines',
    h2: 'Deadlines, residence and company rules',
    intro: 'The UK rules that matter most when you live abroad. Checked on GOV.UK on 13 October 2026.',
    tables: [nr.deadlines.tables[0], nr.deadlines.tables[1], abroad.deadlines.tables[0]],
  },

  choose: {
    eyebrow: 'Where to start',
    h2: 'Living abroad with UK ties',
    blocks: [
      { h3: 'Are you still UK resident?', html: 'Your UK tax depends on your residence status for each tax year, worked out under the Statutory Residence Test. It looks at the days you spend in the UK and your ties here, such as family, a home and work. The year you leave can sometimes be split in two. Our <a href="/cross-border/non-resident-uk-tax/">non-resident tax</a> team works it out with you.' },
      { h3: 'UK rent while you live abroad', html: 'Under the Non-Resident Landlord Scheme, your letting agent or tenant takes basic rate tax from the rent unless HMRC approves you to receive it gross. Either way, you usually still file a UK tax return. See our <a href="/uk/accounting/landlord-accountant/">landlord accountants</a>.' },
      { h3: 'Selling UK property', html: 'Non-residents must report the sale of any UK property or land within 60 days of completion, even when there is no tax to pay. Our <a href="/uk/tax/capital-gains-tax-accountant/">capital gains tax</a> advisers file the return and check the rebasing rules that can cut the gain.' },
      { h3: 'A UK company with directors abroad', html: 'Directors do not need to live in the UK, but the company needs a UK registered office and its directors must verify their identity with Companies House. Where the company is managed from matters for tax. See <a href="/cross-border/uk-company-from-abroad/">UK company from abroad</a>.' },
    ],
  },

  guidesTitle: 'Guides for clients abroad',
  faqTitle: 'Questions from clients abroad',
  faqs: [
    { q: 'Do I still need a UK tax return after I move abroad?', a: 'Often yes, if you have UK rent, a UK property sale, some UK pensions or other UK income that is not fully taxed at source. We check what you must report each year.' },
    { q: 'Can I keep my UK personal allowance?', a: 'You may, depending on your nationality and the tax treaty with the country where you live. We check whether you qualify and claim it on your return.' },
    { q: 'Do I need to come to the UK to work with you?', a: 'No. We work with clients abroad by phone, video call and email, and documents are signed online.' },
    { q: 'Will the same income be taxed twice?', a: 'Usually not. Where a tax treaty applies, it decides which country taxes the income, and relief is given for tax already paid. We claim the UK side of that relief for you.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/rdr3-statutory-residence-test-srt/guidance-note-for-statutory-residence-test-srt-rdr3', 'GOV.UK: Statutory Residence Test (RDR3)'],
    ['https://www.gov.uk/guidance/paying-tax-on-rent-to-landlords-abroad', 'GOV.UK: Non-Resident Landlord Scheme'],
    ['https://www.gov.uk/guidance/capital-gains-tax-for-non-residents-uk-residential-property', 'GOV.UK: Capital gains tax for non-residents'],
    ['https://www.gov.uk/tax-uk-income-live-abroad/personal-allowance', 'GOV.UK: Personal allowance if you live abroad'],
    ['https://www.gov.uk/limited-company-formation/appoint-directors-and-company-secretaries', 'GOV.UK: Appoint directors'],
  ],
};
