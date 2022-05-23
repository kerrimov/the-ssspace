export interface FetchLaunchConfig {
  url?: string;
  params?: {
    limit: number;
    is_crewed?: boolean;
    location__ids?: string;
  };
}
