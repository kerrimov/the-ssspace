import React from 'react';
import {
  specificationHeadings,
  specificationValueMapping,
} from '../../../../../constants/specifications';
import type { SpecificationTableProps } from '../../../../../types/Agencies';

export const SpecificationsTable: React.FC<SpecificationTableProps> = ({
  specifications,
}) => (
  <table>
    <tbody>
      {specificationHeadings.map((specification: string, index: number) => {
        const specificationKey = specificationValueMapping[specification];
        const specificationValue = specifications[specificationKey];

        return (
          specificationValue && (
            <tr key={index}>
              <th>{specification}</th>
              <td>{specificationValue}</td>
            </tr>
          )
        );
      })}
    </tbody>
  </table>
);
