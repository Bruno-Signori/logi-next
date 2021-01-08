// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#19B5FE',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#222222',
        dark: '#121214',
        DEFAULT: '#c0ccda',
        light: '#393939',
        lightest: '#4E4E4E',
      }
    } 
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      margin: ['hover', 'focus'],
      padding: ['hover', 'focus']
    },
  },
  plugins: [],
}