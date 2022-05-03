import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { agenciesData } from '../../../../mocks/agenciesData';
// import {
//   specifications,
//   specificationValueMapping,
// } from '../../../../constants/specifications';
import { SpecificationsTable } from './components';
// import { AgenciesSpecification } from '../../../../types/Agencies';
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
