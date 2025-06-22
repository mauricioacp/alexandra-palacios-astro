// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://alexandrapalacios.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      serialize(item) {
        // Ensure homepage has highest priority
        if (item.url === 'https://alexandrapalacios.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
