import React from 'react';
import './Router.scss';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from './roures';

export const Router = () => {
  const routes: React.ReactElement | null = useRoutes(routesConfig);
  return <div className="router-elements-wrapper">{routes}</div>;
};
