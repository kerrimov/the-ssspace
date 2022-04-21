import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { NavigationList } from './components/NavigationList';
import { Logo } from './components/Logo';
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
