/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        acme: '"Acme", sans-serif',
        inter: '"Inter", sans-serif',
        roboto: '"Roboto", sans-serif'
      }
    },
  },
  plugins: [],
}