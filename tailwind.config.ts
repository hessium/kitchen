import type { Config } from 'tailwindcss';
import { opacity, spacing } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
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
        content1: 'hsl(var(--content1))',

        content2: 'hsl(var(--content2))',
        content3: 'hsl(var(--content3))',
        content4: 'hsl(var(--content4))',
        default: {
          50: 'hsl(var(--default-50))',
          100: 'hsl(var(--default-100))',
          200: 'hsl(var(--default-200))',
          300: 'hsl(var(--default-300))',
          400: 'hsl(var(--default-400))',
          500: 'hsl(var(--default-500))',
          600: 'hsl(var(--default-600))',
          700: 'hsl(var(--default-700))',
          800: 'hsl(var(--default-800))',
          900: 'hsl(var(--default-900))',
          DEFAULT: 'hsl(var(--default))',
          foreground: 'hsl(var(--default-foreground))',
        },

        foreground: 'var(--foreground)',

        primary: {
          50: 'hsl(var(--primary-50))',
          DEFAULT: 'hsl(var(--primary))',
        },
      },
      opacity: {
        ...opacity,
        disabled: '.6',
      },
      spacing: {
        ...spacing,
        header: '80px',
      },
    },
  },
};
export default config;
