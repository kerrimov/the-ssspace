import React from 'react';
import { CardActions, Button } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import './AgenciesItemActions.scss';

export const AgenciesItemActions = () => (
  <CardActions className="agencies-item-actions">
    <Button
      className="agencies-item-actions-button"
      variant="contained"
      size="medium"
    >
      <InfoOutlined
        className="agencies-item-actions-button-icon"
        fontSize="small"
      />
      Info
    </Button>
  </CardActions>
);
