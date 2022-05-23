import React, { ReactEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import './SecondaryButton.scss';

export const enum FontSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  INHERIT = 'inherit',
}

export const enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface IconTypeProps {
  className?: string;
  fontSize?:
    | FontSizes.SMALL
    | FontSizes.MEDIUM
    | FontSizes.LARGE
    | FontSizes.INHERIT;
}

interface LocationState {
  pathname: string;
}

interface SecondaryButtonProps {
  caption: string;
  path?: string;
  clickHandler?: ReactEventHandler;
  className?: string;
  buttonSize: ButtonSizes.SMALL | ButtonSizes.MEDIUM | ButtonSizes.LARGE;
  Icon?: (props: IconTypeProps) => JSX.Element;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { caption, path, clickHandler, className, buttonSize, Icon } = props;
  const location: LocationState = useLocation();

  return (
    <Button className="secondary-button" size={buttonSize} variant="outlined">
      <Link
        className={`secondary-button-link ${className}`}
        to={path || location.pathname}
        onClick={clickHandler}
      >
        {Icon && (
          <Icon
            className="secondary-button-icon"
            fontSize={FontSizes.SMALL}
          ></Icon>
        )}
        {caption}
      </Link>
    </Button>
  );
};
