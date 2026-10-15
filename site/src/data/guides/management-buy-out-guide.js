// Guide: /resources/management-buy-out-guide/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026 against GOV.UK (BADR rates, statutory clearance guidance, clearance on
// purchase of own shares, stamp duty on shares), legislation.gov.uk (CTA 2010 ss1033 to 1044) and the HMRC
// manuals: CG52570 (Newco buy-out), CG14910 (CGT by instalments, s280 TCGA), CG14970 (contingent deferred
// consideration: BADR does not apply again), CTM36840 (TiS clearance), CTM17505 (full payment on purchase),
// ERSM30450 (s431 election within 14 days). Funding is described in general terms only: no rates or LTVs.
// Re-check each April and after each Budget.
export default {
  url: '/resources/management-buy-out-guide/',
  section: 'company-services',
  title: 'Management Buy-Out Guide: Funding and Tax | Severin Finance',
  description: 'How a management buy-out works: funding, Newco or share buy-back, 18% BADR on up to £1m of gains in 2026-27, and HMRC clearances. Free consultation.',
  h1: 'Management buy-outs: how they work, how they are funded and how they are taxed',
  crumb: 'Management buy-out guide',
  summary: 'How managers buy a company: the structure, the funding, the seller\'s tax and the HMRC clearances.',
  topic: 'Management buy-outs (MBOs) of UK private companies',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/succession-planning/', label: 'Our succession planning service',
    boxTitle: 'Selling to your managers?', text: 'We model the price, the funding and the tax for you and your managers, and prepare the HMRC clearance applications.',
  },

  hero: {
    answer: 'In a management buy-out, your managers buy your company, usually through a new company that borrows part of the price and pays the rest to you over time. For sales from 6 April 2026, qualifying gains are taxed at 18% under Business Asset Disposal Relief, up to a £1 million lifetime limit. HMRC clearance is normally sought first.',
  },

  tldr: [
    'Most buy-outs use a <strong>new company (Newco)</strong> owned by the managers, which buys your shares. The other route is the company <strong>buying back</strong> your shares.',
    'Funding is usually a mix of the managers\' own money, bank or specialist debt, and <strong>deferred payments</strong> to you.',
    'Business Asset Disposal Relief: <strong>18%</strong> on qualifying gains from 6 April 2026, up to <strong>£1 million</strong> over your lifetime. Gains above that are taxed at 24%.',
    'Fixed deferred payments are taxed in the year of sale, even though you are paid later. Instalment relief can spread the tax.',
    'HMRC aims to answer clearance applications within <strong>30 days</strong>. Apply before you sign.',
  ],

  sections: [
    {
      id: 'how-it-works', h2: 'How does a management buy-out work?', toc: 'How it works',
      body: [
        '<p>Your managers agree a price with you, raise the money, and buy your shares, normally through a new company they set up for the purpose. Our <a href="/uk/company-services/succession-planning/">succession planning</a> team compares a buy-out with your other exit routes and models the tax for you and for the buyers before anyone signs heads of terms.</p>',
        '<ol><li><strong>Value the company.</strong> Both sides need a defensible price. Our guide on <a href="/resources/how-to-value-a-business/">how to value a business</a> explains the usual methods.</li><li><strong>Agree heads of terms.</strong> Price, how much is paid at completion, what is deferred, and any conditions.</li><li><strong>Raise the funding.</strong> Lenders and investors will review the accounts, forecasts and the management team.</li><li><strong>Apply for HMRC clearances.</strong> Usually before completion, so the tax treatment is known.</li><li><strong>Due diligence and legal documents.</strong> The share purchase agreement, warranties, the loan agreements and the new shareholders\' agreement.</li><li><strong>Completion.</strong> Shares transfer, the first payment is made and stamp duty is paid.</li></ol>',
        '<p>You will need your own solicitor and the managers need theirs, because your interests differ on price, warranties and deferred payments.</p>',
      ],
    },
    {
      id: 'funding', h2: 'How is a management buy-out funded?', toc: 'Funding',
      body: [
        '<p>Usually from several sources at once, because few management teams can pay the full price from savings. The mix decides how much you receive on day one and how much risk you keep.</p>',
        { caption: 'Common sources of funding in a buy-out', head: ['Source', 'How it works', 'Points to watch'], rows: [
          ['Managers\' own money', 'Savings or personal borrowing invested in Newco shares', 'Shows commitment. Lenders usually expect some'],
          ['Bank or specialist lending', 'Newco borrows, secured on the trading company\'s assets and cash flow', 'Repaid from future profits. Personal guarantees may be asked for'],
          ['Deferred consideration', 'You are paid part of the price in instalments after completion', 'You carry the risk if the business struggles. Taxed up front unless relief applies'],
          ['Vendor loan notes', 'Newco owes you part of the price as a formal debt', 'Ranks behind the bank. Interest may be paid'],
          ['Private equity or other investors', 'An investor buys shares in Newco alongside the managers', 'The investor takes a stake and board rights'],
        ], after: 'General description only. Each lender or investor sets its own terms.' },
        '<p>Managers asked to guarantee Newco\'s borrowing should take their own legal advice before they sign. We do not arrange finance, but we can build the forecasts and management accounts that banks and investors ask to see, and advise on the tax of each part of the deal.</p>',
      ],
    },
    {
      id: 'structure', h2: 'Should the managers use a Newco or a company buy-back?', toc: 'Newco or buy-back',
      body: [
        '<p>A Newco suits most buy-outs, because it can borrow and pay you over time. A buy-back by the company itself suits smaller deals where the company has enough cash and reserves.</p>',
        { caption: 'Newco purchase compared with a company buy-back', head: ['Point', 'Newco buys your shares', 'Company buys back your shares'], rows: [
          ['Who pays you', 'Newco, from its borrowing and investors', 'The company, from its own reserves'],
          ['Paying over time', 'Possible, as deferred consideration or loan notes', 'Shares must be paid for in full when bought, so staged buy-backs need separate contracts'],
          ['How your proceeds are taxed', 'Normally capital gains tax', 'Capital gains tax only if the conditions below are met. Otherwise taxed as a dividend'],
          ['HMRC clearance', 'Transactions in securities, and share exchange for managers swapping shares', 'Purchase of own shares, and often transactions in securities'],
          ['Stamp duty', '0.5% paid by Newco', '0.5% on the shares bought back'],
        ], after: 'Sources: HMRC Capital Gains Manual CG52570 and Company Taxation Manual CTM17505; GOV.UK, Tax when you buy shares. Checked 13 October 2026.' },
        '<p>Managers who already hold shares often swap them for Newco shares. That share exchange is normally not a disposal for capital gains tax, if it is for genuine commercial reasons.</p>',
      ],
    },
    {
      id: 'seller-tax', h2: 'What tax does the seller pay on a management buy-out?', toc: 'Seller\'s tax',
      body: [
        '<p>Usually capital gains tax, at 18% on gains that qualify for Business Asset Disposal Relief (BADR) and 24% on the rest, for 2026-27 sales by a higher rate taxpayer. You qualify for BADR if you held at least 5% of the shares and votes, worked for the company and it was a trading company, for the 2 years before the sale. Our <a href="/resources/business-asset-disposal-relief/">Business Asset Disposal Relief guide</a> covers the conditions in full.</p>',
        { caption: 'Illustrative example: a £2 million buy-out in 2026-27, with £800,000 deferred', head: ['Step', 'Amount'], rows: [
          ['Price: £1,200,000 at completion plus £800,000 over 4 years', '£2,000,000'],
          ['Gain (shares cost a nominal amount)', '£2,000,000'],
          ['First £1,000,000 at 18% with BADR', '£180,000'],
          ['Remaining £997,000 at 24% (after the £3,000 annual exempt amount)', '£239,280'],
          ['Total capital gains tax for 2026-27', '£419,280'],
        ], after: 'Illustrative figures only. Assumes a higher rate taxpayer with the full £1 million BADR limit unused and fixed deferred payments.' },
        '<h3>How deferred payments are taxed</h3>',
        '<p>Fixed deferred payments count as part of the price in the year of sale, so in the example the whole £419,280 is due by 31 January 2028, before most of the money arrives. If the payments run over more than 18 months, you can ask HMRC to let you pay the tax in instalments as you are paid, for up to 8 years.</p>',
        '<p>An earn-out, where later payments depend on future profits, works differently. The right to those payments is valued and taxed at the sale, and each later payment can create a further gain on which BADR does not apply again. Loan notes can also change when the gain is taxed and whether BADR is available, so model them before you agree the terms.</p>',
      ],
    },
    {
      id: 'buy-back', h2: 'When is a share buy-back taxed as a capital gain?', toc: 'Buy-back conditions',
      body: [
        '<p>When the company is an unquoted trading company and every condition in the Corporation Tax Act 2010 is met. If one fails, the payment above what you originally paid in for the shares is taxed as a dividend, at up to 39.35% instead of 18% or 24%.</p>',
        { caption: 'Conditions for capital treatment on a company buy-back', head: ['Condition', 'What it means'], rows: [
          ['Purpose', 'Made wholly or mainly to benefit the trade, not to avoid tax'],
          ['Residence', 'You are UK resident in the tax year of the purchase'],
          ['Ownership', 'You owned the shares for 5 years (3 years if inherited)'],
          ['Substantial reduction', 'If you keep shares, your interest falls to no more than 75% of what it was'],
          ['Not connected', 'Afterwards you hold no more than 30% of the company or group'],
        ], after: 'Source: Corporation Tax Act 2010, sections 1033 to 1043, on legislation.gov.uk. Checked 13 October 2026.' },
        '<p>The company also needs enough distributable reserves, and company law sets its own procedure for approving the purchase and filing the returns at Companies House.</p>',
      ],
    },
    {
      id: 'clearances', h2: 'Which HMRC clearances does a buy-out need?', toc: 'HMRC clearances',
      body: [
        '<p>Clearance is optional, but on a buy-out it is standard practice, because it confirms in advance that HMRC will not tax your proceeds as income. One application can cover several clearances.</p>',
        { caption: 'Clearances commonly used on management buy-outs', head: ['Clearance', 'Legislation', 'What it confirms'], rows: [
          ['Purchase of own shares', 'Corporation Tax Act 2010, section 1044', 'A buy-back meets the conditions for capital treatment'],
          ['Transactions in securities', 'Income Tax Act 2007, section 701', 'HMRC will not counteract an income tax advantage, for example where you are paid from company profits'],
          ['Share exchange', 'Taxation of Chargeable Gains Act 1992, section 138', 'Managers swapping shares into Newco get no-gain treatment'],
        ], after: 'Source: GOV.UK, Apply for statutory clearance for a transaction. HMRC aims to reply within 30 days. Checked 13 October 2026.' },
        '<p>Applications go to HMRC\'s Clearance and Counteraction Team, by email to reconstructions@hmrc.gov.uk. Explain the commercial reasons for the deal, the shareholdings before and after, and how each payment is funded. Transactions in securities rules are most likely to bite where you keep a stake, stay involved, or are paid out of cash the company already holds.</p>',
      ],
    },
    {
      id: 'managers', h2: 'What do the managers need to watch for?', toc: 'For the managers',
      body: [
        '<p>Mainly the price they pay for their shares and the debt they take on. Shares bought below market value because of their jobs can be taxed as employment income. Managers and the company commonly sign a joint section 431 election within 14 days of the shares being acquired, which taxes any discount now so that later growth falls under capital gains tax.</p>',
        '<ul><li>Their own 2-year clock for BADR starts when they hold at least 5% of Newco and work for the group.</li><li>Newco\'s borrowing must be serviced from the trading company\'s profits, so build a cash flow forecast first. Our guide to <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a> shows how.</li><li>If the managers would rather not buy outright, an <a href="/resources/employee-ownership-trusts/">employee ownership trust</a> is the main alternative.</li></ul>',
      ],
    },
  ],

  faqs: [
    { q: 'How long does a management buy-out take?', a: 'It depends mainly on funding and due diligence. Allow time for a valuation, raising the money, legal documents and HMRC clearance, which HMRC aims to answer within 30 days. Starting tax planning 2 years ahead protects BADR.' },
    { q: 'Can I get BADR on a management buy-out?', a: 'Yes, if you meet the conditions for the 2 years before the sale: at least 5% of the shares and votes, working for the company, and a trading company. Qualifying gains are taxed at 18% from 6 April 2026, up to £1 million.' },
    { q: 'Is deferred consideration taxed when I receive it?', a: 'Fixed deferred payments are taxed in the year of the sale, not when received. If they are paid over more than 18 months, you can ask HMRC to accept the tax in instalments. Earn-outs are taxed differently.' },
    { q: 'Do I need HMRC clearance for an MBO?', a: 'It is not compulsory, but advisers almost always apply. Clearance under section 701 of the Income Tax Act 2007 confirms the transactions in securities rules will not turn your capital gain into income. Buy-backs use section 1044 of the Corporation Tax Act 2010.' },
    { q: 'Who pays stamp duty on a management buy-out?', a: 'The buyer. Stamp duty on shares is 0.5% of the price for transfers over £1,000, so Newco pays it on the shares it buys. On a buy-back, the company pays it on the shares it purchases.' },
  ],

  sources: [
    ['https://www.gov.uk/business-asset-disposal-relief', 'GOV.UK: Business Asset Disposal Relief'],
    ['https://www.gov.uk/guidance/apply-for-statutory-clearance-for-a-transaction', 'GOV.UK: Apply for statutory clearance for a transaction'],
    ['https://www.gov.uk/guidance/clearance-applications-and-exempt-distribution-when-a-company-purchases-its-own-shares', 'GOV.UK: Clearance when a company buys its own shares'],
    ['https://www.legislation.gov.uk/ukpga/2010/4/part/23/chapter/3', 'Corporation Tax Act 2010: purchase of own shares'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg52570', 'HMRC Capital Gains Manual: share exchange and buy-outs (CG52570)'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg14910', 'HMRC Capital Gains Manual: paying tax by instalments (CG14910)'],
    ['https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm36840', 'HMRC Company Taxation Manual: transactions in securities clearance'],
    ['https://www.gov.uk/tax-buy-shares', 'GOV.UK: Tax when you buy shares'],
  ],

  related: [
    '/resources/business-asset-disposal-relief/',
    '/resources/employee-ownership-trusts/',
    '/resources/how-to-value-a-business/',
    '/resources/cash-flow-forecasting/',
  ],
};
