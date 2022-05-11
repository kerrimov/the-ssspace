import type {
  SliderAnyActions,
  SliderInitialState,
} from '../types/SliderTypes';
import { SliderActions } from './sliderActions';

const sliderInitialState: SliderInitialState = {
  slides: [],
  isLoading: true,
  error: null,
  activeSlideId: null,
};

export const sliderReducer = (
  state = sliderInitialState,
  { type, payload }: SliderAnyActions,
) => {
  switch (type) {
    case SliderActions.LOAD_SLIDER_DATA:
      return {
        ...state,
        slides: [],
        isLoading: true,
        error: null,
      };
    case SliderActions.GET_SLIDER_DATA_SUCCESS:
      return {
        ...state,
        slides: payload.flatMap((launchesArray, index: number) =>
          index === 0 ? launchesArray.slice(0, 2) : launchesArray.slice(0, 1),
        ),
        isLoading: false,
        error: null,
      };
    case SliderActions.GET_SLIDER_DATA_ERROR:
      return {
        ...state,
        slides: [],
        isLoading: false,
        error: payload,
      };
    case SliderActions.SET_ACTIVE_SLIDE_ID:
      return {
        ...state,
        activeSlideId: payload,
      };
    default:
      return state;
  }
};
