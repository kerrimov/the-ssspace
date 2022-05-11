import type { Dispatch } from 'redux';
import type { SliderSetActiveID } from '../../../../../types/SliderTypes';
import { sliderSetActiveID } from '../../../../../redux/sliderActionsCreators';

export const setSliderActiveId =
  (id: string) =>
  (dispatch: Dispatch<SliderSetActiveID>): void => {
    dispatch(sliderSetActiveID(id));
  };
