// QA gate for the built site. Run after `astro build`: `npm run check` (no dependencies).
// Fails (exit 1) when any page breaks the SEO and content rules in docs/03-service-page-template.md
// and docs/02-location-pages-plan.md:
//   title > 60 or description > 155 characters, not exactly one H1, missing canonical,
//   JSON-LD that does not parse or carries a placeholder (XXX, X.X, tbc text),
//   ("EEA citizens" is allowed: it is a UK legal test for the personal allowance, not a market),
//   em dashes, en dashes in prose, "undefined", names of other countries (UK-only rule),
//   images without alt text or size, answer-first intro outside 40 to 60 words,
//   broken internal links, orphan pages (no link from any other page),
//   sitemap URLs that do not exist, and the same photo used twice.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
if (!existsSync(dist)) { console.error('No dist/ folder: run npm run build first.'); process.exit(1); }

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('index.html'));
const urlOf = (f) => { const r = relative(dist, dirname(f)).split('\\').join('/'); return r ? `/${r}/` : '/'; };
const pages = new Set(htmlFiles.map(urlOf));
const assets = new Set(files.map((f) => '/' + relative(dist, f).split('\\').join('/')));

const decode = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n)).replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
const otherPlaces = /\b(France|French|Paris|UAE|Dubai|Emirates|United States|USA|America|American|Spain|Spanish|Germany|German|India|China|Australia|Canada|Ireland|Irish|Europe|European|EU|EEA|IRS|DGFiP)\b/g;

const problems = [];
const linkedFrom = new Map();   // url -> set of pages linking to it
const broken = new Map();
const flag = (url, msg) => problems.push(`${url}  ${msg}`);

for (const f of htmlFiles) {
  const url = urlOf(f);
  const raw = readFileSync(f, 'utf8');
  const head = raw.split('</head>')[0];
  const bodyHtml = raw.slice(head.length);
  const title = decode(head.match(/<title>(.*?)<\/title>/s)?.[1] ?? '');
  const desc = decode(head.match(/<meta name="description" content="(.*?)"/s)?.[1] ?? '');
  if (!title) flag(url, 'no title'); else if (title.length > 60) flag(url, `title ${title.length} chars`);
  if (!desc) flag(url, 'no description'); else if (desc.length > 155) flag(url, `description ${desc.length} chars`);
  if (!/<link rel="canonical"/.test(head)) flag(url, 'no canonical');
  const h1 = (raw.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) flag(url, `${h1} H1`);
  for (const [, block] of raw.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(block); } catch (e) { flag(url, `bad JSON-LD: ${e.message}`); }
    if (/XXX|\bX\.X\b|£XX|\btbc\b|\(to confirm\)/i.test(block)) flag(url, 'placeholder in schema');
  }
  const gz = gzipSync(raw).length / 1024;
  if (gz > 40) flag(url, `${gz.toFixed(1)} KB gzipped (budget 40)`);
  if (raw.includes('\u2014')) flag(url, 'em dash');
  const text = decode(bodyHtml.replace(/<script.*?<\/script>|<style.*?<\/style>/gs, ' ').replace(/<[^>]+>/g, ' '));
  if (/\w \u2013 \w/.test(text)) flag(url, 'en dash in prose');
  if (/\bundefined\b|\bNaN\b|\[object Object\]/.test(text)) flag(url, 'undefined/NaN in output');
  const words = new Set(text.replace(/Northern Ireland|EEA (citizen|national)s?|\bFrench(?=, Romanian)/g, '').match(otherPlaces) || []);
  if (words.size) flag(url, `other country words: ${[...words].join(', ')}`);
  for (const [img] of bodyHtml.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt(=|[\s>/])/.test(img)) flag(url, `img without alt: ${img.slice(0, 80)}`);
    if (!/\swidth="/.test(img) || !/\sheight="/.test(img)) flag(url, `img without width/height: ${img.slice(0, 80)}`);
  }
  const ans = raw.match(/class="sp-answer"[^>]*>(.*?)<\/p>/s);
  if (ans && !raw.includes('name="robots" content="noindex')) {
    const n = decode(ans[1].replace(/<[^>]+>/g, '')).split(/\s+/).filter(Boolean).length;
    if (n < 40 || n > 60) flag(url, `answer-first intro ${n} words (40 to 60)`);
  }
  // Guides: at least 800 words, owning service linked within the first 150 words
  const art = raw.match(/<article class="prose" data-service="([^"]+)"[^>]*>(.*?)<\/article>/s);
  if (art) {
    const [, service, body] = art;
    const wordsIn = (h) => decode(h.replace(/<[^>]+>/g, ' ')).split(/\s+/).filter(Boolean).length;
    const total = wordsIn(body);
    if (total < 800) flag(url, `guide only ${total} words (800+)`);
    const at = body.indexOf(`href="${service}"`);
    if (at < 0 || wordsIn(body.slice(0, at)) > 150) flag(url, `owning service ${service} not linked in the first 150 words`);
  }
  for (const [, href] of bodyHtml.matchAll(/href="(\/[^"#?]*)/g)) {
    if (href.startsWith('/_astro/') || href.startsWith('/_vercel/')) continue;
    if (/\.[a-z0-9]+$/i.test(href)) { if (!assets.has(href)) broken.set(href, (broken.get(href) || new Set()).add(url)); continue; }
    const h = href.endsWith('/') ? href : href + '/';
    if (!pages.has(h)) broken.set(h, (broken.get(h) || new Set()).add(url));
    else if (h !== url) linkedFrom.set(h, (linkedFrom.get(h) || new Set()).add(url));
  }
}

for (const [h, src] of [...broken].sort()) problems.push(`BROKEN LINK ${h}  from ${src.size} page(s), e.g. ${[...src].slice(0, 2).join(', ')}`);
for (const u of pages) if (u !== '/' && u !== '/404/' && !linkedFrom.has(u)) problems.push(`ORPHAN ${u}  (no page links to it)`);

// Sitemaps: every URL must be a built page, and no noindex page may be listed
for (const f of files.filter((x) => /sitemap-(?!index).*\.xml$/.test(x))) {
  for (const [, loc] of readFileSync(f, 'utf8').matchAll(/<url><loc>https:\/\/[^/]+(\/[^<]*)<\/loc>/g)) {
    if (!pages.has(loc)) problems.push(`SITEMAP ${relative(dist, f)} lists missing page ${loc}`);
    else if (readFileSync(join(dist, loc, 'index.html'), 'utf8').includes('content="noindex')) problems.push(`SITEMAP lists noindex page ${loc}`);
  }
}

// The same photo used twice anywhere on the site
const seen = new Map();
for (const dir of ['src/assets/services', 'src/assets/locations']) {
  const d = join(root, dir);
  if (!existsSync(d)) continue;
  for (const p of walk(d).filter((x) => /\.(jpe?g|png|webp)$/i.test(x))) {
    const h = createHash('md5').update(readFileSync(p)).digest('hex');
    seen.set(h, [...(seen.get(h) || []), relative(root, p)]);
  }
}
for (const v of seen.values()) if (v.length > 1) problems.push(`DUPLICATE PHOTO ${v.join(', ')}`);

console.log(`${pages.size} pages checked.`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log('  ' + p);
  process.exit(1);
}
console.log('All checks passed.');
