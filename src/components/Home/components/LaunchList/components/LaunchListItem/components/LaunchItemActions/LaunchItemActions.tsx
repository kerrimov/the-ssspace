import React from 'react';
import { useDispatch } from 'react-redux';
import { CardActions } from '@mui/material';
import { Share } from '@mui/icons-material';
import { InfoButton } from '@shared/components/InfoButton';
import { SecondaryButton } from '@shared/components/SecondaryButton';
import { ButtonSizes } from '@shared/components/SecondaryButton/types/secondaryButtonTypes';
import { RoutesPath } from '../../../../../../../Router/routesPath';
import { setSliderActiveId } from '../../../../../../../Slider/components/SliderCard/components/SliderCardFooter/helpers/setSliderActiveId';
import type { Dispatch } from '@reduxjs/toolkit';
import type { SliderSetActiveSlideId } from '../../../../../../../Slider/types/SliderTypes';
import './LaunchItemActions.scss';

interface LaunchItemActionsProps {
  id: string;
}

export const LaunchItemActions = ({ id }: LaunchItemActionsProps) => {
  const dispatch: Dispatch<SliderSetActiveSlideId> = useDispatch();
  const onClickInfo = () => setSliderActiveId(id)(dispatch);
  const onClickShare = () => {
    const { origin, pathname } = window.location;
    navigator.clipboard.writeText(
      `${origin}${pathname}#/${RoutesPath.DETAILS.slice(1)}${id}`,
    );
  };
  return (
    <CardActions className="launch-item-actions">
      <InfoButton
        path={`${RoutesPath.DETAILS}${id}`}
        clickHandler={onClickInfo}
        className="launch-info-button"
      />
      <SecondaryButton
        caption="share"
        path={''}
        buttonSize={ButtonSizes.MEDIUM}
        clickHandler={onClickShare}
        className="launch-info-button"
        Icon={props => <Share {...props} />}
      />
    </CardActions>
  );
};
