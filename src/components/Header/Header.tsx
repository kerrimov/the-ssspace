import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { RoutesPath } from '../Routes/routesPath';
import { instagramUrl, linkedInUrl, gitHubUrl } from './constants';
import './Header.scss';

const pages = [
  { name: 'Home', url: RoutesPath.HOME },
  { name: 'Events', url: RoutesPath.EVENTS },
  { name: 'Agencies', url: RoutesPath.AGENCIES },
  { name: 'Astronauts', url: RoutesPath.ASTRONAUTS },
  { name: 'About', url: RoutesPath.ABOUT },
];

const socialNetworks = [
  { component: InstagramIcon, url: instagramUrl },
  { component: LinkedInIcon, url: linkedInUrl },
  { component: GitHubIcon, url: gitHubUrl },
];

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Box className="logo" component={Link} to={RoutesPath.HOME}>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
          </Box>
          <Box className="navPages" component="nav">
            {pages.map(({ name, url }) => (
              <Button
                className="navPage"
                key={url}
                variant="text"
                size="large"
                sx={{ color: 'primary.contrastText' }}
                to={url}
                component={Link}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box className="socialNetworks">
            {socialNetworks.map(({ component: Component, url }) => (
              <Button
                className="socialNetwork"
                key={url}
                sx={{ color: 'primary.contrastText' }}
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
