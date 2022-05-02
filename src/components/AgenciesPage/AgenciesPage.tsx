import React from 'react';
import { AgenciesList } from './components';
import './AgenciesPage.scss';

export const AgenciesPage = () => (
  <section className="agencies-page">
    <h1 className="agencies-header">Agencies</h1>
    <AgenciesList />
  </section>
);
