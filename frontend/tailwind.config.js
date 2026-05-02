/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9efff",
          200: "#bce3ff",
          300: "#8fd3ff",
          400: "#58bbff",
          500: "#2699ff",
          600: "#0678f0",
          700: "#075fc2",
          800: "#0b4f9f",
          900: "#103e79"
        }
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Sora", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(38, 153, 255, 0.4), 0 14px 40px -18px rgba(38, 153, 255, 0.65)"
      }
    }
  },
  plugins: []
};
