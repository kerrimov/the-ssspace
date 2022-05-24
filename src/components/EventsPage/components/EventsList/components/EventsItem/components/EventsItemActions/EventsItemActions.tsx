import React from 'react';
import { CardActions, Button } from '@mui/material';
import { PlayCircle, Share } from '@mui/icons-material';
import { ButtonSizes } from '../../../../../../../../shared/components/SecondaryButton/types/secondaryButtonTypes';
import { SecondaryButton } from '../../../../../../../../shared/components/SecondaryButton';
import './EventsItemActions.scss';

interface EventsItemActionsProps {
  id: number;
  video: string;
}

export const EventsItemActions: React.FC<EventsItemActionsProps> = ({
  id,
  video,
}: EventsItemActionsProps) => {
  const onClickShare = () =>
    navigator.clipboard.writeText(`${window.location.href}/${id}`);

  return (
    <CardActions className="events-item-actions">
      {!video ? null : (
        <Button
          className="events-item-actions-videobutton"
          variant="contained"
          size="medium"
          href={video}
          target="_blank"
        >
          <PlayCircle
            className="events-item-actions-videobutton-icon"
            fontSize="small"
          />
          Watch
        </Button>
      )}
      <SecondaryButton
        caption="share"
        path={''}
        buttonSize={ButtonSizes.MEDIUM}
        clickHandler={onClickShare}
        className="events-item-actions-sharebutton"
        Icon={props => <Share {...props} />}
      />
    </CardActions>
  );
};
