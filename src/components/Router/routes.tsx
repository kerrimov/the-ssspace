import React from 'react';
import { RouteObject } from 'react-router';
import { RoutesPath } from './routesPath';
import { About } from '../About';
import { AgenciesPage } from '../AgenciesPage';
import { AstronautsPage } from '../AstronautsPage';
import { Events } from '../Events';
import { Home } from '../Home';
import { LaunchDetailsPage } from '../LaunchDetailsPage';
import { LaunchList } from '../LaunchList';
import { LaunchFilters } from '../LaunchFilter/constants/filerConstants';
import { NotFoundPage } from '../NotFoundPage';

export const routesConfig: RouteObject[] = [
  {
    path: RoutesPath.HOME,
    element: <Home />,
    children: [
      {
        path: RoutesPath.PREVIOUS,
        element: <LaunchList filterValue={LaunchFilters.PREVIOUS} />,
      },
      {
        path: RoutesPath.CREWED,
        element: <LaunchList filterValue={LaunchFilters.CREWED} />,
      },
      {
        path: RoutesPath.CALIFORNIA,
        element: <LaunchList filterValue={LaunchFilters.CALIFORNIA} />,
      },
      {
        path: RoutesPath.FLORIDA,
        element: <LaunchList filterValue={LaunchFilters.FLORIDA} />,
      },
    ],
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
    path: '*',
    element: <NotFoundPage />,
  },
];
