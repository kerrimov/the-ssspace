import { SliderSetActiveSlideId } from '../../../../../types/SliderTypes';
import { sliderSetActiveSlideId } from '../../../../../redux/sliderActionsCreators';
import type { Dispatch } from 'redux';

export const setSliderActiveId =
  (id: string) =>
  (dispatch: Dispatch<SliderSetActiveSlideId>): void => {
    dispatch(sliderSetActiveSlideId(id));
  };
