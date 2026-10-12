# Current site audit: raw findings

Site: https://severinfinance.com/ · Checked 9 Oct 2026 · Raw files in [raw/](raw/)

## Platform

- WordPress 7.1.3 + Elementor 4.3.4 + Elementor Pro, Astra theme
- Child theme folder is named `camille-nedjar-child` (left over from another client's build)
- Yoast SEO (basic WebPage / Organization schema only, `inLanguage: en-US`)
- Server: Apache, `cache-control: must-revalidate`, no CDN detected

## Speed (curl from this machine, 3 runs)

| Run | Time to first byte | Total |
| --- | --- | --- |
| 1 | 2.32 s | 2.59 s |
| 2 | 2.30 s | 2.58 s |
| 3 | 2.38 s | 2.69 s |

- Home HTML alone is 175 KB, with 18 script files and 33 stylesheets
- `/who-we-are/` is 134 KB and 2.4 s; `/contact/` is 124 KB and 2.4 s
- Google PageSpeed API hit its daily limit during the audit. Re-run at https://pagespeed.web.dev/ in week 1

## Pages in the sitemap (12)

```
/                                         /services/
/home/                                    /services/individual-and-sole-traders/
/home-francais/                           /services/company-accounts/
/about-us/                                /services/specialized-accounting/
/who-we-are/                              /services/consulting/
/contact/                                 /privacy-policy/  /cookie-policy-uk/
```

## SEO findings

- Home `<title>` is only "Severin Finance". There are no meta descriptions
- No clear single H1. Slogans and card labels share heading levels
- No hreflang. French version is a single `/home-francais/` page
- robots.txt sets `Crawl-delay: 10` for all bots
- Logo and schema images load over `http://` (mixed content)
- 6 images on home, 3 with empty alt text
- The same description repeats on 3–4 service cards. "Tax Refund", "Late Returns" and "Tax Disputes" all link to Company Accounts
- About 400–450 unique words on the services page. No blog or guides
- Typos: "bookkeepeing", "Serverin Finance", "I can only recommended"

## Content and business facts found

- Describes itself as a "Chartered Management Accountant Practice" (that is, CIMA) and "an independent firm"
- Promise: a single point of contact, a personalised service, integrity, confidentiality
- Services: self assessment, inheritance tax, CGT, company accounts, tax refunds, late or amended returns, tax disputes, prior-year returns, cross-border accounting, company formation, company secretarial, bookkeeping advice, budgets and cash-flow forecasts, advice on methods of finance, acquisitions and disposals, succession and MBOs, group structures, EIS
- **No lending products listed. No countries named**
- Banner claims "No upfront fees. Max refunds guaranteed." (needs evidence under the ASA advertising code)
- Contact: 020 4542 2488 · Enquiries@severinfinance.com
- Slogan to keep: "Simplifying the complex, so that everything is just black and white."
