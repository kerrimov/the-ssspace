import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { NavigationList } from './NavigationList';
import { Logo } from './Logo';
import { SocialsList } from './SocialsList';

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
