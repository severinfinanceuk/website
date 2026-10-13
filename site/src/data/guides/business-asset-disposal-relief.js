// Guide: /resources/business-asset-disposal-relief/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and the HMRC Capital Gains Manual on 13 October 2026 (sources below). Also checked:
// HS275 (2026): lifetime limits by date, associated disposal rules (5% reduction, 2 years' use, 3 years' ownership
// if acquired from 13 June 2016), claim deadline; gov.uk/business-asset-disposal-relief/work-out-your-tax
// (BADR gains use the basic rate band first); HS308 and CG63515 (Investors' Relief 18%, £1m from 30 October 2024).
// Re-check each April and after each Budget.
export default {
  url: '/resources/business-asset-disposal-relief/',
  section: 'tax',
  title: 'Business Asset Disposal Relief 2026-27 | Severin Finance',
  description: 'Business Asset Disposal Relief in 2026-27: 18% on up to £1 million of lifetime gains, the 5% and 2-year tests, and how to claim. Free consultation.',
  h1: 'Business Asset Disposal Relief: rates, conditions and how to claim',
  crumb: 'Business Asset Disposal Relief',
  summary: '18% capital gains tax on up to £1 million of qualifying gains from selling your business in 2026-27.',
  topic: 'Business Asset Disposal Relief from capital gains tax',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/capital-gains-tax-accountant/', label: 'Our capital gains tax service',
    boxTitle: 'Selling your business?', text: 'We check you meet every condition before you sign, work out the tax and make the claim on your return.',
  },

  hero: {
    answer: 'Business Asset Disposal Relief cuts capital gains tax to 18% on qualifying gains when you sell all or part of your business, or shares in your own trading company, from 6 April 2026. It was 14% in 2025-26. The relief covers up to £1 million of gains over your lifetime, and you must claim it.',
  },

  tldr: [
    'Rate on qualifying gains: <strong>18%</strong> from 6 April 2026, <strong>14%</strong> in 2025-26 and <strong>10%</strong> before that.',
    '<strong>£1 million</strong> lifetime limit on qualifying gains, including past claims. Gains above it are taxed at the normal 18% or 24%.',
    'Shareholders need at least <strong>5%</strong> of the shares and votes, plus 5% of profits and assets or of sale proceeds, and must work for the company, for <strong>2 years</strong> before the sale.',
    'For 2026-27 sales the saving against the 24% rate is up to <strong>£60,000</strong>.',
    'Claim on your tax return: for a 2026-27 sale, by <strong>31 January 2029</strong>.',
  ],

  sections: [
    {
      id: 'rate', h2: 'What is the Business Asset Disposal Relief rate for 2026-27?', toc: 'The rate',
      body: [
        '<p>The rate is 18% for qualifying disposals made on or after 6 April 2026. It rose in two steps from the old 10%, as announced in the Autumn Budget 2024. Our <a href="/uk/tax/capital-gains-tax-accountant/">capital gains tax accountants</a> check whether you qualify before you agree a sale, and make the claim for you.</p>',
        { caption: 'Business Asset Disposal Relief rates and limit', head: ['Disposal date', 'Rate on qualifying gains', 'Lifetime limit'], rows: [
          ['Up to 5 April 2025', '10%', '£1 million (since 11 March 2020)'],
          ['6 April 2025 to 5 April 2026 (2025-26)', '14%', '£1 million'],
          ['From 6 April 2026 (2026-27)', '18%', '£1 million'],
        ], after: 'Source: GOV.UK, Business Asset Disposal Relief, and HMRC helpsheet HS275. Checked 13 October 2026.' },
        '<p>For a higher or additional rate taxpayer, the alternative is 24%. The relief now saves 6 percentage points, or up to £60,000 on the full £1 million. For a basic rate taxpayer with plenty of unused basic rate band, the saving can be small, because 18% is also the normal rate on gains within that band.</p>',
      ],
    },
    {
      id: 'lifetime-limit', h2: 'How does the £1 million lifetime limit work?', toc: 'Lifetime limit',
      body: [
        '<p>You can claim relief on a total of £1 million of qualifying gains over your lifetime, across any number of sales. Claims made under the old name, Entrepreneurs\' Relief, count towards it. Gains above whatever is left of your limit are taxed at the normal rates.</p>',
        '<p>Each person has their own limit, so a business owned by a couple can have up to £2 million of gains at the reduced rate if both of them meet the conditions in their own right. Giving shares to a spouse shortly before a sale does not work if they have not held them, and worked in the company, for the full 2 years.</p>',
        { caption: 'Illustrative example: selling a company in 2026-27 for a £1,200,000 gain', head: ['Step', 'With BADR', 'Without BADR'], rows: [
          ['Gain on the shares', '£1,200,000', '£1,200,000'],
          ['Gain within the lifetime limit', '£1,000,000 at 18% = £180,000', 'None'],
          ['Rest of the gain, less the £3,000 annual exempt amount', '£197,000 at 24% = £47,280', '£1,197,000 at 24% = £287,280'],
          ['Total capital gains tax', '£227,280', '£287,280'],
        ], after: 'Illustrative figures only. Assumes a higher rate taxpayer with no other gains or past claims. The annual exempt amount is set against the gains taxed at the highest rate.' },
      ],
    },
    {
      id: 'conditions', h2: 'Who qualifies for Business Asset Disposal Relief?', toc: 'Who qualifies',
      body: [
        '<p>You qualify if you sell all or part of your trading business, or shares in your own trading company, and you met the conditions throughout the 2 years up to the sale. The tests depend on how you hold the business.</p>',
        { caption: 'Main conditions, all met for 2 years up to the sale', head: ['You are selling', 'Conditions'], rows: [
          ['All or part of a business, as a sole trader or partner', 'You owned the business (or your partnership share) for 2 years. Selling single assets of a business that carries on does not qualify'],
          ['Shares in a company', 'The company is a trading company (or holding company of a trading group), you are an officer or employee, and you hold at least 5% of the shares and votes plus 5% of distributable profits and assets on a winding up, or 5% of the sale proceeds'],
          ['EMI option shares', 'The option was granted at least 2 years before the sale, and you are an officer or employee of a trading company. The 5% tests do not apply'],
          ['Assets or shares after the business stops', 'You met the conditions up to the date it stopped, and you sell within 3 years'],
        ], after: 'Source: GOV.UK, Business Asset Disposal Relief: eligibility, and HMRC helpsheet HS275. Checked 13 October 2026.' },
        '<p>A company that mainly holds investments, such as let property, is not a trading company. HMRC looks at the whole picture, and large cash balances can put the trading status at risk, so check this well before a sale. Our guide to <a href="/resources/emi-share-options/">EMI share options</a> covers the option scheme.</p>',
      ],
    },
    {
      id: 'associated-disposals', h2: 'Can you claim relief on property your company uses?', toc: 'Associated disposals',
      body: [
        '<p>Sometimes. If you own a building or other asset personally and let your company or partnership use it, selling it can qualify as an "associated disposal" when you also reduce your stake in the business.</p>',
        '<ul><li>You must sell at least 5% of the company\'s shares or of the partnership, as part of withdrawing from the business.</li><li>The business must have used the asset for 2 years up to that withdrawal, or up to when it stopped trading.</li><li>If you acquired the asset on or after 13 June 2016, you must have owned it for at least 3 years.</li></ul>',
        '<p>Relief is cut back on a "just and reasonable" basis if the business used the asset for only part of the time you owned it, or if you charged it rent after 5 April 2008.</p>',
      ],
    },
    {
      id: 'claim', h2: 'How do you claim Business Asset Disposal Relief?', toc: 'Making the claim',
      body: [
        '<p>You claim it on your Self Assessment tax return, in the capital gains pages, or in writing on helpsheet HS275. HMRC does not apply it automatically.</p>',
        { caption: 'Claim deadlines', head: ['Tax year of the sale', 'Claim by'], rows: [
          ['2024-25', '31 January 2027'],
          ['2025-26', '31 January 2028'],
          ['2026-27', '31 January 2029'],
        ], after: 'The deadline is the first anniversary of 31 January after the end of the tax year. Source: GOV.UK, Business Asset Disposal Relief: how to claim.' },
        '<p>The tax itself is due by 31 January after the end of the tax year of the sale: for a 2026-27 sale, 31 January 2028. When you agree a sale, the date for capital gains tax is normally the date contracts are exchanged, not completion. If you are not yet registered for Self Assessment, our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> sets out the dates.</p>',
        '<h3>How it interacts with other gains</h3>',
        '<p>Gains that qualify for the relief use up any unused basic rate band first. Other gains in the same year are then more likely to be taxed at 24%. If you also sell property, our guide to <a href="/resources/capital-gains-tax-on-property/">capital gains tax on property</a> explains the separate 60-day rule.</p>',
      ],
    },
    {
      id: 'investors-relief', h2: 'What is Investors\' Relief?', toc: 'Investors\' Relief',
      body: [
        '<p>Investors\' Relief is a similar relief for outside investors who do not work in the company. It uses the same rates as Business Asset Disposal Relief, 18% from 6 April 2026, and has its own separate £1 million lifetime limit (cut from £10 million for disposals on or after 30 October 2024).</p>',
        '<ul><li>The shares must be new ordinary shares issued on or after 17 March 2016, subscribed for in cash and fully paid.</li><li>The company must be an unlisted trading company or the holding company of a trading group.</li><li>You must have held the shares for at least 3 years.</li><li>You, and people connected with you, must not be officers or employees, although an unpaid director can still qualify.</li></ul>',
        '<p>Investors in early-stage companies should also look at the EIS and SEIS reliefs, explained in our guide to <a href="/resources/eis-vs-seis/">EIS vs SEIS</a>.</p>',
      ],
    },
    {
      id: 'before-you-sell', h2: 'What should you check before selling your business?', toc: 'Before you sell',
      body: [
        '<p>Check the conditions at least 2 years ahead, because most failures cannot be fixed at the last minute. In particular:</p>',
        '<ul><li>your shareholding and voting rights are 5% or more, and new share issues have not diluted you below it</li><li>you hold a formal role as an officer or employee</li><li>surplus cash or investments are not making the company look like an investment company</li><li>how much of your £1 million limit you have already used</li><li>whether part of the price is deferred or depends on future results, which changes when and how the gain is taxed</li></ul>',
        '<p>The route matters too. A sale to managers, a share buy-back or a sale to an employee ownership trust are taxed differently. Our <a href="/uk/company-services/succession-planning/">succession planning</a> team compares them, and our guide to a <a href="/resources/management-buy-out-guide/">management buy-out</a> covers that route in detail.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is Business Asset Disposal Relief 14% or 18% in 2026-27?', a: '18%. The 14% rate applied to qualifying disposals between 6 April 2025 and 5 April 2026. For disposals on or after 6 April 2026, qualifying gains are taxed at 18%, up to the £1 million lifetime limit.' },
    { q: 'Does Entrepreneurs\' Relief count towards the £1 million limit?', a: 'Yes. Business Asset Disposal Relief is the same relief renamed, so gains you claimed it on in earlier years reduce what is left of your £1 million lifetime limit. HMRC says you may be able to claim more if you sold assets before 11 March 2020.' },
    { q: 'Can I claim BADR if I own less than 5% of the shares?', a: 'Usually not. You need at least 5% of the ordinary shares and votes, plus 5% of profits and assets or of sale proceeds, for 2 years. Exceptions include shares from EMI options granted at least 2 years before the sale.' },
    { q: 'Can I claim BADR on a buy-to-let property?', a: 'No. Letting residential property is an investment activity, not a trade, so selling a rental property, or shares in a property investment company, does not qualify. The normal capital gains tax rates apply.' },
    { q: 'What happens if I close my company instead of selling it?', a: 'You can still qualify if the company stops trading and you dispose of your shares, for example through a liquidation, within 3 years. You must have met the conditions for the 2 years up to the date trading stopped. Take advice first if the company holds large reserves.' },
  ],

  sources: [
    ['https://www.gov.uk/business-asset-disposal-relief', 'GOV.UK: Business Asset Disposal Relief'],
    ['https://www.gov.uk/business-asset-disposal-relief/work-out-your-tax', 'GOV.UK: Business Asset Disposal Relief: work out your tax'],
    ['https://www.gov.uk/business-asset-disposal-relief/how-to-claim', 'GOV.UK: Business Asset Disposal Relief: how to claim'],
    ['https://www.gov.uk/government/publications/entrepreneurs-relief-hs275-self-assessment-helpsheet/hs275-business-asset-disposal-relief-2026', 'HMRC: HS275 Business Asset Disposal Relief'],
    ['https://www.gov.uk/government/publications/investors-relief-2020-hs308/investors-relief-2026-hs308', 'HMRC: HS308 Investors\' Relief'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg63515', 'HMRC Capital Gains Manual: Investors\' Relief rates'],
    ['https://www.gov.uk/capital-gains-tax/rates', 'GOV.UK: Capital Gains Tax rates'],
  ],

  related: [
    '/resources/management-buy-out-guide/',
    '/resources/employee-ownership-trusts/',
    '/resources/how-to-value-a-business/',
    '/resources/capital-gains-tax-on-property/',
  ],
};
