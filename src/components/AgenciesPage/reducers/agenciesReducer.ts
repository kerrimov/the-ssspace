import { AgenciesActionTypes } from '../types/Agencies';
import type { AgenciesState, AgenciesAction } from '../types/Agencies';

const initialState: AgenciesState = {
  agencies: [],
  isLoading: false,
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
        ...state,
        isLoading: false,
        agencies: action.payload,
      };
    case AgenciesActionTypes.FETCH_AGENCIES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
