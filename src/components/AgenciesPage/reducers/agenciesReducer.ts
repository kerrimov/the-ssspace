import { AgenciesActionTypes } from '../types/Agencies';
import type { AgenciesState, AgenciesAction } from '../types/Agencies';

const initialState: AgenciesState = {
  agencies: [],
  isLoading: false,
  error: '',
};

export const agenciesReducer = (
  state = initialState,
  action: AgenciesAction,
) => {
  switch (action.type) {
    case AgenciesActionTypes.FETCH_AGENCIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case AgenciesActionTypes.FETCH_AGENCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        agencies: action.payload,
      };
    case AgenciesActionTypes.FETCH_AGENCIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
