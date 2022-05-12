import { AgenciesActionTypes } from './ActionTypesAgencies';
import type {
  ActionCreatorFailed,
  ActionCreatorRequest,
  ActionCreatorSuccess,
  Agency,
} from '../types/Agencies';

export const fetchAgenciesRequest: ActionCreatorRequest = () => ({
  type: AgenciesActionTypes.FETCH_AGENCIES_REQUEST,
});

export const fetchAgenciesSuccess: ActionCreatorSuccess = (
  agencies: Agency[],
) => ({
  type: AgenciesActionTypes.FETCH_AGENCIES_SUCCESS,
  payload: agencies,
});

export const fetchAgenciesFailure: ActionCreatorFailed = (error: string) => ({
  type: AgenciesActionTypes.FETCH_AGENCIES_FAILURE,
  payload: error,
});
