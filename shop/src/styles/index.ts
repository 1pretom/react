import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText, keyframes, theme, createTheme, config } = createStitches({
    theme: {
        colors: {
            primary: '#0070f3',
            secondary: '#1A1A1A',
            accent: '#E2E8F0',
            background: '#FFFFFF',
            text: '#000000',
        },
        fonts: {
            body: 'system-ui, sans-serif',
            heading: 'Georgia, serif',
        },
        space: {
            1: '8px',
            2: '16px',
            3: '24px',
            4: '32px',
            5: '40px',
        },
        sizes: {
            small: '12px',
            medium: '16px',
            large: '24px',
        },
    },
    media: {
        bp1: '(min-width: 480px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    utils: {
        marginX: (value: string | number) => ({
            marginLeft: value,
            marginRight: value,
        }),
        paddingX: (value: string | number) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
    },
});