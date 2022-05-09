import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from './routes';
import './Router.scss';

export const Router = () => {
<<<<<<< HEAD
  const routes: React.ReactElement | null = useRoutes(routesConfig);
  return <main className="router-elements-wrapper">{routes}</main>;
=======
  const routes: React.ReactElement = useRoutes(routesConfig) || <></>;
  return <div className="router-elements-wrapper">{routes}</div>;
>>>>>>> be1a6eb (added info im ReadMe, moved template folder, added interface for AppAction)
};
