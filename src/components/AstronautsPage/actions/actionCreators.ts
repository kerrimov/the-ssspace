import { AstronautsActions } from '../types/Astronauts';
import type {
  AstronautsResponse,
  FetchAstronautsRequest,
  FetchAstronautsSuccess,
  FetchAstronautsFailure,
  SetCurrentPage,
} from '../types/Astronauts';

export const fetchAstronautsRequest = (): FetchAstronautsRequest => ({
  type: AstronautsActions.FETCH_ASTRONAUTS_REQUEST,
});

export const fetchAstronautsSuccess = (
  astronauts: AstronautsResponse,
): FetchAstronautsSuccess => ({
  type: AstronautsActions.FETCH_ASTRONAUTS_SUCCESS,
  payload: astronauts,
});

export const fetchAstronautsFailure = (): FetchAstronautsFailure => ({
  type: AstronautsActions.FETCH_ASTRONAUTS_FAILURE,
});

export const setCurrentPage = (page: number): SetCurrentPage => ({
  type: AstronautsActions.SET_CURRENT_PAGE,
  payload: page,
});
