import React from 'react';
import { Box, Button } from '@mui/material';
import { socials } from '../../constants';
import './SocialsList.scss';

export const SocialsList = () => (
  <Box className="header-socials">
    {socials.map(({ icon: Icon, url }) => (
      <Button
        className="header-socials-item"
        key={url}
        href={url}
        target="_blank"
      >
        <Icon />
      </Button>
    ))}
  </Box>
);
