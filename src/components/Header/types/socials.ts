import { SvgIconComponent } from '@mui/icons-material';

export const enum SocialsUrl {
  INSTAGRAM = 'https://instagram.com/nasa',
  LINLEDIN = 'https://www.linkedin.com/company/softserve/',
  GITHUB = 'https://github.com/kerrimov/the-ssspace',
}

export interface Socials {
  icon: SvgIconComponent;
  url: SocialsUrl;
}
