import { AppActionTypes } from './actionTypes';
import type { AppState } from '../types';

//for example, will be changed
export const appAction1 = (app: AppState) => ({
  type: AppActionTypes.APP_TYPE_1,
  payload: app,
});
