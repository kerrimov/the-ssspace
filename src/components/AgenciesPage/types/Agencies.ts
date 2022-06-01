export const enum AgenciesActionTypes {
  FETCH_AGENCIES_REQUEST = 'FETCH_AGENCIES_REQUEST',
  FETCH_AGENCIES_SUCCESS = 'FETCH_AGENCIES_SUCCESS',
  FETCH_AGENCIES_FAILURE = 'FETCH_AGENCIES_FAILURE',
}
export interface Agency {
  id: number;
  name: string;
  type: string;
  administrator: string;
  country_code: string;
  launchers: string;
  image_url: string;
  spacecraft: string;
  logo_url: string;
  [key: string]: string | number;
}

export type AgencyItemContent = Omit<Agency, 'id' | 'image_url'>;
export type AgenciesSpecification = Omit<Agency, 'id' | 'image_url' | 'name'>;

export interface AgenciesState {
  agencies: Agency[];
  agenciesAmount: number;
  isLoading: boolean;
  isScrollLoading: boolean;
}

export type AgenciesAction =
  | AgenciesActionRequest
  | AgenciesActionSuccess
  | AgenciesActionFailed;

export interface AgenciesActionRequest {
  type: AgenciesActionTypes.FETCH_AGENCIES_REQUEST;
  payload: boolean;
}

export interface AgenciesActionSuccess {
  type: AgenciesActionTypes.FETCH_AGENCIES_SUCCESS;
  payload: { agencies: Agency[]; agenciesAmount: number };
}

export interface AgenciesActionFailed {
  type: AgenciesActionTypes.FETCH_AGENCIES_FAILURE;
}

export type ActionCreatorRequest = (
  isScrollLoading: boolean,
) => AgenciesActionRequest;
export type ActionCreatorSuccess = (
  agencies: Agency[],
  agenciesAmount: number,
) => AgenciesActionSuccess;

export type ActionCreatorFailed = () => AgenciesActionFailed;

export interface AgenciesResponse {
  data: {
    results: Agency[];
    count: number;
  };
}
