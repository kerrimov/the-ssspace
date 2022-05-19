import React from 'react';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import type { ErrorAlertState } from './types/errorAlertTypes';
import type { StoreState } from '../../../store';
import './ErrorAlert.scss';

export const ErrorAlert = () => {
  const { message, isOpened } = useSelector<StoreState, ErrorAlertState>(
    state => state.errorAlert,
  );

  return (
    <>
      {!isOpened && (
        <Alert
          className="error-alert"
          severity="error"
          action={
            <IconButton>
              <Close />
            </IconButton>
          }
        >
          <AlertTitle>
            <strong>Error</strong>
          </AlertTitle>
          {message}
        </Alert>
      )}
    </>
  );
};
