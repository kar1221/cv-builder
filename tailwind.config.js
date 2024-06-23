/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
      },
      maxWidth: {
        form: "650px",
      },
      boxShadow: {
        form: "0 5px 15px rgba(0, 0, 0, 0.07), 0 15px 35px rgba(50, 50, 93, 0.1)",
      },
    },
  },
  plugins: [],
};
