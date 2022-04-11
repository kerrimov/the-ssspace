import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  homeUrl,
  eventsUrl,
  agenciesUrl,
  astronautsUrl,
  aboutUrl,
} from '../../routes/constants';
import { instagramUrl, linkedInUrl, gitHubUrl } from './constants';
import './Header.scss';

const pages = [
  { name: 'Home', url: homeUrl },
  { name: 'Events', url: eventsUrl },
  { name: 'Agencies', url: agenciesUrl },
  { name: 'Astronauts', url: astronautsUrl },
  { name: 'About', url: aboutUrl },
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
          <Box className="logo" component={Link} to={homeUrl}>
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
