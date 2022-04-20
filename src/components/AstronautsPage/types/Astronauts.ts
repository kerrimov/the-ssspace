interface AstronautsName {
  name: string;
}

export interface Astronauts extends AstronautsName {
  agency: AstronautsName;
  image: string;
}
