import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { pages } from '../../constants/pages';

import './NavigationList.scss';

export const NavigationList = () => (
  <Box className="header-navigation" component="nav">
    {pages.map(({ name, url }, index: number) => (
      <Button
        className="header-navigation-item"
        key={index}
        variant="text"
        size="large"
        to={url}
        component={Link}
      >
        {name}
      </Button>
    ))}
  </Box>
);
