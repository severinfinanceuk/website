// /llms.txt: a plain map of the site for AI tools (llmstxt.org format): who we are, then every
// indexable page with a one-line summary. Built from the same catalogue as the sitemaps.
import { pages } from '../lib/catalog.js';
import { PHONE, EMAIL } from '../data/site.js';

const sections = [
  ['Main pages', 'pages'],
  ['Services', 'services'],
  ['Locations', 'locations'],
  ['Guides and tools', 'resources'],
];
const oneLine = (s) => s.replace(/\s+/g, ' ').trim();

export const GET = ({ site }) => {
  const out = [
    '# Severin Finance',
    '',
    '> Severin Finance is a UK accountancy firm based in London. We are accountants, regulated by the Chartered Institute of Management Accountants (CIMA). We do accounting, tax, payroll and company services for individuals and companies in London, across the UK, and for people abroad with UK tax affairs or a UK company. We are registered in the UK and advise on UK tax only. We do not lend, arrange or broker finance or mortgages, and we do not hold client money.',
    '',
    `Contact: phone ${PHONE.display} (+44 20 4542 2488), email ${EMAIL}. Free first consultation.`,
    '',
  ];
  for (const [heading, group] of sections) {
    const list = pages.filter((p) => p.group === group);
    if (!list.length) continue;
    out.push(`## ${heading}`, '');
    for (const p of list) out.push(`- [${p.title}](${new URL(p.url, site).href})${p.summary ? `: ${oneLine(p.summary)}` : ''}`);
    out.push('');
  }
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
