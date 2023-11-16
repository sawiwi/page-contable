/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:{
          default:'#EABE3F',
          opacity:"#EABE3Fd5",
        },
        secondary:{
          default:'#f2f2f2',
          opacity:'#f2f2f2d5'
        },
        success:{ 
          default:"#1111",
          opacity:'#1111d5'},
        info:{
          default:"#4444",
          opacity:'#4444d5'}
      }
    },
  },
  plugins: [],
}

