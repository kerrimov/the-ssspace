import { ErrorAlertAction, ErrorAlertToggle } from '../types/errorAlertTypes';

export const errorAlertToggle = (errorMessage: string): ErrorAlertToggle => ({
  type: ErrorAlertAction.ERROR_ALERT_TOGGLE,
  payload: errorMessage,
});
