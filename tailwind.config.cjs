/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/app.html', './src/**/*.{js,ts,svelte}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')],
};
