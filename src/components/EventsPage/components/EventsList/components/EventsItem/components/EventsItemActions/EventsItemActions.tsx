import React from 'react';
import { CardActions, Button, Typography } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import './EventsItemActions.scss';

interface EventsItemActionsProps {
  video: string;
}

export const EventsItemActions: React.FC<EventsItemActionsProps> = ({
  video,
}: EventsItemActionsProps) => (
  <CardActions className="events-item-actions">
    {!video ? (
      <Typography className="events-item-actions-info" variant="body1">
        No Video Available
      </Typography>
    ) : (
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
        Watch
      </Button>
    )}
  </CardActions>
);
