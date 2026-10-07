import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { prefixBase } from './integrations/prefix-base.mjs';

// Productie (eigen domein): geen variabelen nodig -> https://expatease.nl/
// GitHub Pages testlink: SITE_URL en BASE_PATH worden gezet in .github/workflows/deploy.yml
const site = process.env.SITE_URL || 'https://expatease.nl';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap(), prefixBase(base)],
  // TODO: cuando /en/, /es/, /fr/ tengan páginas reales, añadirlas aquí y
  // volver a habilitar el routing i18n multilenguaje.
});
