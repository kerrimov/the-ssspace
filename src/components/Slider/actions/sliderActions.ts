import {
  SliderActions,
  SliderGetPreviousLaunchesError,
  SliderGetPreviousLaunchesSuccess,
  SliderGetUpcomingLaunchesError,
  SliderGetUpcomingLaunchesSuccess,
  SliderLoadData,
  SliderSetActiveSlideId,
  Slides,
} from '../types/SliderTypes';

export const sliderLoadData = (): SliderLoadData => ({
  type: SliderActions.SLIDER_LOAD_DATA,
});

export const sliderGetUpcomingLaunchesSuccess = (
  launches: Array<Slides>,
): SliderGetUpcomingLaunchesSuccess => ({
  type: SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_SUCCESS,
  payload: launches,
});

export const sliderGetUpcomingLaunchesError =
  (): SliderGetUpcomingLaunchesError => ({
    type: SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_ERROR,
  });

export const sliderGetPreviousLaunchesSuccess = (
  launches: Array<Slides>,
): SliderGetPreviousLaunchesSuccess => ({
  type: SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_SUCCESS,
  payload: launches,
});

export const sliderGetPreviousLaunchesError =
  (): SliderGetPreviousLaunchesError => ({
    type: SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_ERROR,
  });

export const sliderSetActiveSlideId = (id: string): SliderSetActiveSlideId => ({
  type: SliderActions.SLIDER_SET_ACTIVE_SLIDE_ID,
  payload: id,
});
