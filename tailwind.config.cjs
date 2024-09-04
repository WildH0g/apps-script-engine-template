/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/client/**/*.{html,js,ts}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
