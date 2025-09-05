import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://raulnunez.es',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https'
      }
    ],
    domains: ['raulnunez.es'],
    quality: 80,
    format: ['webp', 'avif']
  },
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'style': ['./src/styles/style.css']
          }
        }
      }
    }
  }
});
