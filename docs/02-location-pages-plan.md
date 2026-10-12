# Location landing pages: plan

Version 1.0 · 9 Oct 2026 · Companion to [01-master-plan.md](01-master-plan.md)

The site will have one landing page for every city and area we target. All of them are reachable from the **Locations** menu in the header, the footer and a `/locations/` hub page. The single list of pages lives in `site/src/data/locations.js`. Change it there and the menu, footer and hub all update.

## Page list (55 location pages + 6 country hubs + 1 hub)

Priority follows the market decision: UK and France first, then the others, each built properly.

| Wave | Country | Pages | Count |
| --- | --- | --- | --- |
| 1 | United Kingdom | London, and 11 London areas: City of London, Canary Wharf, Westminster, Kensington, Camden, Islington, Shoreditch, Stratford, Croydon, Richmond, Wimbledon | 12 |
| 1 | United Kingdom | Manchester, Birmingham, Leeds, Liverpool, Bristol, Brighton, Cambridge, Oxford, Reading, Milton Keynes | 10 |
| 1 | France (in French) | Français à Londres (`/fr/londres/`), Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Nice | 9 |
| 2 | United States | New York, Los Angeles, San Francisco, Chicago, Houston, Miami, Boston | 7 |
| 2 | Canada | Toronto, Vancouver, Montréal (in French, `/ca/fr/montreal/`), Calgary, Ottawa | 5 |
| 2 | Australia | Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra | 6 |
| 2 | UAE | Dubai, DIFC, DMCC (JLT), Business Bay, Abu Dhabi, Sharjah. **Provisional until UAE keyword research is done** | 6 |

Later, **service × city pages** (e.g. "Self assessment accountant Manchester") are added only where keyword data shows real demand, starting with London.

## The one rule that keeps these pages ranking: no doorway pages

Google's spam policy penalises "doorway pages": near-identical pages where only the city name changes. A site with 55 of them can lose rankings across the **whole domain**, not only on those pages. Every location page must therefore pass this test before it goes live:

> If you swap the city name for another city, would the page become wrong? If not, it is not ready.

Each page needs at least **5 of these 8 local elements**, written for that place:

1. **Local tax facts** that really differ:
   - UK: Scotland's income tax bands (where relevant); business rates and council context for London boroughs.
   - US: state and city tax (New York City income tax; no state income tax in Texas or Florida; California FTB rules).
   - Canada: provincial tax and GST/HST/QST rate (Ontario HST 13%, Quebec QST, Alberta GST only).
   - Australia: state payroll tax thresholds.
   - UAE: free-zone versus mainland company rules (DIFC, DMCC) and qualifying free-zone income for corporate tax.
2. **Who we help there:** the real local client mix, such as fintech in Shoreditch, finance professionals in Canary Wharf, French families in Kensington, oil and gas in Calgary, or expats in Dubai Marina.
3. **A local case study or client story** with a real number (needs Severin's input).
4. **Local reviews**, filtered by client location where possible.
5. **How we serve the area:** an office address only if real, otherwise "online, with meetings in London". **Never invent addresses**; that breaks Google Business Profile rules and can get the profile suspended.
6. **Local deadlines and authorities:** HMRC versus CRA versus ATO versus FTA, state filing dates and local registrars.
7. **Local FAQ (4–6 questions)** taken from Google "People also ask" for that city.
8. **Nearby areas and services:** links to neighbouring area pages and to the 3–5 services most searched in that city.

Pages are written by people with local research, not generated from a template sentence. The template supplies the layout only.

## Location page anatomy

1. Breadcrumb: Home › United Kingdom › London › Canary Wharf.
2. H1 with the main keyword: "Accountants in Canary Wharf".
3. Answer-first summary (40–60 words): who we help there, what it costs from, and how meetings work. This is the paragraph AI answers quote.
4. CTA and trust row (accreditation logos, rating).
5. Local elements from the list above.
6. Services grid filtered to what is offered in that country.
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
| hreflang | French pages are `fr-FR`; Montréal is `fr-CA`; each English country uses its own code (`en-GB`, `en-US`, `en-CA`, `en-AU`, `en-AE`) where a page has a language twin |
| Internal links | Up to the country hub, across to 3–6 nearby areas, and down to local service pages. Linked from the Locations menu, footer (top 8) and `/locations/` |
| Sitemap | Separate `sitemap-locations.xml` so indexing can be tracked per section in Search Console |
| Speed | Same template budget as the home page: no JavaScript, about 20 KB of compressed HTML, one lazy-loaded local photo |

## Rules for launch

- **The menu only lists pages that exist.** Before launch each entry in `locations.js` gets a `live` flag, and the menu, footer and hub show only live pages. Linking to missing pages wastes crawl budget and frustrates visitors.
- Publish in waves (UK and France first), 5–10 pages a week, so each batch gets indexed and checked in Search Console before the next.
- Track every location page in a rank sheet: target keyword, position, clicks and enquiries.

## Off-page support per location

- **Google Business Profile:** only at real addresses. A London profile exists or will be created; others only if Severin has a real office there.
- **Citations:** consistent name, address and phone on Yell, Thomson Local, Bing Places and Apple Business Connect (UK); PagesJaunes (France); Yelp (US and Canada); Yellow Pages Australia (Australia); and local directories in Dubai.
- **Local links:** chambers of commerce (French Chamber of Great Britain, British Chamber of Commerce in France and Dubai, ANZ and Canada UK chambers), expat forums and associations, local press for data stories.

## Open questions for Severin

- Real office or meeting addresses in any of these places?
- Client stories or reviews from specific cities?
- Which services are actually offered in Australia and the UAE (see PROGRESS inputs)?
