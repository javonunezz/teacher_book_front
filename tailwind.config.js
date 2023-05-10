/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "primary-500": "#0C3456",
      "primary-200": "#5972B2",
    },
    minWidth: {
      24: "200px",
      25: "830px",
      26: "300px",
    },
  },
  plugins: [],
};
