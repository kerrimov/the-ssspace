export interface FetchLaunchConfigParams {
  limit: number;
  offset?: number;
  is_crewed?: boolean;
  location__ids?: string;
}

export interface FetchLaunchConfig {
  url?: string;
  params?: FetchLaunchConfigParams;
}
