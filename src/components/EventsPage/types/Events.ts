export interface Events {
  id: number;
  name: string;
  description: string;
  video_url: string;
  feature_image: string;
  date: string;
}

export const enum EventsActions {
  FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST',
  FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS',
  FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE',
}

export interface EventsState {
  events: Events[];
  isLoading: boolean;
  error: string;
}

export interface FetchEventsRequest {
  type: EventsActions.FETCH_EVENTS_REQUEST;
}

export interface FetchEventsSuccess {
  type: EventsActions.FETCH_EVENTS_SUCCESS;
  payload: Events[];
}

export interface FetchEventsFailure {
  type: EventsActions.FETCH_EVENTS_FAILURE;
  payload: string;
}

export type FetchEventsActions =
  | FetchEventsRequest
  | FetchEventsSuccess
  | FetchEventsFailure;
