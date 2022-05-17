import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from './routes';

export const Router = () => {
  const routes: React.ReactElement | null = useRoutes(routesConfig);
  return <main>{routes}</main>;
};
