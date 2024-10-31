// src/libs/cookieconsent-config.js

export const cookieConsentConfig = {
    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {}
    },
    language: {
      default: 'en',
      translations: {
        en: {
          consentModal: {
            title: 'We use cookies',
            description: 'We use cookies to ensure you get the best experience on our website.',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            showPreferencesBtn: 'Manage preferences'
          },
          preferencesModal: {
            title: 'Manage cookie preferences',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close',
            sections: [
              {
                title: 'Necessary Cookies',
                description: 'These cookies are essential for the website to function correctly.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Analytics Cookies',
                description: 'These cookies collect anonymized information about how you use our website.',
                linkedCategory: 'analytics'
              },
              {
                title: 'More Information',
                description: 'For any queries regarding our cookie policy, please <a href="#contact-page">contact us</a>.'
              }
            ]
          }
        }
      }
    }
  };
  