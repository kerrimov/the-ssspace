import React from 'react';
import { CardHeader } from '@mui/material';
import { CardDetails } from './components/CardDetails';
import { CountdownTimer } from '../../../../shared/components/CountdownTimer';
import type { Launch } from '../../../../shared/api/types/Launch';
import './LaunchCardContent.scss';

interface LaunchCardContentProps {
  details: Launch;
}

export const LaunchCardContent = ({ details }: LaunchCardContentProps) => (
  <div>
    <CardHeader
      title={details.name}
      subheader={details.launch_service_provider.name}
      titleTypographyProps={{ variant: 'h5' }}
      className="card-title"
    />
    <CardDetails details={details} />
    <CountdownTimer launchDate={details.net} />
  </div>
);
