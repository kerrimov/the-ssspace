interface AgenciesName {
  name: string;
}

export interface Agencies extends AgenciesName {
  type: string;
  administrator: string;
  country_code: string;
  launchers: string;
  image: string;
  spacecraft?: string;
  [key: string]: string | undefined;
}

export type AgenciesSpecification = Omit<Agencies, 'image'>;

export interface SpecificationTableProps {
  specifications: AgenciesSpecification;
}
