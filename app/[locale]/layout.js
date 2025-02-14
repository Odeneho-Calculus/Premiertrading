import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '../../config';
import getMessages from '../../lib/getMessages';
import { barlow, firaSans } from '../../lib/font';

export const metadata = {
  metadataBase: new URL('https://premiertrans.com'),
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8'
};

// Import all required styles
import 'public/assets/css/bootstrap.css';
import 'public/assets/css/color.css';
import 'public/assets/css/style.css';
import 'public/assets/css/font-awesome-all.css';
import 'public/assets/css/flaticon.css';
import 'public/assets/css/animate.css';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'react-modal-video/css/modal-video.css';

// Import original favicon
import "app/favicon.ico";

// Validate locale at build time
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
    // Validate locale
    if (!locales.includes(locale)) {
        notFound();
    }

    let messages;
    try {
        messages = await getMessages(locale);
        
        // Validate messages
        if (!messages || Object.keys(messages).length === 0) {
            console.error(`No messages found for locale: ${locale}`);
            // Try to fall back to English
            messages = await getMessages('en');
            if (!messages || Object.keys(messages).length === 0) {
                notFound();
            }
        }
    } catch (error) {
        console.error(`Error loading messages for ${locale}:`, error);
        notFound();
    }

    return (
        <html lang={locale} className={`${firaSans.variable} ${barlow.variable}`}>
            <body suppressHydrationWarning={true}>
                <NextIntlClientProvider 
                    locale={locale} 
                    messages={messages}
                    timeZone="UTC"
                >
                    <div id="wrapper" className="boxed_wrapper">
                        {children}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
