import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import './LoaderMedium.scss';

export const LoaderMedium = () => (
  <Box className="loader-medium-container">
    <CircularProgress color="primary" className="loader-medium" size={80} />
  </Box>
);
