import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import moment from 'moment';
import './SliderCardMain.scss';

interface SliderCardMainProps {
  name: string;
  description: string;
  date: string;
}

export const SliderCardMain: React.FC<SliderCardMainProps> = ({
  name,
  description,
  date,
}: SliderCardMainProps) => {
  const launchDate: Date = new Date(date);
  return (
    <Box className="slider-card-content-container">
      <Typography gutterBottom variant="h4" component="div" align="center">
        {name}
      </Typography>
      <Typography gutterBottom variant="h6" component="div" align="center">
        {description}
      </Typography>
      <Typography gutterBottom variant="h5" component="div" align="center">
        {moment(launchDate).format('LLLL')}
      </Typography>
    </Box>
  );
};
