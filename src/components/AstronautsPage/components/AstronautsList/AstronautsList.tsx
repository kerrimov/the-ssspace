import React from 'react';
import { AstronautsItem } from './components/AstronautsItem';
import type { Astronauts } from '../../types/Astronauts';

interface AstronautsList {
  astronauts: Astronauts;
}

export const AstronautsList = ({ astronauts }: AstronautsList) => {
  return (
    <ul>
      {astronauts.map(({ name, agency, image }: Astronauts, index: number) => (
        <li key={index}>
          <AstronautsItem name={name} agency={agency} image={image} />
        </li>
      ))}
    </ul>
  );
};
