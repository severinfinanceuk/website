// Guide: /resources/bridging-loan-exit-strategy/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026: FCA Handbook MCOB 11.6 (repayment strategy for bridging loans, 11.6.41, 11.6.53 to 11.6.55),
// MCOB 4.7A (bridging loans and advice), MCOB 13.3 (arrears, repossession as a last resort), Law of Property Act 1925 s101
// (mortgagee's power of sale and to appoint a receiver) and GOV.UK (60-day CGT report on UK residential property).
// Bridging rates, fees and default rates are lender-specific and not officially published: the worked example is illustrative.
// Scope: exits and what happens if they fail. Regulated vs unregulated is in regulated-vs-unregulated-bridging.js.
export default {
  url: '/resources/bridging-loan-exit-strategy/',
  section: 'business-finance',
  title: 'Bridging Loan Exit Strategy Explained | Severin Finance',
  description: 'Bridging loan exits: sale, refinance or development exit, what lenders check, default interest and what happens if the exit fails. Free consultation.',
  h1: 'Bridging loan exit strategies',
  summary: 'Sale, refinance or development exit: what lenders check and what happens if the exit fails.',
  topic: 'Exit strategies for bridging loans',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/bridging-loans/', label: 'Our bridging loan service',
    boxTitle: 'Is your exit realistic?', text: 'We arrange bridging loans with lenders, and our accountants test your sale or refinance plan before any lender sees it.',
  },

  hero: {
    answer: 'Your exit strategy is how you will repay the bridging loan, usually by selling the property, refinancing onto a longer-term mortgage, or selling or letting finished units after a development. Lenders test the exit before they lend. If it fails, expect default interest and fees, and in the end the lender can sell the property.',
  },

  tldr: [
    'The three main exits are <strong>sale</strong>, <strong>refinance</strong> and <strong>development exit</strong>.',
    'Lenders check the exit as closely as the property: valuation, timing and whether a mortgage lender would really lend.',
    'Rolled-up interest and fees grow every month, so the exit must clear the <strong>full balance</strong>, not just the loan.',
    'For regulated bridging, FCA rules require a <strong>credible repayment strategy</strong> before the loan is made.',
    'If the exit fails, default interest, extension fees and, in the end, a forced sale can follow.',
  ],

  sections: [
    {
      id: 'exit-options', h2: 'What exit strategies do bridging lenders accept?', toc: 'Exit options',
      body: [
        '<p>Most lenders accept a sale of the property, a refinance onto a term mortgage, or a development exit. When we <a href="/uk/business-finance/bridging-loans/">arrange bridging loans</a> with lenders, our accountants test the exit first, because it decides which lenders will consider you and on what terms. Finance is subject to status and lender approval.</p>',
        { caption: 'The main bridging exits', head: ['Exit', 'How it repays the loan', 'What the lender wants to see'], rows: [
          ['Sale of the property', 'Sale proceeds clear the bridge', 'A realistic price backed by comparable sales, and a sensible marketing period'],
          ['Sale of another property', 'You sell a different property, such as your current home in a chain break', 'A valuation of that property and, ideally, a buyer or exchanged contracts'],
          ['Refinance', 'A buy-to-let, commercial or residential mortgage repays the bridge', 'Evidence you would meet a term lender\'s criteria, ideally an agreement in principle'],
          ['Development exit', 'Units are sold, or the finished scheme is refinanced', 'Build progress, sales evidence and a timeline that fits the term'],
        ], after: 'Other exits, such as money from a business sale or an inheritance, are possible but need firm evidence of the amount and timing.' },
        '<p>A closed bridge has a fixed repayment date because the exit is already agreed, such as an exchanged sale. An open bridge has no fixed date within the lender\'s maximum term, but you still need a clear plan.</p>',
      ],
    },
    {
      id: 'lender-checks', h2: 'What do lenders check before accepting your exit?', toc: 'What lenders check',
      body: [
        '<p>Lenders check that the exit is likely to happen, within the term, for enough money to repay everything owed. In practice that means:</p>',
        '<ul><li><strong>Valuation:</strong> the current value and, for refurbishments, the expected value once the works are done.</li><li><strong>Timing:</strong> whether a sale or refinance can realistically complete before the term ends, with time to spare.</li><li><strong>Refinance criteria:</strong> for buy-to-let, whether the expected rent would satisfy a mortgage lender; for business premises, whether your accounts would support a commercial mortgage.</li><li><strong>You:</strong> your credit history, experience with similar projects and other debts.</li><li><strong>The total owed at the end:</strong> loan plus rolled-up interest, fees and any exit fee.</li></ul>',
        '<h3>Extra rules for regulated bridging</h3>',
        '<p>If the bridge is a regulated mortgage contract, for example secured on a home you live in, FCA rules apply. The lender must see evidence of a clearly understood and credible repayment strategy. Where the plan is to refinance with a mainstream lender, it should be reasonably satisfied that one would lend, for example from an agreement in principle. If you sell your current home to repay, the lender may want an independent valuation of it. Our guide to <a href="/resources/regulated-vs-unregulated-bridging/">regulated and unregulated bridging</a> explains when the rules apply.</p>',
      ],
    },
    {
      id: 'sale-exit', h2: 'How does a sale exit work?', toc: 'Sale exit',
      body: [
        '<p>You sell the property, and your solicitor repays the lender from the proceeds on completion. The risk is time and price: a sale can take months from listing to completion, and the price you achieve may be lower than you planned.</p>',
        '<p>Build in the costs of selling, such as agent and legal fees, and any tax on the gain. If you, as an individual living in the UK, sell a residential property that is not your main home at a gain, you usually have to report and pay capital gains tax within 60 days of completion. Our guide to <a href="/resources/capital-gains-tax-on-property/">capital gains tax on property</a> explains the rules. A company selling property pays corporation tax on the profit instead.</p>',
        { caption: 'Does the sale clear the bridge? (illustrative)', head: ['Item', 'Amount'], rows: [
          ['Bridging loan', '£300,000'],
          ['Interest rolled up for 12 months at an assumed 1% a month', '£36,000'],
          ['Lender arrangement and exit fees (assumed)', '£6,000'],
          ['Total to repay', '£342,000'],
          ['Sale price', '£400,000'],
          ['Selling costs (assumed)', '£8,000'],
          ['Left before any tax on the gain', '£50,000'],
        ], after: 'Illustrative figures only, not a quote. Simple interest is shown; some lenders compound rolled-up interest monthly, which costs more.' },
      ],
    },
    {
      id: 'refinance-exit', h2: 'How does a refinance exit work?', toc: 'Refinance exit',
      body: [
        '<p>A longer-term lender pays off the bridge, and you keep the property. This is the usual exit for landlords who buy, refurbish and let, and for businesses that buy premises quickly and then move onto a commercial mortgage.</p>',
        '<p>The refinance lender makes its own decision on its own valuation. If the works add less value than you expected, or rents are lower, the new loan may not cover the bridge, and you would need cash to make up the gap. Start the refinance application well before the bridge term ends, because term lenders take time to value and underwrite.</p>',
        '<p>For let residential property, our guide to <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a> covers how company ownership affects tax and mortgages. For premises, see our <a href="/uk/business-finance/commercial-mortgages/">commercial mortgage</a> service and our guide to <a href="/resources/commercial-mortgage-deposit/">commercial mortgage deposits</a>.</p>',
      ],
    },
    {
      id: 'development-exit', h2: 'What is a development exit loan?', toc: 'Development exit',
      body: [
        '<p>A development exit loan is a bridge that repays your development finance once building work is finished, giving you more time to sell or let the units. Development facilities have a set term, and staying on past it can be expensive. Because the build risk has gone, a development exit can cost less than extending the original facility, but it depends on the lender and your sales evidence.</p>',
        '<p>Lenders look at practical completion, sign-off from building control, sales already agreed and the value of the remaining units. Our guide to <a href="/resources/development-finance-ltgdv-explained/">LTGDV and loan to cost</a> explains how the original facility is sized, and our <a href="/uk/business-finance/development-finance/">development finance</a> team can review both stages together.</p>',
      ],
    },
    {
      id: 'exit-fails', h2: 'What happens if your exit fails?', toc: 'If the exit fails',
      body: [
        '<p>The loan does not disappear when the term ends: you are in default, and the costs rise. What usually follows depends on your facility letter, but expect some or all of these:</p>',
        '<ul><li><strong>Default interest:</strong> a higher rate charged from the date of default, set out in your loan agreement.</li><li><strong>Fees:</strong> extension, administration and legal costs, usually added to the balance.</li><li><strong>An extension or a new bridge:</strong> possible if the exit is delayed rather than lost, but at a cost.</li><li><strong>Enforcement:</strong> in England and Wales, the Law of Property Act 1925 gives a lender with a mortgage by deed the power to sell the property and appoint a receiver once the money is due. Loan documents usually set out and extend these powers.</li><li><strong>Personal guarantees:</strong> if a sale does not cover the debt, the lender can pursue the shortfall, including from guarantors.</li></ul>',
        '<p>Regulated borrowers have more protection. The lender must treat you fairly if you are in payment difficulty, consider options such as extending the term, and repossess only once all other reasonable attempts to resolve the position have failed. It cannot extend a regulated bridge unless you make a positive choice to, and must check affordability as if it were a new loan. Your property may be repossessed if you do not repay a loan secured on it.</p>',
      ],
    },
    {
      id: 'stronger-plan', h2: 'How do you build an exit plan a lender will trust?', toc: 'A stronger plan',
      body: [
        '<ol><li>Base the sale price or end value on recent comparable evidence, not asking prices.</li><li>Get a refinance agreement in principle before you take the bridge, where you can.</li><li>Choose a term with spare months beyond your expected exit date.</li><li>Work out the full balance at the end, including rolled-up interest and exit fees.</li><li>Have a second exit ready, such as letting instead of selling.</li><li>Tell the lender early if things slip. An extension agreed before the term ends usually costs less than default.</li></ol>',
        '<p>Buying at auction adds a fixed completion date. Our guide to <a href="/resources/buying-property-at-auction/">buying property at auction</a> covers the timings.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can I get a bridging loan without an exit strategy?', a: 'No. Lenders will not lend without a believable plan to repay, because the loan is short term. For regulated bridging, FCA rules require the lender to see evidence of a clearly understood and credible repayment strategy before lending.' },
    { q: 'What is default interest on a bridging loan?', a: 'Default interest is a higher rate the lender can charge once you breach the loan, for example by not repaying at the end of the term. The rate and when it starts are set in your facility letter, so check them before you sign.' },
    { q: 'Can I extend a bridging loan if my sale is delayed?', a: 'Often, if the lender agrees and the exit still looks realistic. Expect an extension fee and possibly a higher rate. For a regulated bridge, the lender must check affordability again and you must choose the extension positively.' },
    { q: 'Is refinancing a good bridging exit?', a: 'It can be, if a term lender is likely to lend enough to clear the full balance. The refinance lender values the property itself, so a lower valuation or rent than you expected can leave a gap you must fund.' },
    { q: 'Can a bridging lender repossess my property?', a: 'Yes. If you do not repay, a lender with a mortgage over the property can, in the end, appoint a receiver or take possession and sell it. Lenders on regulated loans must treat repossession as a last resort.' },
  ],

  sources: [
    ['https://handbook.fca.org.uk/handbook/MCOB/11/6.html', 'FCA Handbook MCOB 11.6: responsible lending, including bridging loans'],
    ['https://handbook.fca.org.uk/handbook/MCOB/4/7A.html', 'FCA Handbook MCOB 4.7A: advice on bridging loans'],
    ['https://handbook.fca.org.uk/handbook/MCOB/13/3.html', 'FCA Handbook MCOB 13.3: dealing fairly with customers in arrears'],
    ['https://www.legislation.gov.uk/ukpga/Geo5/15-16/20/section/101', 'Law of Property Act 1925, s101: powers of a mortgagee'],
    ['https://www.gov.uk/report-and-pay-your-capital-gains-tax/if-you-sold-a-property-in-the-uk-on-or-after-6-april-2020', 'GOV.UK: Report and pay CGT on UK property within 60 days'],
  ],

  related: [
    '/resources/regulated-vs-unregulated-bridging/',
    '/resources/buying-property-at-auction/',
    '/resources/development-finance-ltgdv-explained/',
    '/resources/capital-gains-tax-on-property/',
  ],
};
