import { Dispatch } from 'react';
import { fetchEvents } from './fetchEvents';
import {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsFailure,
} from '../../actions/actionCreators';
import type { Events, FetchEventsActions } from '../../types/Events';

export const getEventsData =
  () =>
  async (dispatch: Dispatch<FetchEventsActions>): Promise<void> => {
    dispatch(fetchEventsRequest());
    try {
      const response: Events[] = await fetchEvents();
      dispatch(fetchEventsSuccess(response));
    } catch (error) {
      dispatch(fetchEventsFailure((error as Error).message));
    }
  };
