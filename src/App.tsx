import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Routes } from './components/Routes';
import { Header } from './components/Header';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

export const App = () => {
  const routes = useRoutes(Routes);
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <div style={{ marginTop: '64px' }}></div>
      {routes}
    </ThemeProvider>
  );
};
