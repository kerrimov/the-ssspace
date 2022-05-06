import React from 'react';
import { Navigate, RouteObject } from 'react-router';

import { RoutesPath } from './routesPath';
import { About } from '../About';
import { AgenciesPage } from '../AgenciesPage';
import { AstronautsPage } from '../AstronautsPage';
import { Events } from '../Events';
import { Home } from '../Home';
import { LaunchDetailsPage } from '../LaunchDetailsPage';

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
    element: <AgenciesPage />,
  },
  {
    path: RoutesPath.ASTRONAUTS,
    element: <AstronautsPage />,
  },
  {
    path: RoutesPath.ABOUT,
    element: <About />,
  },
  {
    path: RoutesPath.DETAILS,
    element: <LaunchDetailsPage />,
  },
  {
    path: RoutesPath.PREVIOUS,
    element: <Home />,
  },
  {
    path: RoutesPath.CREWED,
    element: <Home />,
  },
  {
    path: RoutesPath.CA_LOCATION,
    element: <Home />,
  },
  {
    path: RoutesPath.FL_LOCATION,
    element: <Home />,
  },
  {
    path: '*',
    element: <Navigate to={RoutesPath.HOME} />,
  },
];
