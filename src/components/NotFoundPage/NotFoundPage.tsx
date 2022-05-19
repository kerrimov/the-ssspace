import React from 'react';
import { Link } from '@mui/material';
import './NotFoundPage.scss';

export const NotFoundPage = () => (
  <section className="notfound-page">
    <h1 className="notfound-page-header">Page not found</h1>
    <p className="notfound-page-404">404</p>
    <p className="notfound-page-info">Let&apos;s use another try.</p>
    <Link className="notfound-page-button" href="/">
      Home page
    </Link>
  </section>
);

export default NotFoundPage;
