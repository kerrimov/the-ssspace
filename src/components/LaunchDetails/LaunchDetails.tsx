import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardHeader,
} from '@mui/material';
import { GobackButton } from '../GobackButton';
import { CardDetails } from './components/CardDetails';
import { CountdownTimer } from '../CountdownTimer';
import { launchDetails } from '../../mocks/launchDetails';
import './LaunchDetails.scss';

export const LaunchDetails = () => {
  const detailsValues: string[] = [
    `${launchDetails.pad.name}, ${launchDetails.pad.location.name}`,
    launchDetails.status.name,
    launchDetails.net,
  ];
  return (
    <Container className="container">
      <GobackButton path="/" />
      <Card raised>
        <CardActionArea>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={3} md={4}>
              <CardMedia
                src={launchDetails.image}
                alt={launchDetails.name}
                height="100%"
                component="img"
              />
            </Grid>
            <Grid item xs={4} sm={5} md={8} sx={{ p: 2 }}>
              <CardHeader
                title={launchDetails.name}
                subheader={launchDetails.launch_service_provider.name}
                titleTypographyProps={{ variant: 'h5' }}
                className="card-title"
              />
              <CardContent>
                <CardDetails values={detailsValues} />
                <CountdownTimer launchDate={Date.parse(launchDetails.net)} />
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Container>
  );
};
