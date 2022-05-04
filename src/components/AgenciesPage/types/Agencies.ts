interface AgenciesName {
  name: string;
}

export interface Agencies extends AgenciesName {
  id: number;
  type: string;
  administrator: string;
  country_code: string;
  launchers: string;
  image: string;
  spacecraft?: string;
  [key: string]: string | undefined | number;
}

export type AgenciesSpecification = Omit<Agencies, 'image'>;

export interface SpecificationTableProps {
  specifications: AgenciesSpecification;
}

export interface AgenciesItemProps {
  agency: Agencies;
}
