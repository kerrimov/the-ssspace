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

export type AgencyItemContent = Omit<Agency, 'id' | 'image_url'>;
export type AgenciesSpecification = Omit<Agency, 'id' | 'image_url' | 'name'>;
