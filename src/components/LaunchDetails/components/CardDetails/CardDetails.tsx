import React from 'react';
import { Box, Typography } from '@mui/material';
import './CardDetails.scss';

interface CardDetailsProps {
  values: string[];
}
export const CardDetails = ({ values }: CardDetailsProps) => {
  const detailsCaptions: string[] = ['Area:', 'Status:', 'Date:'];

  return (
    <Box className="card-details">
      {detailsCaptions.map((caption: string, index: number) => (
        <Typography variant="body1" key={index}>
          {caption}
        </Typography>
      ))}
      {values.map((value: string, index: number) => (
        <Typography variant="body1" key={index}>
          {value}
        </Typography>
      ))}
    </Box>
  );
};
