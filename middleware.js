import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
  localeCookie: {
    name: 'preferredLocale' // Session cookie (no maxAge)
  },
  localeDetection: (request) => {
    const storedLocale = request.cookies.get('preferredLocale')?.value;
    if (storedLocale && locales.includes(storedLocale)) {
      return storedLocale;
    }
    const url = request.nextUrl.clone();
    if (!locales.some(locale => url.pathname.startsWith(`/${locale}`))) {
      url.pathname = `/${defaultLocale}${url.pathname}`;
      return Response.redirect(url);
    }
    return defaultLocale;
  }
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};