interface AstronautsName {
  name: string;
}

export interface Astronauts extends AstronautsName {
  [x: string]: any;
  agency: AstronautsName;
  image: string;
}
