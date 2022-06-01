import React from 'react';
import { CardHeader } from '@mui/material';
import { CountdownTimer } from '@shared/components/CountdownTimer';
import { CardDetails } from './components/CardDetails';
import { LaunchStatusBox } from './components/LaunchStatus';
import type { Launch } from '@shared/api/types/Launch';
import './LaunchCardContent.scss';

interface LaunchCardContentProps {
  launch: Launch;
}

export const LaunchCardContent = ({ launch }: LaunchCardContentProps) => {
  const title: string = launch.name.slice(0, launch.name.indexOf('|'));
  const subheader: string = launch.name.slice(launch.name.indexOf('|') + 2);

  return (
    <div>
      <CardHeader
        title={title}
        subheader={subheader}
        titleTypographyProps={{ variant: 'h5' }}
        className="card-title"
      />
      <CardDetails launch={launch} />
      <CountdownTimer launchDate={launch.net} />
      <LaunchStatusBox status={launch.status} />
    </div>
  );
};
