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
      };
    case AgenciesActionTypes.FETCH_AGENCIES_SUCCESS:
      return {
        agencies: action.payload,
        isLoading: false,
        error: '',
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
