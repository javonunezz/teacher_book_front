/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "blue-dark": "#34495E",
      "gray-light": "#F2F3F4",
      black: "#17202A",
      "blue-light": "#7FB3D5",
      "green-light": "#82E0AA",
      "yellow-light": "#F4D03F",
      "gray-light-2": "#E5E8E8",
    },
    minWidth: {
      24: "200px",
      25: "830px",
      26: "300px",
    },
  },
  plugins: [],
};
