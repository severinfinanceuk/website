// Tell Bing, Yandex and other IndexNow engines about new or changed pages (Google does not use IndexNow).
// Run after a deploy is live:
//   npm run indexnow                      every URL in the built sitemaps (first launch)
//   npm run indexnow -- /uk/tax/ /about/  only the pages you changed
// The key file is public/<KEY>.txt and must be live at https://severinfinance.com/<KEY>.txt first.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const KEY = '9b06bd1f98dfec8b5d969c6a27ae64ce';
const HOST = 'severinfinance.com';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

let urls = process.argv.slice(2).map((p) => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`);
if (!urls.length) {
  const dist = join(root, 'dist');
  if (!existsSync(dist)) { console.error('No dist/ folder: run npm run build first, or pass the paths to submit.'); process.exit(1); }
  for (const f of readdirSync(dist).filter((x) => /^sitemap-(?!index).*\.xml$/.test(x))) {
    for (const [, loc] of readFileSync(join(dist, f), 'utf8').matchAll(/<url><loc>([^<]+)<\/loc>/g)) urls.push(loc);
  }
}
if (!urls.length) { console.error('No URLs to submit.'); process.exit(1); }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`IndexNow: ${urls.length} URL(s) submitted, response ${res.status} ${res.statusText}`);
if (res.status >= 400) process.exit(1);
