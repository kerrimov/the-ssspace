import type {
  SliderGetData,
  SliderGetDataError,
  SliderGetDataSuccess,
  SliderSetActiveID,
  Slides,
} from '../types/SliderTypes';
import { SliderActions } from './sliderActions';

export const sliderGetData = (): SliderGetData => ({
  type: SliderActions.LOAD_SLIDER_DATA,
});
export const sliderGetDataSuccess = (
  slides: Array<Array<Slides>>,
): SliderGetDataSuccess => ({
  type: SliderActions.GET_SLIDER_DATA_SUCCESS,
  payload: slides,
});

export const sliderGetDataError = (
  error: null | string,
): SliderGetDataError => ({
  type: SliderActions.GET_SLIDER_DATA_ERROR,
  payload: error,
});

export const sliderSetActiveID = (id: string): SliderSetActiveID => ({
  type: SliderActions.SET_ACTIVE_SLIDE_ID,
  payload: id,
});
