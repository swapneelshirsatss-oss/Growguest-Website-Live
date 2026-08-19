import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://growguest.in',
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => 
        !page.endsWith('/services/') && 
        !page.endsWith('/direct-booking-solutions/') && 
        !page.endsWith('/hotel-marketing-case-studies/') && 
        !page.endsWith('/free-audit/') &&
        !page.endsWith('/about/') &&
        !page.endsWith('/contact/') &&
        !page.endsWith('/contact-us/'),
    }),
  ],
});
