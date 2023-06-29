/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        300: "300px",
      },
      colors: {
        primary: "#293949",
        secondary: "#cadad7",
        card: "#424247",
      },
      
    },
  },
  plugins: [],
};