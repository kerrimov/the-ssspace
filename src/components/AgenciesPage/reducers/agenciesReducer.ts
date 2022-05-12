import { AgenciesActionTypes } from '../actions/ActionTypesAgencies';
import { AgenciesAction, AgenciesState, Agency } from '../types/Agencies';

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
    case AgenciesActionTypes.FETCH_AGENCIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AgenciesActionTypes.FETCH_AGENCIES_SUCCESS:
      return {
        agencies: payload as Agency[],
        isLoading: false,
        error: '',
      };
    case AgenciesActionTypes.FETCH_AGENCIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload as string,
      };
    default:
      return state;
  }
};
