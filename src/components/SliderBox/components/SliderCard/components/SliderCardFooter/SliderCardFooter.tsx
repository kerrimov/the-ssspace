import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import './SliderCardFooter.scss';

export const SliderCardFooter = () => (
  <CardActions className="slider-card-footer">
    <Button size="medium" color="primary" variant="contained">
      <Link to="/launch/details" className="slider-card-read-more-link">
        Read more
      </Link>
    </Button>
  </CardActions>
);
