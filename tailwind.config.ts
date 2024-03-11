import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl2: '1610px',
    },
    extend: {
      margin: {
        '50': '50rem',
      },
      maxWidth: {
        xl: '72rem',
      },
      colors: {
        main: '#8a6063',
      },
    },
  },
  plugins: [],
};
export default config;
