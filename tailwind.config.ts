import type { Config } from 'tailwindcss';
import { spacing } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    function ({ addUtilities, addVariant }) {
      addVariant('children', '& > *');
      addVariant('span', '& > span');

      addUtilities({
        '.flex-between': {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        },
        '.flex-center': {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        },
        '.pos-abs': {
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.pos-abs-x': {
          left: '50%',
          position: 'absolute',
          transform: 'translateX(-50%)',
        },
        '.pos-abs-y': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      });
    },
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: {
        ...spacing,
        header: '80px',
      },
    },
  },
};
export default config;
