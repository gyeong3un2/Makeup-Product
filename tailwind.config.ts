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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#8a6063',
      },
    },
  },
  plugins: [],
};
export default config;

// xxxs: '345px',
// xxs: '413px',
// xs: '563px',
// sm: '640px',
// md: '768px',
// lg: '1024px',
// lg2: '1102px',
// xl: '1280px',
// xl2: '1450px',
// xl3: '1700px',
