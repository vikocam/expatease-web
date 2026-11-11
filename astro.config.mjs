import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { prefixBase } from './integrations/prefix-base.mjs';

// Productie (eigen domein): geen variabelen nodig -> https://expataid.nl/
// GitHub Pages testlink: SITE_URL en BASE_PATH worden gezet in .github/workflows/deploy.yml
const site = process.env.SITE_URL || 'https://expataid.nl';
const base = process.env.BASE_PATH || '/';
// Same rule as src/config.ts: the sin-expatable build has no ExpaTable page in the sitemap.
const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.GITHUB_REF_NAME || '';
const showExpaTable = branch !== 'sin-expatable' && process.env.PUBLIC_SHOW_EXPATABLE !== 'false';

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({ filter: (page) => showExpaTable || !page.includes('/spreekuur/') }),
    prefixBase(base),
  ],
  // Languages: NL at the root, EN/ES/FR under /en/, /es/, /fr/ with the same paths.
  // Routes live in src/pages/[lang]/, texts in src/i18n/.
});
