export interface ErrorAlertState {
  message: string;
  isOpened: boolean;
}

export const enum ErrorAlertAction {
  ERROR_ALERT_OPEN = 'ERROR_ALERT_OPEN',
  ERROR_ALERT_CLOSE = 'ERROR_ALERT_CLOSE',
  ERROR_ALERT_SET_ERROR_MESSAGE = 'ERROR_ALERT_SET_ERROR_MESSAGE',
}

export interface ErrorAlertClose {
  type: ErrorAlertAction.ERROR_ALERT_CLOSE;
}

export interface ErrorAlertOpen {
  type: ErrorAlertAction.ERROR_ALERT_OPEN;
}

export interface ErrorAlertSetErrorMessage {
  type: ErrorAlertAction.ERROR_ALERT_SET_ERROR_MESSAGE;
  payload: string;
}

export type ErrorAlertAllActions =
  | ErrorAlertClose
  | ErrorAlertOpen
  | ErrorAlertSetErrorMessage;
