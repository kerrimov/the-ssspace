import { AgenciesActions } from '../actions/ActionTypesAgencies';
import { Agency } from '../types/Agencies';

export interface AgenciesState {
  agencies: Agency[];
  isLoading: boolean;
  error: string;
}

export interface AgenciesAction {
  type: AgenciesActions;
  payload?: AgenciesState[keyof AgenciesState];
}

const initialState: AgenciesState = {
  agencies: [],
  isLoading: false,
  error: '',
};

export const agenciesReducer = (
  state = initialState,
  { type, payload }: AgenciesAction,
) => {
  switch (type) {
    case AgenciesActions.FETCH_AGENCIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AgenciesActions.FETCH_AGENCIES_SUCCESS:
      return {
        agencies: payload as Agency[],
        isLoading: false,
        error: '',
      };
    case AgenciesActions.FETCH_AGENCIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload as string,
      };
    default:
      return state;
  }
};
