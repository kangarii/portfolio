/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        width: "100vh",
      },
      screens: {
        lg: "1080px",
      },
      color: {
        primary: "#fefeff",
        secondary: "#2b2b2c",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
