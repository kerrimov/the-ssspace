import { Times } from '../constants/times';

const calculateValue = (start: number, msec: number, module = 0): number =>
  Math.floor((start / msec) % (module || msec));

export const calculateTimerValues = (launchTime: number): number[] => [
  calculateValue(launchTime, Times.MILLISEC_IN_DAY),
  calculateValue(launchTime, Times.MILLISEC_IN_HOUR, Times.HOURS_IN_DAY),
  calculateValue(launchTime, Times.MILLISEC_IN_MIN, Times.MIN_IN_HOUR),
  calculateValue(launchTime, Times.MILLISEC_IN_SEC, Times.SEC_IN_MIN),
];
