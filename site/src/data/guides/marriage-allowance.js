// Guide: /resources/marriage-allowance/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April: the transfer is 10% of the Personal Allowance.
export default {
  url: '/resources/marriage-allowance/',
  section: 'tax',
  title: 'Marriage Allowance 2026-27: Who Can Claim | Severin Finance',
  description: 'Marriage Allowance for 2026-27: transfer £1,260 and save up to £252 a year, backdate to 6 April 2022, and how to apply. Free consultation.',
  h1: 'Marriage Allowance: who can claim and how to backdate it',
  crumb: 'Marriage Allowance',
  summary: 'Transfer £1,260 of allowance to your spouse, save up to £252 a year and backdate to April 2022.',
  topic: 'Marriage Allowance',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/tax-refunds/', label: 'Our tax refund service',
    boxTitle: 'Missed out in earlier years?', text: 'We check whether you qualified in each open tax year and make the backdated claim for you.',
  },

  hero: {
    answer: 'For 2026-27, Marriage Allowance lets a husband, wife or civil partner with income under £12,570 transfer £1,260 of their Personal Allowance to a partner who pays basic rate tax. That cuts the partner\'s tax by up to £252 a year. You can also backdate a claim to 6 April 2022.',
  },

  tldr: [
    'Transfer <strong>£1,260</strong> of Personal Allowance in 2026-27, cutting your partner\'s tax by up to <strong>£252</strong>.',
    'You must be <strong>married or in a civil partnership</strong>, with income usually under <strong>£12,570</strong>.',
    'Your partner must pay basic rate tax: usually income of <strong>£12,571 to £50,270</strong> (in Scotland, up to <strong>£43,662</strong>).',
    'Backdate to <strong>6 April 2022</strong>. Claims for 2022-23 close on <strong>5 April 2027</strong>.',
    'Once set up, it renews <strong>automatically</strong> each year until you cancel.',
  ],

  sections: [
    {
      id: 'how-much', h2: 'How much is Marriage Allowance worth in 2026-27?', toc: 'How much it is worth',
      body: [
        '<p>Up to £252 a year. The lower earner transfers £1,260 of their £12,570 Personal Allowance to their husband, wife or civil partner, and the partner\'s tax falls by 20% of that amount. If you think you missed it in earlier years, our <a href="/uk/tax/tax-refunds/">tax refund team</a> can check each year you qualified and make the backdated claim for you.</p>',
        { caption: 'Marriage Allowance figures for 2026-27', head: ['Item', 'Amount'], rows: [
          ['Standard Personal Allowance', '£12,570'],
          ['Amount transferred (10% of the allowance)', '£1,260'],
          ['Transferring partner\'s allowance after the transfer', '£11,310'],
          ['Maximum tax saving for the couple', '£252 a year'],
        ], after: 'Source: GOV.UK, Marriage Allowance and Income Tax rates and Personal Allowances. Checked 13 October 2026.' },
        '<p>The saving is the full £252 only if the lower earner\'s income stays at or below £11,310, so the transfer costs them nothing. Between £11,310 and £12,570, they pay a little tax on the slice above their reduced allowance, and the couple gains less, though usually still something.</p>',
      ],
    },
    {
      id: 'who-can-claim', h2: 'Who can claim Marriage Allowance?', toc: 'Who can claim',
      body: [
        '<p>You can claim if you are married or in a civil partnership, your income is usually below £12,570 (or you pay no Income Tax at all), and your partner pays tax at the basic rate. Unmarried couples who live together cannot claim, however long they have been together.</p>',
        { caption: 'Marriage Allowance income tests for 2026-27', head: ['Test', 'England, Wales and Northern Ireland', 'Scotland'], rows: [
          ['The partner transferring the allowance', 'Income usually below £12,570', 'Income usually below £12,570'],
          ['The partner receiving it', 'Pays basic rate: income usually £12,571 to £50,270', 'Pays starter, basic or intermediate rate: income usually £12,571 to £43,662'],
        ], after: 'Source: GOV.UK, Marriage Allowance: eligibility, and Scottish Income Tax rates for 2026-27.' },
        '<p>A few other points decide borderline cases:</p>',
        '<ul><li>If either of you was born before 6 April 1935, Married Couple\'s Allowance may be worth more. You cannot have both.</li><li>Receiving a pension does not stop you claiming.</li><li>Living outside the UK does not stop you either, as long as you get a Personal Allowance.</li><li>If your partner is a higher rate taxpayer, you cannot claim, even if your own income is low.</li></ul>',
      ],
    },
    {
      id: 'backdating', h2: 'Can you backdate Marriage Allowance?', toc: 'Backdating',
      body: [
        '<p>Yes, to 6 April 2022, for every tax year you both met the conditions. Each year is worth up to £252, so a couple who qualified throughout could recover up to £1,008 for the four earlier years, on top of £252 for 2026-27.</p>',
        { caption: 'Marriage Allowance tax years you can claim (illustrative maximums)', head: ['Tax year', 'Amount transferred', 'Maximum saving'], rows: [
          ['2022-23', '£1,260', '£252'],
          ['2023-24', '£1,260', '£252'],
          ['2024-25', '£1,260', '£252'],
          ['2025-26', '£1,260', '£252'],
          ['2026-27 (current year)', '£1,260', '£252'],
        ], after: 'The standard Personal Allowance was £12,570 in each of these years, so the transfer was £1,260 each year. Claims for 2022-23 must be made by 5 April 2027, after which that year can no longer be claimed.' },
        '<p>To backdate by post, use form MATCF; HMRC does not accept other postal claims. If your partner has died since 5 April 2022, you can still claim by phoning the Income Tax helpline.</p>',
      ],
    },
    {
      id: 'how-to-apply', h2: 'How do you apply for Marriage Allowance?', toc: 'How to apply',
      body: [
        '<p>Apply online on GOV.UK. The partner with the lower income usually makes the claim, because they are the one giving up part of their allowance.</p>',
        '<ol><li><strong>Online:</strong> use the <a href="https://www.gov.uk/marriage-allowance/how-to-apply">Marriage Allowance application</a> on GOV.UK. This is the quickest route.</li><li><strong>Through Self Assessment:</strong> if you file a tax return, the transferring partner fills in the Marriage Allowance section and the receiving partner leaves it blank. If you both file, the transferring partner should file at least 3 days first.</li><li><strong>By post:</strong> form MATCF, mainly for backdated claims.</li></ol>',
        '<p>If either of you has other income, such as savings interest or dividends, it is less obvious who should claim. HMRC suggests calling the Income Tax helpline in that case.</p>',
        '<h3>How the saving reaches your partner</h3>',
        '<p>HMRC usually changes your partner\'s tax code, which can take up to 2 months, or gives the relief when they file their Self Assessment return. A tax code ending in M means your partner is receiving the allowance; one ending in N means you are giving it. Our guide to <a href="/resources/emergency-tax-code/">emergency tax codes</a> explains the other letters you may see. Any change is backdated to 6 April of the year you claim for.</p>',
      ],
    },
    {
      id: 'worked-example', h2: 'Is Marriage Allowance worth claiming if you earn close to £12,570?', toc: 'Worked example',
      body: [
        '<p>Usually yes, but the gain shrinks the closer you are to £12,570. The figures below are illustrative, for 2026-27, using the rest of the UK rates rather than Scottish ones.</p>',
        { caption: 'Illustrative couple savings in 2026-27', head: ['Lower earner\'s income', 'Extra tax for the lower earner', 'Saving for the partner', 'Net gain for the couple'], rows: [
          ['£9,000', '£0', '£252', '£252'],
          ['£11,310', '£0', '£252', '£252'],
          ['£12,000', '£138 (20% of £690)', '£252', '£114'],
          ['£12,500', '£238 (20% of £1,190)', '£252', '£14'],
        ], after: 'Illustrative only. Assumes the partner pays basic rate tax and the lower earner has no other allowances or reliefs that change the result.' },
        '<p>If your income is likely to rise above £12,570 during the year, a claim may not pay. To check your own figures, try our <a href="/resources/take-home-pay-calculator/">take-home pay calculator</a>.</p>',
      ],
    },
    {
      id: 'changes', h2: 'What happens if your circumstances change?', toc: 'Changes and cancelling',
      body: [
        '<p>Marriage Allowance carries on automatically every year until you cancel it, so you must act if you stop qualifying. Leaving the Marriage Allowance section blank on a tax return does not cancel it.</p>',
        '<ul><li><strong>Your income rises</strong> and you no longer qualify: the person who made the claim cancels it online or by phone. It continues until the end of the tax year, 5 April.</li><li><strong>Divorce, dissolution or legal separation:</strong> either of you can cancel, and the change may be backdated to 6 April of that tax year.</li><li><strong>Your partner dies:</strong> the rules depend on who transferred the allowance; HMRC explains both cases on GOV.UK.</li></ul>',
        '<p>Either kind of change can leave one of you underpaying tax for that year, so tell HMRC promptly. Be wary of texts or calls offering to claim Marriage Allowance for you: our guide to <a href="/resources/hmrc-refund-scams/">HMRC refund scams</a> shows how HMRC really gets in touch.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'How much is Marriage Allowance for 2026-27?', a: 'You can transfer £1,260 of your Personal Allowance to your husband, wife or civil partner. That reduces their tax by up to £252 for the 2026-27 tax year, which runs from 6 April 2026 to 5 April 2027.' },
    { q: 'How many years can you backdate Marriage Allowance?', a: 'You can backdate to 6 April 2022, which covers the 2022-23, 2023-24, 2024-25 and 2025-26 tax years, plus the current year. Each year is worth up to £252 if you both qualified. Claims for 2022-23 close on 5 April 2027.' },
    { q: 'Can I get Marriage Allowance if my partner is a higher rate taxpayer?', a: 'No. The partner receiving the allowance must pay tax at the basic rate, which usually means income between £12,571 and £50,270. In Scotland they must pay the starter, basic or intermediate rate, usually up to £43,662.' },
    { q: 'Who should apply for Marriage Allowance, me or my partner?', a: 'The partner with the lower income usually applies, because they transfer part of their own Personal Allowance. If either of you has savings, dividends or other income besides wages, HMRC suggests calling the Income Tax helpline to work out who should claim.' },
    { q: 'Do I need to reapply for Marriage Allowance every year?', a: 'No. Once it is set up, the allowance transfers automatically every year until one of you cancels it. You must cancel if your income rises so you no longer qualify, or if you divorce or legally separate.' },
  ],

  sources: [
    ['https://www.gov.uk/marriage-allowance', 'GOV.UK: Marriage Allowance'],
    ['https://www.gov.uk/marriage-allowance/how-to-apply', 'GOV.UK: Marriage Allowance, how to apply'],
    ['https://www.gov.uk/marriage-allowance/if-your-circumstances-change', 'GOV.UK: Marriage Allowance, if your circumstances change'],
    ['https://www.gov.uk/guidance/apply-for-marriage-allowance-by-post', 'GOV.UK: Apply for Marriage Allowance by post (MATCF)'],
    ['https://www.gov.uk/income-tax-rates', 'GOV.UK: Income Tax rates and Personal Allowances'],
    ['https://www.gov.uk/scottish-income-tax', 'GOV.UK: Scottish Income Tax rates'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-income-tax/income-tax-rates-and-allowances-current-and-past', 'GOV.UK: Income Tax rates and allowances, current and past years'],
  ],

  related: [
    '/resources/emergency-tax-code/',
    '/resources/hmrc-refund-scams/',
    '/resources/self-assessment-deadlines/',
  ],
};
