// Guide: /resources/statutory-residence-test/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK (RDR3, last updated 11 June 2026) and the HMRC Residence and FIG Regime Manual
// (RFIG20000 onwards) on 13 October 2026. Re-check each April and after each Budget.
export default {
  url: '/resources/statutory-residence-test/',
  section: 'cross-border',
  title: 'Statutory Residence Test Explained | Severin Finance',
  description: 'How the Statutory Residence Test works: the 16, 46 and 183 day tests, UK ties, day counts and split year treatment if you move abroad. Free consultation.',
  h1: 'The Statutory Residence Test explained',
  crumb: 'Statutory Residence Test',
  summary: 'The 16, 46 and 183 day tests, the five UK ties, day counting and split year treatment.',
  topic: 'The UK Statutory Residence Test',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/cross-border/non-resident-uk-tax/', label: 'Our non-resident tax service',
    boxTitle: 'Not sure of your status?', text: 'We work out your residence for each tax year, claim split year treatment where it applies and file your UK return.',
  },

  hero: {
    answer: 'The Statutory Residence Test decides whether you are UK resident for a tax year. You are automatically non-resident with fewer than 16 days in the UK, or fewer than 46 if you were not resident in the previous 3 years. You are automatically resident with 183 days or more. In between, your UK ties decide.',
  },

  tldr: [
    'The test runs <strong>tax year by tax year</strong> (6 April to 5 April), so your status can change from one year to the next.',
    '<strong>Fewer than 16 days</strong> in the UK (or <strong>fewer than 46</strong> for new arrivals) makes you non-resident. <strong>183 days or more</strong> makes you resident.',
    'In between, the number of days and your <strong>UK ties</strong> (family, accommodation, work, 90-day, country) decide.',
    'A day counts if you are in the UK at <strong>midnight</strong>, with limited exceptions for transit and exceptional circumstances (up to <strong>60 days</strong>).',
    'In the year you leave or arrive, <strong>split year treatment</strong> can divide the year into a UK part and an overseas part.',
  ],

  sections: [
    {
      id: 'how-it-works', h2: 'How does the Statutory Residence Test work?', toc: 'How it works',
      body: [
        '<p>You take three steps, in order, for each tax year, and you stop as soon as one gives an answer. If you live abroad or are about to move, our <a href="/cross-border/non-resident-uk-tax/">non-resident tax accountants</a> work through the test with you and record the result on your UK tax return.</p>',
        { caption: 'The order of the Statutory Residence Test', head: ['Step', 'Question', 'If it applies'], rows: [
          ['1. Automatic overseas tests', 'Do you meet any of them?', 'You are non-resident. Stop here'],
          ['2. Automatic UK tests', 'Do you meet any of them?', 'You are UK resident. Stop here'],
          ['3. Sufficient ties test', 'Do your UK days and ties reach the limit?', 'Resident if they do, non-resident if they do not'],
        ], after: 'Source: GOV.UK, RDR3 Statutory Residence Test guidance note. Checked 13 October 2026.' },
        '<p>The overseas tests come first. So if you meet an automatic overseas test, you are non-resident even if an automatic UK test would also be met.</p>',
      ],
    },
    {
      id: 'automatic-overseas-tests', h2: 'What are the automatic overseas tests?', toc: 'Automatic overseas tests',
      body: [
        '<p>You are automatically non-resident for a tax year if you meet any one of three tests. Two are simple day counts. The third is for people working full-time abroad.</p>',
        { caption: 'Automatic overseas tests (any one is enough)', head: ['Test', 'Conditions'], rows: [
          ['First test', 'UK resident in 1 or more of the previous 3 tax years, and fewer than 16 days in the UK this tax year'],
          ['Second test', 'Not UK resident in any of the previous 3 tax years, and fewer than 46 days in the UK this tax year'],
          ['Third test', 'Full-time work abroad over the tax year, fewer than 91 days in the UK, fewer than 31 days with more than 3 hours of UK work, and no significant break from overseas work'],
        ], after: 'Source: GOV.UK, RDR3, and HMRC manual RFIG20140. Separate tests apply to people who have died.' },
        '<p>Full-time work means an average of at least 35 hours a week overseas, using HMRC\'s set calculation. A significant break is at least 31 days in a row with no overseas working day of more than 3 hours (annual, sick or parenting leave counts as working). The third test does not cover voluntary workers, or people whose job is on a vehicle, aircraft or ship.</p>',
      ],
    },
    {
      id: 'automatic-uk-tests', h2: 'What are the automatic UK tests?', toc: 'Automatic UK tests',
      body: [
        '<p>If no overseas test applies, you are automatically UK resident if you meet any one of three UK tests.</p>',
        '<ul><li><strong>183 days:</strong> you spend 183 days or more in the UK in the tax year.</li><li><strong>UK home:</strong> you have a UK home for a period of at least 91 consecutive days, at least 30 of those days fall in the tax year, and you are present in that home on at least 30 days in the year. During that time you either have no home abroad, or you are present in each home abroad on fewer than 30 days in the tax year.</li><li><strong>Full-time UK work:</strong> you work full-time in the UK for any 365-day period, part of it falls in the tax year, and more than 75% of the days in that period on which you work more than 3 hours are UK days.</li></ul>',
        '<p>The home test catches many people who move abroad but keep their old house ready to come back to. If you move out completely and let the property commercially, it is generally not your home while it is let, unless you or your family keep a right to live there.</p>',
      ],
    },
    {
      id: 'sufficient-ties-test', h2: 'How many UK ties make you resident?', toc: 'Sufficient ties',
      body: [
        '<p>It depends on how many days you spend in the UK and whether you were UK resident in any of the previous 3 tax years. People leaving the UK (leavers) need fewer ties to stay resident than people arriving for the first time (arrivers).</p>',
        { caption: 'Sufficient ties test: ties needed to be UK resident', head: ['Days in the UK in the tax year', 'Resident in 1 or more of the last 3 years', 'Not resident in any of the last 3 years'], rows: [
          ['16 to 45', '4 or more ties', 'Always non-resident'],
          ['46 to 90', '3 or more ties', 'All 4 ties'],
          ['91 to 120', '2 or more ties', '3 or more ties'],
          ['121 to 182', '1 or more ties', '2 or more ties'],
        ], after: 'Source: GOV.UK, RDR3. Fewer than 16 days, or 183 days or more, are settled by the automatic tests.' },
        { caption: 'The five UK ties', head: ['Tie', 'You have it if'], rows: [
          ['Family', 'Your spouse, civil partner or partner you live with, or a child under 18, is UK resident (you have no tie through a child you see in the UK on fewer than 61 days in the year)'],
          ['Accommodation', 'A place to live in the UK is available to you for at least 91 days in the year (gaps under 16 days are ignored) and you spend at least one night there, or 16 nights if it is a close relative\'s home'],
          ['Work', 'You work more than 3 hours a day in the UK on at least 40 days in the year'],
          ['90-day', 'You spent more than 90 days in the UK in either or both of the previous 2 tax years'],
          ['Country', 'You were in the UK at midnight more than in any other single country (only for people resident in 1 or more of the last 3 years)'],
        ], after: 'Source: HMRC Residence and FIG Regime Manual, RFIG20530 to RFIG20580. Checked 13 October 2026.' },
        '<p><strong>Illustrative example:</strong> you left the UK last year. This year you spend 100 days in the UK, stay in your own flat when you visit, and spent 200 days in the UK the year before. You have an accommodation tie and a 90-day tie. With 91 to 120 days, 2 ties is enough, so you are still UK resident. Cutting your visits to 90 days would raise the bar to 3 ties.</p>',
      ],
    },
    {
      id: 'counting-days', h2: 'How do you count days in the UK?', toc: 'Counting days',
      body: [
        '<p>A day counts as a UK day if you are in the UK at the end of the day, at midnight. Arriving at 10am and leaving at 9pm on the same day does not count. There are three important adjustments.</p>',
        '<ul><li><strong>Transit:</strong> if you arrive as a passenger on your way between two places outside the UK, leave the next day, and do nothing in between that is unrelated to the journey (such as meeting friends or holding work meetings), the arrival day does not count.</li><li><strong>Exceptional circumstances:</strong> days when circumstances beyond your control stop you leaving, such as war, civil unrest, a natural disaster or a sudden or life-threatening illness or injury, can be left out of most of the day counts, provided you intend to leave as soon as you can. The limit is 60 days in a tax year.</li><li><strong>The deeming rule:</strong> if you were UK resident in 1 or more of the previous 3 tax years, have at least 3 UK ties, and are in the UK on more than 30 days without being here at midnight, every such day after the first 30 counts as a UK day.</li></ul>',
        '<p>Keep evidence of every trip, such as boarding passes and travel bookings. A single extra night can move you into a different row of the ties table.</p>',
      ],
    },
    {
      id: 'split-year-treatment', h2: 'What happens in the year you leave or arrive?', toc: 'Split year treatment',
      body: [
        '<p>You are resident or non-resident for a whole tax year, but split year treatment can divide the year you leave or arrive into a UK part and an overseas part. Income you receive abroad in the overseas part is then generally taxed as if you were non-resident. It applies only if you are UK resident for that year and you meet one of eight cases.</p>',
        { caption: 'Split year cases', head: ['Case', 'Situation'], rows: [
          ['Case 1', 'You start full-time work abroad'],
          ['Case 2', 'Your partner starts full-time work abroad and you go with them'],
          ['Case 3', 'You stop having any UK home and move abroad'],
          ['Case 4', 'You start to have your only home in the UK'],
          ['Case 5', 'You start full-time work in the UK'],
          ['Case 6', 'You stop full-time work abroad and return'],
          ['Case 7', 'You return with a partner who stops full-time work abroad'],
          ['Case 8', 'You start to have a home in the UK'],
        ], after: 'Cases 1 to 3 are for leavers and need you to be resident the year before. Cases 4 to 8 are for arrivers and need you to be non-resident the year before. Source: HMRC manual RFIG21030.' },
        '<p>Each case has its own conditions. For Case 1, for example, you must also be non-resident the following year under the third automatic overseas test. For Case 3, you must spend fewer than 16 days in the UK after leaving, and within 6 months become tax resident in the country where you live, be there at midnight every day, or have your only home there. GOV.UK confirms you do not get split year treatment if you live abroad for less than a full tax year before coming back.</p>',
      ],
    },
    {
      id: 'telling-hmrc', h2: 'How do you tell HMRC your residence status?', toc: 'Telling HMRC',
      body: [
        '<p>If you file a Self Assessment return, you claim non-residence and split year treatment on the residence pages, form SA109, which is now called "Residence and foreign income and gains (FIG) regime etc". You enter your UK days, ties and the split year case that applies. GOV.UK says you cannot use HMRC\'s free online service to tell it you have left, so returns with SA109 go by post, through commercial software or through an accountant. See our guide to <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> for the 2025-26 dates.</p>',
        '<p>If you do not normally file a return, send form P85 when you leave, with parts 2 and 3 of your P45 if you have one.</p>',
        '<p>Being non-resident does not end every UK tax. UK rent is still taxed, and our guide to the <a href="/resources/non-resident-landlord-scheme/">Non-Resident Landlord Scheme</a> explains how. If you sell UK property while living abroad, you must report it within 60 days, as our <a href="/resources/60-day-property-return/">60-day property return</a> guide sets out.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How many days can I spend in the UK without becoming resident?', a: 'It depends on your history and ties. If you were UK resident in any of the last 3 tax years, fewer than 16 days is always safe. If you were not, fewer than 46 days is safe. Above that, the number of UK ties you have sets your limit, up to a maximum of 182 days.' },
    { q: 'Do days of arrival and departure count?', a: 'Only if you are in the UK at midnight. The day you fly in usually counts and the day you fly out usually does not. If you have 3 or more ties and were resident in the last 3 years, days without a midnight can count after the first 30.' },
    { q: 'Does owning a UK house make me UK resident?', a: 'Not on its own. A UK home can make you resident under the automatic home test if you are present there on at least 30 days and have no home abroad you use as much. A property available to you for 91 days or more is also an accommodation tie.' },
    { q: 'Can I be resident in the UK and another country at the same time?', a: 'Yes. Each country applies its own rules, so you can be resident in both for the same period. A tax treaty (double taxation agreement) between the UK and the country where you live usually decides which country has the main right to tax, and relief stops you paying twice.' },
    { q: 'Do I need split year treatment if I leave in the middle of the tax year?', a: 'Without it, you are UK resident for the whole tax year and taxed on worldwide income for all of it. If you meet one of the eight split year cases, only the UK part of the year is taxed as resident. You claim it on form SA109 with your return.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/rdr3-statutory-residence-test-srt/guidance-note-for-statutory-residence-test-srt-rdr3', 'GOV.UK: Statutory Residence Test guidance (RDR3)'],
    ['https://www.gov.uk/hmrc-internal-manuals/residence-and-fig-regime-manual/rfig20000', 'HMRC manual: Statutory Residence Test (RFIG20000)'],
    ['https://www.gov.uk/hmrc-internal-manuals/residence-and-fig-regime-manual/rfig20500', 'HMRC manual: The ties test (RFIG20500)'],
    ['https://www.gov.uk/hmrc-internal-manuals/residence-and-fig-regime-manual/rfig20700', 'HMRC manual: Days spent in the UK (RFIG20700)'],
    ['https://www.gov.uk/hmrc-internal-manuals/residence-and-fig-regime-manual/rfig21000', 'HMRC manual: Split year treatment (RFIG21000)'],
    ['https://www.gov.uk/tax-foreign-income/residence', 'GOV.UK: Tax on foreign income, residence'],
    ['https://www.gov.uk/tax-right-retire-abroad-return-to-uk', 'GOV.UK: Tax if you leave the UK'],
    ['https://www.gov.uk/government/publications/self-assessment-residence-remittance-basis-etc-sa109', 'GOV.UK: Residence pages (SA109)'],
  ],

  related: [
    '/resources/60-day-property-return/',
    '/resources/non-resident-landlord-scheme/',
    '/resources/uk-company-for-non-residents/',
    '/resources/self-assessment-deadlines/',
  ],
};
