import { theme, DefaultTheme,  } from '@chakra-ui/core';

const breakpoints = ["360px", "768px", "1024px", "1440px"];


const customTheme: DefaultTheme = {
 ...theme,
 breakpoints,
 
 fonts: {
   body: 'inter, system-ui, sans-serif',
   heading: 'inter, system-ui, sans-serif',
   mono: 'Menlo, monospace'
},
   fontWeights: {
     ...theme.fontWeights,
     normal: 500,
     medium: 600,
     bold: 900,
   },
   radii: {
     ...theme.radii,
     sm: '5px',
     md: '8px',
    
   },
   fontSizes: {
     ...theme.fontSizes,
     '6xl': '54px'
   },
   // incluimos todas as existentes no chakra e add as que precisamos 
   colors: {
     ...theme.colors,
     purple: { 
       ...theme.colors.purple,
       500: '#8257e5',
     },
     gray: { 
      ...theme.colors.gray,
      300: '#4E4E4E',
      600: '#393939',
      700: '#222222',
      800: '#121214',
    },
    blue: {
      ...theme.colors.blue,
      300: '#19B5FE',
    },

   }
}
export default customTheme;