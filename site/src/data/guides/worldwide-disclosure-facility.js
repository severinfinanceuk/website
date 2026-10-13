// Guide: /resources/worldwide-disclosure-facility/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and HMRC manuals on 13 October 2026 (sources below). WDF guidance last updated 6 April 2026.
// UK-only rule: say "offshore" or "overseas", never name a country or a foreign tax authority.
// Re-check: the latest tax year the WDF form accepts (2024-25 today), HMRC late payment interest, CC/FS17 penalty tables.
export default {
  url: '/resources/worldwide-disclosure-facility/',
  section: 'tax',
  title: 'Worldwide Disclosure Facility Guide | Severin Finance',
  description: 'Telling HMRC about offshore income or gains via the Worldwide Disclosure Facility: notify, disclose and pay in 90 days, penalties. Free consultation.',
  h1: 'Worldwide Disclosure Facility: how to disclose offshore income',
  crumb: 'Worldwide Disclosure Facility',
  summary: 'Notify HMRC online, then disclose and pay within 90 days. Telling HMRC first keeps penalties lower.',
  topic: 'Disclosing unpaid UK tax on offshore income and gains to HMRC',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/hmrc-tax-investigation/', label: 'Our HMRC disclosure service',
    boxTitle: 'Need to tell HMRC?', text: 'We work out the tax, interest and penalty, prepare your disclosure and deal with HMRC for you.',
  },

  hero: {
    answer: 'The Worldwide Disclosure Facility is how you tell HMRC about unpaid UK tax on offshore income, gains or assets. You notify HMRC through its Digital Disclosure Service, then have 90 days to send the full disclosure and pay the tax, interest and penalty. Coming forward before HMRC contacts you keeps the penalty lower.',
  },

  tldr: [
    'For UK tax owed on <strong>offshore</strong> income, gains, assets or activities, including after a letter from HMRC.',
    'Notify HMRC online first. You get a disclosure reference, then <strong>90 days</strong> to disclose and pay.',
    'Complex cases can ask for <strong>90 more days</strong> (180 in total).',
    'How far back you go depends on your behaviour: usually <strong>up to 12 years</strong> for offshore matters, <strong>20 years</strong> if deliberate.',
    'Offshore penalties can reach <strong>200%</strong> of the tax. An unprompted, full disclosure gets the biggest reductions.',
  ],

  sections: [
    {
      id: 'what-it-is', h2: 'What is the Worldwide Disclosure Facility?', toc: 'What it is',
      body: [
        '<p>It is HMRC\'s route for correcting UK tax that is unpaid because of something offshore: income from an overseas source, assets held outside the UK, or activities carried on mainly abroad. HMRC opened it on 5 September 2016 and has not announced a closing date. Our <a href="/uk/tax/hmrc-tax-investigation/">HMRC investigation and disclosure team</a> prepares the disclosure and deals with HMRC for you.</p>',
        '<p>It is not an amnesty. You still pay all the tax, interest on it and a penalty. What the facility gives you is a structured way to come forward, a set timetable, and the lowest penalties the law allows for your behaviour. HMRC says that if your disclosure is correct and complete and you cooperate, it will not seek a higher penalty (except in specified cases) and will not publish your details.</p>',
        '<p>Typical situations include interest on an overseas bank account, rent from a property abroad, gains on overseas shares or a property sold abroad, and income received before you knew you were UK resident. If your residence is the real question, start with our guide to the <a href="/resources/statutory-residence-test/">statutory residence test</a>.</p>',
      ],
    },
    {
      id: 'who-uses-it', h2: 'Who should use the Worldwide Disclosure Facility?', toc: 'Who uses it',
      body: [
        '<p>Anyone with UK tax unpaid or left out of a return that relates wholly or partly to an offshore matter. That includes people who live outside the UK now, if the tax relates to a time they were liable in the UK.</p>',
        '<ul><li><strong>Individuals</strong> disclosing their own affairs</li><li><strong>Directors and company secretaries</strong> disclosing for a company</li><li><strong>Trustees and personal representatives</strong>, including for someone who has died</li><li><strong>Agents</strong>, such as an accountant, acting for any of the above</li></ul>',
        '<p>HMRC also says you need to use it if you get a letter about your money or assets abroad and find something is wrong. HMRC receives a growing amount of information about accounts and assets held overseas, so these letters are common. Do not ignore one, and do not sign any declaration it encloses until your figures have been checked.</p>',
        '<h3>When a different route applies</h3>',
        { caption: 'Which disclosure route to use', head: ['Your situation', 'Route'], rows: [
          ['Unpaid tax linked to offshore income, gains or assets', 'Worldwide Disclosure Facility'],
          ['Only UK rental income left undeclared', 'Let Property Campaign'],
          ['Other UK income only (no offshore link)', 'Digital Disclosure Service, onshore disclosure'],
          ['You have committed tax fraud and want protection from criminal investigation', 'Contractual Disclosure Facility (Code of Practice 9)'],
          ['You are already under an HMRC enquiry', 'Speak to the officer: HMRC decides whether it can accept a disclosure'],
          ['Tax more than 20 years old', 'Contact HMRC\'s Offshore Disclosure Facility, not the online service'],
        ], after: 'Source: GOV.UK, Worldwide Disclosure Facility guidance (updated 6 April 2026). HMRC may refuse a disclosure if it suspects the money is criminal property.' },
        '<p>One disclosure covers one person or company only. A couple with a joint overseas account each make their own.</p>',
      ],
    },
    {
      id: 'steps', h2: 'How do you make a disclosure, step by step?', toc: 'The steps',
      body: [
        '<p>You notify first, then disclose and pay within 90 days. HMRC\'s online <a href="https://www.gov.uk/guidance/worldwide-disclosure-facility-make-a-disclosure">Worldwide Disclosure Facility guidance</a> links to the Digital Disclosure Service.</p>',
        { caption: 'The Worldwide Disclosure Facility timetable', head: ['Step', 'What happens', 'Timing'], rows: [
          ['1. Notify', 'Tell HMRC you intend to disclose, with your name, address, date of birth, National Insurance number and UTR', 'As soon as you know there is a problem'],
          ['2. References', 'HMRC sends a disclosure reference number (DRN) and a payment reference number (PRN)', 'After notification'],
          ['3. Prepare', 'Gather records, work out income, gains, tax, interest and penalty for each year', 'Within the 90 days'],
          ['4. Disclose', 'Submit the full disclosure online, quoting the DRN', 'Within 90 days of the acknowledgement (180 if HMRC agrees an extension)'],
          ['5. Pay', 'Pay everything you have disclosed, or agree an arrangement with HMRC beforehand', 'The day you submit'],
          ['6. HMRC review', 'Acknowledgement, then a letter setting out what HMRC intends to do', 'Within 15 days; HMRC aims for 90 days after that'],
        ], after: 'Source: GOV.UK, Worldwide Disclosure Facility guidance. Checked 13 October 2026.' },
        '<p>The disclosure asks for each year\'s income and gains, the tax and interest due, your own assessment of your behaviour, the highest value of your overseas assets in the last 5 years (in pounds), and the main places the income or assets were held. You can use estimates where records are missing, but keep your workings. If you cannot pay in full, contact HMRC\'s Offshore Disclosure Facility before you submit. Our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a> explains what HMRC asks about your finances.</p>',
      ],
    },
    {
      id: 'how-far-back', h2: 'How many years do you have to disclose?', toc: 'How far back',
      body: [
        '<p>It depends on why the tax was missed. You pick from seven behaviour descriptions, and the form then shows the years you must cover, based on the time limits in law.</p>',
        { caption: 'HMRC assessment time limits (from the end of the tax year)', head: ['Behaviour', 'Onshore', 'Offshore (income tax and CGT)'], rows: [
          ['Reasonable care taken', '4 years', '12 years for 2015-16 onwards'],
          ['Careless', '6 years', '12 years for 2013-14 onwards'],
          ['Deliberate', '20 years', '20 years'],
        ], after: 'Source: HMRC Compliance Handbook CH53100 and CH53510. The 12-year limit does not apply if HMRC received overseas information in time to assess within the normal limit. Different rules apply to inheritance tax.' },
        '<p>The disclosure form currently accepts tax years up to and including 2024-25. If HMRC has issued a return for 2022-23 or a later year that is still outstanding, file that return instead of putting the year in the disclosure. Income for 2025-26 belongs on your Self Assessment return, due online by 31 January 2027.</p>',
      ],
    },
    {
      id: 'penalties', h2: 'What penalties apply to offshore disclosures?', toc: 'Penalties',
      body: [
        '<p>The penalty is a percentage of the unpaid tax, set by your behaviour, whether you came forward before HMRC contacted you, and the category of the territory involved. The category reflects how much tax information that territory shares with the UK. Category 1 matches the onshore rates.</p>',
        { caption: 'Offshore inaccuracy penalties, unprompted disclosure (% of the tax)', head: ['Category', 'Careless', 'Deliberate', 'Deliberate and concealed'], rows: [
          ['Category 1', '0% to 30%', '30% to 70%', '40% to 100%'],
          ['Category 2', '0% to 45%', '40% to 105%', '55% to 150%'],
          ['Category 3', '0% to 60%', '50% to 140%', '70% to 200%'],
        ], after: 'Source: HMRC factsheet CC/FS17. Prompted disclosures (after HMRC has been in touch) start from higher minimums, for example 15% rather than 0% for a careless Category 1 error.' },
        '<p>Within each range, the penalty falls the more you tell, help and give access to records. Two rules limit that reduction:</p>',
        '<ul><li><strong>Delay:</strong> if a significant period, normally over 3 years, passed before you corrected things, or you could have used an earlier facility, the reduction is unlikely to take you more than 10 percentage points above the minimum.</li><li><strong>Failure to correct:</strong> offshore non-compliance from on or before 5 April 2017 should have been corrected by 30 September 2018. If it was not, the penalty is normally 200% of the tax, with a minimum of 100% for an unprompted disclosure.</li></ul>',
        '<p>Further penalties can be added in serious cases: an asset-based penalty of up to 10% of the asset\'s value where more than £25,000 of tax is at stake in a year, and an extra 50% where assets were moved to stop HMRC finding them. Our guide to <a href="/resources/hmrc-penalties-explained/">HMRC penalties</a> explains behaviour and reductions in more detail.</p>',
      ],
    },
    {
      id: 'what-it-costs', h2: 'How do the tax, interest and penalty add up?', toc: 'What it costs',
      body: [
        '<p>You work out all three yourself and pay them together. Interest runs daily on each year\'s tax from the date it was due until you pay, at HMRC\'s late payment rate. That rate is the Bank of England base rate plus 4 percentage points, 7.75% a year from 9 January 2026.</p>',
        { caption: 'Worked example: undeclared overseas interest (illustrative)', head: ['Item', 'Amount'], rows: [
          ['Tax unpaid across 6 years (careless, Category 1)', '£10,000'],
          ['Interest on each year\'s tax to the payment date', '£2,500'],
          ['Penalty at 10% (unprompted, after reductions)', '£1,000'],
          ['Total paid on the day of disclosure', '£13,500'],
        ], after: 'Illustrative figures only. The real interest depends on each year\'s due date, and the penalty depends on your behaviour and the quality of the disclosure.' },
        '<p>Check whether any overseas tax already paid on the same income can be credited against the UK tax under a tax treaty (double taxation agreement). That can reduce the bill a lot, but you need evidence of the foreign tax paid.</p>',
      ],
    },
    {
      id: 'after-you-submit', h2: 'What happens after you submit?', toc: 'After you submit',
      body: [
        '<p>HMRC acknowledges the disclosure within 15 days and aims to write within 90 days of that, saying whether it accepts it. It may ask for evidence first, such as bank statements or sale documents. Your disclosure is treated as an offer, and it must cover all the tax, interest and penalties due.</p>',
        '<p>If HMRC finds the disclosure incomplete or inaccurate, or you do not cooperate, it can charge a higher penalty, open a civil or criminal investigation and publish your details. Making the disclosure also means HMRC can use what you tell it, so getting the figures and the behaviour right matters more than speed of submission. If HMRC opens a check instead, our guide to <a href="/resources/hmrc-compliance-check-letter/">HMRC compliance check letters</a> explains what to do next.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is the Worldwide Disclosure Facility still open?', a: 'Yes. HMRC opened it on 5 September 2016 and has not set a closing date. The guidance was last updated on 6 April 2026. You notify HMRC through the Digital Disclosure Service, then have 90 days to make the full disclosure and pay.' },
    { q: 'Can I use the Worldwide Disclosure Facility if I live abroad?', a: 'Yes, if you owe UK tax that relates to an offshore matter and you meet the conditions. Non-UK residents can notify and disclose through the same online service, either themselves or through an agent.' },
    { q: 'What if I got an HMRC letter about my overseas income?', a: 'Check your returns against your overseas income and gains for the years HMRC mentions. If something is missing, HMRC expects you to use the Worldwide Disclosure Facility. Take advice before signing any certificate that says your tax affairs are correct.' },
    { q: 'Will I be prosecuted if I disclose offshore income?', a: 'A full, accurate disclosure with cooperation means HMRC will not seek a higher penalty or publish your details, except in specified cases. It does not give immunity from prosecution. If you have committed fraud, the Contractual Disclosure Facility (Code of Practice 9) is the route that offers that protection.' },
    { q: 'Can I get more than 90 days to make the disclosure?', a: 'In complex cases, yes. You can ask HMRC\'s Offshore Disclosure Facility for an extra 90 days, giving 180 days in total. Ask before the first 90 days run out, and explain why the extra time is needed.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/worldwide-disclosure-facility-make-a-disclosure', 'GOV.UK: Worldwide Disclosure Facility'],
    ['https://www.gov.uk/government/publications/compliance-checks-penalties-for-income-tax-and-capital-gains-tax-for-offshore-matters-ccfs17/compliance-checks-penalties-for-offshore-non-compliance-ccfs17', 'HMRC factsheet CC/FS17: Offshore penalties'],
    ['https://www.gov.uk/hmrc-internal-manuals/compliance-handbook/ch53100', 'HMRC Compliance Handbook CH53100: Time limits'],
    ['https://www.gov.uk/hmrc-internal-manuals/compliance-handbook/ch53510', 'HMRC Compliance Handbook CH53510: Offshore time limits'],
    ['https://www.gov.uk/government/publications/requirement-to-correct', 'GOV.UK: Requirement to Correct'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-hmrc-interest-rates-for-late-and-early-payments/rates-and-allowances-hmrc-interest-rates', 'GOV.UK: HMRC interest rates'],
    ['https://www.gov.uk/guidance/admitting-tax-fraud-the-contractual-disclosure-facility-cdf', 'GOV.UK: Contractual Disclosure Facility (COP9)'],
  ],

  related: [
    '/resources/hmrc-penalties-explained/',
    '/resources/hmrc-compliance-check-letter/',
    '/resources/statutory-residence-test/',
    '/resources/pay-hmrc-in-instalments/',
  ],
};
