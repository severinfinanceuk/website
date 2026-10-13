// Guide: /resources/how-to-value-a-business/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and HMRC manuals on 13 October 2026 (sources below). Also checked:
// CG59540 (s272 market value, s273 information), SVM110050 (valuation hierarchy, earnings, EBITDA and debt,
// loss-making companies, minority discounts), SVM113030 (case law on discounts is not binding),
// Shares and assets valuations for tax (SAV aims for 4 weeks once it has everything; VOA values UK land),
// CG34 page (at least 3 months before the filing date). No market multiples quoted on purpose: none are published
// by an official source. The worked example uses an illustrative multiple only.
// Re-check each April and after each Budget.
export default {
  url: '/resources/how-to-value-a-business/',
  section: 'company-services',
  title: 'How to Value a Business: UK Methods | Severin Finance',
  description: 'How to value a UK business: earnings multiples, discounted cash flow, net assets, profit adjustments, minority discounts and HMRC value. Free consultation.',
  h1: 'How to value a business in the UK',
  crumb: 'How to value a business',
  summary: 'Earnings, cash flow and asset methods, the adjustments that move the number, and how HMRC values shares.',
  topic: 'Business and share valuation methods in the UK',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/business-valuation/', label: 'Our business valuation service',
    boxTitle: 'Need a figure you can defend?', text: 'We value your company or your shares in a written report, showing every method, adjustment and assumption.',
  },

  hero: {
    answer: 'Most profitable UK businesses are valued on a multiple of maintainable profit, then checked against discounted cash flow and net assets. You first adjust profit for things a buyer would not inherit, such as unusual owner pay and one-off costs. A minority stake is usually worth less per share. For tax, HMRC uses open market value.',
  },

  tldr: [
    'Three main methods: <strong>earnings multiple</strong>, <strong>discounted cash flow</strong> and <strong>net assets</strong>. Most valuations test more than one.',
    'The multiple is applied to <strong>maintainable profit</strong>, after adjusting for owner pay, one-off costs and related-party deals.',
    'A multiple of profit usually gives <strong>enterprise value</strong>: add surplus cash and deduct debt to reach the value of the shares.',
    'A <strong>minority holding</strong> is usually worth less than its pro rata share, because it cannot control the company.',
    'For tax, HMRC values shares at the price a hypothetical <strong>willing buyer</strong> would pay a willing seller. You can ask it to check a value on form CG34.',
  ],

  sections: [
    {
      id: 'methods', h2: 'What are the main ways to value a business?', toc: 'The three methods',
      body: [
        '<p>There are three, and the right one depends on the business and the reason for the valuation. A sale, a shareholder exit, a divorce and an HMRC return can all need a different basis. Our <a href="/uk/company-services/business-valuation/">business valuation</a> service tests the figure with more than one method and explains which carries the most weight.</p>',
        { caption: 'Business valuation methods compared', head: ['Method', 'How it works', 'Usually suits'], rows: [
          ['Earnings multiple', 'Maintainable profit times a multiple based on comparable businesses and deals', 'Established, profitable trading companies'],
          ['Discounted cash flow', 'Forecast future cash flows, discounted back to today at a rate that reflects the risk', 'Fast-growing companies, or where profits will change sharply'],
          ['Net assets', 'Assets at current value less all liabilities', 'Property and investment companies, loss-making businesses, closures'],
          ['Recent share deals', 'The price paid in a recent arm\'s length investment or share sale, adjusted for share rights', 'Start-ups that have raised money'],
        ], after: 'HMRC\'s Shares and Assets Valuation Manual (SVM110050) looks at recent arm\'s length transactions first, then an appropriate technique.' },
        '<p>Turnover multiples exist, but they ignore costs and are mostly used for early-stage or high-growth businesses that are not yet profitable. For most owner-managed companies, profit and cash drive value.</p>',
      ],
    },
    {
      id: 'earnings-multiple', h2: 'How does an earnings multiple valuation work?', toc: 'Earnings multiples',
      body: [
        '<p>You work out the profit a new owner could expect to keep earning, then multiply it by a figure that reflects risk and growth. The multiple is drawn from sales of similar businesses and from listed companies, then adjusted for size, sector and how much the business depends on its owner.</p>',
        '<p>Profit is often measured as EBITDA (earnings before interest, tax, depreciation and amortisation), which gives enterprise value: the value of the business before debt and cash. To get the value of the shares, you add surplus cash and deduct borrowings, including director and shareholder loans owed by the company.</p>',
        '<h3>What makes the multiple higher or lower?</h3>',
        '<ul><li><strong>Higher:</strong> steady growth, recurring contract income, a spread of customers, a management team that runs the business without the owner, and clean, well-kept records.</li><li><strong>Lower:</strong> reliance on one or two customers or on the owner personally, falling margins, old equipment that needs replacing, and disputes or tax risks a buyer would inherit.</li></ul>',
        '<p>No official source publishes multiples, and averages from published deal indices are only a rough guide. We do not quote rule-of-thumb figures: the right multiple depends on your sector, size and likely buyer.</p>',
      ],
    },
    {
      id: 'adjustments', h2: 'Which adjustments do you make to profit before valuing?', toc: 'Profit adjustments',
      body: [
        '<p>You adjust the accounts to show the profit a buyer would actually earn, often called normalised or maintainable profit. Small changes here move the value more than any debate about the multiple.</p>',
        '<ul><li><strong>Owner pay:</strong> replace what the owners take with the market cost of the roles they do. Owners who pay themselves a small salary and large dividends overstate profit, and the opposite understates it. Our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a> explains why owners pay themselves that way.</li><li><strong>One-off items:</strong> remove costs and income that will not recur, such as a legal dispute, a restructuring or a one-off grant.</li><li><strong>Related-party deals:</strong> adjust rent paid to the owner for the business premises, or family members on the payroll, to market rates.</li><li><strong>Personal costs:</strong> add back expenses that are not needed to run the business.</li></ul>',
        { caption: 'Illustrative example: valuing a company on an earnings multiple', head: ['Step', 'Amount'], rows: [
          ['EBITDA in the latest accounts', '£300,000'],
          ['Add back a one-off legal claim', '+£40,000'],
          ['Owner takes £20,000; a replacement manager would cost £90,000', '-£70,000'],
          ['Rent paid to the owner is £20,000 below market', '-£20,000'],
          ['Maintainable EBITDA', '£250,000'],
          ['Enterprise value at an illustrative multiple of 5', '£1,250,000'],
          ['Add surplus cash, deduct a bank loan (£200,000 less £150,000)', '+£50,000'],
          ['Value of 100% of the shares', '£1,300,000'],
        ], after: 'Illustrative figures only. The multiple of 5 is chosen to keep the arithmetic simple and is not a market figure for any sector.' },
      ],
    },
    {
      id: 'discounted-cash-flow', h2: 'When is discounted cash flow the better method?', toc: 'Discounted cash flow',
      body: [
        '<p>When today\'s profit does not reflect what the business will earn, such as a company that is growing fast, has just won a large contract or is investing heavily. You forecast the cash the business will generate, usually for 5 years, add a value for the years after that, and discount it all back to today.</p>',
        '<p>The discount rate reflects risk. A small private company is riskier than a listed one, so its rate is higher and the value lower. The method is only as good as the forecast, and small changes to the growth rate or discount rate move the answer a lot. That is why we use it alongside an earnings method, and why the forecast needs the same discipline as a cash flow forecast for the bank.</p>',
      ],
    },
    {
      id: 'net-assets', h2: 'When should a business be valued on its net assets?', toc: 'Net assets',
      body: [
        '<p>When the assets, not the profits, are what a buyer is paying for. This usually means property investment companies, companies holding investments or cash, and businesses that make losses or are closing.</p>',
        '<p>Start with the balance sheet and restate each asset at today\'s value: property at market value, stock at what it would really fetch, and debts owed to the company less any that will not be paid. Then deduct every liability, including tax that would arise if the assets were sold. For a profitable trading company, net assets usually sets a floor, and the difference between that and the earnings value is goodwill. In HMRC cases, the Valuation Office Agency values UK land and buildings.</p>',
      ],
    },
    {
      id: 'minority-discounts', h2: 'Is a minority shareholding worth less than its share of the company?', toc: 'Minority discounts',
      body: [
        '<p>Usually, yes. A shareholder who cannot control dividends, directors\' pay or a sale has less to offer a buyer, so their shares are worth less per share than a controlling stake. The size of the discount depends on the facts, and HMRC says court decisions on discounts are not binding rules.</p>',
        '<ul><li><strong>More than 50%:</strong> control of ordinary resolutions, including appointing directors.</li><li><strong>75% or more:</strong> can pass special resolutions, such as changing the articles.</li><li><strong>More than 25%:</strong> can block special resolutions.</li><li><strong>Small holdings:</strong> no control at all, often valued with reference to dividends paid.</li></ul>',
        '<p>Check your articles and any shareholders\' agreement first. They often set how a leaving shareholder\'s shares are valued, for example a pro rata share of the whole company with no discount, and that wording overrides the general approach. When managers buy out an owner, the price is a negotiation on top of these values: see our <a href="/resources/management-buy-out-guide/">management buy-out guide</a>.</p>',
      ],
    },
    {
      id: 'hmrc-valuations', h2: 'How does HMRC value shares for tax?', toc: 'HMRC valuations',
      body: [
        '<p>At open market value: the price expected in a sale between a hypothetical willing seller and a hypothetical willing buyer, who has the information a prudent buyer would ask for. You need it whenever the price actually paid is replaced by market value, or there is no price at all.</p>',
        { caption: 'When you need a tax valuation of shares', head: ['Situation', 'What happens'], rows: [
          ['Gift of shares, or a sale to family below value', 'Capital gains tax on market value. You can ask HMRC to check it on form CG34, at least 3 months before your tax return is due'],
          ['Inheritance tax on death or a lifetime gift', 'Shares valued at the date of the transfer, with business relief applied after'],
          ['EMI share options', 'Market value agreed in advance on form VAL231, valid for 90 days'],
          ['Sale to an employee ownership trust', 'Trustees must take reasonable steps to make sure they do not pay more than market value'],
        ], after: 'Sources: GOV.UK, Shares and assets valuations for tax; HMRC manuals CG59540 and SVM110050. Checked 13 October 2026.' },
        '<p>HMRC\'s Shares and Assets Valuation team aims to agree a value within 4 weeks of having everything it needs. If you cannot agree, the value can go to the tax tribunal. For inheritance tax on company shares, see our guide to <a href="/resources/business-property-relief-2026/">business property relief from 2026</a>, and for option schemes, <a href="/resources/emi-share-options/">EMI share options</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What multiple of profit is a small business worth?', a: 'There is no standard figure. The multiple depends on the sector, size, growth, customer spread and how much the business relies on its owner. Published deal averages are only a rough guide, so a valuation should rest on your own adjusted profits and comparable evidence.' },
    { q: 'What is the difference between enterprise value and equity value?', a: 'Enterprise value is what the business is worth before cash and debt. Equity value is what the shares are worth: enterprise value plus surplus cash, less borrowings such as bank loans and shareholder loans owed by the company.' },
    { q: 'Can I value my business on turnover?', a: 'Sometimes, for early-stage or fast-growing businesses that are not yet profitable. For most established companies, buyers pay for profit and cash, so a turnover figure on its own can be misleading. HMRC also treats sales multiples as a guide only.' },
    { q: 'Can HMRC challenge my share valuation?', a: 'Yes. HMRC can open an enquiry into the value used on a return. You can reduce the risk by asking its Shares and Assets Valuation team to check the figure on form CG34 after the disposal, or on VAL231 before granting EMI options.' },
    { q: 'Is goodwill included in a business valuation?', a: 'Yes. An earnings or cash flow valuation includes goodwill automatically: it is the difference between that value and the net assets. A net assets valuation leaves it out, which is why it often gives a lower figure for a profitable trading company.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/shares-and-assets-valuations-for-tax', 'GOV.UK: Shares and assets valuations for tax'],
    ['https://www.gov.uk/government/publications/sav-post-transaction-valuation-checks-for-capital-gains-cg34', 'HMRC: Form CG34 (post-transaction valuation check)'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg59540', 'HMRC manual CG59540: market value of unquoted shares'],
    ['https://www.gov.uk/hmrc-internal-manuals/shares-and-assets-valuation-manual/svm110050', 'HMRC manual SVM110050: valuation approaches'],
    ['https://www.gov.uk/hmrc-internal-manuals/shares-and-assets-valuation-manual/svm113030', 'HMRC manual SVM113030: case law on valuation'],
    ['https://www.gov.uk/guidance/get-a-share-scheme-valuation-from-hmrc', 'GOV.UK: Get a share scheme valuation from HMRC'],
  ],

  related: [
    '/resources/emi-share-options/',
    '/resources/management-buy-out-guide/',
    '/resources/employee-ownership-trusts/',
    '/resources/business-asset-disposal-relief/',
  ],
};
