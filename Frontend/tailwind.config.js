/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],  // Ensure this line is present
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave", "retro", "forest", "dracula"], // Add your themes
  },
};

