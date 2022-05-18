import React from 'react';
import { Card } from '@mui/material';
import { AboutItemImage } from './components/AboutItemImage';
import { AboutItemContent } from './components/AboutItemContent';
import { AboutItemActions } from './components/AboutItemActions';
import type { About } from '../../../../types/About';
import './AboutItem.scss';

interface AboutItemProps {
  aboutItem: About;
}

export const AboutItem: React.FC<AboutItemProps> = ({
  aboutItem,
}: AboutItemProps) => (
  <Card className="about-item">
    <AboutItemImage image={aboutItem.profile_image} />
    <AboutItemContent
      name={aboutItem.name}
      position={aboutItem.position}
      description={aboutItem.description}
    />
    <AboutItemActions contacts={aboutItem.contacts} />
  </Card>
);
