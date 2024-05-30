/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        play: {
          "0%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        play: "play 1s ease infinite",
      },
    },
  },
  plugins: [],
};
