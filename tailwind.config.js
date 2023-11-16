/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary:{
          default:'#0000',
          opacity:"#0000d5",
        },
        secondary:{
          default:'#ffff',
          opacity:'#ffffd5'
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

