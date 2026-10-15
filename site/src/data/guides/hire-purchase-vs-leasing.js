// Guide: /resources/hire-purchase-vs-leasing/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK (VAT Notice 700 s8.4, VAT Notice 700/64 s4, capital allowances pages, cash basis),
// the HMRC VAT Finance Manual (VATFIN3120, VATFIN3125), Capital Allowances Manual (CA23310, CA23830, CA23195A/B)
// and Business Leasing Manual (BLM10010, BLM50005) on 13 October 2026 (sources below).
// AIA £1m; full expensing and 50% FYA companies only; 40% FYA from 1 January 2026 (companies and income tax payers, new main rate, not cars).
// FRS 102 2024 amendments: lessees bring most leases on balance sheet for periods beginning on or after 1 January 2026; FRS 105 unchanged.
// Allowances are covered in depth by capital-allowances-explained and full-expensing: link, do not repeat.
export default {
  url: '/resources/hire-purchase-vs-leasing/',
  section: 'tax',
  title: 'Hire Purchase vs Leasing for Business | Severin Finance',
  description: 'Hire purchase vs leasing: ownership, VAT up front or on each rental, who claims capital allowances, and the 2026 balance sheet changes. Free consultation.',
  h1: 'Hire purchase vs leasing: which is better for business equipment?',
  crumb: 'Hire purchase vs leasing',
  summary: 'Own it with hire purchase, or use it with a lease: ownership, VAT, tax relief and accounts compared.',
  topic: 'Hire purchase compared with finance leases, operating leases and contract hire',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/corporation-tax-accountant/', label: 'Our corporation tax service',
    boxTitle: 'Buy or lease?', text: 'We check the VAT, capital allowances and accounts treatment of each option before you sign, then claim the relief on your return.',
  },

  hero: {
    answer: 'With hire purchase you own the asset after the final payment, claim capital allowances once you start using it, and normally pay the VAT with the first instalment. With a lease the finance company keeps ownership, VAT is added to each rental, and you usually deduct the rentals as a business expense instead of claiming allowances.',
  },

  tldr: [
    '<strong>Hire purchase:</strong> you own the asset at the end. VAT on the full cash price is normally due with the <strong>first instalment</strong>.',
    '<strong>Leases</strong> (finance lease, operating lease, contract hire): the finance company owns the asset, and VAT is charged on <strong>each rental</strong>.',
    'Under hire purchase you can claim the <strong>£1 million AIA</strong>, or <strong>full expensing</strong> if you are a company buying new kit, but not on the interest.',
    'On an ordinary lease the <strong>lessor</strong> claims the allowances and you deduct the rentals.',
    'From accounting periods starting on or after <strong>1 January 2026</strong>, FRS 102 puts most leases on the lessee\'s balance sheet.',
  ],

  sections: [
    {
      id: 'difference', h2: 'What is the difference between hire purchase and leasing?', toc: 'The difference',
      body: [
        '<p>Ownership. Hire purchase is a way of buying an asset in instalments, so it becomes yours at the end. A lease is a way of renting it, so the finance company keeps ownership and you pay to use it. Our <a href="/uk/tax/corporation-tax-accountant/">corporation tax accountants</a> check the VAT, tax relief and accounts treatment of the agreement you have been offered before you sign. We are accountants, not lenders or brokers, so we do not arrange the agreement itself.</p>',
        { caption: 'The main types of agreement compared', head: ['Type', 'Who owns it', 'At the end', 'Usually suits'], rows: [
          ['Hire purchase', 'You, after the final payment', 'You keep it, often after a small option-to-purchase fee', 'Assets you will keep for most of their life'],
          ['Finance lease', 'The finance company', 'Set by the agreement: often a further rental period, or a sale with a share of the proceeds to you', 'Assets you want to use for their whole life without owning'],
          ['Operating lease', 'The finance company', 'You hand it back; the lender takes the risk on its resale value', 'Equipment that dates quickly or that you replace often'],
          ['Contract hire', 'The finance company', 'You hand the vehicle back, subject to mileage and condition terms', 'Cars and vans, often with maintenance included'],
        ], after: 'General features only. Each finance company sets its own terms, so read the agreement you are offered.' },
      ],
    },
    {
      id: 'how-each-works', h2: 'How does each type of agreement work?', toc: 'How each works',
      body: [
        '<h3>Hire purchase</h3>',
        '<p>You usually pay a deposit, then fixed monthly instalments over an agreed term. The finance company owns the asset until you make the last payment, and ownership then passes to you. Some agreements end with a larger final payment, known as a balloon, to keep the monthly cost down.</p>',
        '<h3>Finance lease</h3>',
        '<p>The rentals cover most or all of the cost of the asset over the main term. You are responsible for insuring and maintaining it. You do not buy it at the end; instead the agreement may let you keep using it for a small further rental, or sell it to a third party and receive most of the proceeds.</p>',
        '<h3>Operating lease and contract hire</h3>',
        '<p>An operating lease covers only part of the asset\'s working life, so the rentals can be lower. The finance company keeps the risk of what the asset is worth when it comes back. Contract hire is the vehicle version: you agree a term and annual mileage, often with maintenance included, and pay extra for excess mileage or damage beyond fair wear and tear.</p>',
      ],
    },
    {
      id: 'vat', h2: 'How is VAT charged on hire purchase and leasing?', toc: 'VAT',
      body: [
        '<p>HMRC treats hire purchase as a supply of goods, because ownership is meant to pass to you, so VAT on the full cash price is normally payable with the first instalment. A lease is a supply of services, because ownership never passes, so VAT is added to each rental as it falls due.</p>',
        { caption: 'VAT on hire purchase and leases', head: ['Item', 'Hire purchase', 'Lease'], rows: [
          ['VAT on the asset', 'On the full cash price, normally with the first instalment', 'On each rental'],
          ['Finance charge', 'Exempt, if a separate charge for credit is disclosed to you', 'Part of the rental, so VAT applies'],
          ['Option or title fees', 'Relate to the goods, so not covered by the finance exemption', 'Not applicable'],
          ['Car with any private use', 'VAT on buying a car is usually blocked', '50% of the VAT on rentals is usually blocked'],
          ['Vans and equipment', 'Reclaim under the normal rules', 'Reclaim under the normal rules'],
        ], after: 'Sources: VAT Notice 700, section 8.4; HMRC VAT Finance Manual VATFIN3120; VAT Notice 700/64, section 4. Checked 13 October 2026.' },
        '<p>If you are VAT registered, the VAT paid up front on hire purchase can usually be reclaimed on your next return, but you still need the cash in the meantime, so ask the lender how the VAT is collected. If you are not VAT registered, the VAT is a real cost either way, and a lease spreads it over the term. On a leased car, maintenance that is supplied and shown separately on the invoice is not caught by the 50% block. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> can check the treatment of a specific agreement.</p>',
      ],
    },
    {
      id: 'tax-relief', h2: 'Who claims capital allowances under hire purchase and a lease?', toc: 'Tax relief',
      body: [
        '<p>Under hire purchase, you do. The law treats you as the owner, so once you start using the asset you can claim capital allowances on all the payments you will make under the contract, but not on the interest. The interest is a separate business expense.</p>',
        '<ul><li><strong>Annual Investment Allowance:</strong> 100% on up to £1 million of qualifying plant and machinery a year, for any business, new or second-hand.</li><li><strong>Full expensing:</strong> companies only, 100% on new and unused main rate plant and machinery, with no cap. Special rate assets get a 50% first-year allowance.</li><li><strong>40% first-year allowance:</strong> new and unused main rate assets bought on or after 1 January 2026, for companies and unincorporated businesses. Cars are excluded.</li></ul>',
        '<p>Under an ordinary lease, the finance company owns the asset and claims the allowances, and you deduct the rentals from your profits instead. The exception is a long funding lease: broadly a lease of more than 5 years (or more than 7 years for some finance leases) that works as a way of financing the asset. The lessee can then claim the allowances, but only if it treats the lease that way on its tax return for the first period.</p>',
        '<p>Sole traders using the cash basis, now the standard method for the self-employed, usually deduct equipment as an expense rather than claiming capital allowances; cars are different. For the allowances in depth, see <a href="/resources/capital-allowances-explained/">capital allowances explained</a> and <a href="/resources/full-expensing/">full expensing</a>.</p>',
      ],
    },
    {
      id: 'balance-sheet', h2: 'How do hire purchase and leases show on the balance sheet?', toc: 'Balance sheet',
      body: [
        '<p>Hire purchase assets have always been on the balance sheet: the asset is shown at cost and depreciated, and the amount still owed is shown as a liability. Leases used to be split, with finance leases on the balance sheet and operating leases kept off it, but that is changing.</p>',
        '<p>Under the 2024 amendments to FRS 102, which apply to accounting periods beginning on or after 1 January 2026, lessees no longer split leases into finance and operating. Most leases now go on the balance sheet as a "right-of-use" asset and a lease liability, and the rental charge in the profit and loss account is replaced by depreciation and interest. Short-term and low-value leases can stay off the balance sheet.</p>',
        '<ul><li><strong>Micro-entities</strong> using FRS 105 are not affected: that standard was not changed.</li><li><strong>Tax:</strong> HMRC says the same basic principles still apply to a lessee\'s tax, and special rules spread any adjustment that arises when a company first adopts the new standard.</li><li><strong>Loan covenants:</strong> more assets and debt on the balance sheet can change gearing ratios, so check any covenants with your bank.</li></ul>',
      ],
    },
    {
      id: 'which-is-better', h2: 'Is hire purchase or leasing better for your business?', toc: 'Which is better',
      body: [
        '<p>Hire purchase usually suits assets you will keep for a long time and want to claim allowances on. Leasing usually suits assets you replace often, or where you want fixed costs and someone else to take the resale risk.</p>',
        { caption: 'Which option tends to fit (general guide)', head: ['Your situation', 'Often fits better', 'Why'], rows: [
          ['A company buying a new machine it will keep for years', 'Hire purchase', 'Full expensing or the AIA on the whole cost, then you own it'],
          ['Laptops, screens or kit that dates in two or three years', 'Operating lease', 'Hand it back and upgrade; no resale risk'],
          ['A fleet of vans or cars with maintenance', 'Contract hire', 'One fixed monthly cost, including servicing'],
          ['A business that is not VAT registered', 'Often a lease', 'The VAT, which you cannot reclaim, is spread over the rentals'],
          ['A car with private use', 'Often a lease', 'Half the VAT on rentals is usually recoverable; VAT on buying is usually not'],
          ['Second-hand equipment', 'Hire purchase', 'You own it, and the AIA covers used items, unlike full expensing'],
        ], after: 'A general guide only. The right answer depends on your tax position, cash flow and how long you need the asset.' },
      ],
    },
    {
      id: 'before-signing', h2: 'What should you check before signing?', toc: 'Before signing',
      body: [
        '<p>Check the total amount payable, not just the monthly figure, and what happens at the end of the term. These are the points that cause most problems later:</p>',
        '<ul><li><strong>End-of-term terms:</strong> balloon payments, option fees, return conditions and any further rental period.</li><li><strong>Mileage and condition:</strong> on contract hire, the excess mileage rate and what counts as fair wear and tear.</li><li><strong>Ending early:</strong> how settlement is worked out, and whether you can sell or swap the asset.</li><li><strong>Insurance and maintenance:</strong> who pays, and what the agreement requires.</li><li><strong>Security:</strong> the asset can be repossessed if you fall behind, and you may still owe money after it is sold. Finance companies often ask directors for a personal guarantee, so take legal advice before you sign one.</li><li><strong>Timing:</strong> under hire purchase, allowances depend on when you start using the asset, so delivery before your year end can matter.</li></ul>',
        '<p>Build the payments into your <a href="/resources/cash-flow-forecasting/">cash flow forecast</a> before you commit. Before you sign, we can check the VAT and tax relief on the agreement, show how it will look in your accounts, and work out the effect on your corporation tax bill for the year.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can I claim capital allowances on leased equipment?', a: 'Usually not. On an ordinary lease the finance company owns the asset and claims the allowances, and you deduct the rentals as a business expense. The exception is a long funding lease, broadly one of more than 5 to 7 years that works as financing, where the lessee can claim.' },
    { q: 'Do you pay VAT up front on hire purchase?', a: 'Normally, yes. HMRC treats hire purchase as a supply of goods, so VAT on the full cash price is usually payable with the first instalment. If you are VAT registered you can usually reclaim it on your next return. The finance charge is exempt if it is shown separately.' },
    { q: 'Is contract hire the same as leasing?', a: 'Contract hire is a type of operating lease for vehicles. You use a car or van for an agreed term and mileage, often with maintenance included, then hand it back. The finance company owns the vehicle and takes the risk on its resale value.' },
    { q: 'Can a company claim full expensing on hire purchase?', a: 'Yes, if the asset is new and unused main rate plant or machinery and not a car. The company can claim once it starts using the asset, on the payments due under the contract but not the interest. Sole traders can use the £1 million AIA instead.' },
    { q: 'Do leases now have to go on the balance sheet?', a: 'For most companies using FRS 102, yes, for accounting periods beginning on or after 1 January 2026. Lessees show a right-of-use asset and a lease liability, except for short-term and low-value leases. Micro-entities using FRS 105 are not affected.' },
  ],

  sources: [
    ['https://www.gov.uk/hmrc-internal-manuals/vat-finance-manual/vatfin3120', 'HMRC VAT Finance Manual: hire purchase and leasing (VATFIN3120)'],
    ['https://www.gov.uk/guidance/vat-guide-notice-700', 'GOV.UK: VAT Notice 700, section 8.4'],
    ['https://www.gov.uk/guidance/vat-on-motoring-expenses-notice-70064', 'GOV.UK: VAT Notice 700/64 Motoring expenses'],
    ['https://www.gov.uk/capital-allowances/annual-investment-allowance', 'GOV.UK: Annual Investment Allowance and hire purchase'],
    ['https://www.gov.uk/capital-allowances/what-you-can-claim-on', 'GOV.UK: What you can claim capital allowances on'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23195a', 'HMRC manual CA23195A: 40% first-year allowance'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca23830', 'HMRC manual CA23830: Long funding leases, short lease meaning'],
    ['https://www.gov.uk/hmrc-internal-manuals/business-leasing-manual/blm10010', 'HMRC manual BLM10010: Lease accounting standards'],
  ],

  related: [
    '/resources/capital-allowances-explained/',
    '/resources/full-expensing/',
    '/resources/corporation-tax-rates/',
    '/resources/cash-flow-forecasting/',
  ],
};
