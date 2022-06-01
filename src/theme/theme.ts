import { createTheme } from '@mui/material';

import variables from '@styles/_variables.scss';

export const theme = createTheme({
  palette: {
    primary: {
      main: variables.primaryMain,
      light: variables.primaryLight,
      dark: variables.primaryDark,
      contrastText: variables.primaryContrastText,
    },
    secondary: {
      main: variables.secondaryMain,
      light: variables.secondaryLight,
      dark: variables.secondaryDark,
      contrastText: variables.primaryContrastText,
    },
  },
  typography: {
    fontFamily: variables.defaultFont,
  },
});
