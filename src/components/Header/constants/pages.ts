import { RoutesPath } from '../../Router/routesPath';

const enum RoutesName {
  HOME = 'Home',
  EVENTS = 'Events',
  AGENCIES = 'Agencies',
  ASTRONAUTS = 'Astronauts',
  ABOUT = 'About',
}

interface Page {
  name: RoutesName;
  url: RoutesPath;
}

export const pages: Page[] = [
  { name: RoutesName.HOME, url: RoutesPath.HOME },
  { name: RoutesName.EVENTS, url: RoutesPath.EVENTS },
  { name: RoutesName.AGENCIES, url: RoutesPath.AGENCIES },
  { name: RoutesName.ASTRONAUTS, url: RoutesPath.ASTRONAUTS },
  { name: RoutesName.ABOUT, url: RoutesPath.ABOUT },
];
