import React from 'react';
import { LaunchListItem } from './components/LaunchListItem';
import { Launches } from '../../constants/launches';
import {
  selectLaunches,
  selectLaunchLoadingStatus,
} from '../../selectors/launchSelectors';
import { Loader } from '../../../../shared/components/Loader';
import type { Launch } from '../../../../shared/api/types/Launch';
import './LaunchList.scss';

interface LaunchListProps {
  filterValue: Launches;
}

export const LaunchList = ({ filterValue }: LaunchListProps) => {
  const launches: Launch[] = selectLaunches(filterValue);
  const isLoading: boolean = selectLaunchLoadingStatus();

  if (isLoading) return <Loader />;

  return launches ? (
    <div>
      <h1 className="launch-header">{filterValue} launches </h1>
      <ul className="launch-list">
        {launches.map((launch: Launch) => (
          <LaunchListItem key={launch.id} launch={launch} />
        ))}
      </ul>
    </div>
  ) : (
    <h2 className="launch-list-empty">No launches for now. Try later.</h2>
  );
};
