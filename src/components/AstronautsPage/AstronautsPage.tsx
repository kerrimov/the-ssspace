import React from 'react';
import { AstronautsList } from './components/AstronautsList';
import './AstronautsPage.scss';

export const AstronautsPage = () => (
  <section className="astronauts-page">
    <h1 className="astronauts-header">Astronauts</h1>
    <AstronautsList />
  </section>
);
