/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Baskervville', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: '#f7f7f2',
        teal: '#1a9aaa',
        coral: '#ff6b57',
        slate: '#111827',
        mist: '#d9f3f4',
        white: '#ffffff',
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
  },
  plugins: [],
};
