// Accountants in Islington: all copy, local facts and SEO for one London area page.
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: Islington Council (small business rate relief, BID ballots, Late Night Levy),
// GOV.UK (multipliers), GLA (Crossrail BRS). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/islington/accountants-islington-regents-canal.jpg';
import cafe from '../../assets/locations/islington/accountants-islington-cafe-islington-high-street.jpg';
import studios from '../../assets/locations/islington/accountants-islington-warehouse-offices.jpg';
import terrace from '../../assets/locations/islington/accountants-islington-georgian-terrace.jpg';
import basin from '../../assets/locations/islington/accountants-islington-city-road-basin.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/islington/',
  primaryKeyword: 'accountants in Islington',
  secondaryKeywords: [
    'accountant Islington', 'accountants Angel', 'accountants Clerkenwell',
    'tax accountant Islington', 'Islington business rates', 'small business rate relief Islington',
    'Islington late night levy', 'freelance accountant N1',
  ],
  title: 'Accountants in Islington | Severin Finance',
  description: 'Accountants in Islington for self assessment, company accounts, VAT and payroll, from Angel to Clerkenwell and Highbury. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Islington', '/uk/london/islington/'],
  ],
  place: { type: 'AdministrativeArea', name: 'London Borough of Islington', wikidata: 'Q205817', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Islington', serviceType: 'Accounting, tax and business finance services' },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'London · Angel, Clerkenwell, Highbury',
    h1: 'Accountants in Islington',
    answer: 'Our accountants in Islington handle tax returns, company accounts, VAT and payroll for freelancers, agencies, cafés and landlords billed by Islington Council. A business with one property at £12,000 rateable value or less pays no business rates here, and late-opening bars may owe the Late Night Levy. We check both.',
    image: hero,
    imageAlt: 'Narrowboats moored on Regent’s Canal in Islington, with willow trees and terraced houses',
    chip: 'London Borough of Islington',
    card: { label: 'Angel BID ballot', value: '20 Nov 2026', note: 'Result day for the Angel Islington BID renewal' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Clients across Islington and abroad' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Islington facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Islington client mix) ----------
  who: {
    eyebrow: 'Who we help in Islington',
    h2: 'Freelancers, agencies, cafés and landlords in Islington',
    intro: 'Islington packs a lot into a small borough: the restaurants of Upper Street, the studios of Clerkenwell, the offices near Old Street and streets of converted terraces. Our clients here fall into four groups.',
    cards: [
      {
        img: cafe, alt: 'People at outdoor tables of a café on Islington High Street on a sunny day',
        tag: 'Hospitality', title: 'Cafés, restaurants and late bars',
        text: 'Bookkeeping, VAT and payroll for cafés, restaurants and pubs around Angel and Upper Street, including the Late Night Levy if you sell alcohol after midnight.',
        link: ['/uk/accounting/bookkeeping-services/', 'Bookkeeping'],
      },
      {
        img: studios, alt: 'Brick warehouse converted to offices with green glass windows beside the canal in Islington',
        tag: 'Agencies', title: 'Creative agencies and studios',
        text: 'Company accounts, corporation tax and dividend planning for design, media and marketing firms in Clerkenwell, Angel and around Old Street.',
        link: ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      },
      {
        img: terrace, alt: 'Brick terraced houses with brightly painted front doors on an Islington street',
        tag: 'Property', title: 'Landlords with Islington flats',
        text: 'Rental accounts, Making Tax Digital for income tax and capital gains planning for owners of flats in converted terraces and mansion blocks.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
      {
        img: basin, alt: 'City Road Basin in Islington with a brick chimney and new towers towards Old Street',
        tag: 'Freelancers', title: 'Freelancers and contractors',
        text: 'Self assessment, IR35 reviews and limited company set-up for developers, writers and consultants who work from home or a desk near City Road.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Islington ----------
  services: {
    eyebrow: 'Services in Islington',
    h2: 'What Islington clients ask us for most',
    intro: 'Everything is done online, so it makes no difference whether you work in Archway or Farringdon. Each card goes to the full service page.',
    items: [
      { title: 'Self assessment', text: 'Tax returns for Islington freelancers, directors and landlords, filed well before the 31 January deadline.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Contractor accounts', text: 'Limited company accounts, IR35 checks and pay planning for contractors working for City and tech clients.', href: '/uk/accounting/contractor-accountant/' },
      { title: 'Limited company accounts', text: 'Annual accounts, corporation tax and Companies House filings for agencies and studios in Clerkenwell and Angel.', href: '/uk/accounting/limited-company-accountant/' },
      { title: 'VAT returns', text: 'Registration, scheme choice and quarterly returns for restaurants and cafés with mixed eat-in and takeaway sales.', href: '/uk/tax/vat-accountant/' },
      { title: 'Payroll', text: 'Payroll for hospitality staff on shifts, set up for the £12.71 National Living Wage from April 2026.', href: '/uk/accounting/payroll-services/' },
      { title: 'Landlords and property', text: 'Rental accounts and Making Tax Digital for landlords with one Islington flat or several.', href: '/uk/accounting/landlord-accountant/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Islington) ----------
  facts: {
    eyebrow: 'Islington facts',
    h2: 'Rates relief, BIDs and the Late Night Levy',
    intro: 'Islington Council sends business rates bills for the borough and runs its own Late Night Levy on licensed premises. Figures for 2026-27.',
    tables: [
      {
        caption: 'Business rates in Islington, 2026-27',
        head: ['Item', 'Amount'],
        rows: [
          ['Small business rate relief (one property)', '100% at RV £12,000 or less, tapering to nil at £15,000'],
          ['Second property taken on from 27 November 2025', 'Relief on the main property kept for 3 years'],
          ['Small business multiplier (RV under £51,000)', '43.2p per £1 (38.2p for retail, hospitality and leisure)'],
          ['Standard multiplier (RV £51,000 to £499,999)', '48.0p per £1 (43.0p for retail, hospitality and leisure)'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on RV over £92,000'],
        ],
        after: 'You can keep small business relief with more than one property if each extra property has an RV of £2,899 or less, or all of them together come to £28,000 or less. A second property taken on before 27 November 2025 keeps relief for 12 months only.',
      },
      {
        caption: 'Late Night Levy and BIDs in Islington',
        head: ['Item', 'Detail'],
        rows: [
          ['Late Night Levy', '£299 to £4,400 a year, for premises selling alcohol between 00:01 and 06:00'],
          ['Best Practice Scheme members', '30% off the levy'],
          ['Angel Islington BID ballot', 'Papers from 20 October 2026, vote by 5pm on 19 November 2026'],
          ['Angel Islington BID result', '20 November 2026'],
          ['Clerkenwell and Farringdon BID', 'Change to the BID approved on 27 February 2025'],
        ],
        after: 'The levy is paid with your annual premises licence fee. The amount depends on your rateable value and whether you sell alcohol for drinking on the premises.',
      },
    ],
    urgent: {
      title: 'Angel BID voting closes on 19 November 2026',
      text: 'If you pay rates in the Angel BID area, your ballot paper is due from 20 October. Before you vote, we can show what the levy and your 2026-27 rates bill mean for your cash flow.',
      cta: 'Get a rates check',
    },
  },

  // ---------- 6. How we work with Islington clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Islington clients',
    steps: [
      { title: 'Free consultation', text: 'A call or video meeting about your work, your income and your deadlines. No charge and no obligation.' },
      { title: 'Fixed fee in writing', text: 'You see the scope and the exact fee before we start. Freelancers and restaurants alike know the cost upfront.' },
      { title: 'We do the work', text: 'Upload receipts and bank feeds online or connect Xero or QuickBooks. We prepare, file and remind you of every date.' },
    ],
    meet: {
      title: 'Meeting us in Islington',
      text: 'Most Islington clients work with us by video, phone and secure upload, which suits freelancers who work from home and owners who cannot leave the shop floor.',
      items: [
        'Video calls on the platform you already use',
        'Secure upload and Xero or QuickBooks access',
        'One named contact for your account',
        { text: 'Islington meeting place to confirm', tbc: true },
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
    text: 'This page was checked against Islington Council, GOV.UK and Greater London Authority sources. Reliefs, levies and ballot dates change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Islington clients',
  faqs: [
    { q: 'Who sends the business rates bill in Islington?', a: 'Islington Council sends business rates bills for the whole borough, from Archway and Highbury to Angel, Clerkenwell and Farringdon. Bills for 2026-27 went out from mid-April. The Crossrail supplement, if it applies, is on the same bill.' },
    { q: 'Do I qualify for small business rate relief in Islington?', a: 'If your only property has a rateable value of £12,000 or less, you pay no business rates. Between £12,001 and £15,000 the relief tapers down to nothing. You can check your rateable value on the GOV.UK valuation service and we can check the bill for you.' },
    { q: 'What is the Islington Late Night Levy?', a: 'It is a yearly charge on licensed premises that sell alcohol between 00:01 and 06:00. It ranges from £299 to £4,400 depending on rateable value and on-sales, and is paid with the premises licence fee. Members of the Best Practice Scheme get 30% off.' },
    { q: 'When is the Angel Islington BID ballot?', a: 'Ballot papers go out on 20 October 2026 and must be returned by 5pm on 19 November 2026. The result is due on 20 November 2026. If the renewal passes, eligible businesses in the BID area keep paying the levy with their rates.' },
    { q: 'Should an Islington freelancer be a sole trader or a limited company?', a: 'It depends on your profit, your clients and IR35. A limited company can save tax at higher profits but adds accounts, payroll and Companies House filings. We run both options with your real figures in the free consultation.' },
    { q: 'Do I need to meet my accountant in person?', a: 'No. Our Islington clients work with us by video call, phone and secure upload, and we connect to Xero or QuickBooks where you use them. You get one named contact who knows your figures.' },
    { q: 'How much does an accountant cost in Islington?', a: 'Our fixed fees start at £XXX for a personal tax return and £XXX a month for a small limited company. The exact fee depends on your income and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services in Islington', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/accounting/limited-company-accountant/', 'Limited company accountant'],
      ['/uk/tax/vat-accountant/', 'VAT accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
    ] },
    { title: 'Near Islington', links: [
      ['/uk/london/camden/', 'Accountants in Camden'],
      ['/uk/london/shoreditch/', 'Accountants in Shoreditch'],
      ['/uk/london/city-of-london/', 'Accountants in the City of London'],
      ['/uk/london/westminster/', 'Accountants in Westminster'],
      ['/uk/london/', 'Accountants in London'],
      ['/locations/', 'All locations'],
    ] },
    { title: 'Clients abroad', links: [
      ['/cross-border/non-resident-uk-tax/', 'Non-resident UK tax'],
      ['/cross-border/uk-company-from-abroad/', 'Running a UK company from abroad'],
    ] },
  ],

  // ---------- 10. Closing CTA + form ----------
  outro: {
    h2: 'Talk to our', em: 'Islington accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Angel, Clerkenwell and Highbury'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://www.islington.gov.uk/business/business-rates/rates-reduction-and-relief/small-business-rate-relief', 'Islington Council: Small business rate relief'],
    ['https://www.islington.gov.uk/business/licences-permits-registration/alcohol-and-entertainment-licences/late-night-levy-scheme', 'Islington Council: Late Night Levy'],
    ['https://www.islington.gov.uk/about-the-council/voting-and-elections/election-results/business-improvement-district-ballots', 'Islington Council: Business Improvement District ballots'],
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
  ],
};
