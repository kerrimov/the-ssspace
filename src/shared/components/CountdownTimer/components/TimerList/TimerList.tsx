import React from 'react';
import { TimerItem } from './components/TimerItem';
import { periods } from '../../constants/periods';
import './TimerList.scss';

interface TimerListProps {
  timerValues: number[];
}

export const TimerList = ({ timerValues }: TimerListProps) => (
  <ul className="timer-list">
    {timerValues.map((timerValue: number, index: number) => (
      <TimerItem
        timerValue={timerValue}
        timerCaption={periods[index]}
        key={index}
      />
    ))}
  </ul>
);
