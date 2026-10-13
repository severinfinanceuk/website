// /sitemap-locations.xml (built from src/lib/catalog.js; noindex pages are left out)
import { sitemapFor } from '../lib/sitemap.js';
export const GET = ({ site }) => sitemapFor('locations', site);
