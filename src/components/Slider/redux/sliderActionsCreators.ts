import {
  SliderGetData,
  SliderGetDataError,
  SliderGetDataSuccess,
  Slides,
} from '../types/SliderTypes';
import { SliderActions } from './sliderActions';

export const sliderGetData = (): SliderGetData => ({
  type: SliderActions.GET_DATA,
});
export const sliderGetDataSuccess = (
  slides: Array<Slides>,
): SliderGetDataSuccess => ({
  type: SliderActions.GET_DATA_SUCCESS,
  payload: slides,
});
export const sliderGetDataError = (
  error: null | string,
): SliderGetDataError => ({
  type: SliderActions.GET_DATA_ERROR,
  payload: error,
});
