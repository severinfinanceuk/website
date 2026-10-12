# Severin Finance: new website

The rebuild of [severinfinance.com](https://severinfinance.com/) is a fast, static and SEO/GEO-focused site for an accounting and lending firm in London. It serves England, France, the United States and Canada. The design reference is [stoneeg.com](https://stoneeg.com/), with no animations.

**Start here:** [PROGRESS.md](PROGRESS.md) shows what is done, what is next and what we are waiting for.

## Folder map

```
Website/
├── README.md                     ← this file
├── PROGRESS.md                   ← status, open inputs, decisions, dated log
├── docs/
│   ├── 01-master-plan.md         ← the full plan (v1.0, 9 Oct 2026)
│   └── diagrams/
│       ├── site-architecture.png
│       └── roadmap.png
├── site/                         ← the website code (Astro)
│   ├── src/pages/index.astro     ← home page
│   ├── src/layouts/Base.astro    ← <head>, SEO tags, schema, header/footer wrapper
│   ├── src/components/           ← Header.astro, Footer.astro
│   ├── src/styles/global.css     ← the whole design system (tokens + components)
│   └── public/                   ← fonts, favicon
└── research/
    ├── current-site/
    │   ├── audit-notes.md        ← findings on the existing WordPress site
    │   └── raw/                  ← home.html, page-sitemap.xml, robots.txt as downloaded
    ├── reference-stoneeg/
    │   ├── design-notes.md       ← fonts, colours, sizes, sections to copy
    │   └── raw/                  ← home.html, styles.css as downloaded
    └── keywords/
        ├── keyword-master.csv    ← 667 keywords (UK, France, US, Canada) by cluster, page, priority, source
        ├── keyword-candidates-it-au.csv ← 85 Italy/Australia keywords, on hold
        └── pasted-research-2026-10-09.md ← what the pasted 6-country research added and changed
```

## Run the site locally

```
cd site
npm install      # first time only
npm run dev      # http://localhost:4321/
npm run build    # production build into site/dist/
```

Yellow-highlighted text on the page is a placeholder waiting for a real figure or fact from Severin.

## Git and GitHub

- Repository: [github.com/SeverinfinanceUk/Mainseverinwebsite](https://github.com/SeverinfinanceUk/Mainseverinwebsite), branch `main`. The whole `Website/` folder is the repository.
- Remote: `https://github.com/SeverinfinanceUk/Mainseverinwebsite.git` (private). Pushing uses the GitHub CLI login (`gh auth login` as SeverinfinanceUk, or any account with write access); the login is kept in the macOS keychain. No API keys or tokens are stored in this folder.
- Not committed (`.gitignore`): `node_modules/`, `dist/`, `.astro/`, `.env` files, `.DS_Store`. Run `npm install` after cloning.
- Hosting: **Vercel** (team `severin-finance`, project `mainseverinwebsite`), connected to this repository. Every push to `main` deploys automatically. The Astro project is in `site/`, so Vercel's Root Directory must be `site`. Deployments are behind Vercel's login until launch.
- After each work session: add the dated line to `PROGRESS.md`, then commit and push.

```
git add -A
git commit -m "What changed"
git push
```

## Master plan contents

1. Executive summary
2. Current website audit
3. Design direction and design system
4. Markets, audiences and search intent
5. Master keyword list
6. Site architecture and URLs
7. Page templates
8. Technical SEO checklist
9. GEO: getting cited by AI search
10. Content strategy and editorial calendar
11. Backlinks, digital PR and local SEO
12. Performance, tech stack and responsiveness
13. Compliance and trust (E-E-A-T)
14. Roadmap, tracking and KPIs

## How we keep this folder up to date

- Every work session adds a dated line to the log in `PROGRESS.md` and ticks off finished items.
- Big changes to the plan bump its version (v1.1, v2.0) and are noted in the log.
- The empty columns in `keyword-master.csv` (`monthly_volume`, `difficulty`, `cpc`, `current_rank`) get filled from the SEO tool pulls in week 1.
