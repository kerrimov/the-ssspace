import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { LoaderSize } from './constants/constants';
import './Loader.scss';

interface LoaderProps {
  isLarge?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  isLarge = true,
}: LoaderProps) => {
  const className = isLarge ? 'large' : 'medium';
  const size = isLarge
    ? LoaderSize.LOADER_SIZE_LARGE
    : LoaderSize.LOADER_SIZE_MEDIUM;
  return (
    <Box className={`loader-container ${className}`}>
      <CircularProgress color="primary" className="loader" size={size} />
    </Box>
  );
};
