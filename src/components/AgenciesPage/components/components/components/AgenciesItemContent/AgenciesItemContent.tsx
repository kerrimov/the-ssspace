import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { agenciesData } from '../../../../mocks/agenciesData';
import {
  specifications,
  specificationValueMapping,
} from '../../../../constants/specifications';
import { AgenciesSpecification } from '../../../../types/Agencies';
import './AgenciesItemContent.scss';

export const AgenciesItemContent = () => {
  const renderSpecificationTable = (specification: AgenciesSpecification) => (
    <table>
      <tbody>
        {specifications.map((text: string, index: number) => {
          const specificationKey = specificationValueMapping[text];
          const rowValue = specification[specificationKey];

          return (
            rowValue && (
              <tr key={index}>
                <th>{text}</th>
                <td>{rowValue}</td>
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );

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
        {renderSpecificationTable(agenciesData)}
      </div>
    </CardContent>
  );
};
