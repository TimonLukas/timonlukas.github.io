module.exports = {
  content: [
    "./pages/**/*.{vue,ts}",
    "./packages/**/*.vue",
    "./node_modules/@hotellistat/robust-ui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
