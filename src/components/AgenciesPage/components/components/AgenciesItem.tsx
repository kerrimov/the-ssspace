import React from 'react';
import { Card } from '@mui/material';
import { AgenciesItemImage } from './components/AgenciesItemImage';
import { AgenciesItemContent } from './components/AgenciesItemContent';
import { AgenciesItemActions } from './components/AgenciesItemActions';
import type { AgenciesItemProps } from '../../types/Agencies';
import './AgenciesItem.scss';

export const AgenciesItem: React.FC<AgenciesItemProps> = ({ agency }) => (
  <Card className="agencies-item">
    <AgenciesItemImage agency={agency} />
    <AgenciesItemContent agency={agency} />
    <AgenciesItemActions />
  </Card>
);
