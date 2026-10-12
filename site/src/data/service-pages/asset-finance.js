// Asset finance: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Business finance page: we do not yet know whether Severin lends directly or arranges finance
// through lenders (credit broker), or its FCA status. Copy says "we arrange"; rates, fees,
// lender panel and turnaround are placeholders. No approval guarantees.
// Facts checked against GOV.UK (capital allowances), the HMRC VAT Finance Manual (VATFIN3120)
// and the British Business Bank on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/asset-finance/asset-finance-machinery-operator.jpg';
import van from '../../assets/services/asset-finance/asset-finance-van-driver.jpg';
import plant from '../../assets/services/asset-finance/asset-finance-excavator.jpg';
import workshop from '../../assets/services/asset-finance/asset-finance-welder-workshop.jpg';
import kitchen from '../../assets/services/asset-finance/asset-finance-commercial-kitchen.jpg';
import farm from '../../assets/services/asset-finance/asset-finance-tractor-field.jpg';
import dental from '../../assets/services/asset-finance/asset-finance-dental-chair.jpg';
import meeting from '../../assets/services/asset-finance/asset-finance-reviewing-documents.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/business-finance/asset-finance/',
  primaryKeyword: 'asset finance',
  secondaryKeywords: [
    'equipment finance', 'hire purchase business', 'equipment leasing', 'finance lease',
    'operating lease', 'asset refinance', 'van finance for business', 'machinery finance',
  ],
  title: 'Asset Finance in London | Severin Finance',
  description: 'Asset finance in London for vans, machinery and equipment: hire purchase, leasing and refinance. We compare lenders and run the application.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Business finance', '/uk/business-finance/'],
    ['Asset finance', '/uk/business-finance/asset-finance/'],
  ],
  service: {
    name: 'Asset finance arrangement',
    serviceType: 'Hire purchase, leasing and asset refinance sourcing',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Business finance',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Business finance · Equipment',
    h1: 'Asset finance in London',
    answer: 'Asset finance lets your business spread the cost of vans, machinery and equipment through hire purchase, a finance lease or an operating lease. Our team compares lenders, explains the tax and VAT differences and manages the application. The asset is usually the main security. Finance is subject to status and lender approval.',
    image: hero,
    imageAlt: 'Factory worker operating industrial machinery on a busy production floor',
    price: { prefix: 'Rates from', from: 'X.X%', note: 'a year, example', tbc: true },
    deadline: { label: 'Annual Investment Allowance', date: '£1,000,000', note: 'A year of qualifying plant and machinery' },
    cta: 'Get a free finance review',
    trust: [
      { text: 'Accountants who claim your capital allowances' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'FCA firm reference number: to confirm', tbc: true },
    ],
  },

  jump: [
    ['who', 'Who it is for'],
    ['prices', 'Rates'],
    ['deadlines', 'HP vs leasing'],
    ['how', 'How it works'],
    ['compare', 'Us vs your bank'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who it is for (photo cards) ----------
  who: {
    eyebrow: 'Who it is for',
    h2: 'Who uses asset finance?',
    intro: 'Any business that needs equipment to earn money but would rather not pay for it all at once. Not sure whether to buy or lease? We check for free.',
    cards: [
      { title: 'Vans & vehicles', img: van, alt: 'Smiling man giving a thumbs up from the driver’s seat of a white van', tag: 'Commercial vehicles', text: 'One van or a fleet. Hire purchase lets you own it at the end; a lease lets you hand it back.', link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'] },
      { title: 'Construction & plant', img: plant, alt: 'Yellow excavator parked on a dirt site at sunset', tag: 'Plant and machinery', text: 'Diggers, access equipment and tools. Leasing can suit kit you replace often; hire purchase suits kit you keep.', link: ['/uk/business-finance/invoice-finance/', 'Invoice finance'] },
      { title: 'Workshops & manufacturers', img: workshop, alt: 'Welder working on a piece of metal in a shower of sparks', tag: 'Production equipment', text: 'New machinery may qualify for full expensing if you are a company. We check the allowance before you sign.', link: ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'] },
      { title: 'Restaurants & catering', img: kitchen, alt: 'Chef plating food under copper heat lamps in a restaurant kitchen', tag: 'Kitchen equipment', text: 'Ovens, refrigeration and fit-out. Spread the cost so cash stays in the business for stock and staff.', link: ['/uk/business-finance/business-loans/', 'Business loans'] },
      { title: 'Farms & rural businesses', img: farm, alt: 'Green tractor working a field at sunset', tag: 'Tractors and machinery', text: 'Tractors and farm machinery on terms that can fit seasonal income, lender permitting.' },
      { title: 'Dental & medical practices', img: dental, alt: 'Orange dental chair in a bright, modern treatment room', tag: 'Clinical equipment', text: 'Dental chairs, scanners and imaging. Upgrade without paying the full price up front.', link: ['/uk/company-services/business-valuation/', 'Business valuation'] },
    ],
  },

  // ---------- 3. Rates (3 product types) ----------
  pricing: {
    eyebrow: 'Asset finance rates',
    h2: 'Typical asset finance rates',
    intro: 'Your rate depends on the asset, your business and the lender. These are examples only: you see the real offer before you commit.',
    plans: [
      { name: 'Hire purchase', for: 'You own the asset at the end', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['Deposit, then fixed monthly payments', 'You own it after the final payment', 'Capital allowances from when you start using it', 'VAT on the asset normally paid with the first instalment'] },
      { name: 'Finance lease', for: 'Use the asset, the lender owns it', prefix: 'rates from', price: 'X.X%', tbc: true, featured: true, badge: 'Most asked about', items: ['Fixed monthly rentals', 'The finance company keeps ownership', 'VAT charged on each rental', 'End-of-lease options set in the agreement'] },
      { name: 'Operating lease', for: 'Use kit for part of its life', prefix: 'rates from', price: 'X.X%', tbc: true, items: ['Covers part of the asset’s working life', 'Often lets you upgrade at the end', 'The finance company keeps ownership', 'Suits equipment that dates quickly'] },
    ],
    included: ['Free first consultation', 'Hire purchase and leasing compared', 'Capital allowances checked by our accountants', 'Search and comparison of suitable lenders', 'Refinance of equipment you already own'],
    note: { text: 'Example rates, our arrangement fee, the number of lenders we work with and whether Severin acts as lender or credit broker: to confirm.', tbc: true },
  },

  // ---------- 4. HP vs leasing, tax and VAT (tables) ----------
  deadlines: {
    eyebrow: 'HP vs leasing',
    h2: 'Asset finance: hire purchase vs leasing',
    intro: 'Ownership, tax and VAT rules, checked on GOV.UK and the HMRC VAT Finance Manual on 13 October 2026.',
    tables: [
      {
        caption: 'Hire purchase or lease: key differences',
        head: ['Question', 'Hire purchase vs lease'],
        rows: [
          ['Who owns the asset', 'Hire purchase: you, after the final payment. Lease: the finance company'],
          ['Capital allowances', 'Hire purchase: yes, from when you start using it, but not on the interest. Lease: no, unless it is a long funding lease'],
          ['VAT on the asset', 'Hire purchase: normally payable in full with the first instalment. Lease: charged on each rental'],
          ['Finance charge', 'Hire purchase: exempt from VAT if shown separately'],
          ['Operating lease', 'Covers part of the asset’s life and often allows upgrades'],
          ['Refinance', 'Raise cash against equipment you already own, with the asset as security'],
        ],
        after: 'Finance is subject to status and lender approval. The asset may be repossessed if you do not keep up payments, and you may still owe money after it is sold.',
      },
      {
        caption: 'Capital allowances on equipment',
        head: ['Allowance', 'What it gives'],
        rows: [
          ['Annual Investment Allowance (AIA)', '100% deduction on up to £1 million of qualifying plant and machinery a year'],
          ['Full expensing', 'Companies only: 100% of the cost of qualifying new and unused plant and machinery, in the year bought'],
          ['50% first-year allowance', 'Companies only: 50% of the cost of qualifying new and unused plant and machinery'],
          ['40% first-year allowance', 'New and unused main rate assets bought on or after 1 January 2026'],
          ['Cars', 'Not eligible for the AIA, full expensing or first-year allowances above'],
        ],
        after: 'Under hire purchase you can claim for the payments you will make under the contract once you start using the item, but not for the interest. Our accountants check which allowance gives you the most relief.',
      },
    ],
    urgent: {
      title: 'Need the equipment before your year end?',
      text: 'Allowances are claimed in the period you buy the asset or, under hire purchase, start using it. Lenders need time to approve and suppliers need time to deliver, so talk to us early.',
      cta: 'Talk to our finance team',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How we arrange your asset finance',
    image: meeting,
    imageAlt: 'Two people going through a finance agreement together at a grey desk',
    steps: [
      { title: 'Free finance review', text: 'Tell us what you want to buy and from whom. We check whether hire purchase or a lease suits you better.' },
      { title: 'Lenders and tax', text: 'We approach suitable lenders, explain each offer and check the capital allowances and VAT with you.' },
      { title: 'Sign and take delivery', text: 'You choose the offer. The lender pays the supplier and you start using the asset.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Supplier quote or invoice', 'Latest accounts and tax returns', 'Management accounts for this year',
      'Last 3 to 6 months of bank statements', 'Existing finance agreements', 'VAT registration number',
      'ID and address for each director', 'For refinance: proof you own the asset',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs your bank',
    h2: 'Severin, your bank or an online lender?',
    cols: ['Severin Finance', 'Your bank directly', 'Online lender or marketplace'],
    rows: [
      ['Lenders compared', 'A range of lenders', 'One', 'Those on the platform'],
      ['Hire purchase and leasing compared for you', true, 'The bank’s own products', 'Some'],
      ['Capital allowances and VAT explained', true, false, false],
      ['New, used and refinance', true, 'Depends on the bank', 'Often limited'],
      ['Accounts prepared for the lender', true, false, false],
      ['Help with complex or recent accounts', true, false, 'Partly'],
      ['Cost to you', 'To confirm', 'Bank fees', 'Platform and lender fees'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against GOV.UK capital allowances guidance, the HMRC VAT Finance Manual and British Business Bank guidance. Tax rules change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Asset finance questions',
  faqs: [
    { q: 'What is asset finance?', a: 'Asset finance is a way to pay for business equipment in instalments instead of all at once. The main types are hire purchase, where you own the asset at the end, and leasing, where the finance company owns it and you pay to use it. The asset is usually the main security for the lender.' },
    { q: 'What is the difference between hire purchase and leasing?', a: 'Ownership. With hire purchase you own the asset after the final payment, or after an optional final fee. With a lease the finance company keeps ownership and you pay rentals to use it. The tax and VAT treatment also differ.' },
    { q: 'Can I claim capital allowances on hire purchase?', a: 'Yes. Once you start using the item, you can claim for all the payments you will make under the contract, but not for the interest. You can use the Annual Investment Allowance, up to £1 million a year, or full expensing if you are a company buying new qualifying plant and machinery.' },
    { q: 'Can I claim capital allowances on leased equipment?', a: 'Usually no. You cannot claim plant and machinery allowances on things you lease, unless it is a hire purchase contract or a long funding lease. Lease rentals are usually treated as a business expense instead. Our accountants check this for you.' },
    { q: 'How is VAT charged on hire purchase and leasing?', a: 'On hire purchase, the VAT on the asset is normally payable with the first instalment, because ownership is meant to pass to you. The finance charge is exempt if shown separately. On a lease, VAT is charged on each rental. If you are VAT registered, you may be able to reclaim it under the normal rules.' },
    { q: 'What is full expensing?', a: '100% first-year relief for companies. Companies can deduct the full cost of qualifying new and unused plant and machinery in the year they buy it. It does not apply to cars. Sole traders and partnerships can use the Annual Investment Allowance instead.' },
    { q: 'What is asset refinance?', a: 'Asset refinance raises cash against equipment or vehicles you already own. The lender takes the asset as security, and you repay in instalments while you keep using it. Lenders usually check the asset’s value and your ability to pay.' },
    { q: 'Can a new business get asset finance?', a: 'Sometimes. Because the asset is security, some lenders consider newer businesses, often with a larger deposit or a personal guarantee. Approval mainly depends on whether you can afford the payments.' },
    { q: 'What are asset finance rates at the moment?', a: 'Rates start from about X.X% a year for strong cases on new equipment. Your rate depends on the asset, its age, the term, your trading record and the lender. We show you each offer in writing before you apply.', tbc: true },
    { q: 'Does Severin Finance lend the money itself?', a: 'We arrange asset finance with lenders. Whether Severin also lends directly, acts as a credit broker, and its FCA firm reference number are to be confirmed. We tell you in writing how we are paid before you apply.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/business-finance/business-loans/', 'Business loans'],
      ['/uk/business-finance/invoice-finance/', 'Invoice finance'],
      ['/uk/business-finance/commercial-mortgages/', 'Commercial mortgages'],
      ['/uk/tax/corporation-tax-accountant/', 'Corporation tax accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/stratford/', 'Stratford'],
      ['/uk/london/croydon/', 'Croydon'],
      ['/uk/london/canary-wharf/', 'Canary Wharf'],
      ['/uk/birmingham/', 'Birmingham'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/hire-purchase-vs-leasing/', 'Hire purchase vs leasing'],
      ['/resources/capital-allowances-explained/', 'Capital allowances explained'],
      ['/resources/full-expensing/', 'Full expensing for companies'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a free review of your', em: 'asset finance options',
    pills: ['Free first consultation', 'HP and leasing compared', 'No obligation'],
    formTitle: 'Get your free finance review', button: 'Get my free review',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/capital-allowances/annual-investment-allowance', 'GOV.UK: Annual Investment Allowance'],
    ['https://www.gov.uk/capital-allowances/what-you-can-claim-on', 'GOV.UK: What you can claim capital allowances on'],
    ['https://www.gov.uk/capital-allowances/full-expensing', 'GOV.UK: Full expensing'],
    ['https://www.gov.uk/capital-allowances/40-first-year-allowance', 'GOV.UK: 40% first-year allowance'],
    ['https://www.gov.uk/hmrc-internal-manuals/vat-finance-manual/vatfin3120', 'HMRC VAT Finance Manual: hire purchase (VATFIN3120)'],
    ['https://www.british-business-bank.co.uk/business-guidance/guidance-articles/finance/leasing-hire-purchase', 'British Business Bank: Leasing and hire purchase'],
  ],
};
