import React from 'react';
import { CardActions, Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './AstronautsItemActions.scss';

export const AstronautsItemActions = () => {
  return (
    <CardActions className="astronauts-item-actions">
      <Button
        className="astronauts-item-actions-button"
        variant="contained"
        size="medium"
      >
        <InfoOutlinedIcon
          fontSize="small"
          className="astronauts-item-actions-button-icon"
        />
        Info
      </Button>
    </CardActions>
  );
};
