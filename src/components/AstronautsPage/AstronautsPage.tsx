import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
// import { useSelector } from 'react-redux';
import { AstronautsList } from './components/AstronautsList';
import { fetchAstronauts } from './api/services/getAstronauts';
// import { getAstronauts } from './selectors/selectors';
import type { Astronauts } from './types/Astronauts';
import './AstronautsPage.scss';

export const AstronautsPage = () => {
  // const astronauts: Astronauts = useSelector(getAstronauts);
  const [astronauts, setAstronauts] = useState<Astronauts[any]>([]);

  useEffect(() => {
    fetchAstronauts()
      .then(astronaut => {
        console.log('1st render');
        setAstronauts(astronaut);
      })
      .catch(error => error.message);
  }, []);

  return (
    <section className="astronauts-page">
      <Container maxWidth="xl">
        <h1 className="astronauts-header">Astronauts</h1>
        <AstronautsList astronauts={astronauts} />
      </Container>
    </section>
  );
};
