import { AstronautsActions } from '../actions/actionTypes';

export interface AstronautsName {
  name: string;
}

export interface Astronauts extends AstronautsName {
  agency: AstronautsName;
  profile_image: string;
}

export interface AstronautsState {
  astronauts: Astronauts[];
  isLoading: boolean;
  error: string;
}

export interface FetchAstronautsRequest {
  type: AstronautsActions.FETCH_ASTRONAUTS_REQUEST;
}

export interface FetchAstronautsSuccess {
  type: AstronautsActions.FETCH_ASTRONAUTS_SUCCESS;
  payload: Astronauts[];
}

export interface FetchAstronautsFailure {
  type: AstronautsActions.FETCH_ASTRONAUTS_FAILURE;
  payload: string;
}

export type FetchAstronautsActions =
  | FetchAstronautsRequest
  | FetchAstronautsSuccess
  | FetchAstronautsFailure;
