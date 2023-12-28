/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-black-normal": "#03000A",
        "clr-yellow-normal": "#F2DC00",
        "clr-yellow-light": "#48420C",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      screens: {
        "S-1500": "1500px",
        "S-1100": "1100px",
        "S-1000": "1000px",
        "S-400": "400px",
        "S-500": "500px",
        "S-600": "600px",
        "S-366": "366px",
        "S-250": "250px",
        "S-860": "860px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
