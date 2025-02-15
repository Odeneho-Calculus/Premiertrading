import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config';

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'always',
  localeDetection: false,
  // Cookie configuration for session persistence
  localeCookie: {
    name: 'NEXT_LOCALE',
    options: {
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true // Make it HTTP only to prevent JS manipulation
    }
  }
});

export const config = {
  matcher: ['/', '/((?!api|_next|.*\\..*).*)']
};