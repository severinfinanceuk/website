# Progress tracker

Current phase: **3 · Build + content**. The site has 147 pages and passes `npm run check`; it now waits on Severin's inputs, design sign-off and the forms. Last updated: 13 Oct 2026.

Phases and gates come from the roadmap in [docs/01-master-plan.md](docs/01-master-plan.md#roadmap-tracking-and-kpis).

## Phase 1 · Discover (weeks 1–2)

- [x] Audit current site, see [research/current-site/audit-notes.md](research/current-site/audit-notes.md)
- [x] Analyse reference design (stoneeg.com), see [research/reference-stoneeg/design-notes.md](research/reference-stoneeg/design-notes.md)
- [x] Master plan v1.0 written, see [docs/01-master-plan.md](docs/01-master-plan.md)
- [x] Seed keyword list (335 keywords), see [research/keywords/keyword-master.csv](research/keywords/keyword-master.csv)
- [x] Merged pasted 6-country research: master list now 667 keywords, plus 85 Italy/Australia candidates on hold, see [research/keywords/pasted-research-2026-10-09.md](research/keywords/pasted-research-2026-10-09.md)
- [ ] Pull volume, difficulty and CPC for every keyword (Semrush / Ahrefs / Keyword Planner). Use it to confirm each service slug before launch
- [ ] Competitor gap analysis: top 5 ranking firms per market
- [ ] Re-run PageSpeed Insights on current site (API limit hit on 9 Oct)
- [ ] Export current rankings and backlinks from Google Search Console
- [ ] Collect inputs from Severin (list below)

## Phase 2 · Design (weeks 3–5)

- [x] Font: free Inter Tight for now (self-hosted, 400 + 500); can swap to Suisse Intl later if licensed
- [x] Design tokens: colours, type scale, spacing, see `site/src/styles/global.css`
- [x] Home page draft on localhost (`cd site && npm run dev` → http://localhost:4321/)
- [ ] **Home page design feedback and sign-off**, then reuse the components for the other templates
- [x] Service page template, first draft: [/uk/tax/self-assessment-accountant/](http://localhost:4321/uk/tax/self-assessment-accountant/), rules in [docs/03-service-page-template.md](docs/03-service-page-template.md)
- [x] All 33 service pages built from the same template (13 Oct 2026): every link in the Services menu now opens a page
- [ ] **Service page feedback** from Severin, then fact sign-off per page (`reviewed` date)
- [x] Section hub pages: `/uk/accounting/`, `/uk/tax/`, `/uk/company-services/`, `/uk/business-finance/`, `/cross-border/` (13 Oct 2026; country hubs dropped with the UK-only decision)
- [ ] FCA / regulatory strip on the 7 business finance pages once Severin's lending status is known
- [x] Templates: hub, guide, tool, location (13 Oct 2026)
- [ ] Team member profile template: waits for real names, photos and qualifications
- [ ] Replace yellow placeholders (stats, reviews, team, company number, FCA wording)
- [ ] Make the contact form work (Vercel function or form service)
- [ ] Phone, tablet and desktop mock-ups
- [ ] **Gate:** design signed off by Severin

## Phase 3 · Build + content (weeks 5–10)

- [x] Build `/locations/` hub and the location page template (from `locations.js`)
- [ ] Add a `live` flag to `locations.js` so menus list only published pages (not needed while every listed page is built)
- [x] Astro project set up in `/site`, on GitHub and deployed to Vercel (private, behind Vercel login) (13 Oct 2026)
- [x] Schema (site-wide `@id` graph), sitemaps with images, robots.txt, llms.txt, 404, `vercel.json` redirects and headers (13 Oct 2026)
- [ ] Forms and booking calendar (the user adds these later), then thank-you pages
- [ ] CMS (only if Severin will edit pages themselves)
- [x] 147 pages written (13 Oct 2026): 28 service, 24 location, 5 hubs, 12 core and legal, 71 guides, 7 tools and pillars
- [ ] Expert review and sign-off of every page (`reviewed` date); legal drafts approved and `noindex` removed
- [ ] Google Business Profile, citations, review program: all copy and steps are ready in [docs/04-off-page-and-local-seo.md](docs/04-off-page-and-local-seo.md); Severin needs to create the accounts

## Phase 4 · QA + migrate (weeks 11–12)

- [x] Lighthouse 95+, 375 px overflow test, link and schema checks (13 Oct 2026, on the local build; repeat on the live domain)
- [ ] 301 redirects live (written in `vercel.json`), sitemaps submitted, IndexNow (key file and `site/scripts/indexnow.mjs` ready)
- [ ] **Launch:** every checklist item passed

## Phase 5 · Grow (months 4–12)

- [ ] Monthly: 8–12 articles, 4–6 refreshes, 15–30 referring domains, KPI report

## Inputs needed from Severin

- [ ] Full list of lending products, and whether Severin lends directly or brokers (the 7 business finance pages say "we arrange", marked yellow), plus lender panel size, rates, fees, LTV limits and turnaround
- [ ] FCA firm reference number
- [ ] Team names, photos and qualifications (CIMA, ACCA, CTA)
- [ ] Office or meeting addresses in the UK
- [ ] Real reviews, testimonials, client logos, case studies
- [ ] Google Search Console and Analytics access, the GA4 measurement ID (goes in `site/src/data/analytics.js`) and the Search Console and Bing verification codes
- [ ] Turn on Web Analytics in the Vercel dashboard (the script is already on every page)
- [ ] Company number, ICO registration number, AML supervisor and the professional body for complaints (yellow on the legal pages)
- [ ] Review and approve the 5 legal drafts (privacy, cookies, terms, complaints, accessibility)
- [ ] Profile URLs (Google Business Profile, LinkedIn, Companies House) for schema `sameAs`
- [ ] Prices or "from" prices per service, with 3 packages per service (Basic / Standard / Complex) and whether prices include VAT
- [ ] Google review rating and count, plus more client reviews per service
- [ ] Qualifications of each expert who signs off a page (the self assessment page names Alain Dastros)
- [ ] Promised reply time for the quote form ("We reply within XX hours")
- [ ] Evidence for "Max refunds guaranteed", or agree to drop it
- [x] Markets decided: **UK only** (13 Oct). Severin is registered in the UK only; people abroad are reached through UK services
- [ ] Is Severin a Companies House Authorised Corporate Service Provider (can verify directors' identity)? Does it offer a registered office address, fee protection insurance, formal valuations, MBO/EOT deal work?
- [ ] Confirm which of these Severin offers: payroll, virtual CFO/FD, audit (statutory needs registration), industry specialisms, Xero/QuickBooks/Sage
- [ ] Confirm the Services menu (`site/src/data/services.js`, 28 sub-services in 5 groups). Not yet confirmed by Severin: company services (formation, secretarial, valuation, succession, EIS/SEIS), bridging loans, development finance, tax refunds, landlords, contractors/IR35

## Decisions

| Date | Decision |
| --- | --- |
| 9 Oct 2026 | Reference design is stoneeg.com, with all of its animation removed |
| 9 Oct 2026 | Stack: Astro static site on Cloudflare Pages, no WordPress |
| 13 Oct 2026 | Hosting changed to **Vercel** (in place of Cloudflare Pages), deployed from the GitHub repo `SeverinfinanceUk/Mainseverinwebsite`, branch `main`. Every push to `main` deploys. Deployments stay behind Vercel's login (Deployment Protection) until launch, so the draft cannot be indexed |
| 9 Oct 2026 | Markets: UK (home), France (French), US, Canada (English first, French for Quebec in phase 2) |
| 9 Oct 2026 | Markets updated: **UK and France are the top priority**, then the US, Canada, Australia and the UAE (Dubai), each still getting a full country section. Italy not included |
| 13 Oct 2026 | **UAE dropped** as a market (pages, menus, photos removed). **London and France are joint targets**: UK accounting, tax and company service pages say "London & France" in the title and "for London and France" in the H1, with France in `areaServed`; lending pages say "London & UK-wide" (lending for France needs ORIAS registration). Ranking in google.fr needs the French `/fr/` versions with hreflang |
| 13 Oct 2026 | **UK only** (replaces the market rows above). Severin is not registered or compliant outside the UK, so the site offers UK work only and names no other country, foreign authority or partner firm. Titles say "London & UK-wide" (or "London & UK"), H1s "in London and across the UK", `areaServed` is United Kingdom plus London, `lang` en-GB, no hreflang. People abroad are reached through UK-side pages (non-resident UK tax, UK company from abroad, non-resident landlords, UK property sales, tax refunds after leaving) written with generic words: abroad, overseas, non-resident, expat |
| 13 Oct 2026 | Exceptions to zero JavaScript: the cookie banner with GA4 Consent Mode v2 (nothing from Google loads before Accept, and nothing GA-related renders while the GA4 ID is empty), the Vercel Web Analytics script (cookieless), one small listener for phone and email clicks, and the 4 calculators (inline on their own pages only, about 3.4 KB at most). Every other page stays script-free apart from analytics |
| 13 Oct 2026 | Guides at `/resources/<slug>/` from one data file each (`site/src/data/guides/`). Every figure is checked against GOV.UK, HMRC manuals or legislation.gov.uk on the day of writing; no lenders or software brands named; tax years written 2026-27 |
| 13 Oct 2026 | E-commerce, SaaS, app store, video and news SEO do not apply (see the master plan). International SEO is limited to UK-side pages for people abroad |
| 9 Oct 2026 | All project files live in this folder (not in online docs) |
| 9 Oct 2026 | Font: Inter Tight (free) for the draft, in place of the reference's licensed Suisse Intl |
| 9 Oct 2026 | Zero JavaScript: menu and FAQ use native `<details>`; CSS inlined in each page |
| 9 Oct 2026 | One exception to "no animation", requested by the user: every card group except the numbers ticker (services, countries, team, testimonials) turns dark green (white text) and grow 4%, one by one: on desktop it rotates every 3 s (pauses on hover, off for reduced-motion users); on phones it follows the scroll. Instant colour change, CSS only, no JS |
| 9 Oct 2026 | Hero media is a 16:9 video with `preload="none"` (nothing downloads until play) |
| 9 Oct 2026 | Positioning: an accounting firm with a team, never "one accountant" (applies to all page copy) |
| 9 Oct 2026 | Service URLs: the last part of the URL is the page's main buyer keyword (`self-assessment-accountant`, not `self-assessment`), also used in the title, H1, first sentence and image names. 18 slugs changed, see [docs/03-service-page-template.md](docs/03-service-page-template.md#1-slug-rule) |
| 9 Oct 2026 | Every service page is a sales funnel built from one template: answer, who it is for, prices, key dates, how it works, comparison, proof, FAQ, quote form. 8 colourful photos per page; swipe rails on phones keep scrolling short |
| 9 Oct 2026 | SEO ambition: every type of SEO at full depth. Every targeted city/area gets its own landing page, all listed under a **Locations** mega-menu. Each page must carry real local content (no doorway pages), see [docs/02-location-pages-plan.md](docs/02-location-pages-plan.md) |

## Log

| Date | What was done |
| --- | --- |
| 9 Oct 2026 | Audited severinfinance.com and stoneeg.com, wrote master plan v1.0, built the seed keyword list, set up this folder |
| 9 Oct 2026 | Merged pasted 6-country keyword research: +344 keywords for UK/FR/US/CA, 85 IT/AU candidates in a separate file, added `source` and `notes` columns, fixed 14 broken seed rows |
| 9 Oct 2026 | Built the home page draft in `site/` (Astro 7.3.8): header, footer, 9 sections. Build: 45.9 KB HTML (11.4 KB gzipped), no JS, 2 font files. Unconfirmed facts are highlighted yellow |
| 9 Oct 2026 | Hero changed to two columns on desktop (text left, photo right, from 1000 px); stacks on phone and tablet |
| 9 Oct 2026 | Services section rebuilt: 3 cards in one row, pinned on desktop while the black highlight moves 1 → 2 → 3; stacked on phones with the card mid-screen turning black. Each service listed on its own row. Hero slot changed to 16:9 video |
| 9 Oct 2026 | Services highlight changed from scroll-pinned to automatic rotation on desktop (1 → 2 → 3, 3 s each, hover stops it); phones keep the scroll highlight |
| 9 Oct 2026 | Services highlight is now brand green (#33b47b, black text) with a 4% grow; fades in over 0.3 s |
| 9 Oct 2026 | Highlight changed to dark green #17734a with white text (bright green with black text did not suit the design) |
| 9 Oct 2026 | Rotating green highlight applied to all card groups: stats (6), services (3), countries (4), team (3), testimonials (3). Each group rotates on its own, 3 s per card; hover stops it. Steps, guides and FAQ are lists, not cards, so left as they are |
| 9 Oct 2026 | "Severin in numbers" tiles turned into a full-width sideways ticker: loops continuously (45 s per lap), pauses on hover, a tile turns green only while hovered (no automatic highlight); reduced-motion users get a swipeable row instead. Gap between tiles widened to 16–28 px |
| 9 Oct 2026 | Positioning: Severin is presented as a firm, not a single accountant. Copy changed: hero ("a dedicated team"), countries heading ("Four countries, one firm"), services text, steps, and the "Point of contact: 1" stat replaced with "Services: 3" |
| 9 Oct 2026 | Country cards got city photos (London, Paris, New York, Toronto), all public domain / CC0 from Wikimedia Commons, sources in `site/src/assets/places/SOURCES.md`. Built as AVIF/WebP/JPG at 360/540/720 px, lazy-loaded: about 27 KB for all four on a normal screen, about 100 KB on retina |
| 9 Oct 2026 | Severin crest logo (from the supplied SF-Logo-Only file) replaces the "SF" circle: black in header (56/68 px), white in footer (96 px); 512 px copy at `site/public/logo.png` used as the schema logo |
| 9 Oct 2026 | New "Memberships, software and partners" strip under the hero: Professional bodies (CIMA, CIOT, ICPA), Software we work in (Xero, Intuit QuickBooks), Partners (@com Pluriel Conseils). Grey by default, full colour on hover; about 30 KB for all logos. Memberships to be confirmed current by Severin before launch; better @com logo + partner URL needed |
| 9 Oct 2026 | Fix: footer and legal text were touching the screen edge on phones (padding override removed the side gutter) |
| 9 Oct 2026 | Logo strip: logos now in full colour (no grey/hover effect) and about 40% bigger (slightly smaller on phones so each group fits on one line). Off-white box removed from the CIMA and CIOT files. About 25 KB on a normal screen, 50 KB on retina |
| 9 Oct 2026 | Six countries on the home page: UK and France get double-width cards on desktop, then US, Canada, Australia (Sydney photo) and UAE (Dubai photo) below; green highlight now rotates through all six (18 s loop). Stats, hero eyebrow, page title, meta description, FAQs (new "moving to Dubai" question), schema `areaServed`, cross-border links and footer updated |
| 9 Oct 2026 | Header: the row of country codes (too wide with six, it pushed the menu onto two lines) replaced by a compact country picker ("UK ▾"), native `<details>`, no JavaScript |
| 9 Oct 2026 | **Locations** mega-menu added to the header: 6 countries, 55 city/area pages (UK 22 incl. 11 London areas, France 9, US 7, Canada 5, Australia 6, UAE 6), plus "All locations". Phones get an expandable Locations section with city buttons. One shared list: `site/src/data/locations.js`. Full desktop nav now shows from 1360 px (burger menu below), because 7 items plus the button no longer fit at 1100–1359 px |
| 9 Oct 2026 | Footer: new "Top locations" column (London, Manchester, Birmingham, Paris, New York, Toronto, Sydney, Dubai, All locations); footer text and contact pill updated to six countries. Home page HTML 74 KB raw, 17 KB gzipped |
| 9 Oct 2026 | Wrote [docs/02-location-pages-plan.md](docs/02-location-pages-plan.md): page list in waves, anti-doorway rules (5 of 8 local elements per page), page anatomy, schema/hreflang/sitemap rules, citations and local links |
| 9 Oct 2026 | Home "Six countries" section: on screens 1200 px and wider all six cards sit in one row at equal widths, with UK and France in the centre and taller (they extend 32 px above and below the row and have square photos). Order: US, Canada, UK, France, Australia, UAE. The highlight still runs left to right. 1000–1199 px keeps UK and France on top with four below; phones keep UK and France first |
| 9 Oct 2026 | Header: new **Services** mega-menu (Accounting, Tax, Company services, Business finance, Cross-border; 33 sub-services, plus links to prices and a free consultation). Phones get an expandable Services section like Locations. One shared list: `site/src/data/services.js`. Nav is now Services · Locations · Pricing · Guides · About, so the full desktop nav shows again from 1200 px (was 1360) |
| 9 Oct 2026 | Service slugs changed to buyer keywords (18 slugs) in the Services menu, footer, home page and master plan |
| 9 Oct 2026 | First service page built: **Self assessment accountants in London** at `/uk/tax/self-assessment-accountant/`. 12 sections, 8 Unsplash photos (credits in `site/src/assets/services/SOURCES.md`), deadline and penalty tables, 3 price packages, comparison table, expert-reviewed box with 5 GOV.UK sources, 9 FAQs. Schema: AccountingService, Service, WebPage, BreadcrumbList, FAQPage. 106 KB HTML (23 KB gzipped), no JS. Reusable: `ServicePage.astro` layout + one data file per page |
| 9 Oct 2026 | Lead form moved into a shared component (`LeadForm.astro`), used on the home page and service pages; it sends the page URL and chooses the topic in advance. `Base.astro` now supports a social share image (`og:image`) and `hreflang` links |
| 9 Oct 2026 | Wrote [docs/03-service-page-template.md](docs/03-service-page-template.md): slug rule, funnel sections, every SEO type and where it sits, data file keys, image rules, checklist for new pages |
| 10 Oct 2026 | Testimonials made site-wide: one file (`site/src/data/reviews.js`) holds the reviews and the Google rating; the home page, every service page, the hero trust lines and the numbers ticker all read from it (`Testimonials.astro` component) |
| 10 Oct 2026 | Speed test (Lighthouse 12.8, production build): home and self assessment pages score **100 / 100 / 100 / 100** (performance, accessibility, best practices, SEO) on phone and desktop. Phone: first content 0.9 s, largest content 1.6 s, layout shift 0, blocking time 0 ms. Self assessment page loads 200 KB in total on a phone (13 images = 133 KB). Fixes made: 2 photos cropped to the card shape, text contrast on green highlighted cards and team placeholders, country picker label for screen readers |
| 13 Oct 2026 | **All 33 service pages built** (32 new): Accounting 6, Tax 8, Company services 5, Business finance 7, Cross-border 7. Each has one data file in `site/src/data/service-pages/`, a 3-line route, 8 Unsplash photos (credits in `site/src/assets/services/SOURCES.md`), 4–6 official sources checked on 13 Oct (GOV.UK, HMRC manuals, Companies House, FCA, British Business Bank, IRS, CRA, ATO, impots.gouv.fr, UAE FTA), 8–10 FAQs and full schema. Production build: every page has 1 H1, title ≤ 60, description ≤ 155, answer 48–57 words, valid JSON-LD with no placeholders, 22–24 KB gzipped. Layout now also supports any number of key-facts tables, `areaServed` per page, rate prices ("Rates from X.X%", kept out of schema) and other currencies. Business finance pages say "we arrange" and carry risk warnings until Severin's lending status is known; cross-border pages say local filing is done "with a licensed partner" (yellow) |
| 13 Oct 2026 | Project put on GitHub (private repo `SeverinfinanceUk/Mainseverinwebsite`) and connected to Vercel by the user; first production deployment succeeded |
| 13 Oct 2026 | Service pages retargeted to **London and France**: 19 accounting/tax/company pages now "London & France" in title, H1, description and answer, with France (and the US, Canada, Australia on expat pages) in `areaServed` and links to `/fr/` and `/fr/londres/`. 7 lending pages say "London & UK-wide". **UAE removed**: `/uae/moving-to-dubai/` page, Dubai photos, UAE menu, footer links and home card deleted; home page now shows 5 countries (UK, France, US, Canada, Australia). Checker: 32 pages, 0 issues |
| 13 Oct 2026 | **Site made UK-only.** Deleted the 4 country-pair pages (`/cross-border/uk-france-tax/`, `/us/`, `/ca/`, `/au/` pages), their data files and photos, and the Paris, New York, Toronto and Sydney card photos. Removed the header country picker and language links, the @com Pluriel Conseils partner logo, and every France/US/Canada/Australia mention in copy, menus, footer and schema. Cross-border menu group renamed **Clients abroad** (non-resident UK tax, UK company from abroad). Home page: new title and description, "London-based, UK-wide" section with 4 cards (London, Across the UK, Living abroad, UK company from abroad), 2 new FAQs for clients abroad. All 28 service pages pass the checker (0 issues); built site scanned clean of other country names. Master plan v2.0, location plan v2.0 and template v2.0 updated to match |
| 13 Oct 2026 | **All location pages built (24).** `/uk/` country hub, `/locations/` hub (CollectionPage + ItemList), `/uk/london/`, 11 London areas and 10 UK cities, on one shared template (`LocationPage.astro`, `location.css`) with copy in `src/data/location-pages/`. Each page has real local facts with listed sources (council business rates, BIDs, clean air zones, Investment Zones, Freeports, combined authorities), 4 local client groups, 6 services, local FAQs and nearby links; `areaServed` uses Wikidata IDs; no office addresses. 115 new Unsplash photos, credits in `site/src/assets/locations/SOURCES.md`. Photo credit links in both SOURCES.md files fixed (numeric unsplash.com/photos links returned 404; now point at images.unsplash.com). Checker: 52 pages, 0 issues, 0 duplicate photos; built site clean of other country names and em dashes |
| 13 Oct 2026 | **Technical SEO foundation** (6218cb3): sitemap index with 4 sitemaps (`lastmod` from each page's `reviewed` date, hero images included), robots.txt allowing search and AI crawlers, llms.txt, 404 page, `vercel.json` (trailing slash, old-site 301s, security headers, long cache on `/_astro/`), site-wide Organization and WebSite schema with `@id` references, `noindex` and verification meta in `Base.astro`, and `site/scripts/check.mjs` as the QA gate (`npm run check`: links, orphans, titles, descriptions, H1, alt text, JSON-LD, placeholders in schema, em dashes, other country names, duplicate photos) |
| 13 Oct 2026 | **Hubs, core and legal pages** (b9d2119): 5 section hubs, `/resources/`, `/about/`, `/team/`, `/contact/` (slot for the form and calendar), `/uk/pricing/` (prices yellow, no price schema), `/reviews/` (noindex until real reviews), and draft privacy, cookie, terms, complaints and accessibility pages marked "Draft for review" and `noindex` |
| 13 Oct 2026 | **Measurement** (6218cb3, b25dcb2): Vercel Web Analytics on every page; GA4 with Consent Mode v2 behind a cookie banner (Accept, Reject, Settings; footer link to change settings); phone and email click events; IndexNow key and ping script; `research/tracking/` with rank-tracking.csv (140 URLs), ai-prompts.csv (50 prompts) and kpi-monthly.csv; AI referral channel group documented |
| 13 Oct 2026 | **Guides: 71 written** (82a87ef, 7aa0733, 0b168de, 1fa0bd9, 070d555, 2715b32, 70dc753) in 6 waves: self assessment and personal tax, limited companies, VAT/payroll/HMRC, property and inheritance, business finance, company services and clients abroad. 900 to 1,600 words each, answer first, question H2s, sourced tables, author box, FAQ, Article and FAQPage schema. Duplicate slugs merged (MTD for income tax, MTD for landlords, VAT penalties, time to pay) |
| 13 Oct 2026 | **Tools and pillar pages** (3a5e543, 223e1af): take-home pay, salary vs dividends, VAT and marginal relief calculators; UK tax calendar 2026-27; glossary (50 terms, DefinedTermSet); data study "UK city business costs 2026-27" (business rates, BID levies, clean air charges for the places we cover, Dataset schema) |
| 13 Oct 2026 | **Fact fixes on service pages** found while writing guides (bc16b0c, 2715b32, 70dc753): payrolling of benefits, IHT instalments, late payment interest, asset finance first-year allowance, EIS advance assurance timescale, EMI size limits; 84 tax years changed to the 2026-27 style |
| 13 Oct 2026 | **Off-page and local SEO pack** (f049e7d): [docs/04-off-page-and-local-seo.md](docs/04-off-page-and-local-seo.md) with the NAP block, Google Business Profile copy (categories, 28 service descriptions, Q&A, 12 weekly posts), citation list, review request and reply templates (DMCC Act compliant), digital PR pitches built on the data study, guest post topics, competitor backlink and log file methods, monthly routine |
| 13 Oct 2026 | **Lighthouse (phone)** on home, VAT accountant, Manchester, a guide, the tax hub and a calculator: 100 performance, 100 accessibility, 100 SEO, 96 best practices (only because the Vercel Analytics script returns 404 locally). Largest content 1.4 to 1.8 s, layout shift 0. No page is wider than 375 px. Checker: 147 pages, all checks passed |
