import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './shared/styles/_variables.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#90caf9',
      light: '#c3fdff',
      dark: '#5d99c6',
      contrastText: '#212121',
    },
  },
});

export default responsiveFontSizes(theme);
