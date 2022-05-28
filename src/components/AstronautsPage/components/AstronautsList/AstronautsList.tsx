import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Pagination } from '@mui/material';
import { AstronautsItem } from './components/AstronautsItem';
import { FetchAstronautsActions } from '../../types/Astronauts';
import { getAstronautsData } from '../../api/services/getAstronautsData';
import { selectAstronauts } from '../../selectors/astronautsSelectors';
import { Loader } from '../../../../shared/components/Loader';
import { setCurrentPage } from '../../actions/actionCreators';
import type { Dispatch } from 'redux';
import type { Astronauts } from '../../types/Astronauts';
import type { ErrorAlertToggle } from '../../../../shared/components/ErrorAlert/types/errorAlertTypes';
import './AstronautsList.scss';

export const AstronautsList = () => {
  const dispatch =
    useDispatch<Dispatch<FetchAstronautsActions | ErrorAlertToggle>>();
  const { astronauts, isLoading, currentPage, totalPageCount } =
    selectAstronauts();
  const limitPerPage = 12;
  const pageCount: number = Math.ceil(totalPageCount / limitPerPage);

  useEffect(() => {
    getAstronautsData(limitPerPage, 0)(dispatch);
  }, [limitPerPage]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number): void => {
    dispatch(setCurrentPage(value));
    if (value > 1) {
      getAstronautsData(limitPerPage, (value - 1) * 12)(dispatch);
    } else {
      getAstronautsData(limitPerPage, 0)(dispatch);
    }
  };

  if (isLoading) return <Loader />;

  if (!astronauts.length)
    return (
      <h2 className="astronauts-list-empty">
        No astronauts for now. Try later.
      </h2>
    );

  return (
    <>
      <Grid container>
        {astronauts.map(
          ({ name, agency, profile_image }: Astronauts, index: number) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <AstronautsItem
                key={index}
                name={name}
                agency={agency}
                profile_image={profile_image}
              />
            </Grid>
          ),
        )}
      </Grid>
      <Pagination
        className="astronauts-list-paginator"
        color="primary"
        size="large"
        variant="outlined"
        shape="rounded"
        siblingCount={2}
        boundaryCount={2}
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
      />
    </>
  );
};
