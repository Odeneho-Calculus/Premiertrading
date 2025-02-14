import createMiddleware from 'next-intl/middleware';

// Only use English locale
export default createMiddleware({
  locales: ['en'],
  defaultLocale: 'en',
  // Force English locale, no switching
  localeDetection: false
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
