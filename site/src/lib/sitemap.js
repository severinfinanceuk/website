// Builds one sitemap XML file for a group of pages (see src/lib/catalog.js).
// Hero photos go in as <image:image> entries, using the same 1200×630 crop as the share image.
import { getImage } from 'astro:assets';
import { pages, CORE_UPDATED } from './catalog.js';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const GROUPS = ['pages', 'services', 'locations', 'resources'];

export async function sitemapFor(group, site) {
  const rows = await Promise.all(pages.filter((p) => p.group === group).map(async (p) => {
    let img = '';
    if (p.image) {
      const og = await getImage({ src: p.image, width: 1200, height: 630, fit: 'cover', format: 'jpg', quality: 70 });
      img = `<image:image><image:loc>${esc(new URL(og.src, site).href)}</image:loc></image:image>`;
    }
    return `<url><loc>${esc(new URL(p.url, site).href)}</loc><lastmod>${p.lastmod}</lastmod>${img}</url>`;
  }));
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${rows.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}

export function sitemapIndex(site) {
  const latest = (g) => pages.filter((p) => p.group === g).map((p) => p.lastmod).sort().at(-1) ?? CORE_UPDATED;
  const rows = GROUPS.map((g) => `<sitemap><loc>${new URL(`/sitemap-${g}.xml`, site).href}</loc><lastmod>${latest(g)}</lastmod></sitemap>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows.join('\n')}\n</sitemapindex>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
