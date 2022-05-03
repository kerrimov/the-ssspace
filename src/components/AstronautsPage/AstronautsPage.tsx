import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AstronautsList } from './components/AstronautsList';
import { fetchAstronauts } from './api/services/getAstronauts';
import { getAstronauts } from './selectors/selectors';
import type { Astronauts } from './types/Astronauts';
import './AstronautsPage.scss';

export const AstronautsPage = () => {
  const astronauts: Astronauts = useSelector(getAstronauts);

  // useEffect(() => {
  //   fetchAstronauts()
  //     .then(astronaut => {
  //       setAstronauts(astronaut);
  //     })
  //     .catch(error => error.message);
  // }, []);

  return (
    <section className="astronauts-page">
      <h1 className="astronauts-header">Astronauts</h1>
      <AstronautsList astronauts={astronauts} />
    </section>
  );
};
