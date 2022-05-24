import { Dispatch } from 'react';
import { fetchAstronauts } from './fetchAstronauts';
import {
  fetchAstronautsRequest,
  fetchAstronautsSuccess,
  fetchAstronautsFailure,
} from '../../actions/actionCreators';
import { errorAlertSetErrorMessage } from '../../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type {
  Astronauts,
  FetchAstronautsActions,
} from '../../types/Astronauts';
import type { ErrorAlertAllActions } from '../../../../shared/components/ErrorAlert/types/errorAlertTypes';

export const getAstronautsData =
  () =>
  async (
    dispatch: Dispatch<FetchAstronautsActions | ErrorAlertAllActions>,
  ): Promise<void> => {
    dispatch(fetchAstronautsRequest());
    try {
      const response: Astronauts[] = await fetchAstronauts();
      dispatch(fetchAstronautsSuccess(response));
    } catch (error) {
      dispatch(fetchAstronautsFailure((error as Error).message));
      dispatch(errorAlertSetErrorMessage((error as Error).message));
    }
  };
