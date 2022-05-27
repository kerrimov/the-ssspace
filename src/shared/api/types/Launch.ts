interface LaunchDetailName {
  name: string;
}

interface LaunchPad extends LaunchDetailName {
  location: LaunchDetailName;
}

interface LaunchMission {
  description: string;
}

export interface LaunchStatus extends LaunchDetailName {
  id: number;
  abbrev: string;
  description: string;
}

export interface Launch {
  id: string;
  name: string;
  status: LaunchStatus;
  net: string;
  launch_service_provider: LaunchDetailName;
  pad: LaunchPad;
  image: string;
  mission: LaunchMission;
}
