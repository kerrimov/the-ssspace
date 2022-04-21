import { ThemeProvider } from '@mui/material';
import React from 'react';

import { Header } from './components/Header';
import { Router } from './components/Router';
import { theme } from './theme/theme';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
      <Footer />
    </ThemeProvider>
  );
};
