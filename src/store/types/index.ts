import { AppActionTypes } from '../app/actionTypes';

//TODO: update with real values
export interface AppState {
  name?: string;
  value?: number;
}
export interface AppAction {
  type: AppActionTypes;
  payload?: AppState;
}
