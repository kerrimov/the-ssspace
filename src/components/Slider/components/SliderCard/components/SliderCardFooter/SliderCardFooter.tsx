import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import { SliderAnyActions } from '../../../../types/SliderTypes';
import { sliderSetActiveID } from '../../../../redux/sliderActionsCreators';
import './SliderCardFooter.scss';

interface SliderCardFooterProps {
  id: string;
}

export const SliderCardFooter = React.memo(({ id }: SliderCardFooterProps) => {
  const dispatch = useDispatch<Dispatch<SliderAnyActions>>();

  return (
    <CardActions className="slider-card-footer">
      <Button size="medium" color="primary" variant="contained">
        <Link
          to="#"
          className="slider-card-read-more-link"
          onClick={e => dispatch(sliderSetActiveID(id))}
        >
          Read more
        </Link>
      </Button>
    </CardActions>
  );
});

SliderCardFooter.displayName = 'SliderCardFooter';
