/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary':'#2E8B57',
        'secondary':'#4A90A4',
        'accent':'#87CEEB',
        'success':'#20B2AA',
        'warning':'#F4A460',
        'error':'#CD5C5C',
        'background':'#F0F8F8',
        'card':'#FFFFFF'
      }
    },
  },
  plugins: [],
}