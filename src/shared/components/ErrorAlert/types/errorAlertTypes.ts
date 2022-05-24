export interface ErrorAlertState {
  message: string;
  isOpened: boolean;
}

export const enum ErrorAlertAction {
  ERROR_ALERT_TOGGLE = 'ERROR_ALERT_TOGGLE',
  ERROR_ALERT_SET_ERROR_MESSAGE = 'ERROR_ALERT_SET_ERROR_MESSAGE',
}

export interface ErrorAlertToggle {
  type: ErrorAlertAction.ERROR_ALERT_TOGGLE;
}

export interface ErrorAlertSetErrorMessage {
  type: ErrorAlertAction.ERROR_ALERT_SET_ERROR_MESSAGE;
  payload: string;
}

export type ErrorAlertAllActions = ErrorAlertToggle | ErrorAlertSetErrorMessage;
