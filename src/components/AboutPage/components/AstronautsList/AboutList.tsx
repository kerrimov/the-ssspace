import React from 'react';
import { Grid } from '@mui/material';
import { AboutItem } from './components/AboutItem';
import { aboutData } from '../../mocks/aboutData';
import { About } from '../../types/About';

export const AboutList = () => {
  return (
    <Grid container>
      {aboutData.map(
        (
          { name, position, contacts, description, profile_image }: About,
          index: number,
        ) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <AboutItem
              key={index}
              name={name}
              position={position}
              contacts={contacts}
              description={description}
              profile_image={profile_image}
            />
          </Grid>
        ),
      )}
    </Grid>
  );
};
