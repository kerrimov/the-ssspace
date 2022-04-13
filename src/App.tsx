import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Routes } from './components/Routes';
import { Header } from './components/Header';

export const App = () => {
  const routes = useRoutes(Routes);
  return (
    <>
      <Header />
      {routes}
    </>
  );
};
