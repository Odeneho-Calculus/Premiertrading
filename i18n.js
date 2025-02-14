import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  const locale = headers().get('x-next-intl-locale') || 'en';

  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
