/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "3rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
