// Guide: /resources/eis1-compliance-statement/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the HMRC Venture Capital Schemes Manual and legislation.gov.uk on 13 October 2026
// (sources below). EIS1 timing: ITA 2007 s205(4) and s176(2) (the 4 months must end at or after the issue, so
// they can start before it). SEIS1 timing: ITA 2007 s257ED(3) (70% spent or 4 months' trading); s257ED sets no
// latest date. SEIS2/SEIS3: VCM35020 and VCM35090. £3,000 penalty: ITA 2007 s257EF and VCM35040. Wrong issue date case: VCM35020. Investor claim limit: GOV.UK investors page.
// Re-check each April and after each Budget.
export default {
  url: '/resources/eis1-compliance-statement/',
  section: 'company-services',
  title: 'EIS1 and SEIS1 Compliance Statements | Severin Finance',
  description: 'When to file an EIS1 or SEIS1: after 4 months of trading or 70% spent (SEIS), the 2-year EIS1 deadline and EIS3s. Free consultation.',
  h1: 'EIS1 and SEIS1 compliance statements: when to file and what follows',
  crumb: 'EIS1 and SEIS1',
  summary: 'File after 4 months of trading (or 70% spent for SEIS) so investors get their EIS3 or SEIS3.',
  topic: 'EIS1 and SEIS1 compliance statements and EIS3 and SEIS3 certificates',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/eis-seis/', label: 'Our EIS and SEIS service',
    boxTitle: 'Shares issued already?', text: 'We prepare and file the EIS1 or SEIS1, deal with HMRC\'s questions and help you complete the certificates for investors.',
  },

  hero: {
    answer: 'You can file an EIS1 once the company has traded for 4 months, and no later than 2 years after the end of the tax year of issue. A SEIS1 can go in after 4 months of trading or once 70% of the money is spent. HMRC then authorises the EIS3 or SEIS3 certificates investors need.',
  },

  tldr: [
    'Investors cannot claim any relief until the company files the compliance statement and HMRC authorises certificates.',
    '<strong>EIS1:</strong> file after <strong>4 months</strong> of qualifying trade. Deadline: <strong>2 years</strong> after the end of the tax year of issue, or 2 years after the 4-month point if later.',
    '<strong>SEIS1:</strong> file after 4 months of the new trade or once <strong>70%</strong> of the money is spent, whichever comes first.',
    'One statement for each share issue. Shares of the same class issued on the same day count as one issue.',
    'For shares issued in 2026-27, investors can claim until <strong>31 January 2033</strong>.',
  ],

  sections: [
    {
      id: 'when-to-file', h2: 'When can you file an EIS1 or SEIS1?', toc: 'When to file',
      body: [
        '<p>You can file once the company passes the earliest-date test for its scheme, and only after the shares have been issued. The compliance statement tells HMRC that the company has met the scheme conditions so far, apart from those that relate to the investors. Our <a href="/uk/company-services/eis-seis/">EIS and SEIS advisers</a> prepare and file it, and track the date you become able to file.</p>',
        { caption: 'Earliest and latest filing dates', head: ['Form', 'Earliest you can file', 'Latest you can file'], rows: [
          ['EIS1', 'When the qualifying trade (or research and development) has been carried on for at least 4 months', '2 years after the end of the tax year the shares were issued in, or 2 years after the 4-month point if that is later'],
          ['SEIS1', 'When 70% of the money from the issue is spent on the qualifying activity, or the new trade has run for 4 months, whichever comes first', 'No fixed date in the SEIS legislation, but investors cannot claim until it is accepted, and their own claims must be made within 5 years of the 31 January after the tax year of issue'],
        ], after: 'Source: Income Tax Act 2007, sections 205 and 257ED, and GOV.UK scheme guidance. Checked 13 October 2026.' },
        '<p>The 4 months must end at or after the share issue, so they can start before it. A company that has been trading for a year can usually file an EIS1 soon after it issues shares. A company raising before it trades must wait until it has traded for 4 months.</p>',
      ],
    },
    {
      id: 'deadline', h2: 'What is the deadline for filing an EIS1?', toc: 'EIS1 deadline',
      body: [
        '<p>The EIS1 must reach HMRC no later than 2 years after the end of the tax year in which the shares were issued. If the 4-month trading point falls after that tax year ends, the deadline is 2 years after the 4-month point instead.</p>',
        { caption: 'Illustrative example: EIS shares issued on 1 June 2026', head: ['Situation', 'Earliest EIS1', 'Latest EIS1'], rows: [
          ['Already trading for a year at the issue', 'Soon after 1 June 2026', '5 April 2029'],
          ['Trading starts 1 March 2027', '1 July 2027', '5 April 2029'],
          ['Trading starts 1 March 2028', '1 July 2028', '1 July 2030'],
        ], after: 'Illustrative dates only. 1 June 2026 falls in the 2026-27 tax year, which ends on 5 April 2027. The EIS money must also be used within 2 years of the issue, or of the start of trading if later.' },
        '<p>Miss the deadline and HMRC cannot accept the statement, so investors lose the income tax relief for that issue. Do not wait: investors want their certificates in time for their own tax returns, and a late filing is often the first thing a new investor asks about.</p>',
      ],
    },
    {
      id: 'what-to-include', h2: 'What do you need to file the compliance statement?', toc: 'What to include',
      body: [
        '<p>You complete the EIS1 or SEIS1 through HMRC\'s online service, linked from the GOV.UK scheme pages. Only a director, the company secretary or an agent with a signed authority letter dated within the last 3 months can submit it.</p>',
        '<ul><li>details of the share issue: date, class, number of shares and price, and the money raised</li><li>the investors who have asked for certificates, and how much each subscribed</li><li>details of the company\'s trade, subsidiaries and share capital</li><li>if you had advance assurance, copies of any documents that have changed since it was given</li><li>if you did not, the business plan, latest accounts, articles of association and a list of earlier venture capital investment</li><li>for a knowledge-intensive company, evidence of that status</li></ul>',
        '<p>Check the share issue details against the register of members and the share allotment filed at Companies House. Investors have lost relief because the form showed the wrong share issue date. Our guide to <a href="/resources/statutory-registers-explained/">statutory registers</a> explains what the register of members must show.</p>',
        '<p>Raising for the first time? Our guide to <a href="/resources/seis-advance-assurance-guide/">SEIS advance assurance</a> covers the step before the round.</p>',
      ],
    },
    {
      id: 'certificates', h2: 'What happens after HMRC accepts the compliance statement?', toc: 'EIS3 and SEIS3',
      body: [
        '<p>HMRC sends the company a letter of authorisation (form EIS2 or SEIS2), a unique investment reference and blank compliance certificates (form EIS3 or SEIS3). The company completes a certificate for each investor and sends it to them.</p>',
        '<ul><li>The company must not issue certificates without HMRC\'s authority.</li><li>Each certificate must show the right share issue date, number of shares and amount, and the unique investment reference.</li><li>A company that issues a certificate or statement fraudulently or negligently, or in breach of the conditions, can be fined up to £3,000.</li></ul>',
        '<p>If HMRC does not agree that the conditions are met, it writes to explain why and how to appeal. If the issue can be corrected, it is usually quicker to answer HMRC\'s points before the decision is made.</p>',
      ],
    },
    {
      id: 'investor-claims', h2: 'How do investors claim relief with an EIS3 or SEIS3?', toc: 'Investor claims',
      body: [
        '<p>Investors claim on their Self Assessment tax return using the details on the certificate, including the unique investment reference. They can treat the investment as made in the previous tax year (carry back), or ask HMRC to change their tax code or reduce a payment on account for the current year.</p>',
        { caption: 'Investor claim time limits', head: ['Shares issued in', 'Claim relief by'], rows: [
          ['2025-26', '31 January 2032'],
          ['2026-27', '31 January 2033'],
        ], after: 'Source: GOV.UK, Venture capital schemes: tax relief for investors (up to 5 years after the 31 January following the tax year of investment). Checked 13 October 2026.' },
        '<p>An investor who carries relief back to 2025-26 can include it in the return due by 31 January 2027, or amend that return. Our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> sets out those dates.</p>',
      ],
    },
    {
      id: 'after-filing', h2: 'What must the company keep doing after filing?', toc: 'After filing',
      body: [
        '<p>The company must keep meeting the scheme rules for at least 3 years after the investment, or investors lose their relief. Filing the compliance statement is not the end of the job.</p>',
        '<ul><li>Spend the money on the qualifying trade: within 2 years for EIS (from the issue, or from starting to trade if later) and within 3 years for SEIS.</li><li>Do not return value to investors, for example by buying back shares or making loans to them.</li><li>Tell HMRC within 60 days if the company no longer meets the EIS conditions.</li><li>Check any later share issue, sale or change of trade against the rules before it happens.</li><li>File a separate EIS1 or SEIS1 for each later share issue.</li></ul>',
        '<p>Companies also need to plan their further rounds. Our guide to <a href="/resources/eis-vs-seis/">EIS vs SEIS</a> covers the company limits that apply from 6 April 2026.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How soon can I submit an SEIS1 after issuing shares?', a: 'As soon as the company has spent 70% of the money from that share issue on its qualifying activity, or has carried on the new trade for 4 months, whichever comes first. You cannot submit before the shares are issued.' },
    { q: 'Do I need to file an EIS1 if I already have advance assurance?', a: 'Yes. Advance assurance is only an opinion before the round. Investors cannot claim until the company files the EIS1 or SEIS1 and HMRC authorises the EIS3 or SEIS3 certificates.' },
    { q: 'What happens if I miss the EIS1 deadline?', a: 'HMRC cannot accept an EIS1 more than 2 years after the end of the tax year the shares were issued in, or 2 years after the 4-month point if later. Investors then lose the income tax relief on those shares.' },
    { q: 'Who sends the EIS3 certificate to investors?', a: 'The company does. HMRC sends the company the authority, a unique investment reference and blank certificates. The company completes one for each investor and sends it to them. HMRC does not send certificates to investors.' },
    { q: 'Can I file one SEIS1 for several share issues?', a: 'No. You need a separate compliance statement for each share issue. Shares of the same class issued on the same day count as one issue, so a single closing date keeps the paperwork simpler.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-for-the-enterprise-investment-scheme', 'GOV.UK: Apply for the Enterprise Investment Scheme'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-to-use-the-seed-enterprise-investment-scheme', 'GOV.UK: Apply to use the Seed Enterprise Investment Scheme'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-tax-relief-for-investors', 'GOV.UK: Venture capital schemes, tax relief for investors'],
    ['https://www.legislation.gov.uk/ukpga/2007/3/section/205', 'Income Tax Act 2007, section 205: EIS compliance statements'],
    ['https://www.legislation.gov.uk/ukpga/2007/3/section/257ED', 'Income Tax Act 2007, section 257ED: SEIS compliance statements'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm35040', 'HMRC manual VCM35040: SEIS compliance statements'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm35090', 'HMRC manual VCM35090: unique investment reference and certificates'],
  ],

  related: [
    '/resources/eis-vs-seis/',
    '/resources/seis-advance-assurance-guide/',
    '/resources/statutory-registers-explained/',
    '/resources/self-assessment-deadlines/',
  ],
};
