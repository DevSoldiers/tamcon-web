import localFont from 'next/font/local';
import { Bebas_Neue, Darker_Grotesque, Kode_Mono } from "next/font/google";

export const font_header = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-header',
    display: 'swap',
});

export const the_header = localFont({
    src: [
        {
            path: "./BebasNeue-Bold.otf",
            weight: '700',
            style: 'normal'
        },
        {
            path: "./BebasNeue-Light.otf",
            weight: '300',
            style: 'normal'
        },
        {
            path: "./BebasNeue-Regular.otf",
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-header',
    display: 'swap'
})

export const font_accent = Kode_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-font_accent',
    display: 'swap',
});

export const font_body = Darker_Grotesque({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-font_accent',
    display: 'swap',
});