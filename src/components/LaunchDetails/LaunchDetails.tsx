import {
  Container,
  Button,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import data from './data';
import CountdownTimer from '../CountdownTimer';

function LaunchDetails() {
  const launchDate: number = Date.parse(data.net);
  return (
    <Container>
      {/* <NavLink to="/">Go back</NavLink> */}
      <Button size="large" variant="outlined" sx={{ m: 2 }}>
        Go back
      </Button>
      <Card sx={{ minWidth: 275 }} raised>
        <Grid
          container
          columnSpacing={{ sm: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={3} md={4}>
            <CardMedia
              src={data.image}
              alt={data.name}
              height="100%"
              component="img"
            />
          </Grid>
          <Grid
            item
            xs={4}
            sm={5}
            md={8}
            style={{ backgroundColor: '#fafafa' }}
          >
            <CardHeader
              title={data.name}
              subheader={data.launch_service_provider.name}
            />
            {/* <CardContent> */}
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`Area: ${data.pad.name}, ${data.pad.location.name}`}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Status: {data.status.name}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Date: {data.net}
            </Typography>
            <CountdownTimer launchDate={launchDate} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default LaunchDetails;
