import { fetchEvents } from './fetchEvents';
import {
  fetchEventsFailure,
  fetchEventsRequest,
  fetchEventsSuccess,
} from '../../actions/actionCreators';
import { errorAlertToggle } from '../../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type { Dispatch } from 'redux';
import type { Events, FetchEventsActions } from '../../types/Events';
import type { ErrorAlertToggle } from '../../../../shared/components/ErrorAlert/types/errorAlertTypes';

export const getEventsData =
  () =>
  async (
    dispatch: Dispatch<FetchEventsActions | ErrorAlertToggle>,
  ): Promise<void> => {
    dispatch(fetchEventsRequest());
    try {
      const response: Events[] = await fetchEvents();
      dispatch(fetchEventsSuccess(response));
    } catch (error) {
      dispatch(fetchEventsFailure());
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
