import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './GobackButton.scss';

interface GobackButtonProps {
  path: string;
}
export const GobackButton = ({ path }: GobackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      className="goback-button"
      size="large"
      variant="outlined"
      onClick={() => {
        navigate(path);
      }}
    >
      Go back
    </Button>
  );
};
