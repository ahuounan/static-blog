const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      scarlet: {
        default: '#f70502',
        dark: '#710706'
      }
    },
    extend: {
      screens: {
        print: { raw: 'print' }
      },
      transitionProperty: {
        modal: 'opacity, transform'
      }
    }
  },
  variants: {
    extend: {
      margin: ['last'],
      boxShadow: ['active', 'dark'],
      borderColor: ['active'],
      fontStyle: ['visited'],
      textColor: ['visited']
    }
  },
  plugins: []
};
