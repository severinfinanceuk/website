// /sitemap-index.xml: lists the four sitemaps below. Submitted to Search Console and Bing.
import { sitemapIndex } from '../lib/sitemap.js';
export const GET = ({ site }) => sitemapIndex(site);
