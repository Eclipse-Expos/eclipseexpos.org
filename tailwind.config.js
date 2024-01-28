/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '18px'
    },
    extend: {
      colors: {
        bg: '#1c1c1f'
      }
    },
  },
  plugins: [],
}