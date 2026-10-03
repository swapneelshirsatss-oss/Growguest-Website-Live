import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://growguest.in',
  trailingSlash: 'always',
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
  ],
});
