import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // Adaptador para Netlify
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import astroIcon from 'astro-icon';

import astrowind from './vendor/integration';
import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';
// Aumentar el límite de listeners permitidos.
import { setMaxListeners } from 'events';
setMaxListeners(20);


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuración optimizada para Netlify
export default defineConfig({
  site: 'https://calendarios.reprodisseny.com',
  output: 'server', // Usa 'server' si necesitas SSR o funciones
  adapter: netlify(), // Cambiado a Netlify Functions
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    astroIcon({
      collections: {
        tabler: () => import('@iconify-json/tabler/icons.json'),
      },
    }),
    sitemap(),
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
    jopSoftwarecookieconsent({
      // Configuración de cookie consent
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom center',
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
        },
      },
      language: {
        default: 'es',
        autoDetect: 'browser',
        translations: {
          es: {
            consentModal: {
              title: 'Uso de cookies',
              description:
                'En REPRO DISSENY utilizamos cookies para mejorar su experiencia de navegación. Al continuar navegando en nuestro sitio, acepta el uso de cookies de acuerdo con nuestra Política de Cookies.',
              acceptAllBtn: 'Aceptar todas',
              acceptNecessaryBtn: 'Aceptar necesarias',
              footer:
                '<a href="/privacy">Política de Privacidad</a> | <a href="/terms">Términos y condiciones</a>',
            },
            preferencesModal: {
              title: 'Centro de Preferencias de Consentimiento',
              acceptAllBtn: 'Aceptar todas',
              acceptNecessaryBtn: 'Aceptar necesarias',
              savePreferencesBtn: 'Guardar preferencias',
              closeIconLabel: 'Cerrar',
              serviceCounterLabel: 'Servicio|Servicios',
              sections: [
                {
                  title: 'Definición y función de las cookies',
                  description:
                    'Las cookies permiten almacenar y recuperar información sobre sus hábitos de navegación y pueden utilizarse para reconocer al usuario en futuras visitas.',
                },
                {
                  title: 'Cookies necesarias <span class="pm__badge">Siempre activadas</span>',
                  description:
                    'Estas cookies son esenciales para el funcionamiento del sitio web y permiten la navegación y el acceso seguro a áreas protegidas.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Cookies de funcionalidad',
                  description:
                    'Permiten recordar sus preferencias de navegación y mejorar la experiencia en nuestro sitio.',
                  linkedCategory: 'functionality',
                },
                {
                  title: 'Cookies analíticas',
                  description:
                    'Utilizamos Google Analytics para conocer cómo interactúan los usuarios con nuestro sitio web y mejorar nuestros servicios.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Más información',
                  description:
                    'Para consultas sobre nuestra política de cookies, puede <a class="cc__link" href="mailto:repro@reprodisseny.com">contactarnos</a>.',
                },
              ],
            },
          },
        },
      },
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
    define: {},
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  optimizeDeps: {
    include: ['swiper'],
  },
});
