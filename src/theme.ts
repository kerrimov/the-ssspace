import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#90caf9',
      light: '#c3fdff',
      dark: '#5d99c6',
      contrastText: '#212121',
    },
    secondary: {
      main: '#ffee58',
      light: '#ffff8b',
      dark: '#c9bc1f',
      contrastText: '#fafafa',
    },
  },
  typography: {
    fontFamily: 'Nunito',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
