import React from 'react';
import { TimerItem } from './components/TimerItem';
import './TimerList.scss';

interface TimerListProps {
  values: number[];
}
export const TimerList = ({ values }: TimerListProps) => {
  const timerItems = ['days', 'hours', 'minutes', 'seconds'].map((el, i) => {
    return { value: values[i], caption: el };
  });
  return (
    <ul className="timer-list">
      {timerItems.map((el, i) => (
        <TimerItem item={el} key={i} />
      ))}
    </ul>
  );
};
