import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';

import { Logo } from './components/Logo';
import { NavigationList } from './components/NavigationList';
import { SocialsList } from './components/SocialsList';

export const Header = () => {
  return (
    <AppBar className="header" position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Logo />
          <NavigationList />
          <SocialsList />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
