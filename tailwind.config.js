import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cartier: "#A02021",
        coffee: "#3C2A21",
        almond: "#F5F2ED",
        gold: "#D4C3A3",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#A02021",
            background: "#F5F2ED",
            foreground: "#3C2A21",
            focus: "#A02021",
          },
        },
      },
    }),
  ],
};
