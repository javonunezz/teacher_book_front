/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-sans": ["Source Sans Pro", "sans-serif"],
      },
      fontSize: {
        sm: ["8px", "18px"],
        base: ["12px", "22px"],
        lg: ["16px", "26px"],
        xl: ["22px", "32px"],
        "2xl": ["32px", "36px"],
        "3xl": ["44px", "48px"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        "primary-100": "#6B7899",
        "primary-200": "#5972B2",
        "primary-400": "#476DCC",
        "primary-500": "#0C3456",
        "primary-800": "#002B99",
        "neutral-100": "#EEEEEE",
        "neutral-200": "#CACACA",
        "neutral-400": "#989898",
        "neutral-600": "#6F6F6F",
        "neutral-800": "#3C3C3C",
      },
      dropShadow: {
        "3xl": "3px 11px 8px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
