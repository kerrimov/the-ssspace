import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { agenciesData } from '../../../../mocks/agenciesData';
import { SpecificationsTable } from './components';
import './AgenciesItemContent.scss';
import type { AgenciesItemProps } from '../../../../types/Agencies';

export const AgenciesItemContent: React.FC<AgenciesItemProps> = ({
  agency,
}) => {
  return (
    <CardContent className="agencies-item-card">
      <Typography
        className="agencies-item-card-content"
        gutterBottom
        variant="h5"
        component="div"
      >
        {agency.name}
      </Typography>

      <div className="card-details">
        <SpecificationsTable specifications={agency} />
      </div>
    </CardContent>
  );
};
