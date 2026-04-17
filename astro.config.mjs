// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexandrapalacios.com',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/deglucion-infantil/': '/terapia-miofuncional/',
    '/disfagia-adultos/': '/terapia-miofuncional/',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/opinion'),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        if (item.url === 'https://alexandrapalacios.com/') {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
