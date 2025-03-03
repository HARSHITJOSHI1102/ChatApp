import daisyui from 'daisyui';
import themes from 'daisyui/theme/object';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["animate-pulse"],
  theme: {
    colors: {
      primary: "#3498db", // Change to your preferred color
      "base-200": "#f5f5f5", // Change to your preferred color
    },
    extend: {
      animation: {
        "pulse-fast": "pulse 0.5s infinite",
      }
    },
  },
  plugins: [],


}

