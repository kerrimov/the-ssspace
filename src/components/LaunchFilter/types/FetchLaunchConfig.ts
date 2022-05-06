export interface FetchLaunchConfig {
  url?: string;
  params?: {
    is__crewed?: boolean;
    location__ids?: string;
  };
}
