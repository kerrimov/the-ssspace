import React from 'react';
import { useRoutes } from 'react-router-dom';
import { rootRoutes } from './components/Routes';
import { Header } from './components/Header';

export const App = () => {
  const elements = useRoutes(rootRoutes);
  return (
    <>
      <Header />
      {elements}
    </>
  );
};
