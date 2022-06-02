import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../../../Router/routesPath';
import { FilterCaptions } from '../../constants/launches';
import { LaunchFilters } from '../../../../constants/launches';
import './FilterLink.scss';

interface FilterLinkProps {
  filterValue: LaunchFilters;
}

export const FilterLink = ({ filterValue }: FilterLinkProps) => (
  <li className="launches-filter-item">
    <Link
      className={`launches-filter-link ${filterValue.toLowerCase()}`}
      to={RoutesPath[filterValue]}
    >
      <span className="launches-filter-caption">
        {FilterCaptions[filterValue]}
      </span>
    </Link>
  </li>
);
