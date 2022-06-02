import React from 'react';
import { FilterLink } from './components/FilterLink/FilterLink';
import { LaunchFilters } from '../../constants/launches';
import './LaunchFilter.scss';

export const LaunchFilter = () => (
  <ul className="launch-filter-list">
    {Object.values(LaunchFilters).map((filterValue, index) => (
      <FilterLink key={index} filterValue={filterValue} />
    ))}
  </ul>
);
