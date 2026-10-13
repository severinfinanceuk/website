// Guide: /resources/development-appraisal-checklist/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026: GOV.UK planning practice guidance (CIL, planning obligations, viability),
// GOV.UK SDLT guidance. There is no official source for lender profit or contingency targets: those figures
// are labelled as illustrations. The 15-20% of GDV figure is the viability guidance's plan-making assumption.
// Scope: what goes into an appraisal. Loan sizing lives in development-finance-ltgdv-explained.js; VAT rates
// in vat-on-property-development.js.
export default {
  url: '/resources/development-appraisal-checklist/',
  section: 'business-finance',
  title: 'Development Appraisal Checklist | Severin Finance',
  description: 'What a development appraisal includes: GDV evidence, build costs, contingency, fees, finance, CIL, section 106, VAT and profit on cost. Free consultation.',
  h1: 'Development appraisal checklist: what lenders expect to see',
  crumb: 'Development appraisal checklist',
  summary: 'GDV evidence, build costs, contingency, fees, finance, CIL and section 106, VAT and profit.',
  topic: 'Property development appraisals for development finance',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/development-finance/', label: 'Our development finance service',
    boxTitle: 'Want your appraisal checked?', text: 'Our accountants test your appraisal, VAT and exit, then we arrange development finance with lenders that fit the scheme.',
  },

  hero: {
    answer: 'A development appraisal sets the finished value of the scheme against every cost of delivering it, to show the profit. It should include evidenced GDV, land and purchase costs, build costs, a contingency, professional fees, finance costs, CIL and section 106, VAT, sales costs and profit on cost. Lenders test each line before they lend.',
  },

  tldr: [
    'Start with <strong>GDV</strong> backed by comparable sales, then subtract every cost to find the profit.',
    'Include a <strong>contingency</strong> on build costs. GOV.UK viability guidance says contingency should be shown explicitly.',
    '<strong>CIL</strong> applies to new homes and to <strong>100 square metres</strong> or more of new floorspace where the council charges it, and is due when work starts.',
    '<strong>Section 106</strong> obligations, such as affordable housing, can change the GDV as well as the costs.',
    'Planning viability guidance assumes a developer return of <strong>15% to 20% of GDV</strong> when councils test their plans.',
  ],

  sections: [
    {
      id: 'what-goes-in', h2: 'What goes into a development appraisal?', toc: 'The checklist',
      body: [
        '<p>Every cost of delivering the scheme, set against its finished value, so the profit is clear. Lenders read the appraisal before anything else, and our accountants check it line by line before we arrange <a href="/uk/business-finance/development-finance/">development finance</a> for you.</p>',
        { caption: 'Development appraisal checklist', head: ['Line', 'What to include', 'Evidence lenders ask for'], rows: [
          ['GDV', 'Sale value of each unit, or the investment value if you will let', 'Comparable sales, agent opinions, the lender\'s valuation'],
          ['Land and purchase costs', 'Price, Stamp Duty Land Tax, legal and survey fees', 'Contract or heads of terms'],
          ['Build costs', 'Main contract, demolition, groundworks, utilities, abnormal costs', 'Cost plan from a quantity surveyor or tender'],
          ['Contingency', 'An allowance for overruns and unknowns', 'Shown as a separate line'],
          ['Professional fees', 'Architect, engineers, surveyors, planning, building control, warranty', 'Fee quotes or appointments'],
          ['Planning costs', 'Community Infrastructure Levy and section 106 obligations', 'Liability notice, draft or signed agreement'],
          ['Finance costs', 'Interest, arrangement and exit fees, valuation, monitoring surveyor', 'Indicative terms from lenders'],
          ['Sales costs', 'Agents, marketing and legal fees on sale', 'Agent terms'],
          ['VAT', 'VAT you pay and when you reclaim it', 'VAT registration and rates for each cost'],
          ['Profit', 'Profit on cost and profit on GDV', 'The bottom line of the appraisal'],
        ], after: 'Most lenders also want a cash flow by month, a build programme and details of your team.' },
      ],
    },
    {
      id: 'gdv', h2: 'How do you evidence GDV?', toc: 'GDV evidence',
      body: [
        '<p>With recent sales of comparable properties near the site, adjusted for size, specification and the premium a new build may or may not command. Lenders appoint their own valuer, and your appraisal will be judged against that valuation, not your estimate.</p>',
        '<ul><li>Use sold prices, not asking prices, and favour sales from the last 6 to 12 months.</li><li>Price each unit separately, by floor area and type, rather than one blended figure.</li><li>Get written opinions from local agents who sell similar homes.</li><li>Value any affordable homes required by a section 106 agreement at what a housing provider will pay, which is usually below open market value.</li><li>For schemes you will let, show the rent and the value a lender would refinance on.</li></ul>',
        '<p>An optimistic GDV is the most common reason a lender\'s offer comes in below what a developer expected, because it lowers the loan as well as the profit. Our guide to <a href="/resources/development-finance-ltgdv-explained/">LTGDV and LTC</a> shows how lenders turn GDV into a loan.</p>',
      ],
    },
    {
      id: 'build-costs', h2: 'How should you cost the build and contingency?', toc: 'Build and contingency',
      body: [
        '<p>Use a cost plan prepared by a quantity surveyor, or a fixed-price tender, and add a separate contingency. GOV.UK viability guidance lists build costs, abnormal costs such as contaminated land or listed buildings, site infrastructure and an explicit contingency as separate items, and lenders expect the same.</p>',
        '<ul><li>Price demolition, groundworks, drainage and utility connections separately: they are where surprises appear.</li><li>Allow for inflation if the build runs over a long period.</li><li>Set a larger contingency for refurbishments and conversions, where hidden defects are more likely than on a cleared site.</li><li>Show who carries the risk: a fixed-price contract moves some of it to the contractor.</li></ul>',
        '<p>The lender\'s monitoring surveyor will compare your costs with industry benchmarks and challenge a contingency that looks too thin. If costs overrun, you usually fund the gap yourself.</p>',
      ],
    },
    {
      id: 'fees-finance', h2: 'Which fees and finance costs should you include?', toc: 'Fees and finance',
      body: [
        '<p>All of them, including the lender\'s, because finance costs come out of your profit. Professional fees cover your architect, structural engineer, quantity surveyor, planning consultant, party wall surveyor, building control, warranty provider and insurances. Finance costs include rolled-up interest, arrangement and exit fees, the valuation, the monitoring surveyor and the lender\'s legal costs.</p>',
        '<p>Model interest on the drawdown timetable, not on the full loan from day one, and include the months between practical completion and the last sale. If sales are slow, interest keeps running. Our guide to <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a> shows how to build a monthly forecast.</p>',
      ],
    },
    {
      id: 'cil-s106', h2: 'How do CIL and section 106 affect an appraisal?', toc: 'CIL and section 106',
      body: [
        '<p>Both are costs of getting planning permission, and both can be large enough to change whether a scheme works. Check them before you agree a land price.</p>',
        { caption: 'Community Infrastructure Levy and section 106 at a glance', head: ['Point', 'Community Infrastructure Levy (CIL)', 'Section 106 obligations'], rows: [
          ['What it is', 'A fixed charge per square metre set in the charging authority\'s charging schedule', 'A legal agreement, or a unilateral undertaking, that makes a scheme acceptable in planning terms'],
          ['What it applies to', 'New homes, and 100 square metres or more of net new floorspace, where the council charges it', 'Whatever the agreement covers, such as affordable housing, roads or school places'],
          ['How much', 'Set rates per square metre. A charge under £50 is treated as zero', 'Negotiated. Must be necessary, directly related and fair in scale'],
          ['When it is paid', 'Due when development starts, or by instalments if the council\'s policy allows', 'As set out in the agreement, often at stages of the build or sales'],
          ['Reliefs', 'Self-build, social housing, charities, residential annexes and extensions', 'Can be renegotiated by agreement, or challenged after 5 years'],
        ], after: 'Source: GOV.UK planning practice guidance on CIL (updated 17 June 2026) and on planning obligations. Checked 13 October 2026.' },
        '<p>Get the CIL paperwork right. Someone must assume liability before work starts, and a commencement notice must reach the council at least one day before. If no one assumes liability, it falls on the landowners and the full amount is due on commencement, with no instalments. A late commencement notice where a relief is claimed brings a surcharge of 20% of the charge, capped at £2,500. In London, the Mayor of London also charges CIL, on top of any rate the borough charges.</p>',
        '<p>National guidance says affordable housing contributions should normally be sought only from major residential schemes: 10 or more homes, or a site of 0.5 hectares or more. Affordable units lower the GDV, so they belong in both halves of the appraisal.</p>',
      ],
    },
    {
      id: 'vat-sdlt', h2: 'How do VAT and stamp duty fit into an appraisal?', toc: 'VAT and stamp duty',
      body: [
        '<p>VAT is usually a cash flow cost rather than a final cost if you are registered and selling new homes, while stamp duty is a real cost of buying the site. New homes are usually zero-rated, so a registered developer can reclaim VAT on build costs and fees. Conversions and commercial schemes work differently. Our guide to <a href="/resources/vat-on-property-development/">VAT on property development</a> sets out the rates, and your cash flow should show when VAT is paid and when it comes back.</p>',
        '<p>Stamp Duty Land Tax on bare land or a commercial building uses the non-residential rates, explained in our guide to <a href="/resources/stamp-duty-commercial-property/">stamp duty on commercial property</a>. If the site includes a home, residential rates apply, and a company usually pays the 5% higher rates on a dwelling costing £40,000 or more. The 17% rate for some company purchases over £500,000 has a relief for property developers who meet the conditions.</p>',
      ],
    },
    {
      id: 'profit', h2: 'What profit margin do lenders look for?', toc: 'Profit margin',
      body: [
        '<p>Enough to absorb a fall in values or a rise in costs and still repay the loan. Each lender sets its own target, usually as profit on cost or profit on GDV. For plan-making, GOV.UK viability guidance says 15% to 20% of GDV may be a suitable return to developers, with a lower figure where affordable housing reduces risk. That is a planning benchmark, not a lending rule.</p>',
        { caption: 'Illustrative appraisal: 4 houses selling at £500,000 each', head: ['Line', 'Amount'], rows: [
          ['GDV', '£2,000,000'],
          ['Land', '£500,000'],
          ['Stamp Duty Land Tax, legal and survey fees', '£25,000'],
          ['Build costs', '£750,000'],
          ['Contingency (an assumed 10% of build costs)', '£75,000'],
          ['Professional fees', '£75,000'],
          ['CIL and section 106', '£40,000'],
          ['Finance costs (interest and lender fees)', '£100,000'],
          ['Sales and marketing costs', '£35,000'],
          ['Total costs', '£1,600,000'],
          ['Profit', '£400,000'],
          ['Profit on cost / profit on GDV', '25% / 20%'],
        ], after: 'Illustrative figures only, excluding VAT assumed to be reclaimed. Run the same appraisal with values 10% lower: GDV falls to £1,800,000 and profit halves to £200,000 (12.5% on cost).' },
        '<p>That sensitivity test is what lenders run, so run it first. If a modest fall wipes out the profit, rework the scheme or the land price before you apply.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is profit on cost in property development?', a: 'Profit on cost is the profit divided by the total cost of the scheme, including land, build, fees and finance. A scheme costing £1,600,000 that makes £400,000 has a profit on cost of 25%. Profit on GDV divides the same profit by the finished value instead.' },
    { q: 'How much contingency should a development appraisal include?', a: 'There is no fixed rule. It depends on the type of project and how far the design and costs are fixed. Refurbishments and conversions usually need more than new builds on cleared sites. Lenders and their monitoring surveyors will challenge a contingency that looks too low.' },
    { q: 'When do you pay CIL on a development?', a: 'CIL becomes due when the development starts. You can pay by instalments only if the council has an instalment policy and someone assumed liability before work began. Submit the commencement notice at least one day before starting, or you risk surcharges.' },
    { q: 'Do all developments pay CIL?', a: 'No. Only councils that have adopted a charging schedule charge it. Where they do, it applies to new homes and to 100 square metres or more of new floorspace. Reliefs and exemptions exist for self-build homes, social housing, charities, annexes and extensions.' },
    { q: 'What is the difference between CIL and section 106?', a: 'CIL is a fixed charge per square metre set in a published schedule. Section 106 obligations are negotiated for each scheme, such as affordable housing or road works, and must be necessary, directly related and fair in scale. A scheme can pay both.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/community-infrastructure-levy', 'GOV.UK: Community Infrastructure Levy guidance'],
    ['https://www.gov.uk/guidance/planning-obligations', 'GOV.UK: Planning obligations (section 106) guidance'],
    ['https://www.gov.uk/guidance/viability', 'GOV.UK: Planning practice guidance on viability'],
    ['https://www.gov.uk/guidance/stamp-duty-land-tax-buying-an-additional-residential-property', 'GOV.UK: SDLT on additional residential property'],
    ['https://www.gov.uk/guidance/stamp-duty-land-tax-corporate-bodies', 'GOV.UK: SDLT for corporate bodies'],
    ['https://www.gov.uk/guidance/buildings-and-construction-vat-notice-708', 'HMRC VAT Notice 708: Buildings and construction'],
  ],

  related: [
    '/resources/development-finance-ltgdv-explained/',
    '/resources/vat-on-property-development/',
    '/resources/stamp-duty-commercial-property/',
    '/resources/cash-flow-forecasting/',
  ],
};
