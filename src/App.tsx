import React from 'react';
import { Router } from './components/Router';
import { Header } from './components/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
    </ThemeProvider>
  );
};
