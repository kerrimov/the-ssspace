import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { RoutesPath } from '../../../Router/routesPath';
import { getFilteredLaunches } from '../../actions/getFilteredLaunches';
import { FilterCaptions, LaunchFilters } from '../../constants/filerConstants';
import type { FilterAction } from '../../types/LaunchActions';
import './FilterLink.scss';

interface FilterLinkProps {
  filterValue: LaunchFilters;
}

export const FilterLink = ({ filterValue }: FilterLinkProps) => {
  const dispatch: Dispatch<FilterAction> = useDispatch();
  const handleClick = () => getFilteredLaunches(filterValue)(dispatch);

  return (
    <li className="launches-filter-item">
      <Link
        className={`launches-filter-link ${filterValue.toLowerCase()}`}
        to={RoutesPath[filterValue]}
        onClick={handleClick}
      >
        <span className="launches-filter-caption">
          {FilterCaptions[filterValue]}
        </span>
      </Link>
    </li>
  );
};
