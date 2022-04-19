import React from 'react';
import './Router.scss';
import { useRoutes } from 'react-router-dom';
import { Routes } from './Routes';

export const Router = () => {
  const routes = useRoutes(Routes);
  return <div className="router-elements-wrapper">{routes}</div>;
};
