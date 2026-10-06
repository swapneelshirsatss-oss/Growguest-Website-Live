import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://growguest.in',
  trailingSlash: 'always',
  redirects: {
    '/about': '/about-hospitality-marketing-agency/',
    '/services': '/hotel-digital-marketing-services/',
    '/contact': '/contact-hospitality-digital-marketing-agency/',
    '/contact-us': '/contact-hospitality-digital-marketing-agency/',
    '/contact-hospitality-marketing-agency': '/contact-hospitality-digital-marketing-agency/',
    '/direct-booking-solutions': '/hotel-direct-booking-solutions/',
    '/free-audit': '/free-hotel-digital-marketing-audit/',
    '/hotel-marketing-case-studies': '/hospitality-marketing-case-studies/',
    '/blog': '/hospitality-digital-marketing-blog/',
  },
  server: {
    host: true,
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
  ],
});
