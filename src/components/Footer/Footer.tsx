import React from 'react';
import { Typography } from '@mui/material';
import './Footer.scss';

export const Footer = () => {
  const footerText: Array<string> = [];
  for (let i = 0; i < 9; i++) {
    footerText.push('Все буде Україна!');
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        {footerText.map((text, index) => (
          <Typography
            className="footer-content"
            variant="body1"
            component="p"
            key={index}
          >
            {text}
          </Typography>
        ))}
      </div>
    </footer>
  );
};
