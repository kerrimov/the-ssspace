interface LaunchDetailName {
  name: string;
}

interface LaunchPad extends LaunchDetailName {
  location: LaunchDetailName;
}

export interface Launch {
  id: string;
  name: string;
  status: LaunchDetailName;
  net: string;
  launch_service_provider: LaunchDetailName;
  pad: LaunchPad;
  image: string;
}
