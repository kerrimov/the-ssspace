import React from 'react';
import { Typography } from '@mui/material';
import type { LaunchDetails } from '../../../../types/LaunchDetails';
import { captions } from '../../../../constants/captions';
import './CardDetails.scss';

interface CardDetailsProps {
  details: LaunchDetails;
}
export const CardDetails = ({ details }: CardDetailsProps) => {
  const detailsValues: string[] = [
    `${details.pad.name}, ${details.pad.location.name}`,
    details.status.name,
    details.net,
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
