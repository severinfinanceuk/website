// VAT calculator: /resources/vat-calculator/. Page: src/pages/resources/vat-calculator.astro.
// Maths: src/lib/uk-tax.js (vatAdd, vatRemove, limitedCost).
// Checked on GOV.UK on 13 October 2026 (VAT rates; VAT Flat Rate Scheme).
export default {
  url: '/resources/vat-calculator/',
  title: 'VAT Calculator UK: Add or Remove VAT | Severin Finance',
  description: 'Add or remove UK VAT at 20%, 5% or any rate, and check whether you are a limited cost business on the Flat Rate Scheme. Free consultation.',
  eyebrow: 'Calculator',
  h1: 'VAT calculator: add or remove VAT',
  crumb: 'VAT calculator',
  summary: 'Add or remove VAT at 20%, 5% or any rate, plus a Flat Rate Scheme limited cost business check.',
  app: true,
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  hero: {
    answer: 'To add 20% VAT, multiply the net price by 1.2. To remove it, divide the gross price by 1.2: the VAT is one sixth of a VAT-inclusive price. So £1,000 plus VAT is £1,200, and a £1,200 invoice includes £200 VAT. Use the calculator for 20%, 5% or any other rate.',
  },
  service: {
    href: '/uk/tax/vat-accountant/', label: 'Our VAT service',
    boxTitle: 'VAT returns done for you', text: 'We register you, choose the right scheme and file your VAT returns through Making Tax Digital software.',
  },
  sections: [
    {
      id: 'rates', h2: 'What are the UK VAT rates?',
      body: [
        { caption: 'UK VAT rates', head: ['Rate', 'Applies to', 'Remove VAT'], rows: [
          ['20%', 'Standard rate: most goods and services', 'Divide by 1.2 (VAT is 1/6)'],
          ['5%', 'Reduced rate: for example domestic fuel and power, children\'s car seats', 'Divide by 1.05 (VAT is 1/21)'],
          ['0%', 'Zero rate: for example most food, children\'s clothes, books and newspapers', 'No VAT to remove'],
        ], after: 'Source: GOV.UK, VAT rates on different goods and services. Exempt and out-of-scope supplies carry no VAT and are not the same as zero-rated.' },
        '<p>Whether something is standard-rated, reduced, zero-rated or exempt depends on exactly what is supplied, and mistakes are costly: HMRC can assess four years back. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> check liability for new products, property and mixed supplies. Read our guide to <a href="/resources/vat-registration/">VAT registration</a> for the £90,000 threshold and how to register.</p>',
      ],
    },
    {
      id: 'frs', h2: 'How does the Flat Rate Scheme work?',
      body: [
        '<p>On the Flat Rate Scheme you pay HMRC a fixed percentage of your VAT-inclusive turnover instead of working out the VAT on each sale and purchase. You keep the difference, but you cannot reclaim VAT on most purchases. You can join if your VAT taxable turnover, excluding VAT, is £150,000 or less, and you must leave once your total VAT-inclusive turnover goes above £230,000.</p>',
        '<p>The percentage depends on your trade, and you get a 1% discount in your first year of VAT registration. If you are a <strong>limited cost business</strong>, you must use 16.5% whatever your trade. You are one if your spending on relevant goods, including VAT, is either:</p>',
        '<ul><li>less than 2% of your VAT-inclusive turnover, or</li><li>more than 2% but less than £1,000 a year (£250 a quarter).</li></ul>',
        '<p>Relevant goods leave out services, capital items, food or drink for you or your staff, vehicles and fuel (unless you are in transport), and goods you resell or hire out (unless that is your main business). Many consultants and contractors are limited cost businesses, which often makes the scheme poor value. See our guide to the <a href="/resources/flat-rate-vat-scheme/">Flat Rate VAT Scheme</a>.</p>',
      ],
    },
  ],
  faqs: [
    { q: 'How do I work out VAT from a total?', a: 'For 20% VAT, divide the total by 6. For example, a £600 total includes £100 VAT and £500 net. For 5% VAT, divide the total by 21.' },
    { q: 'Why can\'t I just take 20% off the gross price?', a: 'Because VAT is 20% of the net price, not of the gross. Taking 20% off £1,200 gives £960, but the correct net figure is £1,000. Divide by 1.2 instead.' },
    { q: 'What is the VAT registration threshold?', a: 'You must register if your VAT taxable turnover goes over £90,000 in any rolling 12-month period, or you expect it to in the next 30 days alone. You can register voluntarily below that.' },
    { q: 'Do I charge VAT if I am not registered?', a: 'No. Only VAT-registered businesses can charge VAT, and they must show their VAT number on invoices. If you are not registered, your prices simply have no VAT on them.' },
  ],
  sources: [
    ['https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services', 'GOV.UK: VAT rates on different goods and services'],
    ['https://www.gov.uk/vat-flat-rate-scheme', 'GOV.UK: VAT Flat Rate Scheme'],
    ['https://www.gov.uk/guidance/flat-rate-scheme-for-vat-notice-733', 'HMRC VAT Notice 733: Flat Rate Scheme'],
    ['https://www.gov.uk/vat-registration', 'GOV.UK: VAT registration'],
  ],
};
