import type { AgenciesActionTypes } from '../actions/ActionTypesAgencies';

export interface Agency {
  id: number;
  name: string;
  type: string;
  administrator: string;
  country_code: string;
  launchers: string;
  image_url: string;
  spacecraft: string;
  [key: string]: string | number;
}

export type AgencyItemContent = Omit<Agency, 'id' | 'image_url'>;
export type AgenciesSpecification = Omit<Agency, 'id' | 'image_url' | 'name'>;

export interface AgenciesState {
  agencies: Agency[];
  isLoading: boolean;
  error: string;
}

export type AgenciesAction =
  | AgenciesActionRequest
  | AgenciesActionSuccess
  | AgenciesActionFailed;

export interface AgenciesActionRequest {
  type: AgenciesActionTypes.FETCH_AGENCIES_REQUEST;
}

export interface AgenciesActionSuccess {
  type: AgenciesActionTypes.FETCH_AGENCIES_SUCCESS;
  payload?: Agency[];
}

export interface AgenciesActionFailed {
  type: AgenciesActionTypes.FETCH_AGENCIES_FAILURE;
  payload?: string;
}

export type ActionCreatorRequest = () => AgenciesActionRequest;
export type ActionCreatorSuccess = (
  agencies: Agency[],
) => AgenciesActionSuccess;
export type ActionCreatorFailed = (error: string) => AgenciesActionFailed;
