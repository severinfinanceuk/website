// /robots.txt: every crawler welcome, including the AI search and answer crawlers
// (docs/01-master-plan.md, GEO). No crawl delay. Only /api/ is blocked (form handlers, later).
const aiBots = [
  'Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'Perplexity-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot', 'Applebot-Extended',
  'DuckDuckBot', 'Amazonbot', 'CCBot', 'meta-externalagent', 'MistralAI-User',
];
export const GET = ({ site }) => new Response(
  [
    '# Severin Finance: all crawlers welcome.',
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', 'Disallow: /api/', '']),
    'User-agent: *', 'Allow: /', 'Disallow: /api/', '',
    `Sitemap: ${new URL('/sitemap-index.xml', site).href}`, '',
  ].join('\n'),
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
