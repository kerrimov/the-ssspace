import { AgenciesActionTypes } from '../types/Agencies';
import type {
  ActionCreatorFailed,
  ActionCreatorRequest,
  ActionCreatorSuccess,
  Agency,
} from '../types/Agencies';

export const fetchAgenciesRequest: ActionCreatorRequest = (
  isScrollLoading: boolean,
) => ({
  type: AgenciesActionTypes.FETCH_AGENCIES_REQUEST,
  payload: isScrollLoading,
});

export const fetchAgenciesSuccess: ActionCreatorSuccess = (
  agencies: Agency[],
  agenciesAmount: number,
) => ({
  type: AgenciesActionTypes.FETCH_AGENCIES_SUCCESS,
  payload: { agencies, agenciesAmount },
});

export const fetchAgenciesFailure: ActionCreatorFailed = () => ({
  type: AgenciesActionTypes.FETCH_AGENCIES_FAILURE,
});
