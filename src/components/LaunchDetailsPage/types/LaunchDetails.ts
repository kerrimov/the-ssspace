interface LaunchDetailName {
  name: string;
}

interface LaunchPad extends LaunchDetailName {
  location: LaunchDetailName;
}

export interface LaunchDetails {
  name: string;
  status: LaunchDetailName;
  net: string;
  launch_service_provider: LaunchDetailName;
  pad: LaunchPad;
  image: string;
}
