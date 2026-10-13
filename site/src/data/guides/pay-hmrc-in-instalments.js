// Guide: /resources/pay-hmrc-in-instalments/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC's online service, legislation.gov.uk and the Bank of England on 13 October 2026.
// GOV.UK now only states an online limit for Self Assessment (£30,000). Re-check interest after each Bank Rate change.
export default {
  url: '/resources/pay-hmrc-in-instalments/',
  section: 'tax',
  title: 'Pay HMRC in Instalments: Time to Pay | Severin Finance',
  description: 'Pay HMRC in instalments: online Self Assessment plans up to £30,000, Time to Pay for VAT and PAYE, what HMRC asks, 7.75% interest. Free consultation.',
  h1: 'How to pay HMRC in instalments',
  crumb: 'Paying HMRC in instalments',
  summary: 'Self Assessment plans online up to £30,000, Time to Pay for other taxes, and what interest costs.',
  topic: 'HMRC payment plans and Time to Pay arrangements',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/tax-bill-funding/', label: 'Our tax bill funding service',
    boxTitle: 'Tax bill you cannot pay?', text: 'We check the bill, compare an HMRC payment plan with funding, and help you pick the cheaper, safer route.',
  },

  hero: {
    answer: 'Yes, HMRC lets you pay a tax bill in monthly instalments if it agrees the plan is affordable. If you owe £30,000 or less in Self Assessment and your returns are filed, you can usually set it up online. Larger debts and other taxes need HMRC to agree a Time to Pay plan. Interest runs at 7.75% a year.',
  },

  tldr: [
    '<strong>£30,000 or less</strong> of Self Assessment tax: set up a payment plan online, if your returns are up to date.',
    'Bigger debts, VAT, PAYE and corporation tax: contact HMRC for a <strong>Time to Pay</strong> arrangement.',
    'HMRC usually asks for about <strong>half of what you have left</strong> each month after essential spending.',
    'Interest is charged at <strong>7.75% a year</strong> (Bank Rate 3.75% plus 4%) until the debt is cleared.',
    'Agree a plan before a penalty date and keep to it, and late payment penalties are normally held off.',
  ],

  sections: [
    {
      id: 'can-you-pay-in-instalments', h2: 'Can you pay HMRC in instalments?', toc: 'Can you?',
      body: [
        '<p>Yes. If you cannot pay a tax bill in full, HMRC may agree a payment plan, often called a Time to Pay arrangement, so you clear the debt in monthly instalments by Direct Debit. HMRC first checks that the plan is affordable for you. If you cannot agree one, HMRC will ask for the full amount. Our <a href="/uk/business-finance/tax-bill-funding/">tax bill funding</a> team compares an HMRC plan with a short-term loan, so you can see which costs less and which HMRC is likely to accept.</p>',
        '<p>Plans cover overdue Self Assessment, VAT, PAYE, corporation tax and other taxes. The route depends on the tax and the amount.</p>',
        { caption: 'Which route applies to your debt', head: ['Your situation', 'How to set up a plan'], rows: [
          ['Self Assessment, £30,000 or less, returns filed', 'Online, through HMRC\'s payment plan service'],
          ['Self Assessment over £30,000, or other conditions not met', 'Call the Self Assessment payment helpline on 0300 123 1813'],
          ['VAT, PAYE, corporation tax and other taxes', 'Use HMRC\'s online service if you are offered it, otherwise contact HMRC'],
          ['Bill not yet due (Self Assessment)', 'A Budget Payment Plan: pay weekly or monthly in advance'],
        ], after: 'Source: GOV.UK, If you cannot pay your tax bill on time, and HMRC\'s payment plan eligibility page. Checked 13 October 2026.' },
      ],
    },
    {
      id: 'self-assessment-plan', h2: 'How do you set up a Self Assessment payment plan online?', toc: 'Self Assessment plans',
      body: [
        '<p>You can set up a plan online, without calling HMRC, if you owe £30,000 or less and meet the conditions below. You must file your return first, because HMRC cannot set up a plan for a bill it has not calculated. For the 2025-26 tax year, that means filing by 31 January 2027, the same day the tax is due.</p>',
        '<p>You will not be able to set up a plan online if:</p>',
        '<ul><li>you are not up to date with your tax returns</li><li>you owe more than £30,000</li><li>you have other tax debts</li><li>you already have another HMRC payment plan</li><li>you need another account holder to sign to authorise a Direct Debit</li><li>you are not named on the UK bank account you would pay from</li></ul>',
        '<p>If any of these apply, call HMRC on 0300 123 1813 (Monday to Friday, 8am to 6pm) to ask whether a plan can be set up by phone. You will need your Unique Taxpayer Reference (UTR), your bank details and figures for your income and spending. Check your deadlines first in our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a>.</p>',
      ],
    },
    {
      id: 'business-taxes', h2: 'Can a business get Time to Pay for VAT, PAYE or corporation tax?', toc: 'Business taxes',
      body: [
        '<p>Yes, but HMRC expects a business to reduce the debt as far as it can before agreeing a plan. For company tax debts, HMRC may ask you to release assets such as stock, vehicles or shares first. It may also ask directors to put personal funds into the business, take on lending or extend credit.</p>',
        '<p>Contact HMRC before the due date if you can. For VAT, timing changes the penalties you face, because VAT late payment penalties start once the tax is more than 15 days late.</p>',
        { caption: 'VAT late payment penalties and when to ask for Time to Pay', head: ['VAT paid', 'Penalty', 'When to ask HMRC'], rows: [
          ['Up to 15 days late', 'None, interest only', 'Ask on or before day 15 to avoid penalties from day 16'],
          ['16 to 30 days late', '3% of the VAT owed on day 15', 'Ask by day 30 to avoid the higher penalties'],
          ['31 days or more late', 'A further 3% of the VAT owed on day 30, plus a daily penalty at 10% a year', 'Ask now to stop the daily penalty growing'],
        ], after: 'Source: GOV.UK, How late payment penalties work if you pay VAT late. If you break an agreed plan, HMRC can charge the penalties as if the plan never existed.' },
        '<p>Our guide to <a href="/resources/vat-penalties/">VAT penalties</a> covers late returns as well as late payment. If the business needs cash to meet the bill, a <a href="/resources/cash-flow-forecasting/">cash flow forecast</a> is usually the first thing HMRC or a lender wants to see.</p>',
      ],
    },
    {
      id: 'what-hmrc-asks', h2: 'What will HMRC ask before agreeing a plan?', toc: 'What HMRC asks',
      body: [
        '<p>HMRC wants to know what you can afford. Expect to be asked:</p>',
        '<ul><li>whether you can pay the bill in full, and if not, how much you can pay each month</li><li>whether you owe any other taxes</li><li>how much you earn</li><li>how much you usually spend each month on rent or mortgage, food, utilities and fixed bills</li><li>what savings or investments you have</li></ul>',
        '<p>HMRC usually asks you to pay around half of what you have left each month after essential spending. It expects you to use savings and assets to cut the debt as much as possible, but it does not count your pension pot as savings. If you are getting help from a debt adviser, HMRC accepts a Standard Financial Statement as evidence of your income and spending.</p>',
        { caption: 'Illustrative example: a £12,000 Self Assessment bill', head: ['Step', 'Figure'], rows: [
          ['Monthly income after tax', '£4,000'],
          ['Essential monthly spending', '£2,000'],
          ['Left over each month', '£2,000'],
          ['Likely monthly payment (about half)', '£1,000'],
          ['Time to clear the £12,000', 'About 12 months, plus interest of roughly £500 at 7.75%'],
        ], after: 'Illustrative round numbers only. HMRC decides each case, and the interest depends on how quickly you pay.' },
        '<p>There is no fixed time limit on a plan. It depends on how much you owe and what you can afford. Paying more each month means less interest overall.</p>',
      ],
    },
    {
      id: 'interest-and-penalties', h2: 'Do you still pay interest and penalties on a payment plan?', toc: 'Interest and penalties',
      body: [
        '<p>You pay interest, but an agreed plan normally stops further late payment penalties. HMRC charges late payment interest at the Bank of England Bank Rate plus 4%. Bank Rate is 3.75%, so HMRC\'s rate has been 7.75% a year since 9 January 2026. It is added to your plan payments and changes when Bank Rate changes. The next Bank Rate decision is due on 5 November 2026.</p>',
        '<p>Penalties work differently. Under the late payment penalty rules for Self Assessment, if you ask for time to pay and HMRC agrees before a penalty date, that penalty is not charged while you keep to the plan. If you break the plan, HMRC can charge it later. For people already using Making Tax Digital for Income Tax, GOV.UK says penalties are paused from the date you contacted HMRC, as long as you agree a plan and keep to it.</p>',
        { caption: 'Self Assessment late payment penalties (if no plan is agreed)', head: ['Tax still unpaid at', 'Penalty'], rows: [
          ['30 days after the due date', '5% of the tax unpaid'],
          ['6 months', 'A further 5% of the tax unpaid'],
          ['12 months', 'A further 5% of the tax unpaid'],
        ], after: 'Source: GOV.UK, Self Assessment penalties, and Finance Act 2009, Schedule 56, paragraph 10 (penalty suspended while a deferral agreement is kept).' },
        '<p>Penalties for late filing are separate and are not covered by a payment plan. Our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a> explains the full system and how to appeal.</p>',
      ],
    },
    {
      id: 'budget-payment-plan', h2: 'Can you pay towards next year\'s bill in advance?', toc: 'Paying in advance',
      body: [
        '<p>Yes, with a Budget Payment Plan, if you are up to date with your last Self Assessment bill. You choose to pay weekly or monthly by Direct Debit, and the payments are credited against your next bill, so less is due on 31 January and 31 July.</p>',
        '<p>You set it up in your HMRC online account, under Direct Debit. You decide the amount and can pause payments for up to 6 months. If your payments do not cover the whole bill, you pay the difference by the deadline. If you overpay, you can ask for a refund. No interest is charged, because the tax is not yet late.</p>',
      ],
    },
    {
      id: 'if-you-do-not-pay', h2: 'What happens if you miss a payment or do not contact HMRC?', toc: 'If you do not pay',
      body: [
        '<p>If you miss a plan payment, HMRC contacts you to find out why and tries to rearrange the plan. If your circumstances change, tell HMRC: plans can be made longer or shorter, and a new tax bill can sometimes be added to an existing plan.</p>',
        '<p>If you ignore the debt, HMRC will try to reach you by letter, text or a visit. It can then:</p>',
        '<ul><li>pass the debt to a debt collection agency</li><li>take what you owe from your wages or pension</li><li>take and sell your belongings, or take money from your bank or building society (England, Wales and Northern Ireland)</li><li>take you to court or make you bankrupt</li><li>close down your company, if the debt is a business tax</li></ul>',
        '<p>HMRC must tell you before it takes these steps. You cannot appeal HMRC\'s decision on a payment plan, but you can complain about how you were treated. Free debt advice is available from MoneyHelper, Citizens Advice and, in Northern Ireland, Advice NI.</p>',
      ],
    },
    {
      id: 'loan-or-time-to-pay', h2: 'Is a loan better than an HMRC payment plan?', toc: 'Loan or Time to Pay',
      body: [
        '<p>Sometimes. An HMRC plan costs interest at 7.75% a year with no arrangement fees, but HMRC must agree it and may ask a business to sell assets first. A loan pays HMRC on time and gives you a fixed repayment schedule, but it has its own interest and fees, and the lender decides whether to lend.</p>',
        '<p>Compare the total cost of each, and what happens if trading dips. We arrange finance with lenders where it fits, and we always check the tax bill and the HMRC route first. Finance is subject to status and lender approval. To talk it through, <a href="/contact/">contact us</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is HMRC Time to Pay?', a: 'Time to Pay is HMRC\'s name for a payment plan that lets you clear an overdue tax bill in monthly instalments. HMRC checks the plan is affordable before agreeing it, and charges interest at 7.75% a year on the balance until it is paid.' },
    { q: 'How much can I owe HMRC and still set up a plan online?', a: 'For Self Assessment, up to £30,000, as long as your returns are filed, you have no other tax debts or HMRC payment plans, and you can set up a Direct Debit from a UK account in your name. Above that, call HMRC on 0300 123 1813.' },
    { q: 'How long can an HMRC payment plan last?', a: 'There is no fixed time limit. HMRC sets the length from how much you owe and what you can afford each month, usually around half of what is left after essential spending. You can ask to make the plan longer or shorter if your circumstances change.' },
    { q: 'Can I add another tax bill to my HMRC payment plan?', a: 'You may be able to. If a new bill arrives that you cannot pay, contact HMRC before it falls due and ask to add it to your existing plan. HMRC will check the new monthly amount is still affordable, and interest runs on the whole balance.' },
    { q: 'Can I set up a payment plan before I file my tax return?', a: 'Not for an overdue bill. HMRC needs your return to work out what you owe, so file first. If you simply want to spread the cost of a future bill, a Budget Payment Plan lets you pay weekly or monthly in advance.' },
  ],

  sources: [
    ['https://www.gov.uk/difficulties-paying-hmrc', 'GOV.UK: If you cannot pay your tax bill on time'],
    ['https://www.tax.service.gov.uk/pay-what-you-owe-in-instalments/eligibility/call-us', 'HMRC: Self Assessment payment plan eligibility'],
    ['https://www.gov.uk/pay-self-assessment-tax-bill/pay-weekly-monthly', 'GOV.UK: Budget Payment Plan'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates'],
    ['https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late', 'GOV.UK: VAT late payment penalties'],
    ['https://www.gov.uk/self-assessment-tax-returns/penalties', 'GOV.UK: Self Assessment penalties'],
    ['https://www.legislation.gov.uk/ukpga/2009/10/schedule/56/paragraph/10', 'legislation.gov.uk: Finance Act 2009, Schedule 56, paragraph 10'],
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
  ],

  related: [
    '/resources/self-assessment-deadlines/',
    '/resources/vat-penalties/',
    '/resources/hmrc-penalties-explained/',
    '/resources/cash-flow-forecasting/',
  ],
};
