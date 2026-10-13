// Guide: /resources/emi-share-options/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and HMRC manuals on 13 October 2026 (sources below). Also checked:
// ETASSUM50500 and ETASSUM51060 (Finance Act 2026 s13: £6m / £120m / 500 employees / 15 years from 6 April 2026,
// Specified (Northern Ireland) Company keeps the old limits), ETASSUM53020 (25 hours or 75%), ETASSUM53040 (30%),
// ETASSUM56010 (6 July deadline for grants from 6 April 2024, 92 days before), ETASSUM57030, 57180, 57210,
// and the July 2026 measure paper removing the grant notification from 6 April 2027 (Finance Bill 2026-27, not yet law).
// Re-check each April and after each Budget.
export default {
  url: '/resources/emi-share-options/',
  section: 'company-services',
  title: 'EMI Share Options: Rules and Limits 2026 | Severin Finance',
  description: 'EMI share options in 2026-27: the £250,000 employee limit, the new £6 million company limit, HMRC valuations and the 6 July notice. Free consultation.',
  h1: 'EMI share options: how they work and the 2026 limits',
  crumb: 'EMI share options',
  summary: 'Tax-advantaged options worth up to £250,000 per employee, in companies with up to £120 million of assets.',
  topic: 'Enterprise Management Incentive (EMI) share options',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/business-valuation/', label: 'Our business valuation service',
    boxTitle: 'Granting EMI options?', text: 'We value the shares under option, prepare form VAL231 for HMRC and time it with your grant date.',
  },

  hero: {
    answer: 'EMI share options let a qualifying UK company give employees options over shares worth up to £250,000 each. There is no income tax or National Insurance on exercise if the price is at least the market value at grant. From 6 April 2026, most companies qualify with gross assets up to £120 million and fewer than 500 employees.',
  },

  tldr: [
    'Each employee can hold EMI options over shares worth up to <strong>£250,000</strong> at grant, counted over a 3-year period.',
    'From <strong>6 April 2026</strong>: gross assets up to <strong>£120 million</strong>, fewer than <strong>500</strong> employees, and up to <strong>£6 million</strong> of unexercised options.',
    'Options can now qualify for up to <strong>15 years</strong> from grant, up from 10.',
    'Tell HMRC about options granted in 2026-27 by <strong>6 July 2027</strong>. The separate notice is due to be scrapped for grants from 6 April 2027.',
    'An HMRC-agreed share value (form VAL231) lasts <strong>90 days</strong>, so grant inside that window.',
  ],

  sections: [
    {
      id: 'how-emi-works', h2: 'How do EMI share options work?', toc: 'How EMI works',
      body: [
        '<p>An Enterprise Management Incentive (EMI) option gives an employee the right to buy shares in your company later, at a price fixed today. If the price is at least the market value on the day you grant the option, the employee pays no income tax or National Insurance when they exercise it, and pays capital gains tax only when they sell. The price matters, so our <a href="/uk/company-services/business-valuation/">business valuation</a> team values the shares and asks HMRC to agree the figure before you grant.</p>',
        { caption: 'EMI limits for options granted on or after 6 April 2026', head: ['Limit', 'Before 6 April 2026', 'From 6 April 2026'], rows: [
          ['Per employee (market value at grant)', '£250,000', '£250,000'],
          ['Company total of unexercised options', '£3 million', '£6 million'],
          ['Company (or group) gross assets', '£30 million', '£120 million'],
          ['Full-time equivalent employees', 'Fewer than 250', 'Fewer than 500'],
          ['Longest qualifying exercise period', '10 years', '15 years'],
        ], after: 'Source: HMRC Employee Tax Advantaged Share Scheme User Manual, ETASSUM50500 (Finance Act 2026, section 13). Checked 13 October 2026. A "Specified Company" keeps the old limits: see below.' },
        '<p>Existing options that have not lapsed or been exercised can be amended to run for up to 15 years from grant, as long as they are exercised on or after 6 April 2026. You cannot bring an exercise date forward, because HMRC treats that as releasing the option and granting a new one.</p>',
      ],
    },
    {
      id: 'qualifying-company', h2: 'Which companies can grant EMI options?', toc: 'Qualifying companies',
      body: [
        '<p>Most independent UK trading companies can, if they are under the size limits on the day of grant. HMRC checks five things.</p>',
        '<ul><li><strong>Independence:</strong> the company must not be a 51% subsidiary of, or controlled by, another company. A parent company can grant options over its own shares to staff across its qualifying subsidiaries.</li><li><strong>Size:</strong> gross assets of £120 million or less and fewer than 500 full-time equivalent employees, measured across the group.</li><li><strong>UK presence:</strong> the company, or a qualifying subsidiary, must have a permanent establishment in the UK.</li><li><strong>A qualifying trade:</strong> the company must trade, or be preparing to, and the trade must not consist substantially of excluded activities.</li><li><strong>The company limit:</strong> unexercised EMI options must not exceed £6 million in total. An option that takes the total over the limit does not qualify for the excess.</li></ul>',
        '<p>Excluded activities include banking, money-lending and other financial activities, legal or accountancy services, property development, farming and market gardening, forestry, running hotels or nursing homes, shipbuilding, and receiving royalties or licence fees (with some exceptions for your own intellectual property).</p>',
        '<h3>Who keeps the old limits?</h3>',
        '<p>A "Specified Company" stays on the pre-April 2026 limits of £3 million, £30 million and 250 employees, and the 10-year exercise period. This is a company with its registered office in Northern Ireland that trades in goods or in electricity. In a group, options for staff of a Specified Company are tested against the old limits for the whole group.</p>',
      ],
    },
    {
      id: 'eligible-employees', h2: 'Who can be given EMI options?', toc: 'Eligible employees',
      body: [
        '<p>Employees, including employed directors, who work for the company at least 25 hours a week or, if less, 75% of their total working time. Hours are averaged, and time off for illness, parental leave or holiday still counts.</p>',
        '<ul><li><strong>No material interest:</strong> the employee, with their associates, must not hold more than 30% of the ordinary share capital. This usually rules out founders with large stakes.</li><li><strong>£250,000 each:</strong> the shares under an employee\'s unexercised EMI options, plus any CSOP options, must be worth no more than £250,000 at grant. Once someone reaches the limit, they cannot get further EMI options for 3 years from the last grant, even if they exercise some.</li><li><strong>Employees only:</strong> non-executive directors, consultants and advisers do not usually qualify, because they are not employees or do not meet the working time test.</li></ul>',
        '<p>If you are recruiting the people you want to reward, our guide to <a href="/resources/hiring-your-first-employee/">hiring your first employee</a> covers contracts and payroll.</p>',
      ],
    },
    {
      id: 'valuation', h2: 'How do you agree the share value with HMRC?', toc: 'Agreeing the value',
      body: [
        '<p>You send form VAL231 to HMRC\'s Shares and Assets Valuation team, with a proposed value for the shares under option, once you are ready to grant. HMRC agreement is voluntary, but without it you cannot be sure the option price is not a discount.</p>',
        '<ul><li><strong>Two values:</strong> the actual market value (AMV) takes account of restrictions on the shares, such as limits on transfer. The unrestricted market value (UMV) ignores them. UMV is what counts towards the £250,000 and £6 million limits.</li><li><strong>One price is often enough:</strong> HMRC generally does not accept that restrictions reduce value much. If you grant at a price that is at least the UMV, HMRC does not need to agree a separate AMV.</li><li><strong>90 days:</strong> an agreed value lasts 90 days from the agreement, provided nothing happens in the meantime that would change it, such as a funding round or a sale offer. Grant after that and you need a new VAL231.</li></ul>',
        '<p>HMRC looks first at recent arm\'s length deals in the company\'s shares, such as an investment round, then adjusts for the different rights investors hold. A minority employee holding is usually valued at a discount to a pro rata share of the whole company. Our guide on <a href="/resources/how-to-value-a-business/">how to value a business</a> explains the methods.</p>',
      ],
    },
    {
      id: 'notifying-hmrc', h2: 'When do you have to tell HMRC about an EMI grant?', toc: 'Notifying HMRC',
      body: [
        '<p>For options granted on or after 6 April 2024, you notify HMRC online by 6 July after the end of the tax year of grant. A late notice can mean the options do not qualify for EMI at all, unless you had a reasonable excuse.</p>',
        { caption: 'EMI grant notification deadlines', head: ['Options granted', 'Notify HMRC by'], rows: [
          ['Before 6 April 2024', 'Within 92 days of the grant'],
          ['6 April 2024 to 5 April 2027', '6 July after the end of the tax year of grant (for 2026-27 grants, 6 July 2027)'],
          ['From 6 April 2027 (proposed)', 'No separate notice: grants reported on the EMI annual return, starting with the 2027-28 return'],
        ], after: 'Sources: HMRC manual ETASSUM56010, and GOV.UK, EMI: removal of the requirement to submit a notification of a grant of options (published 13 July 2026). The 2027 change is due in Finance Bill 2026-27 and is not yet law.' },
        '<p>You must also register the scheme on HMRC\'s employment related securities online service and file an EMI annual return by 6 July after each tax year, even if nothing happened. A delay by your agent is not, on its own, a reasonable excuse.</p>',
      ],
    },
    {
      id: 'tax', h2: 'How are EMI options taxed when they are exercised and sold?', toc: 'Tax on exercise and sale',
      body: [
        '<p>If the employee pays at least the market value at grant, there is usually no income tax or National Insurance on exercise. They pay capital gains tax when they sell the shares, on the sale price less what they paid.</p>',
        '<ul><li><strong>Discounted options:</strong> if the price was below market value at grant, income tax is charged on exercise on the smaller of the discount at grant and the actual gain at exercise.</li><li><strong>National Insurance:</strong> due on any taxable amount if the shares are readily convertible assets, for example because a sale is arranged. The employer can ask the employee to bear employer NICs by a joint election approved by HMRC.</li><li><strong>Disqualifying events:</strong> if the employee leaves, the company is taken over or the option terms change in a way that adds value, the option must be exercised within 90 days to keep the full relief.</li><li><strong>The company:</strong> it can usually claim a corporation tax deduction when the shares are acquired, broadly equal to the gain the employee would have been taxed on without EMI.</li></ul>',
        { caption: 'Illustrative example: 10,000 options at £1, exercised when shares are worth £5, sold at £8', head: ['Step', 'EMI option', 'Non tax-advantaged option'], rows: [
          ['Income tax on exercise (£40,000 growth, 40% taxpayer)', 'None', '£16,000, plus NICs if readily convertible'],
          ['Gain on sale', '£70,000 (£80,000 less £10,000 paid)', '£30,000 (£80,000 less £50,000 taxed value)'],
          ['Capital gains tax after the £3,000 annual exempt amount', '£67,000 at 18% = £12,060', '£27,000 at 24% = £6,480'],
          ['Total tax', '£12,060', '£22,480'],
        ], after: 'Illustrative figures only, for a 2026-27 sale by a higher rate taxpayer with no other gains. The EMI column assumes Business Asset Disposal Relief at 18%, available because the option was granted at least 2 years before the sale.' },
        '<p>EMI shares qualify for Business Asset Disposal Relief without the usual 5% shareholding test, if the option was granted at least 2 years before the sale and the employee still works for the company. Our guide to <a href="/resources/business-asset-disposal-relief/">Business Asset Disposal Relief</a> has the full conditions.</p>',
      ],
    },
    {
      id: 'setting-up', h2: 'How do you set up an EMI scheme?', toc: 'Setting it up',
      body: [
        '<p>There is no HMRC approval to wait for. Most companies follow the same steps:</p>',
        '<ol><li>Check the company and each employee qualify, and that your articles allow the share issue.</li><li>Decide the terms: how many shares, the exercise price, and when options vest (on a timetable, on a sale, or on performance targets).</li><li>Value the shares and send VAL231 to HMRC, then grant within the 90 days.</li><li>Sign a written option agreement with each employee, including the working time declaration.</li><li>Notify HMRC of the grant by the deadline above and file the annual return each year.</li><li>Record exercises through payroll where tax is due. Our <a href="/uk/accounting/payroll-services/">payroll services</a> team can handle this.</li></ol>',
        '<p>Exit-only options, which can be exercised only on a sale, are common because staff pay nothing until they can sell. If you are also raising outside investment, read our guide to <a href="/resources/eis-vs-seis/">EIS and SEIS</a>: investor share rights affect the EMI valuation.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I need HMRC approval to set up an EMI scheme?', a: 'No. There is no approval process. You must grant options in writing, notify HMRC of the grant by the deadline and file an annual return. Agreeing the share value with HMRC on form VAL231 is optional but gives certainty.' },
    { q: 'What happens to EMI options when an employee leaves?', a: 'Leaving is a disqualifying event. If the option can still be exercised under the scheme rules, the employee has 90 days to exercise it and keep the full tax relief. Many option agreements make options lapse on leaving, so check yours.' },
    { q: 'How long can EMI options last?', a: 'For most companies, options granted or amended from 6 April 2026 can qualify for up to 15 years from grant. Before that the limit was 10 years, and it stays at 10 years for a Specified Company in Northern Ireland trading in goods or electricity.' },
    { q: 'Can a founder with 40% of the shares get EMI options?', a: 'No. An employee who, with their associates, holds more than 30% of the ordinary share capital has a material interest and cannot be granted qualifying EMI options. Founders often receive shares directly instead.' },
    { q: 'Do I still have to notify HMRC of EMI grants in 2026-27?', a: 'Yes. Options granted between 6 April 2026 and 5 April 2027 must be notified by 6 July 2027. The government plans to remove the separate notice for grants from 6 April 2027, but that change is not yet law.' },
  ],

  sources: [
    ['https://www.gov.uk/tax-employee-share-schemes/enterprise-management-incentives-emis', 'GOV.UK: Enterprise Management Incentives'],
    ['https://www.gov.uk/hmrc-internal-manuals/employee-tax-advantaged-share-scheme-user-manual/etassum50500', 'HMRC manual ETASSUM50500: Finance Act 2026 EMI changes'],
    ['https://www.gov.uk/hmrc-internal-manuals/employee-tax-advantaged-share-scheme-user-manual/etassum56010', 'HMRC manual ETASSUM56010: notice of grant'],
    ['https://www.gov.uk/hmrc-internal-manuals/employee-tax-advantaged-share-scheme-user-manual/etassum53040', 'HMRC manual ETASSUM53040: material interest'],
    ['https://www.gov.uk/hmrc-internal-manuals/employee-tax-advantaged-share-scheme-user-manual/etassum57030', 'HMRC manual ETASSUM57030: discounted options'],
    ['https://www.gov.uk/hmrc-internal-manuals/shares-and-assets-valuation-manual/svm110050', 'HMRC manual SVM110050: EMI valuations'],
    ['https://www.gov.uk/government/publications/enterprise-management-incentives-emi-simplification-of-the-process-to-grant-options/enterprise-management-incentives-emi-removal-of-the-requirement-to-submit-a-notification-of-a-grant-of-options', 'GOV.UK: Removal of the EMI grant notification'],
  ],

  related: [
    '/resources/how-to-value-a-business/',
    '/resources/business-asset-disposal-relief/',
    '/resources/eis-vs-seis/',
    '/resources/employee-ownership-trusts/',
  ],
};
