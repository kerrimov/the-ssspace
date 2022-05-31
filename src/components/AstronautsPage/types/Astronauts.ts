export const enum AstronautsActions {
  FETCH_ASTRONAUTS_REQUEST = 'FETCH_ASTRONAUTS_REQUEST',
  FETCH_ASTRONAUTS_SUCCESS = 'FETCH_ASTRONAUTS_SUCCESS',
  FETCH_ASTRONAUTS_FAILURE = 'FETCH_ASTRONAUTS_FAILURE',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

export type PageParams = {
  page: string;
};

export interface AstronautsResponse {
  count: number;
  results: Astronauts[];
}

export interface AstronautsName {
  name: string;
}

export interface Astronauts extends AstronautsName {
  id?: number;
  agency: AstronautsName;
  profile_image: string;
}

export interface AstronautsState {
  astronauts: Astronauts[];
  currentPage: number;
  totalPageCount: number;
  isLoading: boolean;
}

export interface FetchAstronautsRequest {
  type: AstronautsActions.FETCH_ASTRONAUTS_REQUEST;
}

export interface FetchAstronautsSuccess {
  type: AstronautsActions.FETCH_ASTRONAUTS_SUCCESS;
  payload: AstronautsResponse;
}

export interface FetchAstronautsFailure {
  type: AstronautsActions.FETCH_ASTRONAUTS_FAILURE;
}

export interface SetCurrentPage {
  type: AstronautsActions.SET_CURRENT_PAGE;
  payload: number;
}

export type FetchAstronautsActions =
  | FetchAstronautsRequest
  | FetchAstronautsSuccess
  | FetchAstronautsFailure
  | SetCurrentPage;
