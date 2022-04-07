import React, { useState, useEffect } from 'react';

interface ICountdownTimerProps {
  launchDate: number;
}

function CountdownTimer({ launchDate }: ICountdownTimerProps) {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isLaunched, setIsLaunched] = useState<boolean>(false);

  const intervalId = setInterval(() => {
    const difference: number = launchDate - Number(new Date());
    if (difference > 0) {
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / 1000 / 60) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    } else {
      setIsLaunched(true);
    }
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  });

  return !isLaunched ? (
    <p>{`Time left: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`}</p>
  ) : (
    <p>Launched</p>
  );
}

export default CountdownTimer;
