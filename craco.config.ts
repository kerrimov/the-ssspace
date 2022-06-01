import path from 'path';

export default {
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@styles': path.resolve(__dirname, 'src/shared/styles/'),
      '@components': path.resolve(__dirname, 'src/components/'),
    },
  },
};
