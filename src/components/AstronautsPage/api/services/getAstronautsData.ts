import { Dispatch } from 'react';
import { fetchAstronauts } from './fetchAstronauts';
import {
  fetchAstronautsFailure,
  fetchAstronautsRequest,
  fetchAstronautsSuccess,
} from '../../actions/actionCreators';
import { errorAlertToggle } from '../../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type {
  Astronauts,
  FetchAstronautsActions,
} from '../../types/Astronauts';
import type { ErrorAlertToggle } from '../../../../shared/components/ErrorAlert/types/errorAlertTypes';

export const getAstronautsData =
  () =>
  async (
    dispatch: Dispatch<FetchAstronautsActions | ErrorAlertToggle>,
  ): Promise<void> => {
    dispatch(fetchAstronautsRequest());
    try {
      const response: Astronauts[] = await fetchAstronauts();
      dispatch(fetchAstronautsSuccess(response));
    } catch (error) {
      dispatch(fetchAstronautsFailure());
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
