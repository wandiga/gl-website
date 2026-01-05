/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",             // all HTML files in the root
    "./src/**/*.{html,js}", // all files in src
  ],
  theme: {
    extend: {},             // optional, keep empty for now
  },
  plugins: [],
};
