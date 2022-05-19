import React from 'react';
import { Container, Link } from '@mui/material';
import { RoutesPath } from '../Router/routesPath';
import './NotFoundPage.scss';

export const NotFoundPage = () => (
  <Container maxWidth="xl" className="notfound-page">
    <h1 className="notfound-page-header">Page not found</h1>
    <p className="notfound-page-404">404</p>
    <p className="notfound-page-info">Let&apos;s use another try.</p>
    <Link className="notfound-page-button" href={RoutesPath.HOME}>
      Home page
    </Link>
  </Container>
);
