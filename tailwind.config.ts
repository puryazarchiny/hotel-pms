/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
        wotfard: ["Wotfard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
