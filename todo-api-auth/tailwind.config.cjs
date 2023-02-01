/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        customSpin: {
          'to': { transoform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
