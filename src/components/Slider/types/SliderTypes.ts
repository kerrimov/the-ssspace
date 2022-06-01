import { Launch } from '@shared/api/types/Launch';

interface LaunchMission {
  description: string;
}

export interface Slides extends Launch {
  image: string;
  net: string;
  id: string;
  name: string;
  mission: LaunchMission;
}

export const enum SliderActions {
  SLIDER_LOAD_DATA = 'SLIDER_LOAD_DATA',
  SLIDER_GET_UPCOMING_LAUNCHES_SUCCESS = 'SLIDER_GET_UPCOMING_LAUNCHES_SUCCESS',
  SLIDER_GET_UPCOMING_LAUNCHES_ERROR = 'SLIDER_GET_UPCOMING_LAUNCHES_ERROR',
  SLIDER_GET_PREVIOUS_LAUNCHES_SUCCESS = 'SLIDER_GET_PREVIOUS_LAUNCHES_SUCCESS',
  SLIDER_GET_PREVIOUS_LAUNCHES_ERROR = 'SLIDER_GET_PREVIOUS_LAUNCHES_ERROR',
  SLIDER_SET_ACTIVE_SLIDE_ID = 'SLIDER_SET_ACTIVE_SLIDE_ID',
}

export interface SliderLoadData {
  type: SliderActions.SLIDER_LOAD_DATA;
}

export interface SliderGetUpcomingLaunchesSuccess {
  type: SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_SUCCESS;
  payload: Array<Slides>;
}

export interface SliderGetUpcomingLaunchesError {
  type: SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_ERROR;
}

export interface SliderGetPreviousLaunchesSuccess {
  type: SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_SUCCESS;
  payload: Array<Slides>;
}

export interface SliderGetPreviousLaunchesError {
  type: SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_ERROR;
}

export interface SliderSetActiveSlideId {
  type: SliderActions.SLIDER_SET_ACTIVE_SLIDE_ID;
  payload: string;
}

export type SliderAllActions =
  | SliderSetActiveSlideId
  | SliderLoadData
  | SliderGetUpcomingLaunchesSuccess
  | SliderGetUpcomingLaunchesError
  | SliderGetPreviousLaunchesSuccess
  | SliderGetPreviousLaunchesError;

export interface SliderState {
  sliderUpcomingLaunches: Array<Slides>;
  sliderPreviousLaunches: Array<Slides>;
  isLoading: boolean;
  activeSlideId: string | undefined;
}
