import React from 'react';
import { Card } from '@mui/material';
import { AboutItemImage } from './components/AboutItemImage';
import { AboutItemContent } from './components/AboutItemContent';
import { AboutItemActions } from './components/AboutItemActions';
import { About } from '../../../../types/About';
import './AboutItem.scss';

export const AboutItem = ({
  name,
  position,
  contacts,
  description,
  profile_image,
}: About) => (
  <Card className="about-item">
    <AboutItemImage image={profile_image} />
    <AboutItemContent
      name={name}
      position={position}
      description={description}
    />
    <AboutItemActions contacts={contacts} />
  </Card>
);
