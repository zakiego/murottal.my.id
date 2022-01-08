module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-smooth": "#111827",
        "black-fade": "#6B7280",
      },
      boxShadow: {
        card: "-10px 48px 140px 0px rgba(126,123,160,0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
