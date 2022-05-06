export interface Agency {
  id: number;
  name: string;
  type: string;
  administrator: string;
  country_code: string;
  launchers: string;
  image_url: string;
  spacecraft?: string;
  [key: string]: string | undefined | number;
}

export type AgenciesSpecification = Omit<Agency, 'image_url' | 'name'>;

export interface SpecificationTableProps {
  specifications: AgenciesSpecification;
}

export interface AgenciesItemProps {
  agency: Agency;
}
