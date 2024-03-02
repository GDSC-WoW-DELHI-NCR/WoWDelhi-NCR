/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        r: "#EA4335",
        g: "#0F9D58",
        b: "#4285F4",
        y: "#FBBC04",
        text: "#FFFFFF"
      },
    },
  },
  plugins: [],
}