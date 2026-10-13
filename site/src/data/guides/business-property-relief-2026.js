// Guide: /resources/business-property-relief-2026/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and legislation.gov.uk on 13 October 2026 (sources below). Also checked:
// Finance Act 2026 (c. 11) section 65 and Schedule 12 (new IHTA 1984 ss124D to 124L: £2.5m allowance,
// transfer to a spouse or civil partner, CPI indexation from 6 April 2031, trusts, 30 October 2024 gifts rule).
// Scope: the April 2026 reform. The 7-year rule is covered by /resources/inheritance-tax-7-year-rule/.
// Re-check each April and after each Budget.
export default {
  url: '/resources/business-property-relief-2026/',
  section: 'tax',
  title: 'Business Property Relief from April 2026 | Severin Finance',
  description: 'From 6 April 2026, 100% business and farm relief covers the first £2.5 million, then 50%. AIM shares, spouses and instalments explained. Free consultation.',
  h1: 'Business property relief from April 2026: the £2.5 million allowance',
  crumb: 'Business property relief 2026',
  summary: '100% relief on the first £2.5 million of business and farm property, 50% above it, from April 2026.',
  topic: 'Business property relief and agricultural property relief for inheritance tax from 6 April 2026',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/inheritance-tax-planning/', label: 'Our inheritance tax service',
    boxTitle: 'Own a business or farm?', text: 'We value what you own, check what qualifies for relief and show how much inheritance tax your family could face.',
  },

  hero: {
    answer: 'From 6 April 2026, business property relief and agricultural property relief give 100% relief on the first £2.5 million of qualifying property, and 50% on the rest. Any unused allowance can pass to a spouse or civil partner. AIM shares now get 50% relief, and tax on qualifying property can be paid over 10 years interest-free.',
  },

  tldr: [
    'Deaths and gifts from <strong>6 April 2026</strong>: 100% relief on the first <strong>£2.5 million</strong> of business and agricultural property combined, 50% above it.',
    'Value above the allowance pays an effective inheritance tax rate of <strong>20%</strong> (40% on half the value).',
    'Unused allowance passes to a surviving <strong>spouse or civil partner</strong>, so a couple can have up to <strong>£5 million</strong> at 100%.',
    'Shares on markets that are not "listed", such as <strong>AIM</strong>, get <strong>50%</strong> relief only.',
    'Tax on qualifying property can be paid in <strong>10 equal yearly instalments</strong>, interest-free, for assets inherited from 6 April 2026.',
  ],

  sections: [
    {
      id: 'what-changed', h2: 'What changed for business property relief in April 2026?', toc: 'What changed',
      body: [
        '<p>Business property relief (HMRC calls it Business Relief) and agricultural property relief used to give unlimited 100% relief on qualifying property. From 6 April 2026, the 100% rate is capped at £2.5 million per person, shared between both reliefs, and 50% relief applies above that. Our <a href="/uk/tax/inheritance-tax-planning/">inheritance tax planning</a> team values your business or farm and works out what the cap means for your family.</p>',
        { caption: 'Business and agricultural property relief: before and after 6 April 2026', head: ['Rule', 'Before 6 April 2026', 'From 6 April 2026'], rows: [
          ['100% relief', 'No limit on qualifying property', 'First £2.5 million of combined business and agricultural property'],
          ['Above the allowance', 'Not applicable', '50% relief (effective tax rate of 20%)'],
          ['Unused allowance on first death', 'Not applicable', 'Can pass to a spouse or civil partner'],
          ['Shares on AIM and other markets that are not "listed"', 'Usually 100%', '50% in all cases'],
          ['Instalments on qualifying property', 'Interest charged on later instalments', '10 yearly instalments, interest-free'],
        ], after: 'Source: GOV.UK, Agricultural property relief and business property relief changes, and Finance Act 2026, Schedule 12. Checked 13 October 2026.' },
        '<p>The reform was announced in October 2024 with a £1 million cap. On 23 December 2025 the government raised it to £2.5 million, and that is the figure now in Finance Act 2026.</p>',
      ],
    },
    {
      id: 'allowance', h2: 'How does the £2.5 million allowance work?', toc: 'The allowance',
      body: [
        '<p>Each person has one £2.5 million allowance covering business and agricultural property together. It is not a separate allowance per business or per relief.</p>',
        '<ul><li><strong>It covers lifetime gifts too.</strong> Qualifying gifts made in the 7 years before death use the allowance first, in date order. Whatever is left is shared across the qualifying property in the estate.</li><li><strong>It is only for 100% property.</strong> Assets that only ever get 50% relief, such as AIM shares, do not use it up.</li><li><strong>It is fixed for now.</strong> Finance Act 2026 links it to the Consumer Prices Index, but no increase can apply before 6 April 2031.</li><li><strong>The nil-rate band still applies.</strong> The £325,000 nil-rate band and up to £175,000 residence nil-rate band sit on top, and are fixed until 5 April 2031.</li></ul>',
        { caption: 'Illustrative example: a family company worth £4 million, death in 2026-27', head: ['Step', 'Amount'], rows: [
          ['Value of qualifying shares', '£4,000,000'],
          ['100% relief on the first £2.5 million', '£2,500,000'],
          ['50% relief on the remaining £1.5 million', '£750,000'],
          ['Value left to tax', '£750,000'],
          ['Inheritance tax at 40% (nil-rate band used by other assets)', '£300,000'],
          ['If paid in 10 yearly instalments', '£30,000 a year, interest-free'],
        ], after: 'Illustrative figures only. Assumes the shares qualify in full, no gifts in the previous 7 years and no transferred allowance from a late spouse.' },
        '<p>If your estate includes gifts made in the last 7 years, our guide to the <a href="/resources/inheritance-tax-7-year-rule/">inheritance tax 7-year rule</a> explains how they are counted.</p>',
      ],
    },
    {
      id: 'spouses', h2: 'Can the allowance pass to a spouse or civil partner?', toc: 'Spouses and partners',
      body: [
        '<p>Yes. Any part of the £2.5 million allowance unused on the first death can be transferred to the surviving spouse or civil partner, so a couple can have up to £5 million of qualifying property at 100%. GOV.UK says that, with their nil-rate bands, a couple could pass on up to £5.65 million free of inheritance tax, before any residence nil-rate band.</p>',
        '<p>If the first spouse died before 6 April 2026, the full £2.5 million is treated as unused, even if their estate claimed relief. The survivor\'s executors claim the transfer on the survivor\'s death, within 4 years of the end of the month of death, or 6 months after they start acting if that is later.</p>',
        '<p>Who owns what still matters. Leaving everything to a spouse is exempt, and the unused allowance then passes across. Leaving business shares to children on the first death uses that allowance straight away, and any later growth in value happens outside the survivor\'s estate. We model both routes before you change your will.</p>',
      ],
    },
    {
      id: 'aim', h2: 'What relief do AIM shares get now?', toc: 'AIM shares',
      body: [
        '<p>AIM shares now get 50% relief, not 100%. GOV.UK says shares traded on markets that do not meet HMRC\'s definition of "listed", naming the Alternative Investment Market, get 50% relief, and the same applies to qualifying shares on overseas exchanges that are not recognised stock exchanges.</p>',
        '<p>Because 50% relief does not use the £2.5 million allowance, an AIM portfolio pays an effective 20% inheritance tax rate however large or small it is. The 2-year ownership rule still applies, and the company must still be a qualifying trading company.</p>',
        '<p>Other assets that only ever got 50% relief keep it: shares giving control of more than 50% of the votes in a listed company, and land, buildings or machinery you own personally that are used by your partnership or a company you control.</p>',
      ],
    },
    {
      id: 'what-qualifies', h2: 'What qualifies for business property relief?', toc: 'What qualifies',
      body: [
        '<p>The tests for what qualifies have not changed. The person must have owned the business or asset for at least 2 years before death or the gift, and the business must be trading, not mainly holding investments.</p>',
        '<ul><li><strong>Can qualify:</strong> a sole trader business, a partnership share, and shares in an unlisted trading company.</li><li><strong>Does not qualify:</strong> businesses that mainly deal in shares, land or buildings, or make or hold investments (most property letting businesses), not-for-profit bodies, and businesses being wound up or under a binding contract for sale.</li><li><strong>Excepted assets:</strong> cash or property not needed for the future of the business, such as surplus cash in a company, does not get relief.</li></ul>',
        '<h3>Agricultural property relief</h3>',
        '<p>Agricultural property relief covers UK farmland, farm buildings and farmhouses or cottages of a character appropriate to the farm, at their agricultural value. The land must have been occupied for farming for 2 years if you farm it yourself, or owned for 7 years if someone else farms it. Business property relief cannot be claimed on value already covered by agricultural relief, and both reliefs share the one £2.5 million allowance.</p>',
      ],
    },
    {
      id: 'instalments', h2: 'How is inheritance tax on business property paid?', toc: 'Paying by instalments',
      body: [
        '<p>Inheritance tax is normally due by the end of the sixth month after death, but tax on business or agricultural property can be paid in 10 equal yearly instalments. For assets inherited from 6 April 2026, those instalments are interest-free as long as each one is paid on time.</p>',
        { caption: 'Paying inheritance tax on qualifying business and farm property', head: ['Point', 'Rule'], rows: [
          ['First instalment', 'End of the sixth month after the death'],
          ['Later instalments', 'Same date each year, for 9 more years'],
          ['Interest', 'None on the balance for qualifying property inherited from 6 April 2026; interest on any late instalment'],
          ['If the asset is sold', 'The tax still owed on it becomes payable in full'],
          ['Instalments started before 6 April 2026', 'The old interest rules still apply'],
        ], after: 'Source: GOV.UK, Pay your Inheritance Tax in yearly instalments. Checked 13 October 2026.' },
        '<p>Instalments help, but the family still needs the cash each year. Profits, dividends or a share buy-back may fund them, and that needs planning while the owner is alive.</p>',
      ],
    },
    {
      id: 'planning', h2: 'What can business owners do now?', toc: 'Planning now',
      body: [
        '<p>Start with a value. You cannot tell whether the £2.5 million cap affects you without a realistic figure for the business, and our <a href="/uk/company-services/business-valuation/">business valuation</a> service provides one. Then look at:</p>',
        '<ul><li><strong>Lifetime gifts:</strong> gifts of qualifying shares made on or after 30 October 2024 fall under the new rules if you die on or after 6 April 2026 within 7 years.</li><li><strong>Wills:</strong> make sure both spouses\' allowances can be used.</li><li><strong>Trusts:</strong> trusts have their own £2.5 million allowance rules. Trusts set up before 30 October 2024 are affected from their first 10-year anniversary on or after 6 April 2026.</li><li><strong>Succession:</strong> passing the business on, or selling it, during your lifetime. A sale moves the question to capital gains tax, covered in our guide to <a href="/resources/business-asset-disposal-relief/">Business Asset Disposal Relief</a>, and our <a href="/uk/company-services/succession-planning/">succession planning</a> team compares the routes.</li><li><strong>Pensions:</strong> from 6 April 2027 most unused pensions also count in the estate. See <a href="/resources/pensions-inheritance-tax-2027/">pensions and inheritance tax from 2027</a>.</li></ul>',
        '<p>We plan the tax and work with your solicitor, who drafts any will or trust changes.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is business property relief still 100%?', a: 'Yes, on the first £2.5 million of qualifying business and agricultural property for deaths and gifts from 6 April 2026. Qualifying value above that gets 50% relief, which means an effective inheritance tax rate of 20% on the excess.' },
    { q: 'Is the £2.5 million allowance transferable between spouses?', a: 'Yes. Any allowance unused on the first death can be transferred to a surviving spouse or civil partner, giving up to £5 million at 100%. If the first death was before 6 April 2026, the full £2.5 million is treated as available.' },
    { q: 'Do AIM shares still qualify for inheritance tax relief?', a: 'Yes, but at 50%, not 100%. Qualifying AIM shares held for 2 years get 50% business relief from 6 April 2026, whatever their value, so the effective inheritance tax rate on them is 20%. They do not use the £2.5 million allowance.' },
    { q: 'Does the £2.5 million allowance go up with inflation?', a: 'Not yet. Finance Act 2026 links the allowance to the Consumer Prices Index, but the first possible increase is from 6 April 2031. Until then it stays at £2.5 million.' },
    { q: 'Do gifts made before April 2026 count?', a: 'Gifts of business or farm property made on or after 30 October 2024 are taxed under the new rules if the giver dies on or after 6 April 2026 and within 7 years of the gift. They use the allowance first, in date order.' },
  ],

  sources: [
    ['https://www.gov.uk/government/publications/changes-to-agricultural-property-relief-and-business-property-relief/agricultural-property-relief-and-business-property-relief-changes', 'GOV.UK: Agricultural and business property relief changes'],
    ['https://www.gov.uk/business-relief-inheritance-tax/what-qualifies-for-business-relief', 'GOV.UK: What qualifies for Business Relief'],
    ['https://www.gov.uk/guidance/agricultural-relief-on-inheritance-tax', 'GOV.UK: Agricultural Relief on Inheritance Tax'],
    ['https://www.gov.uk/paying-inheritance-tax/yearly-instalments', 'GOV.UK: Pay Inheritance Tax in yearly instalments'],
    ['https://www.legislation.gov.uk/ukpga/2026/11/schedule/12', 'legislation.gov.uk: Finance Act 2026, Schedule 12'],
    ['https://www.gov.uk/inheritance-tax', 'GOV.UK: Inheritance Tax'],
  ],

  related: [
    '/resources/inheritance-tax-7-year-rule/',
    '/resources/pensions-inheritance-tax-2027/',
    '/resources/business-asset-disposal-relief/',
    '/resources/how-to-value-a-business/',
  ],
};
