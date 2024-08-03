import type {Config} from 'tailwindcss';


function generateCSSObject(property: string): Record<string, string> {
    let cssObject: Record<string, string> = {};
    for (let i = 1; i <= 2000; i++) {
        cssObject[`${i}`] = `${i}px`;
    }
    return cssObject;
}

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                pnuBlue: '#043d92',
                pnuLightBlue: '#0455BF',
                pnuText: '#333',
                pnuBgGray: '#F2F2F2',
                pnuWarn: '#D93654',
            },
            width: generateCSSObject('width'),
            minWidth: generateCSSObject('minWidth'),
            maxWidth: generateCSSObject('maxWidth'),
            height: generateCSSObject('height'),
            minHeight: generateCSSObject('minHeight'),
            maxHeight: generateCSSObject('maxHeight'),
            padding: generateCSSObject('padding'),
            margin: generateCSSObject('margin'),
            borderRadius: generateCSSObject('borderRadius'),
            keyframes: {
                slide: {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(-100%)'},
                },
                sparkling: {
                    '0%': {opacity: '0'},
                    '50%': {opacity: '1'},
                    '100%': {opacity: '0'},
                },
            },
            animation: {
                'slide-infinite': 'slide 10s linear infinite',
                sparkling: 'sparkling 1s  infinite',
            },
            screens: {
                'xl': {max: '1279px'},
                'lg': {max: '1023px'},
                'md': {max: '767px'},
                'sm': {max: '576px'},
            }
        },
    },
    plugins: [],
};
export default config;
