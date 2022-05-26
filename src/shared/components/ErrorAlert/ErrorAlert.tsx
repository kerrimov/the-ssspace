import React from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { errorAlertToggle } from './actions/errorAlertActions';
import type { Dispatch } from 'redux';
import type {
  ErrorAlertState,
  ErrorAlertToggle,
} from './types/errorAlertTypes';
import type { StoreState } from '../../../store';
import './ErrorAlert.scss';

export const ErrorAlert = () => {
  const { message, isOpened } = useSelector<StoreState, ErrorAlertState>(
    state => state.errorAlert,
  );
  const dispatch = useDispatch<Dispatch<ErrorAlertToggle>>();

  const handleToggle = () => dispatch(errorAlertToggle(''));

  return (
    <>
      {isOpened && (
        <Snackbar
          autoHideDuration={5000}
          open={isOpened}
          className="error-alert"
          onClose={handleToggle}
        >
          <Alert severity="error">
            <AlertTitle>
              <strong>Error</strong>
            </AlertTitle>
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
