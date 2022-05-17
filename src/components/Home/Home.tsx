import React from 'react';
import { Outlet } from 'react-router-dom';
import { LaunchFilter } from '../LaunchFilter/LaunchFilter';
import { Slider } from '../Slider';
import './Home.scss';

export const Home = () => (
  <div className="home-container">
    <LaunchFilter />
    <div className="home-inner-container">
      <Slider />
      <Outlet />
    </div>
  </div>
);
