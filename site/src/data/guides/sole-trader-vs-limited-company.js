// Guide: /resources/sole-trader-vs-limited-company/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and legislation.gov.uk on 13 October 2026 (sources below).
// Illustrative figures: 2026-27 rates, England, Wales and Northern Ireland bands, all profit taken out,
// company director salary £12,570 plus dividends, no Employment Allowance. Re-check each April and after each Budget.
export default {
  url: '/resources/sole-trader-vs-limited-company/',
  section: 'accounting',
  title: 'Sole Trader vs Limited Company (2026-27) | Severin Finance',
  description: 'Sole trader or limited company in 2026-27? Tax at £30,000 to £100,000 profit, liability, admin and when incorporating makes sense. Free consultation.',
  h1: 'Sole trader vs limited company: which is better for you?',
  crumb: 'Sole trader vs limited company',
  summary: 'Tax, liability, admin and costs compared, with 2026-27 figures at four profit levels.',
  topic: 'Choosing between a sole trader and a limited company',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/limited-company-accountant/', label: 'Our limited company service',
    boxTitle: 'Thinking of incorporating?', text: 'We compare both structures on your real figures, then set up and run the company if it is the right move.',
  },

  hero: {
    answer: 'On tax alone, a sole trader often pays less in 2026-27 if you take out all the profit, because dividend tax rose to 10.75% and 35.75% in April 2026. A limited company usually wins when you leave profit in the business or pay into a pension, and it limits your personal liability for business debts.',
  },

  tldr: [
    'Sole traders pay Income Tax plus <strong>6% Class 4</strong> National Insurance on profits from £12,570 to £50,270 in 2026-27.',
    'Companies pay Corporation Tax at <strong>19% to 25%</strong>, then you pay dividend tax of <strong>10.75%, 35.75% or 39.35%</strong> on what you take out.',
    'If you take every pound out, a sole trader paid less tax in all four of our 2026-27 examples (£30,000 to £100,000 profit).',
    'A company saves tax when profits stay in the business, go into a pension, or you have staff and can claim the Employment Allowance.',
    'A company costs <strong>£100</strong> to register online and must file accounts, a CT600 and a <strong>£50</strong> confirmation statement every year.',
  ],

  sections: [
    {
      id: 'differences', h2: 'What is the difference between a sole trader and a limited company?', toc: 'Key differences',
      body: [
        '<p>A sole trader is you, trading in your own name: the profit is yours and so are the debts. A limited company is a separate legal person that you own and run, so it pays its own tax and its debts are its own. Our <a href="/uk/accounting/limited-company-accountant/">limited company accountants</a> compare the two on your actual figures before you decide.</p>',
        { caption: 'Sole trader and limited company compared', head: ['Area', 'Sole trader', 'Limited company'], rows: [
          ['Liability for debts', 'Unlimited: your personal assets are at risk', 'Limited to what you invested, unless you give a personal guarantee'],
          ['Tax on profits', 'Income Tax and Class 4 National Insurance', 'Corporation Tax, then tax on what you take out'],
          ['Setting up', 'Register for Self Assessment once trading income passes £1,000', 'Register at Companies House before trading (£100 online)'],
          ['Yearly filings', 'Self Assessment return', 'Annual accounts, CT600, confirmation statement, payroll and your own return'],
          ['Privacy', 'Accounts are not published', 'Accounts and director details are on the public register'],
        ], after: 'Source: GOV.UK, Set up a business: legal structures. Checked 13 October 2026.' },
        '<p>Both must register for VAT if their turnover passes the threshold, and both can employ staff.</p>',
      ],
    },
    {
      id: 'tax', h2: 'Which pays less tax in 2026-27?', toc: 'Tax compared',
      body: [
        '<p>If you need to take out all of the profit each year, a sole trader usually pays less tax in 2026-27. The company route has two layers of tax (Corporation Tax, then dividend tax), and the dividend rates rose by 2 percentage points on 6 April 2026.</p>',
        { caption: 'The rates that drive the comparison (2026-27)', head: ['Item', 'Sole trader', 'Limited company'], rows: [
          ['Tax-free amount', '£12,570 personal allowance', '£12,570 personal allowance plus £500 dividend allowance'],
          ['Basic rate band', '20% Income Tax plus 6% Class 4', '19% Corporation Tax (profits to £50,000), then 10.75% on dividends'],
          ['Higher rate band', '40% Income Tax plus 2% Class 4', '19% to 25% Corporation Tax, then 35.75% on dividends'],
          ['Class 2 National Insurance', 'Nothing to pay; treated as paid on profits of £7,105 or more', 'Not applicable'],
        ], after: 'Income Tax bands for England, Wales and Northern Ireland. Scotland has its own bands for salary and trading profits. Corporation Tax rates are for the financial year from 1 April 2026.' },
        { caption: 'Illustrative tax and take-home pay, 2026-27, all profit taken out', head: ['Profit', 'Sole trader: tax', 'Sole trader: take-home', 'Company: total tax', 'Company: take-home'], rows: [
          ['£30,000', '£4,532', '£25,468', '£5,597', '£24,403'],
          ['£50,000', '£9,732', '£40,268', '£11,138', '£38,862'],
          ['£80,000', '£22,289', '£57,711', '£24,235', '£55,765'],
          ['£100,000', '£30,689', '£69,311', '£34,790', '£65,210'],
        ], after: 'Illustrative only. Company figures assume one director, a £12,570 salary, the rest as dividends, no Employment Allowance and no other income. Company tax includes employer National Insurance, Corporation Tax (with Marginal Relief) and dividend tax. Excludes accountancy and filing costs.' },
        '<p>For how the company figures are built, see our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a>.</p>',
      ],
    },
    {
      id: 'company-saves', h2: 'When does a limited company save tax?', toc: 'When a company saves tax',
      body: [
        '<p>A company saves tax when you do not need all the profit now. Profit left in the company has only paid Corporation Tax, at 19% on profits up to £50,000. A sole trader pays Income Tax on all profit as it is earned, whether it is spent or not.</p>',
        '<p>For example, a company making £80,000 could pay you a £12,570 salary and £37,700 of dividends, keeping you in the basic rate band, and leave about £14,800 in the business. Your personal tax for the year would be about £4,000. The retained profit is taxed when you take it out later, so this works best if you can spread it over years when your income is lower.</p>',
        '<p>A company can also help when:</p>',
        '<ul><li><strong>You want to save into a pension.</strong> Employer contributions are a business cost for Corporation Tax and carry no National Insurance.</li><li><strong>You employ other people.</strong> The company can then usually claim the Employment Allowance (£10,500 for 2026-27) against employer National Insurance.</li><li><strong>You plan to reinvest.</strong> Profits used to buy equipment or fund growth are taxed at company rates, not your personal rate.</li></ul>',
        '<p>Our guide to <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how to pay yourself from a limited company</a> covers each of these routes.</p>',
      ],
    },
    {
      id: 'liability', h2: 'Does a limited company protect your personal assets?', toc: 'Liability',
      body: [
        '<p>Yes, in most cases. As a shareholder you can lose what you put into the company, but its debts are not your personal debts. As a sole trader, there is no separation: a supplier or lender can pursue your savings and home.</p>',
        '<p>The protection has limits. Banks and landlords often ask directors for a personal guarantee, which puts you back on the hook for that debt (see our guide to <a href="/resources/personal-guarantees-explained/">personal guarantees</a>). Directors also have legal duties, and can be made personally liable if they keep trading when they know the company cannot pay its debts. Insurance still matters under either structure.</p>',
      ],
    },
    {
      id: 'admin', h2: 'How much more admin does a limited company involve?', toc: 'Admin and costs',
      body: [
        '<p>Noticeably more. A sole trader keeps records and files one Self Assessment return a year. A company has its own filings with Companies House and HMRC, and you still file a personal return for your dividends.</p>',
        { caption: 'Yearly obligations for a limited company', head: ['Obligation', 'When it is due'], rows: [
          ['Annual accounts to Companies House', '9 months after the year end (first accounts: 21 months after incorporation)'],
          ['Corporation Tax payment', '9 months and 1 day after the accounting period ends'],
          ['Company Tax Return (CT600)', '12 months after the accounting period ends'],
          ['Confirmation statement', 'At least every 12 months; £50 online or £110 on paper'],
          ['Payroll (RTI) for a director salary', 'On or before each payday'],
          ['Your Self Assessment return', '31 January after the tax year ends'],
        ], after: 'Sources: GOV.UK, Prepare and file annual accounts; Companies House confirmation statement guidance. Checked 13 October 2026.' },
        '<p>Every director must also verify their identity with Companies House. Penalties for late company accounts start at £150. Our guide to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> lists every date and penalty. Sole traders have their own change: from 6 April 2026, those with qualifying income over £50,000 must use Making Tax Digital and send quarterly updates.</p>',
      ],
    },
    {
      id: 'when-to-incorporate', h2: 'When does incorporating usually make sense?', toc: 'When to incorporate',
      body: [
        '<p>Incorporating usually makes sense when profits are higher than you need to live on, when you face real business risk, or when the structure itself helps the business. Common signs:</p>',
        '<ul><li>you regularly leave profit in the business to reinvest or build a reserve</li><li>you want to make large pension contributions through the business</li><li>you take on staff, premises or contracts with significant liability</li><li>clients or lenders expect to deal with a company</li><li>you plan to bring in investors or co-owners, or sell the business one day</li></ul>',
        '<p>Staying a sole trader often suits you if your profits are modest, you spend most of what you earn, or you value simplicity. Contractors should also check the off-payroll rules before choosing a company: see our guide to <a href="/resources/ir35-explained/">IR35</a>.</p>',
      ],
    },
    {
      id: 'switching', h2: 'How do you move from sole trader to limited company?', toc: 'Switching',
      body: [
        '<p>You form the company, transfer the business into it and close your sole trade. In practice that means:</p>',
        '<ol><li>Register the company at Companies House and verify each director\'s identity. Our <a href="/uk/company-services/company-formation/">company formation</a> team can do this for you.</li><li>Open a business bank account in the company\'s name, and move contracts, insurance and supplier accounts across.</li><li>Register the company for Corporation Tax and, if you will pay a salary, as an employer.</li><li>Deal with VAT: the registration can often transfer to the company.</li><li>Tell HMRC you have stopped trading as a sole trader and file a final Self Assessment return for that business.</li></ol>',
        '<p>Moving assets such as goodwill or equipment into the company is a disposal for Capital Gains Tax. Incorporation Relief can defer the gain if you transfer the whole business and all its assets (except cash) in return for shares. For transfers on or after 6 April 2026, HMRC says you must claim it in your Self Assessment return. Get advice before the transfer date, not after.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is it cheaper to be a sole trader or a limited company in 2026-27?', a: 'If you take out all the profit, a sole trader usually pays less tax in 2026-27, because company profits face Corporation Tax and then dividend tax at 10.75% or 35.75%. A company tends to cost less in tax when you leave profit in the business or use employer pension contributions.' },
    { q: 'At what profit level should I set up a limited company?', a: 'There is no single figure any more. With the 2026-27 dividend rates, the decision depends more on how much profit you leave in the business, your pension plans and your liability risk than on profit alone. We model both options on your figures.' },
    { q: 'Can a sole trader employ people?', a: 'Yes. A sole trader can register as an employer and run payroll in the same way as a company. The difference is that you remain personally liable for the business\'s debts and obligations, including to your staff.' },
    { q: 'Do I still need a tax return if I run a limited company?', a: 'Usually, yes. Directors who receive dividends above their unused personal allowance and £500 dividend allowance must report them to HMRC, and most do so through a Self Assessment return due by 31 January after the tax year.' },
    { q: 'Can I switch back from a limited company to a sole trader?', a: 'Yes, but it is more involved than incorporating. The company must stop trading, settle its debts and tax, and be closed by striking off or a formal liquidation. Taking out the remaining money has its own tax rules, so plan it with an accountant.' },
  ],

  sources: [
    ['https://www.gov.uk/business-legal-structures', 'GOV.UK: Set up a business: legal structures'],
    ['https://www.gov.uk/income-tax-rates', 'GOV.UK: Income Tax rates and allowances'],
    ['https://www.gov.uk/self-employed-national-insurance-rates', 'GOV.UK: Self-employed National Insurance rates'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-corporation-tax/rates-and-allowances-corporation-tax', 'GOV.UK: Rates and allowances for Corporation Tax'],
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
    ['https://www.gov.uk/limited-company-formation/register-your-company', 'GOV.UK: Register a limited company'],
    ['https://www.gov.uk/guidance/confirmation-statement-guidance', 'Companies House: Confirmation statement guidance'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg65700', 'HMRC Capital Gains Manual: Incorporation relief (CG65700)'],
  ],

  related: [
    '/resources/how-to-pay-yourself-from-a-limited-company/',
    '/resources/salary-vs-dividends/',
    '/resources/limited-company-deadlines/',
    '/resources/ir35-explained/',
  ],
};
