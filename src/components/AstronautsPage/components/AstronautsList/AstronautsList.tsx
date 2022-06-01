import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Loader } from '@shared/components/Loader';
import { AstronautsItem } from './components/AstronautsItem';
import { FetchAstronautsActions } from '../../types/Astronauts';
import { getAstronautsData } from '../../api/services/getAstronautsData';
import { selectAstronauts } from '../../selectors/astronautsSelectors';
import { setCurrentPage } from '../../actions/actionCreators';
import { Paginator } from '@shared/components/Paginator/Paginator';
import { fetchDefaults } from '@shared/api/constants/fetchDefaults';
import type { Dispatch } from 'redux';
import type { Astronauts, PageParams } from '../../types/Astronauts';
import type { ErrorAlertToggle } from '@shared/components/ErrorAlert/types/errorAlertTypes';
import './AstronautsList.scss';

export const AstronautsList = () => {
  const dispatch =
    useDispatch<Dispatch<FetchAstronautsActions | ErrorAlertToggle>>();
  const { astronauts, isLoading, currentPage, totalPageCount } =
    selectAstronauts();
  const { page = fetchDefaults.FIRST_PAGE } = useParams<PageParams>();

  useEffect(() => {
    dispatch(setCurrentPage(Number(page)));
    getAstronautsData(fetchDefaults.LIMIT, Number(page))(dispatch);
  }, [page]);

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
      <Paginator
        totalPageCount={totalPageCount}
        limitPerPage={fetchDefaults.LIMIT}
        currentPage={currentPage}
      />
    </>
  );
};
