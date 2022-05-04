import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import './SliderCardFooter.scss';

interface SliderCardFooterProps {
  id: string;
}

export const SliderCardFooter = React.memo(({ id }: SliderCardFooterProps) => (
  <CardActions className="slider-card-footer">
    <Button size="medium" color="primary" variant="contained">
      <Link to="#" className="slider-card-read-more-link">
        Read more
      </Link>
    </Button>
  </CardActions>
));

SliderCardFooter.displayName = 'SliderCardFooter';
