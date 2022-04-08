import React from 'react';
import { Navigate } from 'react-router';
import About from '../components/About';
import Agencies from '../components/Agencies';
import Astronauts from '../components/Astronauts';
import Events from '../components/Events';
import Home from '../components/Home';

const rootRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/agencies',
    element: <Agencies />,
  },
  {
    path: '/astronauts',
    element: <Astronauts />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
];

export default rootRoutes;
