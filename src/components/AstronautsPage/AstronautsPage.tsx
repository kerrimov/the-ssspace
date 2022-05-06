import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getAstronautsData } from './api/services/getAstronautsData';
import { AstronautsList } from './components/AstronautsList';
import { FetchAstronautsActions } from './types/Astronauts';
import type { Dispatch } from 'redux';
import './AstronautsPage.scss';

export const AstronautsPage = () => {
  const dispatch = useDispatch<Dispatch<FetchAstronautsActions>>();

  useEffect(() => {
    getAstronautsData()(dispatch);
  }, []);

  return (
    <Container maxWidth="xl">
      <h1 className="astronauts-header">Astronauts</h1>
      <AstronautsList />
    </Container>
  );
};
