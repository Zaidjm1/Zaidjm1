/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bio: ['"BioRhyme"', "serif"],
        runic: ['"Noto Sans Runic"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

