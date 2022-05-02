import React from 'react';
import { Card } from '@mui/material';
import { AgenciesItemImage } from './components/AgenciesItemImage';
import { AgenciesItemContent } from './components/AgenciesItemContent';
import { AgenciesItemActions } from './components/AgenciesItemActions';
import './AgenciesItem.scss';

export const AgenciesItem = () => (
  <Card className="agencies-item">
    <AgenciesItemImage />
    <AgenciesItemContent />
    <AgenciesItemActions />
  </Card>
);
