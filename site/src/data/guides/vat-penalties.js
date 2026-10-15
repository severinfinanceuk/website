// Guide: /resources/vat-penalties/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals and the Bank of England on 13 October 2026 (sources below).
// Re-check the interest rate after every Bank Rate change.
export default {
  url: '/resources/vat-penalties/',
  section: 'tax',
  title: 'VAT Penalties: Late Returns and Payments | Severin Finance',
  description: 'VAT penalty points for late returns, the £200 penalty, late payment penalties of 3% at day 15 and day 30, and 7.75% interest. Free consultation.',
  h1: 'VAT penalties for late returns and late payments',
  crumb: 'VAT penalties',
  summary: 'Late returns earn points and a £200 penalty. Late payments cost 3%, 3% and then 10% a year, plus interest.',
  topic: 'VAT late submission and late payment penalties',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/vat-accountant/', label: 'Our VAT service',
    boxTitle: 'Behind on VAT?', text: 'We file overdue VAT returns, work out what you owe, appeal penalties where you had a reasonable excuse and keep future returns on time.',
  },

  hero: {
    answer: 'Each late VAT return earns a penalty point. Reach the threshold, 4 points for quarterly returns, and you pay £200, plus £200 for every later late return. Late payment costs 3% of the VAT unpaid at day 15, another 3% at day 30, then 10% a year from day 31, plus interest at 7.75%.',
  },

  tldr: [
    '<strong>1 point</strong> per late return. The threshold is <strong>2</strong> for annual, <strong>4</strong> for quarterly and <strong>5</strong> for monthly returns.',
    'At the threshold: <strong>£200</strong> for that return and every late return after it.',
    'Paid by day 15 or a payment plan agreed: <strong>no late payment penalty</strong>, only interest.',
    'Day 16: <strong>3%</strong>. Day 31: another <strong>3%</strong>, then <strong>10% a year</strong> charged daily.',
    'Late payment interest is the Bank of England base rate plus 4%: <strong>7.75%</strong> from 9 January 2026.',
  ],

  sections: [
    {
      id: 'overview', h2: 'What are the VAT penalties for late returns and payments?', toc: 'The penalties',
      body: [
        '<p>Late VAT returns and late VAT payments are penalised separately, and HMRC charges interest on top. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> file your returns through Making Tax Digital software before the deadline, so points and penalties do not build up. The rules below apply to VAT periods starting on or after 1 January 2023, when they replaced the old default surcharge.</p>',
        { caption: 'VAT penalties at a glance', head: ['What happens', 'Penalty'], rows: [
          ['Return filed late', '1 penalty point'],
          ['Points reach the threshold', '£200, then £200 for each further late return'],
          ['VAT paid 1 to 15 days late', 'No penalty, interest only'],
          ['VAT paid 16 to 30 days late', '3% of the VAT unpaid at day 15'],
          ['VAT paid 31 or more days late', '3% at day 15, 3% at day 30, then 10% a year daily'],
          ['Any late payment', 'Interest at 7.75% from the day after the deadline'],
        ], after: 'Source: GOV.UK guidance on VAT late submission and late payment penalties and HMRC interest rates. Checked 13 October 2026.' },
        '<p>Returns and payments are both due 1 calendar month and 7 days after the end of the VAT period, even if that day falls on a weekend or bank holiday. Our guide to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> shows how VAT fits with the other dates a company has to meet.</p>',
      ],
    },
    {
      id: 'penalty-points', h2: 'How do VAT penalty points work?', toc: 'Penalty points',
      body: [
        '<p>You get 1 point for each return you send late, until you reach the threshold for how often you file. At that point HMRC charges a £200 penalty, and another £200 for every late return while you stay at the threshold. You do not get more points once you are there.</p>',
        { caption: 'Penalty point thresholds', head: ['How often you file', 'Points threshold'], rows: [
          ['Annually', '2'],
          ['Quarterly', '4'],
          ['Monthly', '5'],
        ], after: 'Non-standard periods: over 20 weeks is 2, over 8 to 20 weeks is 4, 8 weeks or less is 5. Source: GOV.UK, Penalty points and penalties if you submit your VAT Return late.' },
        '<p>Nil returns and repayment returns count, so a late return with nothing to pay still earns a point. The rules do not apply to your first return after registering, your final return after cancelling your registration, or one-off returns for a period other than a month, quarter or year.</p>',
      ],
    },
    {
      id: 'removing-points', h2: 'How long do VAT penalty points last?', toc: 'Removing points',
      body: [
        '<p>Below the threshold, each point expires on its own after about 2 years: on the last day of the month 24 months after the month the return was due (25 months if the deadline was the last day of a month).</p>',
        '<p>Once you reach the threshold, points stop expiring. To clear them you must meet two conditions: complete a period of compliance, filing every return on time, and send any returns still outstanding for the previous 24 months.</p>',
        { caption: 'Period of compliance at the threshold', head: ['How often you file', 'Period of compliance', 'Returns to file on time'], rows: [
          ['Annually', '24 months', '2'],
          ['Quarterly', '12 months', '4'],
          ['Monthly', '6 months', '6'],
        ], after: 'Source: GOV.UK, Remove penalty points you have received after submitting your VAT Return late. All points reset to zero on the day both conditions are met.' },
      ],
    },
    {
      id: 'late-payment', h2: 'How much is the VAT late payment penalty?', toc: 'Late payment penalty',
      body: [
        '<p>There is no penalty if you pay in full, or agree a payment plan with HMRC, within 15 days of the deadline. After that the first penalty is 3% of the VAT unpaid at day 15. If VAT is still unpaid at day 31, the first penalty becomes 3% of what was unpaid at day 15 plus 3% of what was unpaid at day 30, and a second penalty starts at 10% a year, charged daily until you pay.</p>',
        '<p>These rates apply where the VAT period began on or after 1 April 2025. For periods that began before then, or where the VAT was due on or before 30 May 2025, the old rates were 2%, 2% and 4% a year.</p>',
        { caption: 'Illustrative example: £10,000 of VAT paid in full on day 60', head: ['Charge', 'How it is worked out', 'Amount'], rows: [
          ['First penalty, day 15 part', '3% of £10,000', '£300'],
          ['First penalty, day 30 part', '3% of £10,000', '£300'],
          ['Second penalty', '10% a year on £10,000 for 30 days', 'About £82'],
          ['Late payment interest', '7.75% a year on £10,000 for 60 days', 'About £127'],
          ['Total', '', 'About £809'],
        ], after: 'Illustrative figures, rounded. Paying part of the VAT early reduces each penalty, because each one is based on what is still unpaid at that date.' },
      ],
    },
    {
      id: 'interest', h2: 'How much interest does HMRC charge on late VAT?', toc: 'Interest',
      body: [
        '<p>HMRC charges late payment interest at the Bank of England base rate plus 4 percentage points. With Bank Rate at 3.75%, the rate has been 7.75% a year since 9 January 2026. Interest runs from the day after the deadline until you pay in full, and it is also charged on penalties you do not pay on time.</p>',
        '<p>It works the other way too. If HMRC repays VAT late, it pays repayment interest, currently 2.75% a year (base rate minus 1%).</p>',
        '<p>The interest rate moves with Bank Rate, so check <a href="https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates">HMRC\'s interest rates page</a> after each Bank of England decision.</p>',
      ],
    },
    {
      id: 'cannot-pay', h2: 'What if you cannot pay your VAT on time?', toc: 'If you cannot pay',
      body: [
        '<p>File the return on time anyway, then contact HMRC as early as you can about a Time to Pay arrangement. The timing matters:</p>',
        '<ul><li>ask by day 15 to avoid any late payment penalty</li><li>ask by day 30 to avoid the second 3% and the daily penalty</li><li>after day 30, an agreed plan stops the daily penalty growing</li></ul>',
        '<p>Interest is still charged while you pay. If you break the plan, HMRC can cancel it and charge the penalties as if it never existed. Our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a> explains what HMRC asks for. If the bill is hard to pay because customers pay you slowly, our guide to <a href="/resources/late-payment-interest/">late payment interest</a> explains what you can charge them.</p>',
      ],
    },
    {
      id: 'appeals', h2: 'Can you appeal a VAT penalty?', toc: 'Appeals',
      body: [
        '<p>Yes. HMRC sends a penalty decision letter for each point and each penalty, offering a review by HMRC, or you can appeal to the tax tribunal instead. Act within the time limit on the letter. A point or penalty can be cancelled if you had a reasonable excuse, such as a serious illness or a computer or software failure just before the deadline, and you put things right without delay once it ended.</p>',
        '<p>HMRC does not usually accept a lack of money as an excuse, unless it came from events outside your control. Relying on someone else is not an excuse either, unless you took reasonable care. You cannot appeal changes to your points caused by changing your VAT accounting period.</p>',
        '<h3>How to avoid VAT penalties</h3>',
        '<ul><li>Set up a Direct Debit at least 3 working days before you file. HMRC collects 3 working days after the deadline.</li><li>Pay by Faster Payments if you pay manually: they usually reach HMRC the same or the next day.</li><li>File even when you cannot pay, so you do not collect points as well.</li><li>Keep bookkeeping monthly so the return is ready well before the deadline.</li></ul>',
        '<p>Errors on a return are a separate matter: inaccuracy penalties depend on whether you were careless or deliberate. See our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a>. If you registered late, our guide to <a href="/resources/vat-registration/">VAT registration</a> covers the penalty for that.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I get a penalty for a late nil VAT return?', a: 'You get a penalty point, because nil and repayment returns count under the points system. You only pay money once your points reach the threshold, which is 4 points if you file quarterly. After that, each late return costs £200.' },
    { q: 'What is the VAT late payment penalty in 2026?', a: 'For VAT periods starting on or after 1 April 2025, there is nothing to pay if you settle within 15 days. Then it is 3% of the VAT unpaid at day 15, another 3% of the VAT unpaid at day 30, and 10% a year charged daily from day 31.' },
    { q: 'What interest rate does HMRC charge on late VAT?', a: 'Late payment interest is the Bank of England base rate plus 4%. With Bank Rate at 3.75%, that has been 7.75% a year since 9 January 2026. It runs from the day after the deadline until you pay.' },
    { q: 'Does a payment plan stop VAT penalties?', a: 'It can. Agree a Time to Pay arrangement with HMRC by day 15 and no late payment penalty is charged. Agree it by day 30 to avoid the higher penalties. Interest still runs, and breaking the plan brings the penalties back.' },
    { q: 'How do I find out how many VAT penalty points I have?', a: 'Sign in to your HMRC VAT online account, where your points and penalties are shown. HMRC also sends a penalty decision letter each time you get a point or a penalty. If an agent files for you, they can check this for you.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/penalty-points-and-penalties-if-you-submit-your-vat-return-late', 'GOV.UK: VAT late submission penalties'],
    ['https://www.gov.uk/guidance/remove-penalty-points-youve-received-after-submitting-your-vat-return-late', 'GOV.UK: Remove VAT penalty points'],
    ['https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late', 'GOV.UK: VAT late payment penalties'],
    ['https://www.gov.uk/hmrc-internal-manuals/compliance-handbook/ch193140', 'HMRC Compliance Handbook CH193140: late payment penalty rates'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates'],
    ['https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', 'Bank of England: Bank Rate'],
    ['https://www.gov.uk/pay-vat', 'GOV.UK: Pay your VAT bill'],
  ],

  related: [
    '/resources/vat-registration/',
    '/resources/flat-rate-vat-scheme/',
    '/resources/pay-hmrc-in-instalments/',
    '/resources/hmrc-penalties-explained/',
  ],
};
