/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        portal: 'url("./src/assets/img/portal.jpg")',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
