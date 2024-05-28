/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '200px',   // Small screens
        'tablet': '768px',   // Medium screens
        'laptop': '1024px',  // Large screens
        'desktop': '1280px',  // Extra-large screens
      }
    },
  },
  plugins: [],
};
