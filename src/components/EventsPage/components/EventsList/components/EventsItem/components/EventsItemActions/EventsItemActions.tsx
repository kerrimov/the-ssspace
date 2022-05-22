import React from 'react';
import { CardActions, Button } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import './EventsItemActions.scss';

interface EventsItemActionsProps {
  video: string;
}

export const EventsItemActions: React.FC<EventsItemActionsProps> = ({
  video,
}: EventsItemActionsProps) => (
  <CardActions className="events-item-actions">
    <Button
      className="events-item-actions-button"
      variant="contained"
      size="medium"
      href={video}
      target="_blank"
    >
      <PlayCircle
        className="events-item-actions-button-icon"
        fontSize="small"
      />
      watch
    </Button>
  </CardActions>
);
