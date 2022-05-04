import React from 'react';
import { Grid } from '@mui/material';
import { AstronautsItem } from './components/AstronautsItem';
import type { Astronauts } from '../../types/Astronauts';

interface AstronautsList {
  astronauts: Astronauts;
}

export const AstronautsList = ({ astronauts }: AstronautsList) => {
  return (
    <Grid container justifyContent="center" columns={{ xs: 4, md: 8 }}>
      {astronauts.map(
        ({ name, agency, profile_image }: Astronauts, index: number) => (
          <Grid key={index} item xs={2}>
            <AstronautsItem
              name={name}
              agency={agency}
              profile_image={profile_image}
            />
          </Grid>
        ),
      )}
    </Grid>
  );
};
