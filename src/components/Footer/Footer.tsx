import React from 'react';
import { Typography } from '@mui/material';
import { footerText } from './mocks/content';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {footerText.map((textItem, index) => (
        <Typography
          className="footer-content"
          key={index}
          variant="body1"
          component="p"
        >
          {textItem}
        </Typography>
      ))}
    </div>
  </footer>
);
