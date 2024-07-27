/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nativewind/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008D53',
      }
    },
  },
  plugins: [],
};