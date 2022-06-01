import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutesPath } from '@components/Router/routesPath';
import './Paginator.scss';

interface PaginatorProps {
  totalPageCount: number;
  limitPerPage: number;
  currentPage: number;
}

export const Paginator = (props: PaginatorProps) => {
  const { totalPageCount, limitPerPage, currentPage } = props;
  const pageCount: number = Math.ceil(totalPageCount / limitPerPage);

  return (
    <Pagination
      className="paginator"
      color="primary"
      size="large"
      variant="outlined"
      shape="rounded"
      siblingCount={2}
      boundaryCount={2}
      count={pageCount}
      page={currentPage}
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={`${RoutesPath.ASTRONAUTS}/${item.page}`}
          {...item}
        />
      )}
    />
  );
};
