import React from 'react';
import { LaunchFilters } from '../LaunchFilter/constants/filerConstants';
import './LaunchList.scss';

interface LaunchListProps {
  filterValue: LaunchFilters;
}

export const LaunchList = ({ filterValue }: LaunchListProps) => {
  return (
    <div>
      <h1 className="launches-header">Launches: {filterValue} </h1>
    </div>
  );
};
