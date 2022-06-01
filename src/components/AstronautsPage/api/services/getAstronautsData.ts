import { Dispatch } from 'react';
import { errorAlertToggle } from '@shared/components/ErrorAlert/actions/errorAlertActions';
import { fetchAstronauts } from './fetchAstronauts';
import {
  fetchAstronautsFailure,
  fetchAstronautsRequest,
  fetchAstronautsSuccess,
} from '../../actions/actionCreators';
import type {
  AstronautsResponse,
  FetchAstronautsActions,
} from '../../types/Astronauts';
import type { ErrorAlertToggle } from '@shared/components/ErrorAlert/types/errorAlertTypes';

export const getAstronautsData =
  (limit: number, page: number) =>
  async (
    dispatch: Dispatch<FetchAstronautsActions | ErrorAlertToggle>,
  ): Promise<void> => {
    dispatch(fetchAstronautsRequest());
    try {
      const response: AstronautsResponse = await fetchAstronauts(limit, page);
      dispatch(fetchAstronautsSuccess(response));
    } catch (error) {
      dispatch(fetchAstronautsFailure());
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
