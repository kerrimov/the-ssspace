import { RoutesPath } from '../../Router/routesPath';
export const enum RoutesName {
  HOME = 'Home',
  EVENTS = 'Events',
  AGENCIES = 'Agencies',
  ASTRONAUTS = 'Astronauts',
  ABOUT = 'About',
}

export interface Page {
  name: RoutesName;
  url: RoutesPath;
}
