/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Source-Serif-4", "Georgia", "serif"],
      sans: ["Mona Sans", "Helvetica Neue", "sans-serif"],
    },
    extend: {
      colors: {
        bgPage: "#F3F5F7",
        bgCategory: "#F3F5F7",
        hoverBg: "#565564",
        outline: "#0d0c22",
        principalTitleColor: "#0d0c22",
        textColor: "#141618",
        secondTextColor: "#373B3C",
        jet: "#2D2D2A",
        pearl: "#E5DCC5",
      },
      maxHeight: {
        '128': '32rem', 
        '144': '36rem', 
        '160': '40rem',
      
      },
    },
  },
  plugins: [],
};
