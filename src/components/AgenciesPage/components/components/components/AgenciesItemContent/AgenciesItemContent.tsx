import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { agenciesData } from '../../../../mocks/agenciesData';
import { SpecificationsTable } from './components';
import './AgenciesItemContent.scss';

export const AgenciesItemContent = () => {
  return (
    <CardContent>
      <Typography
        className="agencies-item-content"
        gutterBottom
        variant="h5"
        component="div"
      >
        {agenciesData.name}
      </Typography>

      <div className="card-details">
        <SpecificationsTable specifications={agenciesData} />
      </div>
    </CardContent>
  );
};
