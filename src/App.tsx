import React from 'react';
import { Router } from './components/Router';
import { Header } from './components/Header';
import { ThemeProvider } from '@mui/material';
import { SliderBox } from './components/SliderBox';
import { theme } from './theme/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SliderBox />
      <Router />
    </ThemeProvider>
  );
};
