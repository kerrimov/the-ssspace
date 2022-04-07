import React from 'react';
import './TimerItem.scss';

interface TimerItemProps {
  item: {
    value: number;
    caption: string;
  };
}
export const TimerItem = ({ item }: TimerItemProps) => {
  const { value, caption } = item;
  return (
    <li className="timer-item">
      <span className="timer-value">{value}</span>
      <span className="timer-caption">{caption}</span>
    </li>
  );
};
