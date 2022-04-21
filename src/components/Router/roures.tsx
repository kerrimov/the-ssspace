import React from 'react';
import { Navigate, RouteObject } from 'react-router';
import { About } from '../About';
import { Agencies } from '../Agencies';
import { Astronauts } from '../Astronauts';
import { Events } from '../Events';
import { Home } from '../Home';
import { RoutesPath } from './routesPath';

export const routesConfig: RouteObject[] = [
  {
    path: RoutesPath.HOME,
    element: <Home />,
  },
  {
    path: RoutesPath.EVENTS,
    element: <Events />,
  },
  {
    path: RoutesPath.AGENCIES,
    element: <Agencies />,
  },
  {
    path: RoutesPath.ASTRONAUTS,
    element: <Astronauts />,
  },
  {
    path: RoutesPath.ABOUT,
    element: <About />,
  },
  {
    path: '*',
    element: <Navigate to={RoutesPath.HOME} />,
  },
];
