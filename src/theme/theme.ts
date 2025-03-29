import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
      mode: 'dark', 
      primary: {                 //card colors
        main: '#4C4C4C', 
        light: '#4C4C4C',
        dark: '#959595',
        contrastText: '#fff',
      },
      secondary: {          // text color
        main: '#181311',
      },
      background: {
        default: '#333333',
        paper: '#fff',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff'
      }
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
    },
  };
  
  // Create the theme
  const theme = createTheme(themeOptions);
  
  export default theme;