/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
      colors: {
        yellow: {
          100: "#eab308",
        },
      },
    },
  },
  plugins: [],
};
