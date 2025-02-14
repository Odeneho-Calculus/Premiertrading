import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is supported
  if (!locales.includes(locale)) {
    notFound();
  }

  // Load messages for the requested locale
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
