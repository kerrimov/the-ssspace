import { RoutesPath } from '../../Router/routesPath';
import { RoutesName, Page } from '../types/pages.type';

export const pages: Page[] = [
  { name: RoutesName.HOME, url: RoutesPath.HOME },
  { name: RoutesName.EVENTS, url: RoutesPath.EVENTS },
  { name: RoutesName.AGENCIES, url: RoutesPath.AGENCIES },
  { name: RoutesName.ASTRONAUTS, url: RoutesPath.ASTRONAUTS },
  { name: RoutesName.ABOUT, url: RoutesPath.ABOUT },
];
