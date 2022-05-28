import { AstronautsActions } from '../types/Astronauts';
import type {
  FetchAstronautsActions,
  AstronautsState,
} from '../types/Astronauts';

const initialState: AstronautsState = {
  astronauts: [],
  currentPage: 1,
  totalPageCount: 0,
  isLoading: false,
};

export const astronautsReducer = (
  state = initialState,
  action: FetchAstronautsActions,
) => {
  switch (action.type) {
    case AstronautsActions.FETCH_ASTRONAUTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AstronautsActions.FETCH_ASTRONAUTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        astronauts: action.payload.results,
        totalPageCount: action.payload.count,
      };
    case AstronautsActions.FETCH_ASTRONAUTS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case AstronautsActions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
