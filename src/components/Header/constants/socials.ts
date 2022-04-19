import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';

export const enum SocialsUrl {
  INSTAGRAM = 'http://instagram.com/nasa',
  LINLEDIN = 'https://www.linkedin.com/company/softserve/',
  GITHUB = 'https://github.com/kerrimov/the-ssspace',
}

export const socials = [
  { icon: Instagram, url: SocialsUrl.INSTAGRAM },
  { icon: LinkedIn, url: SocialsUrl.LINLEDIN },
  { icon: GitHub, url: SocialsUrl.GITHUB },
];
