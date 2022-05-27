import {
  LaunchDetailsAction,
  LaunchDetailsAllActions,
  LaunchDetailsState,
} from '../types/launchDetailesTypes';

const launchDetailsState: LaunchDetailsState = {
  launch: null,
  isLoading: false,
};

export const launchDetailsReducer = (
  state: LaunchDetailsState = launchDetailsState,
  action: LaunchDetailsAllActions,
): LaunchDetailsState => {
  switch (action.type) {
    case LaunchDetailsAction.LAUNCH_DETAILS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LaunchDetailsAction.LAUNCH_DETAILS_LOADING_GET_LAUNCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        launch: action.payload,
      };
    case LaunchDetailsAction.LAUNCH_DETAILS_LOADING_GET_LAUNCH_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
