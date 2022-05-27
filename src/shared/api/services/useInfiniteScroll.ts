import { useEffect, useRef, useState } from 'react';
import type { RefObject, Dispatch, SetStateAction } from 'react';
import { fetchDefaults } from '../constants/fetchDefaults';

export interface InfiniteScrollValues {
  loadMoreRef: RefObject<HTMLDivElement>;
  nextPage: number;
  setNextPage: Dispatch<SetStateAction<number>>;
}

export const useInfiniteScroll = () => {
  const [nextPage, setNextPage] = useState<number>(fetchDefaults.FIRST_PAGE);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const observerOptions: IntersectionObserverInit = {
    rootMargin: '0px',
    threshold: 0,
  };

  const handleObserver: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
  ) => {
    const [target] = <Array<IntersectionObserverEntry>>entries;
    if (target.isIntersecting) setNextPage((prevPage: number) => prevPage + 1);
  };

  const observer = new IntersectionObserver(handleObserver, observerOptions);

  useEffect(() => {
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);

  return { loadMoreRef, nextPage, setNextPage };
};
