import React, { useState } from 'react';
import {
  Fab,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  SxProps,
  Theme,
} from '@mui/material';
import {
  Accessibility as AccessibilityIcon,
  Contrast as ContrastIcon,
  TextFields as TextFieldsIcon,
  VolumeUp as VolumeUpIcon,
  Keyboard as KeyboardIcon,
} from '@mui/icons-material';

const fabStyles: SxProps<Theme> = {
  position: 'fixed',
  bottom: 16,
  left: 16,
  zIndex: 1000,
};

const AccessibilityMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
    handleClose();
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
    document.body.classList.toggle('large-text');
    handleClose();
  };

  const toggleScreenReader = () => {
    setScreenReader(!screenReader);
    // Implement screen reader functionality here
    handleClose();
  };

  return (
    <>
      <Tooltip title="נגישות">
        <Fab
          color="primary"
          aria-label="נגישות"
          onClick={handleClick}
          sx={fabStyles}
        >
          <AccessibilityIcon />
        </Fab>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={toggleHighContrast}>
          <ListItemIcon>
            <ContrastIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {highContrast ? 'כיבוי ניגודיות גבוהה' : 'הפעלת ניגודיות גבוהה'}
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={toggleLargeText}>
          <ListItemIcon>
            <TextFieldsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {largeText ? 'כיבוי טקסט מוגדל' : 'הפעלת טקסט מוגדל'}
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={toggleScreenReader}>
          <ListItemIcon>
            <VolumeUpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {screenReader ? 'כיבוי קריינות' : 'הפעלת קריינות'}
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <KeyboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>הנחיות מקלדת</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccessibilityMenu; 