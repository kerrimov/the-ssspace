import React from 'react';
import { Grid } from '@mui/material';
import { AboutItem } from './components/AboutItem';
import { aboutData } from '../../mocks/aboutData';
import type { About } from '../../types/About';
import './AboutList.scss';

export const AboutList = () => (
  <Grid className="about-list" container>
    {aboutData.map((aboutItem: About, index: number) => (
      <Grid
        className="about-list-grid"
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={index}
      >
        <AboutItem aboutItem={aboutItem} />
      </Grid>
    ))}
  </Grid>
);
