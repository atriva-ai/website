import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // set your final domain
  site: 'https://atriva.ai',

  integrations: [tailwind(), sitemap(), mdx()],

});