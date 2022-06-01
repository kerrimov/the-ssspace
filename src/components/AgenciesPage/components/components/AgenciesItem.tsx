import React from 'react';
import { Card } from '@mui/material';
import { AgenciesItemImage } from './components/AgenciesItemImage';
import { AgenciesItemContent } from './components/AgenciesItemContent';
import { AgenciesItemActions } from './components/AgenciesItemActions';
import type { Agency } from '../../types/Agencies';
import './AgenciesItem.scss';

interface AgenciesItemProps {
  agency: Agency;
}

export const AgenciesItem: React.FC<AgenciesItemProps> = ({
  agency,
}: AgenciesItemProps) => (
  <Card className="agencies-item">
    <AgenciesItemImage
      image={agency.logo_url || process.env.PUBLIC_URL + '/logo.png'}
    />
    <AgenciesItemContent agency={agency} />
    <AgenciesItemActions />
  </Card>
);
