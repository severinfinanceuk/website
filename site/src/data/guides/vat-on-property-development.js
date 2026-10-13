// Guide: /resources/vat-on-property-development/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (VAT Notices 708, 742, 742A, 706/2, DIY housebuilder guidance,
// domestic reverse charge guidance). Scope: VAT rates on building work and property sales, option to tax,
// recovery, DIY housebuilders. Registration detail lives in vat-registration.js. Re-check after each Budget.
export default {
  url: '/resources/vat-on-property-development/',
  section: 'tax',
  title: 'VAT on Property Development UK | Severin Finance',
  description: 'VAT on property development: 0% new homes, 5% conversions, 20% commercial work, the option to tax and reclaiming VAT on build costs. Free consultation.',
  h1: 'VAT on property development: rates, reliefs and recovery',
  crumb: 'VAT on property development',
  summary: 'New homes at 0%, conversions at 5%, commercial work at 20%, and how developers reclaim VAT.',
  topic: 'VAT on residential and commercial property development',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/vat-accountant/', label: 'Our VAT service',
    boxTitle: 'Planning a development?', text: 'We check the VAT rate on each part of your scheme, register you at the right time and prepare the returns that reclaim VAT on your costs.',
  },

  hero: {
    answer: 'Building new homes is usually zero-rated for VAT, and so is the first sale or long lease of a new home by the developer. Converting a commercial building into homes, or renovating a home empty for 2 years, is usually 5%. Most other building work, commercial sales within 3 years and professional fees are 20%.',
  },

  tldr: [
    'New homes: building work and the first sale or lease over 21 years are usually <strong>0%</strong>.',
    'Conversions to homes and homes empty for <strong>2 years</strong> or more: building work is usually <strong>5%</strong>.',
    'Architects, surveyors and other professional fees are always <strong>20%</strong>, so registering for VAT matters.',
    'Selling the freehold of a new commercial building within <strong>3 years</strong> of completion is standard-rated.',
    'An option to tax must normally be notified to HMRC within <strong>30 days</strong> and lasts at least 20 years.',
  ],

  sections: [
    {
      id: 'rates', h2: 'What VAT rate applies to property development?', toc: 'The VAT rates',
      body: [
        '<p>It depends on what you are building and what you will do with it. New homes sit at 0%, conversions into homes at 5%, and most commercial work at 20%. The rate is set by the type of building, not by who you are, so one scheme can carry all three. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> check each contract and sale before you sign, because a wrong rate on a builder\'s invoice is hard to put right later.</p>',
        { caption: 'VAT on building work and property sales (current rules)', head: ['Work or sale', 'Usual VAT rate'], rows: [
          ['Building a new home (a qualifying dwelling)', '0%'],
          ['First sale, or lease over 21 years, of a new home by the person who built it', '0%'],
          ['Converting a non-residential building into homes', '5%'],
          ['Changing the number of homes in a residential building (one house into flats)', '5%'],
          ['Renovating a home that has not been lived in for 2 years or more', '5%'],
          ['Repairs, extensions and refurbishment of existing buildings', '20%'],
          ['Building commercial premises', '20%'],
          ['Freehold sale of a commercial building less than 3 years old', '20%'],
          ['Architects, surveyors, consultants and project managers', '20%'],
        ], after: 'Source: HMRC VAT Notice 708 and VAT Notice 742. Conditions apply to every relief. Checked 13 October 2026.' },
        '<p>Builders charge VAT on the materials they fit at the same rate as their work. Items that are not building materials, such as carpets, fitted bedroom furniture and most built-in appliances, stay at 20% even on a zero-rated new build.</p>',
      ],
    },
    {
      id: 'new-homes', h2: 'When is building new homes zero-rated?', toc: 'New homes at 0%',
      body: [
        '<p>Building work is zero-rated when it creates a new building designed as a dwelling, with planning permission for separate use, and when the work is not on HMRC\'s list of excluded services. The same relief covers buildings for a relevant residential purpose, such as a care home or student accommodation, but those need a certificate from the customer before the work starts.</p>',
        '<p>The sale is a separate question. When the person who built the home grants a major interest in it (the freehold, or a lease of more than 21 years in England, Wales and Northern Ireland), that first grant is zero-rated. Later sales of the same home are exempt. HMRC calls this "person constructing" status, and it is what lets a developer register for VAT and reclaim VAT on costs even though no VAT is charged on the sale.</p>',
        '<p>Two things are never zero-rated on a new build: professional services (architects, surveyors, consultants and supervisors) and goods that are not building materials. A developer cannot reclaim VAT on carpets, most fitted furniture and most gas and electrical appliances built into a new home. Fitted kitchen units are treated as building materials, but hobs and ovens are not.</p>',
      ],
    },
    {
      id: 'conversions', h2: 'When can a conversion or renovation be charged at 5%?', toc: 'Conversions at 5%',
      body: [
        '<p>The 5% reduced rate applies to building work in three common cases:</p>',
        '<ul><li><strong>Non-residential to residential:</strong> turning offices, shops, barns or warehouses into homes.</li><li><strong>Changing the number of dwellings:</strong> splitting a house into flats, or knocking two flats into one house.</li><li><strong>Empty homes:</strong> renovating a dwelling that has not been lived in during the 2 years immediately before work starts.</li></ul>',
        '<p>For an empty home you need evidence, such as council tax and electoral roll records, utility bills or a letter from the council\'s Empty Property Officer. Occasional use, such as a second home, breaks the 2 years.</p>',
        '<p>When you convert a non-residential building into homes and sell them, your first sale or long lease can also be zero-rated, just as with a new build. That means a VAT-registered converter can usually reclaim the 5% charged by the builder.</p>',
        { caption: 'Illustrative: converting an office into 6 flats for sale', head: ['Cost', 'Net cost', 'VAT charged', 'VAT reclaimed if registered'], rows: [
          ['Conversion contract at 5%', '£600,000', '£30,000', '£30,000'],
          ['Professional fees at 20%', '£60,000', '£12,000', '£12,000'],
          ['Carpets and built-in appliances at 20%', '£20,000', '£4,000', '£0 (blocked)'],
          ['Total', '£680,000', '£46,000', '£42,000'],
        ], after: 'Illustrative figures only. Assumes the developer is VAT registered and makes a zero-rated first sale of each flat. If the builder wrongly charged 20% on the contract, the VAT would be £120,000, and HMRC can refuse to repay VAT charged at the wrong rate, leaving you to recover it from the builder.' },
      ],
    },
    {
      id: 'recovery', h2: 'Can a developer reclaim VAT on build costs?', toc: 'Reclaiming VAT',
      body: [
        '<p>Yes, if you are VAT registered and your sales are taxable, which includes zero-rated sales of new or converted homes. You must register once taxable turnover passes £90,000 in a rolling 12 months, and a residential developer can register voluntarily before the first sale. Our guide to <a href="/resources/vat-registration/">VAT registration</a> explains the tests and dates.</p>',
        '<p>Register before you spend heavily if you can. Once registered, you can reclaim VAT on goods bought in the 4 years before registration that you still hold, and on services in the 6 months before. Fees paid to an architect 2 years earlier are lost.</p>',
        '<h3>The domestic reverse charge</h3>',
        '<p>Since 1 March 2021, when a VAT-registered contractor reported under the Construction Industry Scheme sells standard or reduced rate building services to another VAT-registered business, the customer accounts for the VAT on its own return instead of paying it to the builder. If you are the end user of those services, for example a developer selling the finished building, you can tell your contractors in writing and the reverse charge does not apply.</p>',
        '<p>Letting residential property is exempt. A developer who builds homes to rent out, rather than sell, makes exempt supplies and generally cannot reclaim the VAT on standard-rated costs, which changes the numbers in your appraisal.</p>',
      ],
    },
    {
      id: 'commercial', h2: 'How does VAT work on commercial property development?', toc: 'Commercial property',
      body: [
        '<p>Building commercial premises is standard-rated, and selling the freehold of a new commercial building is standard-rated for 3 years after completion. Completion is the date of the certificate of practical completion or the date the building is fully occupied, whichever comes first. After 3 years, and for most leases, sales and lettings of commercial property are exempt unless you opt to tax.</p>',
        '<h3>The option to tax</h3>',
        '<p>An option to tax turns your exempt sales and lettings of a commercial building into standard-rated ones, so you can reclaim VAT on the purchase and the works. Key rules from VAT Notice 742A:</p>',
        '<ul><li>It covers the whole building and the land under it, even if you own only one floor.</li><li>You normally notify HMRC on form VAT1614A within 30 days of deciding to opt.</li><li>You can revoke it within a 6-month cooling off period, then not until 20 years have passed.</li><li>It does not apply to buildings designed or adapted as dwellings. If a buyer will convert an opted building into homes, they give you a certificate (VAT1614D) before the price is fixed, and the sale is exempt.</li></ul>',
        '<p>A mixed-use scheme, such as shops with flats above, splits costs between the parts. VAT on costs that relate to exempt supplies is restricted under partial exemption, and land and building costs of £600,000 or more (excluding VAT) fall into the Capital Goods Scheme, which adjusts recovery over 10 intervals if the use changes. Buying a building can also be a transfer of a going concern with no VAT, if strict conditions are met. Stamp Duty Land Tax is separate: see our guide to <a href="/resources/stamp-duty-commercial-property/">stamp duty on commercial property</a>.</p>',
      ],
    },
    {
      id: 'diy', h2: 'What is the DIY housebuilders scheme?', toc: 'DIY housebuilders',
      body: [
        '<p>It lets an individual who builds or converts a home for themselves or their family reclaim VAT on building materials, without registering for VAT. It is not for developers: homes built to sell, let or use in a business do not qualify.</p>',
        '<ul><li>New builds qualify with planning permission for a separate dwelling. Conversions qualify if the building was not used as a dwelling in the 10 years before work started.</li><li>You make one claim, online or on form VAT431NB (new builds) or VAT431C (conversions).</li><li>For work completed on or after 5 December 2023, claim within 6 months of completion.</li><li>You cannot claim for plant, tools, carpets, most appliances or professional fees.</li></ul>',
        '<p>On a conversion, your builder should charge 5% on the work. You can reclaim that 5% through the scheme as well as the VAT on materials you buy yourself.</p>',
      ],
    },
    {
      id: 'finance', h2: 'How does VAT affect your development finance?', toc: 'VAT and finance',
      body: [
        '<p>VAT is a cash flow cost even when you get it all back. You pay VAT to your builder and consultants first and reclaim it on your next return, so a large scheme can have tens of thousands of pounds tied up at any time. Lenders look at this when they size a loan.</p>',
        '<p>Build the VAT on each cost line into your appraisal, at the right rate, and show the timing of repayments in your cash flow. Our <a href="/resources/development-appraisal-checklist/">development appraisal checklist</a> covers the other costs, and our team can arrange <a href="/uk/business-finance/development-finance/">development finance</a> with lenders once the numbers are tested. Our guide to <a href="/resources/development-finance-ltgdv-explained/">LTGDV and LTC</a> explains how lenders work out the loan.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I pay VAT on a new build house?', a: 'Usually not. Building a new home is zero-rated, and the first sale or long lease of a new home by the developer is also zero-rated. Later sales of the same home are exempt, so there is no VAT on the price either way.' },
    { q: 'Is VAT charged on converting a barn into a house?', a: 'Usually 5% on the building work, because it converts a non-residential building into a home. If you are converting it for yourself, you can reclaim that VAT and the VAT on materials through the DIY housebuilders scheme within 6 months of completion.' },
    { q: 'Can I reclaim VAT on architect fees for a new build?', a: 'Only if you are VAT registered and making taxable sales, such as a zero-rated first sale of the new homes. Professional fees are always standard-rated and cannot be claimed under the DIY housebuilders scheme.' },
    { q: 'Do I need to opt to tax a commercial property?', a: 'Not always. Opting lets you reclaim VAT on buying and improving a commercial building, but you must then charge 20% on rent or sale to most buyers and tenants. It covers the whole building and normally lasts at least 20 years.' },
    { q: 'What is the VAT rate for renovating an empty property?', a: '5% on the building work, if the home has not been lived in during the 2 years immediately before work starts. You need evidence such as council tax records or a letter from the council\'s Empty Property Officer.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/buildings-and-construction-vat-notice-708', 'HMRC VAT Notice 708: Buildings and construction'],
    ['https://www.gov.uk/guidance/vat-on-land-and-property-notice-742', 'HMRC VAT Notice 742: Land and property'],
    ['https://www.gov.uk/guidance/opting-to-tax-land-and-buildings-notice-742a', 'HMRC VAT Notice 742A: Opting to tax land and buildings'],
    ['https://www.gov.uk/guidance/capital-goods-scheme-notice-7062', 'HMRC VAT Notice 706/2: Capital Goods Scheme'],
    ['https://www.gov.uk/guidance/vat-refunds-for-new-builds-if-youre-a-diy-housebuilder', 'GOV.UK: VAT refunds for DIY housebuilders (new builds)'],
    ['https://www.gov.uk/guidance/vat-refunds-for-conversions-if-youre-a-diy-housebuilder', 'GOV.UK: VAT refunds for DIY housebuilders (conversions)'],
    ['https://www.gov.uk/guidance/how-to-use-the-vat-reverse-charge-if-you-buy-building-and-construction-services', 'GOV.UK: VAT domestic reverse charge for buyers'],
    ['https://www.gov.uk/charge-reclaim-record-vat/reclaim-vat-business-expenses', 'GOV.UK: Reclaiming VAT, including before registration'],
  ],

  related: [
    '/resources/vat-registration/',
    '/resources/development-appraisal-checklist/',
    '/resources/development-finance-ltgdv-explained/',
    '/resources/stamp-duty-commercial-property/',
  ],
};
