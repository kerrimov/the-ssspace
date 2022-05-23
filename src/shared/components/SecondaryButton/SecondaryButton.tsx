import React, { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { RoutesPath } from '../../../components/Router/routesPath';
import './SecondaryButton.scss';

interface IconTypeProps {
  className?: string;
  fontSize?: 'small' | 'medium' | 'large' | 'inherit';
}

interface SecondaryButtonProps {
  caption: string;
  path?: string;
  clickHandler?: ReactEventHandler;
  className?: string;
  buttonSize: 'small' | 'large' | 'medium';
  icon?: (props: IconTypeProps) => JSX.Element;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { caption, path, clickHandler, className, buttonSize, icon } = props;
  return (
    <Button className="secondary-button" size={buttonSize} variant="outlined">
      <Link
        className={`secondary-button-link ${className}`}
        to={path || RoutesPath.HOME}
        onClick={clickHandler}
      >
        {icon &&
          React.createElement(icon, {
            className: 'secondary-button-icon',
            fontSize: 'small',
          })}
        {caption}
      </Link>
    </Button>
  );
};
