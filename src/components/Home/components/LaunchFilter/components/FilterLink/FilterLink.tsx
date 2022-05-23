import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RoutesPath } from '../../../../../Router/routesPath';
import { getLaunches } from '../../../../actions/getLaunches';
import { FilterCaptions } from '../../constants/launches';
import { Launches, LaunchFilters } from '../../../../constants/launches';
import type { Dispatch } from '@reduxjs/toolkit';
import type { LaunchAction } from '../../../../types/LaunchActions';
import './FilterLink.scss';

interface FilterLinkProps {
  filterValue: LaunchFilters;
}

export const FilterLink = ({ filterValue }: FilterLinkProps) => {
  const dispatch: Dispatch<LaunchAction> = useDispatch();
  const handleClick = () => getLaunches(Launches[filterValue])(dispatch);

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
