import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from './routes';
import './Router.scss';

export const Router = () => {
  const routes: React.ReactElement | null = useRoutes(routesConfig);
  return <main className="main-container">{routes}</main>;
};
