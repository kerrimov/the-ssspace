export interface ErrorAlertState {
  message: string;
  isOpened: boolean;
}

export const enum ErrorAlertAction {
  ERROR_ALERT_TOGGLE = 'ERROR_ALERT_TOGGLE',
}

export interface ErrorAlertToggle {
  type: ErrorAlertAction.ERROR_ALERT_TOGGLE;
  payload: string;
}
