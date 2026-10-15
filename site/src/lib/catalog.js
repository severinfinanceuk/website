// Every page on the site, in one list, for the sitemaps and /llms.txt.
// URLs come from the page files themselves (src/pages), so a new page is never missed.
// Titles, summaries, dates and hero images come from the page data files where a page has one.
import { services } from '../data/services.js';
import { noindexPaths } from '../data/site.js';

// Date for pages without a data file (core and utility pages). Change it when they change.
export const CORE_UPDATED = '2026-10-13';

const pageFiles = Object.keys(import.meta.glob('../pages/**/*.astro'));
const dataMods = {
  ...import.meta.glob('../data/service-pages/*.js', { eager: true }),
  ...import.meta.glob('../data/location-pages/*.js', { eager: true }),
  ...import.meta.glob('../data/hub-pages/*.js', { eager: true }),
  ...import.meta.glob('../data/tool-pages/*.js', { eager: true }),
};
export const guides = Object.values(import.meta.glob('../data/guides/*.js', { eager: true }))
  .map((m) => m.default)
  .sort((a, b) => a.title.localeCompare(b.title));

const byUrl = new Map();
for (const m of Object.values(dataMods)) if (m.default?.url) byUrl.set(m.default.url, m.default);
for (const g of guides) byUrl.set(g.url, g);

// Core pages: one-line summaries for /llms.txt (their copy lives in the .astro file)
export const corePages = {
  '/': ['Severin Finance home', 'UK accountancy firm in London: accounting, tax, payroll and company services for clients across the UK and UK clients living abroad.'],
  '/about/': ['About Severin Finance', 'Who we are, how we work and the professional bodies we belong to.'],
  '/team/': ['Our team', 'The accountants and advisers who look after Severin Finance clients.'],
  '/contact/': ['Contact Severin Finance', 'Phone 020 4542 2488, email enquiries@severinfinance.com, book a free consultation.'],
  '/uk/pricing/': ['Pricing', 'Fixed fees for accounting, tax and company services, agreed in writing before work starts.'],
  '/resources/': ['UK tax and business guides', 'Plain-English guides to UK tax, accounts, payroll, company law and payroll, with the 2026-27 rates.'],
  '/locations/': ['Our locations', 'London, 11 London areas, 20 UK cities and UK tax help for clients abroad.'],
  '/reviews/': ['Client reviews', 'What clients say about Severin Finance.'],
};

const toUrl = (f) => {
  const p = f.replace('../pages', '').replace(/\.astro$/, '').replace(/\/index$/, '/');
  return p.endsWith('/') ? p : p + '/';
};
const staticUrls = pageFiles.filter((f) => !f.includes('[') && !f.endsWith('/404.astro')).map(toUrl);
const allUrls = [...new Set([...staticUrls, ...guides.map((g) => g.url)])].sort();

const serviceUrls = new Set(services.flatMap((c) => c.items.map(([, href]) => href)));
const groupOf = (url) => {
  if (url.startsWith('/resources/')) return 'resources';
  if (serviceUrls.has(url)) return 'services';
  if (url === '/locations/' || url === '/uk/' || url.startsWith('/uk/london/') || (byUrl.get(url)?.place)) return 'locations';
  return 'pages';
};

// [{ url, group, lastmod, image, title, summary }]
export const pages = allUrls
  .filter((url) => !noindexPaths.includes(url))
  .map((url) => {
    const d = byUrl.get(url);
    return {
      url,
      group: groupOf(url),
      lastmod: d?.reviewed?.date ?? CORE_UPDATED,
      image: d?.hero?.image,
      imageAlt: d?.hero?.imageAlt,
      title: d ? d.title.replace(/ \| Severin Finance$/, '') : corePages[url]?.[0] ?? url,
      summary: d ? (d.hero?.answer ?? d.description) : corePages[url]?.[1] ?? '',
    };
  });
