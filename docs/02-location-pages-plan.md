# Location landing pages: plan

Version 2.0 · 13 Oct 2026 (UK only: Severin is registered in the UK only, so location pages are UK places only) · Companion to [01-master-plan.md](01-master-plan.md)

The site will have one landing page for every city and area we target. All of them are reachable from the **Locations** menu in the header, the footer and a `/locations/` hub page. The single list of pages lives in `site/src/data/locations.js`. Change it there and the menu, footer and hub all update.

## Page list (32 location pages + 1 country hub + 1 hub)

UK only. People abroad are reached through the Clients abroad service pages (non-resident tax, UK company from abroad), not through location pages, and no other country gets a page.

| Wave | Country | Pages | Count |
| --- | --- | --- | --- |
| 1 | United Kingdom | London, and 11 London areas: City of London, Canary Wharf, Westminster, Kensington, Camden, Islington, Shoreditch, Stratford, Croydon, Richmond, Wimbledon | 12 |
| 1 | United Kingdom | Manchester, Birmingham, Leeds, Liverpool, Bristol, Brighton, Cambridge, Oxford, Reading, Milton Keynes | 10 |
| 2 | United Kingdom | Edinburgh and Glasgow (Scotland), Cardiff (Wales), Belfast (Northern Ireland), Nottingham, Leicester, Sheffield, Newcastle, Southampton, Bath | 10 |

**Status, 13 Oct 2026: all 34 pages are built** (`/uk/`, `/locations/`, London, 11 London areas, 20 cities). Wave 2 pages outside England lead with that nation's own rules: Scottish income tax, LBTT and Scottish rates; Welsh rates, small business rates relief and Land Transaction Tax; Northern Ireland regional plus district rates. Copy lives in `site/src/data/location-pages/<slug>.js`, rendered by `site/src/layouts/LocationPage.astro`. Each page uses local elements 1, 2, 5, 6, 7 and 8 (no case studies yet), lists its sources, and marks the meeting place, fees and reviewer credentials as tbc.

Later, **service × city pages** (e.g. "Self assessment accountant Manchester") are added only where keyword data shows real demand, starting with London.

## The one rule that keeps these pages ranking: no doorway pages

Google's spam policy penalises "doorway pages": near-identical pages where only the city name changes. A site with dozens of them can lose rankings across the **whole domain**, not only on those pages. Every location page must therefore pass this test before it goes live:

> If you swap the city name for another city, would the page become wrong? If not, it is not ready.

Each page needs at least **5 of these 8 local elements**, written for that place:

1. **Local tax facts** that really differ:
   - Scotland's income tax bands (where relevant), business rates, and council context for London boroughs.
2. **Who we help there:** the real local client mix, such as fintech in Shoreditch, finance professionals in Canary Wharf, or international families in Kensington.
3. **A local case study or client story** with a real number (needs Severin's input).
4. **Local reviews**, filtered by client location where possible.
5. **How we serve the area:** an office address only if real, otherwise "online, with meetings in London". **Never invent addresses**; that breaks Google Business Profile rules and can get the profile suspended.
6. **Local deadlines and authorities:** HMRC and Companies House dates, and council business rates.
7. **Local FAQ (4–6 questions)** taken from Google "People also ask" for that city.
8. **Nearby areas and services:** links to neighbouring area pages and to the 3–5 services most searched in that city.

Pages are written by people with local research, not generated from a template sentence. The template supplies the layout only.

## Location page anatomy

1. Breadcrumb: Home › United Kingdom › London › Canary Wharf.
2. H1 with the main keyword: "Accountants in Canary Wharf".
3. Answer-first summary (40–60 words): who we help there, what it costs from, and how meetings work. This is the paragraph AI answers quote.
4. CTA and trust row (accreditation logos, rating).
5. Local elements from the list above.
6. Services grid with the services most searched in that place.
7. Reviews, then the adviser box (name, qualifications, "reviewed on" date).
8. FAQ with FAQPage schema.
9. Nearby areas + closing CTA band with form.

## Technical SEO for every location page

| Item | Rule |
| --- | --- |
| URL | `/uk/london/canary-wharf/`, lowercase, trailing slash, in the country's folder |
| Title | "Accountants in {Place} \| Severin Finance", under 60 characters |
| Meta description | Unique per page, with the place, a service and the free consultation |
| Schema | `AccountingService` with `areaServed` as `City` or `AdministrativeArea` (with Wikidata `sameAs`), plus `BreadcrumbList` and `FAQPage`. No `LocalBusiness` address unless there is a real office |
| Language | `en-GB` on every page. No hreflang (one version of each page) |
| Internal links | Up to the country hub, across to 3–6 nearby areas, and down to local service pages. Linked from the Locations menu, footer (top 8) and `/locations/` |
| Sitemap | Separate `sitemap-locations.xml` so indexing can be tracked per section in Search Console |
| Speed | Same template budget as the home page: no JavaScript, about 20 KB of compressed HTML, one lazy-loaded local photo |

## Rules for launch

- **The menu only lists pages that exist.** Every entry in `locations.js` is now built, so no `live` flag is needed yet. Add one before listing a page that is not built. Linking to missing pages wastes crawl budget and frustrates visitors.
- **Dated facts to refresh:** BID ballot dates (Islington Angel BID 19 Nov 2026, Croydon BID 21 Oct 2026, Love Wimbledon 5 Nov 2026), visitor levies (Edinburgh from 24 Jul 2026, Glasgow from 25 Jan 2027, Cardiff from 1 Apr 2027), the GO! Southampton BID term ending 31 Mar 2027, the Belfast district rate, and the rates, wages and charges tables each April.
- Publish in waves (London first), 5–10 pages a week, so each batch gets indexed and checked in Search Console before the next.
- Track every location page in a rank sheet: target keyword, position, clicks and enquiries.

## Off-page support per location

- **Google Business Profile:** only at real addresses. A London profile exists or will be created; others only if Severin has a real office there.
- **Citations:** consistent name, address and phone on Yell, Thomson Local, Bing Places and Apple Business Connect (UK).
- **Local links:** UK chambers of commerce, expat forums and associations, local press for data stories.

## Open questions for Severin

- Real office or meeting addresses in any of these places?
- Client stories or reviews from specific cities?
