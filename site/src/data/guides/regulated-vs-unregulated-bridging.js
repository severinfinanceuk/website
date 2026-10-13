// Guide: /resources/regulated-vs-unregulated-bridging/. Layout: src/layouts/GuidePage.astro.
// Facts checked on 13 October 2026: FCA Handbook PERG 4.4 (regulated mortgage contract: 4.4.1, 4.4.2, 4.4.3, 4.4.6, 4.4.11,
// 4.4.15, 4.4.17 to 4.4.23 exclusions, 4.4.19 related person, 4.4.29 business declarations, 4.4.32 buy-to-let), MCOB 11.6
// (affordability, repayment strategy, bridging extensions), MCOB 4.7A, MCOB 13.3, DISP 2.3.1R and 2.7.3R (Ombudsman
// jurisdiction and eligible complainants) and the FCA statement of 20 March 2026 on unregulated (Annex 1) lenders.
// Severin's FCA status is unknown: copy says regulated loans are arranged through an FCA-authorised firm.
export default {
  url: '/resources/regulated-vs-unregulated-bridging/',
  section: 'business-finance',
  title: 'Regulated vs Unregulated Bridging Loans | Severin Finance',
  description: 'When is a bridging loan FCA regulated? The 40% home test for you or family, the protections and which loans are excluded. Free consultation.',
  h1: 'Regulated vs unregulated bridging loans',
  summary: 'When the FCA rules apply to a bridge, the 40% home test, the protections and which loans are unregulated.',
  topic: 'Regulated and unregulated bridging loans',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/bridging-loans/', label: 'Our bridging loan service',
    boxTitle: 'Not sure which applies?', text: 'We arrange bridging loans with lenders and check whether yours is regulated before you apply.',
  },

  hero: {
    answer: 'A bridging loan is usually FCA regulated when an individual or trustee borrows against land in the UK, by first or second charge, and at least 40% of it is used, or will be used, as a home by the borrower or close family. Loans to companies, and most loans on let or business property, are unregulated.',
  },

  tldr: [
    'Regulated: an <strong>individual or trustee</strong> borrows, secured on UK land, and <strong>at least 40%</strong> is or will be a home for them or a related person.',
    'It can be a <strong>first or second charge</strong>, and status is fixed <strong>when the loan is entered into</strong>.',
    'Loans to a <strong>limited company</strong> are outside the regime, and so are most investment and business-purpose loans.',
    'Regulated loans bring affordability checks, a required repayment strategy and <strong>repossession only as a last resort</strong>.',
    'The FCA warned on <strong>20 March 2026</strong> that borrowers pushed into using a company can lose access to the Financial Ombudsman Service.',
  ],

  sections: [
    {
      id: 'when-regulated', h2: 'When is a bridging loan regulated?', toc: 'When regulated',
      body: [
        '<p>When it is a regulated mortgage contract under FCA rules, and the FCA confirms that secured bridging loans can be. When we <a href="/uk/business-finance/bridging-loans/">arrange bridging loans</a> with lenders, we check this first, because it decides which lenders can help and what protections you get. Regulated loans must be arranged by an FCA-authorised firm.</p>',
        { caption: 'The regulated mortgage contract test', head: ['Condition', 'What it means for a bridge'], rows: [
          ['Who borrows', 'An individual or trustees. A company that is not acting as a trustee is outside the regime'],
          ['Security', 'A mortgage on land in the UK, whether a first, second or later charge'],
          ['Use as a home', 'At least 40% of the land is used, or intended to be used, as or in connection with a dwelling'],
          ['When it is judged', 'At the time the contract is entered into. A loan that is not regulated then does not become regulated later'],
        ], after: 'Source: FCA Handbook PERG 4.4.1 to 4.4.3 and 4.4.15. Checked 13 October 2026.' },
        '<p>The 40% test looks at any use as a home. But a business-purpose loan where less than 40% of the land is used as a home by the borrower or a related person is excluded as an investment property loan. So in practice the question is: will you, or close family, live in the property?</p>',
      ],
    },
    {
      id: 'related-person', h2: 'Who counts as close family for a regulated bridge?', toc: 'Related persons',
      body: [
        '<p>The FCA calls them related persons. For the borrower (or, with trustees, a beneficiary), they are:</p>',
        '<ul><li>a spouse or civil partner</li><li>a partner living with them as if they were married or in a civil partnership</li><li>a parent, brother, sister, child, grandparent or grandchild</li></ul>',
        '<p>You do not have to live there yourself. A bridge to buy a flat for your daughter to live in can be regulated. Intention counts too: a loan to buy a house you plan to move into after works is judged on that intention when you sign. The FCA\'s guidance measures mixed-use buildings by area, so a shop with a large flat above, where you will live, can pass the 40% test.</p>',
      ],
    },
    {
      id: 'unregulated', h2: 'Which bridging loans are unregulated?', toc: 'Unregulated loans',
      body: [
        '<p>Most bridges for business or investment property, and any loan to a company. The main routes out of regulation are:</p>',
        { caption: 'Common unregulated bridging loans', head: ['Situation', 'Why it is usually unregulated'], rows: [
          ['Borrower is a limited company (SPV or trading company)', 'Companies not acting as trustees are outside the regime'],
          ['Buying a property to let, never lived in by you or family', 'Investment property loan exclusion: business purpose and under 40% used as a home by you or a related person'],
          ['Commercial property, such as a shop, office or unit', 'Less than 40% of the land is used as a home'],
          ['Second charge on your home, behind an existing mortgage, for your business, over £25,000', 'Excluded as a second charge business loan'],
        ], after: 'Source: FCA Handbook PERG 4.4.2 and 4.4.17 to 4.4.23. Each case turns on its facts.' },
        '<p>Lenders often ask you to sign a business-purpose declaration. It creates a presumption that the loan is for business, but not if the lender knew or had reasonable cause to suspect otherwise. Some buy-to-let loans to individuals, for example for an accidental landlord, fall under a separate consumer buy-to-let regime. For company buy-to-let, see our guide to <a href="/resources/buy-to-let-limited-company/">buy-to-let through a limited company</a>.</p>',
      ],
    },
    {
      id: 'protections', h2: 'What protections do you get with a regulated bridging loan?', toc: 'Protections',
      body: [
        '<p>The FCA\'s mortgage rules (MCOB) apply. The main protections are:</p>',
        '<ul><li><strong>Authorised firms only:</strong> the lender, and anyone advising on or arranging the loan, must be authorised by the FCA. You can check on the <a href="https://register.fca.org.uk/s/">FCA register</a>.</li><li><strong>Affordability:</strong> the lender must assess whether you can pay what is due.</li><li><strong>A credible repayment strategy:</strong> on an interest-only bridge, the lender must see evidence of one. If it relies on a refinance, it should be reasonably satisfied a mainstream lender would lend.</li><li><strong>Suitable advice:</strong> an adviser recommending a bridge must consider why an ordinary mortgage would not suit you.</li><li><strong>Extensions:</strong> the lender cannot extend the term unless you make a positive choice, and must reassess affordability as if it were a new loan.</li><li><strong>Arrears:</strong> fair treatment, options such as a longer term, and repossession only when all other reasonable attempts have failed.</li><li><strong>Complaints:</strong> you can take an unresolved complaint to the Financial Ombudsman Service.</li></ul>',
        '<p>These rules make a regulated bridge more work to arrange, with more documents and checks. Not every bridging lender has the permissions to offer one. Our guide to <a href="/resources/bridging-loan-exit-strategy/">bridging exit strategies</a> covers what lenders look for in a repayment plan.</p>',
      ],
    },
    {
      id: 'what-you-lose', h2: 'What do you give up with an unregulated bridge?', toc: 'What you give up',
      body: [
        '<p>The MCOB protections above. Your rights come mainly from the loan agreement and general law, so the terms on default interest, fees, extensions and enforcement matter more.</p>',
        '<p>Access to the Financial Ombudsman Service depends on the lender. The Ombudsman can consider complaints about an FCA-authorised firm lending money secured on land, if you are an eligible complainant, such as an individual, a micro-enterprise or a small business. Some lenders, however, are registered with the FCA only for anti-money laundering purposes. On 20 March 2026 the FCA said customers of these firms cannot use the Ombudsman, and that it knew of consumers encouraged to set up limited companies to borrow unregulated bridging finance from them.</p>',
        '<blockquote>If someone suggests setting up a company just so you can borrow against a home you or family will live in, stop and ask why. Check the lender\'s status on the FCA register first.</blockquote>',
      ],
    },
    {
      id: 'scenarios', h2: 'Which applies in common bridging situations?', toc: 'Common situations',
      body: [
        { caption: 'Regulated or unregulated? Typical cases', head: ['Situation', 'Usually'], rows: [
          ['Chain break: buying your next home before your current one sells', 'Regulated'],
          ['Buying a home for your son to live in, borrowing in your own name', 'Regulated'],
          ['Auction purchase of a flat to let, borrowing personally', 'Unregulated (investment property loan)'],
          ['Refurbishment bought through your property company', 'Unregulated (company borrower)'],
          ['Shop with a flat above where you will live, more than 40% of the area', 'Regulated'],
          ['Second charge of £100,000 on your home, behind your existing mortgage, to fund your business', 'Unregulated (second charge business loan)'],
        ], after: 'General guidance only. The test is applied to the facts when the loan is entered into.' },
        '<p>Auction buyers face a fixed completion date whichever regime applies, and a regulated case can take longer. Our guide to <a href="/resources/buying-property-at-auction/">buying property at auction</a> covers the timing.</p>',
      ],
    },
    {
      id: 'who-arranges', h2: 'Who can arrange a regulated bridging loan?', toc: 'Who can arrange it',
      body: [
        '<p>Only a firm with the right FCA permissions can advise on or arrange a regulated mortgage contract, and only an authorised lender can make one. Before you proceed, check each firm on the FCA register, and ask the firm in writing what permissions it holds and how it is paid.</p>',
        '<p>We arrange finance with lenders. Where your bridge is regulated, it is arranged through an FCA-authorised firm. For business premises you will trade from, our <a href="/uk/business-finance/commercial-mortgages/">commercial mortgage</a> team can plan the longer-term loan that repays the bridge. Finance is subject to status and lender approval, and your property may be repossessed if you do not repay a loan secured on it.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is a chain break bridging loan regulated?', a: 'Usually, yes. If you borrow personally against the home you are buying or the one you are selling, and you live or will live there, it is normally a regulated mortgage contract. FCA rules on affordability and repayment strategy then apply.' },
    { q: 'Are bridging loans to a limited company regulated?', a: 'No. A loan to a company that is not acting as a trustee is not a regulated mortgage contract, even if the property is residential. Directors who give personal guarantees should take independent legal advice.' },
    { q: 'What is the 40% rule for bridging loans?', a: 'A loan to an individual or trustee secured on UK land is regulated if at least 40% of the land is used, or intended to be used, as a home, unless an exclusion applies. For business-purpose loans, it is the use by the borrower or close family that counts.' },
    { q: 'Can a regulated bridging loan be a second charge?', a: 'Yes. The FCA says a loan can be a regulated mortgage contract whether it is secured by a first, second or later charge. A second charge for business purposes over £25,000 is excluded.' },
    { q: 'Do I get Financial Ombudsman protection on an unregulated bridge?', a: 'It depends on the lender. If it is FCA authorised and you are an eligible complainant, the Ombudsman can usually consider complaints about lending secured on land. Customers of lenders registered with the FCA only for anti-money laundering cannot use it.' },
  ],

  sources: [
    ['https://handbook.fca.org.uk/handbook/PERG/4/4.html', 'FCA Handbook PERG 4.4: What is a regulated mortgage contract?'],
    ['https://handbook.fca.org.uk/handbook/MCOB/11/6.html', 'FCA Handbook MCOB 11.6: responsible lending, including bridging loans'],
    ['https://handbook.fca.org.uk/handbook/MCOB/13/3.html', 'FCA Handbook MCOB 13.3: dealing fairly with customers in arrears'],
    ['https://handbook.fca.org.uk/handbook/DISP/2/3.html', 'FCA Handbook DISP 2.3: Financial Ombudsman Service jurisdiction'],
    ['https://www.fca.org.uk/news/statements/fca-highlights-risks-unregulated-lenders', 'FCA: Risks when dealing with unregulated lenders (20 March 2026)'],
    ['https://register.fca.org.uk/s/', 'FCA Financial Services Register'],
  ],

  related: [
    '/resources/bridging-loan-exit-strategy/',
    '/resources/buying-property-at-auction/',
    '/resources/buy-to-let-limited-company/',
    '/resources/commercial-mortgage-deposit/',
  ],
};
