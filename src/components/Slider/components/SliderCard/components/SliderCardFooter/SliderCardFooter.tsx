import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, CardActions } from '@mui/material';
import { setSliderActiveId } from './helpers/setSliderActiveId';
import { SliderSetActiveSlideId } from '../../../../types/SliderTypes';
import { RoutesPath } from '../../../../../Router/routesPath';
import './SliderCardFooter.scss';

interface SliderCardFooterProps {
  id: string;
}

const SliderCardFooter: React.FC<SliderCardFooterProps> = ({
  id,
}: SliderCardFooterProps) => {
  const dispatch = useDispatch<Dispatch<SliderSetActiveSlideId>>();

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
          to={RoutesPath.DETAILS}
          className="slider-card-read-more-link"
          onClick={() => onClickSetActiveId(id)}
        >
          Read more
        </Link>
      </Button>
    </CardActions>
  );
};

export const SliderCardFooterMemoized = React.memo(SliderCardFooter);
