import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import './LoaderLarge.scss';

export const LoaderLarge = () => (
  <Box className="loader-large-container">
    <CircularProgress color="primary" className="loader-large" size={500} />
  </Box>
);
