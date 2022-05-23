import React from 'react';
import { RouteObject } from 'react-router';
import { RoutesPath } from './routesPath';
import { About } from '../About';
import { AgenciesPage } from '../AgenciesPage';
import { AstronautsPage } from '../AstronautsPage';
import { Events } from '../Events';
import { Home } from '../Home';
import { LaunchDetailsPage } from '../LaunchDetailsPage';
import { LaunchList } from '../Home/components/LaunchList';
import { NotFoundPage } from '../NotFoundPage';
import { Launches } from '../Home/constants/launches';

export const routesConfig: RouteObject[] = [
  {
    path: RoutesPath.HOME,
    element: <Home />,
    children: [
      {
        path: RoutesPath.HOME,
        element: <LaunchList filterValue={Launches.UPCOMING} />,
      },
      {
        path: RoutesPath.PREVIOUS,
        element: <LaunchList filterValue={Launches.PREVIOUS} />,
      },
      {
        path: RoutesPath.CREWED,
        element: <LaunchList filterValue={Launches.CREWED} />,
      },
      {
        path: RoutesPath.CALIFORNIA,
        element: <LaunchList filterValue={Launches.CALIFORNIA} />,
      },
      {
        path: RoutesPath.FLORIDA,
        element: <LaunchList filterValue={Launches.FLORIDA} />,
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
