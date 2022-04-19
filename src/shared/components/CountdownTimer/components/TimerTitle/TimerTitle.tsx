import React from 'react';
import './TimerTitle.scss';

interface TitleProps {
  text: string;
}

export const TimerTitle = ({ text }: TitleProps) => (
  <h5 className="timer-title">{text}</h5>
);
