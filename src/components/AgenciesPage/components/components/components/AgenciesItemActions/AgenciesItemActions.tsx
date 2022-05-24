import React from 'react';
import { CardActions } from '@mui/material';
import { InfoButton } from '../../../../../../shared/components/InfoButton';
import { RoutesPath } from '../../../../../Router/routesPath';
import './AgenciesItemActions.scss';

export const AgenciesItemActions = () => (
  <CardActions className="agencies-item-actions">
    <InfoButton path={RoutesPath.AGENCIES} />
  </CardActions>
);
