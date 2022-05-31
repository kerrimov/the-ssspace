import React, { RefObject, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router';
import { LaunchListItem } from './components/LaunchListItem';
import { Launches } from '../../constants/launches';
import { selectLaunches } from '../../selectors/launchSelectors';
import { Loader } from '../../../../shared/components/Loader';
import { useInfiniteScroll } from '../../../../shared/api/services/useInfiniteScroll';
import { fetchDefaults } from '../../../../shared/api/constants/fetchDefaults';
import { getLaunches } from '../../actions/getLaunches';
import type { LaunchState } from '../../types/LaunchState';
import type { InfiniteScrollValues } from '../../../../shared/api/services/useInfiniteScroll';
import type { LaunchAction } from '../../types/LaunchActions';
import type { Launch } from '../../../../shared/api/types/Launch';
import type { Dispatch } from 'redux';
import type { ErrorAlertToggle } from '../../../../shared/components/ErrorAlert/types/errorAlertTypes';
import './LaunchList.scss';

interface LaunchListProps {
  filterValue: Launches;
}

export const LaunchList = ({ filterValue }: LaunchListProps) => {
  const dispatch: Dispatch<LaunchAction | ErrorAlertToggle> = useDispatch();
  const launchListRef: RefObject<HTMLDivElement> = useOutletContext();

  const { loadMoreRef, nextPage, setNextPage }: InfiniteScrollValues =
    useInfiniteScroll();

  const { launches, launchAmount, isLoading, isScrollLoading }: LaunchState =
    selectLaunches();

  const launchListIsEmpty: boolean = launches.length === 0;
  const isLastPage: boolean = launches.length >= launchAmount;

  useEffect(() => {
    if (filterValue === Launches.UPCOMING)
      window.scroll({ top: 0, behavior: 'smooth' });
    setNextPage(fetchDefaults.FIRST_PAGE);
    getLaunches(filterValue)(dispatch);
  }, [filterValue]);

  useEffect(() => {
    if (!launchListIsEmpty && !isLastPage)
      getLaunches(filterValue, nextPage)(dispatch);
  }, [nextPage]);

  if (!isLoading && launchListIsEmpty)
    return (
      <h2 className="launch-list-empty"> No launches for now.Try later.</h2>
    );

  return (
    <>
      {!launchListIsEmpty && (
        <div className="launch-container" ref={launchListRef}>
          <h1 className="launch-header">{filterValue} launches </h1>
          {isLoading && !isScrollLoading ? (
            <Loader isLarge={false} />
          ) : (
            <ul className="launch-list">
              {launches.map((launch: Launch) => (
                <LaunchListItem key={launch.id} launch={launch} />
              ))}
            </ul>
          )}
          {!isLoading && <div ref={loadMoreRef}></div>}
          {isLoading && isScrollLoading && <Loader isLarge={false} />}
        </div>
      )}
    </>
  );
};
