import React, { useState, useEffect } from 'react';
import { TimerList } from './components/TimerList';
import { TimerTitle } from './components/TimerTitle';
import './CountdownTimer.scss';

interface CountdownTimerProps {
  launchDate: number;
}

type CalcTimerValueFn = (
  setFunc: (value: number) => void,
  divider: number,
  module?: number,
) => void;

type CalculateValuesFn = () => void;

const MILLISEC_IN_DAY = 1000 * 60 * 60 * 24;
const MILLISEC_IN_HOUR = 1000 * 60 * 60;
const MILLISEC_IN_MIN = 1000 * 60;
const MILLISEC_IN_SEC = 1000;
const HOURS_IN_DAY = 24;
const MIN_IN_HOUR = 60;
const SEC_IN_MIN = 60;

export const CountdownTimer = ({ launchDate }: CountdownTimerProps) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isLaunched, setIsLaunched] = useState<boolean>(false);
  const timeToLaunch = launchDate - Number(new Date());

  const calcTimerValue: CalcTimerValueFn = (setFunc, divider, module = 0) => {
    setFunc(Math.floor((timeToLaunch / divider) % (module || divider)));
  };

  const calculateValues: CalculateValuesFn = () => {
    calcTimerValue(setDays, MILLISEC_IN_DAY);
    calcTimerValue(setHours, MILLISEC_IN_HOUR, HOURS_IN_DAY);
    calcTimerValue(setMinutes, MILLISEC_IN_MIN, MIN_IN_HOUR);
    calcTimerValue(setSeconds, MILLISEC_IN_SEC, SEC_IN_MIN);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (timeToLaunch > 0) timeoutId = setTimeout(calculateValues, 1000);
    else setIsLaunched(true);
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
