import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'always', // Change to 'always' to ensure consistent routing
  // Configure cookie for active session persistence
  localeCookie: {
    name: 'preferredLocale',
    options: {
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

    return defaultLocale;
  }
});

// Update matcher to handle all routes properly
export const config = {
  matcher: ['/', '/((?!api|_next|.*\\..*).*)']
};
