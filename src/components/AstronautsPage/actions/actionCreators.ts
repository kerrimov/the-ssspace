import { AstronautsActions } from './actionTypes';
import type {
  Astronauts,
  FetchAstronautsRequest,
  FetchAstronautsSuccess,
  FetchAstronautsFailure,
} from '../types/Astronauts';

export const fetchAstronautsRequest = (): FetchAstronautsRequest => ({
  type: AstronautsActions.FETCH_ASTRONAUTS_REQUEST,
});

export const fetchAstronautsSuccess = (
  astronauts: Astronauts[],
): FetchAstronautsSuccess => ({
  type: AstronautsActions.FETCH_ASTRONAUTS_SUCCESS,
  payload: astronauts,
});

export const fetchAstronautsFailure = (
  error: string,
): FetchAstronautsFailure => ({
  type: AstronautsActions.FETCH_ASTRONAUTS_FAILURE,
  payload: error,
});
