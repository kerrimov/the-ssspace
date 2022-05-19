import React from 'react';
import { Alert, AlertTitle, IconButton, Snackbar } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { errorAlertClose } from './actions/errorAlertActions';
import type { Dispatch } from 'redux';
import type {
  ErrorAlertAllActions,
  ErrorAlertState,
} from './types/errorAlertTypes';
import type { StoreState } from '../../../store';
import './ErrorAlert.scss';

export const ErrorAlert = () => {
  //should I use selector in that case ?
  const { message, isOpened } = useSelector<StoreState, ErrorAlertState>(
    state => state.errorAlert,
  );
  const dispatch = useDispatch<Dispatch<ErrorAlertAllActions>>();

  return (
    <Snackbar
      autoHideDuration={3000}
      open={isOpened}
      className="error-alert"
      onClose={() => dispatch(errorAlertClose())}
    >
      <Alert
        severity="error"
        action={
          <IconButton onClick={() => dispatch(errorAlertClose())}>
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
