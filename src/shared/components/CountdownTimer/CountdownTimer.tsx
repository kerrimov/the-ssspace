import React, { useState, useEffect } from 'react';
import { TimerList } from '../CountdownTimer/components/TimerList';
import { TimerTitle } from '../CountdownTimer/components/TimerTitle';
import { calculateTimerValues } from '../CountdownTimer/helpers/calculateTimerValues';
import './CountdownTimer.scss';

interface CountdownTimerProps {
  launchDate: string;
}

export const CountdownTimer = ({ launchDate }: CountdownTimerProps) => {
  const [timerValues, setTimerValues] = useState<Array<number>>([]);
  const [isLaunched, setIsLaunched] = useState<boolean>(false);
  const timeToLaunch: number = Date.parse(launchDate) - Number(new Date());

  const timerTick = (): NodeJS.Timeout =>
    setTimeout(() => {
      setTimerValues(calculateTimerValues(timeToLaunch));
    }, 1000);

  const timerCleanup = (timeoutId: NodeJS.Timeout) => {
    clearTimeout(timeoutId);
    if (timeToLaunch <= 0) setIsLaunched(true);
  };

  useEffect(() => {
    const timeoutId: NodeJS.Timeout = timerTick();
    return () => timerCleanup(timeoutId);
  });

  useEffect(() => {
    setTimerValues(calculateTimerValues(timeToLaunch));
  }, []);

  return (
    <div className="timer-container">
      {!isLaunched ? (
        <div>
          <TimerTitle text="Countdown to launch" />
          <TimerList timerValues={timerValues} />
        </div>
      ) : (
        <TimerTitle text="Launched" />
      )}
    </div>
  );
};
