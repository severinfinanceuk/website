// Guide: /resources/uk-company-for-non-residents/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026 against GOV.UK (company address rules, Companies House fees,
// verifying your identity for Companies House, corporation tax rates, marginal relief), HMRC manuals
// INTM120030 and INTM120060 (company residence, central management and control), INTM120080 (treaty
// tie-breaker), SAIM5120 (UK dividends of non-residents: s399 ITTOIA abolished from 2026-27), EIM40004 and
// INTM153180 (non-resident directors' fees). Identity verification detail lives in the
// companies-house-identity-verification guide; residence of individuals in statutory-residence-test.
// No bank or software names. UK-only wording: no countries named.
export default {
  url: '/resources/uk-company-for-non-residents/',
  section: 'cross-border',
  title: 'UK Company for Non-Residents: The Rules | Severin Finance',
  description: 'Running a UK company from abroad: £100 to register, director ID checks, a UK office, tax residence and paying yourself. Free consultation.',
  h1: 'Running a UK company when you live outside the UK',
  crumb: 'UK company for non-residents',
  summary: 'Forming and running a UK company from abroad: address, ID checks, tax residence and paying yourself.',
  topic: 'UK limited companies owned and run by non-UK residents',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/cross-border/uk-company-from-abroad/', label: 'Our UK company from abroad service',
    boxTitle: 'Living abroad with a UK company?', text: 'We register the company, guide each director through identity checks, and handle its UK accounts and tax every year.',
  },

  hero: {
    answer: 'You can own and run a UK company from abroad. Directors need not live in the UK, but the company needs a UK registered office, and every director must verify their identity with Companies House. Registering online costs £100. A UK company is UK resident for corporation tax, and if it is managed abroad it may be taxed there too.',
  },

  tldr: [
    'Registration costs <strong>£100</strong> online and usually takes about 24 hours. Directors must be 16 or over and can live anywhere.',
    'The registered office must be a <strong>physical UK address</strong>, not a PO box. A registered email address is also required.',
    'Every director has had to <strong>verify their identity</strong> since 18 November 2025. This can be done from abroad.',
    'A UK-incorporated company is <strong>UK resident</strong> for corporation tax: 19% on profits up to £50,000, 25% over £250,000.',
    'If the board really runs the company from abroad, it can be <strong>resident in two countries</strong>, and the tax treaty decides.',
    'Dividends to most non-residents carry <strong>no UK tax</strong>. Salary for work done in the UK goes through PAYE.',
  ],

  sections: [
    {
      id: 'can-you', h2: 'Can you run a UK company if you live abroad?', toc: 'Can you do it',
      body: [
        '<p>Yes. UK company law does not require directors or shareholders to live in the UK, and the whole process can be done online. Our team that sets up a <a href="/cross-border/uk-company-from-abroad/">UK company from abroad</a> handles the registration and the UK tax side, so the company is ready to trade without you visiting.</p>',
        { caption: 'What a UK company needs, wherever its directors live', head: ['Requirement', 'Rule'], rows: [
          ['Directors', 'At least one, aged 16 or over. They do not need to live in the UK'],
          ['Registered office', 'A physical address in the part of the UK where the company is registered'],
          ['Registered email address', 'Required. Companies House uses it to contact you. It is not published'],
          ['Identity verification', 'Every director and person with significant control'],
          ['Registration fee', '£100 online, usually within 24 hours. £124 by post'],
        ], after: 'Source: GOV.UK, Set up a limited company, and Companies House fees. Checked 13 October 2026.' },
        '<p>Being a non-resident director does not change the company\'s filings. It still prepares accounts, files a corporation tax return and confirms its details each year, exactly like any other UK company.</p>',
      ],
    },
    {
      id: 'identity', h2: 'How do directors living abroad verify their identity?', toc: 'Identity checks',
      body: [
        '<p>Online, either through GOV.UK One Login or through an Authorised Corporate Service Provider (an agent registered with Companies House). Companies House says you can use an agent from any country. Each person then receives a personal code to give when the company is registered or when they are appointed.</p>',
        '<ul><li>The One Login app reads the chip in a biometric passport. If your documents cannot be read, an authorised agent can check them for you instead.</li><li>Do not post or email identity documents to Companies House.</li><li>A company cannot file its confirmation statement unless all its directors are verified.</li></ul>',
        '<p>Our guide to <a href="/resources/companies-house-identity-verification/">Companies House identity verification</a> covers the dates for existing directors and people with significant control.</p>',
      ],
    },
    {
      id: 'address', h2: 'Does a UK company need a UK address?', toc: 'UK address',
      body: [
        '<p>Yes. It needs a registered office: a physical address in England and Wales, Scotland or Northern Ireland, matching where the company is registered. Someone there must deal with post, and PO boxes are not allowed. The address is public.</p>',
        '<p>Many non-resident owners use an accountant\'s, solicitor\'s or service provider\'s address, with their permission. Directors also give a service address, which can be anywhere in the world, while their home address is kept off the public register.</p>',
        '<h3>A registered office is not a UK business</h3>',
        '<p>For VAT, a company whose only UK presence is a registered or virtual office is usually not established in the UK. A company not established in the UK has no VAT threshold: it must register as soon as it makes taxable supplies in the UK, or expects to within 30 days. Our guide to <a href="/resources/vat-registration/">VAT registration</a> explains the thresholds for established businesses.</p>',
      ],
    },
    {
      id: 'bank', h2: 'Can a non-resident open a UK business bank account?', toc: 'Bank accounts',
      body: [
        '<p>Often yes, but each bank and payment provider sets its own rules on where directors live, and the checks take longer. Some ask for a director to have a UK address or to attend in person. Others onboard non-resident directors fully online.</p>',
        '<p>Expect to provide the certificate of incorporation, the articles, proof of identity and address for each director and significant shareholder, and a short description of the business and its expected UK customers. Having the company\'s tax registrations in place and an accountant on record usually helps.</p>',
      ],
    },
    {
      id: 'tax-residence', h2: 'Where is your UK company tax resident?', toc: 'Tax residence',
      body: [
        '<p>In the UK. A company incorporated in the UK is UK resident for corporation tax, wherever its directors live. The question is whether the country where you live also treats it as resident there.</p>',
        '<p>Most countries look at where the company is really managed. The UK test for companies formed elsewhere is "central management and control": where the highest-level decisions are actually taken, which HMRC says is a question of fact, not of where the paperwork says the board meets. If you make every strategic decision from home, the company may be resident in both countries.</p>',
        { caption: 'How company residence is decided', head: ['Situation', 'UK position'], rows: [
          ['UK company, run from the UK', 'UK resident. Taxed in the UK only, in most cases'],
          ['UK company, board decisions taken abroad', 'Still UK resident by incorporation, and possibly resident abroad too'],
          ['Dual resident, and the tax treaty gives residence to the other country', 'Treated as not UK resident for UK tax ("treaty non-resident")'],
        ], after: 'Source: HMRC International Manual INTM120030 and INTM120060. Some treaties settle dual residence by agreement between the two tax authorities.' },
        '<p>Running the company from abroad can also give it a taxable presence in the country where you live. Decide where board meetings and key decisions happen, record them, and take advice in both countries before the company starts trading.</p>',
      ],
    },
    {
      id: 'uk-tax', h2: 'What does the company pay and file in the UK?', toc: 'UK tax and filings',
      body: [
        '<p>Corporation tax on its profits, at 19% on profits of £50,000 or less and 25% on profits over £250,000, with marginal relief in between. These limits are shared between associated companies, wherever those companies are resident. Our guide to <a href="/resources/corporation-tax-rates/">corporation tax rates</a> has the detail.</p>',
        { caption: 'Main yearly duties of a UK company', head: ['Duty', 'Deadline'], rows: [
          ['Register for corporation tax', 'Within 3 months of starting to do business'],
          ['Annual accounts to Companies House', '9 months after the year end (21 months from incorporation for the first accounts)'],
          ['Corporation tax payment', '9 months and 1 day after the year end'],
          ['Company tax return (CT600)', '12 months after the year end'],
          ['Confirmation statement', 'At least once every 12 months'],
        ], after: 'See our guide to limited company deadlines for penalties.' },
        '<p>These duties fall on the directors wherever they live, so late filings carry the same penalties. Our <a href="/resources/limited-company-deadlines/">limited company deadlines</a> guide lists each penalty.</p>',
      ],
    },
    {
      id: 'paying-yourself', h2: 'How are you taxed on money you take out?', toc: 'Paying yourself',
      body: [
        '<p>Dividends a UK company pays you are generally not taxed in the UK if you are not UK resident, and the UK does not deduct tax from them. HMRC notes an exception for individuals who also have other taxable UK income. The dividends are usually taxed in the country where you live.</p>',
        '<ul><li><strong>Salary for work done in the UK</strong> is taxable in the UK and goes through the company\'s PAYE payroll.</li><li><strong>Salary for work done abroad</strong> is normally outside UK income tax for a non-resident.</li><li><strong>Director\'s fees</strong> have their own article in many tax treaties, which can let the UK tax them because the company is UK resident. Check the treaty before you set your pay.</li></ul>',
        '<p>Whether you are non-resident is decided each tax year by the <a href="/resources/statutory-residence-test/">Statutory Residence Test</a>, so count your UK days. Our guide on <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how to pay yourself from a limited company</a> covers salary, dividends and the legal limits on what you can take.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can a non-resident be the only director of a UK company?', a: 'Yes. A UK company can have a single director of any nationality who lives anywhere, as long as they are 16 or over and have verified their identity with Companies House. The company still needs a UK registered office.' },
    { q: 'Do I need to visit the UK to set up a company?', a: 'No. Registration with Companies House is online, identity verification can be done from abroad through GOV.UK One Login or an authorised agent, and HMRC registrations are online too.' },
    { q: 'Is my UK company taxed in the UK if I run it from abroad?', a: 'It is UK resident because it was incorporated here, so UK corporation tax applies. If the country where you live also treats it as resident, the tie-breaker in the tax treaty decides which country taxes it as resident.' },
    { q: 'Do non-residents pay UK tax on dividends from a UK company?', a: 'Usually not. Most non-UK residents pay no UK tax on UK dividends, and the company does not deduct tax from them. HMRC makes an exception for individuals with other taxable UK income. The country where you live usually taxes them.' },
    { q: 'Can I use a virtual office as my registered office?', a: 'Yes, if it is a physical UK address where post is dealt with and the provider agrees. A virtual office alone does not usually make the company established in the UK for VAT, which means there is no VAT threshold.' },
  ],

  sources: [
    ['https://www.gov.uk/limited-company-formation/company-address', 'GOV.UK: Company address rules'],
    ['https://www.gov.uk/guidance/verifying-your-identity-for-companies-house', 'GOV.UK: Verifying your identity for Companies House'],
    ['https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees', 'GOV.UK: Companies House fees'],
    ['https://www.gov.uk/hmrc-internal-manuals/international-manual/intm120030', 'HMRC manual: Company residence (INTM120030)'],
    ['https://www.gov.uk/hmrc-internal-manuals/international-manual/intm120060', 'HMRC manual: Central management and control (INTM120060)'],
    ['https://www.gov.uk/corporation-tax-rates', 'GOV.UK: Corporation tax rates'],
    ['https://www.gov.uk/hmrc-internal-manuals/savings-and-investment-manual/saim5120', 'HMRC manual: UK dividends of non-residents (SAIM5120)'],
    ['https://www.gov.uk/hmrc-internal-manuals/employment-income-manual/eim40004', 'HMRC manual: Earnings of non-resident directors (EIM40004)'],
  ],

  related: [
    '/resources/companies-house-identity-verification/',
    '/resources/uk-branch-or-subsidiary/',
    '/resources/statutory-residence-test/',
    '/resources/how-to-pay-yourself-from-a-limited-company/',
  ],
};
