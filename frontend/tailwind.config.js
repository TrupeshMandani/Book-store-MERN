/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffce1a",
        secondary: "#0d0842",
        blackBG: "#f3f3f3",
        Favorite: "#ff5841",
        text: "#333",
        white: "#fff",
        black: "#000",
        gray: "#f9f9f9",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
