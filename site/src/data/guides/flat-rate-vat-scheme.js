// Guide: /resources/flat-rate-vat-scheme/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April and after each Budget.
export default {
  url: '/resources/flat-rate-vat-scheme/',
  section: 'tax',
  title: 'Flat Rate VAT Scheme: Rates and Rules | Severin Finance',
  description: 'How the Flat Rate VAT Scheme works: the £150,000 joining limit, rates by trade, the 16.5% limited cost rate and 1% first-year discount. Free consultation.',
  h1: 'Flat Rate VAT Scheme: how it works and who it suits',
  crumb: 'Flat Rate VAT Scheme',
  summary: 'Pay HMRC a fixed percentage of gross turnover. Join at £150,000 or less, leave over £230,000.',
  topic: 'VAT Flat Rate Scheme',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/vat-accountant/', label: 'Our VAT service',
    boxTitle: 'Is flat rate right for you?', text: 'We compare the Flat Rate Scheme with standard VAT accounting on your real figures, then apply and file your returns.',
  },

  hero: {
    answer: 'On the Flat Rate VAT Scheme you pay HMRC a fixed percentage of your VAT-inclusive turnover and keep the difference, but you usually cannot reclaim VAT on purchases. You can join if you expect taxable turnover of £150,000 or less. Rates depend on your trade, limited cost businesses pay 16.5%, and you get 1% off in your first registered year.',
  },

  tldr: [
    'Join if you expect VAT taxable turnover of <strong>£150,000 or less</strong> (excluding VAT) in the next 12 months.',
    'You must leave if turnover including VAT goes over <strong>£230,000</strong>.',
    'Your rate depends on your trade, from <strong>4%</strong> to <strong>14.5%</strong>, with a <strong>1% discount</strong> in your first year of VAT registration.',
    'Limited cost businesses pay <strong>16.5%</strong>, which often wipes out any saving.',
    'You cannot reclaim VAT on purchases, except single capital assets costing <strong>£2,000 or more</strong> including VAT.',
  ],

  sections: [
    {
      id: 'how-it-works', h2: 'How does the Flat Rate VAT Scheme work?', toc: 'How it works',
      body: [
        '<p>You still charge your customers VAT at the normal rate, usually 20%, but instead of working out the VAT on each sale and purchase, you pay HMRC a fixed percentage of your VAT-inclusive turnover and keep the rest. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> run both methods on your figures before you apply, so you know whether it saves you money.</p>',
        '<p>HMRC\'s own example: a photographer bills a customer £1,000 plus 20% VAT, so £1,200 in total. The flat rate for photography is 11%, so the photographer pays HMRC 11% of £1,200, which is £132, and keeps £68 of the £200 VAT charged.</p>',
        '<p>The trade-off is that you usually cannot reclaim VAT on what you buy. The one exception is a single purchase of capital goods, such as a computer or a van, costing £2,000 or more including VAT. You reclaim that VAT on your return in the normal way.</p>',
        '<p>The scheme also cuts admin: you do not need to record the VAT on every purchase invoice. You still keep digital records and file returns through Making Tax Digital software.</p>',
      ],
    },
    {
      id: 'eligibility', h2: 'Who can join the Flat Rate Scheme?', toc: 'Who can join',
      body: [
        '<p>You can join if you are VAT registered and you expect your VAT taxable turnover to be £150,000 or less, excluding VAT, in the next 12 months. You cannot join if you:</p>',
        '<ul><li>left the scheme in the last 12 months</li><li>committed a VAT offence, such as VAT evasion, in the last 12 months</li><li>joined, or were eligible to join, a VAT group in the last 24 months</li><li>registered for VAT as a business division in the last 24 months</li><li>are closely associated with another business</li><li>use a margin scheme or the Capital Goods Scheme</li></ul>',
        '<p>You cannot use the Flat Rate Scheme with the Cash Accounting Scheme, although the Flat Rate Scheme has its own cash-based option for working out turnover. You can combine it with the Annual Accounting Scheme. If you are not registered yet, our guide to <a href="/resources/vat-registration/">VAT registration</a> explains when you must register.</p>',
      ],
    },
    {
      id: 'rates', h2: 'What flat rate will you pay?', toc: 'Flat rates by trade',
      body: [
        '<p>HMRC sets a percentage for each type of business. You use the one for your main business activity, the one that brings in most of your turnover.</p>',
        { caption: 'Examples of VAT flat rates by trade', head: ['Type of business', 'Flat rate'], rows: [
          ['Accountancy or book-keeping', '14.5%'],
          ['Computer and IT consultancy or data processing', '14.5%'],
          ['Labour-only building or construction services', '14.5%'],
          ['Management consultancy', '14%'],
          ['Hairdressing or other beauty treatment services', '13%'],
          ['Catering services including restaurants and takeaways', '12.5%'],
          ['Business services not listed elsewhere', '12%'],
          ['Advertising', '11%'],
          ['Photography', '11%'],
          ['General building or construction services', '9.5%'],
          ['Retailing not listed elsewhere', '7.5%'],
          ['Limited cost business (any trade)', '16.5%'],
        ], after: 'Source: GOV.UK, VAT Flat Rate Scheme: how much you pay. Checked 13 October 2026. Take 1% off in your first year of VAT registration.' },
      ],
    },
    {
      id: 'limited-cost', h2: 'What is a limited cost business?', toc: 'Limited cost rate',
      body: [
        '<p>You are a limited cost business for a VAT period if what you spend on relevant goods, including VAT, is either less than 2% of your flat rate turnover, or more than 2% but less than £1,000 a year (£250 for a quarterly return). You then pay 16.5% instead of your trade rate.</p>',
        '<p>Relevant goods are goods used only for your business. Several common costs do not count:</p>',
        '<ul><li>any services, such as rent, software subscriptions, phone contracts and accountancy</li><li>capital goods of any value, such as laptops and equipment</li><li>food or drink for you or your staff</li><li>vehicles, vehicle costs and fuel, unless you work in the transport sector</li><li>goods for resale, leasing or hire, unless that is your main business</li><li>promotional items, gifts and donations</li></ul>',
        '<p>This is why many consultants, contractors and other service businesses fall into the 16.5% rate. You must check the test for every VAT return, using HMRC\'s <a href="https://www.tax.service.gov.uk/check-your-vat-flat-rate/vat-return-period">online flat rate checker</a> or our <a href="/resources/vat-calculator/">VAT calculator</a>, which includes a limited cost business check.</p>',
        '<p>At 16.5% of VAT-inclusive turnover, you pay HMRC 99% of the VAT you charge (16.5% of 120 is 19.8), so the scheme saves almost nothing and you lose the right to reclaim VAT on costs. Most limited cost businesses are better off on standard VAT accounting.</p>',
      ],
    },
    {
      id: 'first-year-discount', h2: 'How does the first-year discount work?', toc: 'First-year discount',
      body: [
        '<p>You take 1% off your flat rate until the day before the first anniversary of your VAT registration. A photographer in their first year would pay 10% instead of 11%.</p>',
        '<p>The discount runs from your VAT registration date, not from the date you join the scheme. If you register in March and join the scheme the following January, you get the discount for only two months. Joining at the same time as you register gets the full year.</p>',
      ],
    },
    {
      id: 'worth-it', h2: 'Is the Flat Rate Scheme worth it?', toc: 'Is it worth it?',
      body: [
        '<p>It usually pays when your trade rate is well below 16.5%, you spend enough on relevant goods to avoid the limited cost test, and your VAT-able costs are low. It rarely pays if you buy a lot of standard-rated stock or materials, because you lose that input VAT.</p>',
        { caption: 'Illustrative example: IT consultant, not a limited cost business, past the first year', head: ['Item', 'Standard VAT', 'Flat Rate Scheme'], rows: [
          ['Sales before VAT', '£80,000', '£80,000'],
          ['VAT charged at 20%', '£16,000', '£16,000'],
          ['VAT on costs (£6,000 of standard-rated costs)', '£1,200 reclaimed', 'Not reclaimed'],
          ['VAT paid to HMRC', '£14,800', '14.5% of £96,000 = £13,920'],
          ['Difference', 'Baseline', '£880 a year less VAT to pay'],
        ], after: 'Illustrative figures only. If the same business failed the limited cost test, it would pay 16.5% of £96,000, which is £15,840, and be £1,040 worse off than on standard VAT.' },
        '<p>Contractors should look at this alongside their IR35 position and how they pay themselves; see our <a href="/uk/accounting/contractor-accountant/">contractor accountants</a> and our guide to <a href="/resources/ir35-explained/">IR35</a>. Because the limited cost test is applied to each return, the answer can change from one quarter to the next.</p>',
      ],
    },
    {
      id: 'join-or-leave', h2: 'How do you join or leave the scheme?', toc: 'Joining and leaving',
      body: [
        '<p>Apply to HMRC online or by post on form VAT600FRS. If you are registering for VAT, you can join at the same time and use the scheme from your registration date. HMRC confirms your start date in your VAT online account or by post.</p>',
        '<p>You must leave if:</p>',
        '<ul><li>on the anniversary of joining, your turnover in the last 12 months was more than £230,000 including VAT, or you expect it to be over £230,000 in the next 12 months</li><li>you expect your total income in the next 30 days alone to be more than £230,000 including VAT</li><li>you are no longer eligible for any other reason</li></ul>',
        '<p>You can also choose to leave at any time by writing to HMRC, and HMRC confirms your leaving date. After you leave you must wait 12 months before you can rejoin. Late flat rate returns and payments get the same penalties as any other VAT return; see our guide to <a href="/resources/vat-penalties/">VAT penalties</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the flat rate VAT percentage for consultants?', a: 'Management consultancy is 14% and computer and IT consultancy is 14.5%. If your spending on relevant goods is under 2% of turnover, or under £1,000 a year, you pay the limited cost business rate of 16.5% instead. Take 1% off in your first year of VAT registration.' },
    { q: 'Can I reclaim VAT on a laptop on the Flat Rate Scheme?', a: 'Only if it is a single purchase of capital goods costing £2,000 or more including VAT. You reclaim that VAT on your return in the normal way. Cheaper items, several smaller purchases and services do not qualify.' },
    { q: 'Do I still charge 20% VAT on the Flat Rate Scheme?', a: 'Yes. Your customers see normal VAT on your invoices, usually 20%. The flat rate only changes how much of that VAT you pay over to HMRC, which is a fixed percentage of your VAT-inclusive turnover.' },
    { q: 'Can a limited company use the Flat Rate Scheme?', a: 'Yes. The scheme is open to sole traders, partnerships and limited companies that are VAT registered and expect taxable turnover of £150,000 or less. A company that is closely associated with another business cannot join.' },
    { q: 'How often do I check the limited cost business test?', a: 'For every VAT return. Spending on relevant goods can change from quarter to quarter, so you might pay your trade rate one quarter and 16.5% the next. HMRC has an online checker for each return period.' },
  ],

  sources: [
    ['https://www.gov.uk/vat-flat-rate-scheme', 'GOV.UK: VAT Flat Rate Scheme'],
    ['https://www.gov.uk/vat-flat-rate-scheme/how-much-you-pay', 'GOV.UK: Flat Rate Scheme, how much you pay'],
    ['https://www.gov.uk/vat-flat-rate-scheme/who-can-join', 'GOV.UK: Flat Rate Scheme, who can join'],
    ['https://www.gov.uk/vat-flat-rate-scheme/if-your-circumstances-change', 'GOV.UK: Flat Rate Scheme, if your circumstances change'],
    ['https://www.gov.uk/government/publications/vat-notice-733-flat-rate-scheme-for-small-businesses/vat-notice-733-flat-rate-scheme-for-small-businesses', 'GOV.UK: VAT Notice 733, Flat Rate Scheme for small businesses'],
  ],

  related: [
    '/resources/vat-registration/',
    '/resources/vat-penalties/',
    '/resources/ir35-explained/',
    '/resources/how-to-pay-yourself-from-a-limited-company/',
  ],
};
