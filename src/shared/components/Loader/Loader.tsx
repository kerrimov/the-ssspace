import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { LoaderType } from './constants/constants';
import './Loader.scss';

interface LoaderProps {
  type: string;
}

export const Loader: React.FC<LoaderProps> = ({ type }: LoaderProps) => {
  const isLarge: boolean = type === LoaderType.LOADER_TYPE_LARGE;
  const className = isLarge ? 'large' : 'medium';
  const size = isLarge ? 500 : 80;
  return (
    <Box className={`loader-container ${className}`}>
      <CircularProgress color="primary" className="loader" size={size} />
    </Box>
  );
};
