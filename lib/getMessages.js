// lib/getMessages.js
import { locales } from '../config';

export default async function getMessages(locale) {
    try {
        // Validate that the locale is supported
        if (!locales.includes(locale)) {
            console.warn(`Unsupported locale: ${locale}, falling back to default locale`);
            locale = 'en';
        }

        // Load messages for the requested locale
        const messages = (await import(`../messages/${locale}.json`)).default;
        return messages;
    } catch (error) {
        console.error(`Error loading messages for locale "${locale}":`, error);
        // Attempt to load English messages as fallback
        try {
            const fallbackMessages = (await import('../messages/en.json')).default;
            return fallbackMessages;
        } catch (fallbackError) {
            console.error('Failed to load fallback messages:', fallbackError);
            return {};
        }
    }
}
