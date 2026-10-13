// Guide: /resources/umbrella-vs-limited-company/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK and in HMRC's Employment Status Manual on 13 October 2026 (sources below).
// Umbrella PAYE liability (ITEPA 2003 Part 2 Chapter 11, s61Y) applies to payments from 6 April 2026. Re-check each April.
export default {
  url: '/resources/umbrella-vs-limited-company/',
  section: 'accounting',
  title: 'Umbrella vs Limited Company in 2026-27 | Severin Finance',
  description: 'Umbrella vs limited company for 2026-27: how each pays you, the April 2026 PAYE rules for umbrellas, running costs and when each fits. Free consultation.',
  h1: 'Umbrella vs limited company: which is right for you?',
  crumb: 'Umbrella vs limited company',
  summary: 'How umbrella and limited company pay compare in 2026-27, what each costs and when each fits.',
  topic: 'Contracting through an umbrella company or a limited company',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/accounting/contractor-accountant/', label: 'Our contractor accountant service',
    boxTitle: 'Umbrella or limited?', text: 'We compare your take-home pay both ways using your day rate, then set up and run your company if it makes sense.',
  },

  hero: {
    answer: 'Inside IR35, an umbrella company is usually simpler, because most of the tax advantage of your own company disappears. Outside IR35, a limited company usually leaves you more after tax, paying corporation tax at 19% to 25% and dividend tax from 10.75% in 2026-27, but with more admin. From 6 April 2026, agencies share liability for umbrella PAYE.',
  },

  tldr: [
    'An umbrella <strong>employs you</strong> and runs PAYE. Employer costs, including <strong>15% employer National Insurance</strong>, come out of the assignment rate first.',
    'A limited company pays <strong>corporation tax at 19% to 25%</strong>, and you usually take a small salary plus dividends.',
    '2026-27 dividend tax: <strong>10.75%</strong>, <strong>35.75%</strong> and <strong>39.35%</strong> after a <strong>£500</strong> allowance.',
    'From <strong>6 April 2026</strong>, the agency that contracts with the end client (or the client itself) can be made to pay PAYE an umbrella fails to pay.',
    'Inside IR35, an umbrella is usually the simpler choice. Outside IR35, a company usually leaves more after tax.',
  ],

  sections: [
    {
      id: 'quick-answer', h2: 'Umbrella or limited company: which is better?', toc: 'The short answer',
      body: [
        '<p>It mostly depends on your IR35 status. If your contract is inside IR35, an umbrella is usually simpler and costs little more in tax. If it is outside IR35 and likely to last, your own limited company usually leaves you more after tax. Our <a href="/uk/accounting/contractor-accountant/">contractor accountants</a> compare both using your actual day rate before you decide.</p>',
        { caption: 'Umbrella vs limited company at a glance (2026-27)', head: ['', 'Umbrella company', 'Your own limited company'], rows: [
          ['Who employs you', 'The umbrella', 'Your company (you are director and employee)'],
          ['How you are taxed', 'PAYE on all your pay', 'Corporation tax on profit, then tax on salary and dividends'],
          ['Employer National Insurance', 'Taken from the assignment rate', 'Only on salary above £5,000 a year'],
          ['Employment rights', 'Yes, as an employee of the umbrella', 'You are your own employer'],
          ['Admin for you', 'Timesheets and checking payslips', 'Accounts, returns, payroll and possibly VAT'],
          ['Suits', 'Inside IR35 work, short contracts, trying out contracting', 'Outside IR35 work, longer-term contracting'],
        ], after: 'Rates from GOV.UK, Rates and thresholds for employers 2026 to 2027. Checked 13 October 2026.' },
        '<p>Not sure where you stand? Read our guide to <a href="/resources/ir35-explained/">IR35 and the off-payroll working rules</a> first.</p>',
      ],
    },
    {
      id: 'umbrella-pay', h2: 'How does an umbrella company pay you?', toc: 'Umbrella pay',
      body: [
        '<p>The agency pays the umbrella an "assignment rate" for your hours, the umbrella takes its own employer costs out of that, and the rest is your gross pay, taxed through PAYE like any salary.</p>',
        { caption: 'From assignment rate to take-home pay through an umbrella (2026-27)', head: ['Stage', 'What comes off'], rows: [
          ['1. Assignment rate', 'The amount the agency pays the umbrella for your work'],
          ['2. Employer costs', 'The umbrella margin, employer National Insurance (15% above £5,000 a year), employer pension contributions, holiday pay set aside, and the Apprenticeship Levy (0.5%) if it applies'],
          ['3. Gross pay', 'What is left: your salary'],
          ['4. Your deductions', 'Income tax (20%, 40%, 45%), employee National Insurance (8%, then 2% above £50,270), your pension, student loan'],
          ['5. Net pay', 'What reaches your bank account'],
        ], after: 'Source: GOV.UK, Working through an umbrella company; GOV.UK rates and thresholds for employers 2026 to 2027. Tax bands shown are for England, Wales and Northern Ireland.' },
        '<p>Your umbrella should give you a statement showing each deduction. HMRC\'s free <a href="https://www.gov.uk/guidance/work-out-pay-from-an-umbrella-company">umbrella pay checker</a> estimates what you should receive for the current tax year. As an employee you get the National Minimum Wage, holiday pay, automatic enrolment into a pension and other employment rights.</p>',
        '<p>Be wary of any umbrella offering pay that looks too good to be true. HMRC warns about separate untaxed payments described as loans, pay higher than your payslip shows, money from someone other than the umbrella, and requests to sign extra agreements.</p>',
      ],
    },
    {
      id: 'limited-company-pay', h2: 'How does a limited company pay you?', toc: 'Limited company pay',
      body: [
        '<p>Your company invoices the client or agency in full, pays corporation tax on its profit, and you take money out as a mix of salary, dividends and pension contributions.</p>',
        { caption: 'Limited company contractor: key rates for 2026-27', head: ['Item', 'Rate or limit'], rows: [
          ['Corporation tax', '19% on profits up to £50,000, 25% over £250,000, marginal relief in between'],
          ['Dividend allowance', '£500'],
          ['Dividend tax', '10.75% basic rate, 35.75% higher rate, 39.35% additional rate'],
          ['Personal allowance', '£12,570'],
          ['Employer National Insurance', '15% on salary above £5,000 a year'],
          ['VAT registration', 'Required if taxable turnover goes over £90,000 in a rolling 12 months'],
        ], after: 'Sources: GOV.UK Corporation Tax rates, Tax on dividends, Rates and thresholds for employers 2026 to 2027, VAT registration. Checked 13 October 2026.' },
        '<p>Most contractor companies have one director and no other staff. In that case the company cannot claim the Employment Allowance, so employer National Insurance on any salary above £5,000 is a real cost. Our guide to <a href="/resources/salary-vs-dividends/">salary vs dividends</a> works through the best mix for 2026-27, and <a href="/resources/flat-rate-vat-scheme/">the Flat Rate VAT Scheme</a> guide explains why it rarely helps contractors with few costs.</p>',
        '<p>If a contract is inside IR35, the fee-payer deducts tax before paying your company, so this planning largely falls away.</p>',
      ],
    },
    {
      id: 'umbrella-rules-2026', h2: 'What changed for umbrella companies in April 2026?', toc: 'April 2026 rules',
      body: [
        '<p>From 6 April 2026, if an umbrella company does not pay the PAYE due on your pay, HMRC can collect it from the agency that contracts with the end client, or from the end client if there is no agency.</p>',
        '<p>The rules apply to new and existing supply chains, for payments made on or after 6 April 2026. The law (Chapter 11 of Part 2 of the Income Tax (Earnings and Pensions) Act 2003) makes the umbrella and the agency or client jointly and severally liable. That means HMRC can recover the full amount of income tax and National Insurance from either party. The umbrella is still your employer and must still run PAYE correctly and give the agency or client the information it needs to check.</p>',
        '<p>The rules do not cover you if you work through your own personal service company (IR35 applies instead), a managed service company, as a salaried member of an LLP, or as someone treated as employed by the agency.</p>',
        '<p>For you as a worker, the main effect is that agencies now check umbrellas much more closely, so non-compliant schemes are harder to find. Your pay through a compliant umbrella should not change because of these rules.</p>',
      ],
    },
    {
      id: 'costs', h2: 'What does each option cost to run?', toc: 'Running costs',
      body: [
        '<p>An umbrella charges a margin taken from the assignment rate, and that is usually your only cost. A limited company has fixed costs and more of your time.</p>',
        '<ul><li><strong>Umbrella:</strong> the margin, which varies between providers. Ask for it in writing and check it on your payslip statement.</li><li><strong>Limited company, setting up:</strong> £100 to incorporate online at Companies House, plus a business bank account.</li><li><strong>Limited company, every year:</strong> a £50 confirmation statement fee, an accountant\'s fee, business insurance, and the time spent on bookkeeping, payroll and VAT.</li></ul>',
        '<p>As a director you also take on legal duties: annual accounts to Companies House within 9 months of the year end, a Company Tax Return within 12 months, and corporation tax paid within 9 months and 1 day. Our guide to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> lists them all.</p>',
      ],
    },
    {
      id: 'when-each-fits', h2: 'When should a contractor choose each one?', toc: 'Which one fits',
      body: [
        '<p>Choose based on your IR35 status, how long you expect to contract and how much admin you want.</p>',
        '<h3>An umbrella usually fits if</h3>',
        '<ul><li>your contract is inside IR35</li><li>it is short, or you are trying contracting before committing</li><li>you want employment rights and minimal paperwork</li></ul>',
        '<h3>A limited company usually fits if</h3>',
        '<ul><li>your contracts are outside IR35 and you expect to keep contracting</li><li>you want to plan salary, dividends and pension contributions</li><li>you work for several clients, or plan to grow beyond one person</li></ul>',
        '<p>You do not have to pick one for good. Some contractors keep their company for outside IR35 work and use an umbrella for an inside IR35 role. If you would rather work as a sole trader, see our guide to <a href="/resources/sole-trader-vs-limited-company/">sole trader vs limited company</a>.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is an umbrella company worse for tax?', a: 'Often slightly, because employer National Insurance and the umbrella margin come out of the assignment rate before your pay is taxed. For inside IR35 work the difference from a limited company is small, as the fee-payer deducts similar taxes either way.' },
    { q: 'Can I use a limited company for an inside IR35 contract?', a: 'Yes. The fee-payer deducts income tax and National Insurance before paying your company, and the company can pass that money to you without further tax. You still pay the company\'s running costs, so many contractors use an umbrella instead.' },
    { q: 'Who is liable if my umbrella company does not pay HMRC?', a: 'From 6 April 2026, the agency that contracts with the end client is jointly and severally liable with the umbrella for unpaid PAYE. If there is no agency, the end client is. The umbrella remains your employer.' },
    { q: 'How can I check my umbrella payslip is right?', a: 'Use HMRC\'s free umbrella pay checker on GOV.UK, which estimates gross and net pay from your assignment rate for the current tax year. Also check deductions against your personal tax account, student loan account and pension.' },
    { q: 'How much does a limited company cost to set up?', a: 'Incorporating online at Companies House costs £100, and each year\'s confirmation statement costs £50. On top of that you pay for an accountant, business insurance and a business bank account, and you spend time on records.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/paye-rules-for-labour-supply-chains-that-include-umbrella-companies-from-6-april-2026', 'GOV.UK: PAYE rules for supply chains with umbrella companies from 6 April 2026'],
    ['https://www.gov.uk/hmrc-internal-manuals/employment-status-manual/esm2420', 'HMRC manual ESM2420: umbrella companies legislation'],
    ['https://www.gov.uk/guidance/working-through-an-umbrella-company', 'GOV.UK: Working through an umbrella company'],
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
    ['https://www.gov.uk/corporation-tax-rates', 'GOV.UK: Corporation Tax rates'],
    ['https://www.gov.uk/claim-employment-allowance/eligibility', 'GOV.UK: Employment Allowance eligibility'],
    ['https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees', 'GOV.UK: Companies House fees'],
  ],

  related: [
    '/resources/ir35-explained/',
    '/resources/salary-vs-dividends/',
    '/resources/sole-trader-vs-limited-company/',
    '/resources/limited-company-deadlines/',
  ],
};
