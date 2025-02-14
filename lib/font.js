import { Barlow, Fira_Sans } from 'next/font/google'

export const firaSans = Fira_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--fira-sans",
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true
})

export const barlow = Barlow({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--barlow",
    display: 'swap',
    preload: true,
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true
})
