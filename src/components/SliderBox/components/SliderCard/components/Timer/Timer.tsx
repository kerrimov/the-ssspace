import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

type timerProps = {
  date: string;
};

const Timer = ({ date }: timerProps) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isLaunched, setIsLaunched] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const differnce: number = Date.parse(date) - Number(new Date());
      if (differnce > 0) {
        setDays(Math.floor(differnce / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        setMinutes(Math.floor((differnce % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((differnce % (1000 * 60)) / 1000));
      } else {
        setIsLaunched(true);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {isLaunched ? (
        'Launched'
      ) : (
        <Box>
          Days - {days}
          Hours - {hours}
          minutes - {minutes}
          Seconds - {seconds}
        </Box>
      )}
    </div>
  );
};

export default Timer;
