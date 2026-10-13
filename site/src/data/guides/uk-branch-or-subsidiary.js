// Guide: /resources/uk-branch-or-subsidiary/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026 against GOV.UK (Register as an overseas company; Overseas companies
// registered in the UK: OS IN01 within 1 month, £124, accounts OS AA01 3 months after parent-law disclosure
// or 13 months, OS VS01, OS DS01; Companies House fees; Life of a company part 1: group audit and s479A
// needs a UK parent; corporation tax rates and marginal relief), legislation.gov.uk (CTA 2010 s1141 as
// substituted by Finance Act 2026 from 1 January 2026) and HMRC manuals INTM262040 (CT on PE profits),
// CTM03940 (associated companies regardless of residence), INTM120030 and INTM120060 (company residence).
// Note: GOV.UK quick page says changes within 14 days, detailed guidance says 21 days: kept general.
// UK-only wording: the home country is never named.
export default {
  url: '/resources/uk-branch-or-subsidiary/',
  section: 'cross-border',
  title: 'UK Branch or Subsidiary? Which to Choose | Severin Finance',
  description: 'Opening in the UK: a branch on form OS IN01 (£124, within 1 month) or a UK subsidiary (£100). Tax, liability and filings compared. Free consultation.',
  h1: 'UK branch or UK subsidiary: which should an overseas business choose?',
  crumb: 'UK branch or subsidiary',
  summary: 'A UK branch or a UK subsidiary: registration, corporation tax, liability and filings compared.',
  topic: 'Choosing between a UK establishment (branch) and a UK subsidiary for an overseas company',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/cross-border/uk-company-from-abroad/', label: 'Our UK company from abroad service',
    boxTitle: 'Opening in the UK?', text: 'We compare a branch with a subsidiary for your business, register whichever you choose and handle its UK corporation tax.',
  },

  hero: {
    answer: 'A UK branch is part of your overseas company: you register it with Companies House on form OS IN01 within one month of opening, for £124, and pay UK corporation tax on the profits it earns. A UK subsidiary is a separate UK company, costs £100 to register online, limits liability and pays UK corporation tax on all its profits.',
  },

  tldr: [
    'A <strong>branch</strong> (a "UK establishment") is not a separate legal person. The overseas company is liable for everything it does.',
    'Register a branch on <strong>form OS IN01</strong> within <strong>1 month</strong> of opening. The fee is <strong>£124</strong>, on paper.',
    'A <strong>subsidiary</strong> is a UK limited company owned by the parent, registered online for <strong>£100</strong>.',
    'Both pay UK corporation tax: <strong>19%</strong> on profits up to £50,000 and <strong>25%</strong> over £250,000, with limits shared across the whole group.',
    'A branch files the <strong>parent company\'s accounts</strong> on the UK public register. A subsidiary files its own.',
  ],

  sections: [
    {
      id: 'which', h2: 'Should you open a UK branch or a UK subsidiary?', toc: 'Branch or subsidiary',
      body: [
        '<p>A subsidiary suits most businesses planning to grow in the UK, because it ring-fences UK liabilities and looks like any other UK company to customers and lenders. A branch can suit a smaller or trial presence where the parent is happy to stand behind the UK debts. Our team that helps businesses set up a <a href="/cross-border/uk-company-from-abroad/">UK company from abroad</a> compares both for your business, then registers and runs whichever you choose.</p>',
        { caption: 'UK branch compared with UK subsidiary', head: ['Point', 'UK branch (UK establishment)', 'UK subsidiary'], rows: [
          ['Legal status', 'Part of the overseas company', 'A separate UK limited company'],
          ['Liability', 'The overseas company is liable for all UK debts', 'Limited to the subsidiary, unless the parent gives guarantees'],
          ['Registration', 'Form OS IN01 on paper, £124, within 1 month of opening', 'Online, £100, usually within 24 hours'],
          ['UK corporation tax', 'On profits attributable to the UK permanent establishment', 'On all its profits, as a UK resident company'],
          ['Accounts on the UK register', 'The whole overseas company\'s accounts', 'The subsidiary\'s own UK accounts'],
          ['Directors\' identity verification', 'Required', 'Required'],
        ], after: 'Sources: GOV.UK, Register as an overseas company, and Overseas companies registered in the UK. Checked 13 October 2026.' },
      ],
    },
    {
      id: 'register-branch', h2: 'How do you register a UK branch with Companies House?', toc: 'Registering a branch',
      body: [
        '<p>You send form OS IN01 to Companies House within one month of opening a place of business or branch in the UK, with the £124 fee. You only need to register if you have a physical presence here. Selling into the UK, or using an independent agent, does not by itself count.</p>',
        '<ul><li>A certified copy of the company\'s constitution, with a certified English translation if it is in another language.</li><li>A copy of the latest accounts, where the law of the parent company\'s home country requires them to be disclosed.</li><li>Details of the directors, the company secretary and anyone authorised to represent the company in the UK.</li></ul>',
        { caption: 'Ongoing Companies House duties for a registered UK branch', head: ['Duty', 'Rule'], rows: [
          ['Accounts (form OS AA01)', 'Within 3 months of disclosure under the parent\'s home law. Otherwise within 13 months of the year end'],
          ['Directors\' identity verification (form OS VS01)', 'Confirmed by the anniversary of the opening date'],
          ['Changes to the company or the branch', 'Reported on the OS change forms within the short deadlines Companies House sets'],
          ['Name display', 'Registered name and country of incorporation shown at each UK location'],
          ['Closing the branch', 'Form OS DS01'],
        ], after: 'Source: GOV.UK, Overseas companies registered in the UK. Checked 13 October 2026.' },
      ],
    },
    {
      id: 'set-up-subsidiary', h2: 'How do you set up a UK subsidiary?', toc: 'Setting up a subsidiary',
      body: [
        '<p>You register a new UK limited company online with the overseas company as its shareholder. It needs a UK registered office, a registered email address and at least one director who has verified their identity with Companies House. Directors do not need to live in the UK.</p>',
        '<p>Our guide to a <a href="/resources/uk-company-for-non-residents/">UK company for non-residents</a> covers the registered office, identity checks and bank accounts in detail.</p>',
        '<h3>Will the subsidiary need an audit?</h3>',
        '<p>Possibly. The small company audit exemption looks at the size of the whole group, not just the UK company, so the subsidiary of a large group usually needs an audit. The exemption where a parent guarantees its subsidiary is only available if the parent is established under UK law. A company is small for financial years starting on or after 6 April 2025 if it meets two of: turnover up to £15 million, balance sheet up to £7.5 million, 50 or fewer employees.</p>',
      ],
    },
    {
      id: 'branch-tax', h2: 'How is a UK branch taxed?', toc: 'Branch tax',
      body: [
        '<p>A branch is normally a UK permanent establishment, and the overseas company pays UK corporation tax on the profits attributable to it. Those profits are worked out as if the branch were a separate business dealing at arm\'s length with the rest of the company.</p>',
        '<ul><li>A company has a UK permanent establishment if it has a fixed place of business here, such as an office, branch, workshop or building site, through which its business is carried on.</li><li>It can also have one without premises, if someone acting for it habitually concludes contracts in the UK, or plays the principal role in concluding them. That wording applies to periods starting on or after 1 January 2026.</li><li>The company must tell HMRC within 3 months of becoming liable to corporation tax.</li></ul>',
        '<p>The UK does not charge extra tax when branch profits are sent back to the parent. The parent company\'s home country will usually tax them too, with relief for the UK tax under the tax treaty (double taxation agreement).</p>',
      ],
    },
    {
      id: 'subsidiary-tax', h2: 'How is a UK subsidiary taxed?', toc: 'Subsidiary tax',
      body: [
        '<p>As a UK resident company, on all its profits. It is resident because it is incorporated in the UK, and pays 19% on profits of £50,000 or less and 25% over £250,000, with marginal relief in between. Our guide to <a href="/resources/corporation-tax-rates/">corporation tax rates</a> explains marginal relief.</p>',
        '<p>Those limits are divided by the number of associated companies, and HMRC counts associated companies wherever they are resident. A subsidiary of a large group therefore often pays 25% on almost all its profits.</p>',
        { caption: 'Illustrative example: a UK subsidiary with 4 associated companies', head: ['Limit', 'Standalone company', 'Group of 5 companies'], rows: [
          ['Small profits rate (19%) up to', '£50,000', '£10,000'],
          ['Main rate (25%) above', '£250,000', '£50,000'],
        ], after: 'Illustrative: a parent and 3 other group companies abroad make 4 associated companies, so the limits are divided by 5. Source: GOV.UK, Marginal relief, and HMRC manual CTM03940.' },
        '<p>Dividends the subsidiary pays to its parent carry no UK tax deduction. Charges between the subsidiary and the group, such as management fees, royalties and interest, should be priced at arm\'s length. If the parent\'s board makes the subsidiary\'s real decisions abroad, the subsidiary can become resident in two countries, which the tax treaty then has to resolve.</p>',
      ],
    },
    {
      id: 'perception', h2: 'Which looks better to UK customers and lenders?', toc: 'Credibility',
      body: [
        '<p>Usually a subsidiary. UK customers, landlords, banks and public sector buyers are used to dealing with UK limited companies, which have a UK company number, UK accounts on the public register and directors subject to UK company law.</p>',
        '<ul><li>A branch puts the whole overseas company\'s accounts on the UK register, which some groups prefer to avoid.</li><li>Landlords and lenders often ask a new subsidiary for a parent company guarantee, so limited liability is not complete in practice.</li><li>UK payroll applies to either structure once you employ staff here. Our guide to <a href="/resources/hiring-your-first-employee/">hiring your first employee</a> sets out the steps.</li></ul>',
      ],
    },
    {
      id: 'switching', h2: 'Can you start with a branch and change to a subsidiary later?', toc: 'Changing later',
      body: [
        '<p>Yes. Many businesses test the UK through a branch, then move the trade into a new UK subsidiary and close the branch on form OS DS01. Moving the trade and its assets has tax consequences, for corporation tax, VAT and the payroll, so plan the transfer date and get advice before you move.</p>',
        '<p>If you expect to grow quickly, hire staff or raise UK finance, starting with a subsidiary usually avoids a second set of registrations.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is form OS IN01?', a: 'It is the Companies House form an overseas company uses to register a UK establishment, such as a branch or place of business. It must be sent within one month of opening, on paper, with a £124 fee and the company\'s constitution.' },
    { q: 'Does a UK branch pay corporation tax?', a: 'Yes. An overseas company trading through a UK permanent establishment pays UK corporation tax on the profits attributable to it, at the same rates as a UK company: 19% up to £50,000 and 25% over £250,000.' },
    { q: 'Is a UK subsidiary liable for the parent company\'s debts?', a: 'No. A UK subsidiary is a separate company, and its liabilities are its own. Equally, the parent is not liable for the subsidiary\'s debts unless it signs a guarantee, which UK landlords and lenders often ask for from a new subsidiary.' },
    { q: 'Do I need to register with Companies House if I only sell into the UK?', a: 'No. An overseas company only registers a UK establishment if it has a physical presence in the UK, such as an office or branch. It may still need to register for UK VAT or corporation tax.' },
    { q: 'Does the UK deduct tax from dividends paid to an overseas parent?', a: 'No. The UK does not deduct tax from ordinary dividends a UK company pays, including to an overseas parent. The parent company\'s home country decides how it taxes the dividend.' },
  ],

  sources: [
    ['https://www.gov.uk/register-as-an-overseas-company', 'GOV.UK: Register as an overseas company'],
    ['https://www.gov.uk/government/publications/overseas-companies-in-the-uk-registration-filing-and-disclosure-obligations/overseas-companies-registered-in-the-uk', 'GOV.UK: Overseas companies registered in the UK'],
    ['https://www.legislation.gov.uk/ukpga/2010/4/section/1141', 'Corporation Tax Act 2010, section 1141: permanent establishments'],
    ['https://www.gov.uk/hmrc-internal-manuals/international-manual/intm262040', 'HMRC manual: Non-residents trading in the UK (INTM262040)'],
    ['https://www.gov.uk/guidance/corporation-tax-marginal-relief', 'GOV.UK: Corporation tax marginal relief'],
    ['https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm03940', 'HMRC manual: Associated companies (CTM03940)'],
    ['https://www.gov.uk/government/publications/life-of-a-company-annual-requirements/life-of-a-company-part-1-accounts', 'GOV.UK: Life of a company, accounts and audit'],
  ],

  related: [
    '/resources/uk-company-for-non-residents/',
    '/resources/corporation-tax-rates/',
    '/resources/companies-house-identity-verification/',
    '/resources/vat-registration/',
  ],
};
