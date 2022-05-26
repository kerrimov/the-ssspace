import { EventsActions } from '../types/Events';
import type {
  Events,
  FetchEventsRequest,
  FetchEventsSuccess,
  FetchEventsFailure,
} from '../types/Events';

export const fetchEventsRequest = (): FetchEventsRequest => ({
  type: EventsActions.FETCH_EVENTS_REQUEST,
});

export const fetchEventsSuccess = (events: Events[]): FetchEventsSuccess => ({
  type: EventsActions.FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (): FetchEventsFailure => ({
  type: EventsActions.FETCH_EVENTS_FAILURE,
});
