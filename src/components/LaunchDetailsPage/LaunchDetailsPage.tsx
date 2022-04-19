import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';
import { SecondaryButton } from '../../shared/components/SecondaryButton';
import { LaunchCardContent } from './components/LaunchCardContent';
import { launchDetails } from './mocks/launchDetails';
import './LaunchDetailsPage.scss';

export const LaunchDetailsPage = () => {
  return (
    <Container>
      <SecondaryButton path="/" caption="go back" />
      <Card raised>
        <CardActionArea>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={3} md={4}>
              <CardMedia
                src={launchDetails.image}
                alt={launchDetails.name}
                component="img"
                className="card-media"
              />
            </Grid>
            <Grid item xs={4} sm={5} md={8} className="card-content">
              <LaunchCardContent />
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Container>
  );
};
