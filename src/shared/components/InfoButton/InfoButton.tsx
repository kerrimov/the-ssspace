import React, { ReactEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InfoOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { RoutesPath } from '@components/Router/routesPath';
import './InfoButton.scss';

interface InfoButtonProps {
  caption?: string;
  path: RoutesPath | string;
  clickHandler?: ReactEventHandler;
  className?: string;
}

export const InfoButton = ({
  caption = 'info',
  path,
  clickHandler,
  className,
}: InfoButtonProps) => {
  const location = useLocation();

  return (
    <Button
      className={`list-item-actions-button ${className}`}
      variant="contained"
      size="medium"
      onClick={clickHandler}
    >
      <Link
        className="list-item-actions-link"
        to={path}
        state={{ from: location.pathname }}
      >
        <InfoOutlined
          className="list-item-actions-button-icon"
          fontSize="small"
        />
        {caption}
      </Link>
    </Button>
  );
};
