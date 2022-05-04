import {
  SliderAnyActions,
  SliderInitialState,
  Slides,
} from '../types/SliderTypes';
import { SliderActions } from './sliderActions';

const sliderInitialState: SliderInitialState<Slides> = {
  slides: [],
  isLoading: true,
  error: null,
  activeSlideID: null,
};
export const sliderReducer = (
  state = sliderInitialState,
  { type, payload }: SliderAnyActions,
) => {
  switch (type) {
    case SliderActions.GET_DATA:
      return {
        ...state,
        slides: [],
        isLoading: true,
        error: null,
      };
    case SliderActions.GET_DATA_SUCCESS:
      return {
        ...state,
        slides: payload,
        isLoading: false,
        error: null,
      };
    case SliderActions.GET_DATA_ERROR:
      return {
        ...state,
        slides: [],
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
