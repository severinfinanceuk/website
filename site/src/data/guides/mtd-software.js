// Guide: /resources/mtd-software/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Re-check each April and when HMRC updates its software guidance.
// No software brands named or ranked: HMRC lists recognised products and does not recommend any.
export default {
  url: '/resources/mtd-software/',
  section: 'tax',
  title: 'MTD Software: Choosing Compatible Software | Severin Finance',
  description: 'Compatible and bridging software for Making Tax Digital, HMRC\'s software finder and what to check before the 7 November 2026 update. Free consultation.',
  h1: 'Making Tax Digital software: how to choose compatible software',
  crumb: 'MTD software',
  summary: 'What compatible and bridging software do, how to use HMRC\'s finder and what to check before you buy.',
  topic: 'Making Tax Digital compatible software',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/making-tax-digital-accountant/', label: 'Our Making Tax Digital service',
    boxTitle: 'Not sure which software fits?', text: 'We check what your income needs, choose and set up compatible software, and send your updates to HMRC.',
  },

  hero: {
    answer: 'For Making Tax Digital for Income Tax, you need software HMRC has recognised that keeps digital records, sends quarterly updates and files your tax return. Bridging software lets you keep using spreadsheets. HMRC\'s online finder lists recognised products, including free ones for simple affairs, but HMRC does not recommend any product.',
  },

  tldr: [
    'Compatible software must <strong>keep digital records</strong>, send <strong>quarterly updates</strong> and submit your tax return by <strong>31 January</strong>.',
    '<strong>Bridging software</strong> links records you keep elsewhere, such as a spreadsheet, to HMRC.',
    'Moving figures by <strong>copy and paste</strong> or retyping does not count as a digital link.',
    'You can use more than one product, but only <strong>one product for each submission</strong>.',
    'HMRC\'s finder lists recognised software. <strong>HMRC does not recommend</strong> any product, and free products may cap your transactions.',
  ],

  sections: [
    {
      id: 'compatible-software', h2: 'What is compatible software for Making Tax Digital?', toc: 'Compatible software',
      body: [
        '<p>Compatible software is a product that has been through HMRC\'s recognition process and can talk to HMRC\'s systems directly. Sole traders and landlords in Making Tax Digital for Income Tax must use it to report their income. If you would rather not pick it yourself, our <a href="/uk/tax/making-tax-digital-accountant/">Making Tax Digital accountants</a> choose and set up software that fits your records, then send each update for you.</p>',
        '<p>For Income Tax, you (or your agent) need commercial software that can do three things:</p>',
        '<ul><li>keep digital records of your self-employment and property income and expenses</li><li>send a quarterly update to HMRC after each quarter</li><li>submit your tax return by 31 January after the tax year ends</li></ul>',
        '<p>Quarterly updates are summaries of your income and expenses. They are not tax returns, so the year-end return is still where you add adjustments, claim reliefs and report other income. Pensions, savings interest, dividends and a share of partnership profit do not need digital records, but they still go on the tax return through your software.</p>',
      ],
    },
    {
      id: 'bridging-software', h2: 'What is bridging software, and can you still use spreadsheets?', toc: 'Bridging software',
      body: [
        '<p>Yes, you can keep a spreadsheet, as long as bridging software links it to HMRC. Bridging software is a product that connects to records you keep elsewhere and submits the figures to HMRC. Some bridging products send quarterly updates and file the tax return too; others only do part of the job, so check before you buy.</p>',
        '<p>The catch is the digital links rule. If you use more than one product, the data must move between them electronically, with no manual step. HMRC accepts links such as:</p>',
        '<ul><li>formulas linking cells in different spreadsheets</li><li>emailing a spreadsheet or moving it on a portable drive</li><li>importing and exporting XML or CSV files</li><li>automatic transfers and API connections between products</li></ul>',
        '<p>Copying and pasting, or retyping figures from one product into another, does not count. If you find a mistake, correct it in the spreadsheet where the record was made, then let the link carry the change across. Once a record has been sent in a quarterly update, you must not move it manually into other software.</p>',
        '<p>Each digital record needs the amount, the date of the income or expense and a category that matches the Self Assessment categories. Retailers can record daily gross takings instead of individual sales. You still keep original records such as invoices and bank statements, which is where a routine like our <a href="/resources/monthly-bookkeeping-checklist/">monthly bookkeeping checklist</a> helps.</p>',
      ],
    },
    {
      id: 'software-finder', h2: 'How do you find software that HMRC recognises?', toc: 'HMRC\'s software finder',
      body: [
        '<p>Use HMRC\'s <a href="https://www.gov.uk/guidance/find-software-that-works-with-making-tax-digital-for-income-tax">find software tool</a> on GOV.UK. You answer a few questions and get a list of products that suit your situation. Everything listed has been through HMRC\'s recognition process, and HMRC states that it does not recommend any product or software provider. Products that were still in development now appear in the same tool.</p>',
        '<p>Before you start, have these answers ready:</p>',
        '<ul><li>which income you have: self-employment, UK property, foreign property, or a mix</li><li>any other income you must report on your tax return</li><li>whether you want software that creates new records, or one that connects to records you already keep</li><li>whether you use the standard tax year quarters, calendar quarters, or neither</li></ul>',
        '<p>Free products exist for people with simple tax affairs, but they may limit how you use them, for example by capping the number of transactions. If you have an agent, check they can work with the product you choose. Agents see every compatible product in the tool.</p>',
      ],
    },
    {
      id: 'what-to-look-for', h2: 'What should you look for when choosing MTD software?', toc: 'What to look for',
      body: [
        '<p>Start with what you must report, then cost and ease of use. These are the checks HMRC suggests, with our notes on why each matters.</p>',
        { caption: 'Checks before you choose Making Tax Digital software', head: ['Check', 'Why it matters'], rows: [
          ['Covers all your income sources', 'A product that handles self-employment but not property leaves landlords with a gap'],
          ['Sends quarterly updates and the tax return', 'Some products only do one of these, so you would need a second product and a digital link'],
          ['Fits your update periods', 'Standard quarters end on 5 July, 5 October, 5 January and 5 April; calendar quarters end on 30 June, 30 September, 31 December and 31 March'],
          ['Supports more than one agent', 'Useful if, for example, one adviser handles your rental income and another your business'],
          ['Has HMRC Assist built in', 'It gives feedback and highlights possible errors on your tax return using your submissions and data HMRC holds'],
          ['Pricing', 'Check what the subscription includes and any transaction limits on free or cheaper plans'],
          ['Room to grow', 'Choose something that will still work if you start letting a property or open a second business'],
        ], after: 'Source: GOV.UK, Choose the right software for Making Tax Digital for Income Tax (updated 13 July 2026). Checked 13 October 2026.' },
        '<p>Also think about how you work day to day. If you keep receipts on your phone, a product with receipt scanning and bank feeds saves time. If your bookkeeper already uses a spreadsheet that works well, bridging software may be the least disruptive choice.</p>',
      ],
    },
    {
      id: 'more-than-one-product', h2: 'Can you use more than one software product?', toc: 'Using several products',
      body: [
        '<p>Yes, but you can only use one product for each separate submission to HMRC. A landlord cannot, for example, send half a property update from one product and half from another. Where products work together, they must be digitally linked.</p>',
        '<p>Landlords have a few specific rules. All your UK lettings count as one UK property business, so you do not need separate digital records for each UK property. Foreign property is different: you keep separate digital records for each property, and your software combines them into one quarterly update. If you let a property jointly, you only record your own share, and you do not need to link your records to the other owner\'s. Our guide to <a href="/resources/making-tax-digital-for-landlords/">Making Tax Digital for landlords</a> covers the rest.</p>',
      ],
    },
    {
      id: 'vat-software', h2: 'Will your VAT software also work for Income Tax?', toc: 'VAT software',
      body: [
        '<p>Not automatically. If you are VAT registered, you already file VAT returns through Making Tax Digital software, but recognition for VAT does not mean a product handles Income Tax. Check the Income Tax finder for the product you use, or confirm that any new Income Tax product also covers your VAT.</p>',
        '<p>The two schemes are separate, with their own sign-up and their own penalty points. When you connect software for VAT, you grant it authority to deal with HMRC for you, which lasts 18 months and can be checked or withdrawn at any time. Our <a href="/uk/tax/vat-accountant/">VAT accountants</a> can run both from one set of records.</p>',
      ],
    },
    {
      id: 'when-to-choose', h2: 'When should you choose your software?', toc: 'When to choose',
      body: [
        '<p>Before you sign up. HMRC advises choosing your software first, because you authorise it as part of joining Making Tax Digital for Income Tax. Whether you must join depends on your qualifying income: gross self-employment and property income before expenses.</p>',
        { caption: 'When Making Tax Digital for Income Tax applies', head: ['Qualifying income', 'Tax year it is measured', 'Software needed from'], rows: [
          ['Over £50,000', '2024-25', '6 April 2026'],
          ['Over £30,000', '2025-26', '6 April 2027'],
          ['Over £20,000', '2026-27', '6 April 2028'],
        ], after: 'Source: GOV.UK, Find out if and when you need to use Making Tax Digital for Income Tax (updated 26 March 2026).' },
        '<p>If you are already in, the next update for 2026-27 covers 6 April to 5 October 2026 and is due by 7 November 2026. HMRC will not give penalty points for late quarterly updates in 2026-27, but late tax returns still attract points. If you join from April 2027, setting up software a few months early gives you time to practise before the first quarter counts. Read our guide to <a href="/resources/making-tax-digital-for-income-tax/">Making Tax Digital for Income Tax</a> for who must join, and our <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> guide for the return you file before you start.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Is there free software for Making Tax Digital for Income Tax?', a: 'Yes. HMRC says free products are available for people with simple tax affairs. They may limit how you use them, for example by capping the number of transactions. HMRC\'s find software tool on GOV.UK lists recognised products, but HMRC does not recommend any of them.' },
    { q: 'Can I use Excel for Making Tax Digital?', a: 'You can keep your records in a spreadsheet, but you also need bridging software that links the spreadsheet to HMRC and sends your quarterly updates. The figures must move by a digital link: copying and pasting or retyping them does not count.' },
    { q: 'Does HMRC provide its own MTD software?', a: 'No. You, or an agent acting for you, need commercial software that has been through HMRC\'s recognition process. HMRC provides a finder tool on GOV.UK that lists recognised products and asks a few questions to match them to your income.' },
    { q: 'Can my accountant use different software from me?', a: 'Often, yes, as long as the products are digitally linked and only one product makes each submission to HMRC. Check before you buy that your agent can work with your chosen product, and that it supports more than one agent if you need that.' },
    { q: 'What happens if I choose the wrong software?', a: 'You can change product, but check the new one covers all your income and update periods, and that your records move across by a digital link. Changing just before a quarterly deadline is risky, so switch between quarters where you can.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/choose-the-right-software-for-making-tax-digital-for-income-tax', 'GOV.UK: Choose the right software for Making Tax Digital for Income Tax'],
    ['https://www.gov.uk/guidance/find-software-that-works-with-making-tax-digital-for-income-tax', 'GOV.UK: Find software that works with Making Tax Digital for Income Tax'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/create-digital-records', 'GOV.UK: Create digital records'],
    ['https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax', 'GOV.UK: When you need to use Making Tax Digital for Income Tax'],
    ['https://www.gov.uk/guidance/use-making-tax-digital-for-income-tax/send-quarterly-updates', 'GOV.UK: Send quarterly updates'],
    ['https://www.gov.uk/guidance/find-software-thats-compatible-with-making-tax-digital-for-vat', 'GOV.UK: Software for Making Tax Digital for VAT'],
    ['https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat', 'GOV.UK: VAT Notice 700/22, digital links'],
  ],

  related: [
    '/resources/making-tax-digital-for-income-tax/',
    '/resources/making-tax-digital-for-landlords/',
    '/resources/monthly-bookkeeping-checklist/',
    '/resources/self-assessment-deadlines/',
  ],
};
