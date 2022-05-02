import React, { useState, useEffect } from 'react';
import { AstronautsList } from './components/AstronautsList';
import { fetchAstronauts } from './api/services/getAstronauts';
import './AstronautsPage.scss';

export const AstronautsPage = () => {
  // const [astronauts, setAstronauts] = useState();

  useEffect(() => {
    fetchAstronauts()
      .then(astronaut => {
        console.log(astronaut);
      })
      .catch(error => error.message);
  }, []);

  return (
    <section className="astronauts-page">
      <h1 className="astronauts-header">Astronauts</h1>
      <AstronautsList />
    </section>
  );
};
