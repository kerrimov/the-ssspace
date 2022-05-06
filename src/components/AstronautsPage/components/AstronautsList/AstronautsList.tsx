import React from 'react';
import { Grid } from '@mui/material';
import { AstronautsItem } from './components/AstronautsItem';
import { selectAstronauts } from '../../selectors/astronautsSelectors';
import type { Astronauts } from '../../types/Astronauts';

export const AstronautsList = () => {
  const { astronauts } = selectAstronauts();

  return (
    <Grid container>
      {astronauts.map(
        ({ name, agency, profile_image }: Astronauts, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <AstronautsItem
              key={index}
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
