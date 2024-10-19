import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import astroIcon from 'astro-icon';

import astrowind from './vendor/integration';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración optimizada para sitio estático en Plesk
export default defineConfig({
  output: 'server',  // Salida estática optimizada para Plesk
  adapter: node({
    mode: "standalone"
  }),
  server: {
    host: true
  },  // Asegúrate de reemplazar esto por tu dominio real
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    astroIcon({
      collections: {
        tabler: () => import('@iconify-json/tabler/icons.json'),
      },
    }),
    sitemap(), // Genera el sitemap automáticamente para SEO
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    partytown({
      config: { forward: ['dataLayer.push'] },
    }),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },

  vite: {
    resolve: {
      alias: {
      //  '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
