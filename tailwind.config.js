module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        background: "#121212",
        alternative: "#1e1e1e",
        text: {
          light: "#e9e9e9",
        },
        primary: {
          standard: "#727cf5",
          light: "#bec2f3",
          dark: "#4c51ec",
        },
        red: {
          standard: "#ff586e",
          dark: "#fd334e",
        },
        green: {
          standard: "#0acf97",
          dark: "#06b483",
        },
      },
    },
  },
  plugins: [],
};
