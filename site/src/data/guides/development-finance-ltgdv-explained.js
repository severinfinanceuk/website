// Guide: /resources/development-finance-ltgdv-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026: Bank of England (Bank Rate), GOV.UK planning, building regulations and
// viability guidance, HMRC VAT Notice 708, FCA Handbook PERG 4.4. There is no official source for typical
// LTGDV or LTC limits, interest rates or fees: every percentage here is labelled as an illustration.
// Scope: how lenders size and release a development loan. Appraisal content lives in development-appraisal-checklist.js.
export default {
  url: '/resources/development-finance-ltgdv-explained/',
  section: 'business-finance',
  title: 'LTGDV and LTC in Development Finance | Severin Finance',
  description: 'How lenders use LTGDV and LTC to size a development loan, the day-one advance, staged drawdowns and rolled-up interest, with an example. Free consultation.',
  h1: 'LTGDV and LTC in development finance explained',
  crumb: 'LTGDV and LTC explained',
  summary: 'How lenders size a development loan, release it in stages and roll up the interest.',
  topic: 'Loan to gross development value and loan to cost in property development finance',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/development-finance/', label: 'Our development finance service',
    boxTitle: 'Sizing a development loan?', text: 'We arrange development finance with lenders and our accountants test your costs, VAT and exit before any lender sees them.',
  },

  hero: {
    answer: 'LTGDV is the total loan as a percentage of what the finished scheme should be worth. LTC is the loan as a percentage of your land and build costs. Lenders apply both limits and lend the lower figure. The money comes in stages: part of the land price on day one, then build costs as each stage is signed off.',
  },

  tldr: [
    '<strong>GDV</strong> is the expected value of the finished scheme. <strong>LTGDV</strong> is the loan as a share of it.',
    '<strong>LTC</strong> is the loan as a share of total costs. The lower of the two limits sets your maximum loan.',
    'The <strong>day-one advance</strong> funds part of the site purchase. Build money follows in <strong>staged drawdowns</strong>.',
    'A <strong>monitoring surveyor</strong> checks the work for the lender before each drawdown. You usually pay the fees.',
    'Interest is usually <strong>rolled up</strong> and repaid when you sell or refinance, so it eats into the loan.',
  ],

  sections: [
    {
      id: 'meaning', h2: 'What do LTGDV and LTC mean?', toc: 'The terms',
      body: [
        '<p>LTGDV (loan to gross development value) compares the loan with the finished value of the scheme. LTC (loan to cost) compares it with what the scheme costs to deliver. Lenders use both to cap the loan, and our team uses them to work out which lenders fit before we arrange <a href="/uk/business-finance/development-finance/">development finance</a> for you.</p>',
        { caption: 'Development finance terms', head: ['Term', 'What it means'], rows: [
          ['GDV (gross development value)', 'The expected value of the finished scheme, usually set by the lender\'s valuer'],
          ['LTGDV', 'The total loan, including interest and fees, as a percentage of GDV'],
          ['LTC (loan to cost)', 'The total loan as a percentage of land, build and other project costs'],
          ['Gross loan', 'Everything you borrow, including rolled-up interest and the lender\'s fees'],
          ['Net loan', 'The money actually paid out for the site and the build'],
          ['Day-one advance', 'The part of the loan paid on completion of the site purchase'],
          ['Drawdown', 'A release of build money after a stage of work is checked'],
        ], after: 'Lenders define cost and value in slightly different ways. Read each offer\'s definitions before comparing them.' },
      ],
    },
    {
      id: 'maximum-loan', h2: 'How do lenders work out the maximum loan?', toc: 'Maximum loan',
      body: [
        '<p>They calculate the loan under each limit and offer the lower one. The LTGDV test protects the lender if values fall. The LTC test makes sure you have your own money in the scheme. The limits themselves vary by lender, project and borrower, so the percentages below are an illustration only, not market figures.</p>',
        { caption: 'Illustrative example: a scheme with a GDV of £2,000,000', head: ['Item', 'Amount'], rows: [
          ['Gross development value (GDV)', '£2,000,000'],
          ['Site purchase', '£500,000'],
          ['Build costs, professional fees and contingency', '£1,000,000'],
          ['Total costs before finance', '£1,500,000'],
          ['Loan at an assumed 65% LTGDV', '£1,300,000'],
          ['Loan at an assumed 85% LTC', '£1,275,000'],
          ['Maximum gross loan (the lower figure)', '£1,275,000'],
        ], after: 'Illustrative figures and limits only. Real limits depend on the lender, the scheme, your experience and the exit.' },
        '<p>The gross loan includes interest and fees. If those come to £150,000 in this example, the net loan available for the site and build is £1,125,000, and you fund the other £375,000 of costs yourself. That is why two offers with the same LTGDV can leave you needing very different amounts of cash.</p>',
      ],
    },
    {
      id: 'day-one', h2: 'What is the day-one advance?', toc: 'Day-one advance',
      body: [
        '<p>It is the part of the loan the lender pays when you complete the site purchase. Lenders usually lend only part of the land price on day one, often capped by the site\'s current value, and expect you to fund the rest.</p>',
        '<p>For example, on a £500,000 site a lender might advance £300,000 on day one (an assumed figure), leaving you to pay £200,000 plus Stamp Duty Land Tax and fees. Many lenders also want your own money spent before they release any build funds. Planning permission matters here: a site valued with permission is usually worth more than one without, and lenders generally want permission in place before build money flows. GOV.UK says most planning applications are decided within 8 weeks, or 13 weeks for unusually large or complex ones in England.</p>',
        '<p>If you need to buy before planning is granted, a bridging loan on the site is often used first and then repaid by the development loan. Our guide to <a href="/resources/bridging-loan-exit-strategy/">bridging loan exit strategies</a> explains how that switch works.</p>',
      ],
    },
    {
      id: 'drawdowns', h2: 'How do staged drawdowns work?', toc: 'Staged drawdowns',
      body: [
        '<p>The lender releases build money in stages, usually monthly or at milestones, after a monitoring surveyor confirms the work is done. Drawdowns are normally paid in arrears, so you or your contractor carry the cost of each stage until it is signed off.</p>',
        { caption: 'Illustrative drawdown schedule for £900,000 of build costs', head: ['Stage', 'Work signed off', 'Drawdown'], rows: [
          ['1', 'Groundworks and foundations', '£150,000'],
          ['2', 'Superstructure (walls and floors)', '£300,000'],
          ['3', 'Roof, windows and doors (weathertight)', '£150,000'],
          ['4', 'First fix (services, plumbing, electrics)', '£150,000'],
          ['5', 'Second fix, finishes and sign-off', '£150,000'],
        ], after: 'Illustrative only. The real schedule follows your cost plan and contract. Some lenders hold back a retention until completion.' },
        '<p>Because interest is charged only on money drawn, staged release keeps finance costs lower than borrowing everything on day one. It also means a cost overrun is your problem: the lender will not usually lend more than the facility, so you fund any gap.</p>',
      ],
    },
    {
      id: 'monitoring-surveyor', h2: 'What does a monitoring surveyor do?', toc: 'Monitoring surveyor',
      body: [
        '<p>A monitoring surveyor checks the project for the lender, before the loan starts and before each drawdown. You usually pay their fees, but they act for the lender, not for you.</p>',
        '<ul><li>Before the loan: reviews your cost plan, programme, building contract, contractor, insurances and warranty, and the planning and building regulations approvals.</li><li>During the build: visits the site, confirms the value of work done and recommends how much to release.</li><li>Throughout: reports delays, cost overruns and changes to the design.</li></ul>',
        '<p>Building regulations approval is separate from planning permission, and GOV.UK says you might need both. Higher-risk buildings (at least 18 metres or 7 storeys, with 2 or more homes) need Building Safety Regulator approval before work starts, which lenders will check.</p>',
      ],
    },
    {
      id: 'rolled-up-interest', h2: 'How does rolled-up interest work?', toc: 'Rolled-up interest',
      body: [
        '<p>Instead of paying interest monthly, it is added to the loan and repaid in one go when you sell or refinance. That helps cash flow during the build, when the scheme has no income, but interest is then charged on interest.</p>',
        '<p>For example, at an assumed rate of 0.75% a month, £300,000 drawn on day one adds £2,250 of interest in the first month. The next month\'s interest is charged on £302,250, and after 12 months the balance has grown by about £28,100. Each drawdown adds to the balance in the same way.</p>',
        '<p>Some lenders instead retain interest: they set aside the expected interest from the facility at the start. Either way, it reduces the money available for the build. Some lenders price their loans over Bank Rate, which the Bank of England held at 3.75% on 17 September 2026.</p>',
      ],
    },
    {
      id: 'what-else', h2: 'What else affects how much you can borrow?', toc: 'Other factors',
      body: [
        '<p>Your experience, the strength of the numbers and how you will repay matter as much as the ratios. Lenders typically look at:</p>',
        '<ul><li>your track record and your contractor\'s, and whether the build contract is fixed price</li><li>the profit margin and contingency in your appraisal (see our <a href="/resources/development-appraisal-checklist/">development appraisal checklist</a>)</li><li>evidence for the GDV, and any pre-sales or pre-lets</li><li>the exit: sale of the units, or refinance onto a longer-term mortgage</li><li>fees: arrangement, exit, valuation, monitoring surveyor and legal costs</li><li>personal guarantees from directors, explained in our guide to <a href="/resources/personal-guarantees-explained/">personal guarantees</a></li></ul>',
        '<p>VAT can also tie up cash during the build, even when you reclaim it. Our guide to <a href="/resources/vat-on-property-development/">VAT on property development</a> covers the rates. If you or close family will live in the finished property, the loan may be regulated by the FCA. Finance is subject to the lender\'s approval, and your property may be repossessed if you do not repay.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is a good LTGDV for development finance?', a: 'There is no single figure. Each lender sets its own limit by project type, location and your experience, and also applies a loan to cost limit. A lower LTGDV usually means a cheaper loan but more of your own money in the scheme.' },
    { q: 'Is LTGDV calculated on the gross or net loan?', a: 'Usually on the gross loan, which includes rolled-up interest and the lender\'s fees. That means the money paid out for the site and build is lower than the headline LTGDV suggests. Check each offer\'s definitions.' },
    { q: 'Who pays the monitoring surveyor?', a: 'The borrower usually pays, even though the monitoring surveyor works for the lender. Fees cover the initial report on your costs and programme and each site visit before a drawdown, so include them in your appraisal.' },
    { q: 'Can development finance cover 100% of costs?', a: 'Rarely from a single senior lender, because the loan to cost limit expects your own money in the scheme. Some developers add mezzanine finance or bring in an equity partner to close the gap, at a higher overall cost.' },
    { q: 'What happens if build costs go over budget?', a: 'The lender usually will not increase the facility, so you fund the overrun yourself. A delay can also mean more rolled-up interest and default terms if the loan runs past its end date. A realistic contingency reduces that risk.' },
  ],

  sources: [
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
    ['https://www.gov.uk/planning-permission-england-wales/after-you-apply', 'GOV.UK: Planning permission, after you apply'],
    ['https://www.gov.uk/building-regulations-approval', 'GOV.UK: Building regulations approval'],
    ['https://www.gov.uk/guidance/viability', 'GOV.UK: Planning practice guidance on viability (GDV and costs)'],
    ['https://www.gov.uk/guidance/buildings-and-construction-vat-notice-708', 'HMRC VAT Notice 708: Buildings and construction'],
    ['https://handbook.fca.org.uk/handbook/PERG/4/4.html', 'FCA Handbook PERG 4.4: What is a regulated mortgage contract?'],
  ],

  related: [
    '/resources/development-appraisal-checklist/',
    '/resources/vat-on-property-development/',
    '/resources/bridging-loan-exit-strategy/',
    '/resources/personal-guarantees-explained/',
  ],
};
