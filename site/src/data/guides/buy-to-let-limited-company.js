// Guide: /resources/buy-to-let-limited-company/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and legislation.gov.uk on 13 October 2026 (sources below). Also checked:
// CTA 2010 s18A and s18N (close investment-holding companies, letting to connected persons); TCGA 1992 s286(6) (company connected
// with a person who controls it); FA 2003 s53 (SDLT market value on transfer to a connected company); FA 2003 Sch 4A para 5G
// (3-year withdrawal of relief from the 17% rate); gov.uk/corporation-tax-rates; HMRC dividend rates technical note (10.75%, 35.75%, 39.35%).
// Scope: residential buy-to-let. Business premises are in buying-property-limited-company.js. Re-check each April and after each Budget.
export default {
  url: '/resources/buy-to-let-limited-company/',
  section: 'accounting',
  title: 'Buy-to-Let Limited Company Guide | Severin Finance',
  description: 'Buy-to-let through a limited company: corporation tax at 19% to 25%, dividend tax, the 5% stamp duty surcharge and moving property in. Free consultation.',
  h1: 'Buy-to-let through a limited company: is it worth it?',
  crumb: 'Buy-to-let limited company',
  summary: 'Company tax, taking money out, stamp duty for companies and moving property you already own.',
  topic: 'Owning buy-to-let property through a limited company',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/landlord-accountant/', label: 'Our landlord accountant service',
    boxTitle: 'Personal or company?', text: 'We compare personal and company ownership on your own figures, then set up and run the property company if it makes sense.',
  },

  hero: {
    answer: 'A buy-to-let company deducts mortgage interest in full and pays corporation tax at 19% on profits up to £50,000 for 2026-27, rising to 25% above £250,000. You then pay dividend tax of 10.75%, 35.75% or 39.35% to take profits out. Companies pay a 5% stamp duty surcharge from the first home they buy.',
  },

  tldr: [
    'A company deducts <strong>all</strong> its mortgage interest. Individual landlords get only a 20% credit (Section 24).',
    'Corporation tax for 2026-27: <strong>19%</strong> up to £50,000 of profit, <strong>25%</strong> over £250,000, marginal relief between.',
    'Dividends above the <strong>£500</strong> allowance are taxed at 10.75%, 35.75% or 39.35% in 2026-27.',
    'Companies pay stamp duty at the <strong>higher rates</strong> on every home of £40,000 or more, and 17% can apply above £500,000.',
    'Moving property you already own into a company is a sale at <strong>market value</strong> for CGT and stamp duty.',
  ],

  sections: [
    {
      id: 'is-it-worth-it', h2: 'Is it better to own buy-to-let through a limited company?', toc: 'Is it worth it?',
      body: [
        '<p>It is often better for higher rate taxpayers with mortgages who plan to keep profits in the business and buy more property. It is usually worse for landlords with little borrowing, or who need all the rent to live on. Our <a href="/uk/accounting/landlord-accountant/">landlord accountants</a> compare both routes on your own figures before you buy or restructure.</p>',
        { caption: 'Personal ownership and company ownership compared (2026-27)', head: ['Point', 'Owned personally', 'Owned by a company'], rows: [
          ['Mortgage interest', '20% tax credit only', 'Deducted in full'],
          ['Tax on profit', 'Income tax at 20%, 40% or 45%', 'Corporation tax at 19% to 25%'],
          ['Taking money out', 'No further tax', 'Dividend tax, or salary for real work'],
          ['Stamp duty on purchase', 'Higher rates only if you own another home', 'Higher rates on every home'],
          ['Selling', 'CGT at 18% or 24%, £3,000 allowance', 'Corporation tax on the gain, then tax to extract it'],
          ['Running costs', 'Self Assessment return', 'Accounts, company tax return, Companies House filings'],
        ], after: 'Simplified. Rates for 2026-27; income tax rates are for England, Wales and Northern Ireland.' },
        '<p>Companies set up only to hold property are often called SPVs (special purpose vehicles). Lenders prefer them because the company does nothing else.</p>',
      ],
    },
    {
      id: 'company-tax', h2: 'How is a property company taxed?', toc: 'Company tax',
      body: [
        '<p>The company pays corporation tax on its rental profit after all costs, including mortgage interest. For 2026-27 the rate is 19% on profits up to £50,000 and 25% above £250,000, with marginal relief between. Our <a href="/resources/marginal-relief-calculator/">marginal relief calculator</a> works out the figure in between, and our guide to <a href="/resources/corporation-tax-rates/">corporation tax rates</a> covers payment dates.</p>',
        '<p>Two rules catch property companies out:</p>',
        '<ul><li><strong>Letting to family:</strong> the 19% rate and marginal relief are not available to a close investment-holding company. A company that lets on a commercial footing is not one, but letting to someone connected with the company, such as a shareholder\'s relative, does not count as commercial letting. A company that mainly lets to family can pay 25% on every pound of profit.</li><li><strong>Several companies:</strong> companies under common control are associated, and share the £50,000 and £250,000 limits between them. Two property companies owned by the same person each get a £25,000 lower limit.</li></ul>',
        '<p>A company that sells a property pays corporation tax on the gain, not capital gains tax, and has no annual exempt amount.</p>',
      ],
    },
    {
      id: 'taking-money-out', h2: 'How do you take money out of a property company?', toc: 'Taking money out',
      body: [
        '<p>Mostly through dividends, or by the company repaying money you lent it. Dividends above the £500 allowance are taxed at 10.75% in the basic rate band, 35.75% in the higher rate band and 39.35% above that for 2026-27. A salary is only deductible if it pays for real work done for the company.</p>',
        '<p>Many landlords fund the deposit as a loan to the company, recorded as a director\'s loan. The company can repay it tax-free once it has the cash. The reverse is costly: if you borrow from the company and do not repay within 9 months of the year end, the company pays a temporary charge of 35.75% on loans made from 6 April 2026. Our guides to <a href="/resources/how-to-pay-yourself-from-a-limited-company/">paying yourself from a limited company</a> and <a href="/resources/dividend-tax-rates/">dividend tax rates</a> explain the options.</p>',
        { caption: 'Illustrative example, 2026-27: rent £20,000, other costs £2,000, mortgage interest £10,000', head: ['Step', 'Owned personally (higher rate)', 'Company, profit kept', 'Company, all paid out'], rows: [
          ['Real profit after interest', '£8,000', '£8,000', '£8,000'],
          ['Corporation tax at 19%', 'None', '£1,520', '£1,520'],
          ['Income or dividend tax', '£5,200', 'None', '£2,317'],
          ['Total tax', '£5,200', '£1,520', '£3,837'],
          ['Left after tax', '£2,800', '£6,480', '£4,163'],
        ], after: 'Illustrative round numbers. The personal figure is income tax on £18,000 at 40% less a 20% credit on £10,000 of interest. The dividend is taxed at 35.75% with the £500 allowance already used. Company running costs, such as accountancy fees, are not included.' },
        '<p>The gap is largest when profits stay in the company to pay down debt or fund the next deposit. Our guide to <a href="/resources/section-24-explained/">Section 24</a> explains the personal figure.</p>',
      ],
    },
    {
      id: 'stamp-duty', h2: 'How much stamp duty does a company pay on a buy-to-let?', toc: 'Stamp duty',
      body: [
        '<p>A company pays the higher rates of Stamp Duty Land Tax, 5% above the standard rates, on any home costing £40,000 or more, even its first. A company counted as not UK resident for SDLT pays a further 2%. These rates apply in England and Northern Ireland. Scotland uses Land and Buildings Transaction Tax and Wales uses Land Transaction Tax, each with its own surcharge.</p>',
        { caption: 'SDLT for a company buying one home of up to £500,000 (England and Northern Ireland)', head: ['Part of the price', 'Standard rate', 'Rate for a company'], rows: [
          ['Up to £125,000', '0%', '5%'],
          ['£125,001 to £250,000', '2%', '7%'],
          ['£250,001 to £500,000', '5%', '10%'],
          ['Example: £300,000 flat', '£5,000', '£20,000'],
        ], after: 'Source: GOV.UK, Stamp Duty Land Tax: residential property rates and buying an additional residential property. Checked 13 October 2026. Pay within 14 days of completion.' },
        '<p>Above £500,000, a company can pay a flat 17% on the whole price. Companies running a genuine property rental business can claim relief from that rate and pay the higher rates instead, but the relief is withdrawn if, within 3 years, the property stops being used for letting or someone connected with the company lives in it. A company owning a home worth more than £500,000 also files an Annual Tax on Enveloped Dwellings return each year, even when it claims relief from the charge. Buying six or more homes in one transaction lets you use the non-residential rates instead.</p>',
      ],
    },
    {
      id: 'moving-property-in', h2: 'Can you move existing buy-to-lets into a limited company?', toc: 'Moving property in',
      body: [
        '<p>Yes, but the company is buying the property from you, and because you control the company the tax rules use market value, whatever price you agree. That usually means two tax bills.</p>',
        '<ul><li><strong>Capital gains tax for you:</strong> on the rise in value since you bought, at 18% or 24% for 2026-27, reported and paid within 60 days of completion.</li><li><strong>Stamp Duty Land Tax for the company:</strong> on the full market value at the company rates, even if no money changes hands.</li></ul>',
        { caption: 'Illustrative example: transferring a flat bought for £180,000, now worth £300,000', head: ['Tax', 'Amount'], rows: [
          ['Gain (£300,000 less £180,000, ignoring costs)', '£120,000'],
          ['CGT on £117,000 after the £3,000 allowance, at 24%', '£28,080'],
          ['SDLT for the company on £300,000', '£20,000'],
          ['Total before any relief', '£48,080'],
        ], after: 'Illustrative figures for a higher rate taxpayer. The company also needs a new mortgage, and your existing lender may charge an early repayment fee.' },
        '<p>Incorporation relief can defer the gain if you transfer a whole letting business in exchange for shares. It only applies to a business, not passive investment: HMRC accepts that letting is a business where you personally spend 20 hours or more a week on it, and looks carefully at cases below that. For transfers from 6 April 2026 the relief must be claimed: for a 2026-27 transfer, by 31 January 2029. Our guide to <a href="/resources/capital-gains-tax-on-property/">capital gains tax on property</a> covers the 60-day return.</p>',
      ],
    },
    {
      id: 'mortgages', h2: 'Can you get a mortgage for a limited company buy-to-let?', toc: 'Mortgages',
      body: [
        '<p>Yes. Many buy-to-let lenders lend to companies, especially SPVs whose only business is letting property. Expect the following, though terms vary by lender and change often:</p>',
        '<ul><li>the directors, and often the shareholders, give a personal guarantee for the loan</li><li>fewer products to choose from than for personal buy-to-let, with rates and fees that can be higher</li><li>the lender tests whether the rent covers the interest by a set margin, using the company\'s figures rather than your personal tax band</li><li>a new valuation and legal work for each purchase or transfer</li></ul>',
        '<p>A personal guarantee puts your own assets at risk if the company cannot pay, so take independent legal advice before you sign one. Lenders will also want to see the company\'s accounts, so keep the books up to date from the first purchase.</p>',
      ],
    },
    {
      id: 'running-the-company', h2: 'What does running a property company involve?', toc: 'Running the company',
      body: [
        '<p>More paperwork than owning personally. The company must keep proper records, file annual accounts at Companies House, send a company tax return, pay corporation tax 9 months and 1 day after its year end and file a confirmation statement each year. Directors and people with significant control must verify their identity with Companies House.</p>',
        '<p>A company is outside Making Tax Digital for Income Tax, because it pays corporation tax. Our guide to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> sets out each filing date, and our <a href="/uk/company-services/company-formation/">company formation</a> team can set up the SPV with the right activity code.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I pay the 5% stamp duty surcharge if my company buys its first property?', a: 'Yes. A company pays the higher rates of SDLT on any residential property of £40,000 or more, even if it owns nothing else. A £300,000 buy-to-let costs a company £20,000 in England or Northern Ireland, against £5,000 at the standard rates.' },
    { q: 'How do I get money out of my property company?', a: 'Usually as dividends, taxed at 10.75%, 35.75% or 39.35% above the £500 allowance in 2026-27, or by the company repaying money you lent it, which is tax-free. Borrowing from the company and not repaying it in time triggers a 35.75% company charge.' },
    { q: 'Can I transfer my buy-to-let into a company without paying tax?', a: 'Rarely. The transfer is treated as a sale at market value, so capital gains tax and stamp duty are usually due. Incorporation relief can defer the gain only if your letting is a genuine business, and it must be claimed for transfers from 6 April 2026.' },
    { q: 'Does Section 24 apply to limited companies?', a: 'No. A company deducts mortgage interest in full before corporation tax. Section 24 only restricts relief for individuals, partners, trustees and personal representatives letting residential property.' },
    { q: 'Can my property company let a flat to my children?', a: 'It can, but letting to someone connected with the company is not commercial letting for corporation tax. A company that mainly lets to family can lose the 19% rate and pay 25%, and it can lose relief from the 17% stamp duty rate.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/stamp-duty-land-tax-buying-an-additional-residential-property', 'GOV.UK: SDLT higher rates for additional property and companies'],
    ['https://www.gov.uk/guidance/stamp-duty-land-tax-corporate-bodies', 'GOV.UK: SDLT for corporate bodies (17% rate and reliefs)'],
    ['https://www.gov.uk/stamp-duty-land-tax/residential-property-rates', 'GOV.UK: SDLT residential property rates'],
    ['https://www.gov.uk/guidance/annual-tax-on-enveloped-dwellings-the-basics', 'GOV.UK: Annual Tax on Enveloped Dwellings'],
    ['https://www.gov.uk/corporation-tax-rates', 'GOV.UK: Corporation Tax rates'],
    ['https://www.legislation.gov.uk/ukpga/2010/4/section/18N', 'Corporation Tax Act 2010, s18N: close investment-holding companies'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg65715', 'HMRC Capital Gains Manual: incorporation relief and letting businesses'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg65735', 'HMRC Capital Gains Manual: claiming incorporation relief from 6 April 2026'],
  ],

  related: [
    '/resources/section-24-explained/',
    '/resources/capital-gains-tax-on-property/',
    '/resources/dividend-tax-rates/',
    '/resources/buying-property-limited-company/',
  ],
};
