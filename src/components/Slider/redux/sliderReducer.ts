import { SliderActions } from './sliderActions';
import { SliderAllActions, SliderState } from '../types/SliderTypes';

export const sliderState: SliderState = {
  sliderUpcomingLaunches: [],
  sliderPreviousLaunches: [],
  isLoading: false,
  error: '',
  slides: [],
  activeSlideId: null,
};

export const sliderReducer = (
  state = sliderState,
  { type, payload }: SliderAllActions,
) => {
  switch (type) {
    case SliderActions.SLIDER_LOAD_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_ERROR:
      return {
        ...state,
        sliderUpcomingLaunches: [],
        error: payload,
        isLoading: false,
      };
    case SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_SUCCESS:
      return {
        ...state,
        sliderUpcomingLaunches: payload,
        error: '',
        isLoading: false,
      };
    case SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_ERROR:
      return {
        ...state,
        sliderPreviousLaunches: [],
        error: payload,
        isLoading: false,
      };
    case SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_SUCCESS:
      return {
        ...state,
        sliderPreviousLaunches: payload,
        error: '',
        isLoading: false,
      };
    case SliderActions.SLIDER_SET_ACTIVE_SLIDE_ID:
      return {
        ...state,
        activeSlideId: payload,
      };
    default:
      return state;
  }
};
