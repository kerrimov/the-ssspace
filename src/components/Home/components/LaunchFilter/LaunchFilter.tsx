import React, { RefObject } from 'react';
import { FilterLink } from './components/FilterLink/FilterLink';
import { LaunchFilters } from '../../constants/launches';
import './LaunchFilter.scss';

interface LaunchFilterProps {
  launchListRef: RefObject<HTMLElement>;
}

export const LaunchFilter = ({ launchListRef }: LaunchFilterProps) => (
  <ul className="launch-filter-list">
    {Object.values(LaunchFilters).map((filterValue, index) => (
      <FilterLink
        key={index}
        filterValue={filterValue}
        launchListRef={launchListRef}
      />
    ))}
  </ul>
);
