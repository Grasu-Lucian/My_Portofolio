module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // Dark blue
        secondary: '#3b82f6', // Blue
        accent: '#60a5fa', // Light blue
        highlight: '#93c5fd', // Lighter blue
        background: '#e0f2fe', // Very light blue
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}