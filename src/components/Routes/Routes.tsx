import React from 'react';
import { Navigate } from 'react-router';
import { About } from '../About';
import { Agencies } from '../Agencies';
import { Astronauts } from '../Astronauts';
import { Events } from '../Events';
import { Home } from '../Home';
import { RoutesPath } from './routesPath';

export const Routes = [
  {
    path: RoutesPath.homeUrl,
    element: <Home />,
  },
  {
    path: RoutesPath.eventsUrl,
    element: <Events />,
  },
  {
    path: RoutesPath.agenciesUrl,
    element: <Agencies />,
  },
  {
    path: RoutesPath.astronautsUrl,
    element: <Astronauts />,
  },
  {
    path: RoutesPath.aboutUrl,
    element: <About />,
  },
  {
    path: '*',
    element: <Navigate to={RoutesPath.homeUrl} />,
  },
];
