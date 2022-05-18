import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';
import { Navigate } from 'react-router';
import { LaunchCardContent } from './components/LaunchCardContent';
import { getActiveSlideData } from './selectors/selectors';
import { SecondaryButton } from '../../shared/components/SecondaryButton';
import { RoutesPath } from '../Router/routesPath';
import type { Launch } from '../../shared/api/types/Launch';
import './LaunchDetailsPage.scss';

export const LaunchDetailsPage = () => {
  const details: Launch = getActiveSlideData();

  return details ? (
    <Container className="launch-details-page">
      <SecondaryButton path={RoutesPath.HOME} caption="go back" />
      <Card raised className="launch-details-card">
        <CardActionArea>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="launch-details-grid"
          >
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
  ) : (
    <Navigate to={RoutesPath.HOME} />
  );
};
