import { AstronautsActions } from '../actions/actionTypes';
import type {
  FetchAstronautsActions,
  AstronautsState,
} from '../types/Astronauts';

const initialState: AstronautsState = {
  astronauts: [],
  isLoading: false,
  error: '',
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
        astronauts: action.payload,
      };
    case AstronautsActions.FETCH_ASTRONAUTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
