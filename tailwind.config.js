/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Cursive: ["Satisfy", "cursive"],
      },
      gridTemplateRows: {
        form: "200px 1fr",
      },
      gridTemplateColumns: {
        resumeContent: "350px 1fr",
      },
      letterSpacing: {
        header: ".20em",
      },
    },
  },
  plugins: [],
};
