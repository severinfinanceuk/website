// Accountants in Canary Wharf: all copy, local facts and SEO for one location page (Isle of Dogs, Tower Hamlets).
// The layout (src/layouts/LocationPage.astro) turns this into the page. Every location page
// uses the same keys. See docs/02-location-pages-plan.md (no doorway pages: real local facts only).
//
// tbc: true = placeholder until Severin confirms it (shown in yellow, left out of schema).
// Facts checked on 13 October 2026: GLA (Isle of Dogs and South Poplar pen portrait, Crossrail BRS),
// Tower Hamlets Council (business rates), GOV.UK (income tax rates, IR35, Non-Resident Landlord Scheme). Sources at the bottom.

import { rating } from '../reviews.js';
import hero from '../../assets/locations/canary-wharf/accountants-canary-wharf-skyline-thames.jpg';
import towers from '../../assets/locations/canary-wharf/accountants-canary-wharf-office-towers.jpg';
import station from '../../assets/locations/canary-wharf/accountants-canary-wharf-station-escalators.jpg';
import crossrail from '../../assets/locations/canary-wharf/accountants-canary-wharf-crossrail-place.jpg';
import dock from '../../assets/locations/canary-wharf/accountants-canary-wharf-dock-towers.jpg';

export default {
  // ---------- SEO ----------
  url: '/uk/london/canary-wharf/',
  primaryKeyword: 'accountants in Canary Wharf',
  secondaryKeywords: [
    'accountant Canary Wharf', 'tax accountant Canary Wharf', 'contractor accountant Canary Wharf',
    'accountants Isle of Dogs', 'accountants Docklands', 'self assessment Canary Wharf',
    'accountants E14', 'accountants Tower Hamlets',
  ],
  title: 'Accountants in Canary Wharf | Severin Finance',
  description: 'Accountants in Canary Wharf for self assessment, contractor accounts, landlords and start-ups on the Isle of Dogs. Book a free consultation.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  breadcrumb: [
    ['Home', '/'],
    ['United Kingdom', '/uk/'],
    ['London', '/uk/london/'],
    ['Canary Wharf', '/uk/london/canary-wharf/'],
  ],
  place: { type: 'Place', name: 'Canary Wharf', wikidata: 'Q124377', containedIn: ['City', 'London'] },
  service: { name: 'Accountants in Canary Wharf', serviceType: 'Accounting, bookkeeping, payroll and tax services' },
  formTopic: 'Personal tax / self assessment',

  // ---------- 1. Hero ----------
  hero: {
    eyebrow: 'Canary Wharf · Isle of Dogs, Tower Hamlets',
    h1: 'Accountants in Canary Wharf',
    answer: 'Our accountants in Canary Wharf handle self assessment, contractor accounts and company tax for people who work on the Isle of Dogs and the firms around them. The Isle of Dogs and South Poplar area had 180,000 jobs in 2023, more than half of all jobs in Tower Hamlets.',
    image: hero,
    imageAlt: 'Aerial view of the Canary Wharf towers across the River Thames',
    chip: 'Tower Hamlets',
    card: { label: 'Jobs on the Isle of Dogs', value: '180,000', note: 'Isle of Dogs and South Poplar, 2023 (GLA)' },
    cta: 'Book a free consultation',
    trust: [
      { text: 'Fixed fees agreed upfront' },
      { text: rating.short, tbc: rating.tbc },
      { text: 'Calls before and after work' },
    ],
  },

  jump: [
    ['who', 'Who we help'],
    ['services', 'Services'],
    ['facts', 'Canary Wharf facts'],
    ['how', 'How we work'],
    ['faq', 'FAQ'],
  ],

  // ---------- 2. Who we help here (the Canary Wharf client mix) ----------
  who: {
    eyebrow: 'Who we help in Canary Wharf',
    h2: 'High earners, contractors, founders and Docklands landlords',
    intro: 'Canary Wharf is a privately run estate of banks, professional firms and newer tech and life science tenants, with thousands of flats around the docks. Our clients here fall into four groups.',
    cards: [
      {
        img: towers, alt: 'Glass office towers at Canary Wharf seen from street level',
        tag: 'High earners', title: 'Bankers and senior staff',
        text: 'Tax returns for salaries, bonuses and share awards. Once income passes £100,000 the personal allowance shrinks by £1 for every £2, and it is gone at £125,140. We plan pension and gift aid timing around that.',
        link: ['/uk/tax/self-assessment-accountant/', 'Self assessment'],
      },
      {
        img: station, alt: 'Escalators and glass canopy at Canary Wharf Underground station',
        tag: 'Contractors', title: 'Contractors on bank programmes',
        text: 'Limited company accounts, dividends and IR35 reviews for IT, data and change contractors. Large clients decide your status and must give you a status determination statement with their reasons.',
        link: ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      },
      {
        img: crossrail, alt: 'Walkway and sign at Crossrail Place in Canary Wharf',
        tag: 'Start-ups', title: 'Fintech and life science founders',
        text: 'Company set-up, SEIS and EIS advance assurance and investor-ready accounts for start-ups, as the estate adds lab and tech space such as One North Quay.',
        link: ['/uk/company-services/eis-seis/', 'EIS and SEIS'],
      },
      {
        img: dock, alt: 'Office and apartment towers beside a dock in Canary Wharf with a DLR train',
        tag: 'Property', title: 'Docklands flat landlords',
        text: 'Rental accounts, Making Tax Digital and capital gains for owners of flats around the docks and in new schemes such as Wood Wharf, including landlords who now live abroad.',
        link: ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      },
    ],
  },

  // ---------- 3. Services most searched in Canary Wharf ----------
  services: {
    eyebrow: 'Services in Canary Wharf',
    h2: 'What Canary Wharf clients ask us for most',
    intro: 'Everything is done online, so long office hours are no obstacle. Each card goes to the full service page.',
    items: [
      { title: 'Self assessment', text: 'Returns for employees with bonuses, share schemes, rental income or income over £100,000, filed before 31 January.', href: '/uk/tax/self-assessment-accountant/' },
      { title: 'Contractor accounts', text: 'Fixed-fee accounts, payroll and dividends for contractors placed with Canary Wharf banks and consultancies.', href: '/uk/accounting/contractor-accountant/' },
      { title: 'Capital gains tax', text: 'Gains on vested shares, sold investments and Docklands flats, with the right reports to HMRC.', href: '/uk/tax/capital-gains-tax-accountant/' },
      { title: 'Landlord accounts', text: 'Rental accounts and Making Tax Digital for Isle of Dogs and Poplar flat owners.', href: '/uk/accounting/landlord-accountant/' },
      { title: 'EIS and SEIS', text: 'Advance assurance and compliance statements for fintech and life science start-ups raising their first rounds.', href: '/uk/company-services/eis-seis/' },
      { title: 'Company formation', text: 'New limited companies for contractors and founders, set up with the right share structure from day one.', href: '/uk/company-services/company-formation/' },
    ],
  },

  // ---------- 4. Local key facts (what is different in Canary Wharf) ----------
  facts: {
    eyebrow: 'Canary Wharf facts',
    h2: 'Canary Wharf and the Isle of Dogs in numbers',
    intro: 'The Greater London Authority treats the Isle of Dogs and South Poplar as one Opportunity Area. These are its figures, with the tax bands that matter most to people working here in 2026-27.',
    tables: [
      {
        caption: 'Isle of Dogs and South Poplar Opportunity Area',
        head: ['Item', 'Figure'],
        rows: [
          ['Jobs in the area (2023)', '180,000, or 54% of the 335,000 jobs in Tower Hamlets'],
          ['New jobs planned by 2041 (London Plan)', '110,000'],
          ['New homes planned by 2041 (London Plan)', '29,000'],
          ['Council that sends business rates bills', 'Tower Hamlets Council'],
          ['Crossrail Business Rate Supplement', '2p per £1, only on rateable values over £92,000'],
        ],
        after: 'Larger offices can pass the £92,000 Crossrail threshold, while smaller shops and units often stay below it. Check the rateable value on your bill. ULEZ applies across London, including the Isle of Dogs.',
      },
      {
        caption: 'Income tax bands, 2026-27',
        head: ['Band', 'Rate'],
        rows: [
          ['Personal allowance, up to £12,570', '0%'],
          ['Basic rate, £12,571 to £50,270', '20%'],
          ['Higher rate, £50,271 to £125,140', '40%'],
          ['Additional rate, over £125,140', '45%'],
          ['Personal allowance taper', 'Falls £1 for every £2 of income over £100,000'],
        ],
        after: 'Between £100,000 and £125,140 the taper means you pay tax on income you thought was tax-free. Pension contributions can bring income back below £100,000.',
      },
    ],
    urgent: {
      title: 'A bonus can cost you your personal allowance',
      text: 'A bonus that lifts income over £100,000 starts to remove your £12,570 allowance. We look at your pay, bonus and pension before the payment date, not after the tax year ends.',
      cta: 'Plan your bonus tax',
    },
  },

  // ---------- 6. How we work with Canary Wharf clients ----------
  how: {
    eyebrow: 'How we work',
    h2: 'How we work with Canary Wharf clients',
    steps: [
      { title: 'Free consultation', text: 'A short call or video meeting about your pay, your contract or your company, booked around your working day.' },
      { title: 'Fixed fee in writing', text: 'You get the scope and the exact fee before we start. A tax return with share awards or rental income is priced upfront.' },
      { title: 'We do the work', text: 'Send your P60, payslips and share statements through secure upload. We prepare, check and file, and tell you what to pay and when.' },
    ],
    meet: {
      title: 'Meeting us in Canary Wharf',
      text: 'Most Canary Wharf clients speak to us by video at lunchtime or after work. There is no need to take time out of the office.',
      items: [
        'Early, lunchtime and evening video calls',
        'Secure upload for payslips and share statements',
        'One named contact for your account',
        'Meet us at 107-111 Fleet Street, EC4A 2AB, by appointment',
      ],
    },
  },

  // ---------- 7. Proof: reviews are shared (src/data/reviews.js); reviewed by is per page ----------
  reviewer: {
    name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
    credentials: { text: 'CIMA member in practice, MBA (Cass Business School)' },
    text: 'This page was checked against Greater London Authority, Tower Hamlets Council and GOV.UK sources. Tax bands and local figures change: we update the page when they do.',
  },

  // ---------- 8. FAQ (local questions) ----------
  faqTitle: 'Questions from Canary Wharf clients',
  faqs: [
    { q: 'Which council covers Canary Wharf?', a: 'Canary Wharf is in the London Borough of Tower Hamlets. Tower Hamlets Council sends the business rates bills for offices, shops and restaurants on the estate. The Crossrail supplement is added to the same bill when the rateable value is over £92,000.' },
    { q: 'What is the £100,000 tax trap?', a: 'Your £12,570 personal allowance falls by £1 for every £2 of income over £100,000 and disappears at £125,140. Income in that band is taxed far more heavily than the 40% headline rate. Pension contributions and gift aid can reduce the income that counts.' },
    { q: 'Do I need a tax return if I am paid through PAYE?', a: 'Often yes, for Canary Wharf staff. You may need one for share awards you sell, rental income, investment gains or the High Income Child Benefit Charge. We check what HMRC needs from you and file before 31 January.' },
    { q: 'Who decides my IR35 status at a Canary Wharf bank?', a: 'A medium or large client decides, not you. It must give you a status determination statement that sets out its reasons. We review the contract and how you actually work, and help you raise a disagreement if you think the decision is wrong.' },
    { q: 'I rent out a Docklands flat and live abroad. What do I need to do?', a: 'Your letting agent, or a tenant paying more than £100 a week, must deduct basic rate tax under the Non-Resident Landlord Scheme. HMRC can approve you in writing to receive rent in full. You still file a UK tax return. We handle both.' },
    { q: 'Does Making Tax Digital apply to my rental income?', a: 'It depends on your qualifying income. It applied from 6 April 2026 above £50,000, extends to £30,000 from 6 April 2027 and to £20,000 from 6 April 2028. We tell you which date applies to you and set up the software.' },
    { q: 'How much does an accountant cost in Canary Wharf?', a: 'Our fixed fees start at £XXX for a personal tax return and £XXX a month for a contractor company. The exact fee depends on your income sources and records, and you get it in writing after a free consultation.', tbc: true },
  ],

  // ---------- 9. Related links (internal linking) ----------
  related: [
    { title: 'Popular services', links: [
      ['/uk/tax/self-assessment-accountant/', 'Self assessment accountant'],
      ['/uk/accounting/contractor-accountant/', 'Contractor accountant'],
      ['/uk/tax/capital-gains-tax-accountant/', 'Capital gains tax accountant'],
      ['/uk/accounting/landlord-accountant/', 'Landlord accountant'],
      ['/uk/tax/making-tax-digital-accountant/', 'Making Tax Digital accountant'],
    ] },
    { title: 'Nearby areas', links: [
      ['/uk/london/city-of-london/', 'Accountants in the City of London'],
      ['/uk/london/stratford/', 'Accountants in Stratford'],
      ['/uk/london/shoreditch/', 'Accountants in Shoreditch'],
      ['/uk/london/islington/', 'Accountants in Islington'],
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
    h2: 'Talk to our', em: 'Canary Wharf accountants',
    pills: ['Free first consultation', 'Fixed fee in writing', 'Calls around your working day'],
    formTitle: 'Book your free consultation', button: 'Send request',
  },

  // ---------- Sources (shown on the page, E-E-A-T) ----------
  sources: [
    ['https://data.london.gov.uk/download/opportunity-area-pen-portraits/1a90d33c-6c32-4e61-bd30-9e37cfe1f9de/2025_Isle_of_Dogs_Pen_Portrait.pdf', 'Greater London Authority: Isle of Dogs and South Poplar Opportunity Area pen portrait (2025)'],
    ['https://www.towerhamlets.gov.uk/lgnl/business/business_rates/business_rates.aspx', 'Tower Hamlets Council: Business rates'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
    ['https://www.gov.uk/income-tax-rates', 'GOV.UK: Income tax rates and allowances'],
    ['https://www.gov.uk/guidance/understanding-off-payroll-working-ir35', 'GOV.UK: Understanding off-payroll working (IR35)'],
    ['https://www.gov.uk/guidance/paying-tax-on-rent-to-landlords-abroad', 'GOV.UK: Paying tax on rent to landlords abroad'],
    ['https://www.gov.uk/guidance/check-if-youre-eligible-for-making-tax-digital-for-income-tax', 'GOV.UK: Making Tax Digital for Income Tax'],
  ],
};
