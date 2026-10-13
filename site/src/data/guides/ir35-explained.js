// Guide: /resources/ir35-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and in HMRC's Employment Status Manual on 13 October 2026 (sources below).
// Size thresholds: the higher Companies Act limits apply to financial years from 6 April 2025, but per ESM10006A
// they first affect a client's off-payroll size for 2027-28 (usual 12-month year). Re-check each April.
export default {
  url: '/resources/ir35-explained/',
  section: 'accounting',
  title: 'IR35 Explained: Off-Payroll Working Rules | Severin Finance',
  description: 'IR35 for 2026-27: who decides your status, the small client test (£10.2m turnover, £5.1m balance sheet, 50 staff) and the tax inside. Free consultation.',
  h1: 'IR35 explained: the off-payroll working rules',
  crumb: 'IR35 explained',
  summary: 'Who decides your IR35 status, how the small client test works and what changes if you are inside.',
  topic: 'IR35 and the off-payroll working rules',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/contractor-accountant/', label: 'Our contractor accountant service',
    boxTitle: 'New contract to check?', text: 'We review your contract and working practices for IR35, check any status determination and show what it means for your pay.',
  },

  hero: {
    answer: 'IR35 taxes you like an employee if you work through your own company but would be an employee if hired directly. Public sector bodies and medium or large clients decide your status. For 2026-27, a client is small if it stays within two of: £10.2 million turnover, £5.1 million balance sheet, 50 employees.',
  },

  tldr: [
    'IR35 applies <strong>contract by contract</strong>, not to you as a person.',
    'Public sector and medium or large clients decide your status and must give you a <strong>status determination statement</strong> with reasons.',
    'With a small private or voluntary sector client, <strong>your own company</strong> decides.',
    'Higher size limits (<strong>£15 million</strong> turnover, <strong>£7.5 million</strong> balance sheet) apply to financial years from 6 April 2025, but first affect client size from <strong>2027-28</strong>.',
    'Inside IR35, the fee-payer deducts income tax and employee National Insurance, and pays <strong>15% employer National Insurance</strong> (2026-27).',
  ],

  sections: [
    {
      id: 'what-is-ir35', h2: 'What is IR35 and who does it affect?', toc: 'What IR35 is',
      body: [
        '<p>IR35 affects contractors who provide their services through an intermediary, usually their own limited company (a personal service company). If the working relationship would make you an employee had the client hired you directly, the rules make you pay roughly the same income tax and National Insurance as an employee. Our <a href="/uk/accounting/contractor-accountant/">contractor accountants</a> review contracts for IR35 before you sign and run your company\'s tax either way.</p>',
        '<p>The rules look at each engagement on its own. You can have one contract inside IR35 and another outside it in the same year. HMRC says the rules are unlikely to apply if you are employed by an umbrella company, because the umbrella already runs PAYE on your pay. Our guide to <a href="/resources/umbrella-vs-limited-company/">umbrella vs limited company</a> compares the two routes.</p>',
        '<p>Since 6 April 2021, the client decides your status in most cases. Before then, private sector contractors made the call themselves, which is still the position with small clients.</p>',
      ],
    },
    {
      id: 'who-decides', h2: 'Who decides if a contract is inside IR35?', toc: 'Who decides',
      body: [
        '<p>The client decides, unless it is a small business in the private or voluntary sector, in which case your own company decides.</p>',
        { caption: 'Who decides IR35 status (2026-27)', head: ['Your client', 'Who decides', 'Who deducts the tax if inside'], rows: [
          ['Public sector body (any size)', 'The client', 'The fee-payer: the party that pays your company, often the agency'],
          ['Medium or large private or voluntary sector client', 'The client', 'The fee-payer'],
          ['Small private or voluntary sector client', 'Your own company', 'Your own company, through a deemed employment payment'],
        ], after: 'Source: GOV.UK, Understanding off-payroll working (IR35). Checked 13 October 2026.' },
        '<p>A client that decides must give a status determination statement (SDS) to you and to the party it contracts with, usually the agency. The SDS must state its conclusion and the reasons for it, and the client should issue one whether or not the rules apply. If the client does not give reasons, the tax and National Insurance become the client\'s responsibility.</p>',
        '<p>If you do not receive an SDS, you can ask the client to confirm its size. It has 45 days to reply. If it confirms it is small, your company decides.</p>',
      ],
    },
    {
      id: 'small-client-test', h2: 'What counts as a small client in 2026-27?', toc: 'Small client test',
      body: [
        '<p>A company client is medium or large if it meets 2 or more of the conditions below, and small if it meets fewer than 2. Its size is tested on the accounts for the last financial year whose filing deadline passed before the tax year started, and a company changes size only after 2 years in a row on the new side of the line.</p>',
        { caption: 'Off-payroll working: medium or large client test', head: ['Condition', 'Financial years before 6 April 2025', 'Financial years from 6 April 2025'], rows: [
          ['Annual turnover', 'More than £10.2 million', 'More than £15 million'],
          ['Balance sheet total (gross assets)', 'More than £5.1 million', 'More than £7.5 million'],
          ['Employees (average)', 'More than 50', 'More than 50 (unchanged)'],
        ], after: 'Source: HMRC Employment Status Manual ESM10006 and ESM10006A, updated 7 October 2026. A group is tested as a whole: if the parent is medium or large, its subsidiaries must apply the rules too.' },
        '<p>The higher limits do not change anything for 2026-27 in practice. For a usual 12-month financial year, HMRC says the earliest tax year they can affect is 2027-28, because accounts for years starting on or after 6 April 2025 are not due until 2027 at the earliest. A transitional rule also applies the new limits to the year before, so some clients will become small from 6 April 2027.</p>',
        '<p>Clients that are not companies, such as partnerships and sole traders, use a turnover-only test: more than £10.2 million means they must apply the rules. HMRC says this test is not affected by the new company limits.</p>',
      ],
    },
    {
      id: 'status-tests', h2: 'How is IR35 status decided?', toc: 'Status tests',
      body: [
        '<p>Status depends on the real working relationship, not just the contract wording. HMRC and the courts look at the written terms and at what happens day to day. The main factors are:</p>',
        '<ul><li><strong>Personal service:</strong> must you do the work yourself, or does your company have a genuine right to send a substitute?</li><li><strong>Control:</strong> does the client decide what you do, and how, when and where you do it?</li><li><strong>Mutuality of obligation:</strong> must the client offer work and must you accept it?</li><li><strong>Financial risk:</strong> do you risk your own money, for example fixing mistakes at your own cost?</li><li><strong>Part and parcel:</strong> are you treated like staff, with a line manager, staff benefits or a place in the organisation chart?</li><li><strong>Other factors:</strong> who provides equipment, how you are paid, the right to end the contract and how long it runs.</li></ul>',
        '<h3>What is CEST?</h3>',
        '<p>CEST (Check Employment Status for Tax) is HMRC\'s free online tool. It asks about the contract, your responsibilities, who decides what work is done and how, how you are paid, and any staff-style benefits. HMRC will stand by the result as long as the answers are accurate and match its guidance. It is anonymous and cannot save your progress. Many clients use it alongside their own review.</p>',
      ],
    },
    {
      id: 'inside-vs-outside', h2: 'What changes if you are inside IR35?', toc: 'Inside vs outside',
      body: [
        '<p>Inside IR35, tax and National Insurance are taken from your fees before your company receives them. Outside, your company is paid in full and you choose how to take the money out.</p>',
        { caption: 'Inside vs outside IR35 with a medium or large client (2026-27)', head: ['', 'Inside IR35', 'Outside IR35'], rows: [
          ['What your company receives', 'Fees after income tax and employee National Insurance', 'The full invoice'],
          ['Employer National Insurance', 'Paid by the fee-payer at 15% above £5,000 a year', 'Only on any salary your company pays you'],
          ['Tax on the money in your company', 'None again: it can pay this to you as salary or dividends without further tax', 'Corporation tax at 19% to 25%, then tax on salary and dividends'],
          ['Paying yourself', 'Little room to plan', 'Salary, dividends and pension can be planned'],
          ['Student loan repayments', 'Not deducted: report them on your Self Assessment return', 'Through your own payroll and return'],
        ], after: 'Source: GOV.UK guidance for intermediaries working for public sector and medium or large clients; GOV.UK rates and thresholds for employers 2026 to 2027.' },
        '<p>Contractors outside IR35 usually take a small salary and dividends. Our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a> sets out the 2026-27 figures. Inside IR35 most of that planning goes, and many contractors move to an umbrella company or keep the company for other work.</p>',
      ],
    },
    {
      id: 'disagree', h2: 'Can you challenge an IR35 decision?', toc: 'Challenging a decision',
      body: [
        '<p>Yes. A client that decides your status must have a process for disagreements, and you can raise one at any time until the last payment for the work is made.</p>',
        '<ol><li>Write to the client with details of the determination, why you disagree, and evidence such as a substitution clause or how the work is really done.</li><li>The client must respond within 45 days, either confirming its decision with reasons or issuing a new determination with the date it applies from.</li><li>While it considers your case, the fee-payer keeps deducting tax under the original decision.</li></ol>',
        '<p>If the client does not respond within 45 days, the tax and National Insurance become its responsibility. Keep copies of everything you send. Changes to the role during the contract can change the answer, so ask for a fresh review if the work changes.</p>',
      ],
    },
    {
      id: 'small-client-inside', h2: 'What if your own company decides you are inside?', toc: 'Small clients',
      body: [
        '<p>Your company works out a "deemed employment payment" at the end of the tax year and pays the tax on it through payroll.</p>',
        '<p>The calculation starts with the fees from the engagement, takes off a flat 5% for running costs, then deducts allowable expenses, pension contributions, salary already taxed and employer National Insurance. If anything is left, it is treated as salary paid on 5 April.</p>',
        { caption: 'Deemed employment payment: key dates for 2026-27', head: ['Step', 'When'], rows: [
          ['Report the deemed payment on a Full Payment Submission', 'On or before 5 April 2027'],
          ['P60 to the worker', 'By 31 May 2027'],
          ['Final figures and any balance, if a provisional figure was used', 'By 31 January 2028 (interest applies)'],
        ], after: 'Source: GOV.UK guidance for intermediaries working for small clients, and How to calculate the deemed employment payment.' },
        '<p>Keep your working, even when the result is nil. The deemed payment also affects your company\'s corporation tax and how much it can pay out as dividends. Our guide on <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how to pay yourself from a limited company</a> explains the wider picture.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Does IR35 apply to sole traders?', a: 'No. IR35 only applies when you work through an intermediary, usually your own limited company. A sole trader who would really be an employee faces a different question: whether they are self-employed at all for tax and employment purposes.' },
    { q: 'Is my client small for IR35 in 2026-27?', a: 'For a company client, it is small if it meets fewer than 2 of: turnover over £10.2 million, balance sheet over £5.1 million, more than 50 employees. Higher limits of £15 million and £7.5 million first affect size from 2027-28.' },
    { q: 'Can I claim expenses if I am inside IR35?', a: 'Only to a limited extent. Inside IR35 you are taxed broadly like an employee, so most business costs your company pays no longer reduce the tax on your fees. With a small client, the deemed employment payment calculation allows a flat 5% for running costs plus some specific expenses.' },
    { q: 'Does HMRC accept the CEST result?', a: 'HMRC says it will stand by the result of its CEST tool as long as the information you entered is accurate and follows its guidance. A result based on wrong answers, or on a contract that differs from how you really work, does not protect you.' },
    { q: 'How long does a client have to answer an IR35 disagreement?', a: '45 days from receiving it. The client must either confirm its decision with reasons or issue a new status determination. If it misses the deadline, it becomes responsible for the tax and National Insurance on your fees.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/understanding-off-payroll-working-ir35', 'GOV.UK: Understanding off-payroll working (IR35)'],
    ['https://www.gov.uk/guidance/april-2021-changes-to-off-payroll-working-for-clients', 'GOV.UK: Off-payroll working for clients'],
    ['https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm10006a', 'HMRC manual ESM10006A: size thresholds from April 2025'],
    ['https://www.gov.uk/guidance/off-payroll-working-for-intermediaries-and-contractors-providing-services-to-the-public-sector-or-medium-and-large-clients-in-the-private-sector', 'GOV.UK: Off-payroll working for intermediaries (medium and large clients)'],
    ['https://www.gov.uk/guidance/off-payroll-working-for-intermediaries-and-contractors-providing-services-to-small-clients-in-the-private-sector', 'GOV.UK: Off-payroll working for intermediaries (small clients)'],
    ['https://www.gov.uk/guidance/how-to-calculate-the-deemed-employment-payment', 'GOV.UK: Calculate the deemed employment payment'],
    ['https://www.gov.uk/guidance/check-employment-status-for-tax', 'GOV.UK: Check employment status for tax (CEST)'],
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
  ],

  related: [
    '/resources/umbrella-vs-limited-company/',
    '/resources/salary-vs-dividends/',
    '/resources/how-to-pay-yourself-from-a-limited-company/',
  ],
};
