/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dde9ff',
          200: '#bcd2ff',
          300: '#8eb1ff',
          400: '#5b87ff',
          500: '#3563ff',
          600: '#1f44f5',
          700: '#1a35d6',
          800: '#1b2faa',
          900: '#1d2e84',
        },
      },
    },
  },
  plugins: [],
};
