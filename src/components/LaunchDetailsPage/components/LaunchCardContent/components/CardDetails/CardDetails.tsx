import React from 'react';
import { Typography } from '@mui/material';
import { captions } from '../../../../constants/captions';
import type { Launch } from '../../../../../../shared/api/types/Launch';
import './CardDetails.scss';

interface CardDetailsProps {
  launch: Launch;
}
export const CardDetails = ({ launch }: CardDetailsProps) => {
  const detailsValues: string[] = [
    `${launch.pad.name}, ${launch.pad.location.name}`,
    launch.status.name,
    launch.net,
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
