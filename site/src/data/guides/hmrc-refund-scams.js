// Guide: /resources/hmrc-refund-scams/. Layout: src/layouts/GuidePage.astro.
// Facts checked on GOV.UK on 13 October 2026 (sources below). Also checked:
// gov.uk/guidance/check-if-a-text-message-youve-received-from-hmrc-is-genuine,
// gov.uk/guidance/check-if-a-phone-call-youve-received-from-hmrc-is-genuine (0300 200 3884 for call blocking only),
// gov.uk/guidance/report-suspicious-activity-happening-in-an-hmrc-online-account (reply within 10 working days).
// Re-check after HMRC updates its scam guidance (it changes several times a year).
export default {
  url: '/resources/hmrc-refund-scams/',
  section: 'tax',
  title: 'HMRC Refund Scams: How to Spot and Report | Severin Finance',
  description: 'How HMRC really contacts you about a refund, the signs of a scam and where to report it: phishing@hmrc.gov.uk or 60599 for texts. Free consultation.',
  h1: 'How to spot and report an HMRC tax refund scam',
  crumb: 'HMRC refund scams',
  summary: 'How genuine HMRC refund contact looks, the warning signs, and where to report a scam.',
  topic: 'HMRC tax refund scams and phishing',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  service: {
    href: '/uk/tax/tax-refunds/', label: 'Our tax refund service',
    boxTitle: 'Think you are owed tax?', text: 'We check your records, tell you if a refund is genuinely due and claim it from HMRC for you.',
  },

  hero: {
    answer: 'HMRC never asks for personal or bank details by text, and never offers refunds on social media or WhatsApp. A genuine refund usually comes with a P800 letter and is claimed through GOV.UK or the HMRC app, or paid by cheque. Forward suspicious emails to phishing@hmrc.gov.uk and texts to 60599, then delete them.',
  },

  tldr: [
    'A message that <strong>offers a refund</strong>, rushes you or asks for bank details is a warning sign.',
    'HMRC only emails about a rebate from an address ending in <strong>hmrc.gov.uk</strong>, and its P800 refund emails contain no links.',
    'Forward emails to <strong>phishing@hmrc.gov.uk</strong> and texts to <strong>60599</strong>. Report calls with HMRC\'s online form.',
    'Lost money? Contact your bank, then Report Fraud on <strong>0300 123 2040</strong> (England and Wales) or Police Scotland on <strong>101</strong>.',
    'Claiming a genuine refund through GOV.UK is free. Online claims are usually paid within <strong>5 working days</strong>.',
  ],

  sections: [
    {
      id: 'genuine-contact', h2: 'How does HMRC really contact you about a refund?', toc: 'Genuine HMRC contact',
      body: [
        '<p>HMRC usually tells you about a refund in a P800 tax calculation letter, and it may follow up by email or text if you do not respond. It will not ask you to type bank details into a link in a message. If you are unsure whether you have overpaid, our <a href="/uk/tax/tax-refunds/">tax refund accountants</a> can check your records and make the claim with HMRC for you.</p>',
        { caption: 'How genuine HMRC contact compares with a scam', head: ['Channel', 'What HMRC does', 'Warning sign'], rows: [
          ['Letter (P800)', 'Explains the overpayment and how to get it: online, in your personal tax account or the HMRC app, or by a cheque sent automatically', 'A letter that tells you to call a number or visit a website not on GOV.UK'],
          ['Email', 'Only emails about a rebate from an address ending in hmrc.gov.uk. P800 refund emails have no links and ask for no personal details', 'A "claim your refund" link, or a request for card or bank details'],
          ['Text', 'Sends some texts, for example to update you on a claim. Never asks for personal or financial information', 'A refund offered in return for your details'],
          ['Phone', 'Does call some people. Will not leave a voicemail threatening legal action or arrest', 'Threats, pressure to pay at once, or payment in gift vouchers'],
          ['Social media and WhatsApp', 'Never offers a rebate or asks for personal details. WhatsApp is used only for one-way UK Government Channel alerts', 'Any refund offer or direct message'],
        ], after: 'Source: GOV.UK, Identify tax scams by phone, text, email or social media. Checked 13 October 2026.' },
        '<p>HMRC publishes lists of the emails, texts, letters and calls it has recently sent. If a message is not on the <a href="https://www.gov.uk/government/collections/check-a-list-of-genuine-hmrc-contacts">list of genuine HMRC contacts</a>, treat it with suspicion. The lists are not complete, so if in doubt, sign in to your HMRC account yourself rather than using a link.</p>',
      ],
    },
    {
      id: 'warning-signs', h2: 'What are the signs of an HMRC scam?', toc: 'Warning signs',
      body: [
        '<p>The clearest sign is a message you were not expecting that offers you money and asks for details in return. HMRC says a contact could be a scam if it:</p>',
        '<ul><li>rushes you, for example by setting a very short deadline</li><li>is threatening</li><li>is unexpected</li><li>asks for personal information such as bank details</li><li>tells you to transfer money</li><li>offers a refund, tax rebate or grant</li></ul>',
        '<h3>Scams we see described most often</h3>',
        '<ul><li><strong>Refund texts and emails:</strong> a message says you are due a refund and gives a link. The link goes to a fake site that copies GOV.UK and collects your card details or HMRC sign in details.</li><li><strong>Threatening calls:</strong> a caller or recorded message says you owe tax and will be arrested unless you pay now.</li><li><strong>QR codes:</strong> HMRC says its QR codes will never take you to a page where you have to enter personal information.</li><li><strong>Fake social media accounts:</strong> accounts that look official and offer help with a refund in direct messages.</li></ul>',
        '<p>Scammers often time their messages around the 31 January Self Assessment deadline, and while real P800 letters are going out (HMRC sends them between June and March). Knowing the genuine dates helps: see our <a href="/resources/self-assessment-deadlines/">Self Assessment deadlines</a> guide.</p>',
      ],
    },
    {
      id: 'never', h2: 'What does HMRC never do?', toc: 'What HMRC never does',
      body: [
        '<p>HMRC never asks for personal or payment details by text, and never offers a refund on social media. In its published guidance, HMRC says it will never:</p>',
        '<ul><li>send a text offering a tax refund in exchange for personal or financial details</li><li>email you about a rebate, or ask for payment information, from an address that does not end in hmrc.gov.uk</li><li>use social media to offer a tax rebate or request personal or financial information</li><li>contact you on WhatsApp, apart from one-way alerts on the UK Government Channel that you cannot reply to</li><li>leave a voicemail threatening legal action or threaten arrest</li><li>ask you to pay with gift or payment vouchers</li></ul>',
        '<p>Real HMRC debts can be paid by bank transfer, card or a payment plan. If a genuine bill is the problem, our guide to <a href="/resources/pay-hmrc-in-instalments/">paying HMRC in instalments</a> explains the options.</p>',
      ],
    },
    {
      id: 'report', h2: 'How do you report an HMRC scam?', toc: 'How to report',
      body: [
        '<p>Forward suspicious emails to phishing@hmrc.gov.uk and texts to 60599, then delete them. Reporting helps HMRC close down fake websites and phone numbers, and HMRC may share the details with other organisations to do so.</p>',
        { caption: 'Where to report a suspected HMRC scam', head: ['What you received', 'Where to report it'], rows: [
          ['Email', 'Forward to phishing@hmrc.gov.uk, then delete it'],
          ['Text message', 'Forward to 60599 (your network rate applies), or to phishing@hmrc.gov.uk'],
          ['Phone call', 'Use HMRC\'s online service "Report a suspicious HMRC phone call"'],
          ['Social media account', 'Email the account name and platform to branddefence@hmrc.gov.uk'],
          ['Any scam email or text (not just HMRC)', 'Emails to report@phishing.gov.uk, texts to 7726 (free)'],
        ], after: 'Sources: GOV.UK, Report suspicious HMRC emails, texts and phone calls, and Report suspicious emails, websites and text messages. Checked 13 October 2026.' },
        '<p>Do not reply, click links, open attachments or call numbers given in the message. If you want to check with HMRC, find the contact details on <a href="https://www.gov.uk/government/organisations/hm-revenue-customs/contact">GOV.UK</a> yourself.</p>',
      ],
    },
    {
      id: 'already-replied', h2: 'What should you do if you have already given your details?', toc: 'If you gave details',
      body: [
        '<p>Act quickly: call your bank first, then tell HMRC. The order matters, because your bank may be able to stop a payment.</p>',
        '<ol><li><strong>Bank or card details:</strong> call your bank using the number on your card and tell them it was a scam.</li><li><strong>HMRC sign in details:</strong> change your password, then use the security console in your HMRC account. If you cannot sign in, use HMRC\'s form for reporting suspicious activity in an online account. HMRC aims to phone or email you within 10 working days.</li><li><strong>Personal details only:</strong> report what you shared to HMRC\'s security team through the GOV.UK reporting page.</li><li><strong>If you lost money:</strong> in England and Wales, report it to Report Fraud at reportfraud.police.uk or on 0300 123 2040. In Scotland, call Police Scotland on 101.</li></ol>',
        '<p>Keep the message, screenshots and any reference numbers. Your bank and the police will ask for them. Watch your HMRC account for changes you did not make, such as a new address or bank account, and protect your National Insurance number: share it only with people who need it.</p>',
      ],
    },
    {
      id: 'real-refund', h2: 'How can you check if you are really owed a refund?', toc: 'Checking a real refund',
      body: [
        '<p>Sign in to your personal tax account or the HMRC app yourself, by typing the address or opening the app, not through a link. If HMRC has worked out that you overpaid, the refund and the P800 calculation show there.</p>',
        { caption: 'How genuine P800 refunds are paid', head: ['How you claim', 'When the money arrives'], rows: [
          ['Online bank transfer (GOV.UK, personal tax account or HMRC app)', 'Within 5 working days'],
          ['Cheque requested from HMRC', 'About 6 weeks'],
          ['Letter says a cheque will be sent', 'Within 14 days of the date on the letter, no action needed'],
        ], after: 'Source: GOV.UK, Tax overpayments and underpayments: if you are due a refund. Checked 13 October 2026.' },
        '<p>Common real reasons for a refund are an emergency tax code after a new job, leaving work part way through the year, or an unclaimed allowance. Our guides to <a href="/resources/emergency-tax-code/">emergency tax codes</a> and <a href="/resources/marriage-allowance/">Marriage Allowance</a> explain these. You can usually claim for the last 4 tax years.</p>',
        '<p>Be careful with firms that contact you out of the blue offering to claim a refund for a share of it. Some are legitimate repayment agents, but HMRC has warned that some charge up to 50% of the refund. Claiming directly through GOV.UK is free. If you use an agent, read the contract and the fee first.</p>',
      ],
    },
    {
      id: 'real-letter', h2: 'What if a genuine HMRC letter worries you?', toc: 'Genuine HMRC letters',
      body: [
        '<p>Do not ignore it: check it is real, then deal with it before the deadline in the letter. HMRC lists recent letters on GOV.UK, and a real letter will quote your reference, such as your National Insurance number or Unique Taxpayer Reference.</p>',
        '<p>Not every unexpected letter is a scam. HMRC sends letters about compliance checks, tax owed and penalties. If you receive one, our guide to <a href="/resources/hmrc-compliance-check-letter/">HMRC compliance check letters</a> explains what it means and how to reply, and our <a href="/uk/tax/hmrc-tax-investigation/">HMRC investigation team</a> can deal with HMRC for you.</p>',
      ],
    },
  ],

  faqs: [
    { q: 'Does HMRC send texts about tax refunds?', a: 'HMRC sends some texts, for example to update you on a claim. It never asks for personal or financial information by text. A text that offers a refund and asks for your details, or links to a form, is a scam. Forward it to 60599 and delete it.' },
    { q: 'What is the HMRC phishing email address?', a: 'Forward suspicious emails that claim to be from HMRC to phishing@hmrc.gov.uk, then delete them. Do not click any links or open attachments first. You can also forward suspicious texts to the same address or to 60599.' },
    { q: 'How do I know if an HMRC phone call is real?', a: 'HMRC does phone people, but it will not threaten arrest or ask you to pay with gift vouchers. If you are unsure, hang up and call HMRC on a number you find yourself on GOV.UK. Report suspicious calls with HMRC\'s online form.' },
    { q: 'Is a P800 refund email genuine?', a: 'It can be. HMRC may email about a P800 refund if you did not respond to its letter. Genuine P800 emails contain no links and do not ask for personal or financial information. Sign in to your HMRC account or app yourself to check.' },
    { q: 'I clicked a link in a fake HMRC text. What now?', a: 'If you entered nothing, close the page and delete the text. If you gave bank details, call your bank at once. If you gave HMRC sign in details, change your password and report it to HMRC. Report any money lost to Report Fraud or Police Scotland.' },
  ],

  sources: [
    ['https://www.gov.uk/government/organisations/hm-revenue-customs/contact/reporting-fraudulent-emails', 'GOV.UK: Report suspicious HMRC emails, texts and phone calls'],
    ['https://www.gov.uk/guidance/identify-hmrc-related-scam-phone-calls-emails-and-text-messages', 'GOV.UK: Identify tax scams by phone, text, email or social media'],
    ['https://www.gov.uk/government/collections/check-a-list-of-genuine-hmrc-contacts', 'GOV.UK: Check a list of genuine HMRC contacts'],
    ['https://www.gov.uk/guidance/check-if-an-email-youve-received-from-hmrc-is-genuine', 'GOV.UK: Check if an email from HMRC is genuine'],
    ['https://www.gov.uk/report-suspicious-emails-websites-phishing', 'GOV.UK: Report suspicious emails, websites and texts'],
    ['https://www.gov.uk/guidance/report-suspicious-activity-happening-in-an-hmrc-online-account', 'GOV.UK: Report suspicious activity in an HMRC online account'],
    ['https://www.gov.uk/tax-overpayments-and-underpayments/if-youre-due-a-refund', 'GOV.UK: If you are due a tax refund'],
    ['https://www.gov.uk/government/news/dont-miss-out-on-a-tax-refund-for-work-expenses-hmrc-urges', 'GOV.UK: HMRC on repayment agents'],
  ],

  related: [
    '/resources/emergency-tax-code/',
    '/resources/marriage-allowance/',
    '/resources/hmrc-compliance-check-letter/',
    '/resources/pay-hmrc-in-instalments/',
  ],
};
