import React from 'react';
import { Box, Button } from '@mui/material';

import { socials } from '../../constants/socials';

import './SocialsList.scss';

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
