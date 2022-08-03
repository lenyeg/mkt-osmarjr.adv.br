/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#EAEBEC",
          100: "#BFC3C6",
          200: "#949BA0",
          300: "#69737A",
          400: "#3E4B54",
          500: "#283741",
          600: "#24323B",
          700: "#1C272E",
          800: "#141C21",
          900: "#0C1013",
        },
        primary: {
          50: "#FFFAEA",
          100: "#FEEFC1",
          200: "#FEE498",
          300: "#FED96E",
          400: "#FDCE45",
          500: "#FDC830",
          600: "#E4B42B",
          700: "#B18C22",
          800: "#7F6418",
          900: "#4C3C0E",
        },
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-typography
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        "html.font-inter": {
          fontFamily: ["Inter", theme("fontFamily.sans")].join(", "),
        },
        "body.no-scroll": {
          overflow: "hidden",
        },
        html: {
          scrollBehavior: "smooth",
        },
      });
    }),
  ],
};
