import { EventsActions } from '../types/Events';
import type { FetchEventsActions, EventsState } from '../types/Events';

const initialState: EventsState = {
  events: [],
  isLoading: false,
};

export const eventsReducer = (
  state = initialState,
  action: FetchEventsActions,
) => {
  switch (action.type) {
    case EventsActions.FETCH_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EventsActions.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: action.payload,
      };
    case EventsActions.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
