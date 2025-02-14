// app/[locale]/layout.js
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import getMessages from '@/lib/getMessages';
import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/assets/css/bootstrap.css";
import "@/public/assets/css/color.css";
import "@/public/assets/css/style.css";
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import { barlow, firaSans } from '@/lib/font';

export const metadata = {
    title: 'Premier Payment Solutions LTD',
    description: 'Excellent payment solutions for your business',
};

export default async function LocaleLayout({ children, params }) {
    const { locale } = params; 

    if (!locale) {
        notFound();
    }

    const messages = await getMessages(locale);

    // 🔥 Debugging: Ensure messages exist  
    if (!messages || Object.keys(messages).length === 0) {
        console.error(`⚠️ No messages found for locale: ${locale}`);
        notFound();
    }

    return (
        <html lang={locale} className={`${firaSans.variable} ${barlow.variable}`}>
            <body suppressHydrationWarning={true}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}