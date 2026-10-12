# Pasted keyword research (9 Oct 2026)

Source: a 6-country accounting keyword report pasted into the chat on 9 Oct 2026. It came from another AI tool and was cut off at about 50,000 characters, partway through its "Recommended landing page architecture" section. Like our own seed list, **it has no measured search volumes**. Every keyword is still an idea until it is checked in Keyword Planner, Semrush or Ahrefs.

## What it covered

- 6 markets: US, UK, Canada, Australia, France and Italy, each researched in its own language.
- 11 English service clusters (A–K):
  - outsourced accounting
  - bookkeeping
  - tax
  - payroll
  - virtual CFO
  - audit
  - business accounting
  - advisory
  - company formation
  - industries
  - software
- A list of modifiers (near me, best, cost, pricing, online, virtual and so on).
- Keyword lists per country, a city + service matrix, blog questions, and a 6-country URL idea (`/us/ /uk/ /ca/ /au/ /fr/ /it/`).
- The firm profile it assumed: "outsourced accounting and bookkeeping company" offering every service, remote and local.

## What we did with it

| Action | Result |
| --- | --- |
| Merged new keywords for UK, France, US and Canada into [keyword-master.csv](keyword-master.csv) | **+344 rows** (UK 239, France 37, US 35, Canada 33). Duplicates of our seed list were skipped |
| Filed general English terms under **UK** (the home market) | Their `notes` column says to also check volume in the US and Canada |
| Put Italy and Australia keywords in a separate file, [keyword-candidates-it-au.csv](keyword-candidates-it-au.csv) | **85 rows** (Australia 44, Italy 41), all with priority `Hold – market not in plan v1.0` |
| Added `source` and `notes` columns to the master CSV | `source` is `seed v1 (9 Oct)` or `pasted research (9 Oct)`. `notes` holds the title rules and other warnings |
| Fixed 14 broken seed rows | 12 bare city names ("Marseille", "Miami" and so on) were duplicates and were removed. "Vancouver" and "Calgary" became "bookkeeping services Vancouver" and "bookkeeping services Calgary" |
| Did not turn modifiers into rows | Pairing every modifier with every service makes near-duplicate pages. The modifiers go into page titles and copy instead |
| Did not generate the full city × service matrix | Only the example pairs in the report were added. The report itself warns against hundreds of thin city pages |

Master CSV total: **667 keywords** (UK 410, France 93, US 92, Canada 72).

## Where it differs from our plan

1. **Italy and Australia.** Plan v1.0 covers the UK, France, the US and Canada, the markets Severin serves today. Adding the other two needs a decision from Severin. See "Open questions" below.
2. **No lending.** The report treats Severin as a pure accounting firm. Our plan has lending clusters (business loans, specialist finance, tax-bill funding) and keeps them.
3. **No cross-border edge.** The report has a few generic "international tax" terms. Our plan's strongest angle is UK ↔ France/US/Canada clients (French founders with UK companies, US expats in London). That stays the priority.
4. **Audit.** The report lists statutory audit as a service. In the UK only a registered audit firm can sign a statutory audit, so these rows are on `Hold` until Severin confirms. "Audit preparation" can be offered without registration.
5. **New pages it implies:**
   - `/uk/accounting/outsourced-accounting/`
   - `/uk/industries/<sector>/`, only for sectors with real clients
   - `/fr/comptabilite/paie/`
   - `/fr/comptabilite/daf-externalise/`
   - `/fr/creation-entreprise/`
   These are marked "(new page)" in the CSV and should be added to the site architecture in plan v1.1 once confirmed.
6. **Scotland and Wales.** Glasgow, Edinburgh and Cardiff are on `Hold` because the brief says England.

## Open questions for Severin

- Should Italy and/or Australia be added as markets? Each needs its own legal setup, a local-language site and its own title rules (commercialista, registered tax agent / BAS agent), so they would come in phase 2 at the earliest.
- Does Severin offer payroll, a virtual CFO / FD service, audit, and industry specialisms (which ones)?
- Which accounting software does the team use or hold certifications in (Xero, QuickBooks, Sage)?
