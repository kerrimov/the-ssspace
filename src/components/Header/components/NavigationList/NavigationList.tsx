import './NavigationList.scss';

import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { pages } from '../../constants/pages';

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
