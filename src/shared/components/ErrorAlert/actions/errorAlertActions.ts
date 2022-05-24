import {
  ErrorAlertAction,
  ErrorAlertToggle,
  ErrorAlertSetErrorMessage,
} from '../types/errorAlertTypes';

export const errorAlertToggle = (): ErrorAlertToggle => ({
  type: ErrorAlertAction.ERROR_ALERT_TOGGLE,
});

export const errorAlertSetErrorMessage = (
  errorMessage: string,
): ErrorAlertSetErrorMessage => ({
  type: ErrorAlertAction.ERROR_ALERT_SET_ERROR_MESSAGE,
  payload: errorMessage,
});
