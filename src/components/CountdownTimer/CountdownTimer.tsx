import React, { useState, useEffect } from 'react';
import { TimerList } from './components/TimerList';
import { TimerTitle } from './components/TimerTitle';
import './CountdownTimer.scss';

interface CountdownTimerProps {
  launchDate: number;
}

export const CountdownTimer = ({ launchDate }: CountdownTimerProps) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isLaunched, setIsLaunched] = useState<boolean>(false);

  const calculateValues = () => {
    const difference: number = launchDate - Number(new Date());
    if (difference > 0) {
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / 1000 / 60) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    } else {
      setIsLaunched(true);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(calculateValues, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <div className="timer-container">
      {!isLaunched ? (
        <div>
          <TimerTitle text="Countdown to launch" />
          <TimerList values={[days, hours, minutes, seconds]} />
        </div>
      ) : (
        <TimerTitle text="Launched" />
      )}
    </div>
  );
};
