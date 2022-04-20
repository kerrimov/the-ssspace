import React from 'react';
import { CardActions, Button } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import './AstronautsItemActions.scss';

export const AstronautsItemActions = () => (
  <CardActions className="astronauts-item-actions">
    <Button
      className="astronauts-item-actions-button"
      variant="contained"
      size="medium"
    >
      <InfoOutlined
        className="astronauts-item-actions-button-icon"
        fontSize="small"
      />
      Info
    </Button>
  </CardActions>
);
