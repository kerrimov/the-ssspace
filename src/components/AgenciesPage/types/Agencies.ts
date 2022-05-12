import { AgenciesActionTypes } from '../actions/ActionTypesAgencies';

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

export interface AgenciesAction {
  type: AgenciesActionTypes;
  payload?: AgenciesState[keyof AgenciesState];
}

export type ActionCreatorRequest = () => AgenciesAction;
export type ActionCreatorSuccess = (agencies: Agency[]) => AgenciesAction;
export type ActionCreatorFailed = (error: string) => AgenciesAction;
