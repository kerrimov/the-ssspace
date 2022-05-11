import { AgenciesActions } from './ActionTypesAgencies';
import { Agency } from '../types/Agencies';
import { AgenciesAction } from '../reducers/agenciesReducer';

type ActionCreatorRequest = () => AgenciesAction;
type ActionCreatorSuccess = (agencies: Agency[]) => AgenciesAction;
type ActionCreatorFailed = (error: string) => AgenciesAction;

export const fetchAgenciesRequest: ActionCreatorRequest = () => ({
  type: AgenciesActions.FETCH_AGENCIES_REQUEST,
});

export const fetchAgenciesSuccess: ActionCreatorSuccess = (
  agencies: Agency[],
) => ({
  type: AgenciesActions.FETCH_AGENCIES_SUCCESS,
  payload: agencies,
});

export const fetchAgenciesFailure: ActionCreatorFailed = (error: string) => ({
  type: AgenciesActions.FETCH_AGENCIES_FAILURE,
  payload: error,
});
