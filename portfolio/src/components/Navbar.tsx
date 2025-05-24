import React, { useState, useEffect, ReactElement } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  SxProps,
  Theme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { styled } from '@mui/material';

const MenuBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

interface Props {
  window?: () => Window;
  children: ReactElement;
}

const HideOnScroll: React.FC<Props> = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { text: 'בית', href: '#home' },
    { text: 'אודות', href: '#about' },
    { text: 'עבודות', href: '#projects' },
    { text: 'שירותים', href: '#services' },
    { text: 'צור קשר', href: '#contact' },
  ];

  const appBarStyles: SxProps<Theme> = {
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    boxShadow: scrolled ? 1 : 0,
    transition: 'all 0.3s ease-in-out',
  };

  const buttonStyles: SxProps<Theme> = {
    mx: 1,
    color: scrolled ? 'text.primary' : 'white',
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          component="a"
          href={item.href}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" sx={appBarStyles}>
          <Toolbar>
            <MenuBox>
              {menuItems.map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="inherit"
                    href={item.href}
                    sx={buttonStyles}
                  >
                    {item.text}
                  </Button>
                </motion.div>
              ))}
            </MenuBox>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 