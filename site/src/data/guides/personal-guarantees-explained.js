// Guide: /resources/personal-guarantees-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, legislation.gov.uk and British Business Bank material on 13 October 2026 (sources below).
// Growth Guarantee Scheme: personal guarantees at the lender's discretion, principal private residences cannot be
// taken as security, borrower stays 100% liable (British Business Bank scheme page; site returned 403 to direct
// fetch, wording confirmed via search of the page and consistent with service-pages/business-loans.js).
// Statute of Frauds 1677 s4 (guarantees in writing) extends to England and Wales only.
export default {
  url: '/resources/personal-guarantees-explained/',
  section: 'business-finance',
  title: 'Personal Guarantees on Business Loans | Severin Finance',
  description: 'Personal guarantees on business loans: limited vs unlimited, joint and several, the Growth Guarantee Scheme home rule and legal advice. Free consultation.',
  h1: 'Personal guarantees on business loans explained',
  crumb: 'Personal guarantees',
  summary: 'What you are promising, limited vs unlimited, joint and several, your home, and what to check before signing.',
  topic: 'Personal guarantees for business borrowing',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/business-loans/', label: 'Our business loans service',
    boxTitle: 'Asked to sign a guarantee?', text: 'We arrange finance with lenders and explain any personal guarantee in plain English before you sign, including what it covers and how to limit it.',
  },

  hero: {
    answer: 'A personal guarantee is your promise to repay a business debt yourself if the business cannot. Lenders often ask directors for one on unsecured loans. Check whether it is limited or unlimited, whether it covers one loan or all debts, and whether it is joint and several. Under the Growth Guarantee Scheme, your main home cannot be taken as security.',
  },

  tldr: [
    'A guarantee puts your <strong>personal assets</strong> behind a company debt, setting aside limited liability for that debt.',
    'A <strong>limited</strong> guarantee is capped at a stated amount; an <strong>unlimited</strong> one covers the whole debt plus interest and costs.',
    '<strong>Joint and several</strong> means the lender can claim the full amount from any one guarantor.',
    'Growth Guarantee Scheme: guarantees are at the lender\'s discretion, but a <strong>main home cannot be taken as security</strong>.',
    'Take <strong>independent legal advice</strong> before you sign. A guarantee usually survives the company closing or you resigning.',
  ],

  sections: [
    {
      id: 'what-it-is', h2: 'What is a personal guarantee?', toc: 'What it is',
      body: [
        '<p>A personal guarantee is a legal promise that you will pay a business debt if the business does not. It is most common when a limited company borrows without security, and our <a href="/uk/business-finance/business-loans/">business loans</a> team sees one on most unsecured loan offers to small companies.</p>',
        '<p>GOV.UK explains that company owners are normally responsible for business debts only up to the value of their investment. A guarantee sets that protection aside for the debt it covers: if the company cannot pay, the lender can come to you. Sole traders are already personally responsible for all business debts, so guarantees matter mostly for directors of companies, members of LLPs and anyone guaranteeing someone else\'s business.</p>',
        '<p>In England and Wales, a guarantee must be in writing and signed by the guarantor or someone authorised by them, under section 4 of the Statute of Frauds 1677. The rules in Scotland and Northern Ireland differ, so take advice from a solicitor there.</p>',
      ],
    },
    {
      id: 'why-lenders-ask', h2: 'Why do lenders ask for a personal guarantee?', toc: 'Why lenders ask',
      body: [
        '<p>Lenders ask because a small company may have few assets they could recover if it fails. A guarantee gives them a second source of repayment and shows that the owners are committed to the business.</p>',
        '<p>You are more likely to be asked when the loan is unsecured, the company is young or has thin net assets, or the directors also own the company. A strong balance sheet, security over property or equipment, or a government-backed facility can reduce the amount a lender wants guaranteed, but rarely removes the request entirely. See our guide on <a href="/resources/how-to-get-a-business-loan/">how to get a business loan</a> for what lenders look at.</p>',
      ],
    },
    {
      id: 'limited-vs-unlimited', h2: 'What is the difference between a limited and an unlimited guarantee?', toc: 'Limited or unlimited',
      body: [
        '<p>A limited guarantee caps what you can owe at a stated figure. An unlimited guarantee covers the whole debt, plus interest and the lender\'s enforcement costs. Always look for the cap, and check what the guarantee covers as well as how much.</p>',
        { caption: 'Types of personal guarantee', head: ['Type', 'What you could owe', 'What to watch for'], rows: [
          ['Limited (capped)', 'Up to the stated cap, sometimes plus interest and costs on top', 'Whether interest and costs sit inside or outside the cap'],
          ['Unlimited', 'The full debt, interest and enforcement costs', 'Your exposure grows if the debt grows'],
          ['Specific', 'Only the loan or facility named', 'Whether renewals or top-ups are included'],
          ['All monies', 'Every debt the business owes that lender, now or later', 'An overdraft or card added later is caught too'],
          ['Supported (secured)', 'The guarantee, backed by a charge over your property', 'Your home or other property could be sold to repay it'],
        ], after: 'A general guide. The guarantee document itself decides what you owe, so read it in full.' },
      ],
    },
    {
      id: 'joint-and-several', h2: 'What does joint and several liability mean?', toc: 'Joint and several',
      body: [
        '<p>It means each guarantor can be made to pay the whole amount, not just a share. Where two or three directors sign together, the lender can claim the full sum from whichever of them has the money.</p>',
        { caption: 'Worked example: two directors guarantee a £100,000 loan (illustrative)', head: ['Situation', 'Director A', 'Director B'], rows: [
          ['Shareholding in the company', '50%', '50%'],
          ['Each director\'s fair share of the debt', '£50,000', '£50,000'],
          ['What the lender can claim from each, if joint and several', 'Up to £100,000', 'Up to £100,000'],
          ['If Director B has no assets', 'Lender claims £100,000 from A', 'Nothing recovered'],
        ], after: 'Illustrative figures. A guarantor who pays more than their share may have a claim against the others, but it is only worth what they can pay.' },
        '<p>If you are the director with the house, the savings or the steady income, you carry most of the risk. Ask for several (separate) liability, with each guarantee capped at your share, before you sign.</p>',
      ],
    },
    {
      id: 'your-home', h2: 'Can a lender take your home under a personal guarantee?', toc: 'Your home',
      body: [
        '<p>It depends on the guarantee and the scheme. Under the Growth Guarantee Scheme, run by the British Business Bank, lenders may take personal guarantees at their discretion, in line with their normal lending practice, but a principal private residence (your main home) cannot be taken as security. The government guarantees 70% of the facility to the lender, not to you, and the business stays 100% liable for the debt.</p>',
        '<p>Outside the scheme, a lender can ask for a supported guarantee secured by a charge over your home. Even an unsecured guarantee is a personal debt once the lender calls on it: if you do not pay, the lender can take court action, and in the worst case that can lead to your bankruptcy. Start Up Loans work differently again: they are unsecured personal loans, so you are the borrower, not a guarantor.</p>',
      ],
    },
    {
      id: 'if-the-business-fails', h2: 'What happens if the business cannot repay?', toc: 'If the business fails',
      body: [
        '<p>The lender can make a written demand on you under the guarantee, usually once the business has defaulted. Your liability does not end because the company closes: a guarantee usually survives liquidation, and the lender will often claim against you while the liquidator is still dealing with the company.</p>',
        '<ul><li><strong>Talk to the lender early.</strong> Lenders often agree a repayment plan or a reduced settlement rather than go to court.</li><li><strong>Resigning does not release you.</strong> A guarantee normally continues after you stop being a director or sell your shares, unless the lender releases you in writing.</li><li><strong>Get advice quickly.</strong> A solicitor or a licensed insolvency practitioner can check whether the demand is valid and what your options are.</li></ul>',
        '<p>If you are selling or passing on a business, make releasing your guarantees part of the deal. Our <a href="/resources/management-buy-out-guide/">management buy-out guide</a> covers how this is usually handled.</p>',
      ],
    },
    {
      id: 'before-you-sign', h2: 'What should you check before signing a personal guarantee?', toc: 'Before you sign',
      body: [
        '<p>Take independent legal advice from a solicitor acting for you, not the lender. Lenders often insist on it when a spouse, partner or relative who is not running the business is asked to guarantee or charge a jointly owned home, and may ask the solicitor to confirm in writing that the risks were explained.</p>',
        '<ol><li><strong>Cap:</strong> is there one, and does it include interest and costs?</li><li><strong>Scope:</strong> one facility, or all monies owed now and in future?</li><li><strong>Liability:</strong> joint and several, or several and capped per person?</li><li><strong>Security:</strong> is it backed by a charge over your home or other property?</li><li><strong>Trigger:</strong> what counts as a default, and must the lender pursue the business first?</li><li><strong>Release:</strong> when does it end, and can it reduce as the loan is repaid?</li></ol>',
        '<p>You can often negotiate. Lenders may accept a lower cap, a guarantee that steps down as the balance falls, or release once the business hits agreed results. Some insurers offer personal guarantee insurance, which can cover part of what you owe if a guarantee is called; check what it excludes and how long you must hold it before it pays. Our guide to <a href="/resources/business-loan-interest-rates-uk/">business loan interest rates</a> shows how security and guarantees affect what you pay.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do all business loans need a personal guarantee?', a: 'No. Loans secured on property or equipment, asset finance and loans to companies with strong balance sheets may not need one. Most unsecured loans to small limited companies do ask the directors for a guarantee, and the amount is often negotiable.' },
    { q: 'Can a Growth Guarantee Scheme lender ask for a personal guarantee?', a: 'Yes. Lenders under the Growth Guarantee Scheme can take personal guarantees at their discretion, in line with their normal lending practice. A principal private residence cannot be taken as security under the scheme, and the business remains 100% liable for the debt.' },
    { q: 'Is a director personally liable for a company loan without a guarantee?', a: 'Usually not. A limited company is responsible for its own debts, and shareholders risk only what they invested. Directors can become personally liable in other ways, for example through wrongful trading or an overdrawn director\'s loan account, so take advice if the company is struggling.' },
    { q: 'Can I get out of a personal guarantee I have already signed?', a: 'Only if the lender agrees to release you, the debt is fully repaid, or the guarantee was not validly given. Ask the lender for a release when the business refinances, the loan falls or you sell your shares, and get the release in writing.' },
    { q: 'Should my partner sign a personal guarantee for my company?', a: 'Think carefully. A partner who is not involved in the business takes on the full risk without any control. Lenders usually expect them to take separate independent legal advice first, and it is worth asking whether security or a lower cap would work instead.' },
  ],

  sources: [
    ['https://www.british-business-bank.co.uk/finance-options/debt-finance/growth-guarantee-scheme', 'British Business Bank: Growth Guarantee Scheme'],
    ['https://www.gov.uk/government/news/chancellor-to-unlock-billions-in-finance-for-small-businesses--2', 'GOV.UK: Growth Guarantee Scheme changes (July 2026)'],
    ['https://www.gov.uk/business-legal-structures', 'GOV.UK: Choose a legal structure for a business'],
    ['https://www.legislation.gov.uk/aep/Cha2/29/3/section/IV', 'legislation.gov.uk: Statute of Frauds 1677, section 4'],
    ['https://www.gov.uk/start-up-loans', 'GOV.UK: Start Up Loans'],
  ],

  related: [
    '/resources/how-to-get-a-business-loan/',
    '/resources/business-loan-interest-rates-uk/',
    '/resources/management-buy-out-guide/',
    '/resources/sole-trader-vs-limited-company/',
  ],
};
