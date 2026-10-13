// Guide: /resources/emergency-tax-code/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April: the emergency code follows the Personal Allowance.
export default {
  url: '/resources/emergency-tax-code/',
  section: 'tax',
  title: 'Emergency Tax Code 2026-27: How to Fix It | Severin Finance',
  description: 'Emergency tax codes for 2026-27 (1257L W1, M1 and X), what BR and 0T mean, how HMRC fixes them within 35 days and how to get a refund. Free consultation.',
  h1: 'Emergency tax code: what it means and how to get it fixed',
  crumb: 'Emergency tax code',
  summary: 'What 1257L W1, M1, X, BR and 0T mean, why you got one and how to get overpaid tax back.',
  topic: 'Emergency tax codes',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/tax-refunds/', label: 'Our tax refund service',
    boxTitle: 'Overpaid on an emergency code?', text: 'We check your payslips and tax code, work out what you overpaid and claim it back from HMRC.',
  },

  hero: {
    answer: 'An emergency tax code ends in W1, M1 or X. For 2026-27 the codes are 1257L W1, 1257L M1 and 1257L X. You usually get one when a new employer lacks your P45. It taxes each payday on its own, so you can overpay. HMRC normally sorts it within 35 days, and overpaid tax usually comes back through your pay.',
  },

  tldr: [
    'Emergency codes for 2026-27: <strong>1257L W1</strong>, <strong>1257L M1</strong> and <strong>1257L X</strong>. Your payslip may say <strong>NONCUM</strong>.',
    'The usual cause is a new job without a <strong>P45</strong>, or starting company benefits or the State Pension.',
    'HMRC updates the code once it has your details, which can take up to <strong>35 days</strong>.',
    'After a change, HMRC tells you and your employer within <strong>15 working days</strong>.',
    'Overpaid tax normally comes back <strong>through your pay</strong>; otherwise after the tax year, with up to <strong>4 years</strong> to claim.',
  ],

  sections: [
    {
      id: 'what-it-is', h2: 'What is an emergency tax code?', toc: 'What it is',
      body: [
        '<p>An emergency tax code is a temporary code that ends in W1, M1 or X. It tells your employer to work out tax on each payday in isolation, instead of looking at your pay and allowance for the whole tax year so far. If you think you have paid too much because of one, our <a href="/uk/tax/tax-refunds/">tax refund service</a> checks your payslips and claims back what you overpaid.</p>',
        { caption: 'Emergency tax codes for 2026-27', head: ['Code', 'Used when you are paid', 'What it means'], rows: [
          ['1257L W1', 'Weekly', 'Tax worked out on each week\'s pay alone, with one week\'s share of the Personal Allowance'],
          ['1257L M1', 'Monthly', 'Tax worked out on each month\'s pay alone, with one month\'s share of the Personal Allowance'],
          ['1257L X', 'On irregular dates', 'The same emergency basis, used where pay dates do not follow a regular pattern'],
        ], after: 'Source: GOV.UK, Rates and thresholds for employers 2026 to 2027, and Tax codes: emergency tax codes. Your payslip may show "NONCUM" instead, depending on your employer\'s software.' },
        '<p>The number 1257 is the £12,570 Personal Allowance with the last digit removed, and the L means you get the standard allowance. So the emergency code still gives you a tax-free allowance. The problem is how it is spread.</p>',
      ],
    },
    {
      id: 'why-you-got-one', h2: 'Why have you been put on an emergency tax code?', toc: 'Why it happens',
      body: [
        '<p>Most often because your new employer does not have your previous pay and tax details. That happens when you start a job without a P45, start a second job, or your old employer has not sent the information yet. If you do not have a P45, your employer asks you to fill in a starter checklist, and uses your answers to choose a code.</p>',
        '<p>You can also be put on an emergency code when you start receiving company benefits, such as a company car, or the State Pension. In those cases it is normal: it helps match the tax to the right tax year, and you stay on it until 5 April before moving to a regular code.</p>',
        '<p>Starting a job with a P45 from earlier in the same tax year usually avoids an emergency code, because the P45 shows your pay and tax so far. If you have more than one P45, your employer uses the one with the latest leaving date.</p>',
      ],
    },
    {
      id: 'how-it-taxes-you', h2: 'How does an emergency tax code affect your pay?', toc: 'How it affects pay',
      body: [
        '<p>It can make you overpay, especially if you start a job part-way through the tax year after a gap. On a normal code, your employer gives you all the allowance that has built up since 6 April. On an emergency code, you only get one week\'s or one month\'s share each payday, however much allowance you have not used.</p>',
        { caption: 'Illustrative example: first monthly pay of £3,000 in the seventh month of 2026-27, with no earlier earnings that year', head: ['Code', 'Tax-free pay used', 'Taxable pay', 'Tax at 20%'], rows: [
          ['1257L M1 (emergency)', 'About £1,048 (one month\'s share)', 'About £1,952', 'About £390'],
          ['1257L (normal, cumulative)', 'About £7,340 built up since 6 April', '£0', '£0'],
        ], after: 'Illustrative and rounded, for England, Wales and Northern Ireland basic rate only. Ignores National Insurance, pension contributions and student loans.' },
        '<p>If you had been working all year without a break, the gap is much smaller, because you would have used your allowance month by month anyway. The difference mainly hurts people who start work after a period with no income, such as students and people returning to work. To see what your pay should look like, try our <a href="/resources/take-home-pay-calculator/">take-home pay calculator</a>.</p>',
      ],
    },
    {
      id: 'other-codes', h2: 'What do BR, 0T, D0 and other tax codes mean?', toc: 'BR, 0T and other codes',
      body: [
        '<p>These are not emergency codes, but they also tax you more than a standard code, so people often confuse them. Each has a clear meaning.</p>',
        { caption: 'Common tax code letters', head: ['Code', 'What it means'], rows: [
          ['L', 'You get the standard tax-free Personal Allowance'],
          ['BR', 'All income from this job or pension is taxed at the basic rate, usually because you have more than one job or pension'],
          ['0T', 'No allowance on this job: your allowance is used up, or a new employer does not have the details to give you a code'],
          ['D0 and D1', 'All income from this job or pension is taxed at the higher (D0) or additional (D1) rate'],
          ['K', 'You have untaxed income or deductions above your allowance; your employer cannot take more than half your pre-tax pay'],
          ['M and N', 'You receive (M) or give (N) Marriage Allowance'],
          ['NT', 'No tax is taken from this income'],
          ['S or C in front', 'Scottish (S) or Welsh (C) rates apply, for example S1257L or C1257L'],
        ], after: 'Source: GOV.UK, Tax codes: what your tax code means. Checked 13 October 2026.' },
        '<p>A BR or 0T code on a second job is often correct, because your allowance is already used by your main job. On your only job, it usually means HMRC does not have your details yet. If you are married and see an M or N, our guide to <a href="/resources/marriage-allowance/">Marriage Allowance</a> explains it.</p>',
      ],
    },
    {
      id: 'getting-it-fixed', h2: 'How do you get an emergency tax code fixed?', toc: 'Getting it fixed',
      body: [
        '<p>Often you do not need to do anything: HMRC collects details from your new and old employers and sends both you and your employer a new code, which can take up to 35 days from when you start. You can speed things up:</p>',
        '<ol><li><strong>Give your new employer your P45.</strong> If you did not get one, ask your previous employer for it.</li><li><strong>Fill in the starter checklist</strong> accurately if you have no P45.</li><li><strong>Check your details online</strong> with HMRC\'s <a href="https://www.gov.uk/check-income-tax-current-year">Check your Income Tax for the current year</a> service or the HMRC app, and update any job, pension or benefit that is wrong or missing.</li><li><strong>Contact HMRC</strong> if you cannot use the online service, but wait until you have been in the job 35 days.</li></ol>',
        '<p>Once a code changes, HMRC tells you and your employer within 15 working days. If you are paid monthly, the new code should appear on your next or following payslip. If you are paid weekly, it should appear by your third payslip. If it does not, ask your payroll team whether they have received it.</p>',
      ],
    },
    {
      id: 'refunds', h2: 'Will you get the overpaid tax back?', toc: 'Getting a refund',
      body: [
        '<p>Yes, in most cases, and usually without a claim. When your employer applies the corrected code, the cumulative calculation catches up and your next payslip normally includes the refund.</p>',
        '<p>If the tax year ends before that happens, HMRC checks your tax once it has your full income details. It sends a tax calculation letter (a P800) between June and March after the tax year ends. If the letter says you can claim online, the money reaches your bank within 5 working days. If HMRC says it will send a cheque, it should arrive within 14 days of the date on the letter.</p>',
        '<p>For earlier years, you can usually claim overpaid tax up to 4 years after the end of the tax year it relates to. For 2022-23, that means by 5 April 2027. Refunds on pension withdrawals use a separate HMRC tool. Check any refund message is genuine before you act on it: our guide to <a href="/resources/hmrc-refund-scams/">HMRC refund scams</a> lists the warning signs.</p>',
        '<p>If you underpaid instead, HMRC may collect it through your tax code over one or more years. If you also file a tax return, see our <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> guide, because a bill under £3,000 can also be collected through your code.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How long does an emergency tax code last?', a: 'Usually only until HMRC has your previous pay and tax details, which can take up to 35 days from starting a job. If the code was given because you started company benefits or the State Pension, you normally stay on it until 5 April and then move to a regular code.' },
    { q: 'Is 1257L an emergency tax code?', a: 'No. 1257L on its own is the standard tax code for 2026-27, giving the full £12,570 Personal Allowance. It only becomes an emergency code when followed by W1, M1 or X, or shown as non-cumulative (NONCUM) on your payslip.' },
    { q: 'Do I get emergency tax back automatically?', a: 'Usually, yes. Once your employer applies the correct code, the overpaid tax normally comes back through your pay. If the tax year ends first, HMRC checks your tax and sends a P800 letter between June and March, explaining how to get the refund.' },
    { q: 'Why am I on a BR tax code?', a: 'A BR code taxes all your pay from that job at the basic rate, with no tax-free allowance. It is normal on a second job or pension. On your only job, it usually means HMRC lacks your details, so check your record online and contact HMRC if it is wrong.' },
    { q: 'Can I claim emergency tax back from previous years?', a: 'Yes. You can usually claim overpaid tax up to 4 years after the end of the tax year it relates to. Claims for 2022-23 close on 5 April 2027. You can claim directly with HMRC for free, or ask an accountant to check every open year.' },
  ],

  sources: [
    ['https://www.gov.uk/tax-codes/emergency-tax-codes', 'GOV.UK: Emergency tax codes'],
    ['https://www.gov.uk/tax-codes/what-your-tax-code-means', 'GOV.UK: What your tax code means'],
    ['https://www.gov.uk/tax-codes/how-to-update-your-tax-code', 'GOV.UK: If you think your tax code is wrong'],
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/tax-overpayments-and-underpayments', 'GOV.UK: Tax overpayments and underpayments (P800)'],
    ['https://www.gov.uk/tax-overpayments-and-underpayments/if-youre-due-a-refund', 'GOV.UK: If your P800 says you are due a refund'],
    ['https://www.gov.uk/new-employee/employee-information', 'GOV.UK: New employee information (P45 and starter checklist)'],
    ['https://www.gov.uk/self-assessment-tax-returns/corrections', 'GOV.UK: Overpayment relief time limit'],
  ],

  related: [
    '/resources/marriage-allowance/',
    '/resources/hmrc-refund-scams/',
    '/resources/self-assessment-deadlines/',
    '/resources/hiring-your-first-employee/',
  ],
};
