import React from 'react';
import { Navigate } from 'react-router';
import { About } from '../About';
import { Agencies } from '../Agencies';
import { Astronauts } from '../Astronauts';
import { Events } from '../Events';
import { Home } from '../Home';
import {
  homeUrl,
  eventsUrl,
  agenciesUrl,
  astronautsUrl,
  aboutUrl,
} from './routesUrl';

export const rootRoutes = [
  {
    path: homeUrl,
    element: <Home />,
  },
  {
    path: eventsUrl,
    element: <Events />,
  },
  {
    path: agenciesUrl,
    element: <Agencies />,
  },
  {
    path: astronautsUrl,
    element: <Astronauts />,
  },
  {
    path: aboutUrl,
    element: <About />,
  },
  {
    path: '*',
    element: <Navigate to={homeUrl} replace={true} />,
  },
];
