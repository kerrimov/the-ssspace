import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { pages } from '../../constants';
import './NavigationList.scss';

export const NavigationList = () => (
  <Box className="header-navigation" component="nav">
    {pages.map(({ name, url }) => (
      <Button
        className="header-navigation-item"
        key={url}
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
