import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://USERNAME.github.io';
const base = process.env.BASE_PATH ?? '/geo-deadlines';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
