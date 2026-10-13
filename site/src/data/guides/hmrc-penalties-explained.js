// Guide: /resources/hmrc-penalties-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK (HMRC factsheets CC/FS7a, CC/FS11, CC/FS17 and the tax appeals pages) on 13 October 2026.
// No promises about penalty outcomes. Re-check after each Finance Act and Bank Rate change.
export default {
  url: '/resources/hmrc-penalties-explained/',
  section: 'tax',
  title: 'HMRC Penalties Explained and How to Appeal | Severin Finance',
  description: 'HMRC penalties: 0% to 100% of the extra tax for errors, plus failure to notify, late filing, reasonable excuse and 30-day appeals. Free consultation.',
  h1: 'HMRC penalties explained',
  summary: 'Penalties for errors, failing to notify, late returns and late payment, and how to reduce or appeal them.',
  topic: 'HMRC tax penalties and appeals',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/hmrc-tax-investigation/', label: 'Our HMRC investigation service',
    boxTitle: 'Facing an HMRC penalty?', text: 'We check how the penalty was worked out, argue for every reduction the rules allow and appeal where you have grounds.',
  },

  hero: {
    answer: 'HMRC charges penalties for errors in returns, for not telling it you owe tax, and for filing or paying late. Error penalties run from nothing, if you took reasonable care, to 100% of the extra tax for deliberate and concealed errors. Telling HMRC early cuts the penalty, and you usually have 30 days to appeal.',
  },

  tldr: [
    'No penalty for an error if you <strong>took reasonable care</strong>.',
    'Careless errors: <strong>0% to 30%</strong> of the extra tax. Deliberate: <strong>20% to 70%</strong>. Deliberate and concealed: <strong>30% to 100%</strong>.',
    'Telling HMRC before it finds the error (unprompted) gives the <strong>lowest minimum</strong>.',
    'Late filing and late payment penalties are separate, and interest runs at <strong>7.75%</strong> a year.',
    'Appeal within <strong>30 days</strong> of the penalty notice if you have a reasonable excuse or think it is wrong.',
  ],

  sections: [
    {
      id: 'types', h2: 'What penalties can HMRC charge?', toc: 'Types of penalty',
      body: [
        '<p>HMRC penalties fall into four main groups: errors in returns or documents, failing to tell HMRC you need to pay tax, filing late and paying late. Our <a href="/uk/tax/hmrc-tax-investigation/">HMRC investigation team</a> checks how any penalty was calculated and makes the case for the lowest amount the rules allow.</p>',
        { caption: 'The main HMRC penalties', head: ['Penalty', 'What triggers it', 'How it is worked out'], rows: [
          ['Inaccuracy', 'An error in a return or document that means too little tax', 'A percentage of the extra tax, based on behaviour'],
          ['Failure to notify', 'Not telling HMRC you are liable to a tax, or need to register, on time', 'A percentage of the tax unpaid because of the delay'],
          ['Late filing', 'A return sent after its deadline', 'Fixed amounts, then amounts linked to the tax'],
          ['Late payment', 'Tax paid after its due date', 'A percentage of the tax paid late'],
        ], after: 'Sources: HMRC factsheets CC/FS7a and CC/FS11, and GOV.UK penalty guidance for each tax.' },
        '<p>Interest is not a penalty. HMRC charges it on any tax paid late, from the due date until payment, at the Bank of England base rate plus 4 percentage points: 7.75% a year from 9 January 2026. Penalties not paid within 30 days of the notice also attract interest.</p>',
      ],
    },
    {
      id: 'inaccuracy', h2: 'How are penalties for errors in a tax return worked out?', toc: 'Errors in returns',
      body: [
        '<p>The penalty is a percentage of the extra tax due (HMRC calls it potential lost revenue), and the range depends on why the error happened and whether you told HMRC before it found out.</p>',
        { caption: 'Inaccuracy penalties for UK (domestic) matters', head: ['Behaviour', 'Unprompted disclosure', 'Prompted disclosure'], rows: [
          ['Took reasonable care', 'No penalty', 'No penalty'],
          ['Careless', '0% to 30%', '15% to 30%'],
          ['Deliberate', '20% to 70%', '35% to 70%'],
          ['Deliberate and concealed', '30% to 100%', '50% to 100%'],
        ], after: 'Source: HMRC factsheet CC/FS7a, Penalties for inaccuracies in returns or documents. Checked 13 October 2026.' },
        '<p>A disclosure is <strong>unprompted</strong> if you make it before you have reason to believe HMRC has found, or is about to find, the error. Once a check has started, a disclosure is almost always prompted. Our guide to <a href="/resources/hmrc-compliance-check-letter/">HMRC compliance check letters</a> explains what to do when HMRC writes first.</p>',
        '<p>Errors involving offshore income, gains or assets can cost more. For income tax, capital gains tax and inheritance tax, the ranges depend on the territory involved and can reach 200% of the tax. If that applies to you, read about the <a href="/resources/worldwide-disclosure-facility/">Worldwide Disclosure Facility</a>.</p>',
      ],
    },
    {
      id: 'reductions', h2: 'How can you reduce an HMRC penalty?', toc: 'Reducing a penalty',
      body: [
        '<p>By telling HMRC about the error, helping it work out the tax and giving it access to your records. HMRC calls this the quality of disclosure, and it moves the penalty down within its range.</p>',
        '<ul><li><strong>Telling:</strong> up to 30% of the reduction. Admit the error and explain it as soon as you know.</li><li><strong>Helping:</strong> up to 40%. Answer questions, work out the figures and volunteer information.</li><li><strong>Giving access:</strong> up to 30%. Let HMRC see the records it needs to check the tax.</li></ul>',
        '<p>Delay costs you. If a disclosure takes a long time, for example 3 years or more, the maximum reduction is usually limited to 10 percentage points above the bottom of the range.</p>',
        { caption: 'Illustrative example: careless error, prompted disclosure', head: ['Step', 'Figure'], rows: [
          ['Extra tax due', '£10,000'],
          ['Penalty range', '15% to 30%'],
          ['Quality of disclosure reduction agreed', '80%'],
          ['Penalty rate: 30% minus (15 points x 80%)', '18%'],
          ['Penalty', '£1,800'],
        ], after: 'Illustrative figures. Interest is charged on the extra tax on top of the penalty.' },
        '<p>A careless penalty can also be suspended for up to 2 years. HMRC sets conditions to help you avoid future errors, such as better record keeping. Meet them, with no further inaccuracy penalty in that time, and the suspended penalty is cancelled. Deliberate penalties cannot be suspended.</p>',
      ],
    },
    {
      id: 'failure-to-notify', h2: 'What is the penalty for not telling HMRC you owe tax?', toc: 'Failure to notify',
      body: [
        '<p>A failure to notify penalty applies if you do not tell HMRC on time that you have become liable to a tax or need to register. It is a percentage of the tax unpaid because of the delay. Common time limits are:</p>',
        '<ul><li>registering for VAT within 30 days of going over the threshold</li><li>telling HMRC you are self-employed or need a return within 6 months of the end of the tax year (by 5 October)</li><li>a company with no notice to file telling HMRC it is chargeable within 12 months of its accounting period ending</li></ul>',
        { caption: 'Failure to notify penalties', head: ['Behaviour', 'Unprompted', 'Prompted'], rows: [
          ['Non-deliberate, told HMRC within 12 months', '0% to 30%', '10% to 30%'],
          ['Non-deliberate, 12 months or more', '10% to 30%', '20% to 30%'],
          ['Deliberate', '20% to 70%', '35% to 70%'],
          ['Deliberate and concealed', '30% to 100%', '50% to 100%'],
        ], after: 'Source: HMRC factsheet CC/FS11, Penalties for failure to notify. There is no penalty if you had a reasonable excuse and the failure was not deliberate.' },
      ],
    },
    {
      id: 'late-filing-payment', h2: 'What are the penalties for late returns and late payment?', toc: 'Late filing and payment',
      body: [
        '<p>Each tax has its own fixed late filing penalties and late payment percentages, and a return that is both late and unpaid collects both.</p>',
        { caption: 'Late filing and payment penalties: an overview', head: ['Tax', 'Late filing', 'Late payment'], rows: [
          ['Self Assessment', '£100, then £10 a day after 3 months (up to £900), then 5% or £300 at 6 and 12 months', '5% of the unpaid tax at 30 days, 6 months and 12 months'],
          ['Company Tax Return', '£200, another £200 at 3 months, then 10% of unpaid tax at 6 and 12 months', 'Interest only'],
          ['VAT', 'Penalty points, with a £200 penalty once you reach the threshold', '3% at day 15, 3% more at day 30, then 10% a year'],
          ['PAYE', '£100 to £400 a month for a late FPS, by number of employees', '1% to 4% of the late amount, by number of defaults'],
        ], after: 'Company Tax Return amounts apply to returns due on or after 1 April 2026. Sources: GOV.UK penalty pages for each tax. Checked 13 October 2026.' },
        '<p>For the detail, see our guides to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a>, <a href="/resources/vat-penalties/">VAT penalties</a> and <a href="/resources/employer-payroll-deadlines/">employer payroll deadlines</a>.</p>',
      ],
    },
    {
      id: 'reasonable-excuse', h2: 'What counts as a reasonable excuse?', toc: 'Reasonable excuse',
      body: [
        '<p>A reasonable excuse is something that stopped you meeting a tax obligation even though you took reasonable care. HMRC judges it on your circumstances, and you must put things right as soon as the excuse ends.</p>',
        { caption: 'Examples from GOV.UK', head: ['May be accepted', 'Will not be accepted'], rows: [
          ['A close relative died shortly before the deadline', 'Not having the money to pay'],
          ['An unexpected stay in hospital or a serious illness', 'Finding HMRC\'s online system too hard to use'],
          ['Computer or software failure while preparing your return', 'Not getting a reminder from HMRC'],
          ['A fire, flood or theft that stopped you filing', 'Making a mistake on your return'],
        ], after: 'Source: GOV.UK, Tax appeals: reasonable excuses.' },
        '<p>Relying on someone else to send your return, who then did not, can also count, but only if you took reasonable care yourself, such as checking that it had been sent.</p>',
      ],
    },
    {
      id: 'appeals', h2: 'How do you appeal an HMRC penalty?', toc: 'Appeals',
      body: [
        '<p>You usually have 30 days from the date of the penalty notice to appeal. Use the form or instructions sent with the penalty, or write to HMRC with your reference number, the dates and your reason.</p>',
        '<ul><li><strong>Income tax, corporation tax and other direct taxes:</strong> appeal to HMRC first. If it does not agree, you can ask for a review by an officer not involved in the case, or take the appeal to the tax tribunal.</li><li><strong>VAT and other indirect taxes:</strong> HMRC offers a review with the penalty. You have 30 days to accept it or appeal to the tribunal.</li><li><strong>After a review:</strong> reviews usually take 45 days. If you still disagree, you can usually appeal to the tribunal within 30 days of the review result.</li></ul>',
        '<p>You do not have to pay a penalty while your appeal or review is open. Disputed tax is different: interest keeps running on it, so it often makes sense to pay what you accept you owe. If you miss the 30 days, you can still appeal late, but you must explain why.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Can HMRC charge a penalty if I made an honest mistake?', a: 'Not if you took reasonable care, for example by keeping proper records and asking for advice when unsure. If the mistake was careless, the penalty is up to 30% of the extra tax, and it can be nil if you tell HMRC before it finds the error.' },
    { q: 'Can HMRC penalties be cancelled?', a: 'Yes, if you appeal successfully. HMRC or the tax tribunal can cancel a penalty where you had a reasonable excuse or the penalty was wrong. Careless error penalties can also be suspended for up to 2 years and then cancelled if you meet HMRC\'s conditions.' },
    { q: 'Do I have to pay an HMRC penalty while I appeal?', a: 'No. You do not have to pay a penalty until the appeal or review is settled. Interest still runs on any disputed tax, so many people pay the tax they agree is due to limit the cost.' },
    { q: 'What is the maximum HMRC penalty?', a: 'For UK matters, 100% of the extra tax, for deliberate and concealed errors. For income tax, capital gains tax and inheritance tax involving offshore matters, penalties can reach 200% of the tax, depending on the territory involved.' },
    { q: 'Is not having the money a reasonable excuse?', a: 'No. GOV.UK says a lack of funds, such as a failed payment, will not be accepted. If you cannot pay, contact HMRC before the deadline about a payment plan, which can stop some late payment penalties.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/compliance-checks-penalties-for-inaccuracies-in-returns-or-documents-ccfs7a/compliance-checks-for-penalties-of-inaccuracies-in-returns-or-documents-ccfs7a-factsheet', 'HMRC factsheet CC/FS7a: Penalties for inaccuracies'],
    ['https://www.gov.uk/government/publications/compliance-checks-penalties-for-failure-to-notify-ccfs11/compliance-checks-penalties-for-failure-to-notify-ccfs11', 'HMRC factsheet CC/FS11: Penalties for failure to notify'],
    ['https://www.gov.uk/government/publications/compliance-checks-penalties-for-income-tax-and-capital-gains-tax-for-offshore-matters-ccfs17/compliance-checks-penalties-for-offshore-non-compliance-ccfs17', 'HMRC factsheet CC/FS17: Offshore penalties'],
    ['https://www.gov.uk/tax-appeals/reasonable-excuses', 'GOV.UK: Reasonable excuses'],
    ['https://www.gov.uk/tax-appeals/penalty', 'GOV.UK: Disagree with a tax penalty'],
    ['https://www.gov.uk/tax-appeals/review-of-a-tax-or-penalty-decision', 'GOV.UK: Get a review of a tax or penalty decision'],
    ['https://www.gov.uk/tax-appeals/delay-payment', 'GOV.UK: Delay paying while you appeal'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates'],
  ],

  related: [
    '/resources/hmrc-compliance-check-letter/',
    '/resources/vat-penalties/',
    '/resources/self-assessment-deadlines/',
    '/resources/worldwide-disclosure-facility/',
  ],
};
