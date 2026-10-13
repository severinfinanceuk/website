// Guide: /resources/business-loan-interest-rates-uk/. Layout: src/layouts/GuidePage.astro.
// Facts checked on the Bank of England, GOV.UK and legislation.gov.uk on 13 October 2026 (sources below).
// Bank Rate 3.75% since 18 December 2025; held in June, July and September 2026; next decision 5 November 2026.
// No market rate ranges: no official source publishes typical lender rates. The flat rate example is arithmetic only.
// Re-check after each Bank Rate decision.
export default {
  url: '/resources/business-loan-interest-rates-uk/',
  section: 'business-finance',
  title: 'Business Loan Interest Rates UK | Severin Finance',
  description: 'What sets UK business loan interest rates: Bank Rate (3.75% in October 2026), risk, security and term, plus APR vs flat rate and fees. Free consultation.',
  h1: 'Business loan interest rates in the UK',
  crumb: 'Business loan rates',
  summary: 'What sets your rate, how Bank Rate feeds in, APR vs flat rate, the fees on top and how to compare offers.',
  topic: 'Business loan interest rates in the UK',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/business-loans/', label: 'Our business loans service',
    boxTitle: 'Want offers compared?', text: 'We arrange finance with lenders, set each offer out on the same basis and explain the total cost, the security and the small print.',
  },

  hero: {
    answer: 'There is no single business loan rate. Each lender sets your rate from its own cost of funds, which follows the Bank of England\'s Bank Rate of 3.75%, plus a margin for risk. Security, the term, the loan size and your trading record move that margin. Compare offers on the total cost, including fees, not the headline rate.',
  },

  tldr: [
    'Bank Rate is <strong>3.75%</strong>, unchanged since <strong>18 December 2025</strong>. The next decision is on <strong>5 November 2026</strong>.',
    'Variable rates are usually priced as Bank Rate (or another reference rate) <strong>plus a margin</strong>; fixed rates do not move.',
    'Security, a longer trading record and strong cash flow usually lower the margin.',
    'A <strong>flat rate</strong> looks much lower than the <strong>APR</strong> on the same loan, because it ignores what you have already repaid.',
    'Fees, early repayment charges and personal guarantees all belong in the comparison.',
  ],

  sections: [
    {
      id: 'what-rate', h2: 'What interest rate will you pay on a business loan?', toc: 'Your rate',
      body: [
        '<p>Your rate is set by the lender for your business, so nobody can quote a fair figure until a lender has seen your accounts. Two companies borrowing the same amount on the same day can be offered very different rates. When our <a href="/uk/business-finance/business-loans/">business loans</a> team arranges finance with lenders, we set every offer out on the same basis so you can see the real difference.</p>',
        '<p>The one fixed public rate is the government-backed Start Up Loan: 7.5% a year, fixed, on £500 to £25,000 per person for businesses trading for less than 5 years. Under the Growth Guarantee Scheme, the lender sets the rate and fees, even though the government guarantees 70% of the facility to the lender.</p>',
      ],
    },
    {
      id: 'bank-rate', h2: 'How does Bank Rate affect business loan rates?', toc: 'Bank Rate',
      body: [
        '<p>Bank Rate is the rate the Bank of England pays banks on money they hold with it, and it shapes what lenders pay for their own funds. The Bank of England explains that when Bank Rate goes up, banks usually charge more on loans, and when it goes down they usually charge less.</p>',
        { caption: 'Bank of England Bank Rate', head: ['Item', 'Detail'], rows: [
          ['Current Bank Rate', '3.75%'],
          ['In force since', '18 December 2025'],
          ['Recent decisions', 'Held at 3.75% on 18 June, 30 July and 17 September 2026'],
          ['Next decision', '5 November 2026'],
        ], after: 'Source: Bank of England, Interest rates and Bank Rate. Checked 13 October 2026.' },
        '<p>How a change reaches you depends on the type of loan:</p>',
        '<ul><li><strong>Variable rate:</strong> usually quoted as Bank Rate, or another market reference rate, plus a margin. If Bank Rate moves, your rate and repayments move with it, usually from a date set in the agreement.</li><li><strong>Fixed rate:</strong> stays the same for the fixed period. Lenders price expected rate changes in at the start.</li><li><strong>Overdrafts and revolving credit:</strong> usually variable, and the lender can often review the margin when the facility is renewed.</li></ul>',
      ],
    },
    {
      id: 'what-sets-the-margin', h2: 'What makes a lender charge you more or less?', toc: 'Risk and margin',
      body: [
        '<p>The margin above the lender\'s funding cost reflects how likely it thinks you are to repay and how much it could recover if you do not. These are the main factors.</p>',
        { caption: 'What moves the margin on a business loan', head: ['Factor', 'Usually lowers the rate', 'Usually raises the rate'], rows: [
          ['Security', 'Property or assets the lender can take', 'Unsecured, relying on a personal guarantee'],
          ['Trading history', 'Several years of filed accounts', 'Start-up or first year of trading'],
          ['Affordability', 'Repayments well covered by profit and cash flow', 'Repayments close to what the business earns'],
          ['Credit record', 'Clean business and personal files', 'Missed payments, court judgments, late filings'],
          ['Term', 'Matched to the life of the asset or project', 'Long term with no security'],
          ['Loan size', 'Larger loans spread the lender\'s fixed costs', 'Small loans, where fees weigh more'],
          ['Sector', 'Steady, predictable income', 'Seasonal or volatile income'],
        ], after: 'A general guide. Each lender weighs these factors differently.' },
        '<p>A personal guarantee does not always lower the rate, but it often decides whether an unsecured loan is offered at all. Our guide to <a href="/resources/personal-guarantees-explained/">personal guarantees</a> explains what you are signing. Current, accurate accounts help with every factor in the table, which is why our <a href="/uk/accounting/bookkeeping-services/">bookkeeping</a> and finance teams work together.</p>',
      ],
    },
    {
      id: 'apr-vs-flat-rate', h2: 'What is the difference between APR and a flat rate?', toc: 'APR vs flat rate',
      body: [
        '<p>A flat rate charges interest on the full original loan for the whole term, even though you repay part of it every month. An APR (annual percentage rate) is worked out on the balance you actually owe and includes the fees, so it shows the true yearly cost. The same loan can look half as expensive when quoted as a flat rate.</p>',
        { caption: 'Worked example: £10,000 over 3 years at a 5% flat rate (illustrative)', head: ['Step', 'Calculation', 'Result'], rows: [
          ['Interest for one year', '£10,000 × 5%', '£500'],
          ['Interest for the term', '£500 × 3 years', '£1,500'],
          ['Total repayable', '£10,000 + £1,500', '£11,500'],
          ['Monthly repayment', '£11,500 ÷ 36', '£319.44'],
          ['Equivalent APR, no fees', 'Interest on the reducing balance', 'About 9.7%'],
          ['Equivalent APR with a £300 fee taken from the loan', 'You receive £9,700 but repay £11,500', 'About 12.0%'],
        ], after: 'Illustrative arithmetic only, not a market rate. Real offers depend on the lender and your business.' },
        '<p>Loans to limited companies are not regulated consumer credit, so the lender does not have to quote an APR. Loans of more than £25,000 for business purposes are exempt too, whoever borrows. Smaller loans to sole traders and partnerships of two or three partners can be regulated, which brings consumer credit protections. If an offer only shows a flat rate or a monthly figure, ask for the total amount repayable and work out the comparison yourself.</p>',
      ],
    },
    {
      id: 'fees', h2: 'What fees come on top of the interest?', toc: 'Fees',
      body: [
        '<p>Fees can add as much to the cost as the rate itself, especially on short or small loans. Ask for every fee in writing before you accept.</p>',
        '<ul><li><strong>Arrangement fee:</strong> charged by the lender, often deducted from the loan, so you receive less than you borrow.</li><li><strong>Broker or adviser fee:</strong> ask any broker how they are paid, whether by you, by the lender as commission, or both.</li><li><strong>Valuation and legal fees:</strong> for secured loans, usually paid by you even if the loan does not go ahead.</li><li><strong>Early repayment charge:</strong> common on fixed-rate loans. Start Up Loans have none.</li><li><strong>Renewal and non-utilisation fees:</strong> on overdrafts and revolving facilities, charged on the limit, not just what you use.</li><li><strong>Default interest and charges:</strong> a higher rate if you miss payments or break a covenant.</li></ul>',
      ],
    },
    {
      id: 'fixed-or-variable', h2: 'Should you choose a fixed or variable rate?', toc: 'Fixed or variable',
      body: [
        '<p>Choose fixed if you need certain repayments; consider variable if you can absorb a rise and want flexibility. Neither is cheaper in every case, because a fixed rate already includes the lender\'s view of where rates are heading.</p>',
        '<p>Test a variable loan in your <a href="/resources/cash-flow-forecasting/">cash flow forecast</a>: add 1 or 2 percentage points to the rate and check the business can still pay. Also check whether a fixed loan has an early repayment charge, which matters if you plan to repay from a sale or a refinance.</p>',
      ],
    },
    {
      id: 'compare-offers', h2: 'How do you compare business loan offers?', toc: 'Comparing offers',
      body: [
        '<p>Put every offer into the same simple table and compare the total cost of borrowing, not the headline rate.</p>',
        '<ol><li><strong>Total amount repayable</strong> over the full term, including all fees.</li><li><strong>Monthly repayment</strong>, and whether your cash flow covers it in a weak month.</li><li><strong>Rate type</strong>: fixed, variable and what it tracks.</li><li><strong>Security and guarantees</strong>: what you or the business could lose.</li><li><strong>Early repayment terms</strong> and any exit fees.</li><li><strong>Covenants and conditions</strong>: financial tests the lender expects you to meet.</li></ol>',
        '<p>If you have not applied yet, start with our guide on <a href="/resources/how-to-get-a-business-loan/">how to get a business loan</a>. For short gaps in cash, an overdraft or invoice finance may cost less overall than a term loan; see <a href="/resources/invoice-finance-vs-overdraft/">invoice finance vs overdraft</a>. Finance is always subject to the lender\'s approval.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the Bank of England base rate today?', a: 'Bank Rate, often called the base rate, is 3.75%. The Bank of England cut it to that level on 18 December 2025 and held it at its June, July and September 2026 meetings. The next decision is due on 5 November 2026.' },
    { q: 'Are business loan rates higher than personal loan rates?', a: 'They are priced differently. A business loan is priced on the business\'s risk: its accounts, cash flow, security and sector. A new or unsecured business can pay more than a homeowner on a personal loan, while a well-secured established company may pay less.' },
    { q: 'Will my business loan repayments go up if Bank Rate rises?', a: 'Only if your loan is on a variable rate linked to Bank Rate or another reference rate. A fixed-rate loan stays the same for the fixed period. Check your agreement for the reference rate and the date any change takes effect.' },
    { q: 'What interest rate is a Start Up Loan?', a: 'A fixed 7.5% a year. Start Up Loans are government-backed unsecured personal loans of £500 to £25,000 per person, repaid over 1 to 5 years, for businesses trading for less than 5 years. There is no application fee and no early repayment fee.' },
    { q: 'Why is the APR higher than the rate I was quoted?', a: 'The quoted figure may be a flat rate, which charges interest on the original loan for the whole term, or it may leave out fees. The APR is worked out on the reducing balance and includes fees, so it is the better measure of yearly cost.' },
  ],

  sources: [
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Interest rates and Bank Rate'],
    ['https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2025/december-2025', 'Bank of England: December 2025 Monetary Policy Summary'],
    ['https://www.gov.uk/start-up-loans', 'GOV.UK: Start Up Loans'],
    ['https://www.gov.uk/government/news/chancellor-to-unlock-billions-in-finance-for-small-businesses--2', 'GOV.UK: Growth Guarantee Scheme changes (July 2026)'],
    ['https://www.legislation.gov.uk/uksi/2001/544/article/60C', 'legislation.gov.uk: Business lending exemption (article 60C)'],
  ],

  related: [
    '/resources/how-to-get-a-business-loan/',
    '/resources/personal-guarantees-explained/',
    '/resources/invoice-finance-vs-overdraft/',
    '/resources/cash-flow-forecasting/',
  ],
};
