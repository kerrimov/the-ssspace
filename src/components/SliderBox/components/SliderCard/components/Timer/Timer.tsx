import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import './Timer.scss';

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
      const difference: number = Date.parse(date) - Number(new Date());
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      } else {
        setIsLaunched(true);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box className="slider-timer-container">
      {isLaunched ? (
        <Box className="slider-timer-container">
          <Typography variant="body1" component="div" align="center">
            Launched
          </Typography>
        </Box>
      ) : (
        <Box className="slider-timer-container">
          <Typography variant="h6" component="div" align="center">
            Days: <br /> {days}
          </Typography>
          <Typography variant="h6" component="div" align="center">
            Hours: <br /> {hours}
          </Typography>
          <Typography variant="h6" component="div" align="center">
            Minutes: <br /> {minutes}
          </Typography>
          <Typography variant="h6" component="div" align="center">
            Seconds: <br /> {seconds}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Timer;
