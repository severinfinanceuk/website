// Guide: /resources/companies-house-identity-verification/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the Companies House blog and the Changes to UK company law site on 13 October 2026 (sources below).
// Re-check when Companies House confirms the date for people who file (no earlier than November 2027) and the later phases.
export default {
  url: '/resources/companies-house-identity-verification/',
  section: 'company-services',
  title: 'Companies House Identity Verification | Severin Finance',
  description: 'Who must verify with Companies House since 18 November 2025, how to get your personal code, and the deadlines for directors and PSCs. Free consultation.',
  h1: 'Companies House identity verification for directors and PSCs',
  crumb: 'Identity verification',
  summary: 'Who must verify, how to do it, your personal code and the deadlines for directors and PSCs.',
  topic: 'Companies House identity verification for company directors and people with significant control',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/company-formation/', label: 'Our company formation service',
    boxTitle: 'Forming a company?', text: 'We form your company and guide each director and PSC through identity verification before anything is filed.',
  },

  hero: {
    answer: 'Every director and person with significant control (PSC) of a UK company must verify their identity with Companies House. It became law on 18 November 2025. New directors verify before they are appointed. Existing directors give their 11-character personal code with the company\'s next confirmation statement, and PSCs within a set 14-day window.',
  },

  tldr: [
    'A legal requirement since <strong>18 November 2025</strong>, with a <strong>12-month transition</strong> for existing directors and PSCs.',
    'Verify once, free, through <strong>GOV.UK One Login</strong>, or pay an <strong>Authorised Corporate Service Provider</strong> to do it.',
    'You get an <strong>11-character personal code</strong> that covers every company you are involved in.',
    'Companies House will not accept a <strong>confirmation statement</strong> until every director has verified.',
    'Verification for people who file at Companies House starts <strong>no earlier than November 2027</strong>.',
  ],

  sections: [
    {
      id: 'who-must-verify', h2: 'Who has to verify their identity with Companies House?', toc: 'Who must verify',
      body: [
        '<p>Anyone who runs or controls a UK company must verify: every director, every individual person with significant control (PSC), and every individual member of an LLP. If you are setting up a company, our <a href="/uk/company-services/company-formation/">company formation</a> team checks that each director and PSC has verified and has a personal code before we file. Some roles are covered later, as the table shows.</p>',
        { caption: 'Who must verify, and when it applies', head: ['Role', 'Must verify?'], rows: [
          ['Director of a UK company (including an overseas company\'s UK establishment)', 'Yes, since 18 November 2025'],
          ['Individual member of an LLP', 'Yes, since 18 November 2025'],
          ['Person with significant control (an individual)', 'Yes, since 18 November 2025'],
          ['Authorised Corporate Service Provider (authorised agent)', 'Yes, to register as an agent'],
          ['People who file documents at Companies House', 'No earlier than November 2027, with at least 6 months\' notice'],
          ['Corporate directors, corporate LLP members, officers of corporate PSCs, limited partnerships', 'Later, no date announced'],
        ], after: 'Source: Companies House, When you need to verify your identity, and Changes to UK company law. Checked 13 October 2026.' },
        '<p>A company secretary who is not also a director does not currently have to verify, and nor does a shareholder who is not a PSC. A PSC is usually someone with more than 25% of the shares or votes, or the right to appoint or remove most of the board.</p>',
      ],
    },
    {
      id: 'deadlines', h2: 'When is the deadline to verify?', toc: 'Deadlines',
      body: [
        '<p>It depends on your role and when you took it on. New directors and PSCs verify at the start. People already in post when the rules began have a deadline tied to their company\'s dates, spread over the 12 months from 18 November 2025.</p>',
        { caption: 'Identity verification deadlines', head: ['Situation', 'When you give your personal code'], rows: [
          ['Director of a new company', 'In the application to register the company'],
          ['New director of an existing company', 'In the appointment filing, so verify first'],
          ['Existing director', 'With the company\'s next confirmation statement after 18 November 2025'],
          ['Existing PSC who is also a director', 'Within 14 days starting the day after the confirmation statement date'],
          ['Existing PSC who is not a director', 'Within the first 14 days of your birth month'],
          ['PSC added after 18 November 2025', 'When added to the register, or within 14 days'],
        ], after: 'Source: GOV.UK, When you need to verify your identity for Companies House. Filing a confirmation statement early does not move a PSC\'s dates.' },
        '<p>Example (illustrative): a company has a confirmation statement date of 31 March 2026. Its directors must give their codes in that statement. A director who is also a PSC then gives the code again, in the PSC role, between 1 and 14 April 2026.</p>',
        '<p>A PSC can ask for one 14-day extension through the online service, but only once their period has started and before it ends. Your own dates are shown on the company\'s page on the Companies House register. With the transition ending in November 2026, any existing director or PSC who has not yet verified should do it now.</p>',
      ],
    },
    {
      id: 'how-to-verify', h2: 'How do you verify your identity for Companies House?', toc: 'How to verify',
      body: [
        '<p>Most people verify online through GOV.UK One Login, using photo ID. It is free and you only do it once. There are three routes:</p>',
        '<ul><li><strong>Online or in the GOV.UK One Login app</strong>, with a biometric passport from any country, a UK photo driving licence, or a UK biometric residence permit, biometric residence card or Frontier Worker permit.</li><li><strong>Bank or building society details, or in person at a Post Office</strong>, if you live in the UK. For the Post Office route you first enter your photo ID details online.</li><li><strong>Through an Authorised Corporate Service Provider</strong>, such as an accountant or solicitor registered with Companies House, who checks your documents for you. They may charge a fee.</li></ul>',
        '<p>You start at the <a href="https://www.gov.uk/guidance/verify-your-identity-for-companies-house">Companies House verify your identity page</a>. You will also need your current address and the year you moved in. Each verified identity needs its own email address, so two directors cannot share one.</p>',
        '<p>Before you start, check that your name and date of birth on the Companies House register match your ID. If they do not, your verified identity cannot be linked to your role until the record is corrected.</p>',
      ],
    },
    {
      id: 'personal-code', h2: 'What is a Companies House personal code?', toc: 'Personal code',
      body: [
        '<p>It is an 11-character code you receive once your identity is verified. It belongs to you, not to a company, and you use the same code for every role you hold.</p>',
        '<ul><li><strong>Finding it:</strong> sign in to your Companies House account with the email address you verified with and open "Manage account". If an agent verified you, the code is emailed to the address they gave.</li><li><strong>Sharing it:</strong> keep it safe, but you can give it to someone who files for you, such as your accountant.</li><li><strong>Using it:</strong> give it for each company and each role. A director who is also a PSC links it twice: once on the confirmation statement and once through the PSC service.</li><li><strong>Changing it:</strong> it does not normally change. If you think it has been compromised, Companies House can cancel it and issue a new one.</li></ul>',
      ],
    },
    {
      id: 'acsp', h2: 'What is an Authorised Corporate Service Provider?', toc: 'Authorised agents',
      body: [
        '<p>An Authorised Corporate Service Provider (ACSP) is a firm or sole trader registered with Companies House as an authorised agent. To register, it must be supervised for anti-money laundering by a UK supervisory body, and the person applying must have verified their own identity.</p>',
        '<p>An ACSP can verify your identity for you, from any country, to the same standard as Companies House. It suits people without suitable ID for the online route, or who would rather hand the job to an adviser. Ask any agent to confirm it is registered as an ACSP before you send documents.</p>',
        '<h3>What changes for agents next?</h3>',
        '<p>Companies House plans to require identity verification for people who file documents, and ACSP registration for agents who file on behalf of clients. It says this will start no earlier than November 2027, with at least 6 months\' notice. Until then, filing agents and company secretaries can file as they do now.</p>',
      ],
    },
    {
      id: 'not-verifying', h2: 'What happens if you do not verify?', toc: 'If you do not verify',
      body: [
        '<p>Continuing to act as a director after your deadline without verifying is an offence, and the company and its other directors may commit an offence too. The penalty can be prosecution and a fine, or a financial penalty.</p>',
        '<ul><li><strong>Filings stop.</strong> Companies House will not accept the confirmation statement until every director has verified. That puts the company at risk of a fine and of being struck off. Our <a href="/resources/confirmation-statement-guide/">confirmation statement guide</a> explains the rules.</li><li><strong>New roles stop.</strong> You will not be able to start a new company or make filings for your company.</li><li><strong>Planned next:</strong> Companies House says it will add a note against an unverified person\'s name on the public register, and stop them being appointed as a director of another company.</li></ul>',
        '<p>Identity verification sits alongside the other changes to company records made on the same day. Directors and PSCs are no longer kept in the company\'s own registers, as our guide to <a href="/resources/statutory-registers-explained/">statutory registers</a> explains. For every other date a company has to meet, see <a href="/resources/limited-company-deadlines/">limited company deadlines</a>.</p>',
      ],
    },
    {
      id: 'abroad', h2: 'Can you verify your identity from abroad?', toc: 'Directors abroad',
      body: [
        '<p>Yes. Directors and PSCs who live outside the UK can verify online with a biometric passport from any country. The bank and Post Office routes are only for UK residents, so if your passport is not biometric, use an ACSP, which can verify you wherever you live.</p>',
        '<p>The rules and deadlines are the same as for UK residents. Our guide to <a href="/resources/uk-company-for-non-residents/">running a UK company as a non-resident</a> covers the other duties, and our <a href="/cross-border/uk-company-from-abroad/">UK company from abroad</a> service handles the filings for you.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is Companies House identity verification free?', a: 'Yes, if you verify yourself through GOV.UK One Login. An Authorised Corporate Service Provider, such as an accountant or solicitor, may charge a fee for verifying you. Either way, you only verify once.' },
    { q: 'Do I need to verify again for each company I am a director of?', a: 'No. You verify once and get one personal code. You then give that same code for each company, and separately for each role, such as director and person with significant control.' },
    { q: 'Do company secretaries need to verify their identity?', a: 'Not at the moment, unless they are also a director or PSC. Companies House plans to require verification for people who file documents no earlier than November 2027, which may include secretaries who file.' },
    { q: 'Do shareholders have to verify with Companies House?', a: 'Only if they are a person with significant control, usually by holding more than 25% of the shares or voting rights. Other shareholders do not need to verify.' },
    { q: 'Can my accountant verify my identity for me?', a: 'Yes, if the firm is registered with Companies House as an Authorised Corporate Service Provider. It checks your documents and Companies House emails you your personal code. You can also give your code to an accountant who files for you.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house', 'Companies House: When you need to verify your identity'],
    ['https://www.gov.uk/guidance/verify-your-identity-for-companies-house', 'Companies House: Verify your identity'],
    ['https://www.gov.uk/guidance/verifying-your-identity-for-companies-house', 'Companies House: Verifying your identity'],
    ['https://www.gov.uk/guidance/companies-house-personal-codes-for-identity-verification', 'Companies House: Personal codes'],
    ['https://changestoukcompanylaw.campaign.gov.uk/identity-verification/', 'Companies House: Changes to UK company law, identity verification'],
    ['https://companieshouse.blog.gov.uk/2026/01/16/understanding-identity-verification-for-people-with-significant-control-pscs/', 'Companies House blog: Identity verification for PSCs'],
  ],

  related: [
    '/resources/confirmation-statement-guide/',
    '/resources/statutory-registers-explained/',
    '/resources/uk-company-for-non-residents/',
    '/resources/limited-company-deadlines/',
  ],
};
