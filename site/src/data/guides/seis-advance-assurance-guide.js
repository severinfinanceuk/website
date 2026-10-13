// Guide: /resources/seis-advance-assurance-guide/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and the HMRC Venture Capital Schemes Manual on 13 October 2026 (sources below).
// Response targets: VCM60270 (aims for 15 working days, 40 for complex cases; no more than 2 rounds of
// correspondence). Named investors: VCM60230. Refusals: VCM60250 and VCM60260. UTR and CRN needed: VCM60020.
// SEIS company conditions: GOV.UK page last changed 25 May 2023. Re-check each April and after each Budget.
export default {
  url: '/resources/seis-advance-assurance-guide/',
  section: 'company-services',
  title: 'SEIS Advance Assurance: How to Apply | Severin Finance',
  description: 'How to get SEIS advance assurance from HMRC: what to send, named investors, the 15 working day target and why applications are refused. Free consultation.',
  h1: 'SEIS advance assurance: how to apply and what HMRC needs',
  crumb: 'SEIS advance assurance',
  summary: 'What to send HMRC, how long it takes and the common reasons SEIS advance assurance is refused.',
  topic: 'SEIS advance assurance applications to HMRC',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/eis-seis/', label: 'Our EIS and SEIS service',
    boxTitle: 'Applying before a round?', text: 'We check your company qualifies, prepare the application and documents, and deal with HMRC\'s questions.',
  },

  hero: {
    answer: 'SEIS advance assurance is HMRC\'s opinion, before you issue shares, that your company and planned share issue are likely to qualify. You apply online with your business plan, forecasts, articles, register of members and named investors. HMRC aims to reply within 15 working days, or 40 for complex cases. It is optional, but most investors expect it.',
  },

  tldr: [
    'Advance assurance is <strong>optional</strong> and non-binding, but many angels and platforms will not invest without it.',
    'Apply <strong>before</strong> the shares are issued. HMRC will not give advance assurance for shares already issued.',
    'Send a business plan, forecasts, articles, register of members, draft investor documents and the <strong>names and amounts</strong> of committed investors.',
    'HMRC aims to respond within <strong>15 working days</strong>, and <strong>40 working days</strong> for complex cases.',
    'HMRC gives no feedback on incomplete applications, so send everything in one go.',
  ],

  sections: [
    {
      id: 'what-it-is', h2: 'What is SEIS advance assurance?', toc: 'What it is',
      body: [
        '<p>It is a written opinion from HMRC that a share issue you are planning is likely to meet the Seed Enterprise Investment Scheme (SEIS) conditions. It is a non-statutory, discretionary service, and it covers one specific share issue. Our <a href="/uk/company-services/eis-seis/">EIS and SEIS advisers</a> prepare the application and answer HMRC\'s questions for you.</p>',
        '<p>Advance assurance does not confirm that any individual investor will get relief. Each investor must meet their own conditions, such as holding no more than 30% of the company and not being an employee. It is also only valid if you disclosed all the relevant facts. If the terms of the deal change in a material way, or the information HMRC relied on is out of date, HMRC is not bound by it.</p>',
        '<p>Not sure whether SEIS or EIS fits your raise? Our guide to <a href="/resources/eis-vs-seis/">EIS vs SEIS</a> compares the limits and reliefs.</p>',
      ],
    },
    {
      id: 'do-you-need-it', h2: 'Do you need advance assurance before raising?', toc: 'Do you need it',
      body: [
        '<p>No, the law does not require it, but in practice most SEIS investors, syndicates and crowdfunding platforms want it before they commit. It reassures them that the company is likely to qualify for the 50% income tax relief.</p>',
        '<p>Timing is the key point. HMRC will not give advance assurance once the shares have been issued: at that stage you file the SEIS1 compliance statement instead. So apply after you have a plan and interested investors, but before any shares are allotted.</p>',
        '<p>Before you apply, the company must be incorporated and registered with HMRC for corporation tax, because the form asks for its Unique Taxpayer Reference (UTR) and Companies House registration number. If you have not formed the company yet, our <a href="/uk/company-services/company-formation/">company formation</a> team can set it up, and directors will also need to complete <a href="/resources/companies-house-identity-verification/">Companies House identity verification</a>.</p>',
      ],
    },
    {
      id: 'conditions', h2: 'Which SEIS conditions does HMRC check?', toc: 'SEIS conditions',
      body: [
        '<p>HMRC checks that the company is a qualifying company, the shares are eligible shares, the money will be used for a qualifying business activity, and the company is a genuine growth company with capital at risk.</p>',
        { caption: 'Main SEIS company conditions when the shares are issued', head: ['Condition', 'Rule'], rows: [
          ['Amount raised', 'No more than £250,000 in total under SEIS, including other de minimis state aid in the previous 3 years'],
          ['Gross assets', 'No more than £350,000'],
          ['Employees', 'Fewer than 25 full-time equivalent'],
          ['Age of the trade', 'Carried on for no more than 3 years, and no earlier different trade'],
          ['Previous investment', 'No EIS or venture capital trust investment received'],
          ['Independence', 'Unquoted, not controlled by another company, no partnership membership'],
          ['Shares', 'Full risk ordinary shares, paid up in full in cash, with no preferential rights to assets'],
          ['Use of money', 'Spent on the qualifying trade within 3 years of the share issue'],
        ], after: 'Source: GOV.UK, Apply to use the Seed Enterprise Investment Scheme. Checked 13 October 2026.' },
      ],
    },
    {
      id: 'what-to-send', h2: 'What do you need to send HMRC?', toc: 'What to send',
      body: [
        '<p>HMRC asks for the documents below, uploaded with the online form. Missing items are the most common cause of delay.</p>',
        '<ul><li>how much you plan to raise, and from which scheme</li><li>a business plan and financial forecasts</li><li>the latest accounts, if the company has any</li><li>which companies will use the money, and what it will be spent on</li><li>the current articles of association, and any planned changes</li><li>the register of members at the date you apply</li><li>the latest drafts of investor documents, such as a pitch deck or subscription agreement</li><li>any shareholder agreements</li><li>a signed authority letter if an agent applies for you</li></ul>',
        '<p>The business plan should show how the money will be spent, any follow-on funding you expect to need, and how the investment will grow the business, for example in turnover or staff. Flag any condition you are unsure about rather than leaving it out: limited disclosure makes the assurance invalid.</p>',
        '<h3>Named investors</h3>',
        '<p>If the company has never raised under SEIS, EIS or a venture capital trust, HMRC expects the names, addresses and intended amounts of investors who have agreed to invest. One or two names covering a small part of the round is not enough. If you raise through a fund manager or crowdfunding platform, send evidence that it has agreed to act or started its screening, not just that you approached it. Your financial forecasts carry weight here, so our guide to <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a> may help.</p>',
      ],
    },
    {
      id: 'how-to-apply', h2: 'How do you apply for SEIS advance assurance?', toc: 'How to apply',
      body: [
        '<p>You apply through HMRC\'s online service, linked from the GOV.UK page <a href="https://www.gov.uk/guidance/venture-capital-schemes-apply-for-advance-assurance">Venture capital schemes: apply for advance assurance</a>. You need HMRC sign-in details to use it, and you can create them at the start if you do not have any.</p>',
        '<ol><li>Check the company meets the SEIS conditions above.</li><li>Gather the documents and investor details.</li><li>Complete the online form, which only a director, the company secretary or an authorised agent can submit. An agent needs a signed letter from the company dated within the last 3 months.</li><li>Upload the documents and submit. Use a separate application for each proposed investment.</li><li>Answer any follow-up questions from HMRC\'s venture capital reliefs team promptly.</li></ol>',
        '<p>If you plan to raise under both SEIS and EIS, tell HMRC about the whole funding plan in the application, including the EIS money, so the assurance reflects the real round.</p>',
      ],
    },
    {
      id: 'how-long', h2: 'How long does SEIS advance assurance take?', toc: 'How long',
      body: [
        '<p>HMRC aims to respond to most applications within 15 working days, and within 40 working days for complex cases, according to its Venture Capital Schemes Manual. The reply is either an advance assurance, a refusal, or a request for more information.</p>',
        '<p>Allow more time in your fundraising plan. If an application is incomplete or HMRC does not consider it, HMRC gives no feedback, and you lose time before you notice. Once HMRC has given its opinion, it will engage in no more than two rounds of correspondence about it. If the details of the investment change, you must send a new application.</p>',
      ],
    },
    {
      id: 'refusals', h2: 'Why does HMRC refuse SEIS advance assurance?', toc: 'Why it is refused',
      body: [
        '<p>HMRC refuses when it is not satisfied the company is likely to meet the conditions, and it can decline to give an opinion when the information is not enough to decide. The common reasons are:</p>',
        '<ul><li><strong>Shares already issued:</strong> file the SEIS1 instead.</li><li><strong>Speculative application:</strong> no named investors, or only a token amount committed.</li><li><strong>Missing documents:</strong> no business plan, forecasts or draft investor documents.</li><li><strong>Risk to capital not met:</strong> the plan does not show long-term growth of the trade, or the terms protect investors\' money from loss.</li><li><strong>Low-risk marketing:</strong> pitch materials that call the investment low risk or suggest capital is likely to be preserved.</li><li><strong>Disqualifying arrangements:</strong> most of the money passing to a subcontractor before the work is done, or most of the work done by people outside the company.</li><li><strong>Excluded activities:</strong> a large part of the trade is in an excluded area, such as dealing in land or financial activities.</li><li><strong>Tax avoidance:</strong> the shares look issued mainly for the tax relief.</li></ul>',
        '<p>A refusal is not HMRC\'s final view of the law. You can fix the issue and reapply, or issue shares and have HMRC review the facts when the SEIS1 is filed. That step is covered in our guide to the <a href="/resources/eis1-compliance-statement/">EIS1 and SEIS1 compliance statements</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is SEIS advance assurance mandatory?', a: 'No. It is an optional opinion from HMRC. You can issue SEIS shares without it and file the SEIS1 afterwards, but many investors and platforms will not commit until you have it.' },
    { q: 'Can I apply for advance assurance after issuing shares?', a: 'No. HMRC will not give advance assurance for shares that have already been issued. File the SEIS1 compliance statement for those shares instead, once the company has traded for 4 months or spent 70% of the money.' },
    { q: 'Do I need investors before applying for SEIS advance assurance?', a: 'Usually, yes. A company that has not raised under the schemes before should name the investors who have agreed to invest and how much, or show that a fund manager or platform has agreed to act.' },
    { q: 'Does advance assurance expire?', a: 'HMRC sets no fixed expiry, but it covers one planned share issue. It stops applying if the terms change materially, the information it relied on is out of date, or you did not disclose all relevant facts.' },
    { q: 'Can an accountant apply for advance assurance for me?', a: 'Yes. An agent can apply if the company gives them a signed letter of authority dated within the last 3 months. A director or the company secretary can also apply directly.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-for-advance-assurance', 'GOV.UK: Apply for advance assurance'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-to-use-the-seed-enterprise-investment-scheme', 'GOV.UK: Apply to use the Seed Enterprise Investment Scheme'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm60230', 'HMRC manual VCM60230: no speculative applications'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm60250', 'HMRC manual VCM60250: when HMRC will not give advance assurance'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm60260', 'HMRC manual VCM60260: disqualifying arrangements'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm60270', 'HMRC manual VCM60270: responding to applications'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm60020', 'HMRC manual VCM60020: conditions before applying'],
  ],

  related: [
    '/resources/eis-vs-seis/',
    '/resources/eis1-compliance-statement/',
    '/resources/companies-house-identity-verification/',
    '/resources/cash-flow-forecasting/',
  ],
};
