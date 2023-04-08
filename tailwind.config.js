/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        'screen-navbar-palyer':'calc(100vh - 12rem)',
      }
    },
  },
  plugins: [],
}