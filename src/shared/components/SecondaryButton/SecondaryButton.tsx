import React, { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ButtonSizes, FontSizes } from './types/secondaryButtonTypes';
import './SecondaryButton.scss';

interface IconTypeProps {
  className?: string;
  fontSize?:
    | FontSizes.SMALL
    | FontSizes.MEDIUM
    | FontSizes.LARGE
    | FontSizes.INHERIT;
}

interface SecondaryButtonProps {
  caption: string;
  path: string;
  clickHandler?: ReactEventHandler;
  className?: string;
  buttonSize: ButtonSizes.SMALL | ButtonSizes.MEDIUM | ButtonSizes.LARGE;
  Icon?: (props: IconTypeProps) => JSX.Element;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { caption, path, clickHandler, className, buttonSize, Icon } = props;

  return (
    <Link
      className={`secondary-button-link ${className}`}
      to={path}
      onClick={clickHandler}
    >
      <Button className="secondary-button" size={buttonSize} variant="outlined">
        {Icon && (
          <Icon className="secondary-button-icon" fontSize={FontSizes.SMALL} />
        )}
        {caption}
      </Button>
    </Link>
  );
};
