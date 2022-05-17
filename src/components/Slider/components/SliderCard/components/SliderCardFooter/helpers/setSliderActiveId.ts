import { sliderSetActiveSlideId } from '../../../../../actions/sliderActions';
import type { SliderSetActiveSlideId } from '../../../../../types/SliderTypes';
import type { Dispatch } from 'redux';

export const setSliderActiveId =
  (id: string) =>
  (dispatch: Dispatch<SliderSetActiveSlideId>): SliderSetActiveSlideId =>
    dispatch(sliderSetActiveSlideId(id));
