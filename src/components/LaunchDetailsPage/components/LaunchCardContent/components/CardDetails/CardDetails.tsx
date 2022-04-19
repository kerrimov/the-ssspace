import React from 'react';
import { Typography } from '@mui/material';
import { launchDetails } from '../../../../mocks/launchDetails';
import { captions } from '../../../../constants/captions';
import './CardDetails.scss';

export const CardDetails = () => {
  const detailsValues: string[] = [
    `${launchDetails.pad.name}, ${launchDetails.pad.location.name}`,
    launchDetails.status.name,
    launchDetails.net,
  ];

  const renderTypographyList = (texts: string[]) =>
    texts.map((text: string, index: number) => (
      <Typography variant="body1" key={index}>
        {text}
      </Typography>
    ));

  return (
    <div className="card-details">
      {renderTypographyList(captions)}
      {renderTypographyList(detailsValues)}
    </div>
  );
};
