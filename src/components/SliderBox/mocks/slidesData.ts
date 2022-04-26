import type { Slides } from '../types/sliderTypes';

export const slides: Array<Slides> = [
  {
    name: 'Upcoming',
    date: '2022-04-13T19:28:34Z',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg',
  },
  {
    name: 'After Upcoming',
    date: '2022-05-05T19:28:34Z',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Soyuz_TMA-06M_rocket_launches_from_Baikonur_1.jpg',
  },
  {
    name: 'Previous',
    date: '2022-04-06T19:28:34Z',
    imageURL:
      'data:image/jpeg;base64,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',
  },
];
