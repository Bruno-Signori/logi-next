// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
        'sans': 'Helvetica, Arial, sans-serif',
      },
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
      },
    },
    extend: {
      inset: {
       '-2': '-1.2rem',
      },
  }, 
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