import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getLaunches } from './actions/getLaunches';
import { Launches } from './constants/launches';
import { LaunchFilter } from './components/LaunchFilter/LaunchFilter';
import { Slider } from '../Slider';
import type { LaunchAction } from './types/LaunchActions';
import type { Dispatch } from 'redux';
import './Home.scss';

export const Home = () => {
  const dispatch: Dispatch<LaunchAction> = useDispatch();

  useEffect(() => {
    getLaunches(Launches.UPCOMING)(dispatch);
    getLaunches(Launches.PREVIOUS)(dispatch);
  }, []);

  return (
    <div className="home-container">
      <LaunchFilter />
      <div className="home-inner-container">
        <Slider />
        <Outlet />
      </div>
    </div>
  );
};
