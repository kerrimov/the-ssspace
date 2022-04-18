import React from 'react';
import './Router.scss';

export const Router: React.FC = ({ children }) => (
  <div className="router-elements-wrapper">{children}</div>
);
