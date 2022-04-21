import './Logo.scss';

import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { RoutesPath } from '../../../Router/routesPath';

export const Logo = () => (
  <Box className="header-logo" component={Link} to={RoutesPath.HOME}>
    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
  </Box>
);
