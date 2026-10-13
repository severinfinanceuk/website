// Guide: /resources/eis-vs-seis/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the HMRC Venture Capital Schemes Manual and legislation.gov.uk on 13 October 2026
// (sources below). EIS company limits: Finance Act 2026 (c. 11) section 14, in force 6 April 2026.
// EIS sunset: Finance Act 2024 s11, in force 3 September 2024 (SI 2024/897), shares issued before 6 April 2035.
// SEIS company limits: GOV.UK page last changed 25 May 2023, no April 2026 change. KIC age and staff: VCM16060.
// Same-day SEIS and EIS issues: VCM34120 (ITA 2007 s257DK). Re-check each April and after each Budget.
export default {
  url: '/resources/eis-vs-seis/',
  section: 'company-services',
  title: 'EIS vs SEIS: Limits and Reliefs 2026-27 | Severin Finance',
  description: 'EIS vs SEIS in 2026-27: 30% or 50% income tax relief, £250,000 vs £10m a year to raise, and the EIS limits that doubled in April 2026. Free consultation.',
  h1: 'EIS vs SEIS: which scheme fits your round?',
  crumb: 'EIS vs SEIS',
  summary: 'SEIS gives 50% relief on raises up to £250,000; EIS gives 30% on up to £10m a year.',
  topic: 'Differences between the Enterprise Investment Scheme and the Seed Enterprise Investment Scheme',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/eis-seis/', label: 'Our EIS and SEIS service',
    boxTitle: 'SEIS, EIS or both?', text: 'We check which scheme your company qualifies for, apply for advance assurance and file the compliance statement after you raise.',
  },

  hero: {
    answer: 'SEIS is for very early companies: they can raise up to £250,000 in total, and investors get 50% income tax relief on up to £200,000 a year. EIS is for larger rounds: from 6 April 2026 most companies can raise £10 million a year and £24 million in total, and investors get 30% relief on up to £1 million.',
  },

  tldr: [
    'Investor income tax relief: <strong>50%</strong> under SEIS, <strong>30%</strong> under EIS.',
    'Company limits: SEIS <strong>£250,000</strong> in total; EIS <strong>£10m a year and £24m lifetime</strong> from 6 April 2026 (£20m and £40m for knowledge-intensive companies).',
    'Investors must hold the shares for at least <strong>3 years</strong> to keep the relief and the capital gains tax exemption.',
    'Most companies raise under SEIS first, then EIS. Issue the SEIS shares on an earlier day than any EIS shares.',
    'The EIS increases are law: Finance Act 2026, section 14. EIS runs for shares issued before <strong>6 April 2035</strong>.',
  ],

  sections: [
    {
      id: 'difference', h2: 'What is the difference between EIS and SEIS?', toc: 'The difference',
      body: [
        '<p>The difference is size and stage. The Seed Enterprise Investment Scheme (SEIS) is for small companies in their first 3 years of trading and gives investors more relief on a smaller raise. The Enterprise Investment Scheme (EIS) covers larger and older companies, with lower relief per pound but far higher limits. Our <a href="/uk/company-services/eis-seis/">EIS and SEIS advisers</a> check which scheme your company fits before you pitch.</p>',
        { caption: 'SEIS and EIS at a glance (2026-27)', head: ['Feature', 'SEIS', 'EIS'], rows: [
          ['Investor income tax relief', '50%', '30%'],
          ['Most an investor can put in a year', '£200,000', '£1 million (£2 million if at least £1 million goes into knowledge-intensive companies)'],
          ['Most the company can raise', '£250,000 in total', '£10m a year, £24m lifetime'],
          ['Company age', 'Trade started no more than 3 years ago', 'Within 7 years of first commercial sale (10 years for knowledge-intensive)'],
          ['Gross assets', 'No more than £350,000', 'No more than £30m before and £35m after the issue'],
          ['Employees', 'Fewer than 25', 'Fewer than 250 (500 for knowledge-intensive)'],
          ['Spend the money within', '3 years of the share issue', '2 years of the issue, or of starting to trade if later'],
        ], after: 'Source: GOV.UK venture capital schemes guidance and HMRC Venture Capital Schemes Manual VCM16060. Checked 13 October 2026.' },
        '<p>Both schemes need the company to be unquoted, independent, carrying on a qualifying trade with a permanent establishment in the UK, and raising money to grow the business. The investment must put the investor\'s capital at genuine risk.</p>',
      ],
    },
    {
      id: 'company-limits', h2: 'How much can a company raise under SEIS and EIS?', toc: 'Company limits',
      body: [
        '<p>A company can raise up to £250,000 in total under SEIS, and up to £10 million in any 12 months and £24 million over its lifetime under EIS. The EIS limits count money from all the venture capital schemes together, including SEIS and venture capital trusts.</p>',
        '<p>The SEIS £250,000 also includes any other de minimis state aid the company received in the 3 years up to the investment. A grant from a local business support programme can therefore reduce how much SEIS money you can take.</p>',
        { caption: 'EIS company limits from 6 April 2026', head: ['Limit', 'Most companies', 'Knowledge-intensive companies'], rows: [
          ['Raised in any 12 months', '£10 million', '£20 million'],
          ['Raised over the company\'s lifetime', '£24 million', '£40 million'],
          ['Gross assets before the issue', '£30 million', '£30 million'],
          ['Gross assets after the issue', '£35 million', '£35 million'],
        ], after: 'Source: Finance Act 2026, section 14, and GOV.UK, Apply for the Enterprise Investment Scheme. Specified Northern Ireland companies trading in goods or electricity keep the old limits (£5m a year, £12m lifetime, £15m and £16m gross assets).' },
        '<p>A knowledge-intensive company is one that spends a significant share of its costs on research, development or innovation and meets either an innovation test or a skilled employees test. If you think you qualify, gather the evidence early, because HMRC asks for it with the compliance statement.</p>',
      ],
    },
    {
      id: 'investor-reliefs', h2: 'What tax relief do investors get under each scheme?', toc: 'Investor reliefs',
      body: [
        '<p>SEIS investors get 50% of the amount invested off their income tax bill, and EIS investors get 30%. Both can carry the relief back to the previous tax year, and both pay no capital gains tax on a gain when they sell after the minimum holding period.</p>',
        { caption: 'Investor reliefs in 2026-27', head: ['Relief', 'SEIS', 'EIS'], rows: [
          ['Income tax relief', '50% of up to £200,000', '30% of up to £1m (£2m with knowledge-intensive companies)'],
          ['Carry back to the previous tax year', 'Yes', 'Yes'],
          ['No CGT on a gain when the shares are sold', 'Yes, if income tax relief was given and kept', 'Yes, if income tax relief was given and kept'],
          ['Relief on other gains', 'Reinvestment relief: no CGT on gains equal to 50% of the amount invested, up to £100,000', 'Deferral relief: gains reinvested from 1 year before to 3 years after the sale are deferred'],
          ['If the shares fall in value', 'Loss relief against income', 'Loss relief against income'],
        ], after: 'Source: GOV.UK, Venture capital schemes: tax relief for investors. Checked 13 October 2026.' },
        { caption: 'Illustrative example: a £100,000 investment in 2026-27', head: ['Item', 'SEIS', 'EIS'], rows: [
          ['Amount invested', '£100,000', '£100,000'],
          ['Income tax relief', '£50,000', '£30,000'],
          ['Net cost to the investor', '£50,000', '£70,000'],
        ], after: 'Illustrative figures only. Assumes the investor pays at least that much income tax in the year. Relief cannot be more than the investor\'s income tax bill.' },
        '<p>Investors who hold more than 30% of the company (with their associates), or who are employees, generally cannot claim. Paid directors can qualify in some cases. If an investor is selling a property or other asset at a gain, our guide to <a href="/resources/capital-gains-tax-on-property/">capital gains tax on property</a> explains the tax that deferral or reinvestment relief can reduce.</p>',
      ],
    },
    {
      id: 'holding-period', h2: 'How long do investors have to keep the shares?', toc: 'Holding period',
      body: [
        '<p>At least 3 years. If an investor sells, receives value back from the company, or the company stops meeting the rules in that time, HMRC can withdraw or reduce the relief.</p>',
        '<p>For EIS, the 3 years run from the share issue, or from the start of trading if that is later. For SEIS they run from the share issue. The company must tell HMRC within 60 days if it stops meeting the EIS conditions, so a change of trade, a sale or a new controlling shareholder needs checking before it happens.</p>',
      ],
    },
    {
      id: 'using-both', h2: 'Can a company use SEIS and EIS together?', toc: 'Using both',
      body: [
        '<p>Yes, and many do: SEIS for the first £250,000, then EIS for the rest of the round or later rounds. The order matters, because a company cannot issue SEIS shares once it has received EIS or venture capital trust investment.</p>',
        '<ul><li>Issue the SEIS shares first, on an earlier day than any EIS shares. HMRC treats EIS investment received up to and including the day of the SEIS issue as disqualifying.</li><li>Apply for advance assurance for both schemes at the same time if you plan to use both. Our <a href="/resources/seis-advance-assurance-guide/">SEIS advance assurance guide</a> sets out what HMRC asks for.</li><li>Money raised under SEIS counts towards the EIS lifetime limit.</li><li>Each issue needs its own compliance statement: SEIS1 for the SEIS shares and EIS1 for the EIS shares.</li></ul>',
        '<p>If you also want to give staff share options, check how an option scheme fits with your investors. Our guide to <a href="/resources/emi-share-options/">EMI share options</a> covers the separate rules for that.</p>',
      ],
    },
    {
      id: 'april-2026', h2: 'What changed for EIS in April 2026?', toc: 'April 2026 changes',
      body: [
        '<p>The EIS company limits doubled from 6 April 2026. They were announced at the Budget on 26 November 2025 and became law in section 14 of the Finance Act 2026. The investor limits and the 30% relief did not change, and SEIS was not affected.</p>',
        { caption: 'EIS company limits before and after 6 April 2026', head: ['Limit', 'Up to 5 April 2026', 'From 6 April 2026'], rows: [
          ['Annual limit', '£5m (£10m knowledge-intensive)', '£10m (£20m knowledge-intensive)'],
          ['Lifetime limit', '£12m (£20m knowledge-intensive)', '£24m (£40m knowledge-intensive)'],
          ['Gross assets before and after the issue', '£15m and £16m', '£30m and £35m'],
        ], after: 'Source: HMRC policy paper published 26 November 2025, and Finance Act 2026, section 14. Checked 13 October 2026.' },
        '<p>EIS relief is available for shares issued before 6 April 2035, after the end date was extended by the Finance Act 2024. SEIS has no equivalent end date. The same Budget cut income tax relief for venture capital trust investors from 30% to 20% from 6 April 2026, which may make direct EIS investment more attractive to some investors.</p>',
      ],
    },
    {
      id: 'which-scheme', h2: 'Which scheme should your company use?', toc: 'Which to use',
      body: [
        '<p>If you are within 3 years of starting to trade, have gross assets under £350,000 and fewer than 25 staff, use SEIS for your first £250,000: the 50% relief makes an early cheque much easier to write. If you need more, or you are already past those limits, use EIS.</p>',
        '<p>Neither scheme helps investors who do not pay UK income tax, and both restrict terms such as guaranteed returns, preferential rights to assets or early exits. Agree the share terms with your investors before you apply for advance assurance, and set the price per share with a credible valuation: our guide on <a href="/resources/how-to-value-a-business/">how to value a business</a> explains the usual methods.</p>',
        '<p>After the shares are issued, nobody can claim until the company files its compliance statement. Our guide to the <a href="/resources/eis1-compliance-statement/">EIS1 and SEIS1 compliance statements</a> explains when to file and what follows.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is SEIS better than EIS for investors?', a: 'SEIS gives more relief, 50% rather than 30%, but only on up to £200,000 a year and only in very early companies. EIS allows up to £1 million a year, or £2 million with knowledge-intensive companies, so larger investors often use both.' },
    { q: 'Can I raise SEIS and EIS in the same round?', a: 'Yes, but issue the SEIS shares on an earlier day than the EIS shares. A company cannot use SEIS once it has received EIS investment, and HMRC counts EIS shares issued on the same day.' },
    { q: 'Did the EIS limits go up in 2026?', a: 'Yes. From 6 April 2026 most companies can raise £10 million a year and £24 million in total, double the old limits. Gross assets can be up to £30 million before the issue. The change is in the Finance Act 2026.' },
    { q: 'When does EIS end?', a: 'EIS relief is available for shares issued before 6 April 2035. The government extended the end date from 2025 in the Finance Act 2024. SEIS has no equivalent end date.' },
    { q: 'Can directors invest under SEIS or EIS?', a: 'Sometimes. Employees cannot claim, but directors can in some cases, and anyone holding more than 30% of the company with their associates cannot. Under SEIS the 30% test applies from incorporation, so check before founders subscribe.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-for-the-enterprise-investment-scheme', 'GOV.UK: Apply for the Enterprise Investment Scheme'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-apply-to-use-the-seed-enterprise-investment-scheme', 'GOV.UK: Apply to use the Seed Enterprise Investment Scheme'],
    ['https://www.gov.uk/guidance/venture-capital-schemes-tax-relief-for-investors', 'GOV.UK: Venture capital schemes, tax relief for investors'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/section/14', 'Finance Act 2026, section 14: EIS amounts and asset requirements'],
    ['https://www.gov.uk/government/publications/enterprise-investment-scheme-eis-and-venture-capital-trusts-vct-changes/venture-capital-trusts-enterprise-investment-scheme-investment-limit-increase-and-restructure', 'HMRC: EIS and VCT limit increase from April 2026'],
    ['https://www.legislation.gov.uk/uksi/2024/897/note/made', 'SI 2024/897: EIS and VCT relief extended to 6 April 2035'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm16060', 'HMRC manual VCM16060: knowledge-intensive companies'],
    ['https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm34120', 'HMRC manual VCM34120: SEIS and previous EIS or VCT investment'],
  ],

  related: [
    '/resources/seis-advance-assurance-guide/',
    '/resources/eis1-compliance-statement/',
    '/resources/emi-share-options/',
    '/resources/how-to-value-a-business/',
  ],
};
