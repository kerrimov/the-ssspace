import {
  ErrorAlertAction,
  ErrorAlertState,
  ErrorAlertToggle,
} from '../types/errorAlertTypes';

const errorAlertState: ErrorAlertState = {
  message: '',
  isOpened: false,
};

export const errorAlertReducer = (
  state: ErrorAlertState = errorAlertState,
  action: ErrorAlertToggle,
): ErrorAlertState => {
  switch (action.type) {
    case ErrorAlertAction.ERROR_ALERT_TOGGLE:
      return {
        ...state,
        isOpened: !state.isOpened,
        message: action.payload,
      };
    default:
      return state;
  }
};
