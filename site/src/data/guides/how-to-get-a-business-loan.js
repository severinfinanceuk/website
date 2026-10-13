// Guide: /resources/how-to-get-a-business-loan/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the ICO and British Business Bank material on 13 October 2026 (sources below).
// The British Business Bank site returned 403 to direct fetches; Growth Guarantee Scheme terms are taken from
// GOV.UK (July 2026 news story) and match src/data/service-pages/business-loans.js. The July 2026 changes
// (10-year terms for loans up to £1.1m, £54m turnover limit) had no confirmed start date: re-check.
export default {
  url: '/resources/how-to-get-a-business-loan/',
  section: 'business-finance',
  title: 'How to Get a Business Loan in the UK | Severin Finance',
  description: 'How to get a business loan in the UK: 6 steps, the documents lenders ask for, credit checks and government schemes like Start Up Loans. Free consultation.',
  h1: 'How to get a business loan in the UK',
  crumb: 'How to get a business loan',
  summary: 'Six steps from working out the amount to drawdown, plus documents, credit files and government schemes.',
  topic: 'Applying for a business loan in the UK',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/business-finance/business-loans/', label: 'Our business loans service',
    boxTitle: 'Ready to apply?', text: 'We prepare the accounts and forecast lenders ask for, find lenders likely to consider your case and manage the application to drawdown.',
  },

  hero: {
    answer: 'To get a business loan, work out how much you need and why, then gather your latest accounts, six months of bank statements and a cash flow forecast. Check your personal and business credit files, choose the right type of loan and apply to lenders likely to accept your case. Approval is always the lender\'s decision.',
  },

  tldr: [
    'Lenders mainly ask one question: <strong>can the business afford the repayments</strong> from its cash flow?',
    'Have ready: filed accounts, current management accounts, <strong>6 months</strong> of bank statements and a forecast.',
    'Check your personal credit file first: a statutory copy is <strong>free</strong>. Unpaid court judgments stay on record for <strong>6 years</strong>.',
    '<strong>Start Up Loans:</strong> £500 to £25,000 per person at a fixed <strong>7.5%</strong>, for businesses trading under 5 years.',
    '<strong>Growth Guarantee Scheme:</strong> a <strong>70%</strong> government guarantee to the lender on facilities up to £2 million; your business stays 100% liable.',
  ],

  sections: [
    {
      id: 'steps', h2: 'What are the steps to get a business loan?', toc: 'The six steps',
      body: [
        '<p>Most applications follow the same six steps, whether you go to your own bank, an online lender or a government-backed scheme. Our <a href="/uk/business-finance/business-loans/">business loans</a> team arranges finance with lenders and handles steps 2 to 6 with you, but the order is the same if you apply yourself.</p>',
        '<ol><li><strong>Work out the amount and the purpose.</strong> Be specific: "£60,000 for two vans and fit-out" reads better than "working capital". Include VAT, fees and a buffer.</li><li><strong>Check you can afford it.</strong> Put the monthly repayment into your cash flow forecast and see whether the business can pay it in a slow month.</li><li><strong>Get your paperwork up to date.</strong> Accounts filed, bookkeeping current, tax returns sent. Gaps slow every application.</li><li><strong>Check your credit files.</strong> Fix errors before a lender sees them.</li><li><strong>Choose the type of finance.</strong> A term loan is not always the best fit: equipment, unpaid invoices and property each have their own products.</li><li><strong>Apply, compare offers and read the terms.</strong> Look at the total cost, the security and any personal guarantee, not just the rate.</li></ol>',
        '<p>If the loan is to cover a gap, build the forecast first. Our guide to <a href="/resources/cash-flow-forecasting/">cash flow forecasting</a> shows how, and lenders will usually ask to see one anyway.</p>',
      ],
    },
    {
      id: 'documents', h2: 'What documents do lenders ask for?', toc: 'Documents',
      body: [
        '<p>Lenders want proof of what the business earns, what it owes and who runs it. Exact lists vary, but most ask for the documents below.</p>',
        { caption: 'Documents lenders commonly ask for', head: ['Document', 'Why the lender wants it'], rows: [
          ['Last 1 to 2 years of filed accounts', 'Trading history, profit and net assets'],
          ['Management accounts for the current year', 'How the business is doing since the last year end'],
          ['Last 6 months of business bank statements', 'Real cash in and out, and how you manage the account'],
          ['Cash flow forecast for at least 12 months', 'Whether the repayments are affordable'],
          ['Existing loans, leases, overdrafts and HMRC arrangements', 'What the business already has to repay'],
          ['Tax returns and VAT returns', 'That figures match what was reported to HMRC'],
          ['ID and address for each director or partner', 'Identity and anti-money laundering checks'],
          ['Personal assets and liabilities of guarantors', 'What a personal guarantee is worth'],
        ], after: 'A general list. Secured loans also need details of the property or asset, and the lender will usually value it.' },
        '<p>Current management accounts matter most when your last filed accounts are old or show a weaker year. Our guide to <a href="/resources/management-accounts-explained/">management accounts</a> explains what a lender expects to see in them.</p>',
      ],
    },
    {
      id: 'credit-files', h2: 'How do lenders check your credit?', toc: 'Credit files',
      body: [
        '<p>Lenders check both the business and the people behind it. For a limited company, that means the company\'s credit file, its filed accounts at Companies House and the personal credit files of the directors. For a sole trader or partnership, your personal file is the business file.</p>',
        '<ul><li><strong>Get your personal file first.</strong> The Information Commissioner\'s Office confirms you can ask any credit reference agency for a copy of your file free of charge. Look for the "statutory report" option rather than a paid subscription.</li><li><strong>Correct mistakes.</strong> Ask the agency, and the lender that supplied the wrong data, to fix it. The agency cannot change a lender\'s entry without that lender\'s agreement.</li><li><strong>Deal with court judgments.</strong> GOV.UK says a county court judgment stays on the register for 6 years unless you pay it in full within a month, and it can make it hard to get credit.</li><li><strong>File on time.</strong> Late accounts or confirmation statements at Companies House are public, and lenders notice them.</li><li><strong>Avoid scattered applications.</strong> Each full application usually leaves a search on your file. Several in a short time can look like a business struggling to borrow.</li></ul>',
      ],
    },
    {
      id: 'loan-types', h2: 'Which type of business loan should you choose?', toc: 'Types of loan',
      body: [
        '<p>Choose the finance that matches what the money is for. Matching the term to the asset keeps repayments manageable and often lowers the cost.</p>',
        { caption: 'Common types of business finance', head: ['Type', 'How it works', 'Usually suits'], rows: [
          ['Unsecured term loan', 'Fixed sum repaid monthly; no asset security, but directors usually give a personal guarantee', 'Smaller amounts, growth projects, stock'],
          ['Secured term loan', 'Backed by property or other assets the lender can take if you do not repay', 'Larger amounts and longer terms'],
          ['Overdraft or revolving credit', 'A limit you draw and repay as needed; interest on what you use', 'Short, uneven cash flow gaps'],
          ['Asset finance', 'The vehicle or equipment is the security; hire purchase or leasing', 'Vans, machinery, IT, kitchen equipment'],
          ['Invoice finance', 'An advance against unpaid customer invoices', 'Businesses waiting weeks for business customers to pay'],
          ['Commercial mortgage', 'A long-term loan secured on business property', 'Buying your own premises'],
        ], after: 'All finance is subject to status and lender approval. Any security may be at risk if you do not keep up repayments.' },
        '<p>Most unsecured loans to companies come with a director\'s guarantee. Read our guide to <a href="/resources/personal-guarantees-explained/">personal guarantees</a> before you sign one. For equipment, see our <a href="/uk/business-finance/asset-finance/">asset finance</a> service, and for slow-paying customers our <a href="/uk/business-finance/invoice-finance/">invoice finance</a> service.</p>',
      ],
    },
    {
      id: 'government-schemes', h2: 'Which government-backed loans can you apply for?', toc: 'Government schemes',
      body: [
        '<p>The two main routes are Start Up Loans for new businesses and the Growth Guarantee Scheme for established ones. Both are run through the British Business Bank, but the lending decision is still made by the lender, and you repay the full amount.</p>',
        { caption: 'Government-backed business loans (checked 13 October 2026)', head: ['Feature', 'Start Up Loans', 'Growth Guarantee Scheme'], rows: [
          ['Who it is for', 'Aged 18 or over, living in the UK, UK business trading under 5 years or about to start', 'UK businesses with turnover up to £45 million'],
          ['Amount', '£500 to £25,000 per person', 'Generally up to £2 million per business group'],
          ['Rate', 'Fixed 7.5% a year', 'Set by the lender'],
          ['Term', '1 to 5 years', 'Term loans up to 6 years'],
          ['Type of borrowing', 'Unsecured personal loan', 'Business loans, overdrafts, asset and invoice finance'],
          ['Government support', 'Free mentoring for up to 12 months', '70% guarantee to the lender; the business stays 100% liable'],
          ['How to apply', 'Online, with free help to write your business plan', 'Through an accredited lender'],
        ], after: 'Sources: GOV.UK, Start Up Loans; GOV.UK, Growth Guarantee Scheme announcement (July 2026). In July 2026 the government announced terms of up to 10 years for loans up to £1.1 million and a £54 million turnover limit; lenders are bringing these in.' },
        '<p>A Start Up Loan is made to you personally, so you repay it even if the business fails. There is a credit check, but no application fee and no early repayment fee. Under the Growth Guarantee Scheme, lenders may still ask for a personal guarantee, but your main home cannot be taken as security.</p>',
        '<p>GOV.UK also runs a <a href="https://www.gov.uk/business-finance-support">business finance and support finder</a> that lists regional and sector loan funds.</p>',
      ],
    },
    {
      id: 'cost', h2: 'How much will a business loan cost?', toc: 'Cost',
      body: [
        '<p>The cost depends on the lender, your risk profile, the security, the term and the fees, so two businesses borrowing the same amount can be offered very different deals. Variable rates also move with the Bank of England\'s Bank Rate.</p>',
        '<p>Compare offers on the total amount you will repay, including arrangement and other fees, and on what happens if you want to repay early. Our guide to <a href="/resources/business-loan-interest-rates-uk/">business loan interest rates</a> explains what sets the rate and how to compare APR with a flat rate.</p>',
      ],
    },
    {
      id: 'declined', h2: 'What can you do if a lender says no?', toc: 'If you are declined',
      body: [
        '<p>Ask the lender why, fix what you can, and do not rush another application straight away. The reason is usually one of a few: affordability, short trading history, weak recent figures, credit file problems or not enough security.</p>',
        '<ul><li><strong>Ask about a referral.</strong> Under the government\'s Bank Referral Scheme, the largest banks must offer to pass your details, with your permission, to designated finance platforms that look for other lenders.</li><li><strong>Bring the figures up to date.</strong> Current management accounts can show a recovery the filed accounts do not.</li><li><strong>Change the shape of the request.</strong> A smaller amount, a longer term, security or asset finance can turn a no into a yes.</li><li><strong>Look at the cash cycle.</strong> If the real issue is customers paying late, chasing them or financing invoices may help more than a loan.</li></ul>',
        '<p>No adviser can guarantee approval, and you should be wary of anyone who does. What good preparation does is put your case to lenders likely to consider it, with the figures they need to decide.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can I get a business loan with no trading history?', a: 'Yes, but the choice is narrower. Start Up Loans are designed for businesses that have not started or have traded for under 5 years, and lend £500 to £25,000 per person. Most other lenders want at least one set of accounts, or security, before they lend.' },
    { q: 'Does applying for a business loan affect my credit score?', a: 'A full application usually leaves a search on your file, and directors\' personal files are often checked too. Several applications in a short time can count against you. Some lenders offer an eligibility check first that does not leave a visible search.' },
    { q: 'How much can my business borrow?', a: 'It depends mainly on how much the business can afford to repay from its cash flow, plus any security. Lenders look at profit, existing debts and your forecast. Government schemes have their own limits: £25,000 per person for Start Up Loans and generally £2 million for the Growth Guarantee Scheme.' },
    { q: 'Do I need a business plan to get a loan?', a: 'Start Up Loans come with free help to write a business plan, because the lender wants to see how the business will repay. Established businesses are usually judged on accounts and bank statements, but a short plan explaining what the money is for, and a forecast showing the repayments, still makes the case clearer.' },
    { q: 'Is a Growth Guarantee Scheme loan cheaper than a normal loan?', a: 'Not necessarily. The lender sets the rate and fees. The 70% government guarantee reduces the lender\'s risk, which can help it lend where it otherwise would not, but your business remains liable for the full amount.' },
  ],

  sources: [
    ['https://www.gov.uk/start-up-loans', 'GOV.UK: Start Up Loans'],
    ['https://www.gov.uk/government/news/chancellor-to-unlock-billions-in-finance-for-small-businesses--2', 'GOV.UK: Growth Guarantee Scheme changes (July 2026)'],
    ['https://www.british-business-bank.co.uk/finance-options/debt-finance/growth-guarantee-scheme', 'British Business Bank: Growth Guarantee Scheme'],
    ['https://ico.org.uk/for-the-public/credit/', 'ICO: Credit and credit reference agencies'],
    ['https://www.gov.uk/county-court-judgments-ccj-for-debt', 'GOV.UK: County court judgments for debt'],
    ['https://www.gov.uk/government/collections/bank-referral-scheme-official-statistics', 'GOV.UK: Bank Referral Scheme'],
    ['https://www.gov.uk/business-finance-support', 'GOV.UK: Find business finance and support'],
  ],

  related: [
    '/resources/business-loan-interest-rates-uk/',
    '/resources/personal-guarantees-explained/',
    '/resources/cash-flow-forecasting/',
    '/resources/invoice-finance-vs-overdraft/',
  ],
};
