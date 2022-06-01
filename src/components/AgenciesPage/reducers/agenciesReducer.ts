import { AgenciesActionTypes, Agency } from '../types/Agencies';
import type {
  AgenciesState,
  AgenciesAction,
  AgenciesActionSuccess,
} from '../types/Agencies';

const initialState: AgenciesState = {
  agencies: [],
  agenciesAmount: 0,
  isLoading: false,
  isScrollLoading: false,
};

export const agenciesReducer = (
  state = initialState,
  action: AgenciesAction,
) => {
  const checkPage = (agencies: Agency[]): Agency[] => {
    if (!state.isScrollLoading) return agencies;
    else return [...state.agencies, ...agencies];
  };

  switch (action.type) {
    case AgenciesActionTypes.FETCH_AGENCIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isScrollLoading: action.payload,
      };
    case AgenciesActionTypes.FETCH_AGENCIES_SUCCESS: {
      const { agencies, agenciesAmount } =
        action.payload as AgenciesActionSuccess['payload'];
      return {
        ...state,
        isLoading: false,
        agencies: checkPage(agencies),
        agenciesAmount,
      };
    }
    case AgenciesActionTypes.FETCH_AGENCIES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
