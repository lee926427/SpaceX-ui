const { green } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors:{
      blueGray: colors.blueGray,
      green:    colors.green,
      orange:   colors.orange
    },
    flex:{
      auto: '1 1 auto',
      full:'1 1 100%',
      '1': '1 1 0%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
