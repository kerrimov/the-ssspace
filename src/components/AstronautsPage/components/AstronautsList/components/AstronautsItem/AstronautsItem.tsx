import React from 'react';
import { Card } from '@mui/material';
import { AstronautsItemImage } from './components/AstronautsItemImage';
import { AstronautsItemContent } from './components/AstronautsItemContent';
import { AstronautsItemActions } from './components/AstronautsItemActions';
import './AstronautsItem.scss';

export const AstronautsItem = () => (
  <Card className="astronauts-item">
    <AstronautsItemImage />
    <AstronautsItemContent />
    <AstronautsItemActions />
  </Card>
);
