import type { CookieConsentConfig } from 'vanilla-cookieconsent';

/**
 * Configuración personalizada para el consentimiento de cookies.
 */
const config: CookieConsentConfig = {
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
    functionality: {},
    analytics: {},
    ads: {}, // Añadido si planeas usar cookies para publicidad.
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
              title: 'Cookies necesarias <span class="pm__badge">Siempre activadas</span>',
              description:
                'Estas cookies son esenciales para el funcionamiento del sitio web.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies de funcionalidad',
              description:
                'Permiten recordar preferencias y mejorar la experiencia del usuario.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Cookies analíticas',
              description: 'Ayudan a entender cómo los usuarios interactúan con el sitio.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Cookies publicitarias',
              description: 'Utilizadas para mostrar anuncios relevantes.',
              linkedCategory: 'ads',
            },
          ],
        },
      },
    },
  },
};

export default config;

