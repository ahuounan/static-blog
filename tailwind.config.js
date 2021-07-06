const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      scarlet: '#f70502'
    },
    extend: {
      backgroundImage: theme => ({
        stamp: 'url("/android-chrome-192x192.png")'
      }),
      screens: {
        print: { raw: 'print' }
      }
    }
  },
  variants: {
    extend: {
      margin: ['last'],
      boxShadow: ['active'],
      borderColor: ['active']
    }
  },
  plugins: []
};
