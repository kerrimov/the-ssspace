import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './AstronautCard.scss';

export const AstronautCard = () => {
  const navigate = useNavigate();

  return (
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
        <Typography variant="body2" color="text.secondary">
          Canadian Space Agency
        </Typography>
      </CardContent>
      <CardActions className="astronautCardActions">
        <Button
          className="astronautCardActions_button"
          variant="contained"
          size="medium"
          sx={{ color: 'black' }}
          onClick={() => {
            navigate('/astronauts/details');
          }}
        >
          <InfoOutlinedIcon
            fontSize="small"
            className="astronautCardActions_buttonIcon"
          />
          Info
        </Button>
      </CardActions>
    </Card>
  );
};
