import React from 'react';
import { InfoOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import './InfoButton.scss';

export const InfoButton = () => (
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
);
