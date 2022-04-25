import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

import type { Socials } from '../types/socials';
import { SocialsUrl } from '../types/socials';

export const socials: Socials[] = [
  { icon: Instagram, url: SocialsUrl.INSTAGRAM },
  { icon: LinkedIn, url: SocialsUrl.LINLEDIN },
  { icon: GitHub, url: SocialsUrl.GITHUB },
];
