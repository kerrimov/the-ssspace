import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { LaunchFilter } from './components/LaunchFilter/LaunchFilter';
import { Slider } from '../Slider';
import './Home.scss';

export const Home = () => {
  const launchListRef = useRef<HTMLElement>(null);

  return (
    <div className="home-container">
      <LaunchFilter launchListRef={launchListRef} />
      <div className="home-inner-container">
        <Slider />
        <Outlet context={launchListRef} />
      </div>
    </div>
  );
};
