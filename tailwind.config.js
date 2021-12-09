module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",

        primary: {
          100: "#7ef1cb",
          200: "#4fd9ac",
          300: "#4fd9ac",
          400: "#35cb9a",
          500: "#28c08e",
          600: "#1eb180",
          700: "#14a172",
          800: "#0f9165",
          900: "#07855a",
        },

        secondary: {
          100: "#7c8ba1",
          200: "#667892",
          300: "#506582",
          400: "#3a5173",
          500: "#243E63",
          600: "#203859",
          700: "#1d324f",
          800: "#192b45",
          900: "#16253b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
