import React, { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { InfoOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { RoutesPath } from '../../../components/Router/routesPath';
import './InfoButton.scss';

interface InfoButtonProps {
  caption?: string;
  path?: RoutesPath;
  clickHandler?: ReactEventHandler;
  className?: string;
}

export const InfoButton = (props: InfoButtonProps) => {
  const { caption, path, clickHandler, className } = props;
  return (
    <Button
      className={`list-item-actions-button ${className}`}
      variant="contained"
      size="medium"
      onClick={clickHandler}
    >
      <Link
        className="list-item-actions-link"
        to={(path as RoutesPath) || RoutesPath.HOME}
      >
        <InfoOutlined
          className="list-item-actions-button-icon"
          fontSize="small"
        />
        {caption || 'info'}
      </Link>
    </Button>
  );
};
