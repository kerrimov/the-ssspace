import React from 'react';
import { CardHeader } from '@mui/material';
import { CardDetails } from './components/CardDetails';
import { CountdownTimer } from '../../../../shared/components/CountdownTimer';
import { launchDetails } from '../../mocks/launchDetails';
import './LaunchCardContent.scss';

export const LaunchCardContent = () => (
  <div>
    <CardHeader
      title={launchDetails.name}
      subheader={launchDetails.launch_service_provider.name}
      titleTypographyProps={{ variant: 'h5' }}
      className="card-title"
    />
    <CardDetails />
    <CountdownTimer launchDate={launchDetails.net} />
  </div>
);
