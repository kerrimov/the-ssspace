import { AnyAction } from 'redux';
import { SliderActions } from '../redux/sliderActions';

interface LaunchMission {
  description: string;
}

export interface Slides {
  image: string;
  net: string;
  id: string;
  name: string;
  mission: LaunchMission;
}

export interface SliderLoadData extends AnyAction {
  type: SliderActions.SLIDER_LOAD_DATA;
}

export interface SliderGetUpcomingLaunchesSuccess {
  type: SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_SUCCESS;
  payload: Array<Slides>;
}

export interface SliderGetUpcomingLaunchesError {
  type: SliderActions.SLIDER_GET_UPCOMING_LAUNCHES_ERROR;
  payload: string;
}

export interface SliderGetPreviousLaunchesSuccess {
  type: SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_SUCCESS;
  payload: Array<Slides>;
}

export interface SliderGetPreviousLaunchesError {
  type: SliderActions.SLIDER_GET_PREVIOUS_LAUNCHES_ERROR;
  payload: string;
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
  error: string;
  activeSlideId: string | null;
}
