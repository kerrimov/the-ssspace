import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import type { About } from '../types/About';

export const aboutData: Array<About> = [
  {
    name: 'Togrul Kerrimov',
    position: 'Team Lead',
    contacts: [
      {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/in/togrul-kerimov-391659175/',
      },
      { icon: GitHub, url: 'https://github.com/kerrimov' },
    ],
    description:
      'Likes to work with a cool team, gives good advice, has the ability to develop the weaknesses of the team members and turn them into strengths.',
    profile_image: process.env.PUBLIC_URL + '/tk_photo.jpg',
  },
  {
    name: 'Vladyslav Khrychov',
    position: 'Team mentor',
    contacts: [
      {
        icon: Instagram,
        url: 'https://www.instagram.com/vlad_khrychov/',
      },
      { icon: GitHub, url: 'https://github.com/vlad-khrychov' },
    ],
    description:
      'Mentor of the SoftServe IT Academy. In addition, postgraduate student of the Department of Theoretical Radiophysics of V.N.Karazin Kharkiv National University, Junior Researcher, Senior Teacher.',
    profile_image: process.env.PUBLIC_URL + '/vkh_photo.jpg',
  },
  {
    name: 'Alexandra Shevchenko',
    position: 'Front-end developer',
    contacts: [
      {
        icon: Instagram,
        url: 'https://instagram.com/aleksandra05sh?igshid=YmMyMTA2M2Y=',
      },
      {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/in/oleksandra-shevchenko-b2330122a/',
      },
      { icon: GitHub, url: 'https://github.com/Aleksandra05sh' },
    ],
    description:
      'Likes clean, neat code so that everything is structured. Likes to dig into the details.',
    profile_image: process.env.PUBLIC_URL + '/ash_photo.jpg',
  },
  {
    name: 'Volodymyr Klochan',
    position: 'Front-end developer',
    contacts: [
      { icon: LinkedIn, url: 'https://www.linkedin.com/in/vklochan/' },
      { icon: GitHub, url: 'https://github.com/vovkis13' },
    ],
    description: 'Likes to code, but prefer to think',
    profile_image: process.env.PUBLIC_URL + '/vk_photo.jpg',
  },
  {
    name: 'Dmytro Kvasov',
    position: 'Front-end developer',
    contacts: [
      { icon: Instagram, url: 'https://www.instagram.com/dmkv44/' },
      {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/in/dima-kvasov-1b6332176/',
      },
      { icon: GitHub, url: 'https://github.com/PietyE' },
    ],
    description:
      'Beginner Front End Developer. Loves to put everything he learns into practice. Very important thing for him is teamwork , the ability to express him thoughts and receive new information from more experienced people.',
    profile_image: process.env.PUBLIC_URL + '/dk_photo.jpg',
  },
  {
    name: 'Oleksandr Herasymenko',
    position: 'Front-end developer',
    contacts: [
      { icon: Instagram, url: 'https://www.instagram.com/arttops/' },
      {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/in/alexandr-herasymenko-8409a013b/',
      },
      { icon: GitHub, url: 'https://github.com/topsart' },
    ],
    description:
      'He likes programming and creating websites so much that he is ready to watch all the Hindus video tutorials on Youtube. Doesn`t like to do boring and monotonous work, so he can automate everything to work by its own.',
    profile_image: process.env.PUBLIC_URL + '/ag_photo.jpg',
  },
];
