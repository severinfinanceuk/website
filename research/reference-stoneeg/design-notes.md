# Reference design: stoneeg.com

Site: https://stoneeg.com/ · Checked 9 Oct 2026 · Raw HTML and CSS in [raw/](raw/)

## What we copy

| Element | stoneeg.com | Severin Finance version |
| --- | --- | --- |
| Typeface | Suisse Intl (commercial, by Swiss Typefaces), with Manrope as fallback | Option A: license Suisse Intl webfonts. Option B (free): Inter Tight or Manrope |
| Weights | Mostly 500 (43 uses), with 400 for body text | 400 + 500 only, 2 WOFF2 files |
| Type scale (root 10px, so 1rem = 10px) | 9rem display, 4–4.5rem section titles, 3.2rem subheads, 1.6–2rem body | Same scale with fluid `clamp()`: hero 40px on phones, 88px on desktop |
| Letter spacing | -0.01 to -0.05em on large type; 0.2em on uppercase labels | Same |
| Colours | `#000`, `#fff`, `#f1f3fa` off-white, `#e3f5f3` mint, `#33b47b` green, `#eb4242` red | Black, white, off-white panels, green accent, red for errors only |
| Sections | Alternating white and black (`-inverse`) full-width bands | Same rhythm |
| Radius | Cards 1.2–2rem, pill buttons (9999px), round avatars | Same |
| Breakpoints | min-width 360, 768, 1000, 1200, 1600px | Same |

## What we drop (motion and weight)

- Scripts: `reveal.js`, `counters.js`, `hero.js`, `feature-stack.js`, `wistia.js` + Wistia `E-v1.js`, `notice.js`, `offline.js`, custom cursor
- CSS transforms with 0.4–2s transitions
- Stylesheet is 141 KB. Ours will be under 20 KB

## Their home page sections, in order

1. Compliance banner (Rule 506(c) / risk notice)
2. Header: logo, nav, "Book a Meeting" button
3. Large intro headline + tagline
4. "By the numbers": 6 stat blocks + footnote
5. Feature block with "Explore" button
6. 3 cards with thumbnail, title, description
7. Leadership: 3 profile cards (photo, name, title, bio)
8. Video assets list (12 items)
9. Testimonials grid (about 15 cards)
10. FAQ (8 questions) on a black band
11. Closing CTA with 3 stats + button
12. Legal disclosures block
13. Footer: logo, description, address, 2 link columns, copyright

The Severin mapping for each section is in [../../docs/01-master-plan.md](../../docs/01-master-plan.md), under "Design direction and design system".
