const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem)",
        sm: "clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem)",
        base: "clamp(1rem, 1.0815rem + 0.2174vw, 1.25rem)",
        lg: "clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem)",
        xl: "clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem)",
        "2xl": "clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem)",
        "3xl": "clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem)",
        "4xl": "clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem)",
        "5xl": "clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
