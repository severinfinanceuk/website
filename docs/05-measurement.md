# Measurement and analytics

How severinfinance.com measures traffic, leads, rankings and AI visibility. This covers what is already built in, the setup steps only Severin can do, and the monthly routine.

Last updated: 13 October 2026.

## 1. What is built into the site

| Tool | What it does | Cookies | Where to change it |
|---|---|---|---|
| Vercel Web Analytics | Page views, referrers, countries, devices. Runs on every page of the built site | None | Turn it on in the Vercel dashboard (Project > Analytics) |
| Google Analytics 4 (Consent Mode v2) | Full analytics: channels, landing pages, events, key events | `_ga`, `_ga_<ID>`, plus `sf_consent` | `site/src/data/analytics.js` (`GA4_ID`) |
| Click events | `phone_click` and `email_click`, sent to both tools | None | `site/src/components/Analytics.astro` |
| IndexNow | Tells Bing (and the other IndexNow engines) about new or changed URLs | n/a | `npm run indexnow` in `site/` |

How GA4 consent works:
- While `GA4_ID` is empty, nothing from Google loads and no banner shows. The site then sets no cookies at all.
- With an ID, consent defaults to denied. `gtag.js` is only requested after the visitor clicks **Accept analytics**.
- Clicking **Reject** keeps Google off. The choice is stored in `sf_consent` for 180 days.
- "Cookie settings" in the footer, and the button on `/cookie-policy/`, reopen the banner. Withdrawing consent deletes the `_ga` cookies.
- This is the only JavaScript on most pages: about 1 KB without GA4 and 2.5 KB with it. It is an agreed exception to the zero-JS rule.

When the forms and booking calendar are added:
- Send a `generate_lead` event on a successful submit and a `book_appointment` event on a confirmed booking. Fire them from the thank-you state, not on button click.
- Add the form and calendar origins to `form-action`, `connect-src` and `frame-src` in `site/vercel.json`.

## 2. Setup steps for Severin (one-off)

1. **Vercel Web Analytics:** in the Vercel project, open Analytics and enable it. No code change is needed.
2. **GA4:**
   - Create a GA4 property (time zone: London; currency: GBP) and a web data stream for `https://severinfinance.com`.
   - Paste the measurement ID (`G-…`) into `GA4_ID` in `site/src/data/analytics.js`, then commit.
   - In GA4 Admin:
     - Set data retention to 14 months.
     - Turn off Google signals unless there is a reason to use it.
     - Mark `phone_click`, `email_click` and later `generate_lead` and `book_appointment` as **key events**.
     - Add the AI channel group (section 3).
   - Once the banner is live, remove `/cookie-policy/` from `noindexPaths` (after the legal review).
3. **Google Search Console:**
   - Add a Domain property (DNS TXT record). That is the most robust option and covers every subdomain and protocol.
   - Or add a URL-prefix property and paste the HTML-tag code into `verification.google` in `site/src/data/site.js`.
   - Submit `https://severinfinance.com/sitemap-index.xml`.
4. **Bing Webmaster Tools:**
   - Import from Search Console, or paste the code into `verification.bing`.
   - Submit the same sitemap. Bing also feeds Copilot and ChatGPT search, so it matters for AI visibility.
5. **IndexNow:**
   - The key file is already published at `/9b06bd1f98dfec8b5d969c6a27ae64ce.txt`.
   - After each deploy that adds or changes pages, run `npm run indexnow -- /changed-url/ /another/`.
   - With no arguments, it submits every URL in the sitemaps.
6. **Google Business Profile:** see `docs/04-off-page-and-local-seo.md`. Add UTM tags to the website link (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) so profile visits are kept apart from other organic traffic.

## 3. AI referral channel group (GA4)

AI assistants send visitors who are close to buying, and they are easy to lose inside "Referral".

To set it up:
1. In GA4 Admin, open Data display > Channel groups and copy the default group.
2. Add a channel called **AI assistants**, with the condition "Source matches regex":

```
^(chatgpt\.com|chat\.openai\.com|.*\.openai\.com|perplexity\.ai|www\.perplexity\.ai|gemini\.google\.com|bard\.google\.com|copilot\.microsoft\.com|.*copilot.*|claude\.ai|you\.com|phind\.com|poe\.com|meta\.ai|chat\.mistral\.ai|deepseek\.com|chat\.deepseek\.com)$
```

3. **Move it above "Referral"** so these sessions are not counted twice.
4. Do the same check in Vercel Analytics, under Referrers.

Google AI Overviews and AI Mode clicks arrive as ordinary Google organic traffic, so they cannot be separated in GA4. Track them through the prompt checks in section 5 and through Search Console impressions.

## 4. Key events and lead attribution

| Event | When | Key event |
|---|---|---|
| `phone_click` | A `tel:` link is clicked (header, sticky bar, page bodies) | Yes |
| `email_click` | A `mailto:` link is clicked | Yes |
| `generate_lead` | The enquiry form is submitted successfully (once forms exist) | Yes |
| `book_appointment` | A consultation is booked (once the calendar exists) | Yes |

Phone clicks are an intent signal, not a confirmed call. For true call tracking, add a call-tracking number later and swap it in through `PHONE` in `site/src/data/site.js`. Keep the main number on Google Business Profile and in citations.

Ask every new client how they found us, and record it in the CRM. That catches AI and word-of-mouth leads that analytics cannot see.

## 5. Tracking sheets (`research/tracking/`)

| File | What it holds | How often |
|---|---|---|
| `rank-tracking.csv` | Every live and planned URL with its primary and 2 secondary keywords, search location and device (mobile). Guides and tools are listed as `planned`; change them to `live` when published | Monthly (first Monday) |
| `ai-prompts.csv` | 50 buyer and information prompts with the target URL. For each engine, record whether Severin was mentioned, the URL cited and the position in the answer, plus any competitors named | Monthly |
| `kpi-monthly.csv` | One row per month from November 2026: traffic by channel, leads, Search Console, Bing, rankings, AI visibility, Google Business Profile, reviews, links and Core Web Vitals | Monthly |

How to check prompts:
- Use a logged-out or fresh session where possible, with location set to the UK.
- Record the answer as given; do not re-run until the result looks good.
- Engines: ChatGPT (search on), Perplexity, Gemini, Copilot, Google AI Overviews/AI Mode and Claude.

Rank tracking:
- Any rank tracker can import `rank-tracking.csv`, for example Semrush Position Tracking, Ahrefs Rank Tracker or SE Ranking.
- Set the location to London for London-targeted rows and to the named city for city pages.

## 6. Monthly routine (about 2 hours)

1. Fill in the month's row in `kpi-monthly.csv`, pulling from GA4, Search Console, Bing, Vercel and Google Business Profile.
2. Update the ranks and run the 50 AI prompts.
3. In Search Console:
   - Check Pages > "Not indexed" for new problems.
   - Look for queries with high impressions and a low CTR. Rewrite those titles and descriptions, keeping titles to 60 characters and descriptions to 155.
4. Check Core Web Vitals in Search Console and Vercel Speed Insights. The targets at p75 are LCP under 2.5 s, INP under 200 ms and CLS under 0.1.
5. Pick the 3 pages with the most impressions but positions 5 to 15, and improve them:
   - a clearer answer-first paragraph
   - a fact table
   - FAQs
   - internal links from related pages
6. Review the dates on rates pages. Anything tied to the tax year needs re-checking each April, and after each Budget or Autumn Statement.

## 7. Targets for the first 12 months

Set the baselines in the first full month after launch. Until then, these are directional.

| KPI | 3 months | 6 months | 12 months |
|---|---|---|---|
| Pages indexed (of those in the sitemap) | 80% | 95% | 98% |
| Keywords in the top 10 (of the rank sheet) | baseline | +25% | +60% |
| Organic sessions a month | baseline | 2x | 4x |
| Leads a month (calls, emails, forms) | baseline | 2x | 3x |
| AI prompts that mention Severin (of 50) | baseline | 5 | 12 |
| Google reviews | 10 | 25 | 50 |
