// Guide: /resources/vat-registration/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April and after each Budget.
export default {
  url: '/resources/vat-registration/',
  section: 'tax',
  title: 'VAT Registration: £90,000 Threshold Guide | Severin Finance',
  description: 'When to register for VAT: the £90,000 rolling 12-month and 30-day tests, the deadline, your effective date and voluntary registration. Free consultation.',
  h1: 'VAT registration: when and how to register',
  crumb: 'VAT registration',
  summary: 'Register once taxable turnover passes £90,000 in any rolling 12 months, or will in the next 30 days.',
  topic: 'UK VAT registration',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/vat-accountant/', label: 'Our VAT service',
    boxTitle: 'Close to the threshold?', text: 'We track your rolling turnover, tell you when to register, pick the right VAT scheme and handle the registration with HMRC.',
  },

  hero: {
    answer: 'You must register for VAT if your taxable turnover for the last 12 months goes over £90,000, or you expect it to go over £90,000 in the next 30 days alone. Under the 12-month test, register within 30 days of the end of the month you went over. You can register voluntarily below £90,000.',
  },

  tldr: [
    'The registration threshold is <strong>£90,000</strong> of VAT taxable turnover. The deregistration threshold is <strong>£88,000</strong>.',
    'Check the <strong>last 12 months</strong> at the end of every month, not just at your year end.',
    'Went over in the past: register within <strong>30 days</strong> of the end of that month. You are registered from the first day of the second month after.',
    'Will go over in the next 30 days alone: register by the end of those 30 days. You are registered from the day you realised.',
    'Voluntary registration lets you reclaim VAT on goods bought up to <strong>4 years</strong> before and services up to <strong>6 months</strong> before.',
  ],

  sections: [
    {
      id: 'threshold', h2: 'When do you have to register for VAT?', toc: 'The threshold',
      body: [
        '<p>You have to register when your VAT taxable turnover goes over £90,000, measured over any rolling 12 months, or when you expect it to go over £90,000 in the next 30 days alone. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> watch the figure for you and register you at the right time, so you do not owe VAT on sales you never charged it on.</p>',
        { caption: 'VAT registration figures in force for 2026-27', head: ['What', 'Figure or rule'], rows: [
          ['Registration threshold', 'Taxable turnover over £90,000'],
          ['Backward test', 'Any rolling 12 months, checked at the end of each month'],
          ['Forward test', 'Over £90,000 in the next 30 days alone'],
          ['Deregistration threshold', 'Taxable turnover below £88,000'],
          ['Voluntary registration', 'Allowed at any turnover if you make taxable supplies'],
        ], after: 'Source: GOV.UK, Register for VAT, and VAT Notice 700/1. Checked 13 October 2026.' },
        '<p>Some businesses must register whatever their turnover. The main example is a business based outside the UK that supplies goods or services in the UK. If you take over a VAT-registered business, you also look at the combined turnover of the old and new business.</p>',
      ],
    },
    {
      id: 'rolling-12-months', h2: 'How does the rolling 12-month test work?', toc: 'Rolling 12 months',
      body: [
        '<p>At the end of every month, add up your taxable turnover for the 12 months just ended. If it is over £90,000, you must register. The test does not follow your financial year or the tax year, so a business with a strong summer can cross the line in August even if its annual accounts show less.</p>',
        '<p>Taxable turnover is everything you sell that is not exempt from VAT or outside its scope. It includes:</p>',
        '<ul><li>standard-rated, reduced-rated and zero-rated sales (zero-rated sales count, even though no VAT is charged)</li><li>goods you hire or lend to customers</li><li>business goods used for personal reasons, and goods bartered, part-exchanged or given as gifts</li><li>services from overseas businesses that you have to reverse charge</li><li>building work over £100,000 that your business did for itself</li></ul>',
        '<p>Exempt sales, such as most insurance, finance and residential rent, do not count. If everything you sell is exempt or out of scope, you do not have to register.</p>',
        '<h3>Example: crossing the threshold</h3>',
        '<p>Illustrative figures. A design studio checks its turnover on 31 July. For August last year to July this year it is £91,500, so it went over the threshold in July. It must register by 30 August, and its effective date of registration is 1 September. From 1 September it charges VAT on its sales.</p>',
      ],
    },
    {
      id: '30-day-test', h2: 'What is the 30-day forward test?', toc: '30-day test',
      body: [
        '<p>You must also register straight away if you know your taxable turnover in the next 30 days alone will be over £90,000. This usually catches a business that wins one large contract or opens with a big launch, rather than one that grows steadily.</p>',
        '<p>GOV.UK gives this example: you sign a £100,000 contract on 1 May. You must apply by 30 May, and you are VAT registered from 1 May, the day you realised, not the day the turnover arrived.</p>',
        { caption: 'The two compulsory tests compared', head: ['Test', 'Register by', 'Effective date of registration'], rows: [
          ['Last 12 months over £90,000', '30 days after the end of the month you went over', 'First day of the second month after you went over'],
          ['Next 30 days alone over £90,000', 'The end of that 30-day period', 'The date you realised you would go over'],
        ], after: 'Source: GOV.UK, Register for VAT: when to register. If you went over only temporarily, you can ask HMRC for a registration exception (see below).' },
      ],
    },
    {
      id: 'voluntary', h2: 'Should you register for VAT voluntarily?', toc: 'Voluntary registration',
      body: [
        '<p>Voluntary registration often makes sense if your customers are VAT-registered businesses, or if most of what you sell is zero-rated. Business customers reclaim the VAT you charge, so adding 20% does not cost them anything in the end, and you can reclaim VAT on your own costs.</p>',
        '<p>It is usually a poor fit if you sell mainly to the public. They cannot reclaim VAT, so you either raise your prices or absorb the VAT out of your margin. Use our <a href="/resources/vat-calculator/">VAT calculator</a> to see what your prices look like with VAT added.</p>',
        '<h3>Reclaiming VAT on costs from before you registered</h3>',
        '<p>Once registered, you can usually reclaim VAT you paid before your registration date on:</p>',
        '<ul><li><strong>goods</strong> bought up to 4 years before, if you still have them and have not used them up or sold them</li><li><strong>services</strong> supplied up to 6 months before</li></ul>',
        '<p>When you register voluntarily you can choose your start date, and you can ask for it to be backdated by up to 4 years. Once you are registered, the start date cannot be changed, so decide before you apply. If you are also deciding how to trade, our guide to <a href="/resources/sole-trader-vs-limited-company/">sole trader vs limited company</a> covers the wider picture. Small businesses that register often look at the <a href="/resources/flat-rate-vat-scheme/">Flat Rate VAT Scheme</a> at the same time.</p>',
      ],
    },
    {
      id: 'how-to-register', h2: 'How do you register for VAT?', toc: 'How to register',
      body: [
        '<p>Most businesses register online through the <a href="https://www.gov.uk/register-for-vat">HMRC VAT registration service</a>, or an agent registers for them. You need a paper form in a few cases, for example if you are asking for a registration exception because you went over the threshold only temporarily.</p>',
        '<p>Have these ready: your business details and bank account, your turnover so far and expected turnover, a description of what you sell, and the date you went over the threshold or expect to.</p>',
        '<h3>What happens next</h3>',
        '<ul><li>HMRC sends a 9-digit VAT registration number and confirms your effective date. If you have not heard after 40 working days, HMRC asks you to contact its VAT Registration Service.</li><li>HMRC signs you up to Making Tax Digital for VAT, unless you are exempt. You keep digital records and file returns through compatible software. Our guide to <a href="/resources/mtd-software/">Making Tax Digital software</a> explains what that means.</li><li>Sign up for a VAT online account as soon as your number arrives.</li></ul>',
        '<p>While you wait for the number, you cannot show VAT on your invoices, but you still owe VAT from your effective date. You can raise your prices to cover it, then reissue the invoices showing VAT once the number arrives.</p>',
      ],
    },
    {
      id: 'late-registration', h2: 'What happens if you register for VAT late?', toc: 'Registering late',
      body: [
        '<p>You owe HMRC the VAT on every sale since the date you should have been registered, even though you never charged your customers for it. That usually comes out of your own pocket, because adding VAT to old invoices is rarely possible.</p>',
        '<p>HMRC can also charge a failure to notify penalty, as a percentage of the VAT owed. It is lower if you tell HMRC before it finds out and if you correct things within 12 months.</p>',
        { caption: 'Failure to notify penalties (percentage of the VAT due)', head: ['Behaviour', 'You tell HMRC first (unprompted)', 'HMRC finds out first (prompted)'], rows: [
          ['Not deliberate, put right within 12 months', '0% to 30%', '10% to 30%'],
          ['Not deliberate, 12 months or more', '10% to 30%', '20% to 30%'],
          ['Deliberate', '20% to 70%', '35% to 70%'],
          ['Deliberate and concealed', '30% to 100%', '50% to 100%'],
        ], after: 'Source: HMRC factsheet CC/FS11, Penalties for failure to notify. Interest is charged on the VAT as well.' },
        '<p>Once registered, late returns and payments have their own penalties, covered in our guide to <a href="/resources/vat-penalties/">VAT penalties</a>. For how HMRC decides whether a mistake was careless or deliberate, see <a href="/resources/hmrc-penalties-explained/">HMRC penalties explained</a>.</p>',
      ],
    },
    {
      id: 'deregistration', h2: 'When can you cancel your VAT registration?', toc: 'Deregistering',
      body: [
        '<p>You can ask HMRC to cancel your registration if your taxable turnover falls below £88,000. You must cancel within 30 days if you stop being eligible, for example because you stop trading or sell the business, or you may be charged a penalty.</p>',
        '<ul><li>You file a final VAT return up to and including the cancellation date.</li><li>You account for VAT on stock and assets you reclaimed VAT on, if the total VAT due on them is over £1,000.</li><li>You stop charging VAT from the cancellation date.</li></ul>',
        '<h3>Going over the threshold only once</h3>',
        '<p>If a one-off sale pushes you over £90,000 but you can show HMRC that your taxable turnover will not go over £88,000 in the next 12 months, you can apply for an exception from registration. HMRC writes to confirm. If it refuses, it registers you.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'What is the VAT threshold for 2026-27?', a: 'The VAT registration threshold is £90,000 of taxable turnover. You must register if your turnover in any rolling 12 months goes over £90,000, or you expect it to go over £90,000 in the next 30 days alone. The deregistration threshold is £88,000.' },
    { q: 'Is the VAT threshold based on the tax year?', a: 'No. It is a rolling 12-month test that you check at the end of every month. Your financial year and the tax year do not matter, so watch your turnover month by month as you get close to £90,000.' },
    { q: 'Do zero-rated sales count towards the VAT threshold?', a: 'Yes. Zero-rated sales are taxable supplies, so they count towards the £90,000 even though no VAT is charged. Exempt sales and out of scope income do not count. A business making mainly zero-rated sales can ask HMRC for an exemption from registration.' },
    { q: 'How long does VAT registration take?', a: 'HMRC does not give a fixed time. It asks you to contact its VAT Registration Service only if you have not heard after 40 working days. You still owe VAT from your effective date while you wait, so raise your prices and reissue invoices with VAT once the number arrives.' },
    { q: 'Can I backdate a voluntary VAT registration?', a: 'Yes. When you register voluntarily you choose your start date and can ask for it to be backdated by up to 4 years. Once you are registered you cannot change it, so check the VAT you would owe and reclaim before you apply.' },
  ],

  sources: [
    ['https://www.gov.uk/register-for-vat', 'GOV.UK: Register for VAT'],
    ['https://www.gov.uk/vat-registration/calculate-turnover', 'GOV.UK: Calculate your VAT taxable turnover'],
    ['https://www.gov.uk/government/publications/vat-notice-7001-should-i-be-registered-for-vat/vat-notice-7001-should-i-be-registered-for-vat', 'GOV.UK: VAT Notice 700/1, Who should register for VAT'],
    ['https://www.gov.uk/government/publications/compliance-checks-penalties-for-failure-to-notify-ccfs11/compliance-checks-penalties-for-failure-to-notify-ccfs11', 'GOV.UK: HMRC factsheet CC/FS11, Penalties for failure to notify'],
    ['https://www.gov.uk/vat-registration/cancel-registration', 'GOV.UK: Cancel your VAT registration'],
  ],

  related: [
    '/resources/flat-rate-vat-scheme/',
    '/resources/vat-penalties/',
    '/resources/sole-trader-vs-limited-company/',
    '/resources/mtd-software/',
  ],
};
