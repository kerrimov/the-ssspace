import React from 'react';
import './TimerTitle.scss';

interface TitleProps {
  text: string;
}

export const TimerTitle = ({ text }: TitleProps) => {
  return <h5 className="timer-title">{text}</h5>;
};
