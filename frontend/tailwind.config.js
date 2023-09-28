/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)",
        violet: "hsl(257, 27%, 26%)",
        grey: "hsl(0, 0%, 75%)",
        "Grayish-Violet": "hsl(257, 7%, 63%)",
        cyan: "hsl(180, 66%, 49%)",
        red: "hsl(0, 87%, 67%)",
        "hover-cyan": "hsla(180, 56%, 75%, 1)",
        "hover-white": "hsla(0, 0%, 100%, 1)",
        violetBg: "#EFF1F7",
      },
      screens: {
        lg: "1440px",
        sm: "375px",
      },
    },
  },
  plugins: [],
};
