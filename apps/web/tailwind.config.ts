import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      primary: '#8CB9BD',
      second: '#FFCC00',
      sekunder: '#ECB159',
      tersier: '#B67352',
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
};

export default config;
