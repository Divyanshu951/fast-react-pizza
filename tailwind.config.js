/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },

      height: {
        dvh: "100dvh",
      },

      minHeight: {
        dvh: "100dvh",
      },
    },
  },

  plugins: [],
};
