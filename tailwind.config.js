/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ This tells Tailwind to scan your code files
    "./public/index.html",         // ✅ This ensures HTML file is also styled
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
