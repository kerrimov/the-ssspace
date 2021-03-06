import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Header } from './components/Header';
import { Router } from './components/Router';
import { theme } from './theme/theme';
import { Footer } from './components/Footer';
import { ErrorAlert } from './shared/components/ErrorAlert';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
      <Footer />
      <ErrorAlert />
    </ThemeProvider>
  );
};
