// Guide: /resources/commercial-mortgage-deposit/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026: GOV.UK SDLT non-residential rates and 14-day deadline, HM Land Registry
// Scale 1 fees (in force since 9 December 2024), VAT Notice 742A (option to tax) and FCA Handbook PERG 4.4.
// No deposit or LTV figures are given: lenders set their own and no official source publishes a standard range.
// Scope: the deposit and costs on top. SDLT detail is in stamp-duty-commercial-property.js; ownership structures
// are in buying-property-limited-company.js.
export default {
  url: '/resources/commercial-mortgage-deposit/',
  section: 'business-finance',
  title: 'Commercial Mortgage Deposit: How Much? | Severin Finance',
  description: 'What sets a commercial mortgage deposit: owner-occupied or let, sector, accounts, other security, plus SDLT at 2% above £150,000. Free consultation.',
  h1: 'How much deposit do you need for a commercial mortgage?',
  crumb: 'Commercial mortgage deposits',
  summary: 'What sets the deposit, how other security can help, and the costs to budget for on top.',
  topic: 'Deposits for commercial mortgages',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/commercial-mortgages/', label: 'Our commercial mortgage service',
    boxTitle: 'Planning a purchase?', text: 'We arrange commercial mortgages with lenders, prepare the figures they ask for and build every purchase cost into your plan.',
  },

  hero: {
    answer: 'There is no single figure. Commercial lenders set their own limits and usually expect a larger deposit than a home loan. Yours depends on whether you will trade from the property or let it, the type of building, your accounts and any extra security. Budget separately for stamp duty, which starts at 2% above £150,000, plus VAT and fees.',
  },

  tldr: [
    'Lenders lend a share of the <strong>lower of the price and the valuation</strong>. The rest is your deposit.',
    'Owner-occupied loans turn on your <strong>trading profits</strong>; investment loans on the <strong>rent, lease and tenant</strong>.',
    'Specialist buildings, short trading records and weak accounts usually mean a <strong>bigger deposit</strong>.',
    'A charge over <strong>another property</strong> can sometimes replace part of the cash deposit.',
    'On top: SDLT (<strong>0%, 2%, 5%</strong>), any VAT at 20%, valuation, legal and lender fees, and Land Registry fees.',
  ],

  sections: [
    {
      id: 'how-much', h2: 'How much deposit does a commercial mortgage need?', toc: 'How much?',
      body: [
        '<p>It depends on the lender, the property and your business, and there is no official standard figure. Each lender sets its own maximum loan to value (LTV), so the deposit is whatever is left after the loan. We <a href="/uk/business-finance/commercial-mortgages/">arrange commercial mortgages</a> with lenders and can tell you what to expect for your case after a free consultation. Finance is subject to status and lender approval.</p>',
        '<p>Two points catch buyers out. First, lenders usually lend against the lower of the price and their own valuation. If the valuer puts the building at less than you agreed to pay, the gap comes out of your pocket, not the lender\'s. Second, the deposit is only part of the cash you need. Stamp duty, any VAT and fees normally have to come from your own funds as well.</p>',
        { caption: 'How the deposit works (illustrative)', head: ['Item', 'Amount'], rows: [
          ['Agreed price', '£500,000'],
          ['Lender\'s valuation', '£480,000'],
          ['Loan offered, if the lender agrees to £320,000 on that valuation', '£320,000'],
          ['Deposit you need (price minus loan)', '£180,000'],
        ], after: 'Illustrative figures only, not a typical offer. Each lender sets its own limit.' },
      ],
    },
    {
      id: 'owner-vs-investment', h2: 'Is the deposit different for owner-occupied and investment property?', toc: 'Owner or investor',
      body: [
        '<p>Often, yes, because the lender is relying on a different source of repayment. On an owner-occupied loan, the business that trades from the building pays the mortgage, so the lender looks at your profits. On an investment loan, the rent pays it, so the lender looks at the tenant and the lease.</p>',
        { caption: 'What drives the deposit on each type', head: ['Type', 'What the lender relies on', 'What can push the deposit up'], rows: [
          ['Owner-occupied', 'Your trading profits and accounts', 'Falling profits, losses, short trading record, existing debts'],
          ['Investment', 'Rent, lease length and tenant strength', 'Short lease, break clauses soon, a weak or new tenant, empty units'],
          ['Semi-commercial (shop with flats)', 'The commercial and residential rent together', 'A large share of the income from one weak tenant'],
        ], after: 'General points. Each lender sets its own criteria.' },
        '<p>If you or close family will live in a flat in the building, and you borrow as an individual, the loan may be a regulated mortgage contract. That brings FCA rules into play and needs a lender with the right permissions. Our guide to <a href="/resources/regulated-vs-unregulated-bridging/">regulated and unregulated loans</a> explains the 40% dwelling test.</p>',
      ],
    },
    {
      id: 'what-changes-it', h2: 'What else makes a lender ask for a bigger or smaller deposit?', toc: 'What changes it',
      body: [
        '<p>Anything that makes the property harder to sell or the income less certain. Lenders think about what happens if they have to sell the building to recover the loan, so they lend less against property with fewer likely buyers.</p>',
        '<ul><li><strong>Sector and building type:</strong> an office, shop or industrial unit suits many businesses. A pub, hotel, care home or petrol station is a trading business as much as a building, and its value depends on how it trades.</li><li><strong>Trading history:</strong> two or more years of filed accounts give a lender more to assess than projections. A new business may need a bigger deposit or extra security.</li><li><strong>Current figures:</strong> up-to-date management accounts show how this year is going. Our guide to <a href="/resources/management-accounts-explained/">management accounts</a> covers what to include.</li><li><strong>Credit history:</strong> missed payments, county court judgments or arrears on the business or the directors.</li><li><strong>Location and condition:</strong> a building in poor repair, or in an area with little demand, values lower.</li><li><strong>Who borrows:</strong> a limited company usually means personal guarantees from the directors.</li></ul>',
      ],
    },
    {
      id: 'other-security', h2: 'Can you use other security instead of a bigger cash deposit?', toc: 'Other security',
      body: [
        '<p>Sometimes. A lender may accept a charge over another property you own, so it has two buildings to rely on instead of one. That can reduce the cash you need, but it puts the second property at risk too if the loan is not repaid.</p>',
        '<ul><li><strong>A charge over another commercial or investment property:</strong> the lender looks at the equity in it after any existing mortgage.</li><li><strong>A charge over your home:</strong> this raises the stakes, and if you borrow personally it can make the loan a regulated mortgage contract, with FCA rules and a regulated lender needed. Take independent legal advice first.</li><li><strong>Personal guarantees:</strong> these do not replace a deposit, but lenders usually want them from directors. See our guide to <a href="/resources/personal-guarantees-explained/">personal guarantees</a>.</li></ul>',
        '<p>If you need to complete before a term mortgage is ready, for example at auction, a <a href="/uk/business-finance/bridging-loans/">bridging loan</a> can fill the gap. You then need a firm plan to refinance, which our guide to <a href="/resources/bridging-loan-exit-strategy/">bridging exit strategies</a> covers. Your property may be repossessed if you do not keep up repayments on a loan secured on it.</p>',
      ],
    },
    {
      id: 'costs-on-top', h2: 'What costs do you pay on top of the deposit?', toc: 'Costs on top',
      body: [
        '<p>Stamp duty, any VAT on the price, and professional fees. Lenders usually expect all of these to come from your own funds.</p>',
        { caption: 'Costs to budget for on a commercial purchase', head: ['Cost', 'What to expect'], rows: [
          ['Stamp Duty Land Tax (England and Northern Ireland)', '0% to £150,000, 2% to £250,000, 5% above. A £500,000 freehold costs £14,500. Return and payment due within 14 days of completion'],
          ['VAT on the price', '20% if the seller has opted to tax the building. SDLT is worked out on the price including VAT'],
          ['Valuation', 'The lender instructs it and you pay. The fee depends on the property and the lender'],
          ['Lender arrangement fee', 'Set by the lender, often added to the loan or paid on completion'],
          ['Legal fees', 'Your solicitor, and usually the lender\'s solicitor too'],
          ['HM Land Registry fee (England and Wales)', 'Scale 1: £150 online for a whole title worth £200,001 to £500,000; £295 from £500,001 to £1 million'],
        ], after: 'Sources: GOV.UK SDLT non-residential rates; HM Land Registry fees in force since 9 December 2024; VAT Notice 742A. Checked 13 October 2026.' },
        '<p>VAT is the cost most often missed. A VAT-registered buyer can usually recover it, but the cash is needed at completion and repaid later through a VAT return. A let building sold with its tenants can sometimes be a transfer of a going concern with no VAT, but the conditions are strict. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> check this before you exchange. For leases, mixed use, and the taxes used in Scotland and Wales, read our guide to <a href="/resources/stamp-duty-commercial-property/">stamp duty on commercial property</a>.</p>',
      ],
    },
    {
      id: 'source-of-funds', h2: 'Where can the deposit come from?', toc: 'Source of funds',
      body: [
        '<p>From any source you can evidence. Lenders and solicitors must check where the money comes from under the money laundering rules, so keep a clear paper trail. Common sources are:</p>',
        '<ul><li>company cash built up from retained profits</li><li>money you lend to your company, recorded as a director\'s loan</li><li>savings, or proceeds from selling another property or investment</li><li>money from a business partner or investor, documented in a shareholder or loan agreement</li></ul>',
        '<p>Taking money out of a company to fund a personal purchase has tax consequences, and so does the choice of which company buys. Our guide to <a href="/resources/buying-property-limited-company/">buying property through a limited company</a> compares the structures.</p>',
      ],
    },
    {
      id: 'improve-your-position', h2: 'How can you improve your chances before you apply?', toc: 'Before you apply',
      body: [
        '<p>Give the lender a clear, current picture and fewer unknowns. Most delays and reduced offers come from missing information or a valuation surprise.</p>',
        '<ol><li>Get your latest accounts filed and your management accounts up to date.</li><li>Check your business and personal credit files and deal with any errors.</li><li>For an investment purchase, collect the lease, rent schedule and tenant details.</li><li>Ask the selling agent for any VAT position and service charge details early.</li><li>Build a full cost budget: deposit, SDLT, VAT, fees and a buffer for a low valuation.</li><li>Have proof of the deposit ready, with statements showing where it came from.</li></ol>',
      ],
    },
  ],

  faqs: [
    { q: 'Is a commercial mortgage deposit bigger than for a house?', a: 'Usually, yes. Commercial lenders see more risk in business property, so they tend to lend a smaller share of the value than on a home. There is no standard figure: the deposit depends on the lender, the building and your accounts.' },
    { q: 'Can I get a commercial mortgage with no deposit?', a: 'Rarely with cash alone. Some lenders may accept a charge over another property you own instead of part of the cash deposit, which puts that property at risk too. You still need funds for stamp duty, VAT and fees.' },
    { q: 'Do lenders lend on the price or the valuation?', a: 'Usually on the lower of the two. If the lender\'s valuer values the property below the price you agreed, the loan is based on the lower figure and you fund the difference yourself or renegotiate the price.' },
    { q: 'Can I add stamp duty to a commercial mortgage?', a: 'Lenders usually expect stamp duty to come from your own funds, alongside the deposit. On a £500,000 freehold in England or Northern Ireland, SDLT is £14,500, due within 14 days of completion.' },
    { q: 'Does a new business need a bigger deposit for its premises?', a: 'Often. Without filed accounts the lender has only projections to rely on, so it may ask for a larger deposit, extra security or personal guarantees. Some lenders consider newer businesses with a strong plan and experienced owners.' },
  ],

  sources: [
    ['https://www.gov.uk/stamp-duty-land-tax/nonresidential-and-mixed-rates', 'GOV.UK: SDLT on non-residential and mixed-use property'],
    ['https://www.gov.uk/stamp-duty-land-tax', 'GOV.UK: Stamp Duty Land Tax (14-day deadline)'],
    ['https://www.gov.uk/guidance/opting-to-tax-land-and-buildings-notice-742a', 'GOV.UK: VAT Notice 742A, opting to tax land and buildings'],
    ['https://www.gov.uk/guidance/hm-land-registry-registration-services-fees', 'GOV.UK: HM Land Registry registration fees'],
    ['https://handbook.fca.org.uk/handbook/PERG/4/4.html', 'FCA Handbook PERG 4.4: What is a regulated mortgage contract?'],
  ],

  related: [
    '/resources/stamp-duty-commercial-property/',
    '/resources/buying-property-limited-company/',
    '/resources/personal-guarantees-explained/',
    '/resources/bridging-loan-exit-strategy/',
  ],
};
