# Off-page and local SEO pack

Ready-to-use material for the work that happens off the website: Google Business Profile, directory listings, reviews, digital PR and links. The website side is already built. Everything here needs Severin's own accounts or contact details, so none of it has been sent, listed or published yet.

Last updated: 13 October 2026.

**Ground rules (apply to every item below)**

- **UK only.** Every profile, listing and pitch describes a UK firm serving UK clients, including UK clients who live abroad. Name no other country and no partner firm.
- **One identity everywhere.** Copy the name, address and phone block in section 1 exactly. Any difference (an old number, "Ltd" on one site and not another) weakens local rankings.
- **No invented facts.** No made-up address, reviews, case studies, prices or qualifications. Items marked **[Severin to supply]** stay blank until Severin confirms them.
- **No bought links, link swaps or networks.** On a finance site these risk a Google manual action. Every link must be earned through useful content or a real relationship.
- **Reviews follow the law.** The Digital Markets, Competition and Consumers Act 2024 bans fake reviews and concealed incentivised reviews (in force from 6 April 2025). Google also bans review gating and incentives. Section 4 shows how to ask properly.

**Who does what**

| Task | Severin | Our team |
|---|---|---|
| Create and verify accounts (Google, Bing, Apple, directories) | Yes: owns every login | Prepares all copy and photos list |
| Supply address, hours, company number, memberships | Yes | Adds them to the site and listings |
| Ask clients for reviews | Yes: sends from the firm's email | Provides templates, tracks numbers |
| Reply to reviews | Approves replies | Drafts replies within 48 hours |
| Pitch journalists and partners | Approves every pitch and quote | Drafts pitches, finds targets |
| Add profile URLs to the site's schema | | `sameAs` in `site/src/data/site.js` |

---

## 1. Name, address and phone block (NAP)

Use this exact block on every profile and directory.

| Field | Value |
|---|---|
| Business name | Severin Finance |
| Address | **[Severin to supply]** A real, staffed address. If clients do not visit it, set the profile up as a service-area business and hide the address (see 2.1) |
| Phone | 020 4542 2488 |
| Email | enquiries@severinfinance.com |
| Website | https://severinfinance.com/ |
| Opening hours | **[Severin to supply]** |
| Company number | **[Severin to supply]** Must match Companies House |
| Year founded | **[Severin to supply]** |
| Service area | United Kingdom (for Google: London plus the cities on our location pages) |

Once the address is confirmed, add it in one place, `site/src/data/site.js` (the `address` field of the organisation schema), and the whole site updates.

**Short description (up to 250 characters, for directories with a short field):**

> Severin Finance is a London accountancy firm working with clients across the UK and UK clients abroad: company accounts, tax returns, VAT, payroll, company services and business finance, for fixed fees agreed upfront.

**Long description (up to 750 characters, for Google Business Profile and longer fields):**

> Severin Finance is an accountancy and business finance firm based in London, working with sole traders, landlords, contractors and limited companies across the UK, and with UK clients who live abroad. We prepare company accounts and tax returns, run payroll, file VAT and Making Tax Digital updates, and deal with HMRC for you. We also help with company formation and secretarial work, EIS and SEIS, business valuations and succession planning, and we arrange business loans, asset finance, commercial mortgages and bridging loans. Every client gets a fixed fee agreed in writing before work starts and a named team who knows their file. Book a free consultation by phone or video.

---

## 2. Google Business Profile

### 2.1 Set-up rules

- **One profile per real, staffed address.** A virtual office, mail-forwarding address or PO box is not eligible and gets profiles suspended.
- **If clients do not come to the office,** choose "service-area business", hide the street address and list the areas served: London plus Manchester, Birmingham, Leeds, Bristol, Liverpool, Cambridge, Oxford, Reading, Milton Keynes and Brighton.
- **Name:** "Severin Finance" only. Adding keywords such as "Accountants London" to the name breaks Google's rules.
- **Website link:** `https://severinfinance.com/`. If the profile is for the London office, `https://severinfinance.com/uk/london/` is also fine.
- **Verify** by the method Google offers (usually a video of the premises). Keep the verification video showing real signage and workspace.

### 2.2 Categories

| Type | Category |
|---|---|
| Primary | Accountant |
| Additional | Tax preparation service |
| Additional | Bookkeeping service |
| Additional | Payroll service |
| Additional | Financial consultant |

Lending pages need FCA permissions to be confirmed before adding a loan or mortgage broker category. **[Severin to confirm FCA status]**

### 2.3 Services (up to 300 characters each)

Add each service under its group, with this description and the link to its page.

| Group | Service | Description | Link |
|---|---|---|---|
| Accounting | Limited company accounts | Annual accounts, Company Tax Return, confirmation statement and dividend planning for limited companies, for a fixed fee agreed upfront. | /uk/accounting/limited-company-accountant/ |
| Accounting | Bookkeeping | Your books kept up to date weekly or monthly in cloud software, ready for VAT and Making Tax Digital. Fixed monthly fee. | /uk/accounting/bookkeeping-services/ |
| Accounting | Payroll | Payroll for any size of team: RTI submissions, payslips, auto-enrolment pensions, P60s and P11Ds, for a fixed fee per employee. | /uk/accounting/payroll-services/ |
| Accounting | Virtual finance director | Monthly management accounts, cash flow forecasts and board reporting from a finance director you share, for a fixed monthly fee. | /uk/accounting/virtual-finance-director/ |
| Accounting | Landlord accounts | UK property tax returns, Section 24, buy-to-let companies and Making Tax Digital for landlords, including landlords living abroad. | /uk/accounting/landlord-accountant/ |
| Accounting | Contractor accounts | Limited company accounts, IR35 reviews, payroll, VAT and personal tax returns for contractors, for one fixed monthly fee. | /uk/accounting/contractor-accountant/ |
| Tax | Self Assessment tax returns | We prepare and file your UK tax return, work out what you owe and deal with HMRC for you. Fixed fee. | /uk/tax/self-assessment-accountant/ |
| Tax | Corporation tax | We prepare and file your CT600, plan your company's tax and claim the reliefs you are entitled to. | /uk/tax/corporation-tax-accountant/ |
| Tax | VAT returns | VAT registration, the right VAT scheme, and VAT returns filed through Making Tax Digital software. | /uk/tax/vat-accountant/ |
| Tax | Making Tax Digital | We set up your software and send your quarterly updates and final return to HMRC under Making Tax Digital for Income Tax. | /uk/tax/making-tax-digital-accountant/ |
| Tax | Capital gains tax | We work out capital gains tax on property, shares, crypto or a business sale, and file the 60-day return when one is due. | /uk/tax/capital-gains-tax-accountant/ |
| Tax | Inheritance tax planning | We map your estate and plan gifts, pensions and business relief to reduce the inheritance tax your family pays. | /uk/tax/inheritance-tax-planning/ |
| Tax | Tax refunds | We check whether you overpaid through PAYE, emergency tax or Self Assessment, and claim the money back from HMRC. | /uk/tax/tax-refunds/ |
| Tax | HMRC investigations | We answer HMRC for you, handle compliance checks and disclosures, and work to keep penalties as low as possible. | /uk/tax/hmrc-tax-investigation/ |
| Company services | Company formation | We form your limited company, file at Companies House and register it with HMRC for corporation tax, PAYE and VAT. | /uk/company-services/company-formation/ |
| Company services | Company secretarial | Confirmation statements, director and PSC changes, statutory registers and Companies House identity checks. | /uk/company-services/company-secretarial-services/ |
| Company services | Business valuation | Written valuations for a sale, a shareholder exit, divorce or HMRC purposes such as EMI and capital gains tax. | /uk/company-services/business-valuation/ |
| Company services | Succession planning | Exit routes, share buy-backs, management buy-outs and employee ownership trusts, with the tax on each planned early. | /uk/company-services/succession-planning/ |
| Company services | EIS and SEIS | We check eligibility, apply to HMRC for advance assurance and file your EIS1 or SEIS1 compliance statement. | /uk/company-services/eis-seis/ |
| Business finance | Business loans | Secured, unsecured and government-backed business loans. We prepare your figures, compare lenders and apply. | /uk/business-finance/business-loans/ |
| Business finance | Tax bill funding | Funding for VAT, corporation tax and Self Assessment bills, compared with an HMRC Time to Pay arrangement. | /uk/business-finance/tax-bill-funding/ |
| Business finance | Asset finance | Hire purchase, leasing and refinance for vans, machinery and equipment. We compare lenders and apply. | /uk/business-finance/asset-finance/ |
| Business finance | Invoice finance | Factoring, invoice discounting and single invoice finance to turn unpaid invoices into cash. | /uk/business-finance/invoice-finance/ |
| Business finance | Commercial mortgages | Commercial mortgages for owner-occupiers, investors and semi-commercial property. We compare lenders and apply. | /uk/business-finance/commercial-mortgages/ |
| Business finance | Bridging loans | Short-term bridging loans for auction purchases, chain breaks and refurbishments, with the exit planned from day one. | /uk/business-finance/bridging-loans/ |
| Business finance | Development finance | Funding for ground-up builds, conversions and refurbishments. We find lenders and check build costs and VAT. | /uk/business-finance/development-finance/ |
| Clients abroad | Non-resident UK tax | UK tax returns for people living abroad: UK rent, property sales, UK pensions and the year you leave. | /cross-border/non-resident-uk-tax/ |
| Clients abroad | UK company from abroad | We set up and run a UK company for owners living abroad: registration, registered office, ID checks, corporation tax and VAT. | /cross-border/uk-company-from-abroad/ |

### 2.4 Photos

Real photos only, no stock. Minimum set before launch:

1. Logo (square, 720 × 720 px) and cover image (1080 × 608 px).
2. Outside the office with signage, and the entrance (only if the address is shown).
3. Inside: reception, a meeting room, the team at work.
4. Team: one photo per adviser, the same photos as the future `/team/` page.

Add 2 or 3 new photos a month. Name files descriptively (for example `severin-finance-london-team.jpg`).

### 2.5 Questions and answers

Use these answers where the profile offers a questions feature, and keep them identical to the website FAQs.

| Question | Answer |
|---|---|
| Do you work with clients outside London? | Yes. We work with clients across the UK by phone, video and secure upload, and with UK clients who live abroad. |
| How much do you charge? | Every client gets a fixed fee, agreed in writing after a free consultation, based on the work and the state of the records. |
| Can you take over from my current accountant? | Yes. We contact your current accountant for the handover, collect your records and check the next deadlines. |
| Which software do you use? | We work in Xero and QuickBooks, and can work with other Making Tax Digital software. |
| Can you help if I already have a letter from HMRC? | Yes. Send us the letter and we will tell you what it means, the deadline and what to do next. |

### 2.6 Posts: the first 12 weeks

Post every Monday. Each post links to one page, with the "Learn more" button. Keep posts under 1,500 characters; these are about 300.

| Week of | Topic | Post text | Link |
|---|---|---|---|
| 19 Oct 2026 | Paper return deadline | Filing a paper Self Assessment return for 2025-26? It must reach HMRC by 31 October. Online returns have until 31 January 2027. Our guide sets out every date and penalty. | /resources/self-assessment-deadlines/ |
| 26 Oct 2026 | MTD quarterly update | Sole traders and landlords in Making Tax Digital: your second quarterly update, for 6 July to 5 October, is due by 7 November. Here is what to send and when. | /resources/making-tax-digital-for-income-tax/ |
| 2 Nov 2026 | Data study launch | What does a £100,000 office pay in business rates and BID levies in 2026-27? From £48,000 outside London to £54,200 in the City of London. See our comparison of 22 UK places. | /resources/uk-city-business-costs-2026/ |
| 9 Nov 2026 | Take-home pay calculator | What will you take home in 2026-27? Our free calculator works out income tax, National Insurance, pension and student loan, including Scottish rates. | /resources/take-home-pay-calculator/ |
| 16 Nov 2026 | Marginal relief | Company profits between £50,000 and £250,000? Corporation tax falls between 19% and 25%. Work out your exact bill with our free marginal relief calculator. | /resources/marginal-relief-calculator/ |
| 23 Nov 2026 | Salary and dividends | Paying yourself from your company in 2026-27? Dividend tax is now 10.75%, 35.75% or 39.35%. See what your dividends will cost with our free calculator. | /resources/dividend-tax-calculator/ |
| 30 Nov 2026 | 30 December deadline | File your 2025-26 tax return online by 30 December and HMRC can collect tax under £3,000 through your tax code, instead of in one payment in January. | /uk/tax/self-assessment-accountant/ |
| 7 Dec 2026 | VAT basics | Not sure how to add or remove VAT? Divide a VAT-inclusive price by 1.2 to find the net figure. Our free calculator does it for 20%, 5% or any rate. | /resources/vat-calculator/ |
| 14 Dec 2026 | Can't pay in January | Worried about your January tax bill? You can set up a payment plan online for Self Assessment debts up to £30,000. Here is how, and what HMRC asks. | /resources/pay-hmrc-in-instalments/ |
| 4 Jan 2027 | Deadline countdown | 27 days to the 31 January Self Assessment deadline. Send us your records this week and we will file in good time. Book a free consultation. | /uk/tax/self-assessment-accountant/ |
| 11 Jan 2027 | Payments on account | Your January bill may include a first payment on account for 2026-27. We explain how payments on account work and when you can reduce them. | /resources/self-assessment-deadlines/ |
| 18 Jan 2027 | Landlords and MTD | Landlords with property and self-employed income over £30,000 join Making Tax Digital from 6 April 2027. Here is what changes and how to get ready. | /resources/making-tax-digital-for-landlords/ |

After week 12, keep the same pattern: one deadline or rate change, one tool or guide, one service. On Budget day, post a short summary of what changed for small businesses within 24 hours, once the figures are on GOV.UK.

---

## 3. Directory listings (citations)

Use the NAP block from section 1 exactly. Priority 1 at set-up, priority 2 within the first month, priority 3 when there is time.

| Priority | Listing | Why | Notes |
|---|---|---|---|
| 1 | Google Business Profile | Local pack and Maps | Section 2 |
| 1 | Bing Places for Business | Bing, Copilot and the engines that use Bing's data | Can import straight from Google Business Profile |
| 1 | Apple Business Connect | Apple Maps and Siri | Free. Add logo, hours and the "Call" and "Website" actions |
| 1 | LinkedIn company page | Brand searches and AI answers | Use the long description; list services; link every adviser's profile |
| 1 | Companies House | Official record | Check the registered office and the company name match the profiles |
| 1 | Trustpilot (free business account) | Second review source shown on the site | Claim the page; never pay for or filter reviews |
| 2 | Yell | Long-standing UK directory | Free listing is enough |
| 2 | Thomson Local | UK directory | Free listing |
| 2 | Scoot | Feeds several UK directories | Free listing |
| 2 | FreeIndex | UK directory with reviews | Free listing |
| 2 | Yelp | Feeds Apple and others | Free listing |
| 2 | Facebook page | Brand searches, reviews | Same NAP and hours |
| 2 | Clutch | B2B services directory | Free profile; reviews are verified by Clutch |
| 2 | Crunchbase | Company data used by AI tools | Basic free profile |
| 3 | Cylex, Hotfrog, Brownbook, 192.com Business | Smaller UK directories | Consistency only; low value alone |
| 3 | Xero Advisor directory, QuickBooks ProAdvisor directory | Software partner listings | Only if the firm holds partner status **[Severin to confirm]** |
| 3 | Professional body directories (CIMA, CIOT, ICPA) | Strong trust links | Only for bodies Severin or its advisers actually belong to **[Severin to confirm]** |
| 3 | London Chamber of Commerce and Industry | Membership directory link | Paid membership; worth it if the firm also uses the events |

When each profile goes live, add its URL to `sameAs` in `site/src/data/site.js`. That links the profiles to the site in the schema, which helps Google and AI tools treat them as one business. Audit all listings every quarter for changed details.

---

## 4. Reviews

### 4.1 Rules

- Ask **every** client after a piece of work is delivered, not only the happy ones. Asking only satisfied clients ("review gating") breaks Google's rules.
- No discounts, gifts or prize draws for reviews.
- Never write, buy or swap reviews, and never ask staff, friends or family to post them. Under the DMCC Act 2024 this can lead to fines from the Competition and Markets Authority.
- Never hide or remove genuine negative reviews. Only report a review to Google if it breaks Google's policies (for example spam, or it is not about a real client experience).
- Show reviews on the website word for word, with permission, through `site/src/data/reviews.js`. Update the Google rating and count there as well; the home page, service pages and trust lines all update from it.

### 4.2 Review link

Create the short review link in Google Business Profile ("Ask for reviews"). Then add a redirect so `severinfinance.com/review/` points to it, in the `redirects` list in `site/vercel.json`:

```json
{ "source": "/review/", "destination": "<Google review link>", "permanent": false }
```

Use `https://severinfinance.com/review/` in emails, on invoices and in the QR code.

### 4.3 Request email

Send from the adviser's own email, within a week of delivering the work.

> **Subject:** Your [tax return / accounts] is done, and a quick favour
>
> Hi [first name],
>
> Your [2025-26 tax return] has been filed, and HMRC has confirmed it was received. Thank you for sending everything over so promptly.
>
> If you have a minute, we would be grateful for an honest review of how we did. It helps other people find an accountant they can trust:
>
> https://severinfinance.com/review/
>
> If anything could have been better, please tell me directly too. I read every message.
>
> Best wishes,
> [Adviser name]
> Severin Finance

### 4.4 Request text message

> Hi [first name], it's [adviser] at Severin Finance. Your [accounts] are filed. If you have a moment, an honest review would really help us: severinfinance.com/review/ Thank you!

### 4.5 QR card (for meetings and the office)

> **How did we do?** Scan to leave an honest review of Severin Finance on Google. It takes a minute and helps other clients find us. severinfinance.com/review/

### 4.6 Replying to reviews

Reply to every review within 48 hours. **Client confidentiality comes first:** never confirm details of anyone's tax affairs in a public reply, even if the reviewer mentions them.

**Positive review:**

> Thank you, [first name]. We are glad the [handover / year end] went smoothly, and we look forward to working with you again next year. [Adviser name], Severin Finance

**Negative review:**

> Thank you for your feedback, and I am sorry we fell short. We take every comment seriously, and I would like to understand what happened. Please call me on 020 4542 2488 or email enquiries@severinfinance.com so we can put this right. [Name], Severin Finance

**Review from someone who is not a client:**

> We cannot find a record of working with you, and we keep all client matters confidential. If we have missed something, please contact us on 020 4542 2488 so we can look into it. [Name], Severin Finance

Then report it to Google only if it clearly breaks Google's policies.

### 4.7 Targets

From the master plan: 30 Google reviews by month 3, 60 by month 6 and 120 by month 12. Track the total, the monthly new reviews and the average rating in `research/tracking/kpi-monthly.csv`.

---

## 5. Digital PR and links

### 5.1 Data study: "UK city business costs 2026-27"

Page: https://severinfinance.com/resources/uk-city-business-costs-2026/

**Headline findings to pitch:**

- An office with a rateable value of £100,000 pays £48,000 in business rates outside London, £50,000 in a London borough and £54,200 in the City of London, before BID levies.
- Brighton has the highest headline BID levy we found, at 2% from 1 July 2026, ahead of Leeds at 1.94%.
- BID levies start at a rateable value of £12,000 in Stratford and Twickenham, but not until £180,000 in Bloomsbury and Holborn.
- Outside London, only Birmingham and Bristol charge for clean air among the 10 cities we cover. Bristol's HGV charge (£100) is double Birmingham's (£50).

**Timely local hooks (autumn 2026):**

| Date | Hook | Who to pitch |
|---|---|---|
| 21 October 2026 | Croydon BID renewal ballot closes (proposed 1.3% from April 2027) | Croydon and south London local news |
| 5 November 2026 | Love Wimbledon BID ballot closes (proposed 1.30%) | Wimbledon and Merton local news |
| 19 November 2026 | Angel Islington BID ballot closes | Islington local news |
| Budget day | Business rates and small business changes | National and regional business desks |

**Target outlets (UK only):** City A.M., the Evening Standard business pages, Insider Media, regional BusinessLive titles, Manchester Evening News business, the Yorkshire Post business desk, the Birmingham Post, Bristol Live, the Argus (Brighton), the Cambridge Independent, the Oxford Mail, local council-area news sites, and trade titles for accountants, property and retail. Find the named business reporter for each outlet; never send a group email.

**Pitch email:**

> **Subject:** [City]: what a £100,000 office pays in rates and BID levy this year
>
> Hi [first name],
>
> We have compared business rates, BID levies and clean air charges for 2026-27 across 22 UK places, using council, BID and GOV.UK figures.
>
> For [city], the headline is [finding, for example: "the city centre BID levy is 1.94%, among the highest in our study, adding £1,940 a year to a £100,000 office"].
>
> The full tables and sources are here: https://severinfinance.com/resources/uk-city-business-costs-2026/
>
> [Adviser name], [role], can comment on what this means for small firms in [city] and how to check a rates bill. Happy to send a quote today.
>
> [Name]
> Severin Finance, 020 4542 2488

Update the study each April when the new multipliers and BID levies are published, and change the date on the page. A refreshed study is a second pitch each year.

### 5.2 Expert commentary routine

- Sign up (free tiers first) to journalist request services: ResponseSource, Qwoted, Featured, and the #journorequest hashtag on X and Bluesky.
- Check them daily at 9am and 2pm. Answer only requests where Severin has real expertise: Self Assessment, small company tax, VAT, landlords, Making Tax Digital, UK tax for people abroad.
- Reply within 2 hours with: a 2 or 3 sentence quote that answers the question directly, one specific figure, the adviser's name, role and qualification, and a link to the relevant guide.
- Keep a bank of approved quotes for the predictable dates: 31 January, the start of the tax year on 6 April, payments on account on 31 July, and Budget day.
- Every quote must be approved by the named adviser before it is sent.

### 5.3 Guest articles: 12 topics

One a month, pitched to UK start-up, small business, landlord, contractor and expat-audience sites. Each article is new writing (not a copy of a site guide) with one link back to the matching guide.

1. Five things to check before you take your first dividend
2. What changes for landlords when Making Tax Digital arrives in April 2027
3. Sole trader or limited company: the numbers at £30,000, £50,000 and £100,000 profit
4. How to read your first business rates bill after the 2026 revaluation
5. IR35 for contractors: the questions to ask before you sign a contract
6. Moving abroad? The UK tax jobs to do in your last year
7. What a BID levy is and how to check if you pay one
8. Your first employee: the payroll, pension and insurance checklist
9. How to prepare a business for sale two years before you sell
10. EIS or SEIS: which one should your start-up use first?
11. Bridging finance at auction: plan the exit before you bid
12. The month-end bookkeeping routine that makes year end painless

### 5.4 Partnerships

Partners who serve the same clients and can refer both ways. Agree any referral fee in writing and disclose it to clients; never exchange links in return for links.

- Solicitors: conveyancing, private client (wills and probate), and company or commercial.
- Estate and letting agents (landlord clients, non-resident landlords).
- Independent financial advisers and mortgage brokers.
- Relocation and expatriate services firms (UK side only).
- Co-working spaces and start-up accelerators (company formation, EIS and SEIS).
- Business banks' local relationship managers.

Offer each partner something useful: a co-written guide, a talk for their clients, or a resource page link to our calculators.

### 5.5 Linkable tools outreach

Our free tools are good resources to suggest to pages that already list resources for small businesses or graduates:

| Tool | Who might link to it |
|---|---|
| Take-home pay calculator | University careers services, graduate job sites, student money guides |
| Dividend tax and marginal relief calculators | Start-up hubs, enterprise agencies, Growth Hubs, co-working spaces |
| VAT calculator | Small business resource pages, local enterprise agencies |
| UK tax calendar 2026-27 | Chambers of commerce, trade associations, council business support pages |
| Glossary | Business schools, enterprise courses, adult education providers |
| City business costs study | Local business groups, BID companies, council economic development teams |

Email the person who maintains the page, say what the tool does in one sentence, and ask whether it would help their readers. One follow-up after a week, then stop.

### 5.6 Unlinked mentions and broken links

- **Unlinked mentions:** set a Google Alert for "Severin Finance" and the advisers' names. When a page mentions the firm without a link, ask the author politely to add one.
- **Broken links:** with a backlink tool (section 6), find pages that link to dead pages on competitors' or closed firms' sites about topics we cover (for example a deleted tax calendar). Suggest our page as a replacement.
- **Old site links:** the redirect map in `site/vercel.json` already sends old WordPress URLs to the new pages, so existing links keep their value. Check every quarter that no old URL returns a 404.

### 5.7 Anchor text

Let other sites choose their own anchor text. A natural mix is about half brand or URL ("Severin Finance", "severinfinance.com"), a quarter generic ("this guide"), and only a small share with exact keywords. Never ask for an exact-match anchor such as "best accountant London".

---

## 6. Competitor backlink analysis (method)

This needs a paid backlink tool (Ahrefs or Semrush). Without one, use Google Search Console's Links report for our own links only.

1. **Pick competitors from the results, not from memory.** For our 20 most important keywords in `research/keywords/keyword-master.csv`, note the firms in the top 10 in Google (UK, signed out). Keep the 5 to 10 that appear most often, ignoring directories and national comparison sites.
2. **Export their referring domains,** with the tool's authority score and the first-seen date.
3. **Run a link intersect:** domains that link to 2 or more competitors but not to us. These are the most realistic targets.
4. **Sort the targets into types:** directory, professional body, news or PR, guest post, partner, resource page, sponsorship. Drop spam, foreign-language sites, link farms and anything paid-for.
5. **Match each target to a tactic** in section 5 and add it to a tracking sheet with the contact, the date pitched and the result.
6. **Repeat every quarter** and record the number of referring domains, ours against competitors, in the KPI sheet.

---

## 7. Log file analysis (after launch)

Server logs show what search engines and AI crawlers actually fetch, which Search Console only partly shows.

1. **Collect the logs.** Vercel's Pro plan supports log drains to a log tool. If the site stays on the free plan, use Search Console's Crawl Stats report and Vercel's runtime logs instead.
2. **Check the right bots.** Filter by user agent for Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot and Google-Extended. Confirm Googlebot and Bingbot by reverse DNS, since fake bots copy their user agents.
3. **Questions to answer each month:**
   - Are new guides crawled within a few days of publishing? If not, ping IndexNow (`npm run indexnow`) and check that they are in the sitemap.
   - Are bots wasting requests on 404s, redirect chains or old WordPress URLs? Fix or redirect them.
   - Which sections get the least crawling? Add internal links to them from the hubs and related guides.
   - Do AI crawlers reach the guides and `/llms.txt`? `robots.txt` allows them, so a drop points to a problem.
4. **Record** the crawl counts per section in the KPI sheet next to rankings and AI citations.

---

## 8. Monthly routine

| When | Task | Owner |
|---|---|---|
| Every Monday | Google Business Profile post (section 2.6) | Our team drafts, Severin approves |
| Daily | Journalist requests (section 5.2) | Our team |
| Within 48 hours | Reply to every new review | Our team drafts, Severin approves |
| Weekly | Send review requests for work delivered that week | Severin's advisers |
| Monthly | 1 guest article, 5 to 10 outreach emails, 2 or 3 new photos | Our team |
| Monthly | KPI sheet: reviews, referring domains, local pack positions, AI citations | Our team |
| Quarterly | NAP audit of every listing, competitor backlink check, old URL check | Our team |
| Each April | Refresh the city costs study and the tax calendar, then re-pitch | Our team |
