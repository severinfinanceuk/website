// Guide: /resources/buying-property-at-auction/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK (SDLT pages, higher rates guidance, corporate bodies guidance, HM Land Registry)
// and the FCA Handbook (PERG 4.4) on 13 October 2026. Auction terms (10% deposit, 28 days) are usual
// market practice, not law: phrased as "typically" with a pointer to each lot's legal pack.
// Scope: buying at auction and funding it in time. Exit planning lives in bridging-loan-exit-strategy.js.
export default {
  url: '/resources/buying-property-at-auction/',
  section: 'business-finance',
  title: 'Buying Property at Auction UK | Severin Finance',
  description: 'Buying property at auction: exchange on the hammer, a 10% deposit, completion in about 28 days, the legal pack and funding in time. Free consultation.',
  h1: 'Buying property at auction: deposits, deadlines and funding',
  crumb: 'Buying property at auction',
  summary: 'Exchange on the hammer, a 10% deposit, about 28 days to complete, and how to fund it.',
  topic: 'Buying residential and commercial property at auction in the UK',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/bridging-loans/', label: 'Our bridging loan service',
    boxTitle: 'Bidding at auction soon?', text: 'We arrange bridging loans with lenders before you bid, and our accountants check the numbers and your exit first.',
  },

  hero: {
    answer: 'At a traditional auction, contracts exchange when the hammer falls. You typically pay a 10% deposit on the day and complete about 28 days later, but each lot\'s legal pack sets the exact terms. Miss completion and you can lose your deposit, so read the legal pack and line up cash or a bridging loan before you bid.',
  },

  tldr: [
    'At a traditional auction the sale is <strong>binding when the hammer falls</strong>. There is no cooling-off period.',
    'You typically pay a <strong>10% deposit</strong> on the day and complete in about <strong>28 days</strong>. Check the legal pack.',
    'A standard mortgage is often too slow, so many buyers use cash or a <strong>bridging loan</strong> agreed before the auction.',
    'Stamp Duty Land Tax is due <strong>within 14 days</strong> of completion, with a <strong>5%</strong> surcharge on most additional homes and company purchases.',
    'Buyer\'s fees and the seller\'s costs in the special conditions can add thousands to the price.',
  ],

  sections: [
    {
      id: 'how-it-works', h2: 'How does buying property at auction work?', toc: 'How it works',
      body: [
        '<p>At a traditional auction, the winning bid creates a binding contract on the spot: exchange happens when the hammer falls, and completion follows on a fixed date, typically 28 days later. That leaves little time to arrange a mortgage, which is why our team arranges <a href="/uk/business-finance/bridging-loans/">bridging loans</a> with lenders for auction buyers before they bid, not after.</p>',
        { caption: 'Buying at a traditional auction: the usual timeline', head: ['Stage', 'What typically happens'], rows: [
          ['Before the auction', 'Read the legal pack, view the property, get a survey and agree funding in principle'],
          ['On the day', 'Check the addendum for late changes, then bid up to your limit'],
          ['Hammer falls', 'Contracts exchange. You typically pay a 10% deposit and any buyer\'s fee'],
          ['Exchange to completion', 'Insure the property, finish the lender\'s valuation and legal work'],
          ['Completion', 'Typically 28 days after the auction. The special conditions set the date'],
          ['Within 14 days of completion', 'Stamp Duty Land Tax return and payment to HMRC'],
        ], after: 'Auction terms are set by each auction house and seller, not by law. Always check the legal pack for the lot you want.' },
        '<h3>Modern or conditional auctions</h3>',
        '<p>Some auctions use a different method. The winning bidder typically pays a non-refundable reservation fee and then has longer to exchange and complete than at a traditional auction. The fee is usually on top of the price and does not count towards it. The rules differ from one auction to the next, so read the terms before you register to bid.</p>',
      ],
    },
    {
      id: 'legal-pack', h2: 'What should you check in the legal pack?', toc: 'The legal pack',
      body: [
        '<p>Check everything that could change the value, the cost or your ability to borrow, and ask a solicitor to review the pack before you bid. Lenders and their valuers will look at the same documents, so a problem they find after the hammer falls can delay your loan.</p>',
        '<ul><li><strong>Title register and title plan:</strong> who owns the property, its boundaries and any rights of way. You can get copies from <a href="https://www.gov.uk/get-information-about-property-and-land">HM Land Registry</a>.</li><li><strong>Special conditions of sale:</strong> the deposit, completion date, interest on late completion and any costs you must pay the seller.</li><li><strong>Searches:</strong> local authority, drainage and environmental searches, and their age.</li><li><strong>Leases:</strong> years left, ground rent, service charges and any arrears for a leasehold flat.</li><li><strong>Tenancies:</strong> rent, deposits and notices, if the property is sold with tenants in place.</li><li><strong>Planning and building control:</strong> permissions and completion certificates for past work.</li><li><strong>The addendum:</strong> late changes announced on the day, which form part of the contract.</li></ul>',
        '<p>A short lease, missing building control sign-off or a property with no working kitchen can make some lenders decline. A bridging lender may still lend, but you need to know before you bid.</p>',
      ],
    },
    {
      id: 'costs', h2: 'What does buying at auction cost on top of the price?', toc: 'Extra costs',
      body: [
        '<p>Expect to pay the deposit on the day, then several costs that do not come out of the loan. Most lenders expect the deposit, tax and fees to come from your own money.</p>',
        { caption: 'Costs to budget for when buying at auction', head: ['Cost', 'When it is paid'], rows: [
          ['Deposit (typically 10% of the price)', 'On the day, when contracts exchange'],
          ['Buyer\'s fee or administration charge', 'On the day, set by the auction house'],
          ['Seller\'s costs listed in the special conditions', 'Usually on completion, on top of the price'],
          ['Survey and legal pack review', 'Before the auction, even if you do not win'],
          ['Lender\'s arrangement fee, valuation and legal costs', 'Before or on completion'],
          ['Buildings insurance', 'From exchange, as the risk usually passes to you'],
          ['Stamp Duty Land Tax', 'Within 14 days of completion'],
        ], after: 'You can lose survey and legal costs on lots you do not win, so budget for more than one attempt.' },
      ],
    },
    {
      id: 'funding', h2: 'How do you fund an auction purchase in 28 days?', toc: 'Funding in time',
      body: [
        '<p>Use cash or a short-term loan agreed before the auction, because many standard mortgages cannot complete inside the typical 28 days. Bridging loans are the usual answer: they are secured on the property and repaid when you sell or refinance onto a longer-term mortgage.</p>',
        '<ol><li>Agree the bridge in principle before you bid, using the legal pack and your maximum bid.</li><li>Ask whether the lender can value the property before the auction, so the loan is ready on the day you win.</li><li>Keep the 10% deposit and fees in cash, ready to pay on the day.</li><li>Plan how you will repay the bridge. Our guide to <a href="/resources/bridging-loan-exit-strategy/">bridging loan exit strategies</a> explains what lenders look for.</li></ol>',
        { caption: 'Illustrative example: a £200,000 auction lot', head: ['Item', 'Amount'], rows: [
          ['Hammer price', '£200,000'],
          ['Deposit paid on the day (10%)', '£20,000'],
          ['Bridging loan agreed by the lender (an assumed figure)', '£140,000'],
          ['Balance of the price you fund yourself on completion', '£40,000'],
          ['Stamp Duty Land Tax if you already own a home (higher rates)', '£11,500'],
          ['Your own money for the price and tax (before fees)', '£71,500'],
        ], after: 'Illustrative figures only. The loan a lender offers depends on its valuation, the property, your experience and your exit, not on the hammer price.' },
        '<p>If you or close family will live in the property, a bridging loan secured on it is usually regulated by the FCA, which changes the process and the protections. See our guide to <a href="/resources/regulated-vs-unregulated-bridging/">regulated and unregulated bridging</a>. Finance is always subject to the lender\'s approval, and your property may be repossessed if you do not repay.</p>',
      ],
    },
    {
      id: 'stamp-duty', h2: 'How much stamp duty do you pay on an auction property?', toc: 'Stamp duty',
      body: [
        '<p>The same as on any other purchase: buying at auction does not change the Stamp Duty Land Tax (SDLT) rates. In England and Northern Ireland you send the return and pay within 14 days of completion, and your solicitor usually does this for you.</p>',
        { caption: 'Illustrative SDLT on a £200,000 home (England and Northern Ireland)', head: ['Buyer', 'SDLT'], rows: [
          ['An individual who will own no other home (not a first-time buyer)', '£1,500'],
          ['An individual who already owns a home (5% higher rates)', '£11,500'],
          ['A company buying the home (5% higher rates)', '£11,500'],
        ], after: 'Rates in force on 13 October 2026. A further 2% applies to buyers who are not UK resident. Source: GOV.UK, SDLT residential property rates.' },
        '<ul><li>Companies pay the higher rates on dwellings costing £40,000 or more.</li><li>Some companies buying a home over £500,000 pay 17% on the whole price, unless a relief applies, such as for a property rental business or a property developer.</li><li>If you buy a new main home before selling your old one, you can claim back the higher rates if you sell the old home within 3 years.</li></ul>',
        '<p>Shops, offices and mixed-use lots pay the non-residential rates instead. Our guide to <a href="/resources/stamp-duty-commercial-property/">stamp duty on commercial property</a> sets them out, and <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a> covers buying homes through a company.</p>',
      ],
    },
    {
      id: 'late-completion', h2: 'What happens if you cannot complete on time?', toc: 'Missing completion',
      body: [
        '<p>You are in breach of contract, and you can lose your deposit and owe the seller more. Auction conditions typically let the seller charge interest on the unpaid balance, serve a notice to complete, then keep the deposit, resell the property and claim any shortfall and costs from you.</p>',
        '<p>Most delays come from funding that was not ready: a valuation below the hammer price, a legal issue found late, or a lender that cannot meet the date. If you think completion is at risk, tell your solicitor and lender at once, as a short extension agreed with the seller usually costs less than a default.</p>',
        '<p>Our accountants also look at what happens after completion: the tax on rent or a resale, and whether to buy personally or through a company. Our <a href="/uk/accounting/landlord-accountant/">landlord accountants</a> can set this up before you bid.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How much deposit do you need to buy at auction?', a: 'At a traditional auction you typically pay 10% of the price on the day, often with a minimum amount, plus any buyer\'s fee. The special conditions in the legal pack set the exact deposit, so check them before you bid and have the money ready.' },
    { q: 'Can you get a mortgage for an auction property?', a: 'Sometimes, but many standard mortgages take longer than the typical 28 days to complete. Many buyers use a bridging loan agreed before the auction, then refinance onto a buy-to-let or commercial mortgage once the purchase and any works are done.' },
    { q: 'Can you pull out after winning at auction?', a: 'Not at a traditional auction. Contracts exchange when the hammer falls, so pulling out is a breach of contract. You would usually lose your deposit and could be liable for the seller\'s losses if the property sells for less later.' },
    { q: 'Who pays stamp duty on an auction property?', a: 'The buyer. You pay Stamp Duty Land Tax at the normal rates, and the return and payment are due within 14 days of completion. The 5% higher rates usually apply if you already own a home or buy through a company.' },
    { q: 'What is a reservation fee at auction?', a: 'It is a non-refundable fee the winning bidder typically pays at a modern or conditional auction, in return for longer to exchange and complete. It is usually on top of the price, so add it to your budget.' },
  ],

  sources: [
    ['https://www.gov.uk/stamp-duty-land-tax', 'GOV.UK: Stamp Duty Land Tax (14-day deadline)'],
    ['https://www.gov.uk/stamp-duty-land-tax/residential-property-rates', 'GOV.UK: SDLT residential property rates'],
    ['https://www.gov.uk/guidance/stamp-duty-land-tax-buying-an-additional-residential-property', 'GOV.UK: SDLT on additional residential property'],
    ['https://www.gov.uk/guidance/stamp-duty-land-tax-corporate-bodies', 'GOV.UK: SDLT for corporate bodies (17% rate and reliefs)'],
    ['https://www.gov.uk/get-information-about-property-and-land', 'GOV.UK: Get information about property and land (HM Land Registry)'],
    ['https://handbook.fca.org.uk/handbook/PERG/4/4.html', 'FCA Handbook PERG 4.4: What is a regulated mortgage contract?'],
  ],

  related: [
    '/resources/bridging-loan-exit-strategy/',
    '/resources/regulated-vs-unregulated-bridging/',
    '/resources/stamp-duty-commercial-property/',
    '/resources/buy-to-let-limited-company/',
  ],
};
