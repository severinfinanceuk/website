// Guide: /resources/salary-vs-dividends/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Scope: the 2026-27 numbers for the salary and
// dividend mix. Other ways of taking money out live in how-to-pay-yourself-from-a-limited-company.js.
// Illustrative figures: £50,000 profit before director pay, one director, no other income, England, Wales and
// Northern Ireland bands, all post-tax profit paid as dividends. Re-check each April and after each Budget.
export default {
  url: '/resources/salary-vs-dividends/',
  section: 'tax',
  title: 'Salary vs Dividends for Directors 2026-27 | Severin Finance',
  description: 'The best director salary for 2026-27 is usually £12,570. NIC thresholds, Employment Allowance, dividend rates and five worked mixes. Free consultation.',
  h1: 'Salary vs dividends: the best mix for directors in 2026-27',
  crumb: 'Salary vs dividends',
  summary: 'The 2026-27 thresholds and rates, and why a £12,570 salary plus dividends usually wins.',
  topic: 'Director salary and dividend planning for 2026-27',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/corporation-tax-accountant/', label: 'Our corporation tax service',
    boxTitle: 'Want your mix worked out?', text: 'We model your salary and dividends against your company\'s Corporation Tax each year and set up the payroll and paperwork.',
  },

  hero: {
    answer: 'For 2026-27, most directors are best off with a salary of £12,570, then dividends. That salary is free of Income Tax and employee National Insurance and saves Corporation Tax, even after 15% employer National Insurance on pay above £5,000. Dividends above the £500 allowance are taxed at 10.75%, 35.75% or 39.35%.',
  },

  tldr: [
    'A <strong>£12,570</strong> salary is usually the most efficient for 2026-27, with or without the Employment Allowance.',
    'Employer National Insurance is <strong>15%</strong> above <strong>£5,000</strong> a year. Employees pay 8% above £12,570.',
    'The Employment Allowance is <strong>£10,500</strong>, but not for a company whose sole director is its only employee paid above £5,000.',
    'Dividends: <strong>£500</strong> tax-free, then <strong>10.75%</strong> basic rate, <strong>35.75%</strong> higher rate and <strong>39.35%</strong> additional rate.',
    'In our £50,000 profit example, a £12,570 salary beat a £5,000 salary by about <strong>£460</strong> and all dividends by about <strong>£1,300</strong>.',
  ],

  sections: [
    {
      id: 'best-salary', h2: 'What is the best director salary for 2026-27?', toc: 'Best salary',
      body: [
        '<p>For most owner-directors, the best salary for 2026-27 is £12,570 a year (£1,047.50 a month), with the rest taken as dividends. It uses your personal allowance, pays no employee National Insurance, earns a qualifying year for your State Pension and cuts the company\'s Corporation Tax. Our <a href="/uk/tax/corporation-tax-accountant/">corporation tax accountants</a> check the figure against your company\'s profits each year.</p>',
        '<p>The answer changes if the company has little or no taxable profit, if you have other income that already uses your personal allowance, or if you live in Scotland, where salary is taxed under Scottish bands. This guide covers the numbers for the salary and dividend mix. For every other route, including pensions and loans, see our guide to <a href="/resources/how-to-pay-yourself-from-a-limited-company/">how to pay yourself from a limited company</a>.</p>',
      ],
    },
    {
      id: 'thresholds', h2: 'What are the National Insurance thresholds for 2026-27?', toc: 'NIC thresholds',
      body: [
        '<p>Employer National Insurance starts at £5,000 a year and employee National Insurance at £12,570. These are the figures that set the salary decision.</p>',
        { caption: 'Class 1 National Insurance thresholds and rates, 2026-27', head: ['Threshold', 'Year', 'Month', 'What it means'], rows: [
          ['Secondary threshold', '£5,000', '£417', 'Employer pays 15% above this'],
          ['Lower earnings limit', '£6,708', '£559', 'Pay at this level earns a State Pension qualifying year'],
          ['Primary threshold', '£12,570', '£1,048', 'Employee pays 8% above this'],
          ['Upper earnings limit', '£50,270', '£4,189', 'Employee rate falls to 2% above this'],
        ], after: 'Source: GOV.UK, Rates and thresholds for employers 2026 to 2027 (category A). The same thresholds apply to directors.' },
        '<p>The personal allowance for 2026-27 is also £12,570, so a salary at that level has no Income Tax either, provided you have no other income.</p>',
      ],
    },
    {
      id: 'employment-allowance', h2: 'Can your company claim the Employment Allowance?', toc: 'Employment Allowance',
      body: [
        '<p>Only if someone other than a sole director is on the payroll above £5,000. The Employment Allowance takes up to £10,500 off the employer National Insurance bill for 2026-27, but a company with one director cannot claim if that director is the only employee liable for employer National Insurance.</p>',
        '<ul><li>A company with two directors on the payroll above £5,000, or a director plus a paid employee, can usually claim.</li><li>Since April 2025 there is no longer a cap for employers with National Insurance bills over £100,000.</li><li>Only one company in a connected group can claim.</li><li>Pay for workers under the off-payroll (IR35) rules cannot be included.</li></ul>',
        '<p>With the allowance, the £1,135.50 of employer National Insurance on a £12,570 salary is covered, so the case for that salary is even stronger. Our <a href="/uk/accounting/payroll-services/">payroll services</a> claim it through your payroll.</p>',
      ],
    },
    {
      id: 'dividend-tax', h2: 'How are dividends taxed in 2026-27?', toc: 'Dividend tax',
      body: [
        '<p>The first £500 of dividends is tax-free, then the rate depends on which Income Tax band the dividends fall into once they are added to your salary and other income.</p>',
        { caption: 'Dividend allowance and rates, 2026-27', head: ['Band', 'Total taxable income', 'Rate on dividends'], rows: [
          ['Dividend allowance', 'First £500 of dividends', '0%'],
          ['Basic rate', 'Up to £50,270', '10.75%'],
          ['Higher rate', '£50,271 to £125,140', '35.75%'],
          ['Additional rate', 'Over £125,140', '39.35%'],
        ], after: 'Source: GOV.UK, Tax on dividends. The basic and higher rates rose by 2 percentage points from 6 April 2026. Dividend rates are the same across the UK, including Scotland.' },
        '<p>With a £12,570 salary, you can take up to £37,700 of dividends before reaching the higher rate. Your personal allowance falls by £1 for every £2 of income above £100,000. Our guide to <a href="/resources/dividend-tax-rates/">dividend tax rates</a> explains how to report and pay the tax, and the <a href="/resources/dividend-tax-calculator/">dividend tax calculator</a> works out your bill.</p>',
      ],
    },
    {
      id: 'mixes', h2: 'How do different salary and dividend mixes compare?', toc: 'Mixes compared',
      body: [
        '<p>On £50,000 of profit, a £12,570 salary with the rest as dividends gave the highest take-home pay of the five mixes we tested for 2026-27.</p>',
        { caption: 'Illustrative: £50,000 profit before director pay, 2026-27, no Employment Allowance', head: ['Mix', 'Employer NIC', 'Corporation Tax', 'Your tax and NIC', 'Take-home'], rows: [
          ['All dividends, no salary', '£0', '£9,500', '£2,949', '£37,551'],
          ['£5,000 salary plus dividends', '£0', '£8,550', '£3,051', '£38,399'],
          ['£6,708 salary plus dividends', '£256', '£8,177', '£3,063', '£38,504'],
          ['£12,570 salary plus dividends', '£1,136', '£6,896', '£3,107', '£38,862'],
          ['All salary (£44,130), no dividends', '£5,870', '£0', '£8,837', '£35,294'],
        ], after: 'Illustrative only. One director, no other income, all profit after tax paid out as dividends, Corporation Tax at the 19% small profits rate. Figures rounded to the nearest pound. Excludes pension contributions and student loan repayments.' },
        '<p>The all-dividends and £5,000 mixes also leave you without a State Pension qualifying year from this job, because the salary is below £6,708.</p>',
      ],
    },
    {
      id: 'why-12570', h2: 'Why does £12,570 beat a lower salary?', toc: 'Why £12,570',
      body: [
        '<p>Because the Corporation Tax saved is larger than the employer National Insurance paid. Taking the salary from £5,000 to £12,570 adds £7,570 of pay and £1,135.50 of employer National Insurance. Both are business costs, so at 19% they save £1,654 of Corporation Tax. The net cost to the company is £7,051, but you receive £7,570 with no Income Tax or employee National Insurance. After a small change in your dividend tax, you are about £460 better off.</p>',
        '<p>At the 25% main rate, or in the Marginal Relief band where the effective rate is 26.5%, the saving is bigger. A lower salary can make more sense when:</p>',
        '<ul><li>the company has losses or no taxable profit, so there is no Corporation Tax to save</li><li>you have a job or pension that already uses your personal allowance</li><li>your salary would push you over a student loan repayment threshold</li></ul>',
        '<p>If your company\'s profits are near £50,000 or £250,000, the <a href="/resources/marginal-relief-calculator/">Marginal Relief calculator</a> shows what rate the salary saves.</p>',
      ],
    },
    {
      id: 'higher-salary', h2: 'Is it worth taking a salary above £12,570?', toc: 'Above £12,570',
      body: [
        '<p>Usually not. Above £12,570 you pay 20% Income Tax and 8% employee National Insurance on the salary, and the company pays 15% on top. Without the Employment Allowance, dividends cost less tax from that point.</p>',
        '<p>With the Employment Allowance covering the employer National Insurance, it is close to break-even. In our illustration at £100,000 of profit, a £12,570 salary and a £50,270 salary (both with dividends for the rest) gave take-home pay within £30 of each other for 2026-27. Directors sometimes take more salary for other reasons, such as steady payslips for a mortgage application or higher pension contributions linked to pay.</p>',
        '<p>Once your total income passes £50,270, dividends are taxed at 35.75%. Leaving profit in the company, or paying it into a pension as an employer contribution, often costs less than taking it out in that year.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What salary should a sole director take in 2026-27?', a: 'Usually £12,570 a year. The company pays £1,135.50 of employer National Insurance on it, as a sole director company cannot claim the Employment Allowance, but the Corporation Tax saved is larger, and you pay no Income Tax or employee National Insurance on it.' },
    { q: 'Is £5,000 or £12,570 the better director salary?', a: 'For most companies paying Corporation Tax, £12,570. In our £50,000 profit illustration it left the director about £460 better off than a £5,000 salary in 2026-27. A £5,000 salary also falls below the £6,708 lower earnings limit, so it does not count towards your State Pension.' },
    { q: 'How much can I take in dividends before paying higher rate tax?', a: 'With a £12,570 salary and no other income, about £37,700 in 2026-27. Your total income then reaches £50,270, the top of the basic rate band. Dividends above that are taxed at 35.75%, after the £500 allowance.' },
    { q: 'Are dividends still more tax-efficient than salary?', a: 'For pay above £12,570, generally yes, but the gap is smaller since the dividend rates rose to 10.75% and 35.75% on 6 April 2026. If your company can claim the Employment Allowance, salary and dividends come out close, so it is worth modelling both.' },
    { q: 'Do I pay National Insurance on dividends?', a: 'No. Dividends are not earnings for National Insurance, for you or the company. They are paid out of profit that has already borne Corporation Tax, and you pay dividend tax above the £500 allowance.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027', 'GOV.UK: Rates and thresholds for employers 2026 to 2027'],
    ['https://www.gov.uk/claim-employment-allowance/eligibility', 'GOV.UK: Employment Allowance eligibility'],
    ['https://www.gov.uk/tax-on-dividends', 'GOV.UK: Tax on dividends'],
    ['https://www.gov.uk/income-tax-rates', 'GOV.UK: Income Tax rates and allowances'],
    ['https://www.gov.uk/government/publications/rates-and-allowances-corporation-tax/rates-and-allowances-corporation-tax', 'GOV.UK: Rates and allowances for Corporation Tax'],
    ['https://www.gov.uk/government/publications/income-tax-changes-to-tax-rates-for-property-savings-and-dividend-income/income-tax-changes-to-tax-rates-for-property-savings-and-dividend-income', 'GOV.UK: Changes to tax rates for dividend income'],
  ],

  related: [
    '/resources/how-to-pay-yourself-from-a-limited-company/',
    '/resources/dividend-tax-rates/',
    '/resources/corporation-tax-rates/',
    '/resources/sole-trader-vs-limited-company/',
  ],
};
