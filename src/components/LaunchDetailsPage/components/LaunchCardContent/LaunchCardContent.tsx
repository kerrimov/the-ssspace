import React from 'react';
import { CardHeader } from '@mui/material';
import { CardDetails } from './components/CardDetails';
import { LaunchStatusBox } from './components/LaunchStatus';
import { CountdownTimer } from '../../../../shared/components/CountdownTimer';
import type { Launch } from '../../../../shared/api/types/Launch';
import './LaunchCardContent.scss';

interface LaunchCardContentProps {
  details: Launch;
}

export const LaunchCardContent = ({ details }: LaunchCardContentProps) => {
  const title: string = details.name.slice(0, details.name.indexOf('|'));
  const subheader: string = details.name.slice(details.name.indexOf('|') + 2);
  return (
    <div className="launch-card-content">
      <CardHeader
        title={title}
        subheader={subheader}
        titleTypographyProps={{ variant: 'h5' }}
        className="card-title"
      />
      <CardDetails details={details} />
      <CountdownTimer launchDate={details.net} />
      <LaunchStatusBox status={details.status} />
    </div>
  );
};
