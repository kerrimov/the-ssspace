import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { NavigationList } from './components/NavigationList';
import { SocialsList } from './components/SocialsList';
import { Logo } from './components/Logo';

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
