import React from 'react';
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import './AstronautCard.scss';

export const AstronautCard = () => {
  return (
    <Container maxWidth="xs">
      <Card sx={{ maxWidth: 268 }} className="astronautCard">
        <CardMedia
          component="img"
          height="240"
          image="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/julie_payette_image_20220122091651.jpeg"
          alt="astronaut"
        />
        <CardContent className="astronautCardContent">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: 'primary.contrastText' }}
          >
            Julie Payette
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="astronautCardContent_agency"
          >
            Canadian Space Agency
          </Typography>
          <div className="astronautCardContent_separator"></div>
          <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
            Time left for flight
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date
          </Typography>
        </CardContent>
        <CardActions className="astronautCardActions">
          <Button
            variant="contained"
            size="small"
            sx={{ color: 'primary.contrastText' }}
          >
            More info
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
