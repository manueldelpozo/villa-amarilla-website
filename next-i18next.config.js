// next-i18next.config.js
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'pl'],
  },
  defaultNS: 'common',
  localePath: './public/locales',
};