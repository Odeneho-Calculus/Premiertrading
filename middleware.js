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
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: false, // Allow JS access
      expires: undefined // Makes it a session cookie
    }
  }
});

export const config = {
  matcher: ['/', '/((?!api|_next|.*\\..*).*)']
};