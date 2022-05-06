import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { RoutesPath } from '../../../Router/routesPath';
import { RootState } from '../../store';
import { getFilteredLaunches } from '../../actions/getFilteredLaunches';
import { FilterCaptions, LaunchFilters } from '../../constants/filerConstants';
import './FilterLink.scss';

interface FilterLinkProps {
  filterValue: LaunchFilters;
}

export const FilterLink = ({ filterValue }: FilterLinkProps) => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const handleClick = () => dispatch(getFilteredLaunches(filterValue));

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
