import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { SpecificationsTable } from './components';
import type { AgencyItemContent } from '../../../../types/Agencies';
import './AgenciesItemContent.scss';

interface AgenciesItemContentProps {
  agency: AgencyItemContent;
}

export const AgenciesItemContent: React.FC<AgenciesItemContentProps> = ({
  agency,
}: AgenciesItemContentProps) => (
  <CardContent className="agencies-item-card">
    <Typography
      className="agencies-item-card-content"
      gutterBottom
      variant="h5"
      component="div"
    >
      {agency.name}
    </Typography>
    <SpecificationsTable specifications={agency} />
  </CardContent>
);
