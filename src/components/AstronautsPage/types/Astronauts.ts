export const enum AstronautsActions {
  FETCH_ASTRONAUTS_REQUEST = 'FETCH_ASTRONAUTS_REQUEST',
  FETCH_ASTRONAUTS_SUCCESS = 'FETCH_ASTRONAUTS_SUCCESS',
  FETCH_ASTRONAUTS_FAILURE = 'FETCH_ASTRONAUTS_FAILURE',
}

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
}

export type FetchAstronautsActions =
  | FetchAstronautsRequest
  | FetchAstronautsSuccess
  | FetchAstronautsFailure;
