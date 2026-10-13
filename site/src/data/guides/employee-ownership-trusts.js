// Guide: /resources/employee-ownership-trusts/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and legislation.gov.uk on 13 October 2026 (sources below). Also checked:
// Finance Act 2026 s35 (50% relief for disposals from 26 November 2025, now law); CG67801; CG67820 to CG67828
// (trustee residence, independence and consideration requirements from 30 October 2024, inserted by Finance Act 2025);
// CG67860 (clawback to the end of the fourth tax year after the disposal year; s280 instalments);
// TCGA 1992 ss236LA, 236M, 236N (less than 50% excluded participators; more than 50% control; 2/5 participator fraction);
// ITEPA 2003 ss312A and 312C, EIM03050 (£3,600 per tax year, income tax only, NICs due, directors may be excluded).
// Not stated because not verified: what happens to the trustees after the clawback period ends.
// Re-check each April and after each Budget.
export default {
  url: '/resources/employee-ownership-trusts/',
  section: 'company-services',
  title: 'Employee Ownership Trusts: Tax Rules 2026 | Severin Finance',
  description: 'Selling to an employee ownership trust: 50% CGT relief from 26 November 2025, trustee rules, control tests and £3,600 tax-free bonuses. Free consultation.',
  h1: 'Employee ownership trusts: how selling to your staff is taxed',
  crumb: 'Employee ownership trusts',
  summary: 'Sell control of your company to a trust for your staff: half the gain is now relieved from capital gains tax.',
  topic: 'Employee ownership trusts (EOTs) and capital gains tax relief',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/succession-planning/', label: 'Our succession planning service',
    boxTitle: 'Thinking of selling to your staff?', text: 'We compare an EOT sale with your other exit routes, model the price and the funding, and work with your solicitor to completion.',
  },

  hero: {
    answer: 'An employee ownership trust buys a controlling stake in your trading company for the benefit of all its employees. For sales on or after 26 November 2025, half of your gain is free of capital gains tax and half is taxed. The company can then pay each employee up to £3,600 a year in bonuses free of income tax.',
  },

  tldr: [
    'Sales from <strong>26 November 2025</strong>: <strong>50%</strong> of the gain is relieved, 50% is taxed. Before that, the whole gain was relieved.',
    'The trust must hold <strong>more than 50%</strong> of the shares, votes, profits and assets by the end of the tax year of the sale.',
    'Since <strong>30 October 2024</strong>, trustees must be UK resident, former owners must not control the trust, and the price must not exceed market value.',
    'Business Asset Disposal Relief cannot be claimed on the same sale.',
    'Breach the rules before the end of the <strong>fourth tax year</strong> after the sale and you lose the relief.',
    'Employees can receive up to <strong>£3,600</strong> of bonuses a tax year free of income tax. National Insurance still applies.',
  ],

  sections: [
    {
      id: 'what-is-an-eot', h2: 'What is an employee ownership trust?', toc: 'What an EOT is',
      body: [
        '<p>It is a trust that owns a controlling interest in a trading company and holds it for the benefit of all the employees, on the same terms. The owners sell their shares to the trustees, and the company usually pays the price over several years out of its profits. Our <a href="/uk/company-services/succession-planning/">succession planning</a> team compares this route with a management buy-out or a trade sale, because the right answer depends on the price, the timing and who you want to run the business.</p>',
        '<p>Employees do not buy shares or pay anything. They benefit indirectly, through the trust owning the company, and directly through tax-free bonuses. The existing managers usually carry on running the business, with a board that answers to the trustees.</p>',
      ],
    },
    {
      id: 'cgt-relief', h2: 'How much capital gains tax do you pay selling to an EOT?', toc: 'The CGT relief',
      body: [
        '<p>For sales on or after 26 November 2025, half of your gain is taxed at the normal capital gains tax rates and half is relieved. The relieved half is not lost to HMRC: it reduces the trustees\' base cost, so it is taxed if the trust ever sells the shares.</p>',
        { caption: 'EOT capital gains tax relief by date of sale', head: ['Date of sale', 'Gain relieved', 'Gain taxed'], rows: [
          ['Up to 25 November 2025', '100%', 'None'],
          ['From 26 November 2025', '50%', '50%, at the normal rates (18% or 24% in 2026-27)'],
        ], after: 'Source: HMRC helpsheet HS277 and Capital Gains Manual CG67801; Finance Act 2026, section 35. Checked 13 October 2026.' },
        '<p>You cannot also claim Business Asset Disposal Relief or Investors\' Relief on a sale where you claim EOT relief. For a large gain the EOT route can still leave you with less tax, as this example shows.</p>',
        { caption: 'Illustrative example: a £5 million gain on selling a company in 2026-27', head: ['Step', 'Sale to an EOT', 'Trade sale with BADR'], rows: [
          ['Gain on the shares', '£5,000,000', '£5,000,000'],
          ['Gain relieved', '£2,500,000 (50%)', 'None'],
          ['Taxed at 18% with BADR', 'Not available', '£1,000,000 = £180,000'],
          ['Taxed at 24%, after the £3,000 annual exempt amount', '£2,497,000 = £599,280', '£3,997,000 = £959,280'],
          ['Total capital gains tax', '£599,280', '£1,139,280'],
        ], after: 'Illustrative figures only. Assumes a higher rate taxpayer with no other gains and the full £1 million BADR limit unused. A trade sale usually pays more cash on completion, and an EOT price is capped at market value.' },
        '<p>Our guide to <a href="/resources/business-asset-disposal-relief/">Business Asset Disposal Relief</a> explains the other side of that comparison.</p>',
      ],
    },
    {
      id: 'conditions', h2: 'Which conditions must an EOT sale meet?', toc: 'The conditions',
      body: [
        '<p>Eight, and most must be met at the time of the sale and for the rest of that tax year. You claim the relief on your tax return, giving details of the trust, the shares, the price and the number of employees.</p>',
        { caption: 'EOT relief requirements', head: ['Requirement', 'What it means'], rows: [
          ['Trading', 'The company is a trading company, or the holding company of a trading group'],
          ['All-employee benefit', 'The trust benefits all eligible employees on the same terms. Benefits can vary only by pay, length of service or hours worked'],
          ['Controlling interest', 'The trustees hold more than 50% of the ordinary shares and votes, and are entitled to more than 50% of profits and of assets on a winding up'],
          ['Limited participation', 'Shareholders with 5% or more who work for the company, and people connected with them, make up no more than 2/5 of the workforce'],
          ['Trustee residence (from 30 October 2024)', 'The trustees, as a single body, are UK resident'],
          ['Trustee independence (from 30 October 2024)', 'Less than 50% of the trustees are former owners or people connected with them, and they do not control the trust'],
          ['Consideration (from 30 October 2024)', 'Trustees take all reasonable steps to make sure the price does not exceed market value and any interest on deferred payments is a reasonable commercial rate'],
          ['Related disposal', 'The relief applies only to sales in the tax year the trust first acquires control'],
        ], after: 'Sources: HMRC Capital Gains Manual CG67820 to CG67828 and the Taxation of Chargeable Gains Act 1992, sections 236H to 236U.' },
        '<p>In practice, trustees meet the price test by getting an independent valuation and considering it properly. Our guide on <a href="/resources/how-to-value-a-business/">how to value a business</a> explains how that figure is reached.</p>',
      ],
    },
    {
      id: 'clawback', h2: 'Can you lose the relief after the sale?', toc: 'Losing the relief',
      body: [
        '<p>Yes. If a disqualifying event happens before the end of the fourth tax year after the tax year of the sale, your claim is revoked and the gain is taxed as if you had never claimed. For a sale in 2026-27, that period runs to 5 April 2031.</p>',
        '<ul><li>The company stops trading, or the trust stops holding a controlling interest.</li><li>The trustees stop being UK resident, or former owners take control of the trust.</li><li>The trust stops benefiting all employees on the same terms.</li><li>The participator fraction goes above 2/5, unless it lasts no more than 6 months and is outside the trustees\' control.</li></ul>',
        '<p>HMRC can reopen the tax even if the normal time limits have passed. For sales before 30 October 2024 the period was shorter, ending with the tax year after the sale. Build these rules into the trust deed and the company\'s articles before you sell.</p>',
      ],
    },
    {
      id: 'tax-free-bonuses', h2: 'How do the £3,600 tax-free bonuses work?', toc: 'Tax-free bonuses',
      body: [
        '<p>A company owned by an EOT can pay each employee cash bonuses of up to £3,600 in a tax year without income tax. National Insurance is still due as normal, from both employer and employee, so the payments still go through payroll.</p>',
        '<ul><li><strong>Everyone can take part:</strong> all employees must be eligible, although you can exclude people with less than 12 months\' service, and since Finance Act 2025, directors.</li><li><strong>Same terms:</strong> awards can be shared out equally or by reference to pay, length of service or hours worked.</li><li><strong>Cash only:</strong> shares or other benefits do not qualify.</li><li><strong>Groups share one limit:</strong> companies in the same group share a single £3,600 limit for each employee.</li></ul>',
        '<p>Bonuses above £3,600 are taxed as normal earnings. Our <a href="/uk/accounting/payroll-services/">payroll services</a> team can run the payments and report them correctly.</p>',
      ],
    },
    {
      id: 'funding', h2: 'How is the sale to an EOT paid for?', toc: 'Paying for the sale',
      body: [
        '<p>Usually by the company, over time. The company makes contributions to the trust out of its profits, and the trustees use them to pay you. Since 30 October 2024, contributions to repay the seller and meet set-up costs are not taxed as distributions, if the conditions are met.</p>',
        '<ul><li><strong>Deferred payments:</strong> an upfront amount from the company\'s cash or a bank loan, with the rest paid over several years. Interest on the deferred amount must be at a reasonable commercial rate.</li><li><strong>Tax by instalments:</strong> capital gains tax is due for the tax year of the sale, even though you are paid later. If payments are spread over more than 18 months, you can apply to HMRC to pay the tax in instalments under section 280 of the Taxation of Chargeable Gains Act 1992.</li><li><strong>Cash flow risk:</strong> if profits fall, payments to you slow down. A forecast showing the company can afford the payments, its tax and investment is essential.</li></ul>',
        '<p>If your managers want to own the company directly instead, our <a href="/resources/management-buy-out-guide/">management buy-out guide</a> covers that route, and our <a href="/uk/business-finance/business-loans/">business loans</a> team can look at bank funding for either.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is selling to an employee ownership trust still worth it after the 2025 Budget?', a: 'It can be. Half the gain is still relieved, which can beat Business Asset Disposal Relief on large gains. Against that, the price is capped at market value and usually paid over years. Compare the after-tax cash and the timing with a trade sale.' },
    { q: 'Can I stay on as a director after selling to an EOT?', a: 'Yes, many sellers do. But former owners and people connected with them must make up less than half of the trustees and must not control the trust. If you keep 5% or more of the shares, you also count towards the limited participation test.' },
    { q: 'Do employees pay tax on EOT bonuses?', a: 'Cash bonuses of up to £3,600 per employee in a tax year are free of income tax if the scheme is open to all employees on the same terms. National Insurance is still payable by the employee and the employer.' },
    { q: 'Can I sell less than half my company to an EOT?', a: 'Not with the relief, unless it gives the trust control. The trustees must hold more than 50% of the shares, votes, profits and assets by the end of the tax year of the sale. Relief only applies to sales in the tax year they first gain control.' },
    { q: 'Do EOT trustees have to be UK resident?', a: 'Yes, for sales on or after 30 October 2024. The trustees, taken as a single body, must be UK resident at the time of the sale and for the rest of that tax year. If they stop being UK resident later, the relief can be withdrawn.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/employee-ownership-trusts-and-capital-gains-tax-self-assessment-helpsheet-hs277/hs277-employee-ownership-trusts-and-capital-gains-tax-2026--2', 'HMRC helpsheet HS277: Employee ownership trusts'],
    ['https://www.gov.uk/government/publications/capital-gains-tax-employee-ownership-trusts/capital-gains-tax-employee-ownership-trusts-relief-reduction', 'GOV.UK: EOT relief reduction (Budget 2025)'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg67820', 'HMRC manual CG67820: EOT relief requirements'],
    ['https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg67860', 'HMRC manual CG67860: disqualifying events'],
    ['https://www.gov.uk/government/publications/changes-to-the-taxation-of-employee-ownership-trusts-and-employee-benefit-trusts/taxation-of-employee-ownership-trusts-and-employee-benefit-trusts', 'GOV.UK: EOT changes from 30 October 2024'],
    ['https://www.gov.uk/hmrc-internal-manuals/employment-income-manual/eim03050', 'HMRC manual EIM03050: EOT bonus exemption'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/contents', 'Finance Act 2026 (section 35)'],
  ],

  related: [
    '/resources/management-buy-out-guide/',
    '/resources/business-asset-disposal-relief/',
    '/resources/how-to-value-a-business/',
    '/resources/emi-share-options/',
  ],
};
