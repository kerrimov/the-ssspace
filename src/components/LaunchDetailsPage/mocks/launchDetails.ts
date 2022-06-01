import type { Launch } from '@shared/api/types/Launch';

export const launchDetails: Launch = {
  id: '0bc91464-1d61-4545-95c8-01040dc5eec9',
  name: 'Long March 4B (?) | SJ-6 Group 06 (?)',
  status: {
    id: 2,
    name: 'To Be Determined',
    abbrev: 'TBD',
    description:
      'Current date is a placeholder or rough estimation based on unreliable or interpreted sources.',
  },
  net: '2022-05-07T07:45:00Z',
  launch_service_provider: {
    name: 'China Aerospace Science and Technology Corporation',
  },
  pad: {
    name: 'Launch Area 4 (SLS-2 / 603)',
    location: {
      name: 'Jiuquan, Peoples Republic of China',
    },
  },
  image:
    'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/long2520march25204_image_20190430065008.jpg',
  mission: {
    description: '',
  },
};
