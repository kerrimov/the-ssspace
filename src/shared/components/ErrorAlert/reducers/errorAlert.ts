import {
  ErrorAlertAction,
  ErrorAlertAllActions,
  ErrorAlertState,
} from '../types/errorAlertTypes';

const errorAlertState = {
  message: 'Something goes wrong',
  isOpened: false,
};

export const errorAlertReducer = (
  state = errorAlertState,
  action: ErrorAlertAllActions,
): ErrorAlertState => {
  switch (action.type) {
    case ErrorAlertAction.ERROR_ALERT_CLOSE:
      return {
        ...state,
        isOpened: false,
      };
    case ErrorAlertAction.ERROR_ALERT_OPEN:
      return {
        ...state,
        isOpened: true,
      };
    case ErrorAlertAction.ERROR_ALERT_SET_ERROR_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
