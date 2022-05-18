import React from 'react';
import { CardActions } from '@mui/material';
import { SocialsList } from '../../../../../../../Header/components/SocialsList';
import './AboutItemActions.scss';

interface AboutItemActionsProps {
  contacts: string;
}

export const AboutItemActions = ({ contacts }: AboutItemActionsProps) => (
  <CardActions className="astronauts-item-actions">
    <SocialsList />
  </CardActions>
);
