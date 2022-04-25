import './SocialsList.scss';

import { Box, Button } from '@mui/material';
import React from 'react';

import { socials } from '../../constants/socials';

export const SocialsList = () => (
  <Box className="header-socials">
    {socials.map(({ icon: Icon, url }, index: number) => (
      <Button
        className="header-socials-item"
        key={index}
        href={url}
        target="_blank"
      >
        <Icon />
      </Button>
    ))}
  </Box>
);
