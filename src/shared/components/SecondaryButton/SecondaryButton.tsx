import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './SecondaryButton.scss';

interface SecondaryButtonProps {
  path: string;
  caption: string;
}

export const SecondaryButton = ({ path, caption }: SecondaryButtonProps) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(path);
  };

  return (
    <Button
      className="secondary-button"
      size="large"
      variant="outlined"
      onClick={navigateTo}
    >
      {caption}
    </Button>
  );
};
