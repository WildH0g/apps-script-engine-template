/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        'lg-up':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -4px rgba(0, 0, 0, 0.1);',
      },
    },
  },
  plugins: [],
};
