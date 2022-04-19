import React from 'react';
import './TimerItem.scss';

interface TimerItemProps {
  timerValue: number;
  timerCaption: string;
}
export const TimerItem = ({ timerValue, timerCaption }: TimerItemProps) => (
  <li className="timer-item">
    <span className="timer-value">{timerValue}</span>
    <span className="timer-caption">{timerCaption}</span>
  </li>
);
