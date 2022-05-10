import { AppActionTypes } from './actionTypes';
import type { AppAction, AppState } from '../types';

//TODO: update with real values
const initialState: AppState = {
  name: '',
  value: 0,
};

//for example, will be changed
export const appReducer = (state = initialState, action: AppAction) => {
  const { type, payload = {} } = action;

  switch (type) {
    case AppActionTypes.APP_TYPE_1:
      return { ...state, name: payload.name };
    default:
      return state;
  }
};
