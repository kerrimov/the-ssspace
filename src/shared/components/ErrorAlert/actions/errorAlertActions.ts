import {
  ErrorAlertAction,
  ErrorAlertClose,
  ErrorAlertOpen,
  ErrorAlertSetErrorMessage,
} from '../types/errorAlertTypes';

export const errorAlertClose = (): ErrorAlertClose => ({
  type: ErrorAlertAction.ERROR_ALERT_CLOSE,
});
export const errorAlertOpen = (): ErrorAlertOpen => ({
  type: ErrorAlertAction.ERROR_ALERT_OPEN,
});
export const errorAlertSetErrorMessage = (
  errorMessage: string,
): ErrorAlertSetErrorMessage => ({
  type: ErrorAlertAction.ERROR_ALERT_SET_ERROR_MESSAGE,
  payload: errorMessage,
});
