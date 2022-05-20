import React from 'react';
import { Container, Link } from '@mui/material';
import { RoutesPath } from '../Router/routesPath';
import './NotFoundPage.scss';

export const NotFoundPage = () => (
  <Container maxWidth="xl" className="not-found-page">
    <h1 className="not-found-page-header">Page not found</h1>
    <p className="not-found-page-404">404</p>
    <p className="not-found-page-info">Let&apos;s use another try.</p>
    <Link className="not-found-page-button" href={RoutesPath.HOME}>
      Home page
    </Link>
  </Container>
);
