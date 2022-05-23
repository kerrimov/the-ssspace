import React from 'react';
import { CardContent, CardHeader, Typography } from '@mui/material';
import { Launch } from '../../../../../../../../shared/api/types/Launch';
import './LaunchItemContent.scss';

interface LaunchItemContentProps {
  launch: Launch;
}

export const LaunchItemContent = ({ launch }: LaunchItemContentProps) => {
  const title: string = launch.name.slice(0, launch.name.indexOf('|'));
  const subheader: string = launch.name.slice(launch.name.indexOf('|') + 2);

  return (
    <div className="launch-item-card">
      <CardHeader
        className="launch-item-card-header"
        title={title}
        subheader={subheader}
        titleTypographyProps={{ variant: 'h5' }}
      >
        {launch.name}
      </CardHeader>
      <CardContent className="launch-item-card-content">
        <Typography variant="body1" className="launch-item-card-agency">
          <span className="launch-item-card-prop">Agency: </span>
          {launch.launch_service_provider.name}
        </Typography>
        <Typography variant="body1" className="launch-item-card-pad">
          <span className="launch-item-card-prop">Location: </span>
          {`${launch.pad.name}, ${launch.pad.location.name}`}
        </Typography>
      </CardContent>
    </div>
  );
};
