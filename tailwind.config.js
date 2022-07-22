const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // false or 'media'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        emerald: colors.emerald
      },
    },
  },
  plugins: [],
};
