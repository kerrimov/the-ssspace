import React from 'react';
import { Card } from '@mui/material';
import { AstronautsItemImage } from './components/AstronautsItemImage';
import { AstronautsItemContent } from './components/AstronautsItemContent';
import { AstronautsItemActions } from './components/AstronautsItemActions';
import { Astronauts } from '../../../../types/Astronauts';
import './AstronautsItem.scss';

export const AstronautsItem = ({ name, agency, image }: Astronauts) => (
  <Card className="astronauts-item">
    <AstronautsItemImage image={image} />
    <AstronautsItemContent name={name} agency={agency} />
    <AstronautsItemActions />
  </Card>
);
