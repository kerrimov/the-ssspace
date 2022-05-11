import React from 'react';
import { Typography } from '@mui/material';
import './Footer.scss';

export const Footer = () => {
  const footerText: Array<JSX.Element> = [];
  for (let i = 0; i < 9; i++) {
    footerText.push(
      <Typography className="footer-content" variant="body1" component="p">
        Все буде Україна!
      </Typography>,
    );
  }
  return (
    <footer className="footer">
      <div className="footer-container">{footerText}</div>
    </footer>
  );
};
