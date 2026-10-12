// Business valuation: all copy, facts and SEO for one service page.
// The layout (src/layouts/ServicePage.astro) turns this into the page. Same keys as
// self-assessment-accountant.js. See docs/03-service-page-template.md.
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Severin has not yet confirmed it offers business valuations, or expert witness work:
// keep scope modest and confirm before launch. No market multiples are quoted on purpose.
// Facts checked against GOV.UK and HMRC manuals on 13 October 2026 (sources at the bottom).

import { rating } from '../reviews.js';
import hero from '../../assets/services/business-valuation/business-valuation-adviser-team-reviewing-charts.jpg';
import sale from '../../assets/services/business-valuation/sell-a-business-valuation-cafe-owner.jpg';
import exit from '../../assets/services/business-valuation/shareholder-exit-share-valuation-partners-meeting.jpg';
import divorce from '../../assets/services/business-valuation/divorce-business-valuation-client-adviser-meeting.jpg';
import emi from '../../assets/services/business-valuation/emi-valuation-startup-team-celebrating.jpg';
import gift from '../../assets/services/business-valuation/gifting-shares-valuation-father-daughter.jpg';
import raise from '../../assets/services/business-valuation/raising-investment-company-valuation-boardroom-pitch.jpg';
import analysts from '../../assets/services/business-valuation/business-valuation-analysts-laptop-review.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/company-services/business-valuation/',
  primaryKeyword: 'business valuation',
  secondaryKeywords: [
    'business valuation services', 'business valuation UK', 'business valuation London', 'share valuation',
    'EMI valuation', 'VAL231', 'company valuation for divorce', 'how much is my business worth',
  ],
  title: 'Business Valuation London & UK-wide | Severin Finance',
  description: 'Business valuation in London and across the UK: sales, shareholder exits, divorce and HMRC (EMI, CGT). Clear written report, fixed fee, free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['Company services', '/uk/company-services/'],
    ['Business valuation', '/uk/company-services/business-valuation/'],
  ],
  service: {
    name: 'Business valuation service',
    serviceType: 'Business and share valuation',
    areaServed: [['Country', 'United Kingdom'], ['City', 'London']],
  },
  formTopic: 'Business valuation',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Company services · Business valuation',
    h1: 'Business valuation in London and across the UK',
    answer: 'Our business valuation service tells you what your UK company or your shares are worth, in a written report for a sale, a shareholder exit, a divorce or HMRC, whether you are in London, elsewhere in the UK or abroad. We test the value with earnings, cash flow and asset methods. For EMI options, we prepare form VAL231.',
    image: hero,
    imageAlt: 'Four colleagues around a wooden table reviewing printed pie charts and bar graphs, seen from above',
    price: { from: '£XXX', note: 'fixed fee', tbc: true },
    deadline: { label: 'HMRC-agreed EMI value', date: 'Valid 90 days', note: 'Grant your options inside that window' },
    cta: 'Get a fixed quote',
    trust: [
      { text: 'Methods and assumptions shown' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Written report you can share' },
    ],
  },

  jump: [
    ['who', 'Why value a business'],
    ['prices', 'Prices'],
    ['deadlines', 'Methods & HMRC'],
    ['how', 'How it works'],
    ['compare', 'Us vs calculators'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Why value a business (photo cards) ----------
  who: {
    eyebrow: 'Why value a business',
    h2: 'When do you need a business valuation?',
    intro: 'The reason for the valuation decides the basis and the method. These are the most common.',
    cards: [
      { title: 'Selling your business', img: sale, alt: 'Smiling café owner in a checked apron standing with arms folded in front of the bar of her café', tag: 'Sale to a buyer', text: 'Know your number before buyers do. We value the business and show what moves the price up or down.', link: ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'] },
      { title: 'Shareholder exits', img: exit, alt: 'Two business partners in suits having a serious discussion over documents and coffee at a meeting table', tag: 'Buying out a shareholder', text: 'Your articles or shareholders’ agreement often set how leaving shareholders are valued. We apply them and explain the result.', link: ['/uk/company-services/succession-planning/', 'Management buy-out'] },
      { title: 'Divorce & separation', img: divorce, alt: 'Woman going through documents on a tablet with an adviser at a meeting table in a brick-walled office', tag: 'Financial settlement', text: 'A company is often the largest asset in a divorce. We give you and your solicitor a clear, reasoned value.' },
      { title: 'EMI share options', img: emi, alt: 'Small team of colleagues celebrating good news around a laptop in a modern open-plan office', tag: 'HMRC form VAL231', text: 'We propose a market value for the shares under option and prepare the VAL231, so HMRC can agree it before you grant.' },
      { title: 'Gifting shares', img: gift, alt: 'Older man in an orange shirt sitting at a table with his adult daughter in a bright room full of plants', tag: 'Capital gains and inheritance tax', text: 'Gifts of shares are taxed at market value. We value them and can ask HMRC to check the figure after the gift.', link: ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'] },
      { title: 'Raising investment', img: raise, alt: 'Woman presenting at a whiteboard to a group seated around a long boardroom table', tag: 'Pre-money valuation', text: 'Investors will test your valuation. We build the forecast and the reasoning behind your number.', link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'] },
    ],
  },

  // ---------- 3. Prices (3 packages) ----------
  pricing: {
    eyebrow: 'Business valuation fees',
    h2: 'Fixed fees for your valuation',
    intro: 'You know the price before we start. The fee depends on the purpose and the size of the business.',
    plans: [
      { name: 'Valuation letter', for: 'A quick, reasoned estimate', price: '£XXX', tbc: true, items: ['One main method, clearly explained', 'Based on your latest accounts', 'Short letter with a value range'] },
      { name: 'Full valuation report', for: 'Sales, shareholder exits and divorce', price: '£XXX', tbc: true, featured: true, badge: 'Most chosen', items: ['Earnings, cash flow and asset methods compared', 'Adjusted for owner pay and one-off costs', 'Minority or control basis explained', 'Written report you can share', 'Call to talk through the result'] },
      { name: 'Tax valuation', for: 'EMI options, gifts and HMRC checks', price: '£XXX', tbc: true, items: ['Unrestricted and actual market value for EMI', 'Form VAL231 or CG34 prepared', 'HMRC questions answered'] },
    ],
    included: ['Free first consultation', 'Fixed fee agreed upfront', 'Plain-English explanation', 'Confidential handling', 'Assumptions shown in full'],
    note: { text: 'Prices, VAT, turnaround times, and whether we act as an expert witness in court: to confirm.', tbc: true },
  },

  // ---------- 4. Methods and HMRC rules (tables) ----------
  deadlines: {
    eyebrow: 'Methods & HMRC',
    h2: 'Business valuation methods and HMRC rules',
    intro: 'How businesses are usually valued, and when HMRC gets involved. HMRC rules checked on GOV.UK on 13 October 2026.',
    tables: [
      {
        caption: 'Common business valuation methods',
        head: ['Method', 'How it works'],
        rows: [
          ['Earnings multiple', 'Maintainable profit times a multiple drawn from similar businesses, adjusted for risk'],
          ['Discounted cash flow', 'Forecast cash flows brought back to today at a rate that reflects the risk'],
          ['Net assets', 'Assets at today’s value less liabilities. Often used for property and investment companies'],
          ['Minority stake', 'A holding that cannot control the company is often worth less per share than a controlling one'],
        ],
        after: 'No single method suits every business. We usually test the value with more than one.',
      },
      {
        caption: 'HMRC share valuations',
        head: ['What', 'Rule'],
        rows: [
          ['EMI options (form VAL231)', 'Propose an unrestricted and an actual market value. HMRC can agree it before you grant'],
          ['How long an agreed EMI value lasts', '90 days from the agreement, if nothing changes the value'],
          ['Is HMRC agreement required?', 'No. It is voluntary, but it gives certainty'],
          ['EMI company limit (from 6 April 2026)', '£6 million of shares under option (£3 million for specified companies)'],
          ['Capital gains check (form CG34)', 'After a disposal, at least 3 months before your tax return is due'],
          ['Other share schemes', 'SIP on form VAL230. CSOP and SAYE by letter to HMRC'],
        ],
        after: 'HMRC’s Shares and Assets Valuation team agrees or checks values. It does not value a business for a sale.',
      },
    ],
    urgent: {
      title: 'Granting EMI options soon?',
      text: 'Agree the share value with HMRC first. An agreed value lasts 90 days, so time the application with your grant date. We prepare it for you.',
      cta: 'Get a valuation quote',
    },
  },

  // ---------- 5. How it works + what we need ----------
  how: {
    eyebrow: 'How it works',
    h2: 'How our business valuation works',
    image: analysts,
    imageAlt: 'Two colleagues reviewing figures on a laptop at a desk with printed charts in a bright office',
    steps: [
      { title: 'Free consultation', text: 'Tell us why you need a value. We agree the basis, the scope and a fixed fee in writing.' },
      { title: 'Send your figures', text: 'We send a short checklist. We review your accounts, forecasts and agreements and ask questions.' },
      { title: 'Report and talk-through', text: 'You get a written report with the value, the methods and the assumptions. We walk you through it.' },
    ],
    checklistTitle: 'What we need from you',
    checklist: [
      'Last 3 years’ accounts', 'Latest management accounts', 'Forecasts and budgets', 'Articles and shareholders’ agreement',
      'Share register and option agreements', 'Owner pay and one-off costs', 'Key customers and contracts', 'Loans, leases and property values',
    ],
  },

  // ---------- 6. Comparison ----------
  compare: {
    eyebrow: 'Us vs calculators',
    h2: 'Accountant, calculator or corporate finance?',
    cols: ['Severin Finance', 'Online valuation calculator', 'Corporate finance firm'],
    rows: [
      ['Based on your actual accounts', true, 'Partly', true],
      ['More than one method tested', true, false, true],
      ['Adjusted for owner pay and one-offs', true, false, true],
      ['HMRC forms (VAL231, CG34)', true, false, 'Sometimes'],
      ['Written report you can share', true, false, true],
      ['Price', 'Fixed fee', 'Free', 'Usually higher'],
    ],
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against HMRC Shares and Assets Valuation guidance on GOV.UK. Share scheme limits change: we update it when they do.',
  },

  // ---------- 8. FAQ (People Also Ask) ----------
  faqTitle: 'Business valuation questions',
  faqs: [
    { q: 'How much is my business worth?', a: 'It depends on its profits, growth, risk and assets. Most trading businesses are valued on a multiple of maintainable profit, checked against cash flow and net assets. We do not use rule-of-thumb multiples: the right one depends on your sector, size and likely buyer.' },
    { q: 'What are the main business valuation methods?', a: 'There are three: earnings multiples, discounted cash flow and net assets. Earnings multiples suit established profitable businesses, discounted cash flow suits fast-growing ones, and net assets suits property and investment companies.' },
    { q: 'Does HMRC value my business for me?', a: 'No. HMRC’s Shares and Assets Valuation team can agree a value for share schemes such as EMI before you grant options, and check a capital gains value after a disposal on form CG34. It does not value a business for a sale.' },
    { q: 'What is form VAL231?', a: 'VAL231 is the form to ask HMRC to agree the market value of shares under EMI options. You propose an unrestricted and an actual market value. An agreed value is valid for 90 days from the agreement, if nothing changes that affects it.' },
    { q: 'Do I have to agree an EMI valuation with HMRC?', a: 'No. It is voluntary, and you can grant options without it. Agreeing the value gives you certainty that the option price matches HMRC’s view of market value.' },
    { q: 'How is a business valued in a divorce?', a: 'Using the same methods as for a sale, applied to the company or to your shares. A clear, reasoned value helps both sides negotiate. Your solicitor will tell you whether a jointly instructed expert is needed.' },
    { q: 'Are minority shareholdings worth less?', a: 'Often, yes. A minority stake cannot control dividends, pay or a sale, so it is usually worth less per share than a controlling one. Your articles or shareholders’ agreement may set a different basis, so we check them first.' },
    { q: 'Can I use a valuation for capital gains tax?', a: 'Yes. Gifts of shares are taxed at market value, so you need a supportable figure. After the disposal, you can ask HMRC to check it on form CG34, at least 3 months before your tax return is due.' },
    { q: 'How much does a business valuation cost?', a: 'Our fixed fees start at £XXX for a valuation letter. A full report for a sale, shareholder exit or divorce costs more. You get the exact fee in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Related services', links: [
      ['/uk/company-services/succession-planning/', 'Succession planning and management buy-outs'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/tax/inheritance-tax-planning/', 'Inheritance tax planning'],
      ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      ['/uk/accounting/virtual-finance-director/', 'Virtual finance director'],
      ['/uk/company-services/company-secretarial-services/', 'Company secretarial services'],
    ] },
    { title: 'Where we work', links: [
      ['/uk/london/', 'Accountants in London'],
      ['/uk/london/city-of-london/', 'City of London'],
      ['/uk/london/westminster/', 'Westminster'],
      ['/uk/london/kensington/', 'Kensington'],
      ['/uk/cambridge/', 'Cambridge'],
      ['/uk/manchester/', 'Manchester'],
    ] },
    { title: 'Guides', links: [
      ['/resources/how-to-value-a-business/', 'How to value a business'],
      ['/resources/emi-share-options/', 'EMI share options explained'],
      ['/resources/business-asset-disposal-relief/', 'Business Asset Disposal Relief'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Get a fixed quote for your', em: 'business valuation',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Report you can share'],
    formTitle: 'Get your fixed quote', button: 'Get my quote',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.gov.uk/guidance/get-a-share-scheme-valuation-from-hmrc', 'GOV.UK: Get a share scheme valuation from HMRC'],
    ['https://www.gov.uk/government/publications/asset-valuation-request-for-a-share-valuation-val231', 'HMRC: Form VAL231 (EMI share valuation)'],
    ['https://www.gov.uk/government/publications/sav-post-transaction-valuation-checks-for-capital-gains-cg34', 'HMRC: Form CG34 (post-transaction valuation check)'],
    ['https://www.gov.uk/guidance/shares-and-assets-valuations-for-tax', 'GOV.UK: Shares and assets valuations for tax'],
    ['https://www.gov.uk/hmrc-internal-manuals/employee-tax-advantaged-share-scheme-user-manual/etassum51060', 'HMRC manual ETASSUM51060: EMI company limit'],
  ],
};
