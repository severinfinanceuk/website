// Guide: /resources/statutory-registers-explained/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, the Changes to UK company law site and legislation.gov.uk (Companies Act 2006) on 13 October 2026 (sources below).
// Re-check when the Economic Crime and Corporate Transparency Act changes to the register of members (ss.113A, 113B) are commenced.
export default {
  url: '/resources/statutory-registers-explained/',
  section: 'company-services',
  title: 'Statutory Registers Explained | Severin Finance',
  description: 'Since 18 November 2025, companies no longer keep registers of directors or PSCs. Which registers and records you must still keep. Free consultation.',
  h1: 'Statutory registers: what a UK company still has to keep',
  crumb: 'Statutory registers',
  summary: 'Which company registers were abolished in November 2025, and which records you must still keep.',
  topic: 'Statutory registers and company records for UK limited companies',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/company-secretarial-services/', label: 'Our company secretarial service',
    boxTitle: 'Registers out of date?', text: 'We rebuild and keep your register of members, file changes at Companies House and keep your minutes and resolutions in order.',
  },

  hero: {
    answer: 'Since 18 November 2025, a UK company no longer keeps its own registers of directors, directors\' home addresses, secretaries or people with significant control: Companies House holds that information. You must still keep a register of members, copies of charge documents, minutes and resolutions for at least 10 years, and accounting records for 6 years.',
  },

  tldr: [
    'Registers of directors, residential addresses, secretaries and PSCs were <strong>abolished on 18 November 2025</strong>.',
    'You must still keep a <strong>register of members</strong> at the registered office or a single alternative inspection location (SAIL).',
    'The option to keep the members register at Companies House <strong>ended on 26 January 2026</strong>.',
    'Keep minutes and written resolutions for at least <strong>10 years</strong>, and accounting records for <strong>6 years</strong>.',
    'Changes to directors and PSCs still go to Companies House within <strong>14 days</strong>.',
  ],

  sections: [
    {
      id: 'which-registers', h2: 'Which statutory registers does a company still have to keep?', toc: 'Registers you keep',
      body: [
        '<p>Only the register of members, plus an index of members if the company has more than 50. The other registers a company used to keep, for directors, secretaries and PSCs, were abolished on 18 November 2025. Our <a href="/uk/company-services/company-secretarial-services/">company secretarial services</a> team keeps the register of members up to date and files every change at Companies House for you.</p>',
        { caption: 'Statutory registers: what is still required', head: ['Register', 'Still kept by the company?', 'Where the information is now'], rows: [
          ['Register of members (shareholders)', 'Yes', 'Registered office or SAIL'],
          ['Index of members', 'Yes, if more than 50 members and the register is not itself an index', 'With the register of members'],
          ['Register of directors', 'No, since 18 November 2025', 'Companies House'],
          ['Register of directors\' residential addresses', 'No, since 18 November 2025', 'Companies House (not shown publicly)'],
          ['Register of secretaries', 'No, since 18 November 2025', 'Companies House'],
          ['Register of people with significant control (PSCs)', 'No, since 18 November 2025', 'Companies House'],
          ['Register of charges', 'No, for charges created on or after 6 April 2013', 'Companies House, plus copies of the charge documents kept by the company'],
        ], after: 'Source: Companies House, Changes to company registers, and the Companies Act 2006. Checked 13 October 2026.' },
        '<p>The information has not gone away. You must still tell Companies House about changes to directors, secretaries and PSCs within 14 days, and the public record is now the only official list.</p>',
      ],
    },
    {
      id: 'what-changed', h2: 'What did the Economic Crime and Corporate Transparency Act change?', toc: 'What changed',
      body: [
        '<p>It removed four registers from 18 November 2025 and ended the option to keep register information at Companies House instead of at the company. These are the changes in force:</p>',
        { caption: 'Register changes under the Economic Crime and Corporate Transparency Act 2023', head: ['Change', 'From'], rows: [
          ['Companies stop keeping registers of directors, directors\' residential addresses, secretaries and PSCs', '18 November 2025'],
          ['Option to keep director, secretary and PSC information on the central register ends', '18 November 2025'],
          ['Option to keep the register of members on the central register ends', '26 January 2026'],
        ], after: 'Source: Companies House, Changes to company registers.' },
        '<p>If your company had chosen to keep its members register at Companies House, it must now create a full register of members and keep it at its registered office or a SAIL.</p>',
        '<p>The same date brought in identity verification for directors and PSCs, which our guide to <a href="/resources/companies-house-identity-verification/">Companies House identity verification</a> explains.</p>',
        '<h3>What is planned but not yet in force?</h3>',
        '<p>The Act also changes what the register of members must contain, including full names of members, and Companies House plans to collect full shareholder names through the confirmation statement. These parts are not yet in force and no start date has been announced.</p>',
      ],
    },
    {
      id: 'register-of-members', h2: 'What goes in the register of members?', toc: 'Register of members',
      body: [
        '<p>Each member\'s name and address, the date they became a member, the date they stopped being one, and the shares they hold. For a company with shares, the register records the shares by number and, where there is more than one class, by class, and the amount paid or treated as paid on them.</p>',
        '<p>Update it every time shares change hands or new shares are issued. A share allotment must also be reported to Companies House within 1 month. If the company keeps an index of members, the index must be updated within 14 days of a change to the register.</p>',
        '<p>The register of members is the legal record of who owns the company, so it matters at the moments that count: paying dividends, issuing shares to investors, granting share options and selling the business. If the register and the share certificates disagree, buyers and investors will ask why. Our guides to <a href="/resources/emi-share-options/">EMI share options</a> and <a href="/resources/how-to-value-a-business/">valuing a business</a> show where accurate records come in.</p>',
      ],
    },
    {
      id: 'other-records', h2: 'What other company records must you keep?', toc: 'Other records',
      body: [
        '<p>Minutes, resolutions, charge documents, directors\' service contracts and indemnities, and accounting records. These are not registers, but the Companies Act and HMRC still require them.</p>',
        { caption: 'Company records and how long to keep them', head: ['Record', 'How long to keep it', 'Rule'], rows: [
          ['Minutes of general meetings, written resolutions and sole member decisions', 'At least 10 years', 'Companies Act 2006, section 355'],
          ['Minutes of directors\' meetings', 'At least 10 years from the meeting', 'Companies Act 2006, section 248'],
          ['Copies of documents creating or changing a registrable charge', 'Available for inspection', 'Companies Act 2006, section 859P'],
          ['Directors\' service contracts', 'At least 1 year after the contract ends', 'Companies Act 2006, section 228'],
          ['Accounting records and supporting documents', '6 years from the end of the last financial year they relate to', 'GOV.UK, company and accounting records'],
        ], after: 'Keep accounting records longer if HMRC has opened a compliance check, the Company Tax Return was late, or they cover an asset expected to last more than 6 years.' },
        '<p>Loans secured on company assets must also be registered at Companies House within 21 days, beginning the day after the charge is created. If not, the charge is void against a liquidator, administrator or other creditors, and the loan becomes unsecured. HMRC can fine a company £3,000 for not keeping proper accounting records.</p>',
      ],
    },
    {
      id: 'where-kept', h2: 'Where must the register be kept, and who can see it?', toc: 'Where and who sees it',
      body: [
        '<p>At the registered office, or at a single alternative inspection location (SAIL) that you have notified to Companies House. You can keep it on paper or electronically, as long as an electronic register can be reproduced in hard copy.</p>',
        '<p>Members can inspect the register of members free of charge. Anyone else can inspect it, or ask for a copy, on paying a fee set by regulations. A request must give the person\'s name and address, the purpose the information will be used for, and whether it will be passed to anyone else.</p>',
        '<p>The company must comply within 5 working days, or apply to the court within that time if it thinks the request is not for a proper purpose. If the court agrees, it can order the company not to comply.</p>',
      ],
    },
    {
      id: 'penalties', h2: 'What happens if the registers are not kept properly?', toc: 'Penalties',
      body: [
        '<p>Failing to keep the required records is an offence by every officer of the company in default, punishable by a fine, with daily default fines while it continues. In practice, the bigger cost is usually delay: a lender, investor or buyer who finds gaps in the register will want them fixed first.</p>',
        '<p>A quick yearly check, done before you file the confirmation statement, keeps most companies in order:</p>',
        '<ul><li>Does the register of members match the share certificates and the shareholders on your confirmation statement?</li><li>Have all director and PSC changes been filed at Companies House within 14 days?</li><li>Are board minutes and written resolutions filed for every dividend and share issue?</li><li>Is the register at the registered office or the notified SAIL?</li></ul>',
        '<p>Our <a href="/resources/confirmation-statement-guide/">confirmation statement guide</a> explains what to check before you file.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do I still need a register of directors?', a: 'No. Since 18 November 2025, companies no longer keep their own registers of directors, directors\' residential addresses or secretaries. Companies House holds that information, so you must tell it about any appointment, resignation or change of details within 14 days.' },
    { q: 'Do I still need a PSC register?', a: 'No, not since 18 November 2025. You must still identify your people with significant control and report them, and any changes, to Companies House within 14 days. Companies House now holds the only official record.' },
    { q: 'Can I keep the register of members at Companies House?', a: 'Not any more. That option ended on 26 January 2026. Companies that used it must create a full register of members and keep it at their registered office or a single alternative inspection location.' },
    { q: 'Can I keep statutory registers electronically?', a: 'Yes. The register of members can be kept on paper or electronically, as long as an electronic register can be reproduced in hard copy for inspection at the registered office or the notified alternative location.' },
    { q: 'How long must I keep board minutes?', a: 'At least 10 years from the date of the meeting. The same applies to minutes of general meetings and written resolutions of members, which are kept for at least 10 years from the date they were passed.' },
  ],

  sources: [
    ['https://changestoukcompanylaw.campaign.gov.uk/changes-to-company-registers/', 'Companies House: Changes to company registers'],
    ['https://www.gov.uk/running-a-limited-company/company-and-accounting-records', 'GOV.UK: Company and accounting records'],
    ['https://www.legislation.gov.uk/ukpga/2006/46/section/113', 'Companies Act 2006, section 113: Register of members'],
    ['https://www.legislation.gov.uk/ukpga/2006/46/section/116', 'Companies Act 2006, section 116: Rights to inspect'],
    ['https://www.legislation.gov.uk/ukpga/2006/46/section/355', 'Companies Act 2006, section 355: Records of resolutions and meetings'],
    ['https://www.legislation.gov.uk/ukpga/2006/46/section/859P', 'Companies Act 2006, section 859P: Copies of charge documents'],
    ['https://changestoukcompanylaw.campaign.gov.uk/confirmation-statement-changes/', 'Companies House: Confirmation statement changes'],
  ],

  related: [
    '/resources/confirmation-statement-guide/',
    '/resources/companies-house-identity-verification/',
    '/resources/emi-share-options/',
    '/resources/how-to-value-a-business/',
  ],
};
