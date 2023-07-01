/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceSerif: ['var(--source-serif)'],
        sourceSans: ['var(--source-sans)'],
      },
      colors: {
        challenge26Brown: {
          300: '#FEECE0',
          500: '#9B6647',
          700: '#58190A',
        },
      },
    },
  },
  plugins: [],
}
