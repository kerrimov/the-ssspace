import React from 'react';
import {
  specificationHeadings,
  specificationValueMapping,
} from '../../../../../constants/specifications';
import type { AgenciesSpecification } from '../../../../../types/Agencies';
import './SpecificationsTable.scss';

interface SpecificationsTableProps {
  specifications: AgenciesSpecification;
}

export const SpecificationsTable: React.FC<SpecificationsTableProps> = ({
  specifications,
}: SpecificationsTableProps) => (
  <table className="table-specification">
    <tbody>
      {specificationHeadings.map(
        (specificationHeading: string, index: number) => {
          const specificationKey =
            specificationValueMapping[specificationHeading];
          const specificationValue = specifications[specificationKey];

          return (
            specificationValue && (
              <tr key={index}>
                <th className="table-specification-headings">
                  {specificationHeading}
                </th>
                <td className="table-specification-value">
                  {specificationValue}
                </td>
              </tr>
            )
          );
        },
      )}
    </tbody>
  </table>
);
