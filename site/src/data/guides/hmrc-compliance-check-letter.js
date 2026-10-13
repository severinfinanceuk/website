// Guide: /resources/hmrc-compliance-check-letter/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, HMRC manuals (SAM31100, CH53100) and legislation.gov.uk on 13 October 2026 (sources below).
// No promises about outcomes. Re-check after each Finance Act.
export default {
  url: '/resources/hmrc-compliance-check-letter/',
  section: 'tax',
  title: 'HMRC Compliance Check Letter: What to Do | Severin Finance',
  description: 'Had an HMRC compliance check letter? What it means, how far back HMRC can go (4, 6 or 20 years), how to reply and your rights. Free consultation.',
  h1: 'What to do with an HMRC compliance check letter',
  crumb: 'HMRC compliance check letters',
  summary: 'What the letter means, how far back HMRC can look, how to reply and what rights you have.',
  topic: 'HMRC compliance checks and tax enquiries',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/hmrc-tax-investigation/', label: 'Our HMRC investigation service',
    boxTitle: 'Had a letter from HMRC?', text: 'We read the letter, tell you what HMRC is asking for, and deal with the officer for you until the check is closed.',
  },

  hero: {
    answer: 'A compliance check letter means HMRC wants to confirm that a return or your records are right. It is not an accusation. Note the reply date, keep filing and paying as normal, and gather the records asked for. HMRC can normally go back 4 years, 6 for careless errors and 20 for deliberate ones.',
  },

  tldr: [
    'A check is HMRC <strong>confirming your figures</strong>, not a finding that you did anything wrong.',
    'HMRC can open an enquiry into an on-time Self Assessment return for <strong>12 months</strong> after it receives it.',
    'After that it can assess extra tax for <strong>4 years</strong>, <strong>6 years</strong> if careless and <strong>20 years</strong> if deliberate.',
    'Ignoring a formal information notice costs <strong>£300</strong>, then up to <strong>£60 a day</strong>.',
    'You usually have <strong>30 days</strong> to challenge a decision you disagree with.',
  ],

  sections: [
    {
      id: 'what-it-means', h2: 'What does an HMRC compliance check letter mean?', toc: 'What it means',
      body: [
        '<p>It means HMRC is checking that you have paid the right tax at the right time and claimed the right reliefs. A check, also called an enquiry, does not mean HMRC thinks you have done anything wrong. Our <a href="/uk/tax/hmrc-tax-investigation/">HMRC investigation specialists</a> can read the letter, explain exactly what it asks for and reply for you.</p>',
        '<p>HMRC says checks can start for reasons such as figures that look wrong, a large VAT repayment claim when turnover is low, or a small amount of tax declared on a high turnover. The letter should tell you:</p>',
        '<ul><li>which tax, return and period HMRC is looking at</li><li>what information or documents it wants</li><li>the date it wants a reply by</li><li>the name of the officer dealing with it</li></ul>',
        '<p>It usually comes with factsheet CC/FS1a, which explains how checks work. If anything about the letter looks odd, such as a request for bank details by text, check it is genuine first: our guide to <a href="/resources/hmrc-refund-scams/">HMRC scams</a> shows how HMRC really contacts people.</p>',
      ],
    },
    {
      id: 'types', h2: 'What kinds of compliance check are there?', toc: 'Types of check',
      body: [
        '<p>Checks range from a single question about one figure to a full review of several years. What HMRC calls the check tells you a lot about how serious it is.</p>',
        { caption: 'Common HMRC checks and letters', head: ['Type', 'What it involves'], rows: [
          ['Enquiry into a tax return', 'HMRC looks at one part of a Self Assessment or Company Tax Return, or the whole return'],
          ['VAT check', 'A review of VAT returns and records, sometimes with a visit to the business'],
          ['Employer check', 'A review of PAYE, National Insurance, expenses and benefits'],
          ['Letter asking you to check your own returns', 'Sent when data HMRC receives suggests income may be missing. Not a formal enquiry, but worth answering'],
          ['Code of Practice 9 (COP9)', 'Used where HMRC suspects fraud. You have 60 days to accept the Contractual Disclosure Facility'],
        ], after: 'Sources: GOV.UK, HMRC compliance checks help and support, and Contractual Disclosure Facility guidance.' },
        '<p>A COP9 letter is serious and needs specialist advice straight away. If you have income or gains abroad that you have never declared, read about the <a href="/resources/worldwide-disclosure-facility/">Worldwide Disclosure Facility</a>.</p>',
      ],
    },
    {
      id: 'time-limits', h2: 'How far back can HMRC check your tax?', toc: 'Time limits',
      body: [
        '<p>HMRC has 12 months from receiving an on-time Self Assessment return to open an enquiry into it. After that, it can still assess extra tax for 4 years from the end of the tax year, or longer if the error was careless or deliberate.</p>',
        { caption: 'HMRC time limits', head: ['Situation', 'Time limit'], rows: [
          ['Enquiry into an on-time Self Assessment return', '12 months from the date HMRC receives it'],
          ['Enquiry into a late or amended return', 'To the next quarter date (31 January, 30 April, 31 July or 31 October) after the first anniversary'],
          ['Enquiry into an on-time company return', '12 months from delivery (from the filing date for companies in larger groups)'],
          ['Assessing extra tax: normal limit', '4 years from the end of the tax year or period'],
          ['Careless error', '6 years (income tax, capital gains tax, corporation tax, inheritance tax, SDLT)'],
          ['Offshore matters', '12 years (income tax, capital gains tax and inheritance tax)'],
          ['Deliberate error', '20 years'],
        ], after: 'Sources: HMRC manuals SAM31100 and CH53100; Finance Act 1998, Schedule 18, paragraph 24. The 6-year careless limit does not apply to VAT.' },
        '<p>For example, an on-time online return for 2025-26 received on 20 January 2027 can be opened for enquiry until 20 January 2028. The time limits apply to each tax year separately.</p>',
      ],
    },
    {
      id: 'how-to-respond', h2: 'How should you respond to a compliance check letter?', toc: 'How to respond',
      body: [
        '<p>Reply by the date in the letter, give HMRC what it has asked for and nothing it has not, and keep sending returns and payments while the check runs. Steps that help:</p>',
        '<ol><li><strong>Note the deadline.</strong> If you need more time for a good reason, ask the officer before it passes.</li><li><strong>Get your adviser authorised.</strong> HMRC can only discuss your affairs with an agent you have authorised.</li><li><strong>Gather the records</strong>: the return, bank statements, invoices, receipts and working papers for the period.</li><li><strong>Check the figures yourself</strong> before you reply. If you find a mistake, tell HMRC promptly: it reduces any penalty.</li><li><strong>Answer in writing</strong>, keep copies and only cover what was asked. You can say if a request seems unreasonable or irrelevant.</li></ol>',
        '<h3>Information notices</h3>',
        '<p>If you do not provide what HMRC asks for informally, it can issue a formal information notice. You cannot ignore one. Missing its deadline costs £300, then up to £60 for each further day, and careless or deliberate inaccuracies in what you send can cost up to £3,000 each. You can usually appeal within 30 days of the notice, but not against requests for statutory records or notices the tax tribunal has approved.</p>',
      ],
    },
    {
      id: 'outcome', h2: 'What happens at the end of a compliance check?', toc: 'How it ends',
      body: [
        '<p>HMRC closes the check with a decision, such as a letter confirming no change, an amended tax bill or a penalty notice. In some cases it agrees a contract settlement, a binding agreement covering the tax, interest and penalties (this is not used for VAT).</p>',
        '<ul><li><strong>If you overpaid</strong>, HMRC repays you with interest.</li><li><strong>If you underpaid</strong>, you pay the extra tax plus interest, currently 7.75% a year, and possibly a penalty.</li><li><strong>If you cannot pay at once</strong>, HMRC may agree instalments. See how to <a href="/resources/pay-hmrc-in-instalments/">pay HMRC in instalments</a>.</li></ul>',
        '<p>Penalties depend on why the error happened. There is none if you took reasonable care, and the amount falls if you told HMRC about the error, helped it and gave access to your records. Our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a> shows the ranges and how reductions work.</p>',
      ],
    },
    {
      id: 'your-rights', h2: 'What are your rights during a compliance check?', toc: 'Your rights',
      body: [
        '<p>You can have an adviser deal with HMRC for you, choose whether to attend a meeting, ask for more time for a good reason, and challenge decisions you disagree with.</p>',
        '<ul><li><strong>Meetings are optional.</strong> HMRC will only ask to visit your home if you run your business from there.</li><li><strong>Stopping the check.</strong> If you think it should end, write and explain why. If HMRC disagrees, you can apply to the tax tribunal to direct it to close the enquiry (form T245).</li><li><strong>Disagreeing with a decision.</strong> You usually have 30 days to send new information, ask for a review by an officer not involved in the case (reviews usually take 45 days) or appeal to the tribunal.</li><li><strong>Extra support.</strong> HMRC offers help if illness, disability, bereavement or money worries make the check harder to deal with.</li></ul>',
        '<p>Being cooperative usually lowers any penalty. Being slow or silent rarely helps, and it can lead to formal notices.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Does a compliance check mean I am being investigated for fraud?', a: 'No. Most checks are HMRC confirming figures on a return or in your records. HMRC normally deals with fraud through civil procedures such as Code of Practice 9, though a criminal investigation is possible. A check is not a finding that you did anything wrong.' },
    { q: 'How long does an HMRC compliance check take?', a: 'There is no fixed timescale. A check into a single question can close within weeks, while a full review of several years can take much longer. Replying promptly and completely is the most reliable way to keep it short.' },
    { q: 'Do I have to meet the HMRC officer?', a: 'No. HMRC says you can choose whether to have a meeting. You must still provide the information it asks for. If you have an adviser, they can attend or answer in writing for you.' },
    { q: 'Can HMRC look at my bank statements?', a: 'Yes, HMRC can ask for bank statements that relate to the return it is checking. If you do not supply them, it can issue an information notice, which carries penalties of £300 and up to £60 a day if ignored.' },
    { q: 'What if HMRC phones me about a check?', a: 'Some checks are done by phone, but you can ask HMRC to write to you instead. Check the caller is genuine before giving any details, and never share passwords or bank card numbers over the phone.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/hmrc-compliance-checks-help-and-support', 'GOV.UK: HMRC compliance checks help and support'],
    ['https://www.gov.uk/government/publications/general-information-about-compliance-checks-ccfs1a/about-compliance-checks-ccfs1a', 'HMRC factsheet CC/FS1a: About compliance checks'],
    ['https://www.gov.uk/government/publications/compliance-checks-checking-a-customers-tax-position-ccfs2/information-notices-ccfs2', 'HMRC factsheet CC/FS2: Information notices'],
    ['https://www.gov.uk/hmrc-internal-manuals/self-assessment-manual/sam31100', 'HMRC manual SAM31100: Enquiry window'],
    ['https://www.gov.uk/hmrc-internal-manuals/compliance-handbook/ch53100', 'HMRC manual CH53100: Extended time limits'],
    ['https://www.legislation.gov.uk/ukpga/1998/36/schedule/18/paragraph/24', 'legislation.gov.uk: Finance Act 1998, Schedule 18, paragraph 24'],
    ['https://www.legislation.gov.uk/ukpga/2008/9/schedule/36/paragraph/32', 'legislation.gov.uk: Finance Act 2008, Schedule 36, paragraph 32'],
    ['https://www.gov.uk/tax-tribunal', 'GOV.UK: Appeal to the tax tribunal'],
  ],

  related: [
    '/resources/hmrc-penalties-explained/',
    '/resources/worldwide-disclosure-facility/',
    '/resources/pay-hmrc-in-instalments/',
    '/resources/hmrc-refund-scams/',
  ],
};
