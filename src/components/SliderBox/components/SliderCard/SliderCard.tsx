import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './SliderCard.scss';
import Timer from './components/Timer';

type SliderCardProps = {
  name: string;
  date: string;
};

const SliderCard = ({ name, date }: SliderCardProps) => {
  return (
    <Card className="slider-card">
      <CardMedia
        className="slider-card-image "
        component="img"
        height="500"
        image="https://upload.wikimedia.org/wikipedia/commons/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg"
        alt="rocket launch"
      />
      <CardContent className="slider-card-content">
        <Typography
          variant="h4"
          component="div"
          align="center"
          className="slider-card-header"
        >
          {`${name} Long March | SJ-6 Group 06`}
        </Typography>
        <Typography variant="h6" className="slider-card-text" align="center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          possimus sunt animi explicabo praesentium, ad beatae repellendus
          dignissimos hic rem necessitatibus! Nesciunt illo non pariatur ad
          excepturi culpa libero consequuntur.
        </Typography>
        <Typography
          className="slider-card-date"
          variant="h5"
          component="div"
          align="center"
        >
          06/04/2022
        </Typography>
        <Timer date={date} />
        <CardActions className="slider-card-footer">
          <Button size="medium" color="primary" variant="outlined">
            <Link to="/launch/home" className="slider-card-read-more-link">
              Read more
            </Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default SliderCard;
