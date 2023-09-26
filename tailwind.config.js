/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      screens: {
        hd: '2200px',
        '2hd': '3000px',
      },
      fontFamily: {
        mulish: ['Mulish', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#426AB9',
        'main-sky-blue-sky-blue-7': '#aecaf4',
        'main-black-black-4': '#545a5f',
        'main-yellow': '#EFA71C',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
