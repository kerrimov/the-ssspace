import {
  ErrorAlertAction,
  ErrorAlertAllActions,
  ErrorAlertState,
} from '../types/errorAlertTypes';

const errorAlertState: ErrorAlertState = {
  message: 'Something goes wrong',
  isOpened: false,
};

export const errorAlertReducer = (
  state = errorAlertState,
  action: ErrorAlertAllActions,
): ErrorAlertState => {
  switch (action.type) {
    case ErrorAlertAction.ERROR_ALERT_TOGGLE:
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    case ErrorAlertAction.ERROR_ALERT_SET_ERROR_MESSAGE:
      return {
        ...state,
        isOpened: true,
        message: action.payload,
      };
    default:
      return state;
  }
};
