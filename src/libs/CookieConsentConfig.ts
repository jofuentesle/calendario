import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  root: '#cc-container',

  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom center', // Centrado en la parte inferior
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
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('Google Analytics 4 aceptado');
          },
          onReject: () => {
            console.log('Google Analytics 4 rechazado');
          },
          cookies: [
            {
              name: /^_ga/,
            },
            {
              name: '_gid',   // string: exact cookie name
            }
          ],
        },
      },
      },
      marketing: {
        enabled: true,
        readOnly: false,
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
          acceptNecessaryBtn: 'Rechazar necesarias',
          showPreferencesBtn: 'Gestionar preferencias',
          footer:
            '<a href="/privacy">Política de Privacidad</a> | <a href="/terms">Términos y condiciones</a>',
        },
        preferencesModal: {
          title: 'Centro de Preferencias de Consentimiento',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Rechazar todas',
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
              title:
                'Cookies necesarias <span class="pm__badge">Siempre activadas</span>',
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
};
