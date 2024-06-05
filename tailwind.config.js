/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#262E38",
        "light-grey": "#969FAD",
        "rating-black": "#232A34",
        "rating-orange": "#FC7614",
      },
    },
  },
  plugins: [],
};
