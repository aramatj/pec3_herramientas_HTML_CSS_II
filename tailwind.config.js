const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        bg:'#03020c',
        primary: '#ea8b57',
        secundary:'#6f42c1',
        teal:'#008080',
        gray:'#b1afc2',
        multiply:'#6e42c10c',
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
