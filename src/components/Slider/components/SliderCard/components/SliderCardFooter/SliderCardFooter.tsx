import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import type { SliderSetActiveID } from '../../../../types/SliderTypes';
import { setSliderActiveId } from './helpers/setSliderActiveId';
import './SliderCardFooter.scss';

interface SliderCardFooterProps {
  id: string;
}

export const SliderCardFooter: React.FC<SliderCardFooterProps> = ({
  id,
}: SliderCardFooterProps) => {
  const dispatch = useDispatch<Dispatch<SliderSetActiveID>>();

  const onClickSetActiveId = useCallback(
    (id: string) => {
      setSliderActiveId(id)(dispatch);
    },
    [id],
  );

  return (
    <CardActions className="slider-card-footer">
      <Button size="medium" color="primary" variant="contained">
        <Link
          to="#"
          className="slider-card-read-more-link"
          onClick={() => onClickSetActiveId(id)}
        >
          Read more
        </Link>
      </Button>
    </CardActions>
  );
};

React.memo(SliderCardFooter);
