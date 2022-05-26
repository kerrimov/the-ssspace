import { SliderActions } from '../types/SliderTypes';
import type { SliderAllActions, SliderState } from '../types/SliderTypes';

export const sliderState: SliderState = {
  sliderUpcomingLaunches: [],
  sliderPreviousLaunches: [],
  isLoading: false,
  activeSlideId: undefined,
};
export const sliderReducer = (
  state: SliderState = sliderState,
  action: SliderAllActions,
): SliderState => {
  switch (action.type) {
    case SliderActions.SLIDER_LOAD_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_SUCCESS:
      return {
        ...state,
        sliderUpcomingLaunches: action.payload,
        isLoading: false,
      };
    case SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_SUCCESS:
      return {
        ...state,
        sliderPreviousLaunches: action.payload,
        isLoading: false,
      };
    case SliderActions.SLIDER_SET_ACTIVE_SLIDE_ID:
      return {
        ...state,
        activeSlideId: action.payload,
      };
    default:
      return state;
  }
};
