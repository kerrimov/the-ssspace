import React from 'react';
import { Typography } from '@mui/material';
import moment from 'moment';
import { captions } from '../../../../constants/captions';
import type { Launch } from '../../../../../../shared/api/types/Launch';
import './CardDetails.scss';

interface CardDetailsProps {
  launch: Launch;
}
export const CardDetails = ({ launch }: CardDetailsProps) => {
  const launchDate: Date = new Date(launch.net);
  const detailsValues: string[] = [
    launch.launch_service_provider.name,
    `${launch.pad.name}, ${launch.pad.location.name}`,
    launch.status.name,
    moment(launchDate).format('LLLL'),
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
