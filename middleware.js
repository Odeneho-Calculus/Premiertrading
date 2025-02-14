import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
  // Configure cookie for active session persistence
  localeCookie: {
    name: 'preferredLocale',
    options: {
      // Session cookie (no maxAge) - will persist until browser/tab closes
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    }
  },
  localeDetection: (request) => {
    const storedLocale = request.cookies.get('preferredLocale')?.value;
    
    // If valid locale exists in cookie, use it
    if (storedLocale && locales.includes(storedLocale)) {
      return storedLocale;
    }

    // Check if URL already has a locale prefix
    const url = request.nextUrl.clone();
    if (!locales.some(locale => url.pathname.startsWith(`/${locale}`))) {
      // No locale in URL, redirect to default locale (English)
      url.pathname = `/${defaultLocale}${url.pathname}`;
      return Response.redirect(url);
    }

    // Default to English
    return defaultLocale;
  }
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
