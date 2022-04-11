import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import './SliderCardMain.scss';

interface SliderCardMainProps {
  name: string;
}

export const SliderCardMain = ({ name }: SliderCardMainProps) => (
  <Box className="slider-card-content-container">
    <Typography gutterBottom variant="h4" component="div" align="center">
      {`${name} Long March | SJ-6 Group 06`}
    </Typography>
    <Typography gutterBottom variant="h6" component="div" align="center">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      possimus sunt animi explicabo praesentium, ad beatae repellendus
      dignissimos hic rem necessitatibus! Nesciunt illo non pariatur ad
      excepturi culpa libero consequuntur.
    </Typography>
    <Typography gutterBottom variant="h5" component="div" align="center">
      06/04/2022
    </Typography>
  </Box>
);
