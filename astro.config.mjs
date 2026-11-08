import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { prefixBase } from './integrations/prefix-base.mjs';

// Productie (eigen domein): geen variabelen nodig -> https://expataid.nl/
// GitHub Pages testlink: SITE_URL en BASE_PATH worden gezet in .github/workflows/deploy.yml
const site = process.env.SITE_URL || 'https://expataid.nl';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap(), prefixBase(base)],
  // Languages: NL at the root, EN/ES/FR under /en/, /es/, /fr/ with the same paths.
  // Routes live in src/pages/[lang]/, texts in src/i18n/.
});
