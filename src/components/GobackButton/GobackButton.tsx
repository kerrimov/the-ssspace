import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './GobackButton.scss';

interface GobackButtonProps {
  to: string;
}
export const GobackButton = ({ to }: GobackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      className="goback-button"
      size="large"
      variant="outlined"
      onClick={() => {
        navigate(to);
      }}
    >
      Go back
    </Button>
  );
};
