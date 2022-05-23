import React from 'react';
import { Card } from '@mui/material';
import { LaunchItemImage } from './components/LaunchItemImage';
import { LaunchItemContent } from './components/LaunchItemContent';
import { LaunchItemActions } from './components/LaunchItemActions';
import type { Launch } from '../../../../../../shared/api/types/Launch';
import './LaunchListItem.scss';

interface LaunchListItemProps {
  launch: Launch;
}

export const LaunchListItem = ({ launch }: LaunchListItemProps) => {
  return (
    <Card className="launch-item">
      <LaunchItemImage launch={launch} />
      <LaunchItemContent launch={launch} />
      <LaunchItemActions id={launch.id} />
    </Card>
  );
};
