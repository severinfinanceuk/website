// Guide: /resources/crypto-tax-uk/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and the HMRC Cryptoassets Manual on 13 October 2026 (sources below). Also checked:
// gov.uk/capital-gains-tax/allowances (£3,000), gov.uk/capital-gains-tax/losses (claim within 4 years),
// gov.uk/capital-gains-tax/work-out-need-to-pay (report proceeds over £50,000), HMRC manual CRYPTO21250 (airdrops),
// gov.uk/report-and-pay-your-capital-gains-tax/if-you-have-other-capital-gains-to-report (real time service dates).
// Re-check each April and after each Budget.
export default {
  url: '/resources/crypto-tax-uk/',
  section: 'tax',
  title: 'Crypto Tax UK: CGT and Income Tax Rules | Severin Finance',
  description: 'Crypto tax in the UK for 2026-27: CGT at 18% or 24% above the £3,000 allowance, income tax on staking and mining, pooling and records. Free consultation.',
  h1: 'Crypto tax in the UK: what you pay and how to report it',
  crumb: 'Crypto tax UK',
  summary: 'CGT on selling or swapping crypto, income tax on staking and mining, and the records HMRC expects.',
  topic: 'UK tax on cryptoassets',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/capital-gains-tax-accountant/', label: 'Our capital gains tax service',
    boxTitle: 'Need your crypto gains worked out?', text: 'We rebuild your pooled costs from exchange and wallet records, work out the tax and report it to HMRC.',
  },

  hero: {
    answer: 'In the UK, you pay Capital Gains Tax when you sell, swap, spend or give away crypto, if your total gains for 2026-27 exceed the £3,000 allowance. Gains are taxed at 18% within the basic rate band and 24% above it. Crypto from staking, mining or employment is taxed as income when you receive it.',
  },

  tldr: [
    'Selling, swapping one token for another, spending or gifting crypto are all <strong>disposals</strong> for Capital Gains Tax.',
    'For 2026-27 the allowance is <strong>£3,000</strong>. Gains above it are taxed at <strong>18%</strong> or <strong>24%</strong>.',
    'Staking, mining, lending and crypto paid by an employer are <strong>income</strong>, taxed at your Income Tax rates.',
    'Each token type sits in its own <strong>pool</strong> with an average cost. Exchange reports are not tax calculations.',
    'From <strong>1 January 2026</strong>, crypto platforms collect your details and report your transactions to HMRC.',
  ],

  sections: [
    {
      id: 'when-you-pay', h2: 'When do you pay tax on crypto in the UK?', toc: 'When tax is due',
      body: [
        '<p>You pay tax when you dispose of crypto at a gain, or when you receive it as income. Buying crypto with pounds and holding it is not taxed. Our <a href="/uk/tax/capital-gains-tax-accountant/">capital gains tax accountants</a> work out gains for clients who trade or hold crypto across several exchanges and wallets, and report them to HMRC.</p>',
        '<p>HMRC treats these as disposals for Capital Gains Tax:</p>',
        '<ul><li>selling tokens for pounds or another currency</li><li>exchanging one cryptoasset for another, including swaps into a stablecoin</li><li>using tokens to pay for goods or services</li><li>giving tokens away, unless the gift is to your spouse, civil partner or a charity</li></ul>',
        '<p>A swap is the one that catches people out. If you exchange one token for another, you have disposed of the first token at its market value in pounds, even though no money reached your bank account.</p>',
      ],
    },
    {
      id: 'cgt-rates', h2: 'What are the Capital Gains Tax rates on crypto for 2026-27?', toc: 'CGT rates',
      body: [
        '<p>Crypto gains are taxed at 18% or 24%, the same rates as shares and other assets. You only pay on total gains above the £3,000 annual allowance.</p>',
        { caption: 'Capital Gains Tax on crypto: 2025-26 and 2026-27', head: ['Item', '2025-26', '2026-27'], rows: [
          ['Annual tax-free allowance (individuals)', '£3,000', '£3,000'],
          ['Gains within your unused basic rate band', '18%', '18%'],
          ['Gains above the basic rate band', '24%', '24%'],
          ['Basic rate band used for the test', '£37,700', '£37,700'],
        ], after: 'Source: GOV.UK, Capital Gains Tax rates and allowances. Checked 13 October 2026. Your taxable gains are added to your taxable income to see how much falls in the basic rate band.' },
        '<p>The allowance cannot be carried forward if you do not use it. Losses are different: if you sell tokens at a loss, report the loss to HMRC within 4 years of the end of that tax year and you can set it against gains now or in later years.</p>',
      ],
    },
    {
      id: 'pooling', h2: 'How do you work out the gain on crypto?', toc: 'Pooling and costs',
      body: [
        '<p>Your gain is what you got for the tokens minus their share of your pooled cost and any allowable fees. Each type of token has its own pool (a "section 104 pool"), so holding three different coins means three pools, each with an average cost.</p>',
        '<p>Two matching rules come before the pool:</p>',
        '<ol><li><strong>Same day rule:</strong> tokens of the same type bought on the same day as a sale are matched with that sale first.</li><li><strong>30-day rule:</strong> tokens of the same type bought in the 30 days after a sale are matched with that sale next.</li><li>Anything left is matched with the pool at its average cost.</li></ol>',
        { caption: 'Illustrative example: pooled cost on a sale in 2026-27', head: ['Step', 'Tokens', 'Cost or value'], rows: [
          ['Bought in 2023', '2', '£3,000'],
          ['Bought in 2024', '2', '£5,000'],
          ['Pool before the sale (average £2,000 a token)', '4', '£8,000'],
          ['Sold 1 token in June 2026, exchange fee £100', '1', '£6,000 received'],
          ['Allowable cost: £2,000 from the pool plus the £100 fee', '1', '£2,100'],
          ['Gain (£6,000 minus £2,100)', '', '£3,900'],
          ['Taxable after the £3,000 allowance', '', '£900'],
          ['Tax for a higher rate taxpayer at 24%', '', '£216'],
        ], after: 'Illustrative figures only. The pool carries on with 3 tokens and a cost of £6,000. Assumes no other gains in the year and no purchases within 30 days of the sale.' },
        '<p>You can deduct transaction fees, advertising for a buyer, drafting contracts and valuation costs. You cannot deduct mining costs such as equipment or electricity, or anything already claimed against Income Tax. NFTs are not pooled: each one is a separate asset with its own cost.</p>',
      ],
    },
    {
      id: 'income', h2: 'Is crypto from staking, mining or airdrops taxed as income?', toc: 'Staking and mining',
      body: [
        '<p>Usually yes. HMRC treats tokens from mining, staking, lending and decentralised finance (DeFi) as income, valued in pounds when you receive them. If you are not trading, they are taxed as miscellaneous income at your normal Income Tax rates.</p>',
        { caption: 'How HMRC taxes crypto you receive', head: ['How you got the tokens', 'Tax when received', 'Tax when you later dispose'], rows: [
          ['Bought with your own money', 'None', 'CGT on any gain'],
          ['Paid by your employer', 'Income Tax and National Insurance, often through PAYE', 'CGT on growth since you received them'],
          ['Mining, staking, lending or DeFi', 'Income Tax as miscellaneous income (or trading income if you trade)', 'CGT on growth since you received them'],
          ['Airdrop received for nothing in return', 'Usually none', 'CGT on the gain'],
          ['Airdrop received for a service', 'Income Tax', 'CGT on growth since you received them'],
        ], after: 'Sources: GOV.UK, Check if you need to pay tax when you receive cryptoassets; HMRC Cryptoassets Manual CRYPTO21250.' },
        '<p>For 2026-27 the Personal Allowance is £12,570, then Income Tax is 20% up to £50,270, 40% up to £125,140 and 45% above (bands differ if you live in Scotland). The £1,000 trading and miscellaneous income allowance covers small amounts of crypto income. HMRC says to contact it if your total miscellaneous income is between £1,000 and £2,500, and to register for Self Assessment if it is more than £2,500.</p>',
      ],
    },
    {
      id: 'reporting', h2: 'How do you report crypto gains to HMRC?', toc: 'Reporting',
      body: [
        '<p>Report gains above the allowance either on your Self Assessment return or through HMRC\'s real time Capital Gains Tax service. Since the 2024-25 return, Self Assessment has a separate cryptoasset section, and amounts must be in pounds sterling.</p>',
        { caption: 'Reporting crypto gains made in 2025-26', head: ['Route', 'Report by', 'Pay by'], rows: [
          ['Real time Capital Gains Tax service (UK residents only)', '31 December 2026', '31 January 2027'],
          ['Self Assessment return (online)', '31 January 2027', '31 January 2027'],
        ], after: 'Source: GOV.UK, Report and pay your Capital Gains Tax. You must attach your calculations to a real time report.' },
        '<p>If you are registered for Self Assessment, you must also report disposals where your total sale proceeds were over £50,000, even if the gain is under the allowance. For all the return dates, see our <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> guide, or let our <a href="/uk/tax/self-assessment-accountant/">self assessment accountants</a> file it.</p>',
        '<p>If you should have paid tax on crypto in earlier years, HMRC\'s <a href="https://www.gov.uk/guidance/tell-hmrc-about-unpaid-tax-on-cryptoassets">Cryptoasset Disclosure Service</a> lets you correct it. Coming forward before HMRC contacts you usually means lower penalties: our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a> explains why.</p>',
      ],
    },
    {
      id: 'carf', h2: 'What is the Cryptoasset Reporting Framework?', toc: 'Reporting Framework',
      body: [
        '<p>It is a set of rules that makes crypto platforms report their users\' transactions to HMRC. It covers transactions from 1 January 2026, and UK service providers must send their first reports for the 2026 calendar year by 31 May 2027.</p>',
        '<p>Any platform you use to buy, sell, transfer or exchange crypto will ask you for:</p>',
        '<ul><li>your full name and date of birth</li><li>the address and country where you normally live</li><li>your tax identification number, which for UK residents can be your National Insurance number</li></ul>',
        '<p>If you give a UK provider inaccurate details, or none, you could get a penalty of up to £300. HMRC uses the information to match your crypto activity to your tax record, so expect it to compare platform data with what you report. If HMRC writes to you about crypto, read our guide to <a href="/resources/hmrc-compliance-check-letter/">HMRC compliance check letters</a>.</p>',
      ],
    },
    {
      id: 'records', h2: 'What crypto records do you need to keep?', toc: 'Records',
      body: [
        '<p>You must keep your own records for every transaction; HMRC says exchange reports help but do not track pooled costs. For each token type, record:</p>',
        '<ul><li>the type of token and the date of each purchase, receipt or disposal</li><li>the number of tokens disposed of and the number left</li><li>the value in pounds sterling at the time</li><li>pooled costs before and after each disposal</li><li>bank statements showing money in and out</li><li>wallet addresses (optional, but useful)</li></ul>',
        '<p>Download your full history from each exchange regularly, and always before you close an account, because you may not be able to get it later. HMRC can ask for these records in a compliance check.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I pay tax if I move crypto between my own wallets?', a: 'No. HMRC says there is no disposal if you keep beneficial ownership throughout, for example moving tokens between addresses you control. Keep a record of each transfer and its date, so you can show the tokens stayed yours and keep your pooled costs accurate.' },
    { q: 'Is swapping crypto for crypto taxable in the UK?', a: 'Yes. Exchanging one cryptoasset for another is a disposal for Capital Gains Tax. You work out the gain using the market value in pounds of what you received, and pay tax if your total gains for the year exceed £3,000.' },
    { q: 'Do I have to report crypto if I made a loss?', a: 'You do not pay tax on a loss, but you should report it to HMRC within 4 years of the end of the tax year. A reported loss reduces gains in the same year and any left over can be carried forward to later years.' },
    { q: 'Does HMRC know about my crypto?', a: 'Increasingly, yes. Under the Cryptoasset Reporting Framework, platforms collect your name, address, date of birth and tax number and report your transactions to HMRC, starting with transactions from 1 January 2026.' },
    { q: 'How is crypto staking taxed in the UK?', a: 'Staking rewards are usually taxed as miscellaneous income, valued in pounds when you receive them. When you later sell or swap those tokens, Capital Gains Tax applies to any rise in value since you received them.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-sell-cryptoassets', 'GOV.UK: Tax when you sell cryptoassets'],
    ['https://www.gov.uk/guidance/check-if-you-need-to-pay-tax-when-you-receive-cryptoassets', 'GOV.UK: Tax when you receive cryptoassets'],
    ['https://www.gov.uk/capital-gains-tax/rates', 'GOV.UK: Capital Gains Tax rates'],
    ['https://www.gov.uk/hmrc-internal-manuals/cryptoassets-manual/crypto22200', 'HMRC Cryptoassets Manual: pooling and matching rules'],
    ['https://www.gov.uk/report-and-pay-your-capital-gains-tax/if-you-have-other-capital-gains-to-report', 'GOV.UK: Report and pay Capital Gains Tax'],
    ['https://www.gov.uk/guidance/reporting-cryptoasset-user-and-transaction-data', 'GOV.UK: Cryptoasset Reporting Framework for service providers'],
    ['https://www.gov.uk/guidance/information-youll-need-to-give-to-uk-cryptoasset-service-providers', 'GOV.UK: Information to give cryptoasset service providers'],
    ['https://www.gov.uk/income-tax-rates', 'GOV.UK: Income Tax rates and bands'],
  ],

  related: [
    '/resources/capital-gains-tax-on-property/',
    '/resources/self-assessment-deadlines/',
    '/resources/hmrc-penalties-explained/',
    '/resources/hmrc-compliance-check-letter/',
  ],
};
