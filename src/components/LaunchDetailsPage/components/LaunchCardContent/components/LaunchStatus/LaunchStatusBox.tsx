import React, { useState } from 'react';
import { Popover } from '@mui/material';
import { LaunchStatus } from '@shared/api/types/Launch';
import './LaunchStatusBox.scss';

interface LaunchStatusProp {
  status: LaunchStatus;
}

export const LaunchStatusBox = ({ status }: LaunchStatusProp) => {
  const statusClass: string = status.abbrev.toLowerCase().split(' ').join('-');
  const statusCaption: string = status.abbrev.toUpperCase();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handlePopoverClose = () => setAnchorEl(null);

  return (
    <div
      className={`launch-status-box ${statusClass}`}
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {statusCaption}
      <Popover
        className="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="launch-status-popup">{status.description}</div>
      </Popover>
    </div>
  );
};
