# Service page template

Version 1.1 · 13 Oct 2026 · First page built: [/uk/tax/self-assessment-accountant/](http://localhost:4321/uk/tax/self-assessment-accountant/). All 33 service pages built on 13 Oct 2026

Every service page follows this template. Each page is a sales funnel: it answers the search, proves we can help, shows the price and asks for the lead. It must also rank, both in Google and in AI answers. The page is built from one data file and one shared layout, so new pages need copy, not code.

| Part | File |
|---|---|
| Layout (all sections, schema, meta) | `site/src/layouts/ServicePage.astro` |
| Styles (service pages only) | `site/src/styles/service.css` |
| Lead form (shared with the home page) | `site/src/components/LeadForm.astro` |
| Testimonials and Google rating (shared site-wide) | `site/src/components/Testimonials.astro` + `site/src/data/reviews.js` |
| Page copy, facts, SEO | `site/src/data/service-pages/<slug>.js` |
| Route (3 lines) | `site/src/pages/<country>/<category>/<slug>.astro` |
| Photos | `site/src/assets/services/<service>/`, credits in `SOURCES.md` |

## 1. Slug rule

The last part of the URL is the page's **main commercial keyword**: the term a buyer types when they are ready to hire someone. It is not the topic name.

- `self-assessment-accountant`, not `self-assessment`. The topic word alone brings people who want to file their own return; "accountant" brings people who want to pay for help.
- Use the same keyword in the slug, the title tag (first words), the H1, the first sentence, one H2, the main image file name and its alt text.
- Use singular "accountant" in the slug. The title and H1 can use the plural ("Self assessment accountants for London and France"), and Google treats the two forms as the same term.
- Keep slugs short (2–4 words), lowercase and hyphenated, with no city name. City variants live under the location pages, e.g. `/uk/london/self-assessment-accountant/`.
- **Before launch:** check volume for every slug in Semrush or Ahrefs (the keyword CSV has no volume data yet). If a close variant has clearly more buyer volume, switch the slug before the page goes live. After launch, a slug change needs a 301.

Slugs applied on 9 Oct 2026 (menu, footer, home page and master plan all updated):

| Old | New |
|---|---|
| limited-company-accounts | limited-company-accountant |
| bookkeeping | bookkeeping-services |
| payroll | payroll-services |
| virtual-fd | virtual-finance-director |
| landlords | landlord-accountant |
| contractors | contractor-accountant |
| self-assessment | self-assessment-accountant |
| corporation-tax | corporation-tax-accountant |
| vat | vat-accountant |
| making-tax-digital | making-tax-digital-accountant |
| capital-gains-tax | capital-gains-tax-accountant |
| inheritance-tax | inheritance-tax-planning |
| hmrc-investigations | hmrc-tax-investigation |
| company-secretarial | company-secretarial-services |
| tax-funding | tax-bill-funding |
| /cross-border/uk-france/ | /cross-border/uk-france-tax/ |
| /ca/cross-border/ | /ca/canada-uk-tax/ |
| /au/cross-border/ | /au/australia-uk-tax/ |

The other slugs (company-formation, business-loans, asset-finance, invoice-finance, commercial-mortgages, bridging-loans, development-finance, tax-refunds, business-valuation, succession-planning, eis-seis) are already the buyer keyword.

## 2. Funnel anatomy

Twelve sections, in this order. The order follows the buyer: "is this for me?", "what does it cost?", "how urgent is it?", "how does it work?", "why you?", "can I trust you?", then "ask". There is a quote button in the hero, in the sticky jump bar, in the deadlines box and at the end. The phone number is in the hero.

| # | Section | Funnel job | SEO job |
|---|---|---|---|
| 1 | **Hero**: breadcrumbs, H1, 40–60 word answer, 2 buttons (quote, call), trust ticks, photo with a "from £" price chip and a key-date card | Hook. Price and urgency shown before any scrolling | H1 = keyword. The answer paragraph is the AI/featured-snippet target (`speakable`) |
| 2 | **Logo strip**: memberships and software | Trust in the first screen | Entity signals |
| 3 | **Jump bar**: chips to each section plus a quote button. Sticky on desktop | Lets people go straight to price or FAQ instead of scrolling. The quote button stays on screen | Gives Google jump links (sitelinks) in results |
| 4 | **Who needs this**: 6 photo cards | "This is for me." Each card is a real buyer segment | Covers the long-tail keywords (landlord, sole trader, director, crypto, child benefit, expat) |
| 5 | **Prices**: 3 packages, middle one featured, plus "always included" | Anchors the price; most people pick the middle one | "<service> fees / cost" keywords |
| 6 | **Key dates / rules**: 1–2 data tables plus a green urgency box | Urgency, with a button for late filers | Table = featured-snippet target. Facts link to GOV.UK |
| 7 | **How it works**: photo, 3 steps, "what we need from you" checklist | Removes effort fears | "How to" queries |
| 8 | **Comparison**: Severin vs doing it yourself vs an online filing app | Answers "why pay an accountant?" | "accountant vs DIY" queries; table snippet |
| 9 | **Proof**: 2 reviews plus the "reviewed by" expert box with sources | Trust before the ask | E-E-A-T: named expert, last-reviewed date, sources |
| 10 | **FAQ**: 8–10 questions | Handles the last objections | FAQPage schema; "People also ask"; AI answers |
| 11 | **Quote form**: dark band, benefit pills, form with the topic chosen in advance | The conversion. Topic and page URL are sent with the lead | — |
| 12 | **Keep exploring**: related services, locations, guides | Keeps people who are not ready yet | Internal links (silo + cross-links) |

**Length:** pages should not feel like a PDF. Swipe rails on phones (cards, prices) keep scrolling short. Tables replace paragraphs, and short sentences replace long ones. Each section has an eyebrow, an H2 of 6 words or fewer where possible, and an intro of at most 2 sentences.

## 3. Every type of SEO, and where it sits on the page

| SEO type | What the template does |
|---|---|
| **Technical** | Lighthouse 100/100/100/100 on phone and desktop (10 Oct 2026). Static HTML, zero JavaScript, CSS inlined, 1 web font. Images are AVIF/WebP with a JPG fallback, sized per screen, and lazy-loaded except the hero (`fetchpriority="high"`). Canonical URL, trailing slash, one H1. Target: under 30 KB gzipped HTML (self assessment page: 23 KB) |
| **On-page** | Keyword in slug, title (≤60 characters, keyword first, brand last; drop "| Severin Finance" when keyword plus place would pass 60), meta description (≤155 characters, keyword plus offer plus CTA), H1, first sentence, H2s, image file names and alt text. Secondary keywords go in H2s, card titles and FAQ questions |
| **Content / E-E-A-T** | "Reviewed by" box: named expert, role, credentials, last-reviewed date and official sources. Facts (dates, penalties, thresholds) come from GOV.UK and are linked. The firm is always presented as a team, never "one accountant" |
| **GEO / AEO (AI answers)** | The first paragraph answers the query in 40–60 words, stands alone and is quotable. Clear tables and question-style H2s. `speakable` schema points to the answer. FAQ answers start with the answer ("Yes.", "£100.") |
| **Structured data** | One JSON-LD `@graph`: AccountingService (the firm), Service (with Offers only when the price is real), WebPage (reviewedBy, lastReviewed, dateModified, citation, speakable, primaryImageOfPage), BreadcrumbList, FAQPage. Placeholders never go into schema |
| **Local** | Two targets, London and France. UK accounting, tax and company pages: title "<keyword> London & France", H1 "<keyword> for London and France", and the answer names London, the UK and France; `areaServed` lists United Kingdom, London and France (plus the US, Canada and Australia on expat-relevant pages). Lending pages: "London & UK-wide" / "in London and across the UK" only, because arranging credit for France needs ORIAS registration. Bookkeeping copy says "UK business records" (French books are an expert-comptable monopoly). English pages cannot win google.fr for French searches: the `/fr/` pages, in French, with hreflang, do that. `areaServed` in the schema. Links to London and area pages. City variants come later under `/uk/<city>/` |
| **Internal linking** | Breadcrumbs, links in the who-cards to sub-services, a "Keep exploring" block (3 services, 3 places, 3 guides), the mega-menu and the footer. Anchor text uses the target page's keyword |
| **Image SEO** | Descriptive keyword file names, real alt text, a 1200×630 OG image built from the hero photo (`og:image`, `twitter:card summary_large_image`) |
| **International** | `hreflang` alternates supported by `Base.astro` (`alternates` prop). Used when a French or other country version exists |
| **Conversion (CRO)** | Price shown in the hero, a quote button in 4 places, phone in the hero, a pre-filled form topic, "free consultation, no obligation" wording, reviews next to the ask, urgency from real deadlines |
| **Off-page / linkable assets** | The deadline and penalty tables and the comparison table are worth linking to and citing. They are what we offer in link outreach and digital PR (see master plan, backlinks section) |
| **Freshness** | `dateModified` and "Last reviewed" date shown on the page. Review every page at least once a year, and straight after any Budget or HMRC rule change |

## 4. Data file keys

Copy `site/src/data/service-pages/self-assessment-accountant.js` and change the values. A `tbc: true` flag shows the value with a yellow highlight and keeps it out of schema.

| Key | What goes in it |
|---|---|
| `url`, `primaryKeyword`, `secondaryKeywords` | The page URL (slug = primary keyword) and the terms it targets |
| `title`, `description` | Title tag (≤60 characters) and meta description (≤155 characters) |
| `reviewed` | `{ date: 'YYYY-MM-DD', label }`. Update on every review |
| `breadcrumb`, `service`, `formTopic` | Trail, schema service name/type, form topic chosen in advance. `service.areaServed` is a list of `[type, name]` pairs, e.g. `[['Country', 'United Kingdom'], ['City', 'London']]` (the default); cross-border pages list both countries |
| `currency` | Optional, default `'GBP'`. Used for schema offers |
| `hero` | eyebrow, h1, answer (40–60 words), image + alt, price `{ from, note, tbc }`, key date `{ label, date, note }`, cta, trust (3 ticks) |
| `jump` | Section ids and chip labels |
| `who` | 6 cards: title, photo, alt, tag, text, optional link |
| `pricing` | 3 plans (name, for, price, items, `featured`, `badge`), `included`, note |
| `deadlines` | Key-facts tables plus an urgency box. Either `dates` + `penalties`, or `tables: [ { caption, head, rows, after } ]` (1 or 2 tables; one table spans the full width). On non-tax pages, use it for any key facts (rates, thresholds, eligibility, loan terms, treaty rules) |
| `hero.price.prefix`, plan `prefix` | Optional words before the price, default "From" / "from", e.g. "Rates from" + `X.X%`. Prices containing `%` never go into schema offers |
| `how` | Photo, 3 steps, checklist |
| `compare` | 3 columns and rows; `true`/`false` show as a tick or a cross |
| `reviewer` | Expert name, role, credentials, text. Reviews and the Google rating are **not** set per page: they come from `site/src/data/reviews.js` (shared site-wide, service pages show the first 2) |
| `faqTitle`, `faqs` | 8–10 questions; each answer starts with the answer |
| `outro` | Final heading, benefit pills, form title and button |
| `related` | 3 groups of links: services, places, guides |
| `sources` | Official links used for facts (GOV.UK, HMRC manuals, legislation) |

## 5. Image rules

- **8 photos per page:** 1 hero, 6 who-cards, 1 how-it-works. Colourful, real people, real settings. No icons or illustrations in place of photos.
- Sources: free commercial licence only (Unsplash, Pexels, Wikimedia CC0). Credit every file in `site/src/assets/services/SOURCES.md`.
- Store at 1000–1800 px wide. Astro builds AVIF, WebP and JPG at the right sizes.
- File name = what is in the photo + keyword: `landlord-rental-income-tax.jpg`.
- Alt text describes the photo in plain words and uses the keyword only where it fits naturally.
- Replace with Severin team and office photos when they are available.

## 6. Checklist for each new page

1. Pick the primary keyword and check its volume. Set the slug.
2. Collect facts from GOV.UK (or the official source for the country) and add them to `sources`.
3. Write the data file. Answer first, short sentences, firm voice ("we", "our team").
4. Find 8 photos and add the credits.
5. Add the 3-line route file.
6. Make sure the menu (`services.js`) and footer link to the slug.
7. Run `npx astro build`. Check: 1 H1, title ≤60 characters, description ≤155 characters, schema valid ([Rich Results Test](https://search.google.com/test/rich-results)), HTML under 30 KB gzipped.
8. Check the page at 390 px and 1440 px wide.
9. Get expert sign-off and set `reviewed`.
10. Add a row to the PROGRESS.md log.

## 7. Open items

- Prices, VAT treatment, Google rating, expert credentials and reply time are placeholders (yellow) until Severin confirms them.
- Linked pages (related services, locations, guides) do not exist yet, so those links 404 for now.
- The form has no handler yet (Phase 2 task).
- Business finance pages: Severin's role (lender, broker or introducer) and FCA status are unknown, so the copy says "we arrange" and the status is yellow. Add an FCA / regulatory strip to these pages once known.
- Cross-border pages: filing in France, the US, Canada and Australia needs a local licence, so the copy says "with a licensed partner" (yellow) until Severin names its partners.
- Australian facts were checked through search results because ato.gov.au blocks automated fetching: check them by hand before launch.
