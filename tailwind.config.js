/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('/src/assets/main.jpg')",
      },
      boxShadow: {
        quotes: '  21px 21px 33px #c7c7c7,-21px -21px 33px #f9f9f9; ',
      },
    },
  },
  plugins: [],
};
