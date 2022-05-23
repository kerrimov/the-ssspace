import React from 'react';
import { Typography } from '@mui/material';
import './Footer.scss';

export const Footer = () => {
  const fillFooter = (wordCount = 9) => {
    const footerText: Array<JSX.Element> = [];
    for (let i = 0; i < wordCount; i++) {
      footerText.push(
        <Typography
          className="footer-content"
          variant="body1"
          component="p"
          key={i}
        >
          Все буде Україна!
        </Typography>,
      );
    }
    return footerText;
  };

  return (
    <footer className="footer">
      <div className="footer-container">{fillFooter()}</div>
    </footer>
  );
};
