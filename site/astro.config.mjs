import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://severinfinance.com',
  trailingSlash: 'always',
  compressHTML: true,
  // CSS is small (<20 KB), so inline it: no render-blocking stylesheet request.
  build: { inlineStylesheets: 'always', format: 'directory' },
  devToolbar: { enabled: false },
  server: { port: 4321, host: true },
});
