import { RoutesPath } from '../../Router/routesPath';
import { RoutesName } from '../types/pages';
import type { Page } from '../types/pages';

export const pages: Page[] = [
  { name: RoutesName.HOME, url: RoutesPath.HOME },
  { name: RoutesName.EVENTS, url: RoutesPath.EVENTS },
  { name: RoutesName.AGENCIES, url: RoutesPath.AGENCIES },
  { name: RoutesName.ASTRONAUTS, url: RoutesPath.ASTRONAUTS },
  { name: RoutesName.ABOUT, url: RoutesPath.ABOUT },
];
