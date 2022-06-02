import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';
import { useParams, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { SecondaryButton } from '@shared/components/SecondaryButton';
import { ButtonSizes } from '@shared/components/SecondaryButton/types/secondaryButtonTypes';
import { Loader } from '@shared/components/Loader';
import { launchDetailsGetLaunchRequest } from './actions/launchDetailsAction';
import { LaunchCardContent } from './components/LaunchCardContent';
import { NotFoundPage } from '../NotFoundPage';
import { RoutesPath } from '../Router/routesPath';
import type {
  LaunchDetailsGetLaunchRequest,
  LaunchDetailsPageUrlParams,
  LaunchDetailsState,
} from './types/launchDetailesTypes';
import type { Dispatch } from 'redux';
import type { StoreState } from '../../store';
import './LaunchDetailsPage.scss';

interface LocationState {
  from: string;
}

export const LaunchDetailsPage = () => {
  let from: string | RoutesPath = RoutesPath.HOME;
  const state = useLocation().state as LocationState;
  if (state) from = state.from;

  const { id } = useParams<LaunchDetailsPageUrlParams>();
  const { isLoading, launch } = useSelector<StoreState, LaunchDetailsState>(
    state => state.launchDetails,
  );
  const dispatch = useDispatch<Dispatch<LaunchDetailsGetLaunchRequest>>();

  useEffect(() => {
    dispatch(launchDetailsGetLaunchRequest(id));
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return launch ? (
    <Container className="launch-details-page">
      <SecondaryButton
        caption="go back"
        path={from}
        buttonSize={ButtonSizes.LARGE}
      />
      <Card raised className="launch-details-card">
        <CardActionArea>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="launch-details-grid"
          >
            <Grid item xs={4} sm={3} md={4}>
              <CardMedia
                src={launch.image}
                alt={launch.name}
                component="img"
                className="card-media"
              />
            </Grid>
            <Grid item xs={4} sm={5} md={8} className="card-content">
              <LaunchCardContent launch={launch} />
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Container>
  ) : (
    <NotFoundPage />
  );
};
