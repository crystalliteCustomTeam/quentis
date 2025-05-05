/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "0.5rem",
    },
    screens: {
      "xs": {
        "max": "576px",
      },
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#EF3F2B",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
