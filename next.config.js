const withNextIntl = require('next-intl/plugin')('./i18n.js');

module.exports = withNextIntl({
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
});
