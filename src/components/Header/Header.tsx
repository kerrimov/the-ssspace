import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { RoutesPath } from '../Routes/routesPath';
import { instagramUrl, linkedInUrl, gitHubUrl } from './socials';
import './Header.scss';

const pages = [
  { name: 'Home', url: RoutesPath.HOME },
  { name: 'Events', url: RoutesPath.EVENTS },
  { name: 'Agencies', url: RoutesPath.AGENCIES },
  { name: 'Astronauts', url: RoutesPath.ASTRONAUTS },
  { name: 'About', url: RoutesPath.ABOUT },
];

const socials = [
  { component: InstagramIcon, url: instagramUrl },
  { component: LinkedInIcon, url: linkedInUrl },
  { component: GitHubIcon, url: gitHubUrl },
];

export const Header = () => {
  return (
    <AppBar className="header" position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Box className="header-logo" component={Link} to={RoutesPath.HOME}>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
          </Box>
          <Box className="header-navigation" component="nav">
            {pages.map(({ name, url }) => (
              <Button
                className="header-navigation-item"
                key={url}
                variant="text"
                size="large"
                to={url}
                component={Link}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box className="header-socials">
            {socials.map(({ component: Component, url }) => (
              <Button
                className="header-socials-item"
                key={url}
                href={url}
                target="_blank"
              >
                <Component />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
