import {
  Instagram,
  LinkedIn,
  GitHub,
  SvgIconComponent,
} from '@mui/icons-material';

export const enum SocialsUrl {
  INSTAGRAM = 'https://instagram.com/nasa',
  LINLEDIN = 'https://www.linkedin.com/company/softserve/',
  GITHUB = 'https://github.com/kerrimov/the-ssspace',
}

interface Socials {
  icon: SvgIconComponent;
  url: SocialsUrl;
}

export const socials: Socials[] = [
  { icon: Instagram, url: SocialsUrl.INSTAGRAM },
  { icon: LinkedIn, url: SocialsUrl.LINLEDIN },
  { icon: GitHub, url: SocialsUrl.GITHUB },
];
