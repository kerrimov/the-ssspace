import React, { useCallback } from 'react';
import { Alert, AlertTitle, IconButton, Snackbar } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { errorAlertToggle } from './actions/errorAlertActions';
import type { Dispatch } from 'redux';
import type {
  ErrorAlertAllActions,
  ErrorAlertState,
} from './types/errorAlertTypes';
import type { StoreState } from '../../../store';
import './ErrorAlert.scss';

export const ErrorAlert = () => {
  const { message, isOpened } = useSelector<StoreState, ErrorAlertState>(
    state => state.errorAlert,
  );
  const dispatch = useDispatch<Dispatch<ErrorAlertAllActions>>();

  const handleToggle = useCallback(() => {
    if (isOpened) {
      dispatch(errorAlertToggle());
    }
    return;
  }, [isOpened]);

  return (
    <Snackbar
      autoHideDuration={3000}
      open={isOpened}
      className="error-alert"
      onClose={handleToggle}
    >
      <Alert
        severity="error"
        action={
          <IconButton onClick={handleToggle}>
            <Close />
          </IconButton>
        }
      >
        <AlertTitle>
          <strong>Error</strong>
        </AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
};
