import React from 'react';
import { Typography } from '@mui/material';
import { captions } from '../../../../constants/captions';
import type { Launch } from '../../../../../../shared/api/types/Launch';
import './CardDetails.scss';

interface CardDetailsProps {
  details: Launch;
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
