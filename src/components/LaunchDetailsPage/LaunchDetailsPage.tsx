import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';
import { LaunchCardContent } from './components/LaunchCardContent';
import { getActiveSlideData } from './selectors/selectors';
import { SecondaryButton } from '../../shared/components/SecondaryButton';
import type { Launch } from '../../shared/api/types/Launch';
import './LaunchDetailsPage.scss';

export const LaunchDetailsPage = () => {
  const details: Launch = useSelector(getActiveSlideData);

  return (
    <Container>
      <SecondaryButton path="/" caption="go back" />
      <Card raised>
        <CardActionArea>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={3} md={4}>
              <CardMedia
                src={details.image}
                alt={details.name}
                component="img"
                className="card-media"
              />
            </Grid>
            <Grid item xs={4} sm={5} md={8} className="card-content">
              <LaunchCardContent details={details} />
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Container>
  );
};
