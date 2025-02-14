// components/layout/header/HeaderWrapper.js
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Header1 from './Header1';

export default async function HeaderWrapper({ locale, messages, ...props }) {
  unstable_setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header1 {...props} />
    </NextIntlClientProvider>
  );
}