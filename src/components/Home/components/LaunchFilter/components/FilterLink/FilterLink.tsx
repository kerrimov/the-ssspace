import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { RoutesPath } from '../../../../../Router/routesPath';
import { FilterCaptions } from '../../constants/launches';
import { LaunchFilters } from '../../../../constants/launches';
import './FilterLink.scss';

interface FilterLinkProps {
  filterValue: LaunchFilters;
  launchListRef: RefObject<HTMLElement>;
}

export const FilterLink = ({ filterValue, launchListRef }: FilterLinkProps) => {
  const scrollOptions: ScrollIntoViewOptions = {
    block: 'start',
    behavior: 'smooth',
  };

  const handleClick = () => {
    launchListRef.current?.scrollIntoView(scrollOptions);
  };

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
