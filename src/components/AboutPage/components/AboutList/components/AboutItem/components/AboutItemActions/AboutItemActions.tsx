import React from 'react';
import { CardActions, Button } from '@mui/material';
import type { AboutContacts } from '../../../../../../types/About';
import './AboutItemActions.scss';

interface AboutItemActionsProps {
  contacts: AboutContacts[];
}

export const AboutItemActions: React.FC<AboutItemActionsProps> = ({
  contacts,
}: AboutItemActionsProps) => (
  <CardActions className="about-item-actions">
    {contacts.map(({ icon: Icon, url }, index: number) => (
      <Button
        className="about-item-actions-button"
        key={index}
        href={url}
        target="_blank"
      >
        <Icon fontSize="large" />
      </Button>
    ))}
  </CardActions>
);
