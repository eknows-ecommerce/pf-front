/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      darkmode: 'class',
      colors: {
        dorado: {
          DEFAULT: '#9F7E2A',
          50: '#F3F8E4',
          100: '#EBF2CC',
          200: '#E0E59C',
          300: '#D8D26C',
          400: '#CBB33B',
          500: '#9F7E2A',
          600: '#835C23',
          700: '#66401B',
          800: '#4A2814',
          900: '#2E150C',
        },
        amarillo: {
          DEFAULT: '#FBA100',
          50: '#FFE4B4',
          100: '#FFDD9F',
          200: '#FFCE76',
          300: '#FFBF4E',
          400: '#FFB125',
          500: '#FBA100',
          600: '#C37D00',
          700: '#8B5900',
          800: '#533500',
          900: '#1B1100',
        },
        violeta: {
          DEFAULT: '#6C648B',
          50: '#CFCCDA',
          100: '#C4C0D2',
          200: '#AEA9C1',
          300: '#9791B0',
          400: '#81799F',
          500: '#6C648B',
          600: '#534D6A',
          700: '#39354A',
          800: '#201E29',
          900: '#070608',
        },
      },
      fontFamily: {
        'poiret-one': ['poiret-one', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
