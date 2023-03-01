/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          100:'#E2D8D8',
          300:'#4895EF',
          500:'B5179E',
          700:'#25283D',
          900:'E3DFFD'
        }
      }
    },
  },
  plugins: [],
}