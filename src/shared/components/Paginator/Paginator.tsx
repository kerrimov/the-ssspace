import React from 'react';
import { Pagination } from '@mui/material';
import './Paginator.scss';

interface PaginatorProps {
  totalPageCount: number;
  limitPerPage: number;
  currentPage: number;
  changeHandler: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const Paginator = (props: PaginatorProps) => {
  const { totalPageCount, limitPerPage, currentPage, changeHandler } = props;
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
      onChange={changeHandler}
    />
  );
};
