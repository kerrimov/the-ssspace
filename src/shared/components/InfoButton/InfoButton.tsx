import React, { ReactEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

interface LocationState {
  pathname: string;
}

export const InfoButton = (props: InfoButtonProps) => {
  const { caption, path, clickHandler, className } = props;
  const location: LocationState = useLocation();

  return (
    <Button
      className={`list-item-actions-button ${className}`}
      variant="contained"
      size="medium"
      onClick={clickHandler}
    >
      <Link className="list-item-actions-link" to={path || location.pathname}>
        <InfoOutlined
          className="list-item-actions-button-icon"
          fontSize="small"
        />
        {caption}
      </Link>
    </Button>
  );
};

InfoButton.defaultProps = {
  caption: 'info',
};
