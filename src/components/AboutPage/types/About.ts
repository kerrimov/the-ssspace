import { SvgIconComponent } from '@mui/icons-material';

export interface AboutContacts {
  icon: SvgIconComponent;
  url: string;
}

export interface About {
  name: string;
  position: string;
  contacts: Array<AboutContacts>;
  description: string;
  profile_image: string;
}
