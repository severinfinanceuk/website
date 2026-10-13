// Guide: /resources/confirmation-statement-guide/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK, Companies House guidance and the Changes to UK company law site on 13 October 2026 (sources below).
// Re-check the fee each February (Companies House reviews fees yearly) and the identity verification rules.
export default {
  url: '/resources/confirmation-statement-guide/',
  section: 'company-services',
  title: 'Confirmation Statement Fee and Deadline | Severin Finance',
  description: 'A confirmation statement costs £50 online or £110 on paper and is due within 14 days of your review period ending. What to check first. Free consultation.',
  h1: 'Confirmation statement: fee, deadline and what to check',
  crumb: 'Confirmation statement',
  summary: 'The £50 fee, the 14-day deadline, what you confirm and what happens if you do not file.',
  topic: 'Companies House confirmation statement',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/company-services/company-secretarial-services/', label: 'Our company secretarial service',
    boxTitle: 'Want it filed for you?', text: 'We check your company\'s details, make sure every director has verified, and file the confirmation statement before the deadline.',
  },

  hero: {
    answer: 'A confirmation statement tells Companies House that the information it holds about your company is correct. You file one at least every 12 months, within 14 days after your review period ends. It costs £50 online or £110 on paper. It must include a registered email address, a lawful purpose statement and every director\'s personal code.',
  },

  tldr: [
    'File at least once every <strong>12 months</strong>, within <strong>14 days</strong> after the review period ends.',
    'The fee is <strong>£50 online</strong> or <strong>£110 on paper</strong> (from 1 February 2026), once per payment period.',
    'You must file even if nothing has changed, and even if the company is <strong>dormant</strong>.',
    'Every director must have <strong>verified their identity</strong> and given a personal code, or the statement is rejected.',
    'Not filing can mean a fine of up to <strong>£5,000</strong> and the company being <strong>struck off</strong>.',
  ],

  sections: [
    {
      id: 'what-it-is', h2: 'What is a confirmation statement?', toc: 'What it is',
      body: [
        '<p>It is a yearly check that the details Companies House holds about your company are up to date, filed by every company, including dormant and non-trading ones. It replaced the old annual return (form AR01). Our <a href="/uk/company-services/company-secretarial-services/">company secretarial services</a> team prepares and files it for you and tracks the date each year.</p>',
        '<p>It is separate from your annual accounts and your Company Tax Return, which have their own deadlines. It does not contain any figures from the accounts. Our guide to <a href="/resources/limited-company-deadlines/">limited company deadlines</a> sets out all of them in one place.</p>',
        '<p>You file it online through the Companies House service, using the company\'s authentication code, or on paper with form CS01. Most companies file online: it is cheaper and Companies House processes it faster.</p>',
      ],
    },
    {
      id: 'due-date', h2: 'When is the confirmation statement due?', toc: 'Due date',
      body: [
        '<p>Within 14 days after the end of your review period. The first review period ends 12 months after the company was incorporated. Each later one ends 12 months after the confirmation statement date on your last statement.</p>',
        { caption: 'How the dates work (illustrative)', head: ['Step', 'Date'], rows: [
          ['Confirmation statement date (end of the review period)', '31 March 2026'],
          ['Last day to file', '14 April 2026'],
          ['Next review period starts', '1 April 2026'],
          ['Next confirmation statement date', '31 March 2027'],
        ], after: 'Source: Companies House, Filing your company\'s confirmation statement. Checked 13 October 2026.' },
        '<p>You can file early. If you do, you choose a new confirmation statement date, and the next review period starts the day after it. Some companies file early to line the date up with their accounts, or to update the public record after a change of shareholders.</p>',
        '<p>Your next confirmation date and deadline are shown on the company\'s page on the Companies House register. You can also sign up for email reminders.</p>',
      ],
    },
    {
      id: 'fee', h2: 'How much does a confirmation statement cost?', toc: 'The fee',
      body: [
        '<p>£50 online or through software, and £110 on paper. The fees rose on 1 February 2026, when the online fee went up from £34.</p>',
        { caption: 'Confirmation statement fees (from 1 February 2026)', head: ['How you file', 'Fee'], rows: [
          ['Online, through the Companies House service', '£50'],
          ['Through filing software', '£50'],
          ['On paper (form CS01)', '£110'],
        ], after: 'Source: Companies House fees, GOV.UK. Companies House reviews its fees every year.' },
        '<p>You pay once in each 12-month payment period, with the first statement you file in that period. The payment period is not the same as the review period. It runs for 12 months from incorporation (or, for older companies, from the anniversary of the last annual return date) and cannot be changed. A second statement filed in the same payment period, for example after a change of shareholders, is free.</p>',
      ],
    },
    {
      id: 'what-it-confirms', h2: 'What does a confirmation statement confirm?', toc: 'What it confirms',
      body: [
        '<p>That the company\'s officers, PSCs, addresses and share details on the register are correct. Some changes must be filed separately before you file the statement; others can be made in the statement itself.</p>',
        { caption: 'What to check, and how to update it', head: ['Information', 'How to update it'], rows: [
          ['Directors and company secretary', 'Separate filing first (due within 14 days of the change)'],
          ['People with significant control (PSCs)', 'Separate filing first (due within 14 days of the change)'],
          ['Registered office address', 'Separate filing first'],
          ['Registered email address', 'Separate filing first, or give one in the statement if you never have'],
          ['SIC codes (what the company does)', 'In the confirmation statement'],
          ['Statement of capital', 'In the confirmation statement'],
          ['Shareholders and trading status of shares', 'In the confirmation statement'],
          ['Exemption from keeping PSC information', 'In the confirmation statement'],
        ], after: 'Source: Companies House, Filing your company\'s confirmation statement. New shares must still be reported within 1 month of allotment, not left for the statement.' },
        '<p>The shareholder details you confirm should match your register of members, which the company still keeps itself. Our guide to <a href="/resources/statutory-registers-explained/">statutory registers</a> explains what it must contain.</p>',
        '<p>More is planned. Companies House will ask every company to give the full names of all its shareholders, and a complete shareholder list once, in a confirmation statement. These measures are not yet in force, and Companies House says it will announce the start date.</p>',
      ],
    },
    {
      id: 'lawful-purpose-email', h2: 'What are the lawful purpose statement and registered email address?', toc: 'Lawful purpose and email',
      body: [
        '<p>Both have been part of the confirmation statement since March 2024, under the Economic Crime and Corporate Transparency Act. You cannot file the statement without them.</p>',
        '<h3>Lawful purpose statement</h3>',
        '<p>Each time you file, the company confirms that its intended future activities are lawful. It is a simple tick, but it is a formal statement to the registrar, so a director should only make it if it is true.</p>',
        '<h3>Registered email address</h3>',
        '<p>Every company must give Companies House one registered email address. It must be an "appropriate" address: one where emails from Companies House would normally come to the attention of someone acting for the company. It is not shown on the public register. Use an inbox someone checks, not a former director\'s address, because Companies House uses it for reminders and notices.</p>',
      ],
    },
    {
      id: 'identity-verification', h2: 'Why would Companies House reject a confirmation statement?', toc: 'Identity checks',
      body: [
        '<p>Usually because a director has not verified their identity. Since 18 November 2025, the statement must include each director\'s Companies House personal code and confirm that they have verified, and Companies House will not accept it until every director has done so.</p>',
        '<p>So start early. Each director verifies once, through GOV.UK One Login or an Authorised Corporate Service Provider, and gets an 11-character code. A director who is also a person with significant control gives the code again in their PSC role, within 14 days starting the day after the confirmation statement date. Our guide to <a href="/resources/companies-house-identity-verification/">Companies House identity verification</a> sets out every route and deadline.</p>',
        '<p>Other common reasons for delay are a missing registered email address, a lost authentication code (Companies House posts a new one to the registered office) and director or PSC changes that were never filed.</p>',
      ],
    },
    {
      id: 'penalties', h2: 'What happens if you do not file a confirmation statement?', toc: 'Penalties and strike-off',
      body: [
        '<p>Not filing is taken seriously: you can be fined up to £5,000, Companies House can issue a financial penalty, and the company may be struck off the register. The directors are responsible, even if someone else usually files for them.</p>',
        '<ul><li><strong>File as soon as you can.</strong> There is no grace period after the 14 days.</li><li><strong>Verify first.</strong> If a director has not verified, that is the first job, because the filing will be rejected without it.</li><li><strong>If the company has been struck off</strong> and is restored, it must file a paper CS01 using the confirmation date that was due before it was struck off.</li></ul>',
        '<p>If directors live abroad, the same rules and deadlines apply. Our <a href="/cross-border/uk-company-from-abroad/">UK company from abroad</a> service keeps the filings on time wherever you are.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Do dormant companies need to file a confirmation statement?', a: 'Yes. Every company must file one at least once every 12 months, including dormant and non-trading companies, and pay the £50 online fee. Dormant companies must also file annual accounts.' },
    { q: 'Can I file my confirmation statement early?', a: 'Yes. You do not have to wait for the review period to end. If you file early you choose a new confirmation statement date, and your next review period starts the day after that date.' },
    { q: 'Do I pay again if I file two confirmation statements in a year?', a: 'Not if both fall in the same 12-month payment period. You only pay with the first statement you file in each payment period, so a second statement after a change is free.' },
    { q: 'What is form CS01?', a: 'CS01 is the paper version of the confirmation statement. It costs £110 to file, compared with £50 online, and takes longer to process. A company restored to the register must use the paper form.' },
    { q: 'Can my accountant file the confirmation statement?', a: 'Yes. You give them the company\'s authentication code and each director\'s personal code. The directors remain legally responsible for the statement being correct and filed on time.' },
  ],

  sources: [
    ['https://www.gov.uk/guidance/confirmation-statement-guidance', 'Companies House: Filing your company\'s confirmation statement'],
    ['https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees', 'Companies House: Fees'],
    ['https://www.gov.uk/government/news/companies-house-fees-are-changing-from-1-february-2026', 'GOV.UK: Companies House fees changing from 1 February 2026'],
    ['https://changestoukcompanylaw.campaign.gov.uk/confirmation-statement-changes/', 'Companies House: Confirmation statement changes'],
    ['https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house', 'Companies House: When you need to verify your identity'],
    ['https://www.gov.uk/government/publications/confirmation-statement-form-cs01-new-version', 'Companies House: Form CS01'],
  ],

  related: [
    '/resources/companies-house-identity-verification/',
    '/resources/statutory-registers-explained/',
    '/resources/limited-company-deadlines/',
  ],
};
