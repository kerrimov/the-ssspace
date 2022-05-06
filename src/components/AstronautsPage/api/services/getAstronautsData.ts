import { Dispatch } from 'react';
import { fetchAstronauts } from './fetchAstronauts';
import {
  fetchAstronautsRequest,
  fetchAstronautsSuccess,
  fetchAstronautsFailure,
} from '../../actions/actionCreators';
import type {
  Astronauts,
  FetchAstronautsActions,
} from '../../types/Astronauts';

export const getAstronautsData =
  () =>
  async (dispatch: Dispatch<FetchAstronautsActions>): Promise<void> => {
    dispatch(fetchAstronautsRequest());
    try {
      const response: Astronauts[] = await fetchAstronauts();
      dispatch(fetchAstronautsSuccess(response));
    } catch (error) {
      dispatch(fetchAstronautsFailure((error as Error).message));
    }
  };
