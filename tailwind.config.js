/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#007a5e",
          light: "#f0fdf4",
          yellow: "#fcd116",
        }
      }, 
      screens: {
        'xsm': '495px',
      }
    },
  },
  plugins: [],
}
